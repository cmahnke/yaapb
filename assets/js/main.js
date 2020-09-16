require('./modernizr');

window.$ = window.jQuery = require('jquery');
require('jquery-ui-dist/jquery-ui');
require('lightgallery');

require('jquery-pjax');
Spinner = require('spin');

bootstrap = require('bootstrap/dist/js/bootstrap');
require('masonry/jquery.masonry.js')

/* Modifications
 * Uncaught TypeError: url.indexOf is not a function: https://stackoverflow.com/questions/37738732/jquery-3-0-url-indexof-error
 * Installing old Vorions from GitHub: yarn add https://github.com/desandro/masonry.git#v2.1.08

 * Components for newer versions
 *      jQueryBridget = require('jquery-bridget');
 *      ImagesLoaded = require('imagesloaded');
 *      jQueryBridget = require('jquery-bridget');
 *      Masonry = require('masonry-layout');
 *    Needed dependencies: jquery-bridget outlayer
 */

var tagURLPrefix = '/tags';

var paper = {
    setup: function() {
        paper.movablePage == null && (paper.movablePage = new paper.MovablePage("#posts.show")),
            $("body").hasClass("index") && !window.location.href.match(/post/i) && !$("body").hasClass("tag_page") && paper.features.load(),
            paper.$posts = $("#posts.index"),
            paper.$posts.imagesLoaded(function() {
                return paper.books.build()
            });
    },
    features: {
        load: function() {
            var a = this;
            return $.ajax({
                url: tagURLPrefix + '/featured',
                success: function(b) {
                    var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
                    a.div = $('<div id="features" />').append('<div class="carousel slide" id="features-carousel" />'),
                        a.list = $('<div class="carousel-inner" />'),
                        $('body').addClass('with-features'),
                        a.div.find('.carousel').append(a.list),
                        k = $('#header').after(a.div).get(0),
                        a.spinner = (new Spinner).spin(k),
                        a.posts = $(b).find('.post'),
                        $('#header').find('#feature_bio').length > 0 && (i = $('<li />').attr("data-post-type", "bio").append($("#feature_bio").html()),
                            a.posts = i.add(a.posts)),
                        l = 0;
                    while (l < a.posts.length && l < 6) {
                        g = $(a.posts.get(l)),
                            p = g.attr('data-post-type'),
                            e = $('<div class="item" />');
                        if (p === 'bio')
                            j = g.html();
                        else if (p === 'photo')
                            d = g.find('img.post-image'),
                            d.each(function() {
                                return this.src = $(this).attr('data-highres')
                            }),
                            d.length > 1 ? (o = $('<div class="photoset_wrap" />'),
                                o.attr('data-permalink', g.find('a').attr('href')),
                                o.append(d),
                                e.addClass('photoset'),
                                j = o) : d.length === 1 && (j = $("<a href='" + g.find("a").attr("href") + "' class='photo-permalink' />").append(d));
                        else if (p === 'audio')
                            if (g.find('iframe').length > 0)
                                j = g.find('.post-content');
                            else {
                                j = $('<a />').attr({
                                        href: g.attr('data-permalink'),
                                        'class': 'audio_link'
                                    }).append('<span class="audio_player_icon">&nbsp;</span>'),
                                    c = g.find('.audio-player');
                                if (c.attr('data-artist') || c.attr('data-track') || c.attr('data-album'))
                                    m = $('<ul />'),
                                    c.attr('data-artist') && m.append('<li>' + decodeURI(c.attr("data-artist")) + '</li>'),
                                    c.attr('data-track') && m.append('<li>' + decodeURI(c.attr("data-track")) + '</li>'),
                                    c.attr('data-album') && m.append('<li>' + decodeURI(c.attr("data-album")) + '</li>'),
                                    m.appendTo(j);
                                c.attr('data-art') && $('<img />').attr("src", c.attr('data-art')).appendTo(j)
                            }
                        else
                            p === 'answer' ? (n = $('<a />').attr('href', g.attr('data-permalink')),
                                n.append(g.find('.post-content')),
                                j = $('<div class="post-pad" />').append(n)) : j = $('<div class="post-pad" />').append(g.find('.post-title')).append(g.find('.post-content'));
                        j = $('<div class="feature_content" />').append(j),
                            e.addClass(p).append(j).append(g.find('.source')).appendTo(a.list),
                            l === 0 && e.addClass('active'),
                            l += 1
                    }
                    a.prev = $('<a class="pagination-newer carousel-control-prev" href="#features-carousel" role="button" data-slide="prev">&#x25C0;</a>'),
                        a.next = $('<a class="pagination-older carousel-control-next" href="#features-carousel" role="button" data-slide="next">&#x25B6;</a>'),
                        a.arrows = $('<div class="pagination pagination-slideshow" />').append(a.prev).append(a.next),
                        l = a.list.find('.item').length,
                        f = $('<div class="navigation" />');
                    while (l--)
                        h = $('<em />').html('•').attr('data-index', a.list.find('.item').length - l - 1).attr('data-slide-to', a.list.find('.item').length - l - 1),
                        h.on('click', function(a) {
                            return $('#features .carousel').carousel(parseInt($(this).attr('data-index')))
                        }),
                        f.append(h);
                    return f.find('em:first-child').addClass('on'),
                        $('#features .carousel').on('slid', function(a) {
                            return $('#features .navigation em').removeClass('on'),
                                $('#features .navigation em').eq($(this).find('.active').index()).addClass('on')
                        }),
                        a.div.append(a.arrows).append(f),
                        a.div.imagesLoaded(function() {
                            return a.verticallyAlignContent(),
                                $('.carousel').carousel({
                                    interval: !1
                                }),
                                a.div.addClass('loaded'),
                                a.spinner.stop(),
                                $('#header .spinner').remove(),
                                paper.books.build(),
                                a.sizeImages()
                        })
                }
            })
        },
        sizeImages: function() {
            return this.div.find('.item.photo').each(function() {
                var a, b;
                return a = $(this),
                    a.addClass('measure_height'),
                    b = a.find("img").width(),
                    a.removeClass('measure_height'),
                    a.find('.post-pad, .photo-permalink, .source').width(b)
            })
        },
        verticallyAlignContent: function() {
            var a;
            return a = this.div.find('.carousel-inner').height(),
                this.div.find('.item:not(.photoset):not(.video)').each(function() {
                    var b, c;
                    return b = $(this).find('.feature_content'),
                        $(this).is(':visible') ? c = b.height() : ($(this).addClass('measure_height'),
                            c = b.height(),
                            $(this).removeClass('measure_height')),
                        b.css('paddingTop', Math.floor((a - c) / 2))
                })
        }
    },
    books: {
        build: function() {
            if (typeof Modernizr != "undefined" && Modernizr !== null && Modernizr.csstransforms) {
                return $(".photoset_wrap").length === 0 && paper.$posts.masonry(),
                    $(".photoset_wrap").each(function(a) {
                        var b, c, d, e, f, g;
                        d = $(this),
                            b = d.closest(".features-container"),
                            e = d.data("notebook"),
                            e == null && (f = (g = a + 1 === $(".photoset_wrap").length) != null ? g : {
                                    "true": !1
                                },
                                d.data("notebook", new paper.Notebook(this, {
                                    parent: b,
                                    lastNotebook: f
                                })));
                        if (d.data("notebook") != null)
                            return c = $(this).closest(".post").addClass("notebooked")
                    })
                }
        }
    }
};


paper.Notebook = function(a, b) {
    this.container = a,
        $(this.container).hide(),
        this.pages = [],
        this.currentPage = 0,
        this.permalink = this.container.getAttribute("data-permalink"),
        this.settings = b || {},
        this.settings.useRotation !== !1 && (this.settings.useRotation = !0),
        this.settings.xMovement !== !1 && (this.settings.xMovement = !0),
        this.settings.xMovement !== !1 && (this.settings.yMovement = !0),
        this.setMaximumHeight(),
        this.extractSourcesFromContainer(),
        this.writeMarkup(),
        this.appendElement(),
        $(this.container).show()
        $(this).trigger('notebook:initialized');
};

paper.Notebook.prototype = {
    setMaximumHeight: function() {
        return $("body").hasClass("show") ? this.max_height = 475 : $(this.container).parents("#features").length > 0 ? this.max_height = 400 : this.max_height = 400
    },
    extractSourcesFromContainer: function() {
        var a, b, c;
        b = this.container.querySelectorAll("img"),
            this.sources = [],
            a = b.length,
            c = [];
        while (a--)
            c.push(this.sources.push(b[a].src));
        return c
    },
    setImageHeights: function(a, b, c, d, e, f) {
        //return $("<img>").attr("src", a).load(function() {
        return $("<img>").attr("src", a).on('load', function() {
            var a, g, h, i;
            g = Math.round($(b).width() * this.height / this.width),
                h = $(b).width(),
                a = (i = $(c).parents(".feature_content").length > 0) != null ? i : {
                    "true": !1
                },
                g > f && (g = f,
                    h = Math.round(this.width * g / this.height)),
                $(b).css({
                    height: g,
                    width: h
                }).attr("data-height", g).attr("data-width", h),
                g > parseInt($(c).attr("data-height")) && $(c).attr("data-height", g),
                h > parseInt($(c).attr("data-width")) && $(c).attr("data-width", h),
                d && ($(c).css("height", $(c).attr("data-height")),
                    $(c).width() > parseInt($(c).attr("data-width")) && $(c).attr("data-width", $(c).width()),
                    a && $(c).css("width", $(c).attr("data-width")),
                    $(c).find("div").each(function() {
                        var a, b;
                        return b = Math.round(($(c).attr("data-height") - $(this).attr("data-height")) / 2),
                            a = Math.round(($(c).attr("data-width") - $(this).attr("data-width")) / 2),
                            $(this).css({
                                marginTop: b,
                                marginLeft: a
                            })
                    }));
            /*
             *  !$('#posts-wrap').hasClass('single') disables Masonry for single pages
             *  !$('body').hasClass('tag_page') diabales Masonry for s tag pages
             */
            if (d && e && !$('#posts-wrap').hasClass('single') && !$('body').hasClass('tag_page')) {
                return paper.$posts.masonry();
            }
        })
    },
    writeMarkup: function() {
        var a, b, c, d, e;
        this.element = document.createElement("div"),
            this.element.className = "notebook",
            this.element.id = "notebook_" + parseInt(Math.random() * 1e5),
            this.element.setAttribute("data-height", 0),
            this.element.setAttribute("data-width", 0),
            a = this.sources.length,
            e = [];
        while (a--)
            c = document.createElement("div"),
            c.style.backgroundImage = "url(" + this.sources[a] + ")",
            b = (d = a === 0) != null ? d : {
                "true": !1
            },
            this.setImageHeights(this.sources[a], c, this.element, b, this.settings.lastNotebook, this.max_height),
            c.className = "notebook-page page-style-" + parseInt(Math.random() * 5),
            c.setAttribute("data-page", this.sources.length - a),
            //c.setAttribute('onclick', '$(this).click()'),
            c.setAttribute('data-src', $(this.container.children[a]).find('img').data('src')),
            c.setAttribute('data-thumb', $(this.container.children[a]).find('img').data('thumb')),
            c.style.zIndex = a + 1e3,
            this.pages.push(c),
            this.element.appendChild(c),
            c.addEventListener("touchstart", this, !1),
            c.addEventListener("touchmove", this, !1),
            c.addEventListener("touchend", this, !1),
            c.addEventListener("click", this, !1),
            Modernizr.touch ? e.push(void 0) : e.push(this.dragify(c));
        return e
    },
    appendElement: function() {
        return this.container.innerHTML = "",
            this.container.appendChild(this.element)
    },
    dragify: function(a) {
        var b = this;
        return $(a).draggable({
            scroll: !1,
            start: function(a) {
                return b.onDragStart(a)
            },
            drag: function(a) {
                return b.onDragMove(a)
            },
            stop: function(a) {
                return b.onDragEnd(a)
            }
        })
    },
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                return this.onTouchStart(a);
            case "touchmove":
                return this.onTouchMove(a);
            case "touchend":
                return this.onTouchEnd(a);
            case "click":
                return this.onClick(a)
        }
    },
    onTouchStart: function(a) {
        var b;
        a.preventDefault(),
            this.target = a.target,
            b = this.target.style,
            b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s",
            this.start = {
                pageX: a.touches[0].pageX,
                pageY: a.touches[0].pageY,
                time: Number(new Date)
            },
            this.deltaX = 0,
            this.deltaY = 0,
            this.originalTransform = $(this.target).css("-webkit-transform");
        if (this.settings.parent != null)
            return this.settings.parent.addClass("dragging")
    },
    onTouchMove: function(a) {
        var b;
        return a.touches.length > 1 || a.scale && a.scale !== 1 ? !0 : (a.preventDefault(),
            a.stopPropagation(),
            this.settings.xMovement && (this.deltaX = a.touches[0].pageX - this.start.pageX),
            this.settings.yMovement && (this.deltaY = a.touches[0].pageY - this.start.pageY),
            b = this.target.style,
            b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = this.originalTransform + (" translate(" + this.deltaX + "px, " + this.deltaY + "px)"))
    },
    onTouchEnd: function(a) {
        var b, c, d = this;
        this.distance = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY),
            this.deltaT = Number(new Date) - this.start.time,
            this.rect = this.element.getBoundingClientRect(),
            this.width = this.rect.right - this.rect.left,
            this.height = this.rect.bottom - this.rect.top,
            c = this.target.style,
            c.webkitTransitionProperty = c.MozTransitionProperty = c.msTransitionProperty = c.OTransitionProperty = c.transitionProperty = "all",
            c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = ".4s",
            c.webkitTransform = c.MozTransform = c.msTransform = c.OTransform = c.transform = "rotate(0deg)",
            this.target.style.top = this.target.style.left = "",
            window.setTimeout(function() {
                if (d.settings.parent != null)
                    return d.settings.parent.removeClass("dragging")
            }, 400),
            b = Math.abs(this.deltaY) > this.height / 2 || Math.abs(this.deltaX) > this.width / 2 || this.distance > 20 && this.deltaT < 250;
        if (b)
            return this.flip();
        if (this.deltaT < 500 && this.distance < 2 && !$("body").hasClass("show"))
            return window.location.href = this.permalink
    },
    onDragStart: function(a) {
        var b;
        this.dragged = !0,
            this.target = a.target,
            b = this.target.style,
            b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s",
            this.start = {
                pageX: a.pageX,
                pageY: a.pageY,
                time: Number(new Date)
            },
            this.deltaX = 0,
            this.deltaY = 0;
        if (this.settings.parent != null)
            return this.settings.parent.addClass("dragging")
    },
    onDragMove: function(a) {
        return this.settings.parent != null && this.settings.parent.addClass("dragging"),
            this.deltaX = a.pageX - this.start.pageX,
            this.deltaY = a.pageY - this.start.pageY
    },
    onDragEnd: function(a) {
        return this.onTouchEnd(a)
    },
    onClick: function(a) {
        if (this.dragged)
            return this.dragged = !1,
                !0;

        if (!$("body").hasClass("show")) {
            return window.location.href = this.permalink
        } else {
            // Lightgallery for a image stack
            var gallery = [];
            $(this.container).find('.notebook-page').each(function () {
                gallery.push({src: $(this).data('src'), thumb: $(this).data('thumb')});
            });
            $(this).lightGallery({
                dynamic: true,
                dynamicEl: gallery
            });
        }
    },
    flip: function() {
        var a, b, c, d, e, f, g, h, i = this;
        return d = this.deltaY / this.distance,
            b = this.deltaX / this.distance,
            c = this.distance,
            a = (this.width > this.height ? this.width : this.height) * 1.2,
            f = Math.floor(a * b),
            g = Math.floor(a * d),
            h = .2,
            e = this.target.style,
            e.webkitTransitionDuration = e.MozTransitionDuration = e.msTransitionDuration = e.OTransitionDuration = e.transitionDuration = h + "s",
            Modernizr.touch ? e.webkitTransform = e.MozTransform = e.msTransform = e.OTransform = e.transform = "translate(" + f + "px," + g + "px)" : (e.left = f + "px",
                e.top = g + "px"),
            window.setTimeout(function() {
                return i.afterFlip()
            }, h * 1e3)
    },
    afterFlip: function() {
        var a, b, c, d, e;
        a = this.pages.length,
            this.currentPage += 1,
            this.currentPage === a && (this.currentPage = 0),
            e = [];
        while (a--)
            c = this.pages[a],
            b = parseInt(c.style.zIndex) + 1,
            d = c.style,
            c.style.zIndex = b < this.pages.length + 1e3 ? b : 1e3,
            e.push(d.top = d.left = d.webkitTransform = d.MozTransform = d.msTransform = d.OTransform = d.transform = "");
        return e
    }

};

paper.MovablePage = function(a, b) {
    switch (typeof a) {
        case "string":
            this.element = document.querySelector(a);
            break;
        case "object":
            this.element = a
    }
    if (!this.element || !$.support.pjax)
        return null;
    b || (b = {}),
        this.nextSelector = b.nextSelector || "#features a.pagination-older",
        this.prevSelector = b.prevSelector || "#features a.pagination-newer",
        this.fragmentSelector = b.fragmentSelector || "#posts",
        this.activateArrows(),
        this.element.addEventListener("touchstart", this, !1),
        this.element.addEventListener("touchmove", this, !1),
        this.element.addEventListener("touchend", this, !1)
};

paper.MovablePage.prototype = {
    next: function() {
        var a;
        return a = this.element.style,
            a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = this.getVelocityAdjustedTransitionDuration() / 1e3 + "s",
            a.webkitTransitionProperty = a.MozTransitionProperty = a.msTransitionProperty = a.OTransitionProperty = a.transitionProperty = "all",
            a.webkitTransform = a.MozTransform = a.msTransform = a.OTransform = a.transform = "translate3d(-100%,0,0)",
            a.opacity = "0",
            this.load(this.nextLink.href)
    },
    prev: function() {
        var a;
        return a = this.element.style,
            a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = this.getVelocityAdjustedTransitionDuration() / 1e3 + "s",
            a.webkitTransitionProperty = a.MozTransitionProperty = a.msTransitionProperty = a.OTransitionProperty = a.transitionProperty = "all",
            a.webkitTransform = a.MozTransform = a.msTransform = a.OTransform = a.transform = "translate3d(100%,0,0)",
            a.opacity = "0",
            this.load(this.prevLink.href)
    },
    getVelocityAdjustedTransitionDuration: function() {
        var a, b, c;
        return this.start == null ? 300 : (this.deltaT = Number(new Date) - this.start.time,
            c = Math.abs(this.deltaX / this.deltaT),
            a = $(window).width() - Math.abs(this.deltaX),
            b = Math.abs(this.deltaT * a / this.deltaX),
            b > 500 && (b = 500),
            b)
    },
    load: function(a) {
        var b = this;
        return window.setTimeout(function() {
            return $ && $.support.pjax ? $.pjax({
                container: b.fragmentSelector,
                fragment: b.fragmentSelector,
                url: a,
                timeout: 2e3,
                success: function(a) {
                    var c, d, e;
                    return e = b.element.style,
                        e.webkitTransitionProperty = e.MozTransitionProperty = e.msTransitionProperty = e.OTransitionProperty = e.transitionProperty = "opacity",
                        e.opacity = "1",
                        e.webkitTransform = e.MozTransform = e.msTransform = e.OTransform = e.transform = "",
                        d = $(a).find(".pagination"),
                        c = $(a).find("ol.notes"),
                        $(".note-wrap").html(c),
                        $("#pagination-posts").replaceWith(d),
                        b.activateArrows(),
                        paper.setup()
                }
            }) : window.location.href = a
        }, this.getVelocityAdjustedTransitionDuration())
    },
    activateArrows: function() {
        var a = this;
        this.nextLink = document.querySelector(this.nextSelector),
            this.prevLink = document.querySelector(this.prevSelector),
            this.nextLink != null && (this.nextLink.onclick = function(b) {
                    return b.preventDefault(),
                        a.next()
                },
                this.nextPost = $("<div />").hide().load(this.nextLink.href + " " + this.fragmentSelector));
        if (this.prevLink != null)
            return this.prevLink.onclick = function(b) {
                    return b.preventDefault(),
                        a.prev()
                },
                this.prevPost = $("<div />").hide().load(this.prevLink.href + " " + this.fragmentSelector)
    },
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                return this.onTouchStart(a);
            case "touchmove":
                return this.onTouchMove(a);
            case "touchend":
                return this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        var b;
        return b = this.element.style,
            b.webkitTransitionProperty = b.MozTransitionProperty = b.msTransitionProperty = b.OTransitionProperty = b.transitionProperty = "all",
            b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s",
            this.start = {
                pageX: a.touches[0].pageX,
                pageY: a.touches[0].pageY,
                time: Number(new Date)
            },
            this.deltaX = 0,
            this.isScrolling = void 0
    },
    onTouchMove: function(a) {
        var b;
        if (a.touches.length > 1 || a.scale && a.scale !== 1)
            return !0;
        this.deltaX = a.touches[0].pageX - this.start.pageX,
            typeof this.isScrolling == "undefined" && (this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(a.touches[0].pageY - this.start.pageY)));
        if (!this.isScrolling)
            return a.preventDefault(),
                b = this.element.style,
                b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = "translate3d(" + this.deltaX + "px, 0, 0)"
    },
    onTouchEnd: function(a) {
        var b;
        return this.isScrolling ? !0 : (this.deltaX > 200 || this.deltaX > 20 && Number(new Date) - this.start.time < 250) && this.prevLink != null ? this.prev() : (this.deltaX < -200 || this.deltaX < -20 && Number(new Date) - this.start.time < 250) && this.nextLink != null ? this.next() : (b = this.element.style,
            b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = ".5s",
            b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = "")
    }
}

$(document).ready(function() {
    if (!$('body').hasClass('meta')) {
        window.paper = paper;
        paper.setup();
    }

    if ($('#post-wrap').hasClass('single')) {
        // Lightgallery for a single image
        $('.photo-permalink-container').lightGallery({
            share: false,
            autoplay: false,
            autoplayControls: false,
            selector: '.post-image'
        });
    }

    //$('#pagination-pages .pagination-older, #pagination-pages .pagination-newer').off('click');
});
