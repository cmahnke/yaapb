// Inspired by https://gist.github.com/edadams/6038781
function openInTumblrLightbox(obj) {
  event.preventDefault();
  Tumblr.Lightbox.init([{
    width: obj.dataset.width,
    height: obj.dataset.height,
    low_res: obj.src,
    high_res: obj.src
  }], 1);
}

/* Lightbox mode for posts with a single image - woks in Chrome */
/*
$("div.photo-permalink-container a[class != 'photo-permalink']").attr('onclick', 'openInTumblrLightbox(this.children[0]);');
*/
$("div.photo-permalink-container a[class != 'photo-permalink']").
click(function() {
  event.preventDefault();
  Tumblr.Lightbox.init([{
    width: this.children[0].dataset.width,
    height: this.children[0].dataset.height,
    low_res: this.children[0].src,
    high_res: this.children[0].src
  }], 1);
  return false;
});


/* A hack to get the lightbox working on images in stacks */
paper.Notebook.prototype.writeMarkup = function() {
  var a, b, c, d, e;
  this.element = document.createElement('div'),
    this.element.className = 'notebook',
    this.element.id = 'notebook_' + parseInt(Math.random() * 100000),
    this.element.setAttribute('data-height', 0),
    this.element.setAttribute('data-width', 0),
    a = this.sources.length, e = [];
  while (a--) c = document.createElement('div'),
    c.style.backgroundImage = 'url(' + this.sources[a] + ')',
    b = (d = a === 0) != null ? d : {
      'true': !1
    },
    this.setImageHeights(this.sources[a], c, this.element, b, this.settings.lastNotebook, this.max_height),
    c.className = 'notebook-page page-style-' + parseInt(Math.random() * 5),
    c.setAttribute('data-page', this.sources.length - a),
    c.setAttribute('onclick', 'openInTumblrLightbox(this.children[0]);'),
    c.style.zIndex = a + 1000,
    this.pages.push(c),
    this.element.appendChild(c),
    c.addEventListener('touchstart', this, !1),
    c.addEventListener('touchmove', this, !1),
    c.addEventListener('touchend', this, !1),
    c.addEventListener('click', this, !1),
    Modernizr.touch ? e.push(void 0) : e.push(this.dragify(c));
  return e
};
