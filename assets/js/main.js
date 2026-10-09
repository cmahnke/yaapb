import * as bootstrap from 'bootstrap';
import lightGallery from 'lightgallery';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import Spinner from 'spin';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

// ─── Config ───────────────────────────────────────────────────────────────────

const CONFIG = {
    IMAGES_LOADED_TIMEOUT:      2000,
    MAX_CAROUSEL_PADDING_EM:    1.6,
    MASONRY: {
        itemSelector:       '.post',
        columnWidth:        '.post',
        transitionDuration: '0.2s'
    },
    CAROUSEL: {
        interval: false,
        wrap:     true,
        touch:    true
    },
    FEATURES_LIMIT:     6,
    LIGHTGALLERY_DELAY: 50
};

// ─── Error Handlers ──────────────────────────────────────────────────────────

window.addEventListener('error', function(e) {
    if (!e) return;
    const isImagesLoadedError =
        (e.message && e.message.indexOf('nodeName') !== -1) ||
        (e.filename && e.filename.indexOf('imagesloaded') !== -1);

    if (isImagesLoadedError) {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.warn('imagesLoaded race condition caught');
        return false;
    }
}, true);

window.addEventListener('unhandledrejection', function(e) {
    if (e.reason && e.reason.message &&
        e.reason.message.indexOf('nodeName') !== -1) {
        e.preventDefault();
        console.warn('imagesLoaded promise error caught');
    }
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

const supports = {
    csstransforms: typeof document.createElement('div').style.transform !== 'undefined'
};

const tagURLPrefix = '/tags';

function safeImagesLoaded(element, callback) {
    try {
        const el = element;

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
            catch(e) { console.warn('safeImagesLoaded callback error:', e); }
        };

        const tid = setTimeout(function() {
            console.warn('safeImagesLoaded: timeout after ' +
                CONFIG.IMAGES_LOADED_TIMEOUT + 'ms, forcing callback');
            finish();
        }, CONFIG.IMAGES_LOADED_TIMEOUT);

        try {
            imagesLoaded(el, function() {
                clearTimeout(tid);
                finish();
            });
        } catch(e) {
            clearTimeout(tid);
            console.warn('imagesLoaded init error:', e);
            finish();
        }

    } catch(e) {
        console.warn('safeImagesLoaded error:', e);
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

// ─── Features ────────────────────────────────────────────────────────────────

class Features {
    constructor(paper) {
        this.paper = paper;
        this.div = null;
        this.list = null;
        this.spinner = null;
        this.posts = null;
    }

    load() {
        fetchHTML(tagURLPrefix + '/featured')
            .then((doc) => {
                this.div = document.createElement('div');
                this.div.id = 'features';

                const carouselEl = document.createElement('div');
                carouselEl.className = 'carousel slide';
                carouselEl.id = 'features-carousel';
                this.div.appendChild(carouselEl);

                this.list = document.createElement('div');
                this.list.className = 'carousel-inner';
                carouselEl.appendChild(this.list);

                document.body.classList.add('with-features');

                const header = document.getElementById('header');
                header.insertAdjacentElement('afterend', this.div);
                this.spinner = (new Spinner).spin(header);

                this.posts = Array.from(doc.querySelectorAll('.post'));

                const featureBio = header.querySelector('#feature_bio');
                if (featureBio) {
                    const bioEl = document.createElement('li');
                    bioEl.setAttribute('data-post-type', 'bio');
                    bioEl.innerHTML = featureBio.innerHTML;
                    this.posts.unshift(bioEl);
                }

                const limit = Math.min(this.posts.length, CONFIG.FEATURES_LIMIT);
                for (let l = 0; l < limit; l++) {
                    const g = this.posts[l];
                    const p = g.getAttribute('data-post-type');
                    const e = document.createElement('div');
                    e.className = 'carousel-item';
                    if (l === 0) e.classList.add('active');

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
                    this.list.appendChild(e);
                }

                // ── Buttons ────────────────────────────────────────────
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
                        console.warn('Carousel instance not found');
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
                        console.warn('Carousel instance not found');
                    }
                });

                const arrows = document.createElement('div');
                arrows.className = 'pagination pagination-slideshow';
                arrows.appendChild(prevBtn);
                arrows.appendChild(nextBtn);

                // ── Dots ───────────────────────────────────────────────
                const items = Array.from(this.list.querySelectorAll('.carousel-item'));
                const nav = document.createElement('div');
                nav.className = 'navigation';

                items.forEach(function(_, idx) {
                    const dot = document.createElement('em');
                    dot.innerHTML = '•';
                    dot.setAttribute('data-index', idx);
                    if (idx === 0) dot.classList.add('on');
                    dot.addEventListener('click', function() {
                        const instance = bootstrap.Carousel.getInstance(carouselEl);
                        if (instance) {
                            instance.to(idx);
                        } else {
                            console.warn('Carousel instance not found');
                        }
                    });
                    nav.appendChild(dot);
                });

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

                this.div.appendChild(arrows);
                this.div.appendChild(nav);

                safeImagesLoaded(this.div, () => {
                    try {
                        this.verticallyAlignContent();

                        // Validation before init
                        const carouselItems = this.list.querySelectorAll('.carousel-item');
                        if (carouselItems.length === 0) {
                            console.error('No carousel items - aborting init');
                            return;
                        }

                        // Ensure exactly one active item
                        let hasActive = false;
                        carouselItems.forEach(function(item) {
                            if (item.classList.contains('active')) {
                                if (hasActive) {
                                    item.classList.remove('active');
                                } else {
                                    hasActive = true;
                                }
                            }
                        });
                        if (!hasActive) carouselItems[0].classList.add('active');

                        // Initialize BS5 carousel
                        new bootstrap.Carousel(carouselEl, CONFIG.CAROUSEL);

                        this.div.classList.add('loaded');
                        this.spinner.stop();
                        const headerSpinner = header.querySelector('.spinner');
                        if (headerSpinner) headerSpinner.remove();
                        this.paper.buildBooks();
                        this.sizeImages();
                    } catch(e) {
                        console.warn('features.load callback error:', e);
                    }
                });
            })
            .catch(function(e) {
                console.warn('features.load fetch error:', e);
            });
    }

    sizeImages() {
        this.div.querySelectorAll('.carousel-item.photo').forEach(function(item) {
            item.classList.add('measure_height');
            const img = item.querySelector('img');
            const w = img ? img.offsetWidth : 0;
            item.classList.remove('measure_height');

            if (w <= 0) return;

            item.querySelectorAll('.post-pad, .photo-permalink, .source').forEach(function(el) {
                el.style.width = w + 'px';
            });
        });
    }

    verticallyAlignContent() {
        const carouselInner = this.div.querySelector('.carousel-inner');
        const totalHeight   = carouselInner ? carouselInner.offsetHeight : 0;

        // Max paddingTop: CONFIG.MAX_CAROUSEL_PADDING_EM em
        const rootFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
        ) || 16;
        const maxPaddingPx = CONFIG.MAX_CAROUSEL_PADDING_EM * rootFontSize;

        this.div.querySelectorAll('.carousel-item:not(.photoset):not(.video)')
            .forEach(function(item) {
                const content = item.querySelector('.feature_content');
                if (!content) return;

                let contentHeight = 0;

                if (item.classList.contains('active')) {
                    contentHeight = content.offsetHeight;
                } else {
                    item.classList.add('measure_height');
                    contentHeight = content.offsetHeight;
                    item.classList.remove('measure_height');
                }

                // Catch invalid values
                if (totalHeight <= 0 || contentHeight <= 0) {
                    content.style.paddingTop = '0px';
                    return;
                }

                // Content larger than container
                if (contentHeight >= totalHeight) {
                    content.style.paddingTop = '0px';
                    return;
                }

                // Calculate, clamp to max, never negative
                let paddingTop = Math.floor((totalHeight - contentHeight) / 2);
                paddingTop = Math.min(paddingTop, maxPaddingPx);
                paddingTop = Math.max(paddingTop, 0);

                content.style.paddingTop = paddingTop + 'px';
            });
    }
}

// ─── Notebook ─────────────────────────────────────────────────────────────────

class Notebook {
    constructor(paper, container, settings) {
        this.paper = paper;
        this.lgInstance = null;
        this.target = null;
        this.start = null;
        this.deltaX = 0;
        this.deltaY = 0;
        this.distance = 0;
        this.deltaT = 0;
        this.rect = null;
        this.width = 0;
        this.height = 0;
        this.originalTransform = '';
        this.dragged = false;
        this.pointerId = null;
        this.started = false;
        this.element = null;
        this.sources = [];
        this.max_height = 0;
        this.pages = [];
        this.currentPage = 0;

        try {
            this.container = container;
            this.container.style.display = 'none';
            this.permalink = this.container.getAttribute("data-permalink");
            this.settings = settings || {};
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
            console.warn('Notebook init error:', e);
        }
    }

    setMaximumHeight() {
        this.max_height = document.body.classList.contains("show") ? 475 : 400;
    }

    extractSourcesFromContainer() {
        const imgs = this.container.querySelectorAll("img");
        this.sources = [];
        for (let i = imgs.length - 1; i >= 0; i--) {
            if (imgs[i] && imgs[i].src && imgs[i].src !== '') {
                this.sources.push(imgs[i].src);
            }
        }
    }

    setImageHeights(src, pageEl, notebookEl, isFirst, isLast, maxHeight) {
        const img = new Image();

        img.addEventListener('load', () => {
            try {
                if (!document.body.contains(pageEl)) return;

                // ── Determine width with fallbacks ─────────────────────────
                let containerWidth = pageEl.offsetWidth;

                if (containerWidth === 0) {
                    containerWidth = pageEl.parentElement
                        ? pageEl.parentElement.offsetWidth : 0;
                }
                if (containerWidth === 0) {
                    containerWidth = notebookEl.offsetWidth;
                }
                if (containerWidth === 0) {
                    containerWidth = parseInt(notebookEl.getAttribute('data-width')) || 0;
                }
                if (containerWidth === 0) {
                    const hiddenItem = pageEl.closest('.carousel-item');
                    if (hiddenItem) {
                        hiddenItem.classList.add('measure_height');
                        containerWidth = pageEl.offsetWidth;
                        hiddenItem.classList.remove('measure_height');
                    }
                }
                if (containerWidth === 0) {
                    containerWidth = Math.floor(window.innerWidth / 2);
                    console.warn('setImageHeights: using fallback width:', containerWidth);
                }

                // ── Validate image dimensions ──────────────────────────────
                if (!img.naturalWidth || !img.naturalHeight) {
                    console.warn('setImageHeights: image without dimensions:', src);
                    return;
                }

                // ── Calculate height/width ─────────────────────────────────
                let g = Math.round(containerWidth * img.naturalHeight / img.naturalWidth);
                let h = containerWidth;

                const inFeature = notebookEl.closest('.feature_content') !== null;

                if (g > maxHeight) {
                    g = maxHeight;
                    h = Math.round(img.naturalWidth * g / img.naturalHeight);
                }

                // ── Prevent zero values ────────────────────────────────────
                if (g <= 0 || h <= 0) {
                    console.warn('setImageHeights: prevented zero dimensions:', { g, h, src });
                    return;
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
                    const nbHeight = parseInt(notebookEl.getAttribute('data-height')) || 0;
                    const nbWidth  = parseInt(notebookEl.getAttribute('data-width'))  || 0;

                    if (nbHeight > 0) notebookEl.style.height = nbHeight + 'px';

                    if (notebookEl.offsetWidth > nbWidth) {
                        notebookEl.setAttribute('data-width', notebookEl.offsetWidth);
                    }

                    if (inFeature && nbWidth > 0) {
                        notebookEl.style.width = notebookEl.getAttribute('data-width') + 'px';
                    }

                    notebookEl.querySelectorAll('div').forEach(function(div) {
                        const nbH  = parseInt(notebookEl.getAttribute('data-height')) || 0;
                        const nbW  = parseInt(notebookEl.getAttribute('data-width'))  || 0;
                        const divH = parseInt(div.getAttribute('data-height')) || 0;
                        const divW = parseInt(div.getAttribute('data-width'))  || 0;

                        if (nbH > 0) div.style.marginTop  = Math.round((nbH - divH) / 2) + 'px';
                        if (nbW > 0) div.style.marginLeft = Math.round((nbW - divW) / 2) + 'px';
                    });
                }

                if (isFirst && isLast &&
                    !document.querySelector('#posts-wrap.single') &&
                    !document.body.classList.contains('tag_page')) {
                    this.paper.safeMasonry();
                }

            } catch(err) {
                console.warn('setImageHeights load error:', err);
            }
        });

        img.addEventListener('error', function() {
            console.warn('Failed to load image:', src);
        });

        img.src = src;
    }

    writeMarkup() {
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

            c.className = "notebook-page page-style-" + parseInt(Math.random() * 5);
            c.setAttribute("data-page",     this.sources.length - a);
            c.setAttribute("data-src",      dataSrc);
            c.setAttribute("data-thumb",    dataThumb);
            c.setAttribute("data-source",   this.sources[a]);
            c.setAttribute("data-is-first", isFirst ? "1" : "0");
            c.style.zIndex = a + 1000;

            this.pages.push(c);
            this.element.appendChild(c);

            c.addEventListener("click", this, false);

            this.dragify(c);
        }
    }

    // Call setImageHeights AFTER DOM insertion
    appendElement() {
        this.container.innerHTML = "";
        this.container.appendChild(this.element);

        this.pages.forEach((pageEl, idx) => {
            const src     = pageEl.getAttribute("data-source");
            const isFirst = pageEl.getAttribute("data-is-first") === "1";
            const isLast  = (idx === this.pages.length - 1) && this.settings.lastNotebook;

            this.setImageHeights(
                src, pageEl, this.element,
                isFirst, isLast, this.max_height
            );
        });
    }

    dragify(el) {
        el.addEventListener("pointerdown",   this, false);
        el.addEventListener("pointermove",   this, false);
        el.addEventListener("pointerup",     this, false);
        el.addEventListener("pointercancel", this, false);
    }

    handleEvent(a) {
        switch (a.type) {
            case "pointerdown":   return this.onPointerDown(a, a.currentTarget);
            case "pointermove":   return this.onPointerMove(a);
            case "pointerup":     return this.onPointerUp(a);
            case "pointercancel": return this.onPointerCancel(a);
            case "click":         return this.onClick(a);
        }
    }

    onPointerDown(a, el) {
        if (a.pointerType === 'mouse' && a.button !== 0) return;
        if (!a.isPrimary) return;
        if (a.pointerType === 'mouse') a.preventDefault();

        try { el.setPointerCapture(a.pointerId); } catch(e) { /* pointer already gone */ }

        this.pointerId = a.pointerId;
        this.target = el;
        this.started = false;
        this.dragged = false;
        setTransition(this.target, '0s');
        this.start = {
            pageX: a.pageX,
            pageY: a.pageY,
            time:  Number(new Date)
        };
        this.deltaX = 0;
        this.deltaY = 0;
        this.originalTransform = this.target.style.transform || '';
        if (this.settings.parent) {
            this.settings.parent.classList.add("dragging");
        }
    }

    onPointerMove(a) {
        if (a.pointerId !== this.pointerId || !a.isPrimary) return true;
        if (a.pointerType === 'mouse' && a.buttons === 0) return this.onPointerUp(a);

        const dx = a.pageX - this.start.pageX;
        const dy = a.pageY - this.start.pageY;

        if (!this.started) {
            if (Math.max(Math.abs(dx), Math.abs(dy)) < 1) return true;
            this.started = true;
            this.dragged = true;
        }

        a.preventDefault();
        if (this.settings.xMovement) this.deltaX = dx;
        if (this.settings.yMovement) this.deltaY = dy;
        this.target.style.transform =
            this.originalTransform + ' translate(' + this.deltaX + 'px, ' + this.deltaY + 'px)';
    }

    onPointerUp(a) {
        if (a.pointerId !== this.pointerId) return;
        this.pointerId = null;
        if (!this.started) return;
        this.onDragEnd(a);
    }

    onPointerCancel(a) {
        if (a.pointerId !== this.pointerId) return;
        this.pointerId = null;
        this.started = false;
        this.dragged = false;
        setTransition(this.target, '.4s');
        this.target.style.transform = 'rotate(0deg)';
        this.target.style.top  = '';
        this.target.style.left = '';
        window.setTimeout(() => {
            if (this.settings.parent) this.settings.parent.classList.remove("dragging");
        }, 400);
    }

    onDragEnd(a) {
        this.distance = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY);
        this.deltaT   = Number(new Date) - this.start.time;
        this.rect     = this.element.getBoundingClientRect();
        this.width    = this.rect.right  - this.rect.left;
        this.height   = this.rect.bottom - this.rect.top;

        setTransition(this.target, '.4s');
        this.target.style.transform = 'rotate(0deg)';
        this.target.style.top  = '';
        this.target.style.left = '';

        window.setTimeout(() => {
            if (this.settings.parent) this.settings.parent.classList.remove("dragging");
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
    }

    onClick(a) {
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
            console.warn('LightGallery: no images found');
            return;
        }

        if (this.lgInstance) {
            try { this.lgInstance.destroy(); } catch(e) {}
            this.lgInstance = null;
        }

        const oldTmp = document.getElementById('lg-tmp-container');
        if (oldTmp) oldTmp.remove();

        const tmpContainer = document.createElement('div');
        tmpContainer.id = 'lg-tmp-container';
        tmpContainer.style.display = 'none';
        document.body.appendChild(tmpContainer);

        setTimeout(() => {
            try {
                this.lgInstance = lightGallery(tmpContainer, {
                    plugins: [lgFullscreen, lgThumbnail],
                    share: false,
                    autoplay: false,
                    autoplayControls: false,
                    thumbnail: true,
                    dynamic: true,
                    dynamicEl: gallery,
                    index: 0
                });

                tmpContainer.addEventListener('lgAfterClose', () => {
                    if (this.lgInstance) {
                        try { this.lgInstance.destroy(); } catch(e) {}
                        this.lgInstance = null;
                    }
                    const tmp = document.getElementById('lg-tmp-container');
                    if (tmp) tmp.remove();
                }, { once: true });

            } catch(e) {
                console.error('LightGallery init error:', e);
            }
        }, CONFIG.LIGHTGALLERY_DELAY);
    }

    flip() {
        const d   = this.deltaY / this.distance;
        const b   = this.deltaX / this.distance;
        const max = (this.width > this.height ? this.width : this.height) * 1.2;
        const f   = Math.floor(max * b);
        const g   = Math.floor(max * d);
        const dur = 0.2;

        setTransition(this.target, dur + 's');
        this.target.style.transform = 'translate(' + f + 'px,' + g + 'px)';

        window.setTimeout(() => { this.afterFlip(); }, dur * 1000);
    }

    afterFlip() {
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
}

// ─── MovablePage ──────────────────────────────────────────────────────────────

class MovablePage {
    constructor(paper, element, options) {
        this.paper = paper;
        this.element = typeof element === 'string'
            ? document.querySelector(element)
            : element;

        this.nextLink = null;
        this.prevLink = null;
        this.start = null;
        this.deltaX = 0;
        this.isScrolling = undefined;

        if (!this.element) return;

        options = options || {};
        this.nextSelector     = options.nextSelector     || "#features a.pagination-older";
        this.prevSelector     = options.prevSelector     || "#features a.pagination-newer";
        this.fragmentSelector = options.fragmentSelector || "#posts";
        this.activateArrows();
        this.element.addEventListener("touchstart", this, false);
        this.element.addEventListener("touchmove",  this, false);
        this.element.addEventListener("touchend",   this, false);
    }

    next() {
        const dur = this.getVelocityAdjustedTransitionDuration() / 1000 + 's';
        setTransition(this.element, dur);
        this.element.style.transform = 'translate3d(-100%,0,0)';
        this.element.style.opacity   = '0';
        this.load(this.nextLink.href);
    }

    prev() {
        const dur = this.getVelocityAdjustedTransitionDuration() / 1000 + 's';
        setTransition(this.element, dur);
        this.element.style.transform = 'translate3d(100%,0,0)';
        this.element.style.opacity   = '0';
        this.load(this.prevLink.href);
    }

    getVelocityAdjustedTransitionDuration() {
        if (!this.start) return 300;
        this.deltaT = Number(new Date) - this.start.time;
        const remaining = window.innerWidth - Math.abs(this.deltaX);
        const duration  = Math.abs(this.deltaT * remaining / this.deltaX);
        return Math.min(duration, 500);
    }

    load(url) {
        window.setTimeout(() => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);

            fetch(url, { signal: controller.signal })
                .then(function(response) {
                    if (!response.ok) throw new Error('HTTP ' + response.status);
                    return response.text();
                })
                .then((html) => {
                    clearTimeout(timeoutId);

                    setTransition(this.element, undefined, 'opacity');
                    this.element.style.opacity   = '1';
                    this.element.style.transform = '';

                    const parsed     = new DOMParser().parseFromString(html, 'text/html');
                    document.title = parsed.title || document.title;

                    const newPosts = parsed.querySelector(this.fragmentSelector);
                    if (newPosts) {
                        this.element.replaceChildren(...newPosts.childNodes);
                    }

                    const pagination = parsed.querySelector('.pagination');
                    const notes      = parsed.querySelector('ol.notes');
                    const noteWrap   = document.querySelector('.note-wrap');
                    const pagPosts   = document.getElementById('pagination-posts');

                    if (noteWrap && notes) noteWrap.innerHTML = notes.outerHTML;
                    if (pagPosts && pagination) pagPosts.replaceWith(pagination);

                    this.activateArrows();
                    this.paper.setup();
                })
                .catch(function() {
                    window.location.href = url;
                });
        }, this.getVelocityAdjustedTransitionDuration());
    }

    activateArrows() {
        this.nextLink = document.querySelector(this.nextSelector);
        this.prevLink = document.querySelector(this.prevSelector);

        if (this.nextLink) {
            this.nextLink.onclick = (e) => { e.preventDefault(); this.next(); };
            fetch(this.nextLink.href).catch(function() {});
        }
        if (this.prevLink) {
            this.prevLink.onclick = (e) => { e.preventDefault(); this.prev(); };
            fetch(this.prevLink.href).catch(function() {});
        }
    }

    handleEvent(a) {
        switch (a.type) {
            case "touchstart": return this.onTouchStart(a);
            case "touchmove":  return this.onTouchMove(a);
            case "touchend":   return this.onTouchEnd(a);
        }
    }

    onTouchStart(a) {
        setTransition(this.element, '0s');
        this.start = {
            pageX: a.touches[0].pageX,
            pageY: a.touches[0].pageY,
            time:  Number(new Date)
        };
        this.deltaX      = 0;
        this.isScrolling = undefined;
    }

    onTouchMove(a) {
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
    }

    onTouchEnd(a) {
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
}

// ─── Paper ────────────────────────────────────────────────────────────────────

class Paper {
    constructor() {
        this.masonryInstance = null;
        this.postsEl = null;
        this.movablePage = null;
        this.notebooks = new WeakMap();
        this.features = new Features(this);
    }

    setup() {
        const postsEl = document.querySelector("#posts.show");
        if (!this.movablePage && postsEl) {
            this.movablePage = new MovablePage(this, postsEl);
        }

        const body = document.body;
        if (body.classList.contains("index") &&
            !window.location.href.match(/page/i) &&
            !body.classList.contains("tag_page")) {
            this.features.load();
        }

        this.postsEl = document.querySelector("#posts.index");

        safeImagesLoaded(this.postsEl, () => {
            this.buildBooks();
        });
    }

    buildBooks() {
        try {
            if (!supports.csstransforms) return;

            const photosets = document.querySelectorAll('.photoset_wrap');

            if (photosets.length === 0) {
                this.initMasonry();
                return;
            }

            photosets.forEach((el, a) => {
                try {
                    if (!this.notebooks.has(el)) {
                        const isLast = (a + 1 === photosets.length);
                        const parent = el.closest('.features-container');
                        this.notebooks.set(el, new Notebook(this, el, {
                            parent:       parent,
                            lastNotebook: isLast
                        }));
                    }
                    if (this.notebooks.has(el)) {
                        const post = el.closest('.post');
                        if (post) post.classList.add('notebooked');
                    }
                } catch(e) {
                    console.warn('books.build each error:', e);
                }
            });
        } catch(e) {
                console.warn('books.build error:', e);
        }
    }

    isMasonryInitialized() {
        return this.masonryInstance !== null;
    }

    initMasonry() {
        if (!this.postsEl) return;

        safeImagesLoaded(this.postsEl, () => {
            try {
                this.masonryInstance = new Masonry(
                    this.postsEl,
                    CONFIG.MASONRY
                );
            } catch(e) {
                console.warn('Masonry init error:', e);
            }
        });
    }

    safeMasonry() {
        if (!this.postsEl) return;
        try {
            if (this.isMasonryInitialized()) {
                this.masonryInstance.layout();
            } else {
                this.initMasonry();
            }
        } catch(e) {
            console.warn('safeMasonry error:', e);
        }
    }

    reloadMasonry() {
        if (!this.postsEl) return;
        try {
            if (!this.isMasonryInitialized()) {
                this.initMasonry();
                return;
            }
            this.masonryInstance.reloadItems();
            this.masonryInstance.layout();
        } catch(e) {
            console.warn('reloadMasonry error:', e);
        }
    }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

const paper = new Paper();

document.addEventListener('DOMContentLoaded', function() {
    if (!document.body.classList.contains('meta')) {
        window.paper = paper;
        paper.setup();
    }

    if (document.querySelector('#posts-wrap.single')) {
        const container = document.querySelector('.photo-permalink-container');
        const galleryImg = container ? container.querySelector('img.post-image[data-src]') : null;
        if (container && galleryImg) {
            try {
                lightGallery(container, {
                    plugins: [lgFullscreen],
                    share: false,
                    autoplay: false,
                    autoplayControls: false,
                    thumbnail: true,
                    selector: 'img'
                });
            } catch(e) {
                console.error('LightGallery (single) error:', e);
            }
        }
    }
});
