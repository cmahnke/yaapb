import $ from 'jquery';

window.$ = window.jQuery = $;

require('jquery-ui-dist/jquery-ui');
require('jquery-pjax');

import * as bootstrap from 'bootstrap';
import lightGallery from 'lightgallery';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import Spinner from 'spin';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

// ─── Config ───────────────────────────────────────────────────────────────────

const CONFIG = {
    IMAGES_LOADED_TIMEOUT: 2000,
    MASONRY: {
        itemSelector: '.post',
        columnWidth:  '.post',
        percentPosition: true,
        gutter: 10,
        transitionDuration: '0.2s'
    },
    CAROUSEL: {
        interval: false,
        wrap: true,
        touch: true
    },
    FEATURES_LIMIT: 6,
    LIGHTGALLERY_DELAY: 50
};

// ─── Fehler Handler ──────────────────────────────────────────────────────────

window.addEventListener('error', function(e) {
    if (!e) return;
    const isImagesLoadedError =
        (e.message && e.message.indexOf('nodeName') !== -1) ||
        (e.filename && e.filename.indexOf('imagesloaded') !== -1);

    if (isImagesLoadedError) {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.warn('imagesLoaded race condition abgefangen');
        return false;
    }
}, true);

window.addEventListener('unhandledrejection', function(e) {
    if (e.reason && e.reason.message &&
        e.reason.message.indexOf('nodeName') !== -1) {
        e.preventDefault();
        console.warn('imagesLoaded Promise Fehler abgefangen');
    }
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

const supports = {
    csstransforms: typeof document.createElement('div').style.transform !== 'undefined',
    touch: ('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0)
};

const tagURLPrefix = '/tags';
let masonryInstance = null;

function safeImagesLoaded(element, callback) {
    try {
        const el = element instanceof $ ? element[0] : element;

        if (!el || !el.nodeType || !document.body.contains(el)) {
            return callback && callback();
        }

        Array.from(el.querySelectorAll('img')).forEach(function(img) {
            if (!img.src ||
                img.src === '' ||
                img.src === window.location.href ||
                img.src === window.location.origin + '/') {
                try { img.remove(); } catch(e) {}
            }
        });

        if (!document.body.contains(el)) {
            return callback && callback();
        }

        if (el.querySelectorAll('img').length === 0) {
            return callback && callback();
        }

        let done = false;
        const finish = function() {
            if (done) return;
            done = true;
            try { callback && callback(); }
            catch(e) { console.warn('safeImagesLoaded callback Fehler:', e); }
        };

        const tid = setTimeout(function() {
            console.warn('safeImagesLoaded: Timeout nach ' +
                CONFIG.IMAGES_LOADED_TIMEOUT + 'ms, callback erzwungen');
            finish();
        }, CONFIG.IMAGES_LOADED_TIMEOUT);

        try {
            imagesLoaded(el, function() {
                clearTimeout(tid);
                finish();
            });
        } catch(e) {
            clearTimeout(tid);
            console.warn('imagesLoaded init Fehler:', e);
            finish();
        }

    } catch(e) {
        console.warn('safeImagesLoaded Fehler:', e);
        callback && callback();
    }
}

function fetchHTML(url) {
    return fetch(url)
        .then(function(r) { return r.text(); })
        .then(function(html) {
            return new DOMParser().parseFromString(html, 'text/html');
        });
}

function setTransition(el, duration, property) {
    const dur  = duration || '0s';
    const prop = property || 'all';
    el.style.transitionDuration = dur;
    el.style.transitionProperty = prop;
}

// ─── paper ───────────────────────────────────────────────────────────────────

const paper = {
    setup: function() {
        const postsEl = document.querySelector("#posts.show");
        if (!paper.movablePage && postsEl) {
            paper.movablePage = new paper.MovablePage(postsEl);
        }

        const body = document.body;
        if (body.classList.contains("index") &&
            !window.location.href.match(/post/i) &&
            !body.classList.contains("tag_page")) {
            paper.features.load();
        }

        paper.postsEl = document.querySelector("#posts.index");

        if (paper.postsEl) {
            safeImagesLoaded(paper.postsEl, function() {
                paper.books.build();
            });
        }
    },

    isMasonryInitialized: function() {
        return masonryInstance !== null;
    },

    initMasonry: function() {
        if (!paper.postsEl) return;

        safeImagesLoaded(paper.postsEl, function() {
            try {
                masonryInstance = new Masonry(
                    paper.postsEl,
                    CONFIG.MASONRY
                );
            } catch(e) {
                console.warn('Masonry init Fehler:', e);
            }
        });
    },

    safeMasonry: function() {
        if (!paper.postsEl) return;
        try {
            if (paper.isMasonryInitialized()) {
                masonryInstance.layout();
            } else {
                paper.initMasonry();
            }
        } catch(e) {
            console.warn('safeMasonry Fehler:', e);
        }
    },

    reloadMasonry: function() {
        try {
            if (!paper.isMasonryInitialized()) {
                paper.initMasonry();
                return;
            }
            masonryInstance.reloadItems();
            masonryInstance.layout();
        } catch(e) {
            console.warn('reloadMasonry Fehler:', e);
        }
    },

    features: {
        load: function() {
            const a = this;

            fetchHTML(tagURLPrefix + '/featured')
                .then(function(doc) {
                    a.div = document.createElement('div');
                    a.div.id = 'features';

                    const carouselEl = document.createElement('div');
                    carouselEl.className = 'carousel slide';
                    carouselEl.id = 'features-carousel';
                    a.div.appendChild(carouselEl);

                    a.list = document.createElement('div');
                    a.list.className = 'carousel-inner';
                    carouselEl.appendChild(a.list);

                    document.body.classList.add('with-features');

                    const header = document.getElementById('header');
                    header.insertAdjacentElement('afterend', a.div);
                    a.spinner = (new Spinner).spin(header);

                    a.posts = Array.from(doc.querySelectorAll('.post'));

                    const featureBio = header.querySelector('#feature_bio');
                    if (featureBio) {
                        const bioEl = document.createElement('li');
                        bioEl.setAttribute('data-post-type', 'bio');
                        bioEl.innerHTML = featureBio.innerHTML;
                        a.posts.unshift(bioEl);
                    }

                    const limit = Math.min(a.posts.length, CONFIG.FEATURES_LIMIT);
                    for (let l = 0; l < limit; l++) {
                        const g = a.posts[l];
                        const p = g.getAttribute('data-post-type');
                        const e = document.createElement('div');
                        e.className = 'carousel-item';

                        let j;

                        if (p === 'bio') {
                            const wrap = document.createElement('div');
                            wrap.innerHTML = g.innerHTML;
                            j = wrap;
                        } else if (p === 'photo') {
                            const imgs = Array.from(g.querySelectorAll('img.post-image'));
                            imgs.forEach(function(img) {
                                img.src = img.getAttribute('data-highres');
                            });
                            if (imgs.length > 1) {
                                const o = document.createElement('div');
                                o.className = 'photoset_wrap';
                                o.setAttribute('data-permalink',
                                    g.querySelector('a') ? g.querySelector('a').href : '');
                                imgs.forEach(function(img) { o.appendChild(img); });
                                e.classList.add('photoset');
                                j = o;
                            } else if (imgs.length === 1) {
                                const link = g.querySelector('a');
                                const photoLink = document.createElement('a');
                                photoLink.href = link ? link.href : '#';
                                photoLink.className = 'photo-permalink';
                                photoLink.appendChild(imgs[0]);
                                j = photoLink;
                            }
                        } else if (p === 'audio') {
                            if (g.querySelector('iframe')) {
                                j = g.querySelector('.post-content');
                            } else {
                                const audioPlayer = g.querySelector('.audio-player');
                                const audioLink = document.createElement('a');
                                audioLink.href = g.getAttribute('data-permalink');
                                audioLink.className = 'audio_link';
                                audioLink.innerHTML = '<span class="audio_player_icon">&nbsp;</span>';
                                if (audioPlayer) {
                                    const artist = audioPlayer.getAttribute('data-artist');
                                    const track  = audioPlayer.getAttribute('data-track');
                                    const album  = audioPlayer.getAttribute('data-album');
                                    if (artist || track || album) {
                                        const ul = document.createElement('ul');
                                        if (artist) ul.innerHTML += '<li>' + decodeURI(artist) + '</li>';
                                        if (track)  ul.innerHTML += '<li>' + decodeURI(track)  + '</li>';
                                        if (album)  ul.innerHTML += '<li>' + decodeURI(album)  + '</li>';
                                        audioLink.appendChild(ul);
                                    }
                                    const art = audioPlayer.getAttribute('data-art');
                                    if (art) {
                                        const artImg = document.createElement('img');
                                        artImg.src = art;
                                        audioLink.appendChild(artImg);
                                    }
                                }
                                j = audioLink;
                            }
                        } else {
                            const pad = document.createElement('div');
                            pad.className = 'post-pad';
                            if (p === 'answer') {
                                const answerLink = document.createElement('a');
                                answerLink.href = g.getAttribute('data-permalink');
                                const content = g.querySelector('.post-content');
                                if (content) answerLink.appendChild(content);
                                pad.appendChild(answerLink);
                            } else {
                                const title   = g.querySelector('.post-title');
                                const content = g.querySelector('.post-content');
                                if (title)   pad.appendChild(title);
                                if (content) pad.appendChild(content);
                            }
                            j = pad;
                        }

                        const featureContent = document.createElement('div');
                        featureContent.className = 'feature_content';
                        if (j) featureContent.appendChild(j);
                        e.classList.add(p);
                        e.appendChild(featureContent);
                        const source = g.querySelector('.source');
                        if (source) e.appendChild(source);
                        if (l === 0) e.classList.add('active');
                        a.list.appendChild(e);
                    }

                    // ── Buttons: getInstance() zur Laufzeit ────────────────
                    const prevBtn = document.createElement('button');
                    prevBtn.className = 'pagination-newer carousel-control-prev';
                    prevBtn.setAttribute('type', 'button');
                    prevBtn.setAttribute('aria-label', 'Previous');
                    prevBtn.innerHTML = '&#x25C0;';
                    prevBtn.addEventListener('click', function() {
                        const instance = bootstrap.Carousel.getInstance(carouselEl);
                        if (instance) {
                            instance.prev();
                        } else {
                            console.warn('Carousel Instanz nicht gefunden');
                        }
                    });

                    const nextBtn = document.createElement('button');
                    nextBtn.className = 'pagination-older carousel-control-next';
                    nextBtn.setAttribute('type', 'button');
                    nextBtn.setAttribute('aria-label', 'Next');
                    nextBtn.innerHTML = '&#x25B6;';
                    nextBtn.addEventListener('click', function() {
                        const instance = bootstrap.Carousel.getInstance(carouselEl);
                        if (instance) {
                            instance.next();
                        } else {
                            console.warn('Carousel Instanz nicht gefunden');
                        }
                    });

                    const arrows = document.createElement('div');
                    arrows.className = 'pagination pagination-slideshow';
                    arrows.appendChild(prevBtn);
                    arrows.appendChild(nextBtn);

                    // ── Dots Navigation ────────────────────────────────────
                    const items = Array.from(a.list.querySelectorAll('.carousel-item'));
                    const nav = document.createElement('div');
                    nav.className = 'navigation';

                    items.forEach(function(_, idx) {
                        const dot = document.createElement('em');
                        dot.innerHTML = '•';
                        dot.setAttribute('data-index', idx);
                        dot.addEventListener('click', function() {
                            const instance = bootstrap.Carousel.getInstance(carouselEl);
                            if (instance) {
                                instance.to(idx);
                            } else {
                                console.warn('Carousel Instanz nicht gefunden');
                            }
                        });
                        nav.appendChild(dot);
                    });

                    const firstDot = nav.querySelector('em:first-child');
                    if (firstDot) firstDot.classList.add('on');

                    // ── slid Event ─────────────────────────────────────────
                    carouselEl.addEventListener('slid.bs.carousel', function(e) {
                        nav.querySelectorAll('em').forEach(function(em) {
                            em.classList.remove('on');
                        });
                        const dots = nav.querySelectorAll('em');
                        if (dots[e.to] !== undefined) {
                            dots[e.to].classList.add('on');
                        }
                    });

                    a.div.appendChild(arrows);
                    a.div.appendChild(nav);

                    safeImagesLoaded(a.div, function() {
                        try {
                            a.verticallyAlignContent();

                            // BS5: Instanz erstellen - getInstance() findet sie später
                            new bootstrap.Carousel(carouselEl, CONFIG.CAROUSEL);

                            a.div.classList.add('loaded');
                            a.spinner.stop();
                            const headerSpinner = header.querySelector('.spinner');
                            if (headerSpinner) headerSpinner.remove();
                            paper.books.build();
                            a.sizeImages();
                        } catch(e) {
                            console.warn('features.load callback Fehler:', e);
                        }
                    });
                })
                .catch(function(e) {
                    console.warn('features.load fetch Fehler:', e);
                });
        },

        sizeImages: function() {
            this.div.querySelectorAll('.carousel-item.photo').forEach(function(item) {
                item.classList.add('measure_height');
                const img = item.querySelector('img');
                const w = img ? img.offsetWidth : 0;
                item.classList.remove('measure_height');
                item.querySelectorAll('.post-pad, .photo-permalink, .source').forEach(function(el) {
                    el.style.width = w + 'px';
                });
            });
        },

        verticallyAlignContent: function() {
            const carouselInner = this.div.querySelector('.carousel-inner');
            const totalHeight = carouselInner ? carouselInner.offsetHeight : 0;

            this.div.querySelectorAll('.carousel-item:not(.photoset):not(.video)')
                .forEach(function(item) {
                    const content = item.querySelector('.feature_content');
                    if (!content) return;
                    let contentHeight;
                    if (item.classList.contains('active')) {
                        contentHeight = content.offsetHeight;
                    } else {
                        item.classList.add('measure_height');
                        contentHeight = content.offsetHeight;
                        item.classList.remove('measure_height');
                    }
                    content.style.paddingTop =
                        Math.floor((totalHeight - contentHeight) / 2) + 'px';
                });
        }
    },

    books: {
        build: function() {
            try {
                if (!supports.csstransforms) return;

                const photosets = document.querySelectorAll('.photoset_wrap');

                if (photosets.length === 0) {
                    paper.initMasonry();
                    return;
                }

                photosets.forEach(function(el, a) {
                    try {
                        if (!el._notebook) {
                            const isLast = (a + 1 === photosets.length);
                            const parent = el.closest('.features-container');
                            el._notebook = new paper.Notebook(el, {
                                parent:       parent,
                                lastNotebook: isLast
                            });
                        }
                        if (el._notebook) {
                            const post = el.closest('.post');
                            if (post) post.classList.add('notebooked');
                        }
                    } catch(e) {
                        console.warn('books.build each Fehler:', e);
                    }
                });
            } catch(e) {
                console.warn('books.build Fehler:', e);
            }
        }
    }
};

// ─── Notebook ─────────────────────────────────────────────────────────────────

paper.Notebook = function(a, b) {
    try {
        this.container = a;
        this.container.style.display = 'none';
        this.pages = [];
        this.currentPage = 0;
        this.permalink = this.container.getAttribute("data-permalink");
        this.settings = b || {};
        this.settings.useRotation !== false && (this.settings.useRotation = true);
        this.settings.xMovement  !== false && (this.settings.xMovement  = true);
        this.settings.xMovement  !== false && (this.settings.yMovement  = true);
        this.setMaximumHeight();
        this.extractSourcesFromContainer();
        this.writeMarkup();
        this.appendElement();
        this.container.style.display = '';
        this.container.dispatchEvent(new CustomEvent('notebook:initialized'));
    } catch(e) {
        console.warn('Notebook init Fehler:', e);
    }
};

paper.Notebook.prototype = {
    setMaximumHeight: function() {
        this.max_height = document.body.classList.contains("show") ? 475 : 400;
    },

    extractSourcesFromContainer: function() {
        const imgs = this.container.querySelectorAll("img");
        this.sources = [];
        for (let i = imgs.length - 1; i >= 0; i--) {
            if (imgs[i] && imgs[i].src && imgs[i].src !== '') {
                this.sources.push(imgs[i].src);
            }
        }
    },

    setImageHeights: function(src, pageEl, notebookEl, isFirst, isLast, maxHeight) {
        const img = new Image();

        img.addEventListener('load', function() {
            try {
                if (!document.body.contains(pageEl)) return;

                let g = Math.round(pageEl.offsetWidth * img.height / img.width);
                let h = pageEl.offsetWidth;
                const inFeature = notebookEl.closest('.feature_content') !== null;

                if (g > maxHeight) {
                    g = maxHeight;
                    h = Math.round(img.width * g / img.height);
                }

                pageEl.style.height = g + 'px';
                pageEl.style.width  = h + 'px';
                pageEl.setAttribute('data-height', g);
                pageEl.setAttribute('data-width',  h);

                const curH = parseInt(notebookEl.getAttribute('data-height')) || 0;
                const curW = parseInt(notebookEl.getAttribute('data-width'))  || 0;
                if (g > curH) notebookEl.setAttribute('data-height', g);
                if (h > curW) notebookEl.setAttribute('data-width',  h);

                if (isFirst) {
                    notebookEl.style.height = notebookEl.getAttribute('data-height') + 'px';
                    if (notebookEl.offsetWidth > parseInt(notebookEl.getAttribute('data-width'))) {
                        notebookEl.setAttribute('data-width', notebookEl.offsetWidth);
                    }
                    if (inFeature) {
                        notebookEl.style.width = notebookEl.getAttribute('data-width') + 'px';
                    }
                    notebookEl.querySelectorAll('div').forEach(function(div) {
                        const mt = Math.round(
                            (parseInt(notebookEl.getAttribute('data-height')) -
                             parseInt(div.getAttribute('data-height') || 0)) / 2
                        );
                        const ml = Math.round(
                            (parseInt(notebookEl.getAttribute('data-width')) -
                             parseInt(div.getAttribute('data-width')  || 0)) / 2
                        );
                        div.style.marginTop  = mt + 'px';
                        div.style.marginLeft = ml + 'px';
                    });
                }

                if (isFirst && isLast &&
                    !document.querySelector('#posts-wrap.single') &&
                    !document.body.classList.contains('tag_page')) {
                    paper.safeMasonry();
                }
            } catch(err) {
                console.warn('setImageHeights load Fehler:', err);
            }
        });

        img.addEventListener('error', function() {
            console.warn('Bild konnte nicht geladen werden:', src);
        });

        img.src = src;
    },

    writeMarkup: function() {
        this.element = document.createElement("div");
        this.element.className = "notebook";
        this.element.id = "notebook_" + parseInt(Math.random() * 1e5);
        this.element.setAttribute("data-height", 0);
        this.element.setAttribute("data-width",  0);

        let a = this.sources.length;

        while (a--) {
            const c = document.createElement("div");
            c.style.backgroundImage = "url(" + this.sources[a] + ")";

            const isFirst   = (a === 0);
            const childEl   = this.container.children[a];
            const imgEl     = childEl ? childEl.querySelector('img') : null;
            const dataSrc   = (imgEl && imgEl.getAttribute('data-src'))   || this.sources[a];
            const dataThumb = (imgEl && imgEl.getAttribute('data-thumb')) || this.sources[a];

            this.setImageHeights(
                this.sources[a], c, this.element,
                isFirst, this.settings.lastNotebook, this.max_height
            );

            c.className = "notebook-page page-style-" + parseInt(Math.random() * 5);
            c.setAttribute("data-page",  this.sources.length - a);
            c.setAttribute("data-src",   dataSrc);
            c.setAttribute("data-thumb", dataThumb);
            c.style.zIndex = a + 1000;

            this.pages.push(c);
            this.element.appendChild(c);

            c.addEventListener("touchstart", this, false);
            c.addEventListener("touchmove",  this, false);
            c.addEventListener("touchend",   this, false);
            c.addEventListener("click",      this, false);

            if (!supports.touch && typeof $.fn.draggable === 'function') {
                this.dragify(c);
            }
        }
    },

    appendElement: function() {
        this.container.innerHTML = "";
        this.container.appendChild(this.element);
    },

    dragify: function(el) {
        const b = this;
        $(el).draggable({
            scroll: false,
            start: function(a) { return b.onDragStart(a); },
            drag:  function(a) { return b.onDragMove(a);  },
            stop:  function(a) { return b.onDragEnd(a);   }
        });
    },

    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart": return this.onTouchStart(a);
            case "touchmove":  return this.onTouchMove(a);
            case "touchend":   return this.onTouchEnd(a);
            case "click":      return this.onClick(a);
        }
    },

    onTouchStart: function(a) {
        a.preventDefault();
        this.target = a.target;
        setTransition(this.target, '0s');
        this.start = {
            pageX: a.touches[0].pageX,
            pageY: a.touches[0].pageY,
            time:  Number(new Date)
        };
        this.deltaX = 0;
        this.deltaY = 0;
        this.originalTransform = this.target.style.transform || '';
        if (this.settings.parent) {
            this.settings.parent.classList.add("dragging");
        }
    },

    onTouchMove: function(a) {
        if (a.touches.length > 1 || (a.scale && a.scale !== 1)) return true;
        a.preventDefault();
        a.stopPropagation();
        if (this.settings.xMovement) this.deltaX = a.touches[0].pageX - this.start.pageX;
        if (this.settings.yMovement) this.deltaY = a.touches[0].pageY - this.start.pageY;
        this.target.style.transform =
            this.originalTransform + ' translate(' + this.deltaX + 'px, ' + this.deltaY + 'px)';
    },

    onTouchEnd: function(a) {
        const d = this;
        this.distance = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY);
        this.deltaT   = Number(new Date) - this.start.time;
        this.rect     = this.element.getBoundingClientRect();
        this.width    = this.rect.right  - this.rect.left;
        this.height   = this.rect.bottom - this.rect.top;

        setTransition(this.target, '.4s');
        this.target.style.transform = 'rotate(0deg)';
        this.target.style.top  = '';
        this.target.style.left = '';

        window.setTimeout(function() {
            if (d.settings.parent) d.settings.parent.classList.remove("dragging");
        }, 400);

        const shouldFlip =
            Math.abs(this.deltaY) > this.height / 2 ||
            Math.abs(this.deltaX) > this.width  / 2 ||
            (this.distance > 20 && this.deltaT < 250);

        if (shouldFlip) return this.flip();

        if (this.deltaT < 500 &&
            this.distance < 2 &&
            !document.body.classList.contains("show")) {
            window.location.href = this.permalink;
        }
    },

    onDragStart: function(a) {
        this.dragged = true;
        this.target  = a.target;
        setTransition(this.target, '0s');
        this.start = {
            pageX: a.pageX,
            pageY: a.pageY,
            time:  Number(new Date)
        };
        this.deltaX = 0;
        this.deltaY = 0;
        if (this.settings.parent) {
            this.settings.parent.classList.add("dragging");
        }
    },

    onDragMove: function(a) {
        if (this.settings.parent) {
            this.settings.parent.classList.add("dragging");
        }
        this.deltaX = a.pageX - this.start.pageX;
        this.deltaY = a.pageY - this.start.pageY;
    },

    onDragEnd: function(a) {
        return this.onTouchEnd(a);
    },

    onClick: function(a) {
        if (this.dragged) { this.dragged = false; return true; }

        if (!document.body.classList.contains("show")) {
            window.location.href = this.permalink;
            return;
        }

        const gallery = [];
        this.container.querySelectorAll('.notebook-page').forEach(function(page) {
            const src   = page.getAttribute('data-src');
            const thumb = page.getAttribute('data-thumb');
            if (src) gallery.push({ src: src, thumb: thumb || src });
        });

        if (gallery.length === 0) {
            console.warn('LightGallery: Keine Bilder gefunden');
            return;
        }

        if (this._lgInstance) {
            try { this._lgInstance.destroy(); } catch(e) {}
            this._lgInstance = null;
        }

        const oldTmp = document.getElementById('lg-tmp-container');
        if (oldTmp) oldTmp.remove();

        const tmpContainer = document.createElement('div');
        tmpContainer.id = 'lg-tmp-container';
        tmpContainer.style.display = 'none';
        document.body.appendChild(tmpContainer);

        const self = this;
        setTimeout(function() {
            try {
                self._lgInstance = lightGallery(tmpContainer, {
                    plugins: [lgFullscreen, lgThumbnail],
                    share: false,
                    autoplay: false,
                    autoplayControls: false,
                    thumbnail: true,
                    dynamic: true,
                    dynamicEl: gallery,
                    index: 0
                });

                tmpContainer.addEventListener('lgAfterClose', function() {
                    if (self._lgInstance) {
                        try { self._lgInstance.destroy(); } catch(e) {}
                        self._lgInstance = null;
                    }
                    const tmp = document.getElementById('lg-tmp-container');
                    if (tmp) tmp.remove();
                }, { once: true });

            } catch(e) {
                console.error('LightGallery Init Fehler:', e);
            }
        }, CONFIG.LIGHTGALLERY_DELAY);
    },

    flip: function() {
        const i   = this;
        const d   = this.deltaY / this.distance;
        const b   = this.deltaX / this.distance;
        const max = (this.width > this.height ? this.width : this.height) * 1.2;
        const f   = Math.floor(max * b);
        const g   = Math.floor(max * d);
        const dur = 0.2;

        setTransition(this.target, dur + 's');

        if (supports.touch) {
            this.target.style.transform = 'translate(' + f + 'px,' + g + 'px)';
        } else {
            this.target.style.left = f + 'px';
            this.target.style.top  = g + 'px';
        }

        window.setTimeout(function() { i.afterFlip(); }, dur * 1000);
    },

    afterFlip: function() {
        let a = this.pages.length;
        this.currentPage += 1;
        if (this.currentPage === a) this.currentPage = 0;

        while (a--) {
            const c = this.pages[a];
            const b = parseInt(c.style.zIndex) + 1;
            c.style.zIndex    = b < this.pages.length + 1000 ? b : 1000;
            c.style.top       = '';
            c.style.left      = '';
            c.style.transform = '';
        }
    }
};

// ─── MovablePage ──────────────────────────────────────────────────────────────

paper.MovablePage = function(element, b) {
    this.element = typeof element === 'string'
        ? document.querySelector(element)
        : element;

    if (!this.element || !$.support.pjax) return null;

    b || (b = {});
    this.nextSelector     = b.nextSelector     || "#features a.pagination-older";
    this.prevSelector     = b.prevSelector     || "#features a.pagination-newer";
    this.fragmentSelector = b.fragmentSelector || "#posts";
    this.activateArrows();
    this.element.addEventListener("touchstart", this, false);
    this.element.addEventListener("touchmove",  this, false);
    this.element.addEventListener("touchend",   this, false);
};

paper.MovablePage.prototype = {
    next: function() {
        const dur = this.getVelocityAdjustedTransitionDuration() / 1000 + 's';
        setTransition(this.element, dur);
        this.element.style.transform = 'translate3d(-100%,0,0)';
        this.element.style.opacity = '0';
        this.load(this.nextLink.href);
    },

    prev: function() {
        const dur = this.getVelocityAdjustedTransitionDuration() / 1000 + 's';
        setTransition(this.element, dur);
        this.element.style.transform = 'translate3d(100%,0,0)';
        this.element.style.opacity = '0';
        this.load(this.prevLink.href);
    },

    getVelocityAdjustedTransitionDuration: function() {
        if (!this.start) return 300;
        this.deltaT = Number(new Date) - this.start.time;
        const remaining = window.innerWidth - Math.abs(this.deltaX);
        const duration  = Math.abs(this.deltaT * remaining / this.deltaX);
        return Math.min(duration, 500);
    },

    load: function(url) {
        const b = this;
        window.setTimeout(function() {
            if ($ && $.support.pjax) {
                $.pjax({
                    container: b.fragmentSelector,
                    fragment:  b.fragmentSelector,
                    url:       url,
                    timeout:   2000,
                    success: function(data) {
                        setTransition(b.element, undefined, 'opacity');
                        b.element.style.opacity   = '1';
                        b.element.style.transform = '';

                        const parsed     = new DOMParser().parseFromString(data, 'text/html');
                        const pagination = parsed.querySelector('.pagination');
                        const notes      = parsed.querySelector('ol.notes');
                        const noteWrap   = document.querySelector('.note-wrap');
                        const pagPosts   = document.getElementById('pagination-posts');

                        if (noteWrap && notes) noteWrap.innerHTML = notes.outerHTML;
                        if (pagPosts && pagination) pagPosts.replaceWith(pagination);

                        b.activateArrows();
                        paper.setup();
                    }
                });
            } else {
                window.location.href = url;
            }
        }, this.getVelocityAdjustedTransitionDuration());
    },

    activateArrows: function() {
        const a = this;
        this.nextLink = document.querySelector(this.nextSelector);
        this.prevLink = document.querySelector(this.prevSelector);

        if (this.nextLink) {
            this.nextLink.onclick = function(e) { e.preventDefault(); a.next(); };
            fetch(this.nextLink.href).catch(function() {});
        }
        if (this.prevLink) {
            this.prevLink.onclick = function(e) { e.preventDefault(); a.prev(); };
            fetch(this.prevLink.href).catch(function() {});
        }
    },

    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart": return this.onTouchStart(a);
            case "touchmove":  return this.onTouchMove(a);
            case "touchend":   return this.onTouchEnd(a);
        }
    },

    onTouchStart: function(a) {
        setTransition(this.element, '0s');
        this.start = {
            pageX: a.touches[0].pageX,
            pageY: a.touches[0].pageY,
            time:  Number(new Date)
        };
        this.deltaX      = 0;
        this.isScrolling = undefined;
    },

    onTouchMove: function(a) {
        if (a.touches.length > 1 || (a.scale && a.scale !== 1)) return true;
        this.deltaX = a.touches[0].pageX - this.start.pageX;
        if (typeof this.isScrolling === 'undefined') {
            this.isScrolling = Math.abs(this.deltaX) <
                Math.abs(a.touches[0].pageY - this.start.pageY);
        }
        if (!this.isScrolling) {
            a.preventDefault();
            this.element.style.transform = 'translate3d(' + this.deltaX + 'px, 0, 0)';
        }
    },

    onTouchEnd: function(a) {
        if (this.isScrolling) return true;
        const elapsed = Number(new Date) - this.start.time;
        if ((this.deltaX > 200 || (this.deltaX > 20 && elapsed < 250)) && this.prevLink) {
            return this.prev();
        }
        if ((this.deltaX < -200 || (this.deltaX < -20 && elapsed < 250)) && this.nextLink) {
            return this.next();
        }
        setTransition(this.element, '.5s');
        this.element.style.transform = '';
    }
};

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
    if (!document.body.classList.contains('meta')) {
        window.paper = paper;
        paper.setup();
    }

    if (document.querySelector('#post-wrap.single')) {
        const container = document.querySelector('.photo-permalink-container');
        if (container && container.children.length > 0) {
            try {
                lightGallery(container, {
                    plugins: [lgFullscreen],
                    share: false,
                    autoplay: false,
                    autoplayControls: false,
                    thumbnail: true
                });
            } catch(e) {
                console.error('LightGallery (single) Fehler:', e);
            }
        }
    }
});
