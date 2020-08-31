(() => {
  var __defineProperty = Object.defineProperty;
  var __hasOwnProperty = Object.prototype.hasOwnProperty;
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __markAsModule = (target) => {
    return __defineProperty(target, "__esModule", {value: true});
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defineProperty(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key in module)
        if (__hasOwnProperty.call(module, key) && !__hasOwnProperty.call(target, key) && key !== "default")
          __defineProperty(target, key, {get: () => module[key], enumerable: true});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defineProperty({}, "default", {value: module, enumerable: true}), module);
  };

  // assets/js/modernizr.js
  var require_modernizr = __commonJS(() => {
    /*!
     * modernizr v3.11.3
     * Build https://modernizr.com/download?-backgroundsize-csstransforms-csstransforms3d-csstransitions-fontface-generatedcontent-touchevents-dontmin
     *
     * Copyright (c)
     *  Faruk Ates
     *  Paul Irish
     *  Alex Sexton
     *  Ryan Seddon
     *  Patrick Kettner
     *  Stu Cox
     *  Richard Herrera
     *  Veeck
    
     * MIT License
     */
    (function(scriptGlobalObject, window2, document2, undefined2) {
      var tests = [];
      var ModernizrProto = {
        _version: "3.11.3",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function(test, cb) {
          var self2 = this;
          setTimeout(function() {
            cb(self2[test]);
          }, 0);
        },
        addTest: function(name, fn, options) {
          tests.push({name, fn, options});
        },
        addAsyncTest: function(fn) {
          tests.push({name: null, fn});
        }
      };
      var Modernizr2 = function() {
      };
      Modernizr2.prototype = ModernizrProto;
      Modernizr2 = new Modernizr2();
      var classes = [];
      function is(obj, type) {
        return typeof obj === type;
      }
      ;
      function testRunner() {
        var featureNames;
        var feature;
        var aliasIdx;
        var result;
        var nameIdx;
        var featureName;
        var featureNameSplit;
        for (var featureIdx in tests) {
          if (tests.hasOwnProperty(featureIdx)) {
            featureNames = [];
            feature = tests[featureIdx];
            if (feature.name) {
              featureNames.push(feature.name.toLowerCase());
              if (feature.options && feature.options.aliases && feature.options.aliases.length) {
                for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
                  featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
                }
              }
            }
            result = is(feature.fn, "function") ? feature.fn() : feature.fn;
            for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
              featureName = featureNames[nameIdx];
              featureNameSplit = featureName.split(".");
              if (featureNameSplit.length === 1) {
                Modernizr2[featureNameSplit[0]] = result;
              } else {
                if (!Modernizr2[featureNameSplit[0]] || Modernizr2[featureNameSplit[0]] && !(Modernizr2[featureNameSplit[0]] instanceof Boolean)) {
                  Modernizr2[featureNameSplit[0]] = new Boolean(Modernizr2[featureNameSplit[0]]);
                }
                Modernizr2[featureNameSplit[0]][featureNameSplit[1]] = result;
              }
              classes.push((result ? "" : "no-") + featureNameSplit.join("-"));
            }
          }
        }
      }
      ;
      var docElement = document2.documentElement;
      var isSVG = docElement.nodeName.toLowerCase() === "svg";
      function createElement() {
        if (typeof document2.createElement !== "function") {
          return document2.createElement(arguments[0]);
        } else if (isSVG) {
          return document2.createElementNS.call(document2, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return document2.createElement.apply(document2, arguments);
        }
      }
      ;
      function getBody() {
        var body = document2.body;
        if (!body) {
          body = createElement(isSVG ? "svg" : "body");
          body.fake = true;
        }
        return body;
      }
      ;
      function injectElementWithStyles(rule, callback, nodes, testnames) {
        var mod = "modernizr";
        var style;
        var ret;
        var node;
        var docOverflow;
        var div = createElement("div");
        var body = getBody();
        if (parseInt(nodes, 10)) {
          while (nodes--) {
            node = createElement("div");
            node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
            div.appendChild(node);
          }
        }
        style = createElement("style");
        style.type = "text/css";
        style.id = "s" + mod;
        (!body.fake ? div : body).appendChild(style);
        body.appendChild(div);
        if (style.styleSheet) {
          style.styleSheet.cssText = rule;
        } else {
          style.appendChild(document2.createTextNode(rule));
        }
        div.id = mod;
        if (body.fake) {
          body.style.background = "";
          body.style.overflow = "hidden";
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = "hidden";
          docElement.appendChild(body);
        }
        ret = callback(div, rule);
        if (body.fake) {
          body.parentNode.removeChild(body);
          docElement.style.overflow = docOverflow;
          docElement.offsetHeight;
        } else {
          div.parentNode.removeChild(div);
        }
        return !!ret;
      }
      ;
      var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
      /*!
      {
        "name": "@font-face",
        "property": "fontface",
        "authors": ["Diego Perini", "Mat Marquis"],
        "tags": ["css"],
        "knownBugs": [
          "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
          "False Positive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
        ],
        "notes": [{
          "name": "@font-face detection routine by Diego Perini",
          "href": "http://javascript.nwbox.com/CSSSupport/"
        }, {
          "name": "Filament Group @font-face compatibility research",
          "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
        }, {
          "name": "Filament Grunticon/@font-face device testing results",
          "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
        }, {
          "name": "CSS fonts on Android",
          "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
        }, {
          "name": "@font-face and Android",
          "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
        }]
      }
      !*/
      var unsupportedUserAgent = function() {
        var ua = navigator.userAgent;
        var webos = ua.match(/w(eb)?osbrowser/gi);
        var wppre8 = ua.match(/windows phone/gi) && ua.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
        return webos || wppre8;
      }();
      if (unsupportedUserAgent) {
        Modernizr2.addTest("fontface", false);
      } else {
        testStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
          var style = document2.getElementById("smodernizr");
          var sheet = style.sheet || style.styleSheet;
          var cssText = sheet ? sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || "" : "";
          var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(" ")[0]) === 0;
          Modernizr2.addTest("fontface", bool);
        });
      }
      ;
      var omPrefixes = "Moz O ms Webkit";
      var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
      ModernizrProto._cssomPrefixes = cssomPrefixes;
      function contains(str, substr) {
        return !!~("" + str).indexOf(substr);
      }
      ;
      var modElem = {
        elem: createElement("modernizr")
      };
      Modernizr2._q.push(function() {
        delete modElem.elem;
      });
      var mStyle = {
        style: modElem.elem.style
      };
      Modernizr2._q.unshift(function() {
        delete mStyle.style;
      });
      function domToCSS(name) {
        return name.replace(/([A-Z])/g, function(str, m1) {
          return "-" + m1.toLowerCase();
        }).replace(/^ms-/, "-ms-");
      }
      ;
      function computedStyle(elem, pseudo, prop) {
        var result;
        if ("getComputedStyle" in window2) {
          result = getComputedStyle.call(window2, elem, pseudo);
          var console2 = window2.console;
          if (result !== null) {
            if (prop) {
              result = result.getPropertyValue(prop);
            }
          } else {
            if (console2) {
              var method = console2.error ? "error" : "log";
              console2[method].call(console2, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
          }
        } else {
          result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
        }
        return result;
      }
      ;
      function nativeTestProps(props, value) {
        var i2 = props.length;
        if ("CSS" in window2 && "supports" in window2.CSS) {
          while (i2--) {
            if (window2.CSS.supports(domToCSS(props[i2]), value)) {
              return true;
            }
          }
          return false;
        } else if ("CSSSupportsRule" in window2) {
          var conditionText = [];
          while (i2--) {
            conditionText.push("(" + domToCSS(props[i2]) + ":" + value + ")");
          }
          conditionText = conditionText.join(" or ");
          return injectElementWithStyles("@supports (" + conditionText + ") { #modernizr { position: absolute; } }", function(node) {
            return computedStyle(node, null, "position") === "absolute";
          });
        }
        return undefined2;
      }
      ;
      function cssToDOM(name) {
        return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
          return m1 + m2.toUpperCase();
        }).replace(/^-/, "");
      }
      ;
      function testProps(props, prefixed, value, skipValueTest) {
        skipValueTest = is(skipValueTest, "undefined") ? false : skipValueTest;
        if (!is(value, "undefined")) {
          var result = nativeTestProps(props, value);
          if (!is(result, "undefined")) {
            return result;
          }
        }
        var afterInit, i2, propsLength, prop, before;
        var elems = ["modernizr", "tspan", "samp"];
        while (!mStyle.style && elems.length) {
          afterInit = true;
          mStyle.modElem = createElement(elems.shift());
          mStyle.style = mStyle.modElem.style;
        }
        function cleanElems() {
          if (afterInit) {
            delete mStyle.style;
            delete mStyle.modElem;
          }
        }
        propsLength = props.length;
        for (i2 = 0; i2 < propsLength; i2++) {
          prop = props[i2];
          before = mStyle.style[prop];
          if (contains(prop, "-")) {
            prop = cssToDOM(prop);
          }
          if (mStyle.style[prop] !== undefined2) {
            if (!skipValueTest && !is(value, "undefined")) {
              try {
                mStyle.style[prop] = value;
              } catch (e) {
              }
              if (mStyle.style[prop] !== before) {
                cleanElems();
                return prefixed === "pfx" ? prop : true;
              }
            } else {
              cleanElems();
              return prefixed === "pfx" ? prop : true;
            }
          }
        }
        cleanElems();
        return false;
      }
      ;
      var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
      ModernizrProto._domPrefixes = domPrefixes;
      function fnBind(fn, that) {
        return function() {
          return fn.apply(that, arguments);
        };
      }
      ;
      function testDOMProps(props, obj, elem) {
        var item;
        for (var i2 in props) {
          if (props[i2] in obj) {
            if (elem === false) {
              return props[i2];
            }
            item = obj[props[i2]];
            if (is(item, "function")) {
              return fnBind(item, elem || obj);
            }
            return item;
          }
        }
        return false;
      }
      ;
      function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(" ");
        if (is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed, value, skipValueTest);
        } else {
          props = (prop + " " + domPrefixes.join(ucProp + " ") + ucProp).split(" ");
          return testDOMProps(props, prefixed, elem);
        }
      }
      ModernizrProto.testAllProps = testPropsAll;
      function testAllProps(prop, value, skipValueTest) {
        return testPropsAll(prop, undefined2, undefined2, value, skipValueTest);
      }
      ModernizrProto.testAllProps = testAllProps;
      /*!
      {
        "name": "Background Size",
        "property": "backgroundsize",
        "tags": ["css"],
        "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
        "notes": [{
          "name": "Related Issue",
          "href": "https://github.com/Modernizr/Modernizr/issues/396"
        }]
      }
      !*/
      Modernizr2.addTest("backgroundsize", testAllProps("backgroundSize", "100%", true));
      /*!
      {
        "name": "CSS Generated Content",
        "property": "generatedcontent",
        "tags": ["css"],
        "warnings": ["Android won't return correct height for anything below 7px #738"],
        "notes": [{
          "name": "W3C Spec",
          "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
        }, {
          "name": "MDN Docs on :before",
          "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
        }, {
          "name": "MDN Docs on :after",
          "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::after"
        }]
      }
      !*/
      testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(node) {
        Modernizr2.addTest("generatedcontent", node.offsetHeight >= 6);
      });
      /*!
      {
        "name": "CSS Transforms",
        "property": "csstransforms",
        "caniuse": "transforms2d",
        "tags": ["css"]
      }
      !*/
      Modernizr2.addTest("csstransforms", function() {
        return navigator.userAgent.indexOf("Android 2.") === -1 && testAllProps("transform", "scale(1)", true);
      });
      /*!
      {
        "name": "CSS Supports",
        "property": "supports",
        "caniuse": "css-featurequeries",
        "tags": ["css"],
        "builderAliases": ["css_supports"],
        "notes": [{
          "name": "W3C Spec (The @supports rule)",
          "href": "https://dev.w3.org/csswg/css3-conditional/#at-supports"
        }, {
          "name": "Related Github Issue",
          "href": "https://github.com/Modernizr/Modernizr/issues/648"
        }, {
          "name": "W3C Spec (The CSSSupportsRule interface)",
          "href": "https://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
        }]
      }
      !*/
      var newSyntax = "CSS" in window2 && "supports" in window2.CSS;
      var oldSyntax = "supportsCSS" in window2;
      Modernizr2.addTest("supports", newSyntax || oldSyntax);
      /*!
      {
        "name": "CSS Transforms 3D",
        "property": "csstransforms3d",
        "caniuse": "transforms3d",
        "tags": ["css"],
        "warnings": [
          "Chrome may occasionally fail this test on some systems; more info: https://bugs.chromium.org/p/chromium/issues/detail?id=129004"
        ]
      }
      !*/
      Modernizr2.addTest("csstransforms3d", function() {
        return !!testAllProps("perspective", "1px", true);
      });
      /*!
      {
        "name": "CSS Transitions",
        "property": "csstransitions",
        "caniuse": "css-transitions",
        "tags": ["css"]
      }
      !*/
      Modernizr2.addTest("csstransitions", testAllProps("transition", "all", true));
      var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
      ModernizrProto._prefixes = prefixes;
      var mq = function() {
        var matchMedia = window2.matchMedia || window2.msMatchMedia;
        if (matchMedia) {
          return function(mq2) {
            var mql = matchMedia(mq2);
            return mql && mql.matches || false;
          };
        }
        return function(mq2) {
          var bool = false;
          injectElementWithStyles("@media " + mq2 + " { #modernizr { position: absolute; } }", function(node) {
            bool = computedStyle(node, null, "position") === "absolute";
          });
          return bool;
        };
      }();
      ModernizrProto.mq = mq;
      /*!
      {
        "name": "Touch Events",
        "property": "touchevents",
        "caniuse": "touch",
        "tags": ["media", "attribute"],
        "notes": [{
          "name": "Touch Events spec",
          "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
        }],
        "warnings": [
          "** DEPRECATED see https://github.com/Modernizr/Modernizr/pull/2432 **",
          "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
        ],
        "knownBugs": [
          "False-positive on some configurations of Nokia N900",
          "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
        ]
      }
      !*/
      Modernizr2.addTest("touchevents", function() {
        if ("ontouchstart" in window2 || window2.TouchEvent || window2.DocumentTouch && document2 instanceof DocumentTouch) {
          return true;
        }
        var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
        return mq(query);
      });
      testRunner();
      delete ModernizrProto.addTest;
      delete ModernizrProto.addAsyncTest;
      for (var i = 0; i < Modernizr2._q.length; i++) {
        Modernizr2._q[i]();
      }
      scriptGlobalObject.Modernizr = Modernizr2;
      ;
    })(window, window, document);
  });

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS((exports, module) => {
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    (function(global2, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global2.document ? factory(global2, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global2);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.5.1", jQuery2 = function(selector, context) {
        return new jQuery2.fn.init(selector, context);
      };
      jQuery2.fn = jQuery2.prototype = {
        jquery: version,
        constructor: jQuery2,
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        pushStack: function(elems) {
          var ret = jQuery2.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        each: function(callback) {
          return jQuery2.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery2.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery2.extend = jQuery2.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery2.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery2.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        globalEval: function(code, options, doc) {
          DOMEval(code, {nonce: options && options.nonce}, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery2.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        guid: 1,
        support
      });
      if (typeof Symbol === "function") {
        jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery2.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      var Sizzle = function(window3) {
        var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
          var i2 = 0, len = list.length;
          for (; i2 < len; i2++) {
            if (list[i2] === elem) {
              return i2;
            }
          }
          return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "�";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
          return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {dir: "parentNode", next: "legend"});
        try {
          push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
          arr2[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: arr2.length ? function(target, els) {
              pushNative.apply(target, slice2.call(els));
            } : function(target, els) {
              var j = target.length, i2 = 0;
              while (target[j++] = els[i2++]) {
              }
              target.length = j - 1;
            }
          };
        }
        function Sizzle2(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext !== context || !support2.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = nid.replace(rcssescape, fcssescape);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrim2, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function addHandle(attrs, handler) {
          var arr3 = attrs.split("|"), i2 = arr3.length;
          while (i2--) {
            Expr.attrHandle[arr3[i2]] = handler;
          }
        }
        function siblingCheck(a, b) {
          var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
          if (diff) {
            return diff;
          }
          if (cur) {
            while (cur = cur.nextSibling) {
              if (cur === b) {
                return -1;
              }
            }
          }
          return a ? 1 : -1;
        }
        function createInputPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support2 = Sizzle2.support = {};
        isXML = Sizzle2.isXML = function(elem) {
          var namespace = elem.namespaceURI, docElem2 = (elem.ownerDocument || elem).documentElement;
          return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
        };
        setDocument = Sizzle2.setDocument = function(node) {
          var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          docElem = document3.documentElement;
          documentIsHTML = !isXML(document3);
          if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            if (subWindow.addEventListener) {
              subWindow.addEventListener("unload", unloadHandler, false);
            } else if (subWindow.attachEvent) {
              subWindow.attachEvent("onunload", unloadHandler);
            }
          }
          support2.scope = assert(function(el) {
            docElem.appendChild(el).appendChild(document3.createElement("div"));
            return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
          });
          support2.attributes = assert(function(el) {
            el.className = "i";
            return !el.getAttribute("className");
          });
          support2.getElementsByTagName = assert(function(el) {
            el.appendChild(document3.createComment(""));
            return !el.getElementsByTagName("*").length;
          });
          support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
          support2.getById = assert(function(el) {
            docElem.appendChild(el).id = expando;
            return !document3.getElementsByName || !document3.getElementsByName(expando).length;
          });
          if (support2.getById) {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else if (support2.qsa) {
              return context.querySelectorAll(tag);
            }
          } : function(tag, context) {
            var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
            if (tag === "*") {
              while (elem = results[i2++]) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }
              return tmp;
            }
            return results;
          };
          Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyMatches = [];
          rbuggyQSA = [];
          if (support2.qsa = rnative.test(document3.querySelectorAll)) {
            assert(function(el) {
              var input;
              docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
              if (el.querySelectorAll("[msallowcapture^='']").length) {
                rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
              }
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              el.querySelectorAll("\\\f");
              rbuggyQSA.push("[\\r\\n\\f]");
            });
            assert(function(el) {
              el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              if (el.querySelectorAll("[name=d]").length) {
                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
              }
              if (el.querySelectorAll(":enabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              docElem.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
            });
          }
          if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
            assert(function(el) {
              support2.disconnectedMatch = matches.call(el, "*");
              matches.call(el, "[s!='']:x");
              rbuggyMatches.push("!=", pseudos);
            });
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
          hasCompare = rnative.test(docElem.compareDocumentPosition);
          contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
          } : function(a, b) {
            if (b) {
              while (b = b.parentNode) {
                if (b === a) {
                  return true;
                }
              }
            }
            return false;
          };
          sortOrder = hasCompare ? function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                return -1;
              }
              if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          } : function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
            if (!aup || !bup) {
              return a == document3 ? -1 : b == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
            } else if (aup === bup) {
              return siblingCheck(a, b);
            }
            cur = a;
            while (cur = cur.parentNode) {
              ap.unshift(cur);
            }
            cur = b;
            while (cur = cur.parentNode) {
              bp.unshift(cur);
            }
            while (ap[i2] === bp[i2]) {
              i2++;
            }
            return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
          };
          return document3;
        };
        Sizzle2.matches = function(expr, elements) {
          return Sizzle2(expr, null, null, elements);
        };
        Sizzle2.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return Sizzle2(expr, document3, null, [elem]).length > 0;
        };
        Sizzle2.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return contains(context, elem);
        };
        Sizzle2.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle2.escape = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle2.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle2.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support2.detectDuplicates;
          sortInput = !support2.sortStable && results.slice(0);
          results.sort(sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              results.splice(duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        getText = Sizzle2.getText = function(elem) {
          var node, ret = "", i2 = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i2++]) {
              ret += getText(node);
            }
          } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        };
        Expr = Sizzle2.selectors = {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {dir: "parentNode", first: true},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: true},
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  Sizzle2.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                Sizzle2.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr["CHILD"].test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = Sizzle2.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? function(elem) {
                return !!elem.parentNode;
              } : function(elem, _context, xml) {
                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      node = elem;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                            uniqueCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf2(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return Sizzle2(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || getText(elem)).indexOf(text) > -1;
              };
            }),
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                Sizzle2.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            target: function(elem) {
              var hash = window3.location && window3.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === docElem;
            },
            focus: function(elem) {
              return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              var nodeName2 = elem.nodeName.toLowerCase();
              return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos["empty"](elem);
            },
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
            },
            text: function(elem) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {submit: true, reset: true}) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rcombinators.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: match[0].replace(rtrim2, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
            return false;
          } : function(elem, context, xml) {
            var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
            if (xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                  if (skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir2] || elem;
                  } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  } else {
                    uniqueCache[key] = newCache;
                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            Sizzle2(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher) {
              matcher(matcherIn, matcherOut, context, xml);
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf2(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({value: tokens[i2 - 2].type === " " ? "*" : ""})).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                Sizzle2.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle2.compile = function(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            cached.selector = selector;
          }
          return cached;
        };
        select = Sizzle2.select = function(selector, context, results, seed) {
          var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find = Expr.find[type]) {
                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        };
        support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support2.detectDuplicates = !!hasDuplicate;
        setDocument();
        support2.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        if (!assert(function(el) {
          el.innerHTML = "<a href='#'></a>";
          return el.firstChild.getAttribute("href") === "#";
        })) {
          addHandle("type|href|height|width", function(elem, name, isXML2) {
            if (!isXML2) {
              return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
          });
        }
        if (!support2.attributes || !assert(function(el) {
          el.innerHTML = "<input/>";
          el.firstChild.setAttribute("value", "");
          return el.firstChild.getAttribute("value") === "";
        })) {
          addHandle("value", function(elem, _name, isXML2) {
            if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
              return elem.defaultValue;
            }
          });
        }
        if (!assert(function(el) {
          return el.getAttribute("disabled") == null;
        })) {
          addHandle(booleans, function(elem, name, isXML2) {
            var val;
            if (!isXML2) {
              return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
          });
        }
        return Sizzle2;
      }(window2);
      jQuery2.find = Sizzle;
      jQuery2.expr = Sizzle.selectors;
      jQuery2.expr[":"] = jQuery2.expr.pseudos;
      jQuery2.uniqueSort = jQuery2.unique = Sizzle.uniqueSort;
      jQuery2.text = Sizzle.getText;
      jQuery2.isXMLDoc = Sizzle.isXML;
      jQuery2.contains = Sizzle.contains;
      jQuery2.escapeSelector = Sizzle.escape;
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery2(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery2.expr.match.needsContext;
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      ;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery2.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery2.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery2.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery2.filter(qualifier, elements, not);
      }
      jQuery2.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery2.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self2 = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self2[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self2[i], ret);
          }
          return len > 1 ? jQuery2.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [], false).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery2 ? context[0] : context;
              jQuery2.merge(this, jQuery2.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : selector(jQuery2);
        }
        return jQuery2.makeArray(selector, this);
      };
      init.prototype = jQuery2.fn;
      rootjQuery = jQuery2(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery2.fn.extend({
        has: function(target) {
          var targets = jQuery2(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery2.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
        },
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery2(elem), this[0]);
          }
          return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
          return this.pushStack(jQuery2.uniqueSort(jQuery2.merge(this.get(), jQuery2(selector, context))));
        },
        addBack: function(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery2.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery2.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery2.fn[name] = function(until, selector) {
          var matched = jQuery2.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery2.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery2.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery2.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self2 = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self2.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery2.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self2.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
        return self2;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery2.extend({
        Deferred: function(func) {
          var tuples = [
            [
              "notify",
              "progress",
              jQuery2.Callbacks("memory"),
              jQuery2.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise3 = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            catch: function(fn) {
              return promise3.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery2.Deferred(function(newDefer) {
                jQuery2.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                      } else {
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process2 = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(e, process2.stackTrace);
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process2();
                  } else {
                    if (jQuery2.Deferred.getStackHook) {
                      process2.stackTrace = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process2);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery2.extend(obj, promise3) : promise3;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise3[tuple[1]] = list.add;
            if (stateString) {
              list.add(function() {
                state = stateString;
              }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise3.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), master = jQuery2.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
            if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return master.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
          }
          return master.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery2.Deferred.exceptionHook = function(error, stack) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };
      jQuery2.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery2.Deferred();
      jQuery2.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery2.readyException(error);
        });
        return this;
      };
      jQuery2.extend({
        isReady: false,
        readyWait: 1,
        ready: function(wait) {
          if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
            return;
          }
          jQuery2.isReady = true;
          if (wait !== true && --jQuery2.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery2]);
        }
      });
      jQuery2.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery2.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery2.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery2(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery2.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery2.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery2.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery2.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery2.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery2.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
            jQuery2.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery2.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery2.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery2.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery2.queue(this, type, data);
            jQuery2._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery2.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery2.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      }, composed = {composed: true};
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery2.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery2.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery2.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery2.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery2.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery2.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery2(this).show();
            } else {
              jQuery2(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery2.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery2.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery2.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      }
      function safeActiveElement() {
        try {
          return document2.activeElement;
        } catch (err) {
        }
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery2().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
        }
        return elem.each(function() {
          jQuery2.event.add(this, types, fn, data, selector);
        });
      }
      jQuery2.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery2.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery2.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery2.event.special[type] || {};
            handleObj = jQuery2.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery2.event.global[type] = true;
          }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery2.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery2.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery2.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({elem: cur, handlers: matchedHandlers});
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({elem: cur, handlers: handlers.slice(delegateCount)});
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
        },
        special: {
          load: {
            noBubble: true
          },
          click: {
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", returnTrue);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, expectSync2) {
        if (!expectSync2) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery2.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery2.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var notAsync, result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved.length) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                notAsync = expectSync2(this, type);
                this[type]();
                result = dataPriv.get(this, type);
                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result.value;
                }
              } else if ((jQuery2.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved.length) {
              dataPriv.set(this, type, {
                value: jQuery2.event.trigger(jQuery2.extend(saved[0], jQuery2.Event.prototype), saved.slice(1), this)
              });
              event.stopImmediatePropagation();
            }
          }
        });
      }
      jQuery2.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery2.Event = function(src, props) {
        if (!(this instanceof jQuery2.Event)) {
          return new jQuery2.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery2.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery2.expando] = true;
      };
      jQuery2.Event.prototype = {
        constructor: jQuery2.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery2.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function(event) {
          var button = event.button;
          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
          }
          if (!event.which && button !== void 0 && rmouseEvent.test(event.type)) {
            if (button & 1) {
              return 1;
            }
            if (button & 2) {
              return 3;
            }
            if (button & 4) {
              return 2;
            }
            return 0;
          }
          return event.which;
        }
      }, jQuery2.event.addProp);
      jQuery2.each({focus: "focusin", blur: "focusout"}, function(type, delegateType) {
        jQuery2.event.special[type] = {
          setup: function() {
            leverageNative(this, type, expectSync);
            return false;
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          delegateType
        };
      });
      jQuery2.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery2.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery2.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery2.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery2(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery2.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery2(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery2.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery2.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self2 = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self2.html());
            }
            domManip(self2, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery2.clone(node, true, true);
                if (hasScripts) {
                  jQuery2.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery2.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery2._evalUrl && !node.noModule) {
                      jQuery2._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery2.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery2.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery2.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery2.event.remove(elem, type);
                    } else {
                      jQuery2.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery2.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery2.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery2.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery2.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery2.inArray(this, ignored) < 0) {
              jQuery2.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery2.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery2.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery2(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery2.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? ret + "" : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery2.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {position: "absolute", visibility: "hidden", display: "block"}, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            delta += jQuery2.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        }
        return delta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
          isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
      }
      jQuery2.extend({
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: true,
          columnCount: true,
          fillOpacity: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          widows: true,
          zIndex: true,
          zoom: true
        },
        cssProps: {},
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery2.each(["height", "width"], function(_i, dimension) {
        jQuery2.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery2.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery2.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery2.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery2.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery2.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery2.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery2.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery2.fx.step[tween.prop]) {
              jQuery2.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery2.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery2.fx = Tween.prototype.init;
      jQuery2.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery2.fx.interval);
          }
          jQuery2.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = {height: type};
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery2._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery2.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
          }
        }
        propTween = !jQuery2.isEmptyObject(props);
        if (!propTween && jQuery2.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery2.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery2.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery2.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery2.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery2.extend({}, properties),
          opts: jQuery2.extend(true, {
            specialEasing: {},
            easing: jQuery2.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery2.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery2.fx.timer(jQuery2.extend(tick, {
          elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation;
      }
      jQuery2.Animation = jQuery2.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery2.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery2.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery2.fx.speeds) {
              opt.duration = jQuery2.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery2.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery2.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery2.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery2.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery2.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery2.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery2.fn[name];
        jQuery2.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery2.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function(name, props) {
        jQuery2.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery2.timers = [];
      jQuery2.fx.tick = function() {
        var timer, i = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer) {
        jQuery2.timers.push(timer);
        jQuery2.fx.start();
      };
      jQuery2.fx.interval = 13;
      jQuery2.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery2.fx.stop = function() {
        inProgress = null;
      };
      jQuery2.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      jQuery2.fn.delay = function(time, type) {
        time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery2.expr.attrHandle;
      jQuery2.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery2.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery2.removeAttr(this, name);
          });
        }
      });
      jQuery2.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery2.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery2.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery2.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery2.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery2.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery2.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery2.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery2.propFix[name] || name];
          });
        }
      });
      jQuery2.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            name = jQuery2.propFix[name] || name;
            hooks = jQuery2.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery2.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      });
      if (!support.optSelected) {
        jQuery2.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery2.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery2.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery2.fn.extend({
        addClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j2) {
              jQuery2(this).addClass(value.call(this, j2, getClass(this)));
            });
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        removeClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j2) {
              jQuery2(this).removeClass(value.call(this, j2, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          if (isFunction(value)) {
            return this.each(function(i) {
              jQuery2(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
          }
          return this.each(function() {
            var className, i, self2, classNames;
            if (isValidValue) {
              i = 0;
              self2 = jQuery2(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self2.hasClass(className)) {
                  self2.removeClass(className);
                } else {
                  self2.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery2.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery2(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery2.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery2.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery2.find.attr(elem, "value");
              return val != null ? val : stripAndCollapse(jQuery2.text(elem));
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery2(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery2.each(["radio", "checkbox"], function() {
        jQuery2.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery2.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      support.focusin = "onfocusin" in window2;
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery2.extend(jQuery2.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery2.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery2.makeArray(data, [event]);
          special = jQuery2.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery2.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery2.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        simulate: function(type, elem, event) {
          var e = jQuery2.extend(new jQuery2.Event(), event, {
            type,
            isSimulated: true
          });
          jQuery2.event.trigger(e, null, elem);
        }
      });
      jQuery2.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery2.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery2.event.trigger(type, data, elem, true);
          }
        }
      });
      if (!support.focusin) {
        jQuery2.each({focus: "focusin", blur: "focusout"}, function(orig, fix) {
          var handler = function(event) {
            jQuery2.event.simulate(fix, event.target, jQuery2.event.fix(event));
          };
          jQuery2.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location2 = window2.location;
      var nonce = {guid: Date.now()};
      var rquery = /\?/;
      jQuery2.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
          xml = void 0;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery2.error("Invalid XML: " + data);
        }
        return xml;
      };
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery2.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery2.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
          jQuery2.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery2.fn.extend({
        serialize: function() {
          return jQuery2.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery2.prop(this, "elements");
            return elements ? jQuery2.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery2(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery2.map(val, function(val2) {
                return {name: elem.name, value: val2.replace(rCRLF, "\r\n")};
              });
            }
            return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery2.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return {state: "success", data: response};
      }
      jQuery2.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": true,
            "text json": JSON.parse,
            "text xml": jQuery2.parseXML
          },
          flatOptions: {
            url: true,
            context: true
          }
        },
        ajaxSetup: function(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings) : ajaxExtend(jQuery2.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery2.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery2.event && s.global;
          if (fireGlobals && jQuery2.active++ === 0) {
            jQuery2.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery2.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
            }
            if (jQuery2.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery2.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery2.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery2.active) {
                jQuery2.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery2.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery2.get(url, void 0, callback, "script");
        }
      });
      jQuery2.each(["get", "post"], function(_i, method) {
        jQuery2[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery2.ajax(jQuery2.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery2.isPlainObject(url) && url));
        };
      });
      jQuery2.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery2._evalUrl = function(url, options, doc) {
        return jQuery2.ajax({
          url,
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery2.globalEval(response, options, doc);
          }
        });
      };
      jQuery2.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery2(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self2 = jQuery2(this), contents = self2.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self2.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery2(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery2.expr.pseudos.hidden = function(elem) {
        return !jQuery2.expr.pseudos.visible(elem);
      };
      jQuery2.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery2.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        0: 200,
        1223: 204
      }, xhrSupported = jQuery2.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery2.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password);
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(xhr.status, xhr.statusText);
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery2.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery2.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery2.globalEval(text);
            return text;
          }
        }
      });
      jQuery2.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery2.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({charset: s.scriptCharset, src: s.url}).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery2.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery2.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery2(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery2.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self2 = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self2.length > 0) {
          jQuery2.ajax({
            url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self2.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
          }).always(callback && function(jqXHR, status) {
            self2.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery2.expr.pseudos.animated = function(elem) {
        return jQuery2.grep(jQuery2.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery2.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery2.css(elem, "top");
          curCSSLeft = jQuery2.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery2.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            if (typeof props.top === "number") {
              props.top += "px";
            }
            if (typeof props.left === "number") {
              props.left += "px";
            }
            curElem.css(props);
          }
        }
      };
      jQuery2.fn.extend({
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery2.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return {top: 0, left: 0};
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = {top: 0, left: 0};
          if (jQuery2.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery2(offsetParent).offset();
              parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
          };
        },
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery2.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery2.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery2.each(["top", "left"], function(_i, prop) {
        jQuery2.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
          }
        });
      });
      jQuery2.each({Height: "height", Width: "width"}, function(name, type) {
        jQuery2.each({padding: "inner" + name, content: type, "": "outer" + name}, function(defaultExtra, funcName) {
          jQuery2.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }
              return value2 === void 0 ? jQuery2.css(elem, type2, extra) : jQuery2.style(elem, type2, value2, extra);
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery2.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery2.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery2.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery2.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        jQuery2.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      });
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      jQuery2.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
        return proxy;
      };
      jQuery2.holdReady = function(hold) {
        if (hold) {
          jQuery2.readyWait++;
        } else {
          jQuery2.ready(true);
        }
      };
      jQuery2.isArray = Array.isArray;
      jQuery2.parseJSON = JSON.parse;
      jQuery2.nodeName = nodeName;
      jQuery2.isFunction = isFunction;
      jQuery2.isWindow = isWindow;
      jQuery2.camelCase = camelCase;
      jQuery2.type = toType;
      jQuery2.now = Date.now;
      jQuery2.isNumeric = function(obj) {
        var type = jQuery2.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
      };
      jQuery2.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery2;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery2.noConflict = function(deep) {
        if (window2.$ === jQuery2) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery2) {
          window2.jQuery = _jQuery;
        }
        return jQuery2;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery2;
      }
      return jQuery2;
    });
  });

  // node_modules/jquery-ui/ui/widget.js
  var require_widget = __commonJS(() => {
    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery", "./version"], factory);
      } else {
        factory(jQuery);
      }
    })(function($2) {
      var widgetUuid = 0;
      var widgetSlice = Array.prototype.slice;
      $2.cleanData = function(orig) {
        return function(elems) {
          var events, elem, i;
          for (i = 0; (elem = elems[i]) != null; i++) {
            try {
              events = $2._data(elem, "events");
              if (events && events.remove) {
                $2(elem).triggerHandler("remove");
              }
            } catch (e) {
            }
          }
          orig(elems);
        };
      }($2.cleanData);
      $2.widget = function(name, base, prototype) {
        var existingConstructor, constructor, basePrototype;
        var proxiedPrototype = {};
        var namespace = name.split(".")[0];
        name = name.split(".")[1];
        var fullName = namespace + "-" + name;
        if (!prototype) {
          prototype = base;
          base = $2.Widget;
        }
        if ($2.isArray(prototype)) {
          prototype = $2.extend.apply(null, [{}].concat(prototype));
        }
        $2.expr[":"][fullName.toLowerCase()] = function(elem) {
          return !!$2.data(elem, fullName);
        };
        $2[namespace] = $2[namespace] || {};
        existingConstructor = $2[namespace][name];
        constructor = $2[namespace][name] = function(options, element) {
          if (!this._createWidget) {
            return new constructor(options, element);
          }
          if (arguments.length) {
            this._createWidget(options, element);
          }
        };
        $2.extend(constructor, existingConstructor, {
          version: prototype.version,
          _proto: $2.extend({}, prototype),
          _childConstructors: []
        });
        basePrototype = new base();
        basePrototype.options = $2.widget.extend({}, basePrototype.options);
        $2.each(prototype, function(prop, value) {
          if (!$2.isFunction(value)) {
            proxiedPrototype[prop] = value;
            return;
          }
          proxiedPrototype[prop] = function() {
            function _super() {
              return base.prototype[prop].apply(this, arguments);
            }
            function _superApply(args) {
              return base.prototype[prop].apply(this, args);
            }
            return function() {
              var __super = this._super;
              var __superApply = this._superApply;
              var returnValue;
              this._super = _super;
              this._superApply = _superApply;
              returnValue = value.apply(this, arguments);
              this._super = __super;
              this._superApply = __superApply;
              return returnValue;
            };
          }();
        });
        constructor.prototype = $2.widget.extend(basePrototype, {
          widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
        }, proxiedPrototype, {
          constructor,
          namespace,
          widgetName: name,
          widgetFullName: fullName
        });
        if (existingConstructor) {
          $2.each(existingConstructor._childConstructors, function(i, child) {
            var childPrototype = child.prototype;
            $2.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
          });
          delete existingConstructor._childConstructors;
        } else {
          base._childConstructors.push(constructor);
        }
        $2.widget.bridge(name, constructor);
        return constructor;
      };
      $2.widget.extend = function(target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;
        for (; inputIndex < inputLength; inputIndex++) {
          for (key in input[inputIndex]) {
            value = input[inputIndex][key];
            if (input[inputIndex].hasOwnProperty(key) && value !== void 0) {
              if ($2.isPlainObject(value)) {
                target[key] = $2.isPlainObject(target[key]) ? $2.widget.extend({}, target[key], value) : $2.widget.extend({}, value);
              } else {
                target[key] = value;
              }
            }
          }
        }
        return target;
      };
      $2.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $2.fn[name] = function(options) {
          var isMethodCall = typeof options === "string";
          var args = widgetSlice.call(arguments, 1);
          var returnValue = this;
          if (isMethodCall) {
            if (!this.length && options === "instance") {
              returnValue = void 0;
            } else {
              this.each(function() {
                var methodValue;
                var instance = $2.data(this, fullName);
                if (options === "instance") {
                  returnValue = instance;
                  return false;
                }
                if (!instance) {
                  return $2.error("cannot call methods on " + name + " prior to initialization; attempted to call method '" + options + "'");
                }
                if (!$2.isFunction(instance[options]) || options.charAt(0) === "_") {
                  return $2.error("no such method '" + options + "' for " + name + " widget instance");
                }
                methodValue = instance[options].apply(instance, args);
                if (methodValue !== instance && methodValue !== void 0) {
                  returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                  return false;
                }
              });
            }
          } else {
            if (args.length) {
              options = $2.widget.extend.apply(null, [options].concat(args));
            }
            this.each(function() {
              var instance = $2.data(this, fullName);
              if (instance) {
                instance.option(options || {});
                if (instance._init) {
                  instance._init();
                }
              } else {
                $2.data(this, fullName, new object(options, this));
              }
            });
          }
          return returnValue;
        };
      };
      $2.Widget = function() {
      };
      $2.Widget._childConstructors = [];
      $2.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
          classes: {},
          disabled: false,
          create: null
        },
        _createWidget: function(options, element) {
          element = $2(element || this.defaultElement || this)[0];
          this.element = $2(element);
          this.uuid = widgetUuid++;
          this.eventNamespace = "." + this.widgetName + this.uuid;
          this.bindings = $2();
          this.hoverable = $2();
          this.focusable = $2();
          this.classesElementLookup = {};
          if (element !== this) {
            $2.data(element, this.widgetFullName, this);
            this._on(true, this.element, {
              remove: function(event) {
                if (event.target === element) {
                  this.destroy();
                }
              }
            });
            this.document = $2(element.style ? element.ownerDocument : element.document || element);
            this.window = $2(this.document[0].defaultView || this.document[0].parentWindow);
          }
          this.options = $2.widget.extend({}, this.options, this._getCreateOptions(), options);
          this._create();
          if (this.options.disabled) {
            this._setOptionDisabled(this.options.disabled);
          }
          this._trigger("create", null, this._getCreateEventData());
          this._init();
        },
        _getCreateOptions: function() {
          return {};
        },
        _getCreateEventData: $2.noop,
        _create: $2.noop,
        _init: $2.noop,
        destroy: function() {
          var that = this;
          this._destroy();
          $2.each(this.classesElementLookup, function(key, value) {
            that._removeClass(value, key);
          });
          this.element.off(this.eventNamespace).removeData(this.widgetFullName);
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
          this.bindings.off(this.eventNamespace);
        },
        _destroy: $2.noop,
        widget: function() {
          return this.element;
        },
        option: function(key, value) {
          var options = key;
          var parts;
          var curOption;
          var i;
          if (arguments.length === 0) {
            return $2.widget.extend({}, this.options);
          }
          if (typeof key === "string") {
            options = {};
            parts = key.split(".");
            key = parts.shift();
            if (parts.length) {
              curOption = options[key] = $2.widget.extend({}, this.options[key]);
              for (i = 0; i < parts.length - 1; i++) {
                curOption[parts[i]] = curOption[parts[i]] || {};
                curOption = curOption[parts[i]];
              }
              key = parts.pop();
              if (arguments.length === 1) {
                return curOption[key] === void 0 ? null : curOption[key];
              }
              curOption[key] = value;
            } else {
              if (arguments.length === 1) {
                return this.options[key] === void 0 ? null : this.options[key];
              }
              options[key] = value;
            }
          }
          this._setOptions(options);
          return this;
        },
        _setOptions: function(options) {
          var key;
          for (key in options) {
            this._setOption(key, options[key]);
          }
          return this;
        },
        _setOption: function(key, value) {
          if (key === "classes") {
            this._setOptionClasses(value);
          }
          this.options[key] = value;
          if (key === "disabled") {
            this._setOptionDisabled(value);
          }
          return this;
        },
        _setOptionClasses: function(value) {
          var classKey, elements, currentElements;
          for (classKey in value) {
            currentElements = this.classesElementLookup[classKey];
            if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
              continue;
            }
            elements = $2(currentElements.get());
            this._removeClass(currentElements, classKey);
            elements.addClass(this._classes({
              element: elements,
              keys: classKey,
              classes: value,
              add: true
            }));
          }
        },
        _setOptionDisabled: function(value) {
          this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);
          if (value) {
            this._removeClass(this.hoverable, null, "ui-state-hover");
            this._removeClass(this.focusable, null, "ui-state-focus");
          }
        },
        enable: function() {
          return this._setOptions({disabled: false});
        },
        disable: function() {
          return this._setOptions({disabled: true});
        },
        _classes: function(options) {
          var full = [];
          var that = this;
          options = $2.extend({
            element: this.element,
            classes: this.options.classes || {}
          }, options);
          function processClassString(classes, checkOption) {
            var current, i;
            for (i = 0; i < classes.length; i++) {
              current = that.classesElementLookup[classes[i]] || $2();
              if (options.add) {
                current = $2($2.unique(current.get().concat(options.element.get())));
              } else {
                current = $2(current.not(options.element).get());
              }
              that.classesElementLookup[classes[i]] = current;
              full.push(classes[i]);
              if (checkOption && options.classes[classes[i]]) {
                full.push(options.classes[classes[i]]);
              }
            }
          }
          this._on(options.element, {
            remove: "_untrackClassesElement"
          });
          if (options.keys) {
            processClassString(options.keys.match(/\S+/g) || [], true);
          }
          if (options.extra) {
            processClassString(options.extra.match(/\S+/g) || []);
          }
          return full.join(" ");
        },
        _untrackClassesElement: function(event) {
          var that = this;
          $2.each(that.classesElementLookup, function(key, value) {
            if ($2.inArray(event.target, value) !== -1) {
              that.classesElementLookup[key] = $2(value.not(event.target).get());
            }
          });
        },
        _removeClass: function(element, keys, extra) {
          return this._toggleClass(element, keys, extra, false);
        },
        _addClass: function(element, keys, extra) {
          return this._toggleClass(element, keys, extra, true);
        },
        _toggleClass: function(element, keys, extra, add) {
          add = typeof add === "boolean" ? add : extra;
          var shift = typeof element === "string" || element === null, options = {
            extra: shift ? keys : extra,
            keys: shift ? element : keys,
            element: shift ? this.element : element,
            add
          };
          options.element.toggleClass(this._classes(options), add);
          return this;
        },
        _on: function(suppressDisabledCheck, element, handlers) {
          var delegateElement;
          var instance = this;
          if (typeof suppressDisabledCheck !== "boolean") {
            handlers = element;
            element = suppressDisabledCheck;
            suppressDisabledCheck = false;
          }
          if (!handlers) {
            handlers = element;
            element = this.element;
            delegateElement = this.widget();
          } else {
            element = delegateElement = $2(element);
            this.bindings = this.bindings.add(element);
          }
          $2.each(handlers, function(event, handler) {
            function handlerProxy() {
              if (!suppressDisabledCheck && (instance.options.disabled === true || $2(this).hasClass("ui-state-disabled"))) {
                return;
              }
              return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            if (typeof handler !== "string") {
              handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $2.guid++;
            }
            var match = event.match(/^([\w:-]*)\s*(.*)$/);
            var eventName = match[1] + instance.eventNamespace;
            var selector = match[2];
            if (selector) {
              delegateElement.on(eventName, selector, handlerProxy);
            } else {
              element.on(eventName, handlerProxy);
            }
          });
        },
        _off: function(element, eventName) {
          eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
          element.off(eventName).off(eventName);
          this.bindings = $2(this.bindings.not(element).get());
          this.focusable = $2(this.focusable.not(element).get());
          this.hoverable = $2(this.hoverable.not(element).get());
        },
        _delay: function(handler, delay) {
          function handlerProxy() {
            return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
          }
          var instance = this;
          return setTimeout(handlerProxy, delay || 0);
        },
        _hoverable: function(element) {
          this.hoverable = this.hoverable.add(element);
          this._on(element, {
            mouseenter: function(event) {
              this._addClass($2(event.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function(event) {
              this._removeClass($2(event.currentTarget), null, "ui-state-hover");
            }
          });
        },
        _focusable: function(element) {
          this.focusable = this.focusable.add(element);
          this._on(element, {
            focusin: function(event) {
              this._addClass($2(event.currentTarget), null, "ui-state-focus");
            },
            focusout: function(event) {
              this._removeClass($2(event.currentTarget), null, "ui-state-focus");
            }
          });
        },
        _trigger: function(type, event, data) {
          var prop, orig;
          var callback = this.options[type];
          data = data || {};
          event = $2.Event(event);
          event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
          event.target = this.element[0];
          orig = event.originalEvent;
          if (orig) {
            for (prop in orig) {
              if (!(prop in event)) {
                event[prop] = orig[prop];
              }
            }
          }
          this.element.trigger(event, data);
          return !($2.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
        }
      };
      $2.each({show: "fadeIn", hide: "fadeOut"}, function(method, defaultEffect) {
        $2.Widget.prototype["_" + method] = function(element, options, callback) {
          if (typeof options === "string") {
            options = {effect: options};
          }
          var hasOptions;
          var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
          options = options || {};
          if (typeof options === "number") {
            options = {duration: options};
          }
          hasOptions = !$2.isEmptyObject(options);
          options.complete = callback;
          if (options.delay) {
            element.delay(options.delay);
          }
          if (hasOptions && $2.effects && $2.effects.effect[effectName]) {
            element[method](options);
          } else if (effectName !== method && element[effectName]) {
            element[effectName](options.duration, options.easing, callback);
          } else {
            element.queue(function(next) {
              $2(this)[method]();
              if (callback) {
                callback.call(element[0]);
              }
              next();
            });
          }
        };
      });
      return $2.widget;
    });
  });

  // node_modules/lightgallery/dist/js/lightgallery.js
  var require_lightgallery = __commonJS((exports, module) => {
    /*! lightgallery - v1.7.3 - 2020-08-18
    * http://sachinchoolur.github.io/lightGallery/
    * Copyright (c) 2020 Sachin N; Licensed GPLv3 */
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery"], function(a0) {
          return factory(a0);
        });
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require_jquery());
      } else {
        factory(root["jQuery"]);
      }
    })(exports, function($2) {
      (function() {
        "use strict";
        var defaults = {
          mode: "lg-slide",
          cssEasing: "ease",
          easing: "linear",
          speed: 600,
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 150,
          hideBarsDelay: 6e3,
          useLeft: false,
          ariaLabelledby: "",
          ariaDescribedby: "",
          closable: true,
          loop: true,
          escKey: true,
          keyPress: true,
          controls: true,
          slideEndAnimatoin: true,
          hideControlOnEnd: false,
          mousewheel: true,
          getCaptionFromTitleOrAlt: true,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: false,
          preload: 1,
          showAfterLoad: true,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: false,
          iframeMaxWidth: "100%",
          download: true,
          counter: true,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: true,
          enableDrag: true,
          dynamic: false,
          dynamicEl: [],
          galleryId: 1
        };
        function Plugin(element, options) {
          this.el = element;
          this.$el = $2(element);
          this.s = $2.extend({}, defaults, options);
          if (this.s.dynamic && this.s.dynamicEl !== "undefined" && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          }
          this.modules = {};
          this.lGalleryOn = false;
          this.lgBusy = false;
          this.hideBartimeout = false;
          this.isTouch = "ontouchstart" in document.documentElement;
          if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
          }
          if (this.s.dynamic) {
            this.$items = this.s.dynamicEl;
          } else {
            if (this.s.selector === "this") {
              this.$items = this.$el;
            } else if (this.s.selector !== "") {
              if (this.s.selectWithin) {
                this.$items = $2(this.s.selectWithin).find(this.s.selector);
              } else {
                this.$items = this.$el.find($2(this.s.selector));
              }
            } else {
              this.$items = this.$el.children();
            }
          }
          this.$slide = "";
          this.$outer = "";
          this.init();
          return this;
        }
        Plugin.prototype.init = function() {
          var _this = this;
          if (_this.s.preload > _this.$items.length) {
            _this.s.preload = _this.$items.length;
          }
          var _hash = window.location.hash;
          if (_hash.indexOf("lg=" + this.s.galleryId) > 0) {
            _this.index = parseInt(_hash.split("&slide=")[1], 10);
            $2("body").addClass("lg-from-hash");
            if (!$2("body").hasClass("lg-on")) {
              setTimeout(function() {
                _this.build(_this.index);
              });
              $2("body").addClass("lg-on");
            }
          }
          if (_this.s.dynamic) {
            _this.$el.trigger("onBeforeOpen.lg");
            _this.index = _this.s.index || 0;
            if (!$2("body").hasClass("lg-on")) {
              setTimeout(function() {
                _this.build(_this.index);
                $2("body").addClass("lg-on");
              });
            }
          } else {
            _this.$items.on("click.lgcustom", function(event) {
              try {
                event.preventDefault();
                event.preventDefault();
              } catch (er) {
                event.returnValue = false;
              }
              _this.$el.trigger("onBeforeOpen.lg");
              _this.index = _this.s.index || _this.$items.index(this);
              if (!$2("body").hasClass("lg-on")) {
                _this.build(_this.index);
                $2("body").addClass("lg-on");
              }
            });
          }
        };
        Plugin.prototype.build = function(index) {
          var _this = this;
          _this.structure();
          $2.each($2.fn.lightGallery.modules, function(key) {
            _this.modules[key] = new $2.fn.lightGallery.modules[key](_this.el);
          });
          _this.slide(index, false, false, false);
          if (_this.s.keyPress) {
            _this.keyPress();
          }
          if (_this.$items.length > 1) {
            _this.arrow();
            setTimeout(function() {
              _this.enableDrag();
              _this.enableSwipe();
            }, 50);
            if (_this.s.mousewheel) {
              _this.mousewheel();
            }
          } else {
            _this.$slide.on("click.lg", function() {
              _this.$el.trigger("onSlideClick.lg");
            });
          }
          _this.counter();
          _this.closeGallery();
          _this.$el.trigger("onAfterOpen.lg");
          _this.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
            _this.$outer.removeClass("lg-hide-items");
            clearTimeout(_this.hideBartimeout);
            _this.hideBartimeout = setTimeout(function() {
              _this.$outer.addClass("lg-hide-items");
            }, _this.s.hideBarsDelay);
          });
          _this.$outer.trigger("mousemove.lg");
        };
        Plugin.prototype.structure = function() {
          var list = "";
          var controls = "";
          var i = 0;
          var subHtmlCont = "";
          var template;
          var _this = this;
          $2("body").append('<div class="lg-backdrop"></div>');
          $2(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms");
          for (i = 0; i < this.$items.length; i++) {
            list += '<div class="lg-item"></div>';
          }
          if (this.s.controls && this.$items.length > 1) {
            controls = '<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>";
          }
          if (this.s.appendSubHtmlTo === ".lg-sub-html") {
            subHtmlCont = '<div role="status" aria-live="polite" class="lg-sub-html"></div>';
          }
          var ariaLabelledby = this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : "";
          var ariaDescribedby = this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : "";
          template = '<div tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog" class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + list + '</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>' + controls + subHtmlCont + "</div></div>";
          $2("body").append(template);
          this.$outer = $2(".lg-outer");
          this.$outer.focus();
          this.$slide = this.$outer.find(".lg-item");
          if (this.s.useLeft) {
            this.$outer.addClass("lg-use-left");
            this.s.mode = "lg-slide";
          } else {
            this.$outer.addClass("lg-use-css3");
          }
          _this.setTop();
          $2(window).on("resize.lg orientationchange.lg", function() {
            setTimeout(function() {
              _this.setTop();
            }, 100);
          });
          this.$slide.eq(this.index).addClass("lg-current");
          if (this.doCss()) {
            this.$outer.addClass("lg-css3");
          } else {
            this.$outer.addClass("lg-css");
            this.s.speed = 0;
          }
          this.$outer.addClass(this.s.mode);
          if (this.s.enableDrag && this.$items.length > 1) {
            this.$outer.addClass("lg-grab");
          }
          if (this.s.showAfterLoad) {
            this.$outer.addClass("lg-show-after-load");
          }
          if (this.doCss()) {
            var $inner = this.$outer.find(".lg-inner");
            $inner.css("transition-timing-function", this.s.cssEasing);
            $inner.css("transition-duration", this.s.speed + "ms");
          }
          setTimeout(function() {
            $2(".lg-backdrop").addClass("in");
          });
          setTimeout(function() {
            _this.$outer.addClass("lg-visible");
          }, this.s.backdropDuration);
          if (this.s.download) {
            this.$outer.find(".lg-toolbar").append('<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>');
          }
          this.prevScrollTop = $2(window).scrollTop();
        };
        Plugin.prototype.setTop = function() {
          if (this.s.height !== "100%") {
            var wH = $2(window).height();
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var $lGallery = this.$outer.find(".lg");
            if (wH >= parseInt(this.s.height, 10)) {
              $lGallery.css("top", top + "px");
            } else {
              $lGallery.css("top", "0px");
            }
          }
        };
        Plugin.prototype.doCss = function() {
          var support = function() {
            var transition = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
              if (transition[i] in root.style) {
                return true;
              }
            }
          };
          if (support()) {
            return true;
          }
          return false;
        };
        Plugin.prototype.isVideo = function(src, index) {
          var html;
          if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
          } else {
            html = this.$items.eq(index).attr("data-html");
          }
          if (!src) {
            if (html) {
              return {
                html5: true
              };
            } else {
              console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html");
              return false;
            }
          }
          var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
          var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
          var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
          var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
          if (youtube) {
            return {
              youtube
            };
          } else if (vimeo) {
            return {
              vimeo
            };
          } else if (dailymotion) {
            return {
              dailymotion
            };
          } else if (vk) {
            return {
              vk
            };
          }
        };
        Plugin.prototype.counter = function() {
          if (this.s.counter) {
            $2(this.s.appendCounterTo).append('<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>");
          }
        };
        Plugin.prototype.addHtml = function(index) {
          var subHtml = null;
          var subHtmlUrl;
          var $currentEle;
          if (this.s.dynamic) {
            if (this.s.dynamicEl[index].subHtmlUrl) {
              subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
            } else {
              subHtml = this.s.dynamicEl[index].subHtml;
            }
          } else {
            $currentEle = this.$items.eq(index);
            if ($currentEle.attr("data-sub-html-url")) {
              subHtmlUrl = $currentEle.attr("data-sub-html-url");
            } else {
              subHtml = $currentEle.attr("data-sub-html");
              if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                subHtml = $currentEle.attr("title") || $currentEle.find("img").first().attr("alt");
              }
            }
          }
          if (!subHtmlUrl) {
            if (typeof subHtml !== "undefined" && subHtml !== null) {
              var fL = subHtml.substring(0, 1);
              if (fL === "." || fL === "#") {
                if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                  subHtml = $currentEle.find(subHtml).html();
                } else {
                  subHtml = $2(subHtml).html();
                }
              }
            } else {
              subHtml = "";
            }
          }
          if (this.s.appendSubHtmlTo === ".lg-sub-html") {
            if (subHtmlUrl) {
              this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
            } else {
              this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
            }
          } else {
            if (subHtmlUrl) {
              this.$slide.eq(index).load(subHtmlUrl);
            } else {
              this.$slide.eq(index).append(subHtml);
            }
          }
          if (typeof subHtml !== "undefined" && subHtml !== null) {
            if (subHtml === "") {
              this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html");
            } else {
              this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html");
            }
          }
          this.$el.trigger("onAfterAppendSubHtml.lg", [index]);
        };
        Plugin.prototype.preload = function(index) {
          var i = 1;
          var j = 1;
          for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.$items.length - index) {
              break;
            }
            this.loadContent(index + i, false, 0);
          }
          for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
              break;
            }
            this.loadContent(index - j, false, 0);
          }
        };
        Plugin.prototype.loadContent = function(index, rec, delay) {
          var _this = this;
          var _hasPoster = false;
          var _$img;
          var _src;
          var _poster;
          var _srcset;
          var _sizes;
          var _html;
          var _alt;
          var getResponsiveSrc = function(srcItms2) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms2.length; i++) {
              var __src = srcItms2[i].split(" ");
              if (__src[0] === "") {
                __src.splice(0, 1);
              }
              rsSrc.push(__src[0]);
              rsWidth.push(__src[1]);
            }
            var wWidth = $2(window).width();
            for (var j = 0; j < rsWidth.length; j++) {
              if (parseInt(rsWidth[j], 10) > wWidth) {
                _src = rsSrc[j];
                break;
              }
            }
          };
          if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].poster) {
              _hasPoster = true;
              _poster = _this.s.dynamicEl[index].poster;
            }
            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;
            _alt = _this.s.dynamicEl[index].alt;
            if (_this.s.dynamicEl[index].responsive) {
              var srcDyItms = _this.s.dynamicEl[index].responsive.split(",");
              getResponsiveSrc(srcDyItms);
            }
            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;
          } else {
            var $currentEle = _this.$items.eq(index);
            if ($currentEle.attr("data-poster")) {
              _hasPoster = true;
              _poster = $currentEle.attr("data-poster");
            }
            _html = $currentEle.attr("data-html");
            _src = $currentEle.attr("href") || $currentEle.attr("data-src");
            _alt = $currentEle.attr("title") || $currentEle.find("img").first().attr("alt");
            if ($currentEle.attr("data-responsive")) {
              var srcItms = $currentEle.attr("data-responsive").split(",");
              getResponsiveSrc(srcItms);
            }
            _srcset = $currentEle.attr("data-srcset");
            _sizes = $currentEle.attr("data-sizes");
          }
          var iframe = false;
          if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
              iframe = true;
            }
          } else {
            if (_this.$items.eq(index).attr("data-iframe") === "true") {
              iframe = true;
            }
          }
          var _isVideo = _this.isVideo(_src, index);
          if (!_this.$slide.eq(index).hasClass("lg-loaded")) {
            if (iframe) {
              _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
              var videoClass = "";
              if (_isVideo && _isVideo.youtube) {
                videoClass = "lg-has-youtube";
              } else if (_isVideo && _isVideo.vimeo) {
                videoClass = "lg-has-vimeo";
              } else {
                videoClass = "lg-has-html5";
              }
              _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
            } else if (_isVideo) {
              _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
              _this.$el.trigger("hasVideo.lg", [index, _src, _html]);
            } else {
              _alt = _alt ? 'alt="' + _alt + '"' : "";
              _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" ' + _alt + ' src="' + _src + '" /></div>');
            }
            _this.$el.trigger("onAferAppendSlide.lg", [index]);
            _$img = _this.$slide.eq(index).find(".lg-object");
            if (_sizes) {
              _$img.attr("sizes", _sizes);
            }
            if (_srcset) {
              _$img.attr("srcset", _srcset);
              try {
                picturefill({
                  elements: [_$img[0]]
                });
              } catch (e) {
                console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.");
              }
            }
            if (this.s.appendSubHtmlTo !== ".lg-sub-html") {
              _this.addHtml(index);
            }
            _this.$slide.eq(index).addClass("lg-loaded");
          }
          _this.$slide.eq(index).find(".lg-object").on("load.lg error.lg", function() {
            var _speed = 0;
            if (delay && !$2("body").hasClass("lg-from-hash")) {
              _speed = delay;
            }
            setTimeout(function() {
              _this.$slide.eq(index).addClass("lg-complete");
              _this.$el.trigger("onSlideItemLoad.lg", [index, delay || 0]);
            }, _speed);
          });
          if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _this.$slide.eq(index).addClass("lg-complete");
          }
          if (rec === true) {
            if (!_this.$slide.eq(index).hasClass("lg-complete")) {
              _this.$slide.eq(index).find(".lg-object").on("load.lg error.lg", function() {
                _this.preload(index);
              });
            } else {
              _this.preload(index);
            }
          }
        };
        Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {
          var _prevIndex = this.$outer.find(".lg-current").index();
          var _this = this;
          if (_this.lGalleryOn && _prevIndex === index) {
            return;
          }
          var _length = this.$slide.length;
          var _time = _this.lGalleryOn ? this.s.speed : 0;
          if (!_this.lgBusy) {
            if (this.s.download) {
              var _src;
              if (_this.s.dynamic) {
                _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
              } else {
                _src = _this.$items.eq(index).attr("data-download-url") !== "false" && (_this.$items.eq(index).attr("data-download-url") || _this.$items.eq(index).attr("href") || _this.$items.eq(index).attr("data-src"));
              }
              if (_src) {
                $2("#lg-download").attr("href", _src);
                _this.$outer.removeClass("lg-hide-download");
              } else {
                _this.$outer.addClass("lg-hide-download");
              }
            }
            this.$el.trigger("onBeforeSlide.lg", [_prevIndex, index, fromTouch, fromThumb]);
            _this.lgBusy = true;
            clearTimeout(_this.hideBartimeout);
            if (this.s.appendSubHtmlTo === ".lg-sub-html") {
              setTimeout(function() {
                _this.addHtml(index);
              }, _time);
            }
            this.arrowDisable(index);
            if (!direction) {
              if (index < _prevIndex) {
                direction = "prev";
              } else if (index > _prevIndex) {
                direction = "next";
              }
            }
            if (!fromTouch) {
              _this.$outer.addClass("lg-no-trans");
              this.$slide.removeClass("lg-prev-slide lg-next-slide");
              if (direction === "prev") {
                this.$slide.eq(index).addClass("lg-prev-slide");
                this.$slide.eq(_prevIndex).addClass("lg-next-slide");
              } else {
                this.$slide.eq(index).addClass("lg-next-slide");
                this.$slide.eq(_prevIndex).addClass("lg-prev-slide");
              }
              setTimeout(function() {
                _this.$slide.removeClass("lg-current");
                _this.$slide.eq(index).addClass("lg-current");
                _this.$outer.removeClass("lg-no-trans");
              }, 50);
            } else {
              this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
              var touchPrev;
              var touchNext;
              if (_length > 2) {
                touchPrev = index - 1;
                touchNext = index + 1;
                if (index === 0 && _prevIndex === _length - 1) {
                  touchNext = 0;
                  touchPrev = _length - 1;
                } else if (index === _length - 1 && _prevIndex === 0) {
                  touchNext = 0;
                  touchPrev = _length - 1;
                }
              } else {
                touchPrev = 0;
                touchNext = 1;
              }
              if (direction === "prev") {
                _this.$slide.eq(touchNext).addClass("lg-next-slide");
              } else {
                _this.$slide.eq(touchPrev).addClass("lg-prev-slide");
              }
              _this.$slide.eq(index).addClass("lg-current");
            }
            if (_this.lGalleryOn) {
              setTimeout(function() {
                _this.loadContent(index, true, 0);
              }, this.s.speed + 50);
              setTimeout(function() {
                _this.lgBusy = false;
                _this.$el.trigger("onAfterSlide.lg", [_prevIndex, index, fromTouch, fromThumb]);
              }, this.s.speed);
            } else {
              _this.loadContent(index, true, _this.s.backdropDuration);
              _this.lgBusy = false;
              _this.$el.trigger("onAfterSlide.lg", [_prevIndex, index, fromTouch, fromThumb]);
            }
            _this.lGalleryOn = true;
            if (this.s.counter) {
              $2("#lg-counter-current").text(index + 1);
            }
          }
          _this.index = index;
        };
        Plugin.prototype.goToNextSlide = function(fromTouch) {
          var _this = this;
          var _loop = _this.s.loop;
          if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
          }
          if (!_this.lgBusy) {
            if (_this.index + 1 < _this.$slide.length) {
              _this.index++;
              _this.$el.trigger("onBeforeNextSlide.lg", [_this.index]);
              _this.slide(_this.index, fromTouch, false, "next");
            } else {
              if (_loop) {
                _this.index = 0;
                _this.$el.trigger("onBeforeNextSlide.lg", [_this.index]);
                _this.slide(_this.index, fromTouch, false, "next");
              } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                _this.$outer.addClass("lg-right-end");
                setTimeout(function() {
                  _this.$outer.removeClass("lg-right-end");
                }, 400);
              }
            }
          }
        };
        Plugin.prototype.goToPrevSlide = function(fromTouch) {
          var _this = this;
          var _loop = _this.s.loop;
          if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
          }
          if (!_this.lgBusy) {
            if (_this.index > 0) {
              _this.index--;
              _this.$el.trigger("onBeforePrevSlide.lg", [_this.index, fromTouch]);
              _this.slide(_this.index, fromTouch, false, "prev");
            } else {
              if (_loop) {
                _this.index = _this.$items.length - 1;
                _this.$el.trigger("onBeforePrevSlide.lg", [_this.index, fromTouch]);
                _this.slide(_this.index, fromTouch, false, "prev");
              } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                _this.$outer.addClass("lg-left-end");
                setTimeout(function() {
                  _this.$outer.removeClass("lg-left-end");
                }, 400);
              }
            }
          }
        };
        Plugin.prototype.keyPress = function() {
          var _this = this;
          if (this.$items.length > 1) {
            $2(window).on("keyup.lg", function(e) {
              if (_this.$items.length > 1) {
                if (e.keyCode === 37) {
                  e.preventDefault();
                  _this.goToPrevSlide();
                }
                if (e.keyCode === 39) {
                  e.preventDefault();
                  _this.goToNextSlide();
                }
              }
            });
          }
          $2(window).on("keydown.lg", function(e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
              e.preventDefault();
              if (!_this.$outer.hasClass("lg-thumb-open")) {
                _this.destroy();
              } else {
                _this.$outer.removeClass("lg-thumb-open");
              }
            }
          });
        };
        Plugin.prototype.arrow = function() {
          var _this = this;
          this.$outer.find(".lg-prev").on("click.lg", function() {
            _this.goToPrevSlide();
          });
          this.$outer.find(".lg-next").on("click.lg", function() {
            _this.goToNextSlide();
          });
        };
        Plugin.prototype.arrowDisable = function(index) {
          if (!this.s.loop && this.s.hideControlOnEnd) {
            if (index + 1 < this.$slide.length) {
              this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled");
            } else {
              this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled");
            }
            if (index > 0) {
              this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled");
            } else {
              this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled");
            }
          }
        };
        Plugin.prototype.setTranslate = function($el, xValue, yValue) {
          if (this.s.useLeft) {
            $el.css("left", xValue);
          } else {
            $el.css({
              transform: "translate3d(" + xValue + "px, " + yValue + "px, 0px)"
            });
          }
        };
        Plugin.prototype.touchMove = function(startCoords, endCoords) {
          var distance = endCoords - startCoords;
          if (Math.abs(distance) > 15) {
            this.$outer.addClass("lg-dragging");
            this.setTranslate(this.$slide.eq(this.index), distance, 0);
            this.setTranslate($2(".lg-prev-slide"), -this.$slide.eq(this.index).width() + distance, 0);
            this.setTranslate($2(".lg-next-slide"), this.$slide.eq(this.index).width() + distance, 0);
          }
        };
        Plugin.prototype.touchEnd = function(distance) {
          var _this = this;
          if (_this.s.mode !== "lg-slide") {
            _this.$outer.addClass("lg-slide");
          }
          this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0");
          setTimeout(function() {
            _this.$outer.removeClass("lg-dragging");
            if (distance < 0 && Math.abs(distance) > _this.s.swipeThreshold) {
              _this.goToNextSlide(true);
            } else if (distance > 0 && Math.abs(distance) > _this.s.swipeThreshold) {
              _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {
              _this.$el.trigger("onSlideClick.lg");
            }
            _this.$slide.removeAttr("style");
          });
          setTimeout(function() {
            if (!_this.$outer.hasClass("lg-dragging") && _this.s.mode !== "lg-slide") {
              _this.$outer.removeClass("lg-slide");
            }
          }, _this.s.speed + 100);
        };
        Plugin.prototype.enableSwipe = function() {
          var _this = this;
          var startCoords = 0;
          var endCoords = 0;
          var isMoved = false;
          if (_this.s.enableSwipe && _this.doCss()) {
            _this.$slide.on("touchstart.lg", function(e) {
              if (!_this.$outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                e.preventDefault();
                _this.manageSwipeClass();
                startCoords = e.originalEvent.targetTouches[0].pageX;
              }
            });
            _this.$slide.on("touchmove.lg", function(e) {
              if (!_this.$outer.hasClass("lg-zoomed")) {
                e.preventDefault();
                endCoords = e.originalEvent.targetTouches[0].pageX;
                _this.touchMove(startCoords, endCoords);
                isMoved = true;
              }
            });
            _this.$slide.on("touchend.lg", function() {
              if (!_this.$outer.hasClass("lg-zoomed")) {
                if (isMoved) {
                  isMoved = false;
                  _this.touchEnd(endCoords - startCoords);
                } else {
                  _this.$el.trigger("onSlideClick.lg");
                }
              }
            });
          }
        };
        Plugin.prototype.enableDrag = function() {
          var _this = this;
          var startCoords = 0;
          var endCoords = 0;
          var isDraging = false;
          var isMoved = false;
          if (_this.s.enableDrag && _this.doCss()) {
            _this.$slide.on("mousedown.lg", function(e) {
              if (!_this.$outer.hasClass("lg-zoomed") && !_this.lgBusy && !$2(e.target).text().trim()) {
                e.preventDefault();
                _this.manageSwipeClass();
                startCoords = e.pageX;
                isDraging = true;
                _this.$outer.scrollLeft += 1;
                _this.$outer.scrollLeft -= 1;
                _this.$outer.removeClass("lg-grab").addClass("lg-grabbing");
                _this.$el.trigger("onDragstart.lg");
              }
            });
            $2(window).on("mousemove.lg", function(e) {
              if (isDraging) {
                isMoved = true;
                endCoords = e.pageX;
                _this.touchMove(startCoords, endCoords);
                _this.$el.trigger("onDragmove.lg");
              }
            });
            $2(window).on("mouseup.lg", function(e) {
              if (isMoved) {
                isMoved = false;
                _this.touchEnd(endCoords - startCoords);
                _this.$el.trigger("onDragend.lg");
              } else if ($2(e.target).hasClass("lg-object") || $2(e.target).hasClass("lg-video-play")) {
                _this.$el.trigger("onSlideClick.lg");
              }
              if (isDraging) {
                isDraging = false;
                _this.$outer.removeClass("lg-grabbing").addClass("lg-grab");
              }
            });
          }
        };
        Plugin.prototype.manageSwipeClass = function() {
          var _touchNext = this.index + 1;
          var _touchPrev = this.index - 1;
          if (this.s.loop && this.$slide.length > 2) {
            if (this.index === 0) {
              _touchPrev = this.$slide.length - 1;
            } else if (this.index === this.$slide.length - 1) {
              _touchNext = 0;
            }
          }
          this.$slide.removeClass("lg-next-slide lg-prev-slide");
          if (_touchPrev > -1) {
            this.$slide.eq(_touchPrev).addClass("lg-prev-slide");
          }
          this.$slide.eq(_touchNext).addClass("lg-next-slide");
        };
        Plugin.prototype.mousewheel = function() {
          var _this = this;
          _this.$outer.on("mousewheel.lg", function(e) {
            if (!e.deltaY) {
              return;
            }
            if (e.deltaY > 0) {
              _this.goToPrevSlide();
            } else {
              _this.goToNextSlide();
            }
            e.preventDefault();
          });
        };
        Plugin.prototype.closeGallery = function() {
          var _this = this;
          var mousedown = false;
          this.$outer.find(".lg-close").on("click.lg", function() {
            _this.destroy();
          });
          if (_this.s.closable) {
            _this.$outer.on("mousedown.lg", function(e) {
              if ($2(e.target).is(".lg-outer") || $2(e.target).is(".lg-item ") || $2(e.target).is(".lg-img-wrap")) {
                mousedown = true;
              } else {
                mousedown = false;
              }
            });
            _this.$outer.on("mousemove.lg", function() {
              mousedown = false;
            });
            _this.$outer.on("mouseup.lg", function(e) {
              if ($2(e.target).is(".lg-outer") || $2(e.target).is(".lg-item ") || $2(e.target).is(".lg-img-wrap") && mousedown) {
                if (!_this.$outer.hasClass("lg-dragging")) {
                  _this.destroy();
                }
              }
            });
          }
        };
        Plugin.prototype.destroy = function(d) {
          var _this = this;
          if (!d) {
            _this.$el.trigger("onBeforeClose.lg");
            $2(window).scrollTop(_this.prevScrollTop);
          }
          if (d) {
            if (!_this.s.dynamic) {
              this.$items.off("click.lg click.lgcustom");
            }
            $2.removeData(_this.el, "lightGallery");
          }
          this.$el.off(".lg.tm");
          $2.each($2.fn.lightGallery.modules, function(key) {
            if (_this.modules[key]) {
              _this.modules[key].destroy();
            }
          });
          this.lGalleryOn = false;
          clearTimeout(_this.hideBartimeout);
          this.hideBartimeout = false;
          $2(window).off(".lg");
          $2("body").removeClass("lg-on lg-from-hash");
          if (_this.$outer) {
            _this.$outer.removeClass("lg-visible");
          }
          $2(".lg-backdrop").removeClass("in");
          setTimeout(function() {
            if (_this.$outer) {
              _this.$outer.remove();
            }
            $2(".lg-backdrop").remove();
            if (!d) {
              _this.$el.trigger("onCloseAfter.lg");
            }
            _this.$el.focus();
          }, _this.s.backdropDuration + 50);
        };
        $2.fn.lightGallery = function(options) {
          return this.each(function() {
            if (!$2.data(this, "lightGallery")) {
              $2.data(this, "lightGallery", new Plugin(this, options));
            } else {
              try {
                $2(this).data("lightGallery").init();
              } catch (err) {
                console.error("lightGallery has not initiated properly");
              }
            }
          });
        };
        $2.fn.lightGallery.modules = {};
      })();
    });
  });

  // node_modules/jquery-pjax/jquery.pjax.js
  var require_jquery_pjax = __commonJS(() => {
    /*!
     * Copyright 2012, Chris Wanstrath
     * Released under the MIT License
     * https://github.com/defunkt/jquery-pjax
     */
    (function($2) {
      function fnPjax(selector, container, options) {
        options = optionsFor(container, options);
        return this.on("click.pjax", selector, function(event) {
          var opts = options;
          if (!opts.container) {
            opts = $2.extend({}, options);
            opts.container = $2(this).attr("data-pjax");
          }
          handleClick(event, opts);
        });
      }
      function handleClick(event, container, options) {
        options = optionsFor(container, options);
        var link = event.currentTarget;
        var $link = $2(link);
        if (link.tagName.toUpperCase() !== "A")
          throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        if (location.protocol !== link.protocol || location.hostname !== link.hostname)
          return;
        if (link.href.indexOf("#") > -1 && stripHash(link) == stripHash(location))
          return;
        if (event.isDefaultPrevented())
          return;
        var defaults = {
          url: link.href,
          container: $link.attr("data-pjax"),
          target: link
        };
        var opts = $2.extend({}, defaults, options);
        var clickEvent = $2.Event("pjax:click");
        $link.trigger(clickEvent, [opts]);
        if (!clickEvent.isDefaultPrevented()) {
          pjax(opts);
          event.preventDefault();
          $link.trigger("pjax:clicked", [opts]);
        }
      }
      function handleSubmit(event, container, options) {
        options = optionsFor(container, options);
        var form = event.currentTarget;
        var $form = $2(form);
        if (form.tagName.toUpperCase() !== "FORM")
          throw "$.pjax.submit requires a form element";
        var defaults = {
          type: ($form.attr("method") || "GET").toUpperCase(),
          url: $form.attr("action"),
          container: $form.attr("data-pjax"),
          target: form
        };
        if (defaults.type !== "GET" && window.FormData !== void 0) {
          defaults.data = new FormData(form);
          defaults.processData = false;
          defaults.contentType = false;
        } else {
          if ($form.find(":file").length) {
            return;
          }
          defaults.data = $form.serializeArray();
        }
        pjax($2.extend({}, defaults, options));
        event.preventDefault();
      }
      function pjax(options) {
        options = $2.extend(true, {}, $2.ajaxSettings, pjax.defaults, options);
        if ($2.isFunction(options.url)) {
          options.url = options.url();
        }
        var hash = parseURL(options.url).hash;
        var containerType = $2.type(options.container);
        if (containerType !== "string") {
          throw "expected string value for 'container' option; got " + containerType;
        }
        var context = options.context = $2(options.container);
        if (!context.length) {
          throw "the container selector '" + options.container + "' did not match anything";
        }
        if (!options.data)
          options.data = {};
        if ($2.isArray(options.data)) {
          options.data.push({name: "_pjax", value: options.container});
        } else {
          options.data._pjax = options.container;
        }
        function fire(type, args, props) {
          if (!props)
            props = {};
          props.relatedTarget = options.target;
          var event = $2.Event(type, props);
          context.trigger(event, args);
          return !event.isDefaultPrevented();
        }
        var timeoutTimer;
        options.beforeSend = function(xhr2, settings) {
          if (settings.type !== "GET") {
            settings.timeout = 0;
          }
          xhr2.setRequestHeader("X-PJAX", "true");
          xhr2.setRequestHeader("X-PJAX-Container", options.container);
          if (!fire("pjax:beforeSend", [xhr2, settings]))
            return false;
          if (settings.timeout > 0) {
            timeoutTimer = setTimeout(function() {
              if (fire("pjax:timeout", [xhr2, options]))
                xhr2.abort("timeout");
            }, settings.timeout);
            settings.timeout = 0;
          }
          var url = parseURL(settings.url);
          if (hash)
            url.hash = hash;
          options.requestUrl = stripInternalParams(url);
        };
        options.complete = function(xhr2, textStatus) {
          if (timeoutTimer)
            clearTimeout(timeoutTimer);
          fire("pjax:complete", [xhr2, textStatus, options]);
          fire("pjax:end", [xhr2, options]);
        };
        options.error = function(xhr2, textStatus, errorThrown) {
          var container = extractContainer("", xhr2, options);
          var allowed = fire("pjax:error", [xhr2, textStatus, errorThrown, options]);
          if (options.type == "GET" && textStatus !== "abort" && allowed) {
            locationReplace(container.url);
          }
        };
        options.success = function(data, status, xhr2) {
          var previousState = pjax.state;
          var currentVersion = typeof $2.pjax.defaults.version === "function" ? $2.pjax.defaults.version() : $2.pjax.defaults.version;
          var latestVersion = xhr2.getResponseHeader("X-PJAX-Version");
          var container = extractContainer(data, xhr2, options);
          var url = parseURL(container.url);
          if (hash) {
            url.hash = hash;
            container.url = url.href;
          }
          if (currentVersion && latestVersion && currentVersion !== latestVersion) {
            locationReplace(container.url);
            return;
          }
          if (!container.contents) {
            locationReplace(container.url);
            return;
          }
          pjax.state = {
            id: options.id || uniqueId(),
            url: container.url,
            title: container.title,
            container: options.container,
            fragment: options.fragment,
            timeout: options.timeout
          };
          if (options.push || options.replace) {
            window.history.replaceState(pjax.state, container.title, container.url);
          }
          var blurFocus = $2.contains(context, document.activeElement);
          if (blurFocus) {
            try {
              document.activeElement.blur();
            } catch (e) {
            }
          }
          if (container.title)
            document.title = container.title;
          fire("pjax:beforeReplace", [container.contents, options], {
            state: pjax.state,
            previousState
          });
          context.html(container.contents);
          var autofocusEl = context.find("input[autofocus], textarea[autofocus]").last()[0];
          if (autofocusEl && document.activeElement !== autofocusEl) {
            autofocusEl.focus();
          }
          executeScriptTags(container.scripts);
          var scrollTo = options.scrollTo;
          if (hash) {
            var name = decodeURIComponent(hash.slice(1));
            var target = document.getElementById(name) || document.getElementsByName(name)[0];
            if (target)
              scrollTo = $2(target).offset().top;
          }
          if (typeof scrollTo == "number")
            $2(window).scrollTop(scrollTo);
          fire("pjax:success", [data, status, xhr2, options]);
        };
        if (!pjax.state) {
          pjax.state = {
            id: uniqueId(),
            url: window.location.href,
            title: document.title,
            container: options.container,
            fragment: options.fragment,
            timeout: options.timeout
          };
          window.history.replaceState(pjax.state, document.title);
        }
        abortXHR(pjax.xhr);
        pjax.options = options;
        var xhr = pjax.xhr = $2.ajax(options);
        if (xhr.readyState > 0) {
          if (options.push && !options.replace) {
            cachePush(pjax.state.id, [options.container, cloneContents(context)]);
            window.history.pushState(null, "", options.requestUrl);
          }
          fire("pjax:start", [xhr, options]);
          fire("pjax:send", [xhr, options]);
        }
        return pjax.xhr;
      }
      function pjaxReload(container, options) {
        var defaults = {
          url: window.location.href,
          push: false,
          replace: true,
          scrollTo: false
        };
        return pjax($2.extend(defaults, optionsFor(container, options)));
      }
      function locationReplace(url) {
        window.history.replaceState(null, "", pjax.state.url);
        window.location.replace(url);
      }
      var initialPop = true;
      var initialURL = window.location.href;
      var initialState = window.history.state;
      if (initialState && initialState.container) {
        pjax.state = initialState;
      }
      if ("state" in window.history) {
        initialPop = false;
      }
      function onPjaxPopstate(event) {
        if (!initialPop) {
          abortXHR(pjax.xhr);
        }
        var previousState = pjax.state;
        var state = event.state;
        var direction;
        if (state && state.container) {
          if (initialPop && initialURL == state.url)
            return;
          if (previousState) {
            if (previousState.id === state.id)
              return;
            direction = previousState.id < state.id ? "forward" : "back";
          }
          var cache = cacheMapping[state.id] || [];
          var containerSelector = cache[0] || state.container;
          var container = $2(containerSelector), contents = cache[1];
          if (container.length) {
            if (previousState) {
              cachePop(direction, previousState.id, [containerSelector, cloneContents(container)]);
            }
            var popstateEvent = $2.Event("pjax:popstate", {
              state,
              direction
            });
            container.trigger(popstateEvent);
            var options = {
              id: state.id,
              url: state.url,
              container: containerSelector,
              push: false,
              fragment: state.fragment,
              timeout: state.timeout,
              scrollTo: false
            };
            if (contents) {
              container.trigger("pjax:start", [null, options]);
              pjax.state = state;
              if (state.title)
                document.title = state.title;
              var beforeReplaceEvent = $2.Event("pjax:beforeReplace", {
                state,
                previousState
              });
              container.trigger(beforeReplaceEvent, [contents, options]);
              container.html(contents);
              container.trigger("pjax:end", [null, options]);
            } else {
              pjax(options);
            }
            container[0].offsetHeight;
          } else {
            locationReplace(location.href);
          }
        }
        initialPop = false;
      }
      function fallbackPjax(options) {
        var url = $2.isFunction(options.url) ? options.url() : options.url, method = options.type ? options.type.toUpperCase() : "GET";
        var form = $2("<form>", {
          method: method === "GET" ? "GET" : "POST",
          action: url,
          style: "display:none"
        });
        if (method !== "GET" && method !== "POST") {
          form.append($2("<input>", {
            type: "hidden",
            name: "_method",
            value: method.toLowerCase()
          }));
        }
        var data = options.data;
        if (typeof data === "string") {
          $2.each(data.split("&"), function(index, value) {
            var pair = value.split("=");
            form.append($2("<input>", {type: "hidden", name: pair[0], value: pair[1]}));
          });
        } else if ($2.isArray(data)) {
          $2.each(data, function(index, value) {
            form.append($2("<input>", {type: "hidden", name: value.name, value: value.value}));
          });
        } else if (typeof data === "object") {
          var key;
          for (key in data)
            form.append($2("<input>", {type: "hidden", name: key, value: data[key]}));
        }
        $2(document.body).append(form);
        form.submit();
      }
      function abortXHR(xhr) {
        if (xhr && xhr.readyState < 4) {
          xhr.onreadystatechange = $2.noop;
          xhr.abort();
        }
      }
      function uniqueId() {
        return new Date().getTime();
      }
      function cloneContents(container) {
        var cloned = container.clone();
        cloned.find("script").each(function() {
          if (!this.src)
            $2._data(this, "globalEval", false);
        });
        return cloned.contents();
      }
      function stripInternalParams(url) {
        url.search = url.search.replace(/([?&])(_pjax|_)=[^&]*/g, "").replace(/^&/, "");
        return url.href.replace(/\?($|#)/, "$1");
      }
      function parseURL(url) {
        var a = document.createElement("a");
        a.href = url;
        return a;
      }
      function stripHash(location2) {
        return location2.href.replace(/#.*/, "");
      }
      function optionsFor(container, options) {
        if (container && options) {
          options = $2.extend({}, options);
          options.container = container;
          return options;
        } else if ($2.isPlainObject(container)) {
          return container;
        } else {
          return {container};
        }
      }
      function findAll(elems, selector) {
        return elems.filter(selector).add(elems.find(selector));
      }
      function parseHTML(html) {
        return $2.parseHTML(html, document, true);
      }
      function extractContainer(data, xhr, options) {
        var obj = {}, fullDocument = /<html/i.test(data);
        var serverUrl = xhr.getResponseHeader("X-PJAX-URL");
        obj.url = serverUrl ? stripInternalParams(parseURL(serverUrl)) : options.requestUrl;
        var $head, $body;
        if (fullDocument) {
          $body = $2(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
          var head = data.match(/<head[^>]*>([\s\S.]*)<\/head>/i);
          $head = head != null ? $2(parseHTML(head[0])) : $body;
        } else {
          $head = $body = $2(parseHTML(data));
        }
        if ($body.length === 0)
          return obj;
        obj.title = findAll($head, "title").last().text();
        if (options.fragment) {
          var $fragment = $body;
          if (options.fragment !== "body") {
            $fragment = findAll($fragment, options.fragment).first();
          }
          if ($fragment.length) {
            obj.contents = options.fragment === "body" ? $fragment : $fragment.contents();
            if (!obj.title)
              obj.title = $fragment.attr("title") || $fragment.data("title");
          }
        } else if (!fullDocument) {
          obj.contents = $body;
        }
        if (obj.contents) {
          obj.contents = obj.contents.not(function() {
            return $2(this).is("title");
          });
          obj.contents.find("title").remove();
          obj.scripts = findAll(obj.contents, "script[src]").remove();
          obj.contents = obj.contents.not(obj.scripts);
        }
        if (obj.title)
          obj.title = $2.trim(obj.title);
        return obj;
      }
      function executeScriptTags(scripts) {
        if (!scripts)
          return;
        var existingScripts = $2("script[src]");
        scripts.each(function() {
          var src = this.src;
          var matchedScripts = existingScripts.filter(function() {
            return this.src === src;
          });
          if (matchedScripts.length)
            return;
          var script = document.createElement("script");
          var type = $2(this).attr("type");
          if (type)
            script.type = type;
          script.src = $2(this).attr("src");
          document.head.appendChild(script);
        });
      }
      var cacheMapping = {};
      var cacheForwardStack = [];
      var cacheBackStack = [];
      function cachePush(id, value) {
        cacheMapping[id] = value;
        cacheBackStack.push(id);
        trimCacheStack(cacheForwardStack, 0);
        trimCacheStack(cacheBackStack, pjax.defaults.maxCacheLength);
      }
      function cachePop(direction, id, value) {
        var pushStack, popStack;
        cacheMapping[id] = value;
        if (direction === "forward") {
          pushStack = cacheBackStack;
          popStack = cacheForwardStack;
        } else {
          pushStack = cacheForwardStack;
          popStack = cacheBackStack;
        }
        pushStack.push(id);
        id = popStack.pop();
        if (id)
          delete cacheMapping[id];
        trimCacheStack(pushStack, pjax.defaults.maxCacheLength);
      }
      function trimCacheStack(stack, length) {
        while (stack.length > length)
          delete cacheMapping[stack.shift()];
      }
      function findVersion() {
        return $2("meta").filter(function() {
          var name = $2(this).attr("http-equiv");
          return name && name.toUpperCase() === "X-PJAX-VERSION";
        }).attr("content");
      }
      function enable() {
        $2.fn.pjax = fnPjax;
        $2.pjax = pjax;
        $2.pjax.enable = $2.noop;
        $2.pjax.disable = disable;
        $2.pjax.click = handleClick;
        $2.pjax.submit = handleSubmit;
        $2.pjax.reload = pjaxReload;
        $2.pjax.defaults = {
          timeout: 650,
          push: true,
          replace: false,
          type: "GET",
          dataType: "html",
          scrollTo: 0,
          maxCacheLength: 20,
          version: findVersion
        };
        $2(window).on("popstate.pjax", onPjaxPopstate);
      }
      function disable() {
        $2.fn.pjax = function() {
          return this;
        };
        $2.pjax = fallbackPjax;
        $2.pjax.enable = enable;
        $2.pjax.disable = $2.noop;
        $2.pjax.click = $2.noop;
        $2.pjax.submit = $2.noop;
        $2.pjax.reload = function() {
          window.location.reload();
        };
        $2(window).off("popstate.pjax", onPjaxPopstate);
      }
      if ($2.event.props && $2.inArray("state", $2.event.props) < 0) {
        $2.event.props.push("state");
      } else if (!("state" in $2.Event.prototype)) {
        $2.event.addProp("state");
      }
      $2.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);
      if ($2.support.pjax) {
        enable();
      } else {
        disable();
      }
    })(jQuery);
  });

  // node_modules/ev-emitter/ev-emitter.js
  var require_ev_emitter = __commonJS((exports, module) => {
    (function(global2, factory) {
      if (typeof define == "function" && define.amd) {
        define(factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        global2.EvEmitter = factory();
      }
    })(typeof window != "undefined" ? window : exports, function() {
      "use strict";
      function EvEmitter() {
      }
      var proto = EvEmitter.prototype;
      proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
          return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
          listeners.push(listener);
        }
        return this;
      };
      proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
          return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
      };
      proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
          return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
          listeners.splice(index, 1);
        }
        return this;
      };
      proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
          return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          var isOnce = onceListeners && onceListeners[listener];
          if (isOnce) {
            this.off(eventName, listener);
            delete onceListeners[listener];
          }
          listener.apply(this, args);
        }
        return this;
      };
      proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
      };
      return EvEmitter;
    });
  });

  // node_modules/imagesloaded/imagesloaded.js
  var require_imagesloaded = __commonJS((exports, module) => {
    /*!
     * imagesLoaded v4.1.4
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    (function(window2, factory) {
      "use strict";
      if (typeof define == "function" && define.amd) {
        define([
          "ev-emitter/ev-emitter"
        ], function(EvEmitter) {
          return factory(window2, EvEmitter);
        });
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(window2, require_ev_emitter());
      } else {
        window2.imagesLoaded = factory(window2, window2.EvEmitter);
      }
    })(typeof window !== "undefined" ? window : exports, function factory(window2, EvEmitter) {
      "use strict";
      var $2 = window2.jQuery;
      var console2 = window2.console;
      function extend(a, b) {
        for (var prop in b) {
          a[prop] = b[prop];
        }
        return a;
      }
      var arraySlice = Array.prototype.slice;
      function makeArray(obj) {
        if (Array.isArray(obj)) {
          return obj;
        }
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) {
          return arraySlice.call(obj);
        }
        return [obj];
      }
      function ImagesLoaded(elem, options, onAlways) {
        if (!(this instanceof ImagesLoaded)) {
          return new ImagesLoaded(elem, options, onAlways);
        }
        var queryElem = elem;
        if (typeof elem == "string") {
          queryElem = document.querySelectorAll(elem);
        }
        if (!queryElem) {
          console2.error("Bad element for imagesLoaded " + (queryElem || elem));
          return;
        }
        this.elements = makeArray(queryElem);
        this.options = extend({}, this.options);
        if (typeof options == "function") {
          onAlways = options;
        } else {
          extend(this.options, options);
        }
        if (onAlways) {
          this.on("always", onAlways);
        }
        this.getImages();
        if ($2) {
          this.jqDeferred = new $2.Deferred();
        }
        setTimeout(this.check.bind(this));
      }
      ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
      ImagesLoaded.prototype.options = {};
      ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        this.elements.forEach(this.addElementImages, this);
      };
      ImagesLoaded.prototype.addElementImages = function(elem) {
        if (elem.nodeName == "IMG") {
          this.addImage(elem);
        }
        if (this.options.background === true) {
          this.addElementBackgroundImages(elem);
        }
        var nodeType = elem.nodeType;
        if (!nodeType || !elementNodeTypes[nodeType]) {
          return;
        }
        var childImgs = elem.querySelectorAll("img");
        for (var i = 0; i < childImgs.length; i++) {
          var img = childImgs[i];
          this.addImage(img);
        }
        if (typeof this.options.background == "string") {
          var children = elem.querySelectorAll(this.options.background);
          for (i = 0; i < children.length; i++) {
            var child = children[i];
            this.addElementBackgroundImages(child);
          }
        }
      };
      var elementNodeTypes = {
        1: true,
        9: true,
        11: true
      };
      ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
          return;
        }
        var reURL = /url\((['"])?(.*?)\1\)/gi;
        var matches = reURL.exec(style.backgroundImage);
        while (matches !== null) {
          var url = matches && matches[2];
          if (url) {
            this.addBackground(url, elem);
          }
          matches = reURL.exec(style.backgroundImage);
        }
      };
      ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
      };
      ImagesLoaded.prototype.addBackground = function(url, elem) {
        var background = new Background(url, elem);
        this.images.push(background);
      };
      ImagesLoaded.prototype.check = function() {
        var _this = this;
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        if (!this.images.length) {
          this.complete();
          return;
        }
        function onProgress(image, elem, message) {
          setTimeout(function() {
            _this.progress(image, elem, message);
          });
        }
        this.images.forEach(function(loadingImage) {
          loadingImage.once("progress", onProgress);
          loadingImage.check();
        });
      };
      ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        this.emitEvent("progress", [this, image, elem]);
        if (this.jqDeferred && this.jqDeferred.notify) {
          this.jqDeferred.notify(this, image);
        }
        if (this.progressedCount == this.images.length) {
          this.complete();
        }
        if (this.options.debug && console2) {
          console2.log("progress: " + message, image, elem);
        }
      };
      ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        this.emitEvent(eventName, [this]);
        this.emitEvent("always", [this]);
        if (this.jqDeferred) {
          var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[jqMethod](this);
        }
      };
      function LoadingImage(img) {
        this.img = img;
      }
      LoadingImage.prototype = Object.create(EvEmitter.prototype);
      LoadingImage.prototype.check = function() {
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }
        this.proxyImage = new Image();
        this.proxyImage.addEventListener("load", this);
        this.proxyImage.addEventListener("error", this);
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.proxyImage.src = this.img.src;
      };
      LoadingImage.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      };
      LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent("progress", [this, this.img, message]);
      };
      LoadingImage.prototype.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };
      LoadingImage.prototype.onload = function() {
        this.confirm(true, "onload");
        this.unbindEvents();
      };
      LoadingImage.prototype.onerror = function() {
        this.confirm(false, "onerror");
        this.unbindEvents();
      };
      LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this);
        this.proxyImage.removeEventListener("error", this);
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
      };
      function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
      }
      Background.prototype = Object.create(LoadingImage.prototype);
      Background.prototype.check = function() {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.img.src = this.url;
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          this.unbindEvents();
        }
      };
      Background.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
      };
      Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent("progress", [this, this.element, message]);
      };
      ImagesLoaded.makeJQueryPlugin = function(jQuery2) {
        jQuery2 = jQuery2 || window2.jQuery;
        if (!jQuery2) {
          return;
        }
        $2 = jQuery2;
        $2.fn.imagesLoaded = function(options, callback) {
          var instance = new ImagesLoaded(this, options, callback);
          return instance.jqDeferred.promise($2(this));
        };
      };
      ImagesLoaded.makeJQueryPlugin();
      return ImagesLoaded;
    });
  });

  // node_modules/get-size/get-size.js
  var require_get_size = __commonJS((exports, module) => {
    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        window2.getSize = factory();
      }
    })(window, function factory() {
      "use strict";
      function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
      }
      function noop() {
      }
      var logError = typeof console == "undefined" ? noop : function(message) {
        console.error(message);
      };
      var measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
      ];
      var measurementsLength = measurements.length;
      function getZeroSize() {
        var size = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          size[measurement] = 0;
        }
        return size;
      }
      function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
          logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1");
        }
        return style;
      }
      var isSetup = false;
      var isBoxSizeOuter;
      function setup() {
        if (isSetup) {
          return;
        }
        isSetup = true;
        var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
      }
      function getSize(elem) {
        setup();
        if (typeof elem == "string") {
          elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != "object" || !elem.nodeType) {
          return;
        }
        var style = getStyle(elem);
        if (style.display == "none") {
          return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          var value = style[measurement];
          var num = parseFloat(value);
          size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
          size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
          size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
      }
      return getSize;
    });
  });

  // node_modules/desandro-matches-selector/matches-selector.js
  var require_matches_selector = __commonJS((exports, module) => {
    (function(window2, factory) {
      "use strict";
      if (typeof define == "function" && define.amd) {
        define(factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        window2.matchesSelector = factory();
      }
    })(window, function factory() {
      "use strict";
      var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
          return "matches";
        }
        if (ElemProto.matchesSelector) {
          return "matchesSelector";
        }
        var prefixes = ["webkit", "moz", "ms", "o"];
        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var method = prefix + "MatchesSelector";
          if (ElemProto[method]) {
            return method;
          }
        }
      }();
      return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
      };
    });
  });

  // node_modules/fizzy-ui-utils/utils.js
  var require_utils = __commonJS((exports, module) => {
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define([
          "desandro-matches-selector/matches-selector"
        ], function(matchesSelector) {
          return factory(window2, matchesSelector);
        });
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(window2, require_matches_selector());
      } else {
        window2.fizzyUIUtils = factory(window2, window2.matchesSelector);
      }
    })(window, function factory(window2, matchesSelector) {
      "use strict";
      var utils = {};
      utils.extend = function(a, b) {
        for (var prop in b) {
          a[prop] = b[prop];
        }
        return a;
      };
      utils.modulo = function(num, div) {
        return (num % div + div) % div;
      };
      var arraySlice = Array.prototype.slice;
      utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
          return obj;
        }
        if (obj === null || obj === void 0) {
          return [];
        }
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) {
          return arraySlice.call(obj);
        }
        return [obj];
      };
      utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
          ary.splice(index, 1);
        }
      };
      utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
          elem = elem.parentNode;
          if (matchesSelector(elem, selector)) {
            return elem;
          }
        }
      };
      utils.getQueryElement = function(elem) {
        if (typeof elem == "string") {
          return document.querySelector(elem);
        }
        return elem;
      };
      utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };
      utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
          if (!(elem instanceof HTMLElement)) {
            return;
          }
          if (!selector) {
            ffElems.push(elem);
            return;
          }
          if (matchesSelector(elem, selector)) {
            ffElems.push(elem);
          }
          var childElems = elem.querySelectorAll(selector);
          for (var i = 0; i < childElems.length; i++) {
            ffElems.push(childElems[i]);
          }
        });
        return ffElems;
      };
      utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
          var timeout = this[timeoutName];
          clearTimeout(timeout);
          var args = arguments;
          var _this = this;
          this[timeoutName] = setTimeout(function() {
            method.apply(_this, args);
            delete _this[timeoutName];
          }, threshold);
        };
      };
      utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") {
          setTimeout(callback);
        } else {
          document.addEventListener("DOMContentLoaded", callback);
        }
      };
      utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
          return $1 + "-" + $2;
        }).toLowerCase();
      };
      var console2 = window2.console;
      utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
          var dashedNamespace = utils.toDashed(namespace);
          var dataAttr = "data-" + dashedNamespace;
          var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
          var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
          var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
          var dataOptionsAttr = dataAttr + "-options";
          var jQuery2 = window2.jQuery;
          elems.forEach(function(elem) {
            var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
            var options;
            try {
              options = attr && JSON.parse(attr);
            } catch (error) {
              if (console2) {
                console2.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
              }
              return;
            }
            var instance = new WidgetClass(elem, options);
            if (jQuery2) {
              jQuery2.data(elem, namespace, instance);
            }
          });
        });
      };
      return utils;
    });
  });

  // node_modules/outlayer/item.js
  var require_item = __commonJS((exports, module) => {
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define([
          "ev-emitter/ev-emitter",
          "get-size/get-size"
        ], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_ev_emitter(), require_get_size());
      } else {
        window2.Outlayer = {};
        window2.Outlayer.Item = factory(window2.EvEmitter, window2.getSize);
      }
    })(window, function factory(EvEmitter, getSize) {
      "use strict";
      function isEmptyObj(obj) {
        for (var prop in obj) {
          return false;
        }
        prop = null;
        return true;
      }
      var docElemStyle = document.documentElement.style;
      var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
      var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
      var transitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[transitionProperty];
      var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + "Duration",
        transitionProperty: transitionProperty + "Property",
        transitionDelay: transitionProperty + "Delay"
      };
      function Item(element, layout) {
        if (!element) {
          return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
          x: 0,
          y: 0
        };
        this._create();
      }
      var proto = Item.prototype = Object.create(EvEmitter.prototype);
      proto.constructor = Item;
      proto._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        };
        this.css({
          position: "absolute"
        });
      };
      proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };
      proto.getSize = function() {
        this.size = getSize(this.element);
      };
      proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
          var supportedProp = vendorProperties[prop] || prop;
          elemStyle[supportedProp] = style[prop];
        }
      };
      proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xValue = style[isOriginLeft ? "left" : "right"];
        var yValue = style[isOriginTop ? "top" : "bottom"];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf("%") != -1) {
          x = x / 100 * layoutSize.width;
        }
        if (yValue.indexOf("%") != -1) {
          y = y / 100 * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
      };
      proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
        var xProperty = isOriginLeft ? "left" : "right";
        var xResetProperty = isOriginLeft ? "right" : "left";
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = "";
        var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
        var yProperty = isOriginTop ? "top" : "bottom";
        var yResetProperty = isOriginTop ? "bottom" : "top";
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = "";
        this.css(style);
        this.emitEvent("layout", [this]);
      };
      proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
      };
      proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
      };
      proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
          to: transitionStyle,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: true
        });
      };
      proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return "translate3d(" + x + "px, " + y + "px, 0)";
      };
      proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
      };
      proto.moveTo = proto._transitionTo;
      proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
      };
      proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
          this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
          args.onTransitionEnd[prop].call(this);
        }
      };
      proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
          this._nonTransition(args);
          return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
          _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
          _transition.ingProperties[prop] = true;
          if (args.isCleaning) {
            _transition.clean[prop] = true;
          }
        }
        if (args.from) {
          this.css(args.from);
          var h = this.element.offsetHeight;
          h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
      };
      function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
          return "-" + $1.toLowerCase();
        });
      }
      var transitionProps = "opacity," + toDashedAll(transformProperty);
      proto.enableTransition = function() {
        if (this.isTransitioning) {
          return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == "number" ? duration + "ms" : duration;
        this.css({
          transitionProperty: transitionProps,
          transitionDuration: duration,
          transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
      };
      proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
      };
      proto.onotransitionend = function(event) {
        this.ontransitionend(event);
      };
      var dashedVendorProperties = {
        "-webkit-transform": "transform"
      };
      proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
          return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
          this.disableTransition();
        }
        if (propertyName in _transition.clean) {
          this.element.style[event.propertyName] = "";
          delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
          var onTransitionEnd = _transition.onEnd[propertyName];
          onTransitionEnd.call(this);
          delete _transition.onEnd[propertyName];
        }
        this.emitEvent("transitionEnd", [this]);
      };
      proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
      };
      proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
          cleanStyle[prop] = "";
        }
        this.css(cleanStyle);
      };
      var cleanTransitionStyle = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      };
      proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
      };
      proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + "ms";
      };
      proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({display: ""});
        this.emitEvent("remove", [this]);
      };
      proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
          this.removeElem();
          return;
        }
        this.once("transitionEnd", function() {
          this.removeElem();
        });
        this.hide();
      };
      proto.reveal = function() {
        delete this.isHidden;
        this.css({display: ""});
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
          from: options.hiddenStyle,
          to: options.visibleStyle,
          isCleaning: true,
          onTransitionEnd
        });
      };
      proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
          this.emitEvent("reveal");
        }
      };
      proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
          return "opacity";
        }
        for (var prop in optionStyle) {
          return prop;
        }
      };
      proto.hide = function() {
        this.isHidden = true;
        this.css({display: ""});
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
          from: options.visibleStyle,
          to: options.hiddenStyle,
          isCleaning: true,
          onTransitionEnd
        });
      };
      proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
          this.css({display: "none"});
          this.emitEvent("hide");
        }
      };
      proto.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      };
      return Item;
    });
  });

  // node_modules/outlayer/outlayer.js
  var require_outlayer = __commonJS((exports, module) => {
    /*!
     * Outlayer v2.1.1
     * the brains and guts of a layout library
     * MIT license
     */
    (function(window2, factory) {
      "use strict";
      if (typeof define == "function" && define.amd) {
        define([
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item"
        ], function(EvEmitter, getSize, utils, Item) {
          return factory(window2, EvEmitter, getSize, utils, Item);
        });
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(window2, require_ev_emitter(), require_get_size(), require_utils(), require_item());
      } else {
        window2.Outlayer = factory(window2, window2.EvEmitter, window2.getSize, window2.fizzyUIUtils, window2.Outlayer.Item);
      }
    })(window, function factory(window2, EvEmitter, getSize, utils, Item) {
      "use strict";
      var console2 = window2.console;
      var jQuery2 = window2.jQuery;
      var noop = function() {
      };
      var GUID = 0;
      var instances = {};
      function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
          if (console2) {
            console2.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element));
          }
          return;
        }
        this.element = queryElement;
        if (jQuery2) {
          this.$element = jQuery2(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption("initLayout");
        if (isInitLayout) {
          this.layout();
        }
      }
      Outlayer.namespace = "outlayer";
      Outlayer.Item = Item;
      Outlayer.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      };
      var proto = Outlayer.prototype;
      utils.extend(proto, EvEmitter.prototype);
      proto.option = function(opts) {
        utils.extend(this.options, opts);
      };
      proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== void 0 ? this.options[oldOption] : this.options[option];
      };
      Outlayer.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      };
      proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption("resize");
        if (canBindResize) {
          this.bindResize();
        }
      };
      proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      };
      proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item2 = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
          var elem = itemElems[i];
          var item = new Item2(elem, this);
          items.push(item);
        }
        return items;
      };
      proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
      };
      proto.getItemElements = function() {
        return this.items.map(function(item) {
          return item.element;
        });
      };
      proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption("layoutInstant");
        var isInstant = layoutInstant !== void 0 ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
      };
      proto._init = proto.layout;
      proto._resetLayout = function() {
        this.getSize();
      };
      proto.getSize = function() {
        this.size = getSize(this.element);
      };
      proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
          this[measurement] = 0;
        } else {
          if (typeof option == "string") {
            elem = this.element.querySelector(option);
          } else if (option instanceof HTMLElement) {
            elem = option;
          }
          this[measurement] = elem ? getSize(elem)[size] : option;
        }
      };
      proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
      };
      proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
          return !item.isIgnored;
        });
      };
      proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems("layout", items);
        if (!items || !items.length) {
          return;
        }
        var queue = [];
        items.forEach(function(item) {
          var position = this._getItemLayoutPosition(item);
          position.item = item;
          position.isInstant = isInstant || item.isLayoutInstant;
          queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
      };
      proto._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        };
      };
      proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
          this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
      };
      proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === void 0) {
          this.stagger = 0;
          return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
      };
      proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
          item.goTo(x, y);
        } else {
          item.stagger(i * this.stagger);
          item.moveTo(x, y);
        }
      };
      proto._postLayout = function() {
        this.resizeContainer();
      };
      proto.resizeContainer = function() {
        var isResizingContainer = this._getOption("resizeContainer");
        if (!isResizingContainer) {
          return;
        }
        var size = this._getContainerSize();
        if (size) {
          this._setContainerMeasure(size.width, true);
          this._setContainerMeasure(size.height, false);
        }
      };
      proto._getContainerSize = noop;
      proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === void 0) {
          return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
          measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
      };
      proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
          _this.dispatchEvent(eventName + "Complete", null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
          onComplete();
          return;
        }
        var doneCount = 0;
        function tick() {
          doneCount++;
          if (doneCount == count) {
            onComplete();
          }
        }
        items.forEach(function(item) {
          item.once(eventName, tick);
        });
      };
      proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery2) {
          this.$element = this.$element || jQuery2(this.element);
          if (event) {
            var $event = jQuery2.Event(event);
            $event.type = type;
            this.$element.trigger($event, args);
          } else {
            this.$element.trigger(type, args);
          }
        }
      };
      proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
          item.isIgnored = true;
        }
      };
      proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
          delete item.isIgnored;
        }
      };
      proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
          return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
      };
      proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
          return;
        }
        elems.forEach(function(elem) {
          utils.removeFrom(this.stamps, elem);
          this.unignore(elem);
        }, this);
      };
      proto._find = function(elems) {
        if (!elems) {
          return;
        }
        if (typeof elems == "string") {
          elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
      };
      proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
          return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
      };
      proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
          left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
          top: boundingRect.top + size.paddingTop + size.borderTopWidth,
          right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
          bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
      };
      proto._manageStamp = noop;
      proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
          left: boundingRect.left - thisRect.left - size.marginLeft,
          top: boundingRect.top - thisRect.top - size.marginTop,
          right: thisRect.right - boundingRect.right - size.marginRight,
          bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
      };
      proto.handleEvent = utils.handleEvent;
      proto.bindResize = function() {
        window2.addEventListener("resize", this);
        this.isResizeBound = true;
      };
      proto.unbindResize = function() {
        window2.removeEventListener("resize", this);
        this.isResizeBound = false;
      };
      proto.onresize = function() {
        this.resize();
      };
      utils.debounceMethod(Outlayer, "onresize", 100);
      proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
          return;
        }
        this.layout();
      };
      proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
      };
      proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
          this.items = this.items.concat(items);
        }
        return items;
      };
      proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
          return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
      };
      proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
          return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
      };
      proto.reveal = function(items) {
        this._emitCompleteOnItems("reveal", items);
        if (!items || !items.length) {
          return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
          item.stagger(i * stagger);
          item.reveal();
        });
      };
      proto.hide = function(items) {
        this._emitCompleteOnItems("hide", items);
        if (!items || !items.length) {
          return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
          item.stagger(i * stagger);
          item.hide();
        });
      };
      proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
      };
      proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
      };
      proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (item.element == elem) {
            return item;
          }
        }
      };
      proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
          var item = this.getItem(elem);
          if (item) {
            items.push(item);
          }
        }, this);
        return items;
      };
      proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems("remove", removeItems);
        if (!removeItems || !removeItems.length) {
          return;
        }
        removeItems.forEach(function(item) {
          item.remove();
          utils.removeFrom(this.items, item);
        }, this);
      };
      proto.destroy = function() {
        var style = this.element.style;
        style.height = "";
        style.position = "";
        style.width = "";
        this.items.forEach(function(item) {
          item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery2) {
          jQuery2.removeData(this.element, this.constructor.namespace);
        }
      };
      Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
      };
      Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery2 && jQuery2.bridget) {
          jQuery2.bridget(namespace, Layout);
        }
        return Layout;
      };
      function subclass(Parent) {
        function SubClass() {
          Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
      }
      var msUnits = {
        ms: 1,
        s: 1e3
      };
      function getMilliseconds(time) {
        if (typeof time == "number") {
          return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
          return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
      }
      Outlayer.Item = Item;
      return Outlayer;
    });
  });

  // node_modules/masonry-layout/masonry.js
  var require_masonry = __commonJS((exports, module) => {
    /*!
     * Masonry v4.2.2
     * Cascading grid layout library
     * https://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define([
          "outlayer/outlayer",
          "get-size/get-size"
        ], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_outlayer(), require_get_size());
      } else {
        window2.Masonry = factory(window2.Outlayer, window2.getSize);
      }
    })(window, function factory(Outlayer, getSize) {
      "use strict";
      var Masonry = Outlayer.create("masonry");
      Masonry.compatOptions.fitWidth = "isFitWidth";
      var proto = Masonry.prototype;
      proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
          this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
      };
      proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
          var firstItem = this.items[0];
          var firstItemElem = firstItem && firstItem.element;
          this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? "round" : "floor";
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
      };
      proto.getContainerWidth = function() {
        var isFitWidth = this._getOption("fitWidth");
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
      };
      proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
        var colPosition = this[colPosMethod](colSpan, item);
        var position = {
          x: this.columnWidth * colPosition.col,
          y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
          this.colYs[i] = setHeight;
        }
        return position;
      };
      proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        var minimumY = Math.min.apply(Math, colGroup);
        return {
          col: colGroup.indexOf(minimumY),
          y: minimumY
        };
      };
      proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) {
          return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) {
          colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
      };
      proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) {
          return this.colYs[col];
        }
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs);
      };
      proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
          col,
          y: this._getColGroupY(col, colSpan)
        };
      };
      proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        var isOriginLeft = this._getOption("originLeft");
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption("originTop");
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
          this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
      };
      proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
          height: this.maxY
        };
        if (this._getOption("fitWidth")) {
          size.width = this._getContainerFitWidth();
        }
        return size;
      };
      proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while (--i) {
          if (this.colYs[i] !== 0) {
            break;
          }
          unusedCols++;
        }
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
      };
      proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
      };
      return Masonry;
    });
  });

  // node_modules/asap/browser-raw.js
  var require_browser_raw = __commonJS((exports, module) => {
    "use strict";
    module.exports = rawAsap;
    function rawAsap(task) {
      if (!queue.length) {
        requestFlush();
        flushing = true;
      }
      queue[queue.length] = task;
    }
    var queue = [];
    var flushing = false;
    var requestFlush;
    var index = 0;
    var capacity = 1024;
    function flush() {
      while (index < queue.length) {
        var currentIndex = index;
        index = index + 1;
        queue[currentIndex].call();
        if (index > capacity) {
          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }
          queue.length -= index;
          index = 0;
        }
      }
      queue.length = 0;
      index = 0;
      flushing = false;
    }
    var scope = typeof global !== "undefined" ? global : self;
    var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
    if (typeof BrowserMutationObserver === "function") {
      requestFlush = makeRequestCallFromMutationObserver(flush);
    } else {
      requestFlush = makeRequestCallFromTimer(flush);
    }
    rawAsap.requestFlush = requestFlush;
    function makeRequestCallFromMutationObserver(callback) {
      var toggle = 1;
      var observer = new BrowserMutationObserver(callback);
      var node = document.createTextNode("");
      observer.observe(node, {characterData: true});
      return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
      };
    }
    function makeRequestCallFromTimer(callback) {
      return function requestCall() {
        var timeoutHandle = setTimeout(handleTimer, 0);
        var intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
          clearTimeout(timeoutHandle);
          clearInterval(intervalHandle);
          callback();
        }
      };
    }
    rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
  });

  // node_modules/promise/lib/core.js
  var require_core = __commonJS((exports, module) => {
    "use strict";
    var asap = require_browser_raw();
    function noop() {
    }
    var LAST_ERROR = null;
    var IS_ERROR = {};
    function getThen(obj) {
      try {
        return obj.then;
      } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
      }
    }
    function tryCallOne(fn, a) {
      try {
        return fn(a);
      } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
      }
    }
    function tryCallTwo(fn, a, b) {
      try {
        fn(a, b);
      } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
      }
    }
    module.exports = Promise5;
    function Promise5(fn) {
      if (typeof this !== "object") {
        throw new TypeError("Promises must be constructed via new");
      }
      if (typeof fn !== "function") {
        throw new TypeError("Promise constructor's argument is not a function");
      }
      this._40 = 0;
      this._65 = 0;
      this._55 = null;
      this._72 = null;
      if (fn === noop)
        return;
      doResolve(fn, this);
    }
    Promise5._37 = null;
    Promise5._87 = null;
    Promise5._61 = noop;
    Promise5.prototype.then = function(onFulfilled, onRejected) {
      if (this.constructor !== Promise5) {
        return safeThen(this, onFulfilled, onRejected);
      }
      var res = new Promise5(noop);
      handle(this, new Handler(onFulfilled, onRejected, res));
      return res;
    };
    function safeThen(self2, onFulfilled, onRejected) {
      return new self2.constructor(function(resolve2, reject2) {
        var res = new Promise5(noop);
        res.then(resolve2, reject2);
        handle(self2, new Handler(onFulfilled, onRejected, res));
      });
    }
    function handle(self2, deferred) {
      while (self2._65 === 3) {
        self2 = self2._55;
      }
      if (Promise5._37) {
        Promise5._37(self2);
      }
      if (self2._65 === 0) {
        if (self2._40 === 0) {
          self2._40 = 1;
          self2._72 = deferred;
          return;
        }
        if (self2._40 === 1) {
          self2._40 = 2;
          self2._72 = [self2._72, deferred];
          return;
        }
        self2._72.push(deferred);
        return;
      }
      handleResolved(self2, deferred);
    }
    function handleResolved(self2, deferred) {
      asap(function() {
        var cb = self2._65 === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          if (self2._65 === 1) {
            resolve(deferred.promise, self2._55);
          } else {
            reject(deferred.promise, self2._55);
          }
          return;
        }
        var ret = tryCallOne(cb, self2._55);
        if (ret === IS_ERROR) {
          reject(deferred.promise, LAST_ERROR);
        } else {
          resolve(deferred.promise, ret);
        }
      });
    }
    function resolve(self2, newValue) {
      if (newValue === self2) {
        return reject(self2, new TypeError("A promise cannot be resolved with itself."));
      }
      if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
        var then = getThen(newValue);
        if (then === IS_ERROR) {
          return reject(self2, LAST_ERROR);
        }
        if (then === self2.then && newValue instanceof Promise5) {
          self2._65 = 3;
          self2._55 = newValue;
          finale(self2);
          return;
        } else if (typeof then === "function") {
          doResolve(then.bind(newValue), self2);
          return;
        }
      }
      self2._65 = 1;
      self2._55 = newValue;
      finale(self2);
    }
    function reject(self2, newValue) {
      self2._65 = 2;
      self2._55 = newValue;
      if (Promise5._87) {
        Promise5._87(self2, newValue);
      }
      finale(self2);
    }
    function finale(self2) {
      if (self2._40 === 1) {
        handle(self2, self2._72);
        self2._72 = null;
      }
      if (self2._40 === 2) {
        for (var i = 0; i < self2._72.length; i++) {
          handle(self2, self2._72[i]);
        }
        self2._72 = null;
      }
    }
    function Handler(onFulfilled, onRejected, promise3) {
      this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
      this.onRejected = typeof onRejected === "function" ? onRejected : null;
      this.promise = promise3;
    }
    function doResolve(fn, promise3) {
      var done = false;
      var res = tryCallTwo(fn, function(value) {
        if (done)
          return;
        done = true;
        resolve(promise3, value);
      }, function(reason) {
        if (done)
          return;
        done = true;
        reject(promise3, reason);
      });
      if (!done && res === IS_ERROR) {
        done = true;
        reject(promise3, LAST_ERROR);
      }
    }
  });

  // node_modules/promise/lib/done.js
  var require_done = __commonJS((exports, module) => {
    "use strict";
    var Promise5 = require_core();
    module.exports = Promise5;
    Promise5.prototype.done = function(onFulfilled, onRejected) {
      var self2 = arguments.length ? this.then.apply(this, arguments) : this;
      self2.then(null, function(err) {
        setTimeout(function() {
          throw err;
        }, 0);
      });
    };
  });

  // node_modules/promise/lib/finally.js
  var require_finally = __commonJS((exports, module) => {
    "use strict";
    var Promise5 = require_core();
    module.exports = Promise5;
    Promise5.prototype["finally"] = function(f) {
      return this.then(function(value) {
        return Promise5.resolve(f()).then(function() {
          return value;
        });
      }, function(err) {
        return Promise5.resolve(f()).then(function() {
          throw err;
        });
      });
    };
  });

  // node_modules/promise/lib/es6-extensions.js
  var require_es6_extensions = __commonJS((exports, module) => {
    "use strict";
    var Promise5 = require_core();
    module.exports = Promise5;
    var TRUE = valuePromise(true);
    var FALSE = valuePromise(false);
    var NULL = valuePromise(null);
    var UNDEFINED = valuePromise(void 0);
    var ZERO = valuePromise(0);
    var EMPTYSTRING = valuePromise("");
    function valuePromise(value) {
      var p = new Promise5(Promise5._61);
      p._65 = 1;
      p._55 = value;
      return p;
    }
    Promise5.resolve = function(value) {
      if (value instanceof Promise5)
        return value;
      if (value === null)
        return NULL;
      if (value === void 0)
        return UNDEFINED;
      if (value === true)
        return TRUE;
      if (value === false)
        return FALSE;
      if (value === 0)
        return ZERO;
      if (value === "")
        return EMPTYSTRING;
      if (typeof value === "object" || typeof value === "function") {
        try {
          var then = value.then;
          if (typeof then === "function") {
            return new Promise5(then.bind(value));
          }
        } catch (ex) {
          return new Promise5(function(resolve, reject) {
            reject(ex);
          });
        }
      }
      return valuePromise(value);
    };
    Promise5.all = function(arr) {
      var args = Array.prototype.slice.call(arr);
      return new Promise5(function(resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i2, val) {
          if (val && (typeof val === "object" || typeof val === "function")) {
            if (val instanceof Promise5 && val.then === Promise5.prototype.then) {
              while (val._65 === 3) {
                val = val._55;
              }
              if (val._65 === 1)
                return res(i2, val._55);
              if (val._65 === 2)
                reject(val._55);
              val.then(function(val2) {
                res(i2, val2);
              }, reject);
              return;
            } else {
              var then = val.then;
              if (typeof then === "function") {
                var p = new Promise5(then.bind(val));
                p.then(function(val2) {
                  res(i2, val2);
                }, reject);
                return;
              }
            }
          }
          args[i2] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise5.reject = function(value) {
      return new Promise5(function(resolve, reject) {
        reject(value);
      });
    };
    Promise5.race = function(values) {
      return new Promise5(function(resolve, reject) {
        values.forEach(function(value) {
          Promise5.resolve(value).then(resolve, reject);
        });
      });
    };
    Promise5.prototype["catch"] = function(onRejected) {
      return this.then(null, onRejected);
    };
  });

  // node_modules/asap/browser-asap.js
  var require_browser_asap = __commonJS((exports, module) => {
    "use strict";
    var rawAsap = require_browser_raw();
    var freeTasks = [];
    var pendingErrors = [];
    var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
    function throwFirstError() {
      if (pendingErrors.length) {
        throw pendingErrors.shift();
      }
    }
    module.exports = asap;
    function asap(task) {
      var rawTask;
      if (freeTasks.length) {
        rawTask = freeTasks.pop();
      } else {
        rawTask = new RawTask();
      }
      rawTask.task = task;
      rawAsap(rawTask);
    }
    function RawTask() {
      this.task = null;
    }
    RawTask.prototype.call = function() {
      try {
        this.task.call();
      } catch (error) {
        if (asap.onerror) {
          asap.onerror(error);
        } else {
          pendingErrors.push(error);
          requestErrorThrow();
        }
      } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
      }
    };
  });

  // node_modules/promise/lib/node-extensions.js
  var require_node_extensions = __commonJS((exports, module) => {
    "use strict";
    var Promise5 = require_core();
    var asap = require_browser_asap();
    module.exports = Promise5;
    Promise5.denodeify = function(fn, argumentCount) {
      if (typeof argumentCount === "number" && argumentCount !== Infinity) {
        return denodeifyWithCount(fn, argumentCount);
      } else {
        return denodeifyWithoutCount(fn);
      }
    };
    var callbackFn = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
    function denodeifyWithCount(fn, argumentCount) {
      var args = [];
      for (var i = 0; i < argumentCount; i++) {
        args.push("a" + i);
      }
      var body = [
        "return function (" + args.join(",") + ") {",
        "var self = this;",
        "return new Promise(function (rs, rj) {",
        "var res = fn.call(",
        ["self"].concat(args).concat([callbackFn]).join(","),
        ");",
        "if (res &&",
        '(typeof res === "object" || typeof res === "function") &&',
        'typeof res.then === "function"',
        ") {rs(res);}",
        "});",
        "};"
      ].join("");
      return Function(["Promise", "fn"], body)(Promise5, fn);
    }
    function denodeifyWithoutCount(fn) {
      var fnLength = Math.max(fn.length - 1, 3);
      var args = [];
      for (var i = 0; i < fnLength; i++) {
        args.push("a" + i);
      }
      var body = [
        "return function (" + args.join(",") + ") {",
        "var self = this;",
        "var args;",
        "var argLength = arguments.length;",
        "if (arguments.length > " + fnLength + ") {",
        "args = new Array(arguments.length + 1);",
        "for (var i = 0; i < arguments.length; i++) {",
        "args[i] = arguments[i];",
        "}",
        "}",
        "return new Promise(function (rs, rj) {",
        "var cb = " + callbackFn + ";",
        "var res;",
        "switch (argLength) {",
        args.concat(["extra"]).map(function(_, index) {
          return "case " + index + ":res = fn.call(" + ["self"].concat(args.slice(0, index)).concat("cb").join(",") + ");break;";
        }).join(""),
        "default:",
        "args[argLength] = cb;",
        "res = fn.apply(self, args);",
        "}",
        "if (res &&",
        '(typeof res === "object" || typeof res === "function") &&',
        'typeof res.then === "function"',
        ") {rs(res);}",
        "});",
        "};"
      ].join("");
      return Function(["Promise", "fn"], body)(Promise5, fn);
    }
    Promise5.nodeify = function(fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        var callback = typeof args[args.length - 1] === "function" ? args.pop() : null;
        var ctx = this;
        try {
          return fn.apply(this, arguments).nodeify(callback, ctx);
        } catch (ex) {
          if (callback === null || typeof callback == "undefined") {
            return new Promise5(function(resolve, reject) {
              reject(ex);
            });
          } else {
            asap(function() {
              callback.call(ctx, ex);
            });
          }
        }
      };
    };
    Promise5.prototype.nodeify = function(callback, ctx) {
      if (typeof callback != "function")
        return this;
      this.then(function(value) {
        asap(function() {
          callback.call(ctx, null, value);
        });
      }, function(err) {
        asap(function() {
          callback.call(ctx, err);
        });
      });
    };
  });

  // node_modules/promise/lib/synchronous.js
  var require_synchronous = __commonJS((exports, module) => {
    "use strict";
    var Promise5 = require_core();
    module.exports = Promise5;
    Promise5.enableSynchronous = function() {
      Promise5.prototype.isPending = function() {
        return this.getState() == 0;
      };
      Promise5.prototype.isFulfilled = function() {
        return this.getState() == 1;
      };
      Promise5.prototype.isRejected = function() {
        return this.getState() == 2;
      };
      Promise5.prototype.getValue = function() {
        if (this._65 === 3) {
          return this._55.getValue();
        }
        if (!this.isFulfilled()) {
          throw new Error("Cannot get a value of an unfulfilled promise.");
        }
        return this._55;
      };
      Promise5.prototype.getReason = function() {
        if (this._65 === 3) {
          return this._55.getReason();
        }
        if (!this.isRejected()) {
          throw new Error("Cannot get a rejection reason of a non-rejected promise.");
        }
        return this._55;
      };
      Promise5.prototype.getState = function() {
        if (this._65 === 3) {
          return this._55.getState();
        }
        if (this._65 === -1 || this._65 === -2) {
          return 0;
        }
        return this._65;
      };
    };
    Promise5.disableSynchronous = function() {
      Promise5.prototype.isPending = void 0;
      Promise5.prototype.isFulfilled = void 0;
      Promise5.prototype.isRejected = void 0;
      Promise5.prototype.getValue = void 0;
      Promise5.prototype.getReason = void 0;
      Promise5.prototype.getState = void 0;
    };
  });

  // node_modules/promise/lib/index.js
  var require_lib = __commonJS((exports, module) => {
    "use strict";
    module.exports = require_core();
    require_done();
    require_finally();
    require_es6_extensions();
    require_node_extensions();
    require_synchronous();
  });

  // node_modules/promise/index.js
  var require_promise = __commonJS((exports, module) => {
    "use strict";
    module.exports = require_lib();
  });

  // node_modules/resource-manager-js/dist/resource-manager.js
  var require_resource_manager = __commonJS((exports, module) => {
    (function(f) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        g.ResourceManager = f();
      }
    })(function() {
      var define2, module2, exports2;
      return function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = false;
              if (!u && a)
                return a(o2, true);
              if (i)
                return i(o2, true);
              var f = new Error("Cannot find module '" + o2 + "'");
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o2] = {exports: {}};
            t[o2][0].call(l.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, l, l.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = false;
        for (var o = 0; o < r.length; o++)
          s(r[o]);
        return s;
      }({1: [function(require2, module3, exports3) {
        var process2 = module3.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === "function") {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
          }
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e2) {
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
          }
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              return cachedClearTimeout.call(null, marker);
            } catch (e2) {
              return cachedClearTimeout.call(this, marker);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }
        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;
          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }
        process2.nextTick = function(fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process2.title = "browser";
        process2.browser = true;
        process2.env = {};
        process2.argv = [];
        process2.version = "";
        process2.versions = {};
        function noop() {
        }
        process2.on = noop;
        process2.addListener = noop;
        process2.once = noop;
        process2.off = noop;
        process2.removeListener = noop;
        process2.removeAllListeners = noop;
        process2.emit = noop;
        process2.prependListener = noop;
        process2.prependOnceListener = noop;
        process2.listeners = function(name) {
          return [];
        };
        process2.binding = function(name) {
          throw new Error("process.binding is not supported");
        };
        process2.cwd = function() {
          return "/";
        };
        process2.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        process2.umask = function() {
          return 0;
        };
      }, {}], 2: [function(require2, module3, exports3) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        /**!
        
         @license
         handlebars v4.0.11
        
        Copyright (C) 2011-2017 by Yehuda Katz
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        
        */
        !function(a, b) {
          "object" == (typeof exports3 === "undefined" ? "undefined" : _typeof(exports3)) && "object" == (typeof module3 === "undefined" ? "undefined" : _typeof(module3)) ? module3.exports = b() : "function" == typeof define2 && define2.amd ? define2([], b) : "object" == (typeof exports3 === "undefined" ? "undefined" : _typeof(exports3)) ? exports3.Handlebars = b() : a.Handlebars = b();
        }(void 0, function() {
          return function(a) {
            function b(d) {
              if (c[d])
                return c[d].exports;
              var e = c[d] = {exports: {}, id: d, loaded: false};
              return a[d].call(e.exports, e, e.exports, b), e.loaded = true, e.exports;
            }
            var c = {};
            return b.m = a, b.c = c, b.p = "", b(0);
          }([function(a, b, c) {
            "use strict";
            function d() {
              var a2 = r();
              return a2.compile = function(b2, c2) {
                return k.compile(b2, c2, a2);
              }, a2.precompile = function(b2, c2) {
                return k.precompile(b2, c2, a2);
              }, a2.AST = i["default"], a2.Compiler = k.Compiler, a2.JavaScriptCompiler = m["default"], a2.Parser = j.parser, a2.parse = j.parse, a2;
            }
            var e = c(1)["default"];
            b.__esModule = true;
            var f = c(2), g = e(f), h = c(35), i = e(h), j = c(36), k = c(41), l = c(42), m = e(l), n = c(39), o = e(n), p = c(34), q = e(p), r = g["default"].create, s = d();
            s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"];
          }, function(a, b) {
            "use strict";
            b["default"] = function(a2) {
              return a2 && a2.__esModule ? a2 : {default: a2};
            }, b.__esModule = true;
          }, function(a, b, c) {
            "use strict";
            function d() {
              var a2 = new h.HandlebarsEnvironment();
              return n.extend(a2, h), a2.SafeString = j["default"], a2.Exception = l["default"], a2.Utils = n, a2.escapeExpression = n.escapeExpression, a2.VM = p, a2.template = function(b2) {
                return p.template(b2, a2);
              }, a2;
            }
            var e = c(3)["default"], f = c(1)["default"];
            b.__esModule = true;
            var g = c(4), h = e(g), i = c(21), j = f(i), k = c(6), l = f(k), m = c(5), n = e(m), o = c(22), p = e(o), q = c(34), r = f(q), s = d();
            s.create = d, r["default"](s), s["default"] = s, b["default"] = s, a.exports = b["default"];
          }, function(a, b) {
            "use strict";
            b["default"] = function(a2) {
              if (a2 && a2.__esModule)
                return a2;
              var b2 = {};
              if (null != a2)
                for (var c in a2) {
                  Object.prototype.hasOwnProperty.call(a2, c) && (b2[c] = a2[c]);
                }
              return b2["default"] = a2, b2;
            }, b.__esModule = true;
          }, function(a, b, c) {
            "use strict";
            function d(a2, b2, c2) {
              this.helpers = a2 || {}, this.partials = b2 || {}, this.decorators = c2 || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this);
            }
            var e = c(1)["default"];
            b.__esModule = true, b.HandlebarsEnvironment = d;
            var f = c(5), g = c(6), h = e(g), i = c(10), j = c(18), k = c(20), l = e(k), m = "4.0.11";
            b.VERSION = m;
            var n = 7;
            b.COMPILER_REVISION = n;
            var o = {1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0"};
            b.REVISION_CHANGES = o;
            var p = "[object Object]";
            d.prototype = {constructor: d, logger: l["default"], log: l["default"].log, registerHelper: function registerHelper(a2, b2) {
              if (f.toString.call(a2) === p) {
                if (b2)
                  throw new h["default"]("Arg not supported with multiple helpers");
                f.extend(this.helpers, a2);
              } else
                this.helpers[a2] = b2;
            }, unregisterHelper: function unregisterHelper(a2) {
              delete this.helpers[a2];
            }, registerPartial: function registerPartial(a2, b2) {
              if (f.toString.call(a2) === p)
                f.extend(this.partials, a2);
              else {
                if ("undefined" == typeof b2)
                  throw new h["default"]('Attempting to register a partial called "' + a2 + '" as undefined');
                this.partials[a2] = b2;
              }
            }, unregisterPartial: function unregisterPartial(a2) {
              delete this.partials[a2];
            }, registerDecorator: function registerDecorator(a2, b2) {
              if (f.toString.call(a2) === p) {
                if (b2)
                  throw new h["default"]("Arg not supported with multiple decorators");
                f.extend(this.decorators, a2);
              } else
                this.decorators[a2] = b2;
            }, unregisterDecorator: function unregisterDecorator(a2) {
              delete this.decorators[a2];
            }};
            var q = l["default"].log;
            b.log = q, b.createFrame = f.createFrame, b.logger = l["default"];
          }, function(a, b) {
            "use strict";
            function c(a2) {
              return k[a2];
            }
            function d(a2) {
              for (var b2 = 1; b2 < arguments.length; b2++) {
                for (var c2 in arguments[b2]) {
                  Object.prototype.hasOwnProperty.call(arguments[b2], c2) && (a2[c2] = arguments[b2][c2]);
                }
              }
              return a2;
            }
            function e(a2, b2) {
              for (var c2 = 0, d2 = a2.length; c2 < d2; c2++) {
                if (a2[c2] === b2)
                  return c2;
              }
              return -1;
            }
            function f(a2) {
              if ("string" != typeof a2) {
                if (a2 && a2.toHTML)
                  return a2.toHTML();
                if (null == a2)
                  return "";
                if (!a2)
                  return a2 + "";
                a2 = "" + a2;
              }
              return m.test(a2) ? a2.replace(l, c) : a2;
            }
            function g(a2) {
              return !a2 && 0 !== a2 || !(!p(a2) || 0 !== a2.length);
            }
            function h(a2) {
              var b2 = d({}, a2);
              return b2._parent = a2, b2;
            }
            function i(a2, b2) {
              return a2.path = b2, a2;
            }
            function j(a2, b2) {
              return (a2 ? a2 + "." : "") + b2;
            }
            b.__esModule = true, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;
            var k = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"}, l = /[&<>"'`=]/g, m = /[&<>"'`=]/, n = Object.prototype.toString;
            b.toString = n;
            var o = function o2(a2) {
              return "function" == typeof a2;
            };
            o(/x/) && (b.isFunction = o = function o2(a2) {
              return "function" == typeof a2 && "[object Function]" === n.call(a2);
            }), b.isFunction = o;
            var p = Array.isArray || function(a2) {
              return !(!a2 || "object" != (typeof a2 === "undefined" ? "undefined" : _typeof(a2))) && "[object Array]" === n.call(a2);
            };
            b.isArray = p;
          }, function(a, b, c) {
            "use strict";
            function d(a2, b2) {
              var c2 = b2 && b2.loc, g = void 0, h = void 0;
              c2 && (g = c2.start.line, h = c2.start.column, a2 += " - " + g + ":" + h);
              for (var i = Error.prototype.constructor.call(this, a2), j = 0; j < f.length; j++) {
                this[f[j]] = i[f[j]];
              }
              Error.captureStackTrace && Error.captureStackTrace(this, d);
              try {
                c2 && (this.lineNumber = g, e ? Object.defineProperty(this, "column", {value: h, enumerable: true}) : this.column = h);
              } catch (k) {
              }
            }
            var e = c(7)["default"];
            b.__esModule = true;
            var f = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            d.prototype = new Error(), b["default"] = d, a.exports = b["default"];
          }, function(a, b, c) {
            a.exports = {default: c(8), __esModule: true};
          }, function(a, b, c) {
            var d = c(9);
            a.exports = function(a2, b2, c2) {
              return d.setDesc(a2, b2, c2);
            };
          }, function(a, b) {
            var c = Object;
            a.exports = {create: c.create, getProto: c.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: c.getOwnPropertyDescriptor, setDesc: c.defineProperty, setDescs: c.defineProperties, getKeys: c.keys, getNames: c.getOwnPropertyNames, getSymbols: c.getOwnPropertySymbols, each: [].forEach};
          }, function(a, b, c) {
            "use strict";
            function d(a2) {
              g["default"](a2), i["default"](a2), k["default"](a2), m["default"](a2), o["default"](a2), q["default"](a2), s["default"](a2);
            }
            var e = c(1)["default"];
            b.__esModule = true, b.registerDefaultHelpers = d;
            var f = c(11), g = e(f), h = c(12), i = e(h), j = c(13), k = e(j), l = c(14), m = e(l), n = c(15), o = e(n), p = c(16), q = e(p), r = c(17), s = e(r);
          }, function(a, b, c) {
            "use strict";
            b.__esModule = true;
            var d = c(5);
            b["default"] = function(a2) {
              a2.registerHelper("blockHelperMissing", function(b2, c2) {
                var e = c2.inverse, f = c2.fn;
                if (b2 === true)
                  return f(this);
                if (b2 === false || null == b2)
                  return e(this);
                if (d.isArray(b2))
                  return b2.length > 0 ? (c2.ids && (c2.ids = [c2.name]), a2.helpers.each(b2, c2)) : e(this);
                if (c2.data && c2.ids) {
                  var g = d.createFrame(c2.data);
                  g.contextPath = d.appendContextPath(c2.data.contextPath, c2.name), c2 = {data: g};
                }
                return f(b2, c2);
              });
            }, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            var d = c(1)["default"];
            b.__esModule = true;
            var e = c(5), f = c(6), g = d(f);
            b["default"] = function(a2) {
              a2.registerHelper("each", function(a3, b2) {
                function c2(b3, c3, f3) {
                  j && (j.key = b3, j.index = c3, j.first = 0 === c3, j.last = !!f3, k && (j.contextPath = k + b3)), i += d2(a3[b3], {data: j, blockParams: e.blockParams([a3[b3], b3], [k + b3, null])});
                }
                if (!b2)
                  throw new g["default"]("Must pass iterator to #each");
                var d2 = b2.fn, f2 = b2.inverse, h = 0, i = "", j = void 0, k = void 0;
                if (b2.data && b2.ids && (k = e.appendContextPath(b2.data.contextPath, b2.ids[0]) + "."), e.isFunction(a3) && (a3 = a3.call(this)), b2.data && (j = e.createFrame(b2.data)), a3 && "object" == (typeof a3 === "undefined" ? "undefined" : _typeof(a3)))
                  if (e.isArray(a3))
                    for (var l = a3.length; h < l; h++) {
                      h in a3 && c2(h, h, h === a3.length - 1);
                    }
                  else {
                    var m = void 0;
                    for (var n in a3) {
                      a3.hasOwnProperty(n) && (void 0 !== m && c2(m, h - 1), m = n, h++);
                    }
                    void 0 !== m && c2(m, h - 1, true);
                  }
                return 0 === h && (i = f2(this)), i;
              });
            }, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            var d = c(1)["default"];
            b.__esModule = true;
            var e = c(6), f = d(e);
            b["default"] = function(a2) {
              a2.registerHelper("helperMissing", function() {
                if (1 !== arguments.length)
                  throw new f["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
              });
            }, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            b.__esModule = true;
            var d = c(5);
            b["default"] = function(a2) {
              a2.registerHelper("if", function(a3, b2) {
                return d.isFunction(a3) && (a3 = a3.call(this)), !b2.hash.includeZero && !a3 || d.isEmpty(a3) ? b2.inverse(this) : b2.fn(this);
              }), a2.registerHelper("unless", function(b2, c2) {
                return a2.helpers["if"].call(this, b2, {fn: c2.inverse, inverse: c2.fn, hash: c2.hash});
              });
            }, a.exports = b["default"];
          }, function(a, b) {
            "use strict";
            b.__esModule = true, b["default"] = function(a2) {
              a2.registerHelper("log", function() {
                for (var b2 = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) {
                  b2.push(arguments[d]);
                }
                var e = 1;
                null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b2[0] = e, a2.log.apply(a2, b2);
              });
            }, a.exports = b["default"];
          }, function(a, b) {
            "use strict";
            b.__esModule = true, b["default"] = function(a2) {
              a2.registerHelper("lookup", function(a3, b2) {
                return a3 && a3[b2];
              });
            }, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            b.__esModule = true;
            var d = c(5);
            b["default"] = function(a2) {
              a2.registerHelper("with", function(a3, b2) {
                d.isFunction(a3) && (a3 = a3.call(this));
                var c2 = b2.fn;
                if (d.isEmpty(a3))
                  return b2.inverse(this);
                var e = b2.data;
                return b2.data && b2.ids && (e = d.createFrame(b2.data), e.contextPath = d.appendContextPath(b2.data.contextPath, b2.ids[0])), c2(a3, {data: e, blockParams: d.blockParams([a3], [e && e.contextPath])});
              });
            }, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            function d(a2) {
              g["default"](a2);
            }
            var e = c(1)["default"];
            b.__esModule = true, b.registerDefaultDecorators = d;
            var f = c(19), g = e(f);
          }, function(a, b, c) {
            "use strict";
            b.__esModule = true;
            var d = c(5);
            b["default"] = function(a2) {
              a2.registerDecorator("inline", function(a3, b2, c2, e) {
                var f = a3;
                return b2.partials || (b2.partials = {}, f = function f2(e2, _f) {
                  var g = c2.partials;
                  c2.partials = d.extend({}, g, b2.partials);
                  var h = a3(e2, _f);
                  return c2.partials = g, h;
                }), b2.partials[e.args[0]] = e.fn, f;
              });
            }, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            b.__esModule = true;
            var d = c(5), e = {methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function lookupLevel(a2) {
              if ("string" == typeof a2) {
                var b2 = d.indexOf(e.methodMap, a2.toLowerCase());
                a2 = b2 >= 0 ? b2 : parseInt(a2, 10);
              }
              return a2;
            }, log: function log(a2) {
              if (a2 = e.lookupLevel(a2), "undefined" != typeof console && e.lookupLevel(e.level) <= a2) {
                var b2 = e.methodMap[a2];
                console[b2] || (b2 = "log");
                for (var c2 = arguments.length, d2 = Array(c2 > 1 ? c2 - 1 : 0), f = 1; f < c2; f++) {
                  d2[f - 1] = arguments[f];
                }
                console[b2].apply(console, d2);
              }
            }};
            b["default"] = e, a.exports = b["default"];
          }, function(a, b) {
            "use strict";
            function c(a2) {
              this.string = a2;
            }
            b.__esModule = true, c.prototype.toString = c.prototype.toHTML = function() {
              return "" + this.string;
            }, b["default"] = c, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            function d(a2) {
              var b2 = a2 && a2[0] || 1, c2 = s.COMPILER_REVISION;
              if (b2 !== c2) {
                if (b2 < c2) {
                  var d2 = s.REVISION_CHANGES[c2], e2 = s.REVISION_CHANGES[b2];
                  throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d2 + ") or downgrade your runtime to an older version (" + e2 + ").");
                }
                throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a2[1] + ").");
              }
            }
            function e(a2, b2) {
              function c2(c3, d3, e3) {
                e3.hash && (d3 = p.extend({}, d3, e3.hash), e3.ids && (e3.ids[0] = true)), c3 = b2.VM.resolvePartial.call(this, c3, d3, e3);
                var f2 = b2.VM.invokePartial.call(this, c3, d3, e3);
                if (null == f2 && b2.compile && (e3.partials[e3.name] = b2.compile(c3, a2.compilerOptions, b2), f2 = e3.partials[e3.name](d3, e3)), null != f2) {
                  if (e3.indent) {
                    for (var g2 = f2.split("\n"), h2 = 0, i2 = g2.length; h2 < i2 && (g2[h2] || h2 + 1 !== i2); h2++) {
                      g2[h2] = e3.indent + g2[h2];
                    }
                    f2 = g2.join("\n");
                  }
                  return f2;
                }
                throw new r["default"]("The partial " + e3.name + " could not be compiled when running in runtime-only mode");
              }
              function d2(b3) {
                function c3(b4) {
                  return "" + a2.main(e2, b4, e2.helpers, e2.partials, g2, i2, h2);
                }
                var f2 = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], g2 = f2.data;
                d2._setup(f2), !f2.partial && a2.useData && (g2 = j(b3, g2));
                var h2 = void 0, i2 = a2.useBlockParams ? [] : void 0;
                return a2.useDepths && (h2 = f2.depths ? b3 != f2.depths[0] ? [b3].concat(f2.depths) : f2.depths : [b3]), (c3 = k(a2.main, c3, e2, f2.depths || [], g2, i2))(b3, f2);
              }
              if (!b2)
                throw new r["default"]("No environment passed to template");
              if (!a2 || !a2.main)
                throw new r["default"]("Unknown template object: " + (typeof a2 === "undefined" ? "undefined" : _typeof(a2)));
              a2.main.decorator = a2.main_d, b2.VM.checkRevision(a2.compiler);
              var e2 = {strict: function strict(a3, b3) {
                if (!(b3 in a3))
                  throw new r["default"]('"' + b3 + '" not defined in ' + a3);
                return a3[b3];
              }, lookup: function lookup(a3, b3) {
                for (var c3 = a3.length, d3 = 0; d3 < c3; d3++) {
                  if (a3[d3] && null != a3[d3][b3])
                    return a3[d3][b3];
                }
              }, lambda: function lambda(a3, b3) {
                return "function" == typeof a3 ? a3.call(b3) : a3;
              }, escapeExpression: p.escapeExpression, invokePartial: c2, fn: function fn(b3) {
                var c3 = a2[b3];
                return c3.decorator = a2[b3 + "_d"], c3;
              }, programs: [], program: function program(a3, b3, c3, d3, e3) {
                var g2 = this.programs[a3], h2 = this.fn(a3);
                return b3 || e3 || d3 || c3 ? g2 = f(this, a3, h2, b3, c3, d3, e3) : g2 || (g2 = this.programs[a3] = f(this, a3, h2)), g2;
              }, data: function data(a3, b3) {
                for (; a3 && b3--; ) {
                  a3 = a3._parent;
                }
                return a3;
              }, merge: function merge(a3, b3) {
                var c3 = a3 || b3;
                return a3 && b3 && a3 !== b3 && (c3 = p.extend({}, b3, a3)), c3;
              }, nullContext: l({}), noop: b2.VM.noop, compilerInfo: a2.compiler};
              return d2.isTop = true, d2._setup = function(c3) {
                c3.partial ? (e2.helpers = c3.helpers, e2.partials = c3.partials, e2.decorators = c3.decorators) : (e2.helpers = e2.merge(c3.helpers, b2.helpers), a2.usePartial && (e2.partials = e2.merge(c3.partials, b2.partials)), (a2.usePartial || a2.useDecorators) && (e2.decorators = e2.merge(c3.decorators, b2.decorators)));
              }, d2._child = function(b3, c3, d3, g2) {
                if (a2.useBlockParams && !d3)
                  throw new r["default"]("must pass block params");
                if (a2.useDepths && !g2)
                  throw new r["default"]("must pass parent depths");
                return f(e2, b3, a2[b3], c3, 0, d3, g2);
              }, d2;
            }
            function f(a2, b2, c2, d2, e2, f2, g2) {
              function h2(b3) {
                var e3 = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], h3 = g2;
                return !g2 || b3 == g2[0] || b3 === a2.nullContext && null === g2[0] || (h3 = [b3].concat(g2)), c2(a2, b3, a2.helpers, a2.partials, e3.data || d2, f2 && [e3.blockParams].concat(f2), h3);
              }
              return h2 = k(c2, h2, a2, g2, d2, f2), h2.program = b2, h2.depth = g2 ? g2.length : 0, h2.blockParams = e2 || 0, h2;
            }
            function g(a2, b2, c2) {
              return a2 ? a2.call || c2.name || (c2.name = a2, a2 = c2.partials[a2]) : a2 = "@partial-block" === c2.name ? c2.data["partial-block"] : c2.partials[c2.name], a2;
            }
            function h(a2, b2, c2) {
              var d2 = c2.data && c2.data["partial-block"];
              c2.partial = true, c2.ids && (c2.data.contextPath = c2.ids[0] || c2.data.contextPath);
              var e2 = void 0;
              if (c2.fn && c2.fn !== i && !function() {
                c2.data = s.createFrame(c2.data);
                var a3 = c2.fn;
                e2 = c2.data["partial-block"] = function(b3) {
                  var c3 = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                  return c3.data = s.createFrame(c3.data), c3.data["partial-block"] = d2, a3(b3, c3);
                }, a3.partials && (c2.partials = p.extend({}, c2.partials, a3.partials));
              }(), void 0 === a2 && e2 && (a2 = e2), void 0 === a2)
                throw new r["default"]("The partial " + c2.name + " could not be found");
              if (a2 instanceof Function)
                return a2(b2, c2);
            }
            function i() {
              return "";
            }
            function j(a2, b2) {
              return b2 && "root" in b2 || (b2 = b2 ? s.createFrame(b2) : {}, b2.root = a2), b2;
            }
            function k(a2, b2, c2, d2, e2, f2) {
              if (a2.decorator) {
                var g2 = {};
                b2 = a2.decorator(b2, g2, c2, d2 && d2[0], e2, f2, d2), p.extend(b2, g2);
              }
              return b2;
            }
            var l = c(23)["default"], m = c(3)["default"], n = c(1)["default"];
            b.__esModule = true, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;
            var o = c(5), p = m(o), q = c(6), r = n(q), s = c(4);
          }, function(a, b, c) {
            a.exports = {default: c(24), __esModule: true};
          }, function(a, b, c) {
            c(25), a.exports = c(30).Object.seal;
          }, function(a, b, c) {
            var d = c(26);
            c(27)("seal", function(a2) {
              return function(b2) {
                return a2 && d(b2) ? a2(b2) : b2;
              };
            });
          }, function(a, b) {
            a.exports = function(a2) {
              return "object" == (typeof a2 === "undefined" ? "undefined" : _typeof(a2)) ? null !== a2 : "function" == typeof a2;
            };
          }, function(a, b, c) {
            var d = c(28), e = c(30), f = c(33);
            a.exports = function(a2, b2) {
              var c2 = (e.Object || {})[a2] || Object[a2], g = {};
              g[a2] = b2(c2), d(d.S + d.F * f(function() {
                c2(1);
              }), "Object", g);
            };
          }, function(a, b, c) {
            var d = c(29), e = c(30), f = c(31), g = "prototype", h = function h2(a2, b2, c2) {
              var i, j, k, l = a2 & h2.F, m = a2 & h2.G, n = a2 & h2.S, o = a2 & h2.P, p = a2 & h2.B, q = a2 & h2.W, r = m ? e : e[b2] || (e[b2] = {}), s = m ? d : n ? d[b2] : (d[b2] || {})[g];
              m && (c2 = b2);
              for (i in c2) {
                j = !l && s && i in s, j && i in r || (k = j ? s[i] : c2[i], r[i] = m && "function" != typeof s[i] ? c2[i] : p && j ? f(k, d) : q && s[i] == k ? function(a3) {
                  var b3 = function b4(_b) {
                    return this instanceof a3 ? new a3(_b) : a3(_b);
                  };
                  return b3[g] = a3[g], b3;
                }(k) : o && "function" == typeof k ? f(Function.call, k) : k, o && ((r[g] || (r[g] = {}))[i] = k));
              }
            };
            h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, a.exports = h;
          }, function(a, b) {
            var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = c);
          }, function(a, b) {
            var c = a.exports = {version: "1.2.6"};
            "number" == typeof __e && (__e = c);
          }, function(a, b, c) {
            var d = c(32);
            a.exports = function(a2, b2, c2) {
              if (d(a2), void 0 === b2)
                return a2;
              switch (c2) {
                case 1:
                  return function(c3) {
                    return a2.call(b2, c3);
                  };
                case 2:
                  return function(c3, d2) {
                    return a2.call(b2, c3, d2);
                  };
                case 3:
                  return function(c3, d2, e) {
                    return a2.call(b2, c3, d2, e);
                  };
              }
              return function() {
                return a2.apply(b2, arguments);
              };
            };
          }, function(a, b) {
            a.exports = function(a2) {
              if ("function" != typeof a2)
                throw TypeError(a2 + " is not a function!");
              return a2;
            };
          }, function(a, b) {
            a.exports = function(a2) {
              try {
                return !!a2();
              } catch (b2) {
                return true;
              }
            };
          }, function(a, b) {
            (function(c) {
              "use strict";
              b.__esModule = true, b["default"] = function(a2) {
                var b2 = "undefined" != typeof c ? c : window, d = b2.Handlebars;
                a2.noConflict = function() {
                  return b2.Handlebars === a2 && (b2.Handlebars = d), a2;
                };
              }, a.exports = b["default"];
            }).call(b, function() {
              return this;
            }());
          }, function(a, b) {
            "use strict";
            b.__esModule = true;
            var c = {helpers: {helperExpression: function helperExpression(a2) {
              return "SubExpression" === a2.type || ("MustacheStatement" === a2.type || "BlockStatement" === a2.type) && !!(a2.params && a2.params.length || a2.hash);
            }, scopedId: function scopedId(a2) {
              return /^\.|this\b/.test(a2.original);
            }, simpleId: function simpleId(a2) {
              return 1 === a2.parts.length && !c.helpers.scopedId(a2) && !a2.depth;
            }}};
            b["default"] = c, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            function d(a2, b2) {
              if ("Program" === a2.type)
                return a2;
              h["default"].yy = n, n.locInfo = function(a3) {
                return new n.SourceLocation(b2 && b2.srcName, a3);
              };
              var c2 = new j["default"](b2);
              return c2.accept(h["default"].parse(a2));
            }
            var e = c(1)["default"], f = c(3)["default"];
            b.__esModule = true, b.parse = d;
            var g = c(37), h = e(g), i = c(38), j = e(i), k = c(40), l = f(k), m = c(5);
            b.parser = h["default"];
            var n = {};
            m.extend(n, l);
          }, function(a, b) {
            "use strict";
            b.__esModule = true;
            var c = function() {
              function a2() {
                this.yy = {};
              }
              var b2 = {trace: function trace() {
              }, yy: {}, symbols_: {error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition_plus0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1}, terminals_: {2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP"}, productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]], performAction: function performAction(a3, b3, c3, d, e, f, g) {
                var h = f.length - 1;
                switch (e) {
                  case 1:
                    return f[h - 1];
                  case 2:
                    this.$ = d.prepareProgram(f[h]);
                    break;
                  case 3:
                    this.$ = f[h];
                    break;
                  case 4:
                    this.$ = f[h];
                    break;
                  case 5:
                    this.$ = f[h];
                    break;
                  case 6:
                    this.$ = f[h];
                    break;
                  case 7:
                    this.$ = f[h];
                    break;
                  case 8:
                    this.$ = f[h];
                    break;
                  case 9:
                    this.$ = {type: "CommentStatement", value: d.stripComment(f[h]), strip: d.stripFlags(f[h], f[h]), loc: d.locInfo(this._$)};
                    break;
                  case 10:
                    this.$ = {type: "ContentStatement", original: f[h], value: f[h], loc: d.locInfo(this._$)};
                    break;
                  case 11:
                    this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                    break;
                  case 12:
                    this.$ = {path: f[h - 3], params: f[h - 2], hash: f[h - 1]};
                    break;
                  case 13:
                    this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], false, this._$);
                    break;
                  case 14:
                    this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], true, this._$);
                    break;
                  case 15:
                    this.$ = {open: f[h - 5], path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h])};
                    break;
                  case 16:
                    this.$ = {path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h])};
                    break;
                  case 17:
                    this.$ = {path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h])};
                    break;
                  case 18:
                    this.$ = {strip: d.stripFlags(f[h - 1], f[h - 1]), program: f[h]};
                    break;
                  case 19:
                    var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], false, this._$), j = d.prepareProgram([i], f[h - 1].loc);
                    j.chained = true, this.$ = {strip: f[h - 2].strip, program: j, chain: true};
                    break;
                  case 20:
                    this.$ = f[h];
                    break;
                  case 21:
                    this.$ = {path: f[h - 1], strip: d.stripFlags(f[h - 2], f[h])};
                    break;
                  case 22:
                    this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                    break;
                  case 23:
                    this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                    break;
                  case 24:
                    this.$ = {type: "PartialStatement", name: f[h - 3], params: f[h - 2], hash: f[h - 1], indent: "", strip: d.stripFlags(f[h - 4], f[h]), loc: d.locInfo(this._$)};
                    break;
                  case 25:
                    this.$ = d.preparePartialBlock(f[h - 2], f[h - 1], f[h], this._$);
                    break;
                  case 26:
                    this.$ = {path: f[h - 3], params: f[h - 2], hash: f[h - 1], strip: d.stripFlags(f[h - 4], f[h])};
                    break;
                  case 27:
                    this.$ = f[h];
                    break;
                  case 28:
                    this.$ = f[h];
                    break;
                  case 29:
                    this.$ = {type: "SubExpression", path: f[h - 3], params: f[h - 2], hash: f[h - 1], loc: d.locInfo(this._$)};
                    break;
                  case 30:
                    this.$ = {type: "Hash", pairs: f[h], loc: d.locInfo(this._$)};
                    break;
                  case 31:
                    this.$ = {type: "HashPair", key: d.id(f[h - 2]), value: f[h], loc: d.locInfo(this._$)};
                    break;
                  case 32:
                    this.$ = d.id(f[h - 1]);
                    break;
                  case 33:
                    this.$ = f[h];
                    break;
                  case 34:
                    this.$ = f[h];
                    break;
                  case 35:
                    this.$ = {type: "StringLiteral", value: f[h], original: f[h], loc: d.locInfo(this._$)};
                    break;
                  case 36:
                    this.$ = {type: "NumberLiteral", value: Number(f[h]), original: Number(f[h]), loc: d.locInfo(this._$)};
                    break;
                  case 37:
                    this.$ = {type: "BooleanLiteral", value: "true" === f[h], original: "true" === f[h], loc: d.locInfo(this._$)};
                    break;
                  case 38:
                    this.$ = {type: "UndefinedLiteral", original: void 0, value: void 0, loc: d.locInfo(this._$)};
                    break;
                  case 39:
                    this.$ = {type: "NullLiteral", original: null, value: null, loc: d.locInfo(this._$)};
                    break;
                  case 40:
                    this.$ = f[h];
                    break;
                  case 41:
                    this.$ = f[h];
                    break;
                  case 42:
                    this.$ = d.preparePath(true, f[h], this._$);
                    break;
                  case 43:
                    this.$ = d.preparePath(false, f[h], this._$);
                    break;
                  case 44:
                    f[h - 2].push({part: d.id(f[h]), original: f[h], separator: f[h - 1]}), this.$ = f[h - 2];
                    break;
                  case 45:
                    this.$ = [{part: d.id(f[h]), original: f[h]}];
                    break;
                  case 46:
                    this.$ = [];
                    break;
                  case 47:
                    f[h - 1].push(f[h]);
                    break;
                  case 48:
                    this.$ = [f[h]];
                    break;
                  case 49:
                    f[h - 1].push(f[h]);
                    break;
                  case 50:
                    this.$ = [];
                    break;
                  case 51:
                    f[h - 1].push(f[h]);
                    break;
                  case 58:
                    this.$ = [];
                    break;
                  case 59:
                    f[h - 1].push(f[h]);
                    break;
                  case 64:
                    this.$ = [];
                    break;
                  case 65:
                    f[h - 1].push(f[h]);
                    break;
                  case 70:
                    this.$ = [];
                    break;
                  case 71:
                    f[h - 1].push(f[h]);
                    break;
                  case 78:
                    this.$ = [];
                    break;
                  case 79:
                    f[h - 1].push(f[h]);
                    break;
                  case 82:
                    this.$ = [];
                    break;
                  case 83:
                    f[h - 1].push(f[h]);
                    break;
                  case 86:
                    this.$ = [];
                    break;
                  case 87:
                    f[h - 1].push(f[h]);
                    break;
                  case 90:
                    this.$ = [];
                    break;
                  case 91:
                    f[h - 1].push(f[h]);
                    break;
                  case 94:
                    this.$ = [];
                    break;
                  case 95:
                    f[h - 1].push(f[h]);
                    break;
                  case 98:
                    this.$ = [f[h]];
                    break;
                  case 99:
                    f[h - 1].push(f[h]);
                    break;
                  case 100:
                    this.$ = [f[h]];
                    break;
                  case 101:
                    f[h - 1].push(f[h]);
                }
              }, table: [{3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46]}, {1: [3]}, {5: [1, 4]}, {5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24]}, {1: [2, 1]}, {5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47]}, {5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3]}, {5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4]}, {5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5]}, {5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6]}, {5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7]}, {5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8]}, {5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9]}, {20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46]}, {4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46]}, {13: 40, 15: [1, 20], 17: 39}, {20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46]}, {5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10]}, {20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78]}, {23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33]}, {23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34]}, {23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35]}, {23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36]}, {23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37]}, {23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38]}, {23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39]}, {23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51]}, {72: [1, 35], 86: 52}, {23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45]}, {52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82]}, {25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54]}, {28: 60, 43: 61, 44: [1, 59], 47: [2, 56]}, {13: 63, 15: [1, 20], 18: [1, 62]}, {15: [2, 48], 18: [2, 48]}, {33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86]}, {33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40]}, {33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41]}, {20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {26: 66, 47: [1, 67]}, {30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58]}, {33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64]}, {21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50]}, {33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90]}, {20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {72: [1, 80]}, {23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51]}, {20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {26: 84, 47: [1, 67]}, {47: [2, 55]}, {4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46]}, {47: [2, 20]}, {20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46]}, {26: 88, 47: [1, 67]}, {47: [2, 57]}, {5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11]}, {15: [2, 49], 18: [2, 49]}, {20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94]}, {5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25]}, {20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {33: [1, 106]}, {33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79]}, {33: [2, 81]}, {23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27]}, {23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28]}, {23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30]}, {23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98]}, {23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45]}, {23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44]}, {54: [1, 110]}, {54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83]}, {54: [2, 85]}, {5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13]}, {38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76]}, {33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70]}, {47: [2, 18]}, {5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14]}, {33: [1, 114]}, {
                33: [2, 87],
                65: [2, 87],
                72: [2, 87],
                80: [2, 87],
                81: [2, 87],
                82: [2, 87],
                83: [2, 87],
                84: [2, 87],
                85: [2, 87]
              }, {33: [2, 89]}, {20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {33: [1, 118]}, {32: 119, 33: [2, 62], 74: 120, 75: [1, 121]}, {33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59]}, {33: [2, 61], 75: [2, 61]}, {33: [2, 68], 37: 122, 74: 123, 75: [1, 121]}, {33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65]}, {33: [2, 67], 75: [2, 67]}, {23: [1, 124]}, {23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51]}, {23: [2, 53]}, {33: [1, 125]}, {33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91]}, {33: [2, 93]}, {5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22]}, {23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99]}, {73: [1, 109]}, {20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23]}, {47: [2, 19]}, {47: [2, 77]}, {20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33}, {5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24]}, {68: [1, 130]}, {65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95]}, {68: [2, 97]}, {5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21]}, {33: [1, 131]}, {33: [2, 63]}, {72: [1, 133], 76: 132}, {33: [1, 134]}, {33: [2, 69]}, {15: [2, 12]}, {14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26]}, {23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31]}, {33: [2, 74], 42: 135, 74: 136, 75: [1, 121]}, {33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71]}, {33: [2, 73], 75: [2, 73]}, {23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29]}, {14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15]}, {72: [1, 138], 77: [1, 137]}, {72: [2, 100], 77: [2, 100]}, {14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16]}, {33: [1, 139]}, {33: [2, 75]}, {33: [2, 32]}, {72: [2, 101], 77: [2, 101]}, {14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17]}], defaultActions: {4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32]}, parseError: function parseError(a3, b3) {
                throw new Error(a3);
              }, parse: function parse(a3) {
                function b3() {
                  var a4;
                  return a4 = c3.lexer.lex() || 1, "number" != typeof a4 && (a4 = c3.symbols_[a4] || a4), a4;
                }
                var c3 = this, d = [0], e = [null], f = [], g = this.table, h = "", i = 0, j = 0, k = 0;
                this.lexer.setInput(a3), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var l = this.lexer.yylloc;
                f.push(l);
                var m = this.lexer.options && this.lexer.options.ranges;
                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var n, o, p, q, r, s, t, u, v, w = {}; ; ) {
                  if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && "undefined" != typeof n || (n = b3()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                    var x = "";
                    if (!k) {
                      v = [];
                      for (s in g[p]) {
                        this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                      }
                      x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {text: this.lexer.match, token: this.terminals_[n] || n, line: this.lexer.yylineno, loc: l, expected: v});
                    }
                  }
                  if (q[0] instanceof Array && q.length > 1)
                    throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                  switch (q[0]) {
                    case 1:
                      d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                      break;
                    case 2:
                      if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {first_line: f[f.length - (t || 1)].first_line, last_line: f[f.length - 1].last_line, first_column: f[f.length - (t || 1)].first_column, last_column: f[f.length - 1].last_column}, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r)
                        return r;
                      t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                      break;
                    case 3:
                      return true;
                  }
                }
                return true;
              }}, c2 = function() {
                var a3 = {EOF: 1, parseError: function parseError(a4, b3) {
                  if (!this.yy.parser)
                    throw new Error(a4);
                  this.yy.parser.parseError(a4, b3);
                }, setInput: function setInput(a4) {
                  return this._input = a4, this._more = this._less = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
                }, input: function input() {
                  var a4 = this._input[0];
                  this.yytext += a4, this.yyleng++, this.offset++, this.match += a4, this.matched += a4;
                  var b3 = a4.match(/(?:\r\n?|\n).*/g);
                  return b3 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a4;
                }, unput: function unput(a4) {
                  var b3 = a4.length, c3 = a4.split(/(?:\r\n?|\n)/g);
                  this._input = a4 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b3 - 1), this.offset -= b3;
                  var d = this.match.split(/(?:\r\n?|\n)/g);
                  this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c3.length - 1 && (this.yylineno -= c3.length - 1);
                  var e = this.yylloc.range;
                  return this.yylloc = {first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: c3 ? (c3.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c3.length].length - c3[0].length : this.yylloc.first_column - b3}, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b3]), this;
                }, more: function more() {
                  return this._more = true, this;
                }, less: function less(a4) {
                  this.unput(this.match.slice(a4));
                }, pastInput: function pastInput() {
                  var a4 = this.matched.substr(0, this.matched.length - this.match.length);
                  return (a4.length > 20 ? "..." : "") + a4.substr(-20).replace(/\n/g, "");
                }, upcomingInput: function upcomingInput() {
                  var a4 = this.match;
                  return a4.length < 20 && (a4 += this._input.substr(0, 20 - a4.length)), (a4.substr(0, 20) + (a4.length > 20 ? "..." : "")).replace(/\n/g, "");
                }, showPosition: function showPosition() {
                  var a4 = this.pastInput(), b3 = new Array(a4.length + 1).join("-");
                  return a4 + this.upcomingInput() + "\n" + b3 + "^";
                }, next: function next() {
                  if (this.done)
                    return this.EOF;
                  this._input || (this.done = true);
                  var a4, b3, c3, d, e;
                  this._more || (this.yytext = "", this.match = "");
                  for (var f = this._currentRules(), g = 0; g < f.length && (c3 = this._input.match(this.rules[f[g]]), !c3 || b3 && !(c3[0].length > b3[0].length) || (b3 = c3, d = g, this.options.flex)); g++) {
                  }
                  return b3 ? (e = b3[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b3[0].length}, this.yytext += b3[0], this.match += b3[0], this.matches = b3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._input = this._input.slice(b3[0].length), this.matched += b3[0], a4 = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), a4 ? a4 : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "", token: null, line: this.yylineno});
                }, lex: function lex() {
                  var a4 = this.next();
                  return "undefined" != typeof a4 ? a4 : this.lex();
                }, begin: function begin(a4) {
                  this.conditionStack.push(a4);
                }, popState: function popState() {
                  return this.conditionStack.pop();
                }, _currentRules: function _currentRules() {
                  return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                }, topState: function topState() {
                  return this.conditionStack[this.conditionStack.length - 2];
                }, pushState: function pushState(a4) {
                  this.begin(a4);
                }};
                return a3.options = {}, a3.performAction = function(a4, b3, c3, d) {
                  function e(a5, c4) {
                    return b3.yytext = b3.yytext.substr(a5, b3.yyleng - c4);
                  }
                  switch (c3) {
                    case 0:
                      if ("\\\\" === b3.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b3.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b3.yytext)
                        return 15;
                      break;
                    case 1:
                      return 15;
                    case 2:
                      return this.popState(), 15;
                    case 3:
                      return this.begin("raw"), 15;
                    case 4:
                      return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (b3.yytext = b3.yytext.substr(5, b3.yyleng - 9), "END_RAW_BLOCK");
                    case 5:
                      return 15;
                    case 6:
                      return this.popState(), 14;
                    case 7:
                      return 65;
                    case 8:
                      return 68;
                    case 9:
                      return 19;
                    case 10:
                      return this.popState(), this.begin("raw"), 23;
                    case 11:
                      return 55;
                    case 12:
                      return 60;
                    case 13:
                      return 29;
                    case 14:
                      return 47;
                    case 15:
                      return this.popState(), 44;
                    case 16:
                      return this.popState(), 44;
                    case 17:
                      return 34;
                    case 18:
                      return 39;
                    case 19:
                      return 51;
                    case 20:
                      return 48;
                    case 21:
                      this.unput(b3.yytext), this.popState(), this.begin("com");
                      break;
                    case 22:
                      return this.popState(), 14;
                    case 23:
                      return 48;
                    case 24:
                      return 73;
                    case 25:
                      return 72;
                    case 26:
                      return 72;
                    case 27:
                      return 87;
                    case 28:
                      break;
                    case 29:
                      return this.popState(), 54;
                    case 30:
                      return this.popState(), 33;
                    case 31:
                      return b3.yytext = e(1, 2).replace(/\\"/g, '"'), 80;
                    case 32:
                      return b3.yytext = e(1, 2).replace(/\\'/g, "'"), 80;
                    case 33:
                      return 85;
                    case 34:
                      return 82;
                    case 35:
                      return 82;
                    case 36:
                      return 83;
                    case 37:
                      return 84;
                    case 38:
                      return 81;
                    case 39:
                      return 75;
                    case 40:
                      return 77;
                    case 41:
                      return 72;
                    case 42:
                      return b3.yytext = b3.yytext.replace(/\\([\\\]])/g, "$1"), 72;
                    case 43:
                      return "INVALID";
                    case 44:
                      return 5;
                  }
                }, a3.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a3.conditions = {mu: {rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: false}, emu: {rules: [2], inclusive: false}, com: {rules: [6], inclusive: false}, raw: {rules: [3, 4, 5], inclusive: false}, INITIAL: {rules: [0, 1, 44], inclusive: true}}, a3;
              }();
              return b2.lexer = c2, a2.prototype = b2, b2.Parser = a2, new a2();
            }();
            b["default"] = c, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            function d() {
              var a2 = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
              this.options = a2;
            }
            function e(a2, b2, c2) {
              void 0 === b2 && (b2 = a2.length);
              var d2 = a2[b2 - 1], e2 = a2[b2 - 2];
              return d2 ? "ContentStatement" === d2.type ? (e2 || !c2 ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d2.original) : void 0 : c2;
            }
            function f(a2, b2, c2) {
              void 0 === b2 && (b2 = -1);
              var d2 = a2[b2 + 1], e2 = a2[b2 + 2];
              return d2 ? "ContentStatement" === d2.type ? (e2 || !c2 ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d2.original) : void 0 : c2;
            }
            function g(a2, b2, c2) {
              var d2 = a2[null == b2 ? 0 : b2 + 1];
              if (d2 && "ContentStatement" === d2.type && (c2 || !d2.rightStripped)) {
                var e2 = d2.value;
                d2.value = d2.value.replace(c2 ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d2.rightStripped = d2.value !== e2;
              }
            }
            function h(a2, b2, c2) {
              var d2 = a2[null == b2 ? a2.length - 1 : b2 - 1];
              if (d2 && "ContentStatement" === d2.type && (c2 || !d2.leftStripped)) {
                var e2 = d2.value;
                return d2.value = d2.value.replace(c2 ? /\s+$/ : /[ \t]+$/, ""), d2.leftStripped = d2.value !== e2, d2.leftStripped;
              }
            }
            var i = c(1)["default"];
            b.__esModule = true;
            var j = c(39), k = i(j);
            d.prototype = new k["default"](), d.prototype.Program = function(a2) {
              var b2 = !this.options.ignoreStandalone, c2 = !this.isRootSeen;
              this.isRootSeen = true;
              for (var d2 = a2.body, i2 = 0, j2 = d2.length; i2 < j2; i2++) {
                var k2 = d2[i2], l = this.accept(k2);
                if (l) {
                  var m = e(d2, i2, c2), n = f(d2, i2, c2), o = l.openStandalone && m, p = l.closeStandalone && n, q = l.inlineStandalone && m && n;
                  l.close && g(d2, i2, true), l.open && h(d2, i2, true), b2 && q && (g(d2, i2), h(d2, i2) && "PartialStatement" === k2.type && (k2.indent = /([ \t]+$)/.exec(d2[i2 - 1].original)[1])), b2 && o && (g((k2.program || k2.inverse).body), h(d2, i2)), b2 && p && (g(d2, i2), h((k2.inverse || k2.program).body));
                }
              }
              return a2;
            }, d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function(a2) {
              this.accept(a2.program), this.accept(a2.inverse);
              var b2 = a2.program || a2.inverse, c2 = a2.program && a2.inverse, d2 = c2, i2 = c2;
              if (c2 && c2.chained)
                for (d2 = c2.body[0].program; i2.chained; ) {
                  i2 = i2.body[i2.body.length - 1].program;
                }
              var j2 = {open: a2.openStrip.open, close: a2.closeStrip.close, openStandalone: f(b2.body), closeStandalone: e((d2 || b2).body)};
              if (a2.openStrip.close && g(b2.body, null, true), c2) {
                var k2 = a2.inverseStrip;
                k2.open && h(b2.body, null, true), k2.close && g(d2.body, null, true), a2.closeStrip.open && h(i2.body, null, true), !this.options.ignoreStandalone && e(b2.body) && f(d2.body) && (h(b2.body), g(d2.body));
              } else
                a2.closeStrip.open && h(b2.body, null, true);
              return j2;
            }, d.prototype.Decorator = d.prototype.MustacheStatement = function(a2) {
              return a2.strip;
            }, d.prototype.PartialStatement = d.prototype.CommentStatement = function(a2) {
              var b2 = a2.strip || {};
              return {inlineStandalone: true, open: b2.open, close: b2.close};
            }, b["default"] = d, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            function d() {
              this.parents = [];
            }
            function e(a2) {
              this.acceptRequired(a2, "path"), this.acceptArray(a2.params), this.acceptKey(a2, "hash");
            }
            function f(a2) {
              e.call(this, a2), this.acceptKey(a2, "program"), this.acceptKey(a2, "inverse");
            }
            function g(a2) {
              this.acceptRequired(a2, "name"), this.acceptArray(a2.params), this.acceptKey(a2, "hash");
            }
            var h = c(1)["default"];
            b.__esModule = true;
            var i = c(6), j = h(i);
            d.prototype = {constructor: d, mutating: false, acceptKey: function acceptKey(a2, b2) {
              var c2 = this.accept(a2[b2]);
              if (this.mutating) {
                if (c2 && !d.prototype[c2.type])
                  throw new j["default"]('Unexpected node type "' + c2.type + '" found when accepting ' + b2 + " on " + a2.type);
                a2[b2] = c2;
              }
            }, acceptRequired: function acceptRequired(a2, b2) {
              if (this.acceptKey(a2, b2), !a2[b2])
                throw new j["default"](a2.type + " requires " + b2);
            }, acceptArray: function acceptArray(a2) {
              for (var b2 = 0, c2 = a2.length; b2 < c2; b2++) {
                this.acceptKey(a2, b2), a2[b2] || (a2.splice(b2, 1), b2--, c2--);
              }
            }, accept: function accept(a2) {
              if (a2) {
                if (!this[a2.type])
                  throw new j["default"]("Unknown type: " + a2.type, a2);
                this.current && this.parents.unshift(this.current), this.current = a2;
                var b2 = this[a2.type](a2);
                return this.current = this.parents.shift(), !this.mutating || b2 ? b2 : b2 !== false ? a2 : void 0;
              }
            }, Program: function Program(a2) {
              this.acceptArray(a2.body);
            }, MustacheStatement: e, Decorator: e, BlockStatement: f, DecoratorBlock: f, PartialStatement: g, PartialBlockStatement: function PartialBlockStatement(a2) {
              g.call(this, a2), this.acceptKey(a2, "program");
            }, ContentStatement: function ContentStatement() {
            }, CommentStatement: function CommentStatement() {
            }, SubExpression: e, PathExpression: function PathExpression() {
            }, StringLiteral: function StringLiteral() {
            }, NumberLiteral: function NumberLiteral() {
            }, BooleanLiteral: function BooleanLiteral() {
            }, UndefinedLiteral: function UndefinedLiteral() {
            }, NullLiteral: function NullLiteral() {
            }, Hash: function Hash(a2) {
              this.acceptArray(a2.pairs);
            }, HashPair: function HashPair(a2) {
              this.acceptRequired(a2, "value");
            }}, b["default"] = d, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            function d(a2, b2) {
              if (b2 = b2.path ? b2.path.original : b2, a2.path.original !== b2) {
                var c2 = {loc: a2.path.loc};
                throw new q["default"](a2.path.original + " doesn't match " + b2, c2);
              }
            }
            function e(a2, b2) {
              this.source = a2, this.start = {line: b2.first_line, column: b2.first_column}, this.end = {line: b2.last_line, column: b2.last_column};
            }
            function f(a2) {
              return /^\[.*\]$/.test(a2) ? a2.substr(1, a2.length - 2) : a2;
            }
            function g(a2, b2) {
              return {open: "~" === a2.charAt(2), close: "~" === b2.charAt(b2.length - 3)};
            }
            function h(a2) {
              return a2.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
            }
            function i(a2, b2, c2) {
              c2 = this.locInfo(c2);
              for (var d2 = a2 ? "@" : "", e2 = [], f2 = 0, g2 = "", h2 = 0, i2 = b2.length; h2 < i2; h2++) {
                var j2 = b2[h2].part, k2 = b2[h2].original !== j2;
                if (d2 += (b2[h2].separator || "") + j2, k2 || ".." !== j2 && "." !== j2 && "this" !== j2)
                  e2.push(j2);
                else {
                  if (e2.length > 0)
                    throw new q["default"]("Invalid path: " + d2, {loc: c2});
                  ".." === j2 && (f2++, g2 += "../");
                }
              }
              return {type: "PathExpression", data: a2, depth: f2, parts: e2, original: d2, loc: c2};
            }
            function j(a2, b2, c2, d2, e2, f2) {
              var g2 = d2.charAt(3) || d2.charAt(2), h2 = "{" !== g2 && "&" !== g2, i2 = /\*/.test(d2);
              return {type: i2 ? "Decorator" : "MustacheStatement", path: a2, params: b2, hash: c2, escaped: h2, strip: e2, loc: this.locInfo(f2)};
            }
            function k(a2, b2, c2, e2) {
              d(a2, c2), e2 = this.locInfo(e2);
              var f2 = {type: "Program", body: b2, strip: {}, loc: e2};
              return {type: "BlockStatement", path: a2.path, params: a2.params, hash: a2.hash, program: f2, openStrip: {}, inverseStrip: {}, closeStrip: {}, loc: e2};
            }
            function l(a2, b2, c2, e2, f2, g2) {
              e2 && e2.path && d(a2, e2);
              var h2 = /\*/.test(a2.open);
              b2.blockParams = a2.blockParams;
              var i2 = void 0, j2 = void 0;
              if (c2) {
                if (h2)
                  throw new q["default"]("Unexpected inverse block on decorator", c2);
                c2.chain && (c2.program.body[0].closeStrip = e2.strip), j2 = c2.strip, i2 = c2.program;
              }
              return f2 && (f2 = i2, i2 = b2, b2 = f2), {type: h2 ? "DecoratorBlock" : "BlockStatement", path: a2.path, params: a2.params, hash: a2.hash, program: b2, inverse: i2, openStrip: a2.strip, inverseStrip: j2, closeStrip: e2 && e2.strip, loc: this.locInfo(g2)};
            }
            function m(a2, b2) {
              if (!b2 && a2.length) {
                var c2 = a2[0].loc, d2 = a2[a2.length - 1].loc;
                c2 && d2 && (b2 = {source: c2.source, start: {line: c2.start.line, column: c2.start.column}, end: {line: d2.end.line, column: d2.end.column}});
              }
              return {type: "Program", body: a2, strip: {}, loc: b2};
            }
            function n(a2, b2, c2, e2) {
              return d(a2, c2), {type: "PartialBlockStatement", name: a2.path, params: a2.params, hash: a2.hash, program: b2, openStrip: a2.strip, closeStrip: c2 && c2.strip, loc: this.locInfo(e2)};
            }
            var o = c(1)["default"];
            b.__esModule = true, b.SourceLocation = e, b.id = f, b.stripFlags = g, b.stripComment = h, b.preparePath = i, b.prepareMustache = j, b.prepareRawBlock = k, b.prepareBlock = l, b.prepareProgram = m, b.preparePartialBlock = n;
            var p = c(6), q = o(p);
          }, function(a, b, c) {
            "use strict";
            function d() {
            }
            function e(a2, b2, c2) {
              if (null == a2 || "string" != typeof a2 && "Program" !== a2.type)
                throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a2);
              b2 = b2 || {}, "data" in b2 || (b2.data = true), b2.compat && (b2.useDepths = true);
              var d2 = c2.parse(a2, b2), e2 = new c2.Compiler().compile(d2, b2);
              return new c2.JavaScriptCompiler().compile(e2, b2);
            }
            function f(a2, b2, c2) {
              function d2() {
                var d3 = c2.parse(a2, b2), e3 = new c2.Compiler().compile(d3, b2), f3 = new c2.JavaScriptCompiler().compile(e3, b2, void 0, true);
                return c2.template(f3);
              }
              function e2(a3, b3) {
                return f2 || (f2 = d2()), f2.call(this, a3, b3);
              }
              if (void 0 === b2 && (b2 = {}), null == a2 || "string" != typeof a2 && "Program" !== a2.type)
                throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a2);
              b2 = l.extend({}, b2), "data" in b2 || (b2.data = true), b2.compat && (b2.useDepths = true);
              var f2 = void 0;
              return e2._setup = function(a3) {
                return f2 || (f2 = d2()), f2._setup(a3);
              }, e2._child = function(a3, b3, c3, e3) {
                return f2 || (f2 = d2()), f2._child(a3, b3, c3, e3);
              }, e2;
            }
            function g(a2, b2) {
              if (a2 === b2)
                return true;
              if (l.isArray(a2) && l.isArray(b2) && a2.length === b2.length) {
                for (var c2 = 0; c2 < a2.length; c2++) {
                  if (!g(a2[c2], b2[c2]))
                    return false;
                }
                return true;
              }
            }
            function h(a2) {
              if (!a2.path.parts) {
                var b2 = a2.path;
                a2.path = {type: "PathExpression", data: false, depth: 0, parts: [b2.original + ""], original: b2.original + "", loc: b2.loc};
              }
            }
            var i = c(1)["default"];
            b.__esModule = true, b.Compiler = d, b.precompile = e, b.compile = f;
            var j = c(6), k = i(j), l = c(5), m = c(35), n = i(m), o = [].slice;
            d.prototype = {compiler: d, equals: function equals(a2) {
              var b2 = this.opcodes.length;
              if (a2.opcodes.length !== b2)
                return false;
              for (var c2 = 0; c2 < b2; c2++) {
                var d2 = this.opcodes[c2], e2 = a2.opcodes[c2];
                if (d2.opcode !== e2.opcode || !g(d2.args, e2.args))
                  return false;
              }
              b2 = this.children.length;
              for (var c2 = 0; c2 < b2; c2++) {
                if (!this.children[c2].equals(a2.children[c2]))
                  return false;
              }
              return true;
            }, guid: 0, compile: function compile(a2, b2) {
              this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b2, this.stringParams = b2.stringParams, this.trackIds = b2.trackIds, b2.blockParams = b2.blockParams || [];
              var c2 = b2.knownHelpers;
              if (b2.knownHelpers = {helperMissing: true, blockHelperMissing: true, each: true, if: true, unless: true, with: true, log: true, lookup: true}, c2)
                for (var d2 in c2) {
                  d2 in c2 && (this.options.knownHelpers[d2] = c2[d2]);
                }
              return this.accept(a2);
            }, compileProgram: function compileProgram(a2) {
              var b2 = new this.compiler(), c2 = b2.compile(a2, this.options), d2 = this.guid++;
              return this.usePartial = this.usePartial || c2.usePartial, this.children[d2] = c2, this.useDepths = this.useDepths || c2.useDepths, d2;
            }, accept: function accept(a2) {
              if (!this[a2.type])
                throw new k["default"]("Unknown type: " + a2.type, a2);
              this.sourceNode.unshift(a2);
              var b2 = this[a2.type](a2);
              return this.sourceNode.shift(), b2;
            }, Program: function Program(a2) {
              this.options.blockParams.unshift(a2.blockParams);
              for (var b2 = a2.body, c2 = b2.length, d2 = 0; d2 < c2; d2++) {
                this.accept(b2[d2]);
              }
              return this.options.blockParams.shift(), this.isSimple = 1 === c2, this.blockParams = a2.blockParams ? a2.blockParams.length : 0, this;
            }, BlockStatement: function BlockStatement(a2) {
              h(a2);
              var b2 = a2.program, c2 = a2.inverse;
              b2 = b2 && this.compileProgram(b2), c2 = c2 && this.compileProgram(c2);
              var d2 = this.classifySexpr(a2);
              "helper" === d2 ? this.helperSexpr(a2, b2, c2) : "simple" === d2 ? (this.simpleSexpr(a2), this.opcode("pushProgram", b2), this.opcode("pushProgram", c2), this.opcode("emptyHash"), this.opcode("blockValue", a2.path.original)) : (this.ambiguousSexpr(a2, b2, c2), this.opcode("pushProgram", b2), this.opcode("pushProgram", c2), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
            }, DecoratorBlock: function DecoratorBlock(a2) {
              var b2 = a2.program && this.compileProgram(a2.program), c2 = this.setupFullMustacheParams(a2, b2, void 0), d2 = a2.path;
              this.useDecorators = true, this.opcode("registerDecorator", c2.length, d2.original);
            }, PartialStatement: function PartialStatement(a2) {
              this.usePartial = true;
              var b2 = a2.program;
              b2 && (b2 = this.compileProgram(a2.program));
              var c2 = a2.params;
              if (c2.length > 1)
                throw new k["default"]("Unsupported number of partial arguments: " + c2.length, a2);
              c2.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : c2.push({type: "PathExpression", parts: [], depth: 0}));
              var d2 = a2.name.original, e2 = "SubExpression" === a2.name.type;
              e2 && this.accept(a2.name), this.setupFullMustacheParams(a2, b2, void 0, true);
              var f2 = a2.indent || "";
              this.options.preventIndent && f2 && (this.opcode("appendContent", f2), f2 = ""), this.opcode("invokePartial", e2, d2, f2), this.opcode("append");
            }, PartialBlockStatement: function PartialBlockStatement(a2) {
              this.PartialStatement(a2);
            }, MustacheStatement: function MustacheStatement(a2) {
              this.SubExpression(a2), a2.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
            }, Decorator: function Decorator(a2) {
              this.DecoratorBlock(a2);
            }, ContentStatement: function ContentStatement(a2) {
              a2.value && this.opcode("appendContent", a2.value);
            }, CommentStatement: function CommentStatement() {
            }, SubExpression: function SubExpression(a2) {
              h(a2);
              var b2 = this.classifySexpr(a2);
              "simple" === b2 ? this.simpleSexpr(a2) : "helper" === b2 ? this.helperSexpr(a2) : this.ambiguousSexpr(a2);
            }, ambiguousSexpr: function ambiguousSexpr(a2, b2, c2) {
              var d2 = a2.path, e2 = d2.parts[0], f2 = null != b2 || null != c2;
              this.opcode("getContext", d2.depth), this.opcode("pushProgram", b2), this.opcode("pushProgram", c2), d2.strict = true, this.accept(d2), this.opcode("invokeAmbiguous", e2, f2);
            }, simpleSexpr: function simpleSexpr(a2) {
              var b2 = a2.path;
              b2.strict = true, this.accept(b2), this.opcode("resolvePossibleLambda");
            }, helperSexpr: function helperSexpr(a2, b2, c2) {
              var d2 = this.setupFullMustacheParams(a2, b2, c2), e2 = a2.path, f2 = e2.parts[0];
              if (this.options.knownHelpers[f2])
                this.opcode("invokeKnownHelper", d2.length, f2);
              else {
                if (this.options.knownHelpersOnly)
                  throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper " + f2, a2);
                e2.strict = true, e2.falsy = true, this.accept(e2), this.opcode("invokeHelper", d2.length, e2.original, n["default"].helpers.simpleId(e2));
              }
            }, PathExpression: function PathExpression(a2) {
              this.addDepth(a2.depth), this.opcode("getContext", a2.depth);
              var b2 = a2.parts[0], c2 = n["default"].helpers.scopedId(a2), d2 = !a2.depth && !c2 && this.blockParamIndex(b2);
              d2 ? this.opcode("lookupBlockParam", d2, a2.parts) : b2 ? a2.data ? (this.options.data = true, this.opcode("lookupData", a2.depth, a2.parts, a2.strict)) : this.opcode("lookupOnContext", a2.parts, a2.falsy, a2.strict, c2) : this.opcode("pushContext");
            }, StringLiteral: function StringLiteral(a2) {
              this.opcode("pushString", a2.value);
            }, NumberLiteral: function NumberLiteral(a2) {
              this.opcode("pushLiteral", a2.value);
            }, BooleanLiteral: function BooleanLiteral(a2) {
              this.opcode("pushLiteral", a2.value);
            }, UndefinedLiteral: function UndefinedLiteral() {
              this.opcode("pushLiteral", "undefined");
            }, NullLiteral: function NullLiteral() {
              this.opcode("pushLiteral", "null");
            }, Hash: function Hash(a2) {
              var b2 = a2.pairs, c2 = 0, d2 = b2.length;
              for (this.opcode("pushHash"); c2 < d2; c2++) {
                this.pushParam(b2[c2].value);
              }
              for (; c2--; ) {
                this.opcode("assignToHash", b2[c2].key);
              }
              this.opcode("popHash");
            }, opcode: function opcode(a2) {
              this.opcodes.push({opcode: a2, args: o.call(arguments, 1), loc: this.sourceNode[0].loc});
            }, addDepth: function addDepth(a2) {
              a2 && (this.useDepths = true);
            }, classifySexpr: function classifySexpr(a2) {
              var b2 = n["default"].helpers.simpleId(a2.path), c2 = b2 && !!this.blockParamIndex(a2.path.parts[0]), d2 = !c2 && n["default"].helpers.helperExpression(a2), e2 = !c2 && (d2 || b2);
              if (e2 && !d2) {
                var f2 = a2.path.parts[0], g2 = this.options;
                g2.knownHelpers[f2] ? d2 = true : g2.knownHelpersOnly && (e2 = false);
              }
              return d2 ? "helper" : e2 ? "ambiguous" : "simple";
            }, pushParams: function pushParams(a2) {
              for (var b2 = 0, c2 = a2.length; b2 < c2; b2++) {
                this.pushParam(a2[b2]);
              }
            }, pushParam: function pushParam(a2) {
              var b2 = null != a2.value ? a2.value : a2.original || "";
              if (this.stringParams)
                b2.replace && (b2 = b2.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a2.depth && this.addDepth(a2.depth), this.opcode("getContext", a2.depth || 0), this.opcode("pushStringParam", b2, a2.type), "SubExpression" === a2.type && this.accept(a2);
              else {
                if (this.trackIds) {
                  var c2 = void 0;
                  if (!a2.parts || n["default"].helpers.scopedId(a2) || a2.depth || (c2 = this.blockParamIndex(a2.parts[0])), c2) {
                    var d2 = a2.parts.slice(1).join(".");
                    this.opcode("pushId", "BlockParam", c2, d2);
                  } else
                    b2 = a2.original || b2, b2.replace && (b2 = b2.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", a2.type, b2);
                }
                this.accept(a2);
              }
            }, setupFullMustacheParams: function setupFullMustacheParams(a2, b2, c2, d2) {
              var e2 = a2.params;
              return this.pushParams(e2), this.opcode("pushProgram", b2), this.opcode("pushProgram", c2), a2.hash ? this.accept(a2.hash) : this.opcode("emptyHash", d2), e2;
            }, blockParamIndex: function blockParamIndex(a2) {
              for (var b2 = 0, c2 = this.options.blockParams.length; b2 < c2; b2++) {
                var d2 = this.options.blockParams[b2], e2 = d2 && l.indexOf(d2, a2);
                if (d2 && e2 >= 0)
                  return [b2, e2];
              }
            }};
          }, function(a, b, c) {
            "use strict";
            function d(a2) {
              this.value = a2;
            }
            function e() {
            }
            function f(a2, b2, c2, d2) {
              var e2 = b2.popStack(), f2 = 0, g2 = c2.length;
              for (a2 && g2--; f2 < g2; f2++) {
                e2 = b2.nameLookup(e2, c2[f2], d2);
              }
              return a2 ? [b2.aliasable("container.strict"), "(", e2, ", ", b2.quotedString(c2[f2]), ")"] : e2;
            }
            var g = c(1)["default"];
            b.__esModule = true;
            var h = c(4), i = c(6), j = g(i), k = c(5), l = c(43), m = g(l);
            e.prototype = {nameLookup: function nameLookup(a2, b2) {
              return e.isValidJavaScriptVariableName(b2) ? [a2, ".", b2] : [a2, "[", JSON.stringify(b2), "]"];
            }, depthedLookup: function depthedLookup(a2) {
              return [this.aliasable("container.lookup"), '(depths, "', a2, '")'];
            }, compilerInfo: function compilerInfo() {
              var a2 = h.COMPILER_REVISION, b2 = h.REVISION_CHANGES[a2];
              return [a2, b2];
            }, appendToBuffer: function appendToBuffer(a2, b2, c2) {
              return k.isArray(a2) || (a2 = [a2]), a2 = this.source.wrap(a2, b2), this.environment.isSimple ? ["return ", a2, ";"] : c2 ? ["buffer += ", a2, ";"] : (a2.appendToBuffer = true, a2);
            }, initializeBuffer: function initializeBuffer() {
              return this.quotedString("");
            }, compile: function compile(a2, b2, c2, d2) {
              this.environment = a2, this.options = b2, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d2, this.name = this.environment.name, this.isChild = !!c2, this.context = c2 || {decorators: [], programs: [], environments: []}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {list: []}, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a2, b2), this.useDepths = this.useDepths || a2.useDepths || a2.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || a2.useBlockParams;
              var e2 = a2.opcodes, f2 = void 0, g2 = void 0, h2 = void 0, i2 = void 0;
              for (h2 = 0, i2 = e2.length; h2 < i2; h2++) {
                f2 = e2[h2], this.source.currentLocation = f2.loc, g2 = g2 || f2.loc, this[f2.opcode].apply(this, f2.args);
              }
              if (this.source.currentLocation = g2, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
                throw new j["default"]("Compile completed with content left on stack");
              this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = true, this.decorators.prepend("var decorators = container.decorators;\n"), this.decorators.push("return fn;"), d2 ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
              var k2 = this.createFunctionContext(d2);
              if (this.isChild)
                return k2;
              var l2 = {compiler: this.compilerInfo(), main: k2};
              this.decorators && (l2.main_d = this.decorators, l2.useDecorators = true);
              var m2 = this.context, n = m2.programs, o = m2.decorators;
              for (h2 = 0, i2 = n.length; h2 < i2; h2++) {
                n[h2] && (l2[h2] = n[h2], o[h2] && (l2[h2 + "_d"] = o[h2], l2.useDecorators = true));
              }
              return this.environment.usePartial && (l2.usePartial = true), this.options.data && (l2.useData = true), this.useDepths && (l2.useDepths = true), this.useBlockParams && (l2.useBlockParams = true), this.options.compat && (l2.compat = true), d2 ? l2.compilerOptions = this.options : (l2.compiler = JSON.stringify(l2.compiler), this.source.currentLocation = {start: {line: 1, column: 0}}, l2 = this.objectLiteral(l2), b2.srcName ? (l2 = l2.toStringWithSourceMap({file: b2.destName}), l2.map = l2.map && l2.map.toString()) : l2 = l2.toString()), l2;
            }, preamble: function preamble() {
              this.lastContext = 0, this.source = new m["default"](this.options.srcName), this.decorators = new m["default"](this.options.srcName);
            }, createFunctionContext: function createFunctionContext(a2) {
              var b2 = "", c2 = this.stackVars.concat(this.registers.list);
              c2.length > 0 && (b2 += ", " + c2.join(", "));
              var d2 = 0;
              for (var e2 in this.aliases) {
                var f2 = this.aliases[e2];
                this.aliases.hasOwnProperty(e2) && f2.children && f2.referenceCount > 1 && (b2 += ", alias" + ++d2 + "=" + e2, f2.children[0] = "alias" + d2);
              }
              var g2 = ["container", "depth0", "helpers", "partials", "data"];
              (this.useBlockParams || this.useDepths) && g2.push("blockParams"), this.useDepths && g2.push("depths");
              var h2 = this.mergeSource(b2);
              return a2 ? (g2.push(h2), Function.apply(this, g2)) : this.source.wrap(["function(", g2.join(","), ") {\n  ", h2, "}"]);
            }, mergeSource: function mergeSource(a2) {
              var b2 = this.environment.isSimple, c2 = !this.forceBuffer, d2 = void 0, e2 = void 0, f2 = void 0, g2 = void 0;
              return this.source.each(function(a3) {
                a3.appendToBuffer ? (f2 ? a3.prepend("  + ") : f2 = a3, g2 = a3) : (f2 && (e2 ? f2.prepend("buffer += ") : d2 = true, g2.add(";"), f2 = g2 = void 0), e2 = true, b2 || (c2 = false));
              }), c2 ? f2 ? (f2.prepend("return "), g2.add(";")) : e2 || this.source.push('return "";') : (a2 += ", buffer = " + (d2 ? "" : this.initializeBuffer()), f2 ? (f2.prepend("return buffer + "), g2.add(";")) : this.source.push("return buffer;")), a2 && this.source.prepend("var " + a2.substring(2) + (d2 ? "" : ";\n")), this.source.merge();
            }, blockValue: function blockValue(a2) {
              var b2 = this.aliasable("helpers.blockHelperMissing"), c2 = [this.contextName(0)];
              this.setupHelperArgs(a2, 0, c2);
              var d2 = this.popStack();
              c2.splice(1, 0, d2), this.push(this.source.functionCall(b2, "call", c2));
            }, ambiguousBlockValue: function ambiguousBlockValue() {
              var a2 = this.aliasable("helpers.blockHelperMissing"), b2 = [this.contextName(0)];
              this.setupHelperArgs("", 0, b2, true), this.flushInline();
              var c2 = this.topStack();
              b2.splice(1, 0, c2), this.pushSource(["if (!", this.lastHelper, ") { ", c2, " = ", this.source.functionCall(a2, "call", b2), "}"]);
            }, appendContent: function appendContent(a2) {
              this.pendingContent ? a2 = this.pendingContent + a2 : this.pendingLocation = this.source.currentLocation, this.pendingContent = a2;
            }, append: function append() {
              if (this.isInline())
                this.replaceStack(function(a3) {
                  return [" != null ? ", a3, ' : ""'];
                }), this.pushSource(this.appendToBuffer(this.popStack()));
              else {
                var a2 = this.popStack();
                this.pushSource(["if (", a2, " != null) { ", this.appendToBuffer(a2, void 0, true), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, true), " }"]);
              }
            }, appendEscaped: function appendEscaped() {
              this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
            }, getContext: function getContext(a2) {
              this.lastContext = a2;
            }, pushContext: function pushContext() {
              this.pushStackLiteral(this.contextName(this.lastContext));
            }, lookupOnContext: function lookupOnContext(a2, b2, c2, d2) {
              var e2 = 0;
              d2 || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a2[e2++])), this.resolvePath("context", a2, e2, b2, c2);
            }, lookupBlockParam: function lookupBlockParam(a2, b2) {
              this.useBlockParams = true, this.push(["blockParams[", a2[0], "][", a2[1], "]"]), this.resolvePath("context", b2, 1);
            }, lookupData: function lookupData(a2, b2, c2) {
              a2 ? this.pushStackLiteral("container.data(data, " + a2 + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b2, 0, true, c2);
            }, resolvePath: function resolvePath(a2, b2, c2, d2, e2) {
              var g2 = this;
              if (this.options.strict || this.options.assumeObjects)
                return void this.push(f(this.options.strict && e2, this, b2, a2));
              for (var h2 = b2.length; c2 < h2; c2++) {
                this.replaceStack(function(e3) {
                  var f2 = g2.nameLookup(e3, b2[c2], a2);
                  return d2 ? [" && ", f2] : [" != null ? ", f2, " : ", e3];
                });
              }
            }, resolvePossibleLambda: function resolvePossibleLambda() {
              this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
            }, pushStringParam: function pushStringParam(a2, b2) {
              this.pushContext(), this.pushString(b2), "SubExpression" !== b2 && ("string" == typeof a2 ? this.pushString(a2) : this.pushStackLiteral(a2));
            }, emptyHash: function emptyHash(a2) {
              this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a2 ? "undefined" : "{}");
            }, pushHash: function pushHash() {
              this.hash && this.hashes.push(this.hash), this.hash = {values: [], types: [], contexts: [], ids: []};
            }, popHash: function popHash() {
              var a2 = this.hash;
              this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a2.ids)), this.stringParams && (this.push(this.objectLiteral(a2.contexts)), this.push(this.objectLiteral(a2.types))), this.push(this.objectLiteral(a2.values));
            }, pushString: function pushString(a2) {
              this.pushStackLiteral(this.quotedString(a2));
            }, pushLiteral: function pushLiteral(a2) {
              this.pushStackLiteral(a2);
            }, pushProgram: function pushProgram(a2) {
              null != a2 ? this.pushStackLiteral(this.programExpression(a2)) : this.pushStackLiteral(null);
            }, registerDecorator: function registerDecorator(a2, b2) {
              var c2 = this.nameLookup("decorators", b2, "decorator"), d2 = this.setupHelperArgs(b2, a2);
              this.decorators.push(["fn = ", this.decorators.functionCall(c2, "", ["fn", "props", "container", d2]), " || fn;"]);
            }, invokeHelper: function invokeHelper(a2, b2, c2) {
              var d2 = this.popStack(), e2 = this.setupHelper(a2, b2), f2 = c2 ? [e2.name, " || "] : "", g2 = ["("].concat(f2, d2);
              this.options.strict || g2.push(" || ", this.aliasable("helpers.helperMissing")), g2.push(")"), this.push(this.source.functionCall(g2, "call", e2.callParams));
            }, invokeKnownHelper: function invokeKnownHelper(a2, b2) {
              var c2 = this.setupHelper(a2, b2);
              this.push(this.source.functionCall(c2.name, "call", c2.callParams));
            }, invokeAmbiguous: function invokeAmbiguous(a2, b2) {
              this.useRegister("helper");
              var c2 = this.popStack();
              this.emptyHash();
              var d2 = this.setupHelper(0, a2, b2), e2 = this.lastHelper = this.nameLookup("helpers", a2, "helper"), f2 = ["(", "(helper = ", e2, " || ", c2, ")"];
              this.options.strict || (f2[0] = "(helper = ", f2.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", f2, d2.paramsInit ? ["),(", d2.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d2.callParams), " : helper))"]);
            }, invokePartial: function invokePartial(a2, b2, c2) {
              var d2 = [], e2 = this.setupParams(b2, 1, d2);
              a2 && (b2 = this.popStack(), delete e2.name), c2 && (e2.indent = JSON.stringify(c2)), e2.helpers = "helpers", e2.partials = "partials", e2.decorators = "container.decorators", a2 ? d2.unshift(b2) : d2.unshift(this.nameLookup("partials", b2, "partial")), this.options.compat && (e2.depths = "depths"), e2 = this.objectLiteral(e2), d2.push(e2), this.push(this.source.functionCall("container.invokePartial", "", d2));
            }, assignToHash: function assignToHash(a2) {
              var b2 = this.popStack(), c2 = void 0, d2 = void 0, e2 = void 0;
              this.trackIds && (e2 = this.popStack()), this.stringParams && (d2 = this.popStack(), c2 = this.popStack());
              var f2 = this.hash;
              c2 && (f2.contexts[a2] = c2), d2 && (f2.types[a2] = d2), e2 && (f2.ids[a2] = e2), f2.values[a2] = b2;
            }, pushId: function pushId(a2, b2, c2) {
              "BlockParam" === a2 ? this.pushStackLiteral("blockParams[" + b2[0] + "].path[" + b2[1] + "]" + (c2 ? " + " + JSON.stringify("." + c2) : "")) : "PathExpression" === a2 ? this.pushString(b2) : "SubExpression" === a2 ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
            }, compiler: e, compileChildren: function compileChildren(a2, b2) {
              for (var c2 = a2.children, d2 = void 0, e2 = void 0, f2 = 0, g2 = c2.length; f2 < g2; f2++) {
                d2 = c2[f2], e2 = new this.compiler();
                var h2 = this.matchExistingProgram(d2);
                if (null == h2) {
                  this.context.programs.push("");
                  var i2 = this.context.programs.length;
                  d2.index = i2, d2.name = "program" + i2, this.context.programs[i2] = e2.compile(d2, b2, this.context, !this.precompile), this.context.decorators[i2] = e2.decorators, this.context.environments[i2] = d2, this.useDepths = this.useDepths || e2.useDepths, this.useBlockParams = this.useBlockParams || e2.useBlockParams, d2.useDepths = this.useDepths, d2.useBlockParams = this.useBlockParams;
                } else
                  d2.index = h2.index, d2.name = "program" + h2.index, this.useDepths = this.useDepths || h2.useDepths, this.useBlockParams = this.useBlockParams || h2.useBlockParams;
              }
            }, matchExistingProgram: function matchExistingProgram(a2) {
              for (var b2 = 0, c2 = this.context.environments.length; b2 < c2; b2++) {
                var d2 = this.context.environments[b2];
                if (d2 && d2.equals(a2))
                  return d2;
              }
            }, programExpression: function programExpression(a2) {
              var b2 = this.environment.children[a2], c2 = [b2.index, "data", b2.blockParams];
              return (this.useBlockParams || this.useDepths) && c2.push("blockParams"), this.useDepths && c2.push("depths"), "container.program(" + c2.join(", ") + ")";
            }, useRegister: function useRegister(a2) {
              this.registers[a2] || (this.registers[a2] = true, this.registers.list.push(a2));
            }, push: function push(a2) {
              return a2 instanceof d || (a2 = this.source.wrap(a2)), this.inlineStack.push(a2), a2;
            }, pushStackLiteral: function pushStackLiteral(a2) {
              this.push(new d(a2));
            }, pushSource: function pushSource(a2) {
              this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a2 && this.source.push(a2);
            }, replaceStack: function replaceStack(a2) {
              var b2 = ["("], c2 = void 0, e2 = void 0, f2 = void 0;
              if (!this.isInline())
                throw new j["default"]("replaceStack on non-inline");
              var g2 = this.popStack(true);
              if (g2 instanceof d)
                c2 = [g2.value], b2 = ["(", c2], f2 = true;
              else {
                e2 = true;
                var h2 = this.incrStack();
                b2 = ["((", this.push(h2), " = ", g2, ")"], c2 = this.topStack();
              }
              var i2 = a2.call(this, c2);
              f2 || this.popStack(), e2 && this.stackSlot--, this.push(b2.concat(i2, ")"));
            }, incrStack: function incrStack() {
              return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
            }, topStackName: function topStackName() {
              return "stack" + this.stackSlot;
            }, flushInline: function flushInline() {
              var a2 = this.inlineStack;
              this.inlineStack = [];
              for (var b2 = 0, c2 = a2.length; b2 < c2; b2++) {
                var e2 = a2[b2];
                if (e2 instanceof d)
                  this.compileStack.push(e2);
                else {
                  var f2 = this.incrStack();
                  this.pushSource([f2, " = ", e2, ";"]), this.compileStack.push(f2);
                }
              }
            }, isInline: function isInline() {
              return this.inlineStack.length;
            }, popStack: function popStack(a2) {
              var b2 = this.isInline(), c2 = (b2 ? this.inlineStack : this.compileStack).pop();
              if (!a2 && c2 instanceof d)
                return c2.value;
              if (!b2) {
                if (!this.stackSlot)
                  throw new j["default"]("Invalid stack pop");
                this.stackSlot--;
              }
              return c2;
            }, topStack: function topStack() {
              var a2 = this.isInline() ? this.inlineStack : this.compileStack, b2 = a2[a2.length - 1];
              return b2 instanceof d ? b2.value : b2;
            }, contextName: function contextName(a2) {
              return this.useDepths && a2 ? "depths[" + a2 + "]" : "depth" + a2;
            }, quotedString: function quotedString(a2) {
              return this.source.quotedString(a2);
            }, objectLiteral: function objectLiteral(a2) {
              return this.source.objectLiteral(a2);
            }, aliasable: function aliasable(a2) {
              var b2 = this.aliases[a2];
              return b2 ? (b2.referenceCount++, b2) : (b2 = this.aliases[a2] = this.source.wrap(a2), b2.aliasable = true, b2.referenceCount = 1, b2);
            }, setupHelper: function setupHelper(a2, b2, c2) {
              var d2 = [], e2 = this.setupHelperArgs(b2, a2, d2, c2), f2 = this.nameLookup("helpers", b2, "helper"), g2 = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
              return {params: d2, paramsInit: e2, name: f2, callParams: [g2].concat(d2)};
            }, setupParams: function setupParams(a2, b2, c2) {
              var d2 = {}, e2 = [], f2 = [], g2 = [], h2 = !c2, i2 = void 0;
              h2 && (c2 = []), d2.name = this.quotedString(a2), d2.hash = this.popStack(), this.trackIds && (d2.hashIds = this.popStack()), this.stringParams && (d2.hashTypes = this.popStack(), d2.hashContexts = this.popStack());
              var j2 = this.popStack(), k2 = this.popStack();
              (k2 || j2) && (d2.fn = k2 || "container.noop", d2.inverse = j2 || "container.noop");
              for (var l2 = b2; l2--; ) {
                i2 = this.popStack(), c2[l2] = i2, this.trackIds && (g2[l2] = this.popStack()), this.stringParams && (f2[l2] = this.popStack(), e2[l2] = this.popStack());
              }
              return h2 && (d2.args = this.source.generateArray(c2)), this.trackIds && (d2.ids = this.source.generateArray(g2)), this.stringParams && (d2.types = this.source.generateArray(f2), d2.contexts = this.source.generateArray(e2)), this.options.data && (d2.data = "data"), this.useBlockParams && (d2.blockParams = "blockParams"), d2;
            }, setupHelperArgs: function setupHelperArgs(a2, b2, c2, d2) {
              var e2 = this.setupParams(a2, b2, c2);
              return e2 = this.objectLiteral(e2), d2 ? (this.useRegister("options"), c2.push("options"), ["options=", e2]) : c2 ? (c2.push(e2), "") : e2;
            }}, function() {
              for (var a2 = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b2 = e.RESERVED_WORDS = {}, c2 = 0, d2 = a2.length; c2 < d2; c2++) {
                b2[a2[c2]] = true;
              }
            }(), e.isValidJavaScriptVariableName = function(a2) {
              return !e.RESERVED_WORDS[a2] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a2);
            }, b["default"] = e, a.exports = b["default"];
          }, function(a, b, c) {
            "use strict";
            function d(a2, b2, c2) {
              if (f.isArray(a2)) {
                for (var d2 = [], e2 = 0, g2 = a2.length; e2 < g2; e2++) {
                  d2.push(b2.wrap(a2[e2], c2));
                }
                return d2;
              }
              return "boolean" == typeof a2 || "number" == typeof a2 ? a2 + "" : a2;
            }
            function e(a2) {
              this.srcFile = a2, this.source = [];
            }
            b.__esModule = true;
            var f = c(5), g = void 0;
            try {
            } catch (h) {
            }
            g || (g = function g2(a2, b2, c2, d2) {
              this.src = "", d2 && this.add(d2);
            }, g.prototype = {add: function add(a2) {
              f.isArray(a2) && (a2 = a2.join("")), this.src += a2;
            }, prepend: function prepend(a2) {
              f.isArray(a2) && (a2 = a2.join("")), this.src = a2 + this.src;
            }, toStringWithSourceMap: function toStringWithSourceMap() {
              return {code: this.toString()};
            }, toString: function toString() {
              return this.src;
            }}), e.prototype = {isEmpty: function isEmpty() {
              return !this.source.length;
            }, prepend: function prepend(a2, b2) {
              this.source.unshift(this.wrap(a2, b2));
            }, push: function push(a2, b2) {
              this.source.push(this.wrap(a2, b2));
            }, merge: function merge() {
              var a2 = this.empty();
              return this.each(function(b2) {
                a2.add(["  ", b2, "\n"]);
              }), a2;
            }, each: function each(a2) {
              for (var b2 = 0, c2 = this.source.length; b2 < c2; b2++) {
                a2(this.source[b2]);
              }
            }, empty: function empty() {
              var a2 = this.currentLocation || {start: {}};
              return new g(a2.start.line, a2.start.column, this.srcFile);
            }, wrap: function wrap(a2) {
              var b2 = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {start: {}} : arguments[1];
              return a2 instanceof g ? a2 : (a2 = d(a2, this, b2), new g(b2.start.line, b2.start.column, this.srcFile, a2));
            }, functionCall: function functionCall(a2, b2, c2) {
              return c2 = this.generateList(c2), this.wrap([a2, b2 ? "." + b2 + "(" : "(", c2, ")"]);
            }, quotedString: function quotedString(a2) {
              return '"' + (a2 + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
            }, objectLiteral: function objectLiteral(a2) {
              var b2 = [];
              for (var c2 in a2) {
                if (a2.hasOwnProperty(c2)) {
                  var e2 = d(a2[c2], this);
                  "undefined" !== e2 && b2.push([this.quotedString(c2), ":", e2]);
                }
              }
              var f2 = this.generateList(b2);
              return f2.prepend("{"), f2.add("}"), f2;
            }, generateList: function generateList(a2) {
              for (var b2 = this.empty(), c2 = 0, e2 = a2.length; c2 < e2; c2++) {
                c2 && b2.add(","), b2.add(d(a2[c2], this));
              }
              return b2;
            }, generateArray: function generateArray(a2) {
              var b2 = this.generateList(a2);
              return b2.prepend("["), b2.add("]"), b2;
            }}, b["default"] = e, a.exports = b["default"];
          }]);
        });
      }, {}], 3: [function(require2, module3, exports3) {
        (function(process2, global2) {
          /*!
           * @overview es6-promise - a tiny implementation of Promises/A+.
           * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
           * @license   Licensed under MIT license
           *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
           * @version   4.1.1
           */
          (function(global3, factory) {
            typeof exports3 === "object" && typeof module3 !== "undefined" ? module3.exports = factory() : typeof define2 === "function" && define2.amd ? define2(factory) : global3.ES6Promise = factory();
          })(this, function() {
            "use strict";
            function objectOrFunction(x) {
              var type = typeof x;
              return x !== null && (type === "object" || type === "function");
            }
            function isFunction(x) {
              return typeof x === "function";
            }
            var _isArray = void 0;
            if (Array.isArray) {
              _isArray = Array.isArray;
            } else {
              _isArray = function(x) {
                return Object.prototype.toString.call(x) === "[object Array]";
              };
            }
            var isArray = _isArray;
            var len = 0;
            var vertxNext = void 0;
            var customSchedulerFn = void 0;
            var asap = function asap2(callback, arg) {
              queue[len] = callback;
              queue[len + 1] = arg;
              len += 2;
              if (len === 2) {
                if (customSchedulerFn) {
                  customSchedulerFn(flush);
                } else {
                  scheduleFlush();
                }
              }
            };
            function setScheduler(scheduleFn) {
              customSchedulerFn = scheduleFn;
            }
            function setAsap(asapFn) {
              asap = asapFn;
            }
            var browserWindow = typeof window !== "undefined" ? window : void 0;
            var browserGlobal = browserWindow || {};
            var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
            var isNode = typeof self === "undefined" && typeof process2 !== "undefined" && {}.toString.call(process2) === "[object process]";
            var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
            function useNextTick() {
              return function() {
                return process2.nextTick(flush);
              };
            }
            function useVertxTimer() {
              if (typeof vertxNext !== "undefined") {
                return function() {
                  vertxNext(flush);
                };
              }
              return useSetTimeout();
            }
            function useMutationObserver() {
              var iterations = 0;
              var observer = new BrowserMutationObserver(flush);
              var node = document.createTextNode("");
              observer.observe(node, {characterData: true});
              return function() {
                node.data = iterations = ++iterations % 2;
              };
            }
            function useMessageChannel() {
              var channel = new MessageChannel();
              channel.port1.onmessage = flush;
              return function() {
                return channel.port2.postMessage(0);
              };
            }
            function useSetTimeout() {
              var globalSetTimeout = setTimeout;
              return function() {
                return globalSetTimeout(flush, 1);
              };
            }
            var queue = new Array(1e3);
            function flush() {
              for (var i = 0; i < len; i += 2) {
                var callback = queue[i];
                var arg = queue[i + 1];
                callback(arg);
                queue[i] = void 0;
                queue[i + 1] = void 0;
              }
              len = 0;
            }
            function attemptVertx() {
              try {
                var r = require2;
                var vertx = r("vertx");
                vertxNext = vertx.runOnLoop || vertx.runOnContext;
                return useVertxTimer();
              } catch (e) {
                return useSetTimeout();
              }
            }
            var scheduleFlush = void 0;
            if (isNode) {
              scheduleFlush = useNextTick();
            } else if (BrowserMutationObserver) {
              scheduleFlush = useMutationObserver();
            } else if (isWorker) {
              scheduleFlush = useMessageChannel();
            } else if (browserWindow === void 0 && typeof require2 === "function") {
              scheduleFlush = attemptVertx();
            } else {
              scheduleFlush = useSetTimeout();
            }
            function then(onFulfillment, onRejection) {
              var _arguments = arguments;
              var parent = this;
              var child = new this.constructor(noop);
              if (child[PROMISE_ID] === void 0) {
                makePromise(child);
              }
              var _state = parent._state;
              if (_state) {
                (function() {
                  var callback = _arguments[_state - 1];
                  asap(function() {
                    return invokeCallback(_state, child, callback, parent._result);
                  });
                })();
              } else {
                subscribe(parent, child, onFulfillment, onRejection);
              }
              return child;
            }
            function resolve$1(object) {
              var Constructor = this;
              if (object && typeof object === "object" && object.constructor === Constructor) {
                return object;
              }
              var promise3 = new Constructor(noop);
              resolve(promise3, object);
              return promise3;
            }
            var PROMISE_ID = Math.random().toString(36).substring(16);
            function noop() {
            }
            var PENDING = void 0;
            var FULFILLED = 1;
            var REJECTED = 2;
            var GET_THEN_ERROR = new ErrorObject();
            function selfFulfillment() {
              return new TypeError("You cannot resolve a promise with itself");
            }
            function cannotReturnOwn() {
              return new TypeError("A promises callback cannot return that same promise.");
            }
            function getThen(promise3) {
              try {
                return promise3.then;
              } catch (error) {
                GET_THEN_ERROR.error = error;
                return GET_THEN_ERROR;
              }
            }
            function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
              try {
                then$$1.call(value, fulfillmentHandler, rejectionHandler);
              } catch (e) {
                return e;
              }
            }
            function handleForeignThenable(promise3, thenable, then$$1) {
              asap(function(promise4) {
                var sealed = false;
                var error = tryThen(then$$1, thenable, function(value) {
                  if (sealed) {
                    return;
                  }
                  sealed = true;
                  if (thenable !== value) {
                    resolve(promise4, value);
                  } else {
                    fulfill(promise4, value);
                  }
                }, function(reason) {
                  if (sealed) {
                    return;
                  }
                  sealed = true;
                  reject(promise4, reason);
                }, "Settle: " + (promise4._label || " unknown promise"));
                if (!sealed && error) {
                  sealed = true;
                  reject(promise4, error);
                }
              }, promise3);
            }
            function handleOwnThenable(promise3, thenable) {
              if (thenable._state === FULFILLED) {
                fulfill(promise3, thenable._result);
              } else if (thenable._state === REJECTED) {
                reject(promise3, thenable._result);
              } else {
                subscribe(thenable, void 0, function(value) {
                  return resolve(promise3, value);
                }, function(reason) {
                  return reject(promise3, reason);
                });
              }
            }
            function handleMaybeThenable(promise3, maybeThenable, then$$1) {
              if (maybeThenable.constructor === promise3.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                handleOwnThenable(promise3, maybeThenable);
              } else {
                if (then$$1 === GET_THEN_ERROR) {
                  reject(promise3, GET_THEN_ERROR.error);
                  GET_THEN_ERROR.error = null;
                } else if (then$$1 === void 0) {
                  fulfill(promise3, maybeThenable);
                } else if (isFunction(then$$1)) {
                  handleForeignThenable(promise3, maybeThenable, then$$1);
                } else {
                  fulfill(promise3, maybeThenable);
                }
              }
            }
            function resolve(promise3, value) {
              if (promise3 === value) {
                reject(promise3, selfFulfillment());
              } else if (objectOrFunction(value)) {
                handleMaybeThenable(promise3, value, getThen(value));
              } else {
                fulfill(promise3, value);
              }
            }
            function publishRejection(promise3) {
              if (promise3._onerror) {
                promise3._onerror(promise3._result);
              }
              publish(promise3);
            }
            function fulfill(promise3, value) {
              if (promise3._state !== PENDING) {
                return;
              }
              promise3._result = value;
              promise3._state = FULFILLED;
              if (promise3._subscribers.length !== 0) {
                asap(publish, promise3);
              }
            }
            function reject(promise3, reason) {
              if (promise3._state !== PENDING) {
                return;
              }
              promise3._state = REJECTED;
              promise3._result = reason;
              asap(publishRejection, promise3);
            }
            function subscribe(parent, child, onFulfillment, onRejection) {
              var _subscribers = parent._subscribers;
              var length = _subscribers.length;
              parent._onerror = null;
              _subscribers[length] = child;
              _subscribers[length + FULFILLED] = onFulfillment;
              _subscribers[length + REJECTED] = onRejection;
              if (length === 0 && parent._state) {
                asap(publish, parent);
              }
            }
            function publish(promise3) {
              var subscribers = promise3._subscribers;
              var settled = promise3._state;
              if (subscribers.length === 0) {
                return;
              }
              var child = void 0, callback = void 0, detail = promise3._result;
              for (var i = 0; i < subscribers.length; i += 3) {
                child = subscribers[i];
                callback = subscribers[i + settled];
                if (child) {
                  invokeCallback(settled, child, callback, detail);
                } else {
                  callback(detail);
                }
              }
              promise3._subscribers.length = 0;
            }
            function ErrorObject() {
              this.error = null;
            }
            var TRY_CATCH_ERROR = new ErrorObject();
            function tryCatch(callback, detail) {
              try {
                return callback(detail);
              } catch (e) {
                TRY_CATCH_ERROR.error = e;
                return TRY_CATCH_ERROR;
              }
            }
            function invokeCallback(settled, promise3, callback, detail) {
              var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = void 0, failed = void 0;
              if (hasCallback) {
                value = tryCatch(callback, detail);
                if (value === TRY_CATCH_ERROR) {
                  failed = true;
                  error = value.error;
                  value.error = null;
                } else {
                  succeeded = true;
                }
                if (promise3 === value) {
                  reject(promise3, cannotReturnOwn());
                  return;
                }
              } else {
                value = detail;
                succeeded = true;
              }
              if (promise3._state !== PENDING) {
              } else if (hasCallback && succeeded) {
                resolve(promise3, value);
              } else if (failed) {
                reject(promise3, error);
              } else if (settled === FULFILLED) {
                fulfill(promise3, value);
              } else if (settled === REJECTED) {
                reject(promise3, value);
              }
            }
            function initializePromise(promise3, resolver) {
              try {
                resolver(function resolvePromise(value) {
                  resolve(promise3, value);
                }, function rejectPromise(reason) {
                  reject(promise3, reason);
                });
              } catch (e) {
                reject(promise3, e);
              }
            }
            var id = 0;
            function nextId() {
              return id++;
            }
            function makePromise(promise3) {
              promise3[PROMISE_ID] = id++;
              promise3._state = void 0;
              promise3._result = void 0;
              promise3._subscribers = [];
            }
            function Enumerator$1(Constructor, input) {
              this._instanceConstructor = Constructor;
              this.promise = new Constructor(noop);
              if (!this.promise[PROMISE_ID]) {
                makePromise(this.promise);
              }
              if (isArray(input)) {
                this.length = input.length;
                this._remaining = input.length;
                this._result = new Array(this.length);
                if (this.length === 0) {
                  fulfill(this.promise, this._result);
                } else {
                  this.length = this.length || 0;
                  this._enumerate(input);
                  if (this._remaining === 0) {
                    fulfill(this.promise, this._result);
                  }
                }
              } else {
                reject(this.promise, validationError());
              }
            }
            function validationError() {
              return new Error("Array Methods must be provided an Array");
            }
            Enumerator$1.prototype._enumerate = function(input) {
              for (var i = 0; this._state === PENDING && i < input.length; i++) {
                this._eachEntry(input[i], i);
              }
            };
            Enumerator$1.prototype._eachEntry = function(entry, i) {
              var c = this._instanceConstructor;
              var resolve$$1 = c.resolve;
              if (resolve$$1 === resolve$1) {
                var _then = getThen(entry);
                if (_then === then && entry._state !== PENDING) {
                  this._settledAt(entry._state, i, entry._result);
                } else if (typeof _then !== "function") {
                  this._remaining--;
                  this._result[i] = entry;
                } else if (c === Promise$2) {
                  var promise3 = new c(noop);
                  handleMaybeThenable(promise3, entry, _then);
                  this._willSettleAt(promise3, i);
                } else {
                  this._willSettleAt(new c(function(resolve$$12) {
                    return resolve$$12(entry);
                  }), i);
                }
              } else {
                this._willSettleAt(resolve$$1(entry), i);
              }
            };
            Enumerator$1.prototype._settledAt = function(state, i, value) {
              var promise3 = this.promise;
              if (promise3._state === PENDING) {
                this._remaining--;
                if (state === REJECTED) {
                  reject(promise3, value);
                } else {
                  this._result[i] = value;
                }
              }
              if (this._remaining === 0) {
                fulfill(promise3, this._result);
              }
            };
            Enumerator$1.prototype._willSettleAt = function(promise3, i) {
              var enumerator = this;
              subscribe(promise3, void 0, function(value) {
                return enumerator._settledAt(FULFILLED, i, value);
              }, function(reason) {
                return enumerator._settledAt(REJECTED, i, reason);
              });
            };
            function all$1(entries) {
              return new Enumerator$1(this, entries).promise;
            }
            function race$1(entries) {
              var Constructor = this;
              if (!isArray(entries)) {
                return new Constructor(function(_, reject2) {
                  return reject2(new TypeError("You must pass an array to race."));
                });
              } else {
                return new Constructor(function(resolve2, reject2) {
                  var length = entries.length;
                  for (var i = 0; i < length; i++) {
                    Constructor.resolve(entries[i]).then(resolve2, reject2);
                  }
                });
              }
            }
            function reject$1(reason) {
              var Constructor = this;
              var promise3 = new Constructor(noop);
              reject(promise3, reason);
              return promise3;
            }
            function needsResolver() {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }
            function needsNew() {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }
            function Promise$2(resolver) {
              this[PROMISE_ID] = nextId();
              this._result = this._state = void 0;
              this._subscribers = [];
              if (noop !== resolver) {
                typeof resolver !== "function" && needsResolver();
                this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
              }
            }
            Promise$2.all = all$1;
            Promise$2.race = race$1;
            Promise$2.resolve = resolve$1;
            Promise$2.reject = reject$1;
            Promise$2._setScheduler = setScheduler;
            Promise$2._setAsap = setAsap;
            Promise$2._asap = asap;
            Promise$2.prototype = {
              constructor: Promise$2,
              then,
              catch: function _catch(onRejection) {
                return this.then(null, onRejection);
              }
            };
            function polyfill$1() {
              var local = void 0;
              if (typeof global2 !== "undefined") {
                local = global2;
              } else if (typeof self !== "undefined") {
                local = self;
              } else {
                try {
                  local = Function("return this")();
                } catch (e) {
                  throw new Error("polyfill failed because global object is unavailable in this environment");
                }
              }
              var P = local.Promise;
              if (P) {
                var promiseToString = null;
                try {
                  promiseToString = Object.prototype.toString.call(P.resolve());
                } catch (e) {
                }
                if (promiseToString === "[object Promise]" && !P.cast) {
                  return;
                }
              }
              local.Promise = Promise$2;
            }
            Promise$2.polyfill = polyfill$1;
            Promise$2.Promise = Promise$2;
            return Promise$2;
          });
        }).call(this, require2("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {_process: 1}], 4: [function(require2, module3, exports3) {
        (function(self2) {
          "use strict";
          if (self2.fetch) {
            return;
          }
          var support = {
            searchParams: "URLSearchParams" in self2,
            iterable: "Symbol" in self2 && "iterator" in Symbol,
            blob: "FileReader" in self2 && "Blob" in self2 && function() {
              try {
                new Blob();
                return true;
              } catch (e) {
                return false;
              }
            }(),
            formData: "FormData" in self2,
            arrayBuffer: "ArrayBuffer" in self2
          };
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ];
            var isDataView = function(obj) {
              return obj && DataView.prototype.isPrototypeOf(obj);
            };
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
              return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
          }
          function normalizeName(name) {
            if (typeof name !== "string") {
              name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
              throw new TypeError("Invalid character in header field name");
            }
            return name.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator = {
              next: function() {
                var value = items.shift();
                return {done: value === void 0, value};
              }
            };
            if (support.iterable) {
              iterator[Symbol.iterator] = function() {
                return iterator;
              };
            }
            return iterator;
          }
          function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
              headers.forEach(function(value, name) {
                this.append(name, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
              }, this);
            }
          }
          Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + "," + value : value;
          };
          Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
          };
          Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
          };
          Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
          };
          Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function(callback, thisArg) {
            for (var name in this.map) {
              if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
              }
            }
          };
          Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push(name);
            });
            return iteratorFor(items);
          };
          Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push([name, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
              reader.onload = function() {
                resolve(reader.result);
              };
              reader.onerror = function() {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise3 = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise3;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise3 = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise3;
          }
          function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf) {
            if (buf.slice) {
              return buf.slice(0);
            } else {
              var view = new Uint8Array(buf.byteLength);
              view.set(new Uint8Array(buf));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
              this._bodyInit = body;
              if (!body) {
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                throw new Error("unsupported BodyInit type");
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            };
            if (support.blob) {
              this.blob = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                  return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                } else {
                  return this.blob().then(readBlobAsArrayBuffer);
                }
              };
            }
            this.text = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function() {
                return this.text().then(decode);
              };
            }
            this.json = function() {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "omit";
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
          }
          Request.prototype.clone = function() {
            return new Request(this, {body: this._bodyInit});
          };
          function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
              if (bytes) {
                var split = bytes.split("=");
                var name = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name), decodeURIComponent(value));
              }
            });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers();
            rawHeaders.split(/\r?\n/).forEach(function(line) {
              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response(bodyInit, options) {
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = "status" in options ? options.status : 200;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response.prototype);
          Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url
            });
          };
          Response.error = function() {
            var response = new Response(null, {status: 0, statusText: ""});
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response(null, {status, headers: {location: url}});
          };
          self2.Headers = Headers;
          self2.Request = Request;
          self2.Response = Response;
          self2.fetch = function(input, init) {
            return new Promise(function(resolve, reject) {
              var request = new Request(input, init);
              var xhr = new XMLHttpRequest();
              xhr.onload = function() {
                var options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
              };
              xhr.onerror = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.ontimeout = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.open(request.method, request.url, true);
              if (request.credentials === "include") {
                xhr.withCredentials = true;
              }
              if ("responseType" in xhr && support.blob) {
                xhr.responseType = "blob";
              }
              request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
              });
              xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
          };
          self2.fetch.polyfill = true;
        })(typeof self !== "undefined" ? self : this);
      }, {}], 5: [function(require2, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        require2("whatwg-fetch");
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        require2("es6-promise").polyfill();
        var handlebars = require2("../lib/handlebars.min");
        var ensurePathArray = function ensurePathArray2(paths) {
          if (!paths) {
            paths = [];
          } else if (typeof paths === "string") {
            paths = [paths];
          }
          return paths;
        };
        var ResourceManager2 = function() {
          function ResourceManager3() {
            _classCallCheck(this, ResourceManager3);
            this._head = document.getElementsByTagName("head")[0];
            this._cssPaths = {};
            this._scriptMaps = {};
            this._dataPromises = {};
          }
          _createClass(ResourceManager3, [{
            key: "loadScript",
            value: function loadScript(paths) {
              var script = void 0, map = void 0, loadPromises = [];
              paths = ensurePathArray(paths);
              paths.forEach(function(path) {
                map = this._scriptMaps[path] = this._scriptMaps[path] || {};
                if (!map.promise) {
                  map.path = path;
                  map.promise = new Promise(function(resolve) {
                    script = this.createScriptElement();
                    script.setAttribute("type", "text/javascript");
                    script.src = path;
                    script.addEventListener("load", resolve);
                    this._head.appendChild(script);
                  }.bind(this));
                }
                loadPromises.push(map.promise);
              }.bind(this));
              return Promise.all(loadPromises);
            }
          }, {
            key: "unloadScript",
            value: function unloadScript(paths) {
              var file = void 0;
              return new Promise(function(resolve) {
                paths = ensurePathArray(paths);
                paths.forEach(function(path) {
                  file = this._head.querySelectorAll('script[src="' + path + '"]')[0];
                  if (file) {
                    this._head.removeChild(file);
                    delete this._scriptMaps[path];
                  }
                }.bind(this));
                resolve();
              }.bind(this));
            }
          }, {
            key: "createScriptElement",
            value: function createScriptElement() {
              return document.createElement("script");
            }
          }, {
            key: "fetchData",
            value: function fetchData(url) {
              var _this = this;
              var reqOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              var cacheId = url + JSON.stringify(reqOptions);
              reqOptions.cache = reqOptions.cache === void 0 ? true : reqOptions.cache;
              if (!url) {
                return Promise.resolve();
              }
              if (!this._dataPromises[cacheId] || !reqOptions.cache) {
                this._dataPromises[cacheId] = fetch(url, reqOptions).catch(function(e) {
                  _this._dataPromises[cacheId] = null;
                  throw e;
                });
              }
              return this._dataPromises[cacheId];
            }
          }, {
            key: "loadCss",
            value: function loadCss(paths) {
              return new Promise(function(resolve) {
                paths = ensurePathArray(paths);
                paths.forEach(function(path) {
                  if (!this._cssPaths[path]) {
                    var el = document.createElement("link");
                    el.setAttribute("rel", "stylesheet");
                    el.setAttribute("href", path);
                    this._head.appendChild(el);
                    this._cssPaths[path] = el;
                  }
                }.bind(this));
                resolve();
              }.bind(this));
            }
          }, {
            key: "unloadCss",
            value: function unloadCss(paths) {
              var el = void 0;
              return new Promise(function(resolve) {
                paths = ensurePathArray(paths);
                paths.forEach(function(path) {
                  el = this._cssPaths[path];
                  if (el) {
                    this._head.removeChild(el);
                    this._cssPaths[path] = null;
                  }
                }.bind(this));
                resolve();
              }.bind(this));
            }
          }, {
            key: "loadTemplate",
            value: function loadTemplate(path, el, hbsData) {
              var isHandlebarFile = function isHandlebarFile2(filePath) {
                if (filePath) {
                  var frags = filePath.split(".");
                  var ext = frags[frags.length - 1];
                  return ext === "hbs";
                }
              };
              if (!path) {
                return Promise.resolve();
              }
              return this.fetchTemplate(path).then(function(contents) {
                if (isHandlebarFile(path)) {
                  var template = handlebars.compile(contents);
                  contents = template(hbsData || {});
                }
                if (el) {
                  el.innerHTML = contents;
                  contents = el;
                }
                return contents;
              });
            }
          }, {
            key: "fetchTemplate",
            value: function fetchTemplate(templatePath) {
              return fetch(templatePath).then(function(resp) {
                return resp.text().then(function(contents) {
                  return contents;
                });
              });
            }
          }, {
            key: "flush",
            value: function flush() {
              this.unloadCss(Object.getOwnPropertyNames(this._cssPaths));
              this._cssPaths = {};
              for (var s in this._scriptMaps) {
                if (this._scriptMaps.hasOwnProperty(s)) {
                  var map = this._scriptMaps[s];
                  this.unloadScript(map.path);
                }
              }
              this._scriptMaps = {};
              this._dataPromises = {};
            }
          }]);
          return ResourceManager3;
        }();
        exports3.default = new ResourceManager2();
        module3.exports = exports3["default"];
      }, {"../lib/handlebars.min": 2, "es6-promise": 3, "whatwg-fetch": 4}]}, {}, [5])(5);
    });
  });

  // node_modules/es6-promise/dist/es6-promise.js
  var require_es6_promise = __commonJS((exports, module) => {
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.8+1e68dce6
     */
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.ES6Promise = factory();
    })(exports, function() {
      "use strict";
      function objectOrFunction(x) {
        var type = typeof x;
        return x !== null && (type === "object" || type === "function");
      }
      function isFunction(x) {
        return typeof x === "function";
      }
      var _isArray = void 0;
      if (Array.isArray) {
        _isArray = Array.isArray;
      } else {
        _isArray = function(x) {
          return Object.prototype.toString.call(x) === "[object Array]";
        };
      }
      var isArray = _isArray;
      var len = 0;
      var vertxNext = void 0;
      var customSchedulerFn = void 0;
      var asap = function asap2(callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
          if (customSchedulerFn) {
            customSchedulerFn(flush);
          } else {
            scheduleFlush();
          }
        }
      };
      function setScheduler(scheduleFn) {
        customSchedulerFn = scheduleFn;
      }
      function setAsap(asapFn) {
        asap = asapFn;
      }
      var browserWindow = typeof window !== "undefined" ? window : void 0;
      var browserGlobal = browserWindow || {};
      var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
      var isNode = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
      var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
      function useNextTick() {
        return function() {
          return process.nextTick(flush);
        };
      }
      function useVertxTimer() {
        if (typeof vertxNext !== "undefined") {
          return function() {
            vertxNext(flush);
          };
        }
        return useSetTimeout();
      }
      function useMutationObserver() {
        var iterations = 0;
        var observer = new BrowserMutationObserver(flush);
        var node = document.createTextNode("");
        observer.observe(node, {characterData: true});
        return function() {
          node.data = iterations = ++iterations % 2;
        };
      }
      function useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function() {
          return channel.port2.postMessage(0);
        };
      }
      function useSetTimeout() {
        var globalSetTimeout = setTimeout;
        return function() {
          return globalSetTimeout(flush, 1);
        };
      }
      var queue = new Array(1e3);
      function flush() {
        for (var i = 0; i < len; i += 2) {
          var callback = queue[i];
          var arg = queue[i + 1];
          callback(arg);
          queue[i] = void 0;
          queue[i + 1] = void 0;
        }
        len = 0;
      }
      function attemptVertx() {
        try {
          var vertx = Function("return this")().require("vertx");
          vertxNext = vertx.runOnLoop || vertx.runOnContext;
          return useVertxTimer();
        } catch (e) {
          return useSetTimeout();
        }
      }
      var scheduleFlush = void 0;
      if (isNode) {
        scheduleFlush = useNextTick();
      } else if (BrowserMutationObserver) {
        scheduleFlush = useMutationObserver();
      } else if (isWorker) {
        scheduleFlush = useMessageChannel();
      } else if (browserWindow === void 0 && true) {
        scheduleFlush = attemptVertx();
      } else {
        scheduleFlush = useSetTimeout();
      }
      function then(onFulfillment, onRejection) {
        var parent = this;
        var child = new this.constructor(noop);
        if (child[PROMISE_ID] === void 0) {
          makePromise(child);
        }
        var _state = parent._state;
        if (_state) {
          var callback = arguments[_state - 1];
          asap(function() {
            return invokeCallback(_state, child, callback, parent._result);
          });
        } else {
          subscribe(parent, child, onFulfillment, onRejection);
        }
        return child;
      }
      function resolve$1(object) {
        var Constructor = this;
        if (object && typeof object === "object" && object.constructor === Constructor) {
          return object;
        }
        var promise3 = new Constructor(noop);
        resolve(promise3, object);
        return promise3;
      }
      var PROMISE_ID = Math.random().toString(36).substring(2);
      function noop() {
      }
      var PENDING = void 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      function selfFulfillment() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function cannotReturnOwn() {
        return new TypeError("A promises callback cannot return that same promise.");
      }
      function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
        try {
          then$$1.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
          return e;
        }
      }
      function handleForeignThenable(promise3, thenable, then$$1) {
        asap(function(promise4) {
          var sealed = false;
          var error = tryThen(then$$1, thenable, function(value) {
            if (sealed) {
              return;
            }
            sealed = true;
            if (thenable !== value) {
              resolve(promise4, value);
            } else {
              fulfill(promise4, value);
            }
          }, function(reason) {
            if (sealed) {
              return;
            }
            sealed = true;
            reject(promise4, reason);
          }, "Settle: " + (promise4._label || " unknown promise"));
          if (!sealed && error) {
            sealed = true;
            reject(promise4, error);
          }
        }, promise3);
      }
      function handleOwnThenable(promise3, thenable) {
        if (thenable._state === FULFILLED) {
          fulfill(promise3, thenable._result);
        } else if (thenable._state === REJECTED) {
          reject(promise3, thenable._result);
        } else {
          subscribe(thenable, void 0, function(value) {
            return resolve(promise3, value);
          }, function(reason) {
            return reject(promise3, reason);
          });
        }
      }
      function handleMaybeThenable(promise3, maybeThenable, then$$1) {
        if (maybeThenable.constructor === promise3.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
          handleOwnThenable(promise3, maybeThenable);
        } else {
          if (then$$1 === void 0) {
            fulfill(promise3, maybeThenable);
          } else if (isFunction(then$$1)) {
            handleForeignThenable(promise3, maybeThenable, then$$1);
          } else {
            fulfill(promise3, maybeThenable);
          }
        }
      }
      function resolve(promise3, value) {
        if (promise3 === value) {
          reject(promise3, selfFulfillment());
        } else if (objectOrFunction(value)) {
          var then$$1 = void 0;
          try {
            then$$1 = value.then;
          } catch (error) {
            reject(promise3, error);
            return;
          }
          handleMaybeThenable(promise3, value, then$$1);
        } else {
          fulfill(promise3, value);
        }
      }
      function publishRejection(promise3) {
        if (promise3._onerror) {
          promise3._onerror(promise3._result);
        }
        publish(promise3);
      }
      function fulfill(promise3, value) {
        if (promise3._state !== PENDING) {
          return;
        }
        promise3._result = value;
        promise3._state = FULFILLED;
        if (promise3._subscribers.length !== 0) {
          asap(publish, promise3);
        }
      }
      function reject(promise3, reason) {
        if (promise3._state !== PENDING) {
          return;
        }
        promise3._state = REJECTED;
        promise3._result = reason;
        asap(publishRejection, promise3);
      }
      function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers;
        var length = _subscribers.length;
        parent._onerror = null;
        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;
        if (length === 0 && parent._state) {
          asap(publish, parent);
        }
      }
      function publish(promise3) {
        var subscribers = promise3._subscribers;
        var settled = promise3._state;
        if (subscribers.length === 0) {
          return;
        }
        var child = void 0, callback = void 0, detail = promise3._result;
        for (var i = 0; i < subscribers.length; i += 3) {
          child = subscribers[i];
          callback = subscribers[i + settled];
          if (child) {
            invokeCallback(settled, child, callback, detail);
          } else {
            callback(detail);
          }
        }
        promise3._subscribers.length = 0;
      }
      function invokeCallback(settled, promise3, callback, detail) {
        var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
        if (hasCallback) {
          try {
            value = callback(detail);
          } catch (e) {
            succeeded = false;
            error = e;
          }
          if (promise3 === value) {
            reject(promise3, cannotReturnOwn());
            return;
          }
        } else {
          value = detail;
        }
        if (promise3._state !== PENDING) {
        } else if (hasCallback && succeeded) {
          resolve(promise3, value);
        } else if (succeeded === false) {
          reject(promise3, error);
        } else if (settled === FULFILLED) {
          fulfill(promise3, value);
        } else if (settled === REJECTED) {
          reject(promise3, value);
        }
      }
      function initializePromise(promise3, resolver) {
        try {
          resolver(function resolvePromise(value) {
            resolve(promise3, value);
          }, function rejectPromise(reason) {
            reject(promise3, reason);
          });
        } catch (e) {
          reject(promise3, e);
        }
      }
      var id = 0;
      function nextId() {
        return id++;
      }
      function makePromise(promise3) {
        promise3[PROMISE_ID] = id++;
        promise3._state = void 0;
        promise3._result = void 0;
        promise3._subscribers = [];
      }
      function validationError() {
        return new Error("Array Methods must be provided an Array");
      }
      var Enumerator = function() {
        function Enumerator2(Constructor, input) {
          this._instanceConstructor = Constructor;
          this.promise = new Constructor(noop);
          if (!this.promise[PROMISE_ID]) {
            makePromise(this.promise);
          }
          if (isArray(input)) {
            this.length = input.length;
            this._remaining = input.length;
            this._result = new Array(this.length);
            if (this.length === 0) {
              fulfill(this.promise, this._result);
            } else {
              this.length = this.length || 0;
              this._enumerate(input);
              if (this._remaining === 0) {
                fulfill(this.promise, this._result);
              }
            }
          } else {
            reject(this.promise, validationError());
          }
        }
        Enumerator2.prototype._enumerate = function _enumerate(input) {
          for (var i = 0; this._state === PENDING && i < input.length; i++) {
            this._eachEntry(input[i], i);
          }
        };
        Enumerator2.prototype._eachEntry = function _eachEntry(entry, i) {
          var c = this._instanceConstructor;
          var resolve$$1 = c.resolve;
          if (resolve$$1 === resolve$1) {
            var _then = void 0;
            var error = void 0;
            var didError = false;
            try {
              _then = entry.then;
            } catch (e) {
              didError = true;
              error = e;
            }
            if (_then === then && entry._state !== PENDING) {
              this._settledAt(entry._state, i, entry._result);
            } else if (typeof _then !== "function") {
              this._remaining--;
              this._result[i] = entry;
            } else if (c === Promise$1) {
              var promise3 = new c(noop);
              if (didError) {
                reject(promise3, error);
              } else {
                handleMaybeThenable(promise3, entry, _then);
              }
              this._willSettleAt(promise3, i);
            } else {
              this._willSettleAt(new c(function(resolve$$12) {
                return resolve$$12(entry);
              }), i);
            }
          } else {
            this._willSettleAt(resolve$$1(entry), i);
          }
        };
        Enumerator2.prototype._settledAt = function _settledAt(state, i, value) {
          var promise3 = this.promise;
          if (promise3._state === PENDING) {
            this._remaining--;
            if (state === REJECTED) {
              reject(promise3, value);
            } else {
              this._result[i] = value;
            }
          }
          if (this._remaining === 0) {
            fulfill(promise3, this._result);
          }
        };
        Enumerator2.prototype._willSettleAt = function _willSettleAt(promise3, i) {
          var enumerator = this;
          subscribe(promise3, void 0, function(value) {
            return enumerator._settledAt(FULFILLED, i, value);
          }, function(reason) {
            return enumerator._settledAt(REJECTED, i, reason);
          });
        };
        return Enumerator2;
      }();
      function all(entries) {
        return new Enumerator(this, entries).promise;
      }
      function race(entries) {
        var Constructor = this;
        if (!isArray(entries)) {
          return new Constructor(function(_, reject2) {
            return reject2(new TypeError("You must pass an array to race."));
          });
        } else {
          return new Constructor(function(resolve2, reject2) {
            var length = entries.length;
            for (var i = 0; i < length; i++) {
              Constructor.resolve(entries[i]).then(resolve2, reject2);
            }
          });
        }
      }
      function reject$1(reason) {
        var Constructor = this;
        var promise3 = new Constructor(noop);
        reject(promise3, reason);
        return promise3;
      }
      function needsResolver() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
      }
      function needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      var Promise$1 = function() {
        function Promise5(resolver) {
          this[PROMISE_ID] = nextId();
          this._result = this._state = void 0;
          this._subscribers = [];
          if (noop !== resolver) {
            typeof resolver !== "function" && needsResolver();
            this instanceof Promise5 ? initializePromise(this, resolver) : needsNew();
          }
        }
        Promise5.prototype.catch = function _catch(onRejection) {
          return this.then(null, onRejection);
        };
        Promise5.prototype.finally = function _finally(callback) {
          var promise3 = this;
          var constructor = promise3.constructor;
          if (isFunction(callback)) {
            return promise3.then(function(value) {
              return constructor.resolve(callback()).then(function() {
                return value;
              });
            }, function(reason) {
              return constructor.resolve(callback()).then(function() {
                throw reason;
              });
            });
          }
          return promise3.then(callback, callback);
        };
        return Promise5;
      }();
      Promise$1.prototype.then = then;
      Promise$1.all = all;
      Promise$1.race = race;
      Promise$1.resolve = resolve$1;
      Promise$1.reject = reject$1;
      Promise$1._setScheduler = setScheduler;
      Promise$1._setAsap = setAsap;
      Promise$1._asap = asap;
      function polyfill() {
        var local = void 0;
        if (typeof global !== "undefined") {
          local = global;
        } else if (typeof self !== "undefined") {
          local = self;
        } else {
          try {
            local = Function("return this")();
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }
        }
        var P = local.Promise;
        if (P) {
          var promiseToString = null;
          try {
            promiseToString = Object.prototype.toString.call(P.resolve());
          } catch (e) {
          }
          if (promiseToString === "[object Promise]" && !P.cast) {
            return;
          }
        }
        local.Promise = Promise$1;
      }
      Promise$1.polyfill = polyfill;
      Promise$1.Promise = Promise$1;
      return Promise$1;
    });
  });

  // node_modules/handlebars/dist/cjs/handlebars/utils.js
  var require_utils2 = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.extend = extend;
    exports.indexOf = indexOf;
    exports.escapeExpression = escapeExpression;
    exports.isEmpty = isEmpty;
    exports.createFrame = createFrame;
    exports.blockParams = blockParams;
    exports.appendContextPath = appendContextPath;
    var escape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    var badChars = /[&<>"'`=]/g;
    var possible = /[&<>"'`=]/;
    function escapeChar(chr) {
      return escape[chr];
    }
    function extend(obj) {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
            obj[key] = arguments[i][key];
          }
        }
      }
      return obj;
    }
    var toString = Object.prototype.toString;
    exports.toString = toString;
    var isFunction = function isFunction2(value) {
      return typeof value === "function";
    };
    if (isFunction(/x/)) {
      exports.isFunction = isFunction = function(value) {
        return typeof value === "function" && toString.call(value) === "[object Function]";
      };
    }
    exports.isFunction = isFunction;
    var isArray = Array.isArray || function(value) {
      return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
    };
    exports.isArray = isArray;
    function indexOf(array, value) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    }
    function escapeExpression(string) {
      if (typeof string !== "string") {
        if (string && string.toHTML) {
          return string.toHTML();
        } else if (string == null) {
          return "";
        } else if (!string) {
          return string + "";
        }
        string = "" + string;
      }
      if (!possible.test(string)) {
        return string;
      }
      return string.replace(badChars, escapeChar);
    }
    function isEmpty(value) {
      if (!value && value !== 0) {
        return true;
      } else if (isArray(value) && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    function createFrame(object) {
      var frame = extend({}, object);
      frame._parent = object;
      return frame;
    }
    function blockParams(params, ids) {
      params.path = ids;
      return params;
    }
    function appendContextPath(contextPath, id) {
      return (contextPath ? contextPath + "." : "") + id;
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/exception.js
  var require_exception = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    var errorProps = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function Exception(message, node) {
      var loc = node && node.loc, line = void 0, endLineNumber = void 0, column = void 0, endColumn = void 0;
      if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += " - " + line + ":" + column;
      }
      var tmp = Error.prototype.constructor.call(this, message);
      for (var idx = 0; idx < errorProps.length; idx++) {
        this[errorProps[idx]] = tmp[errorProps[idx]];
      }
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Exception);
      }
      try {
        if (loc) {
          this.lineNumber = line;
          this.endLineNumber = endLineNumber;
          if (Object.defineProperty) {
            Object.defineProperty(this, "column", {
              value: column,
              enumerable: true
            });
            Object.defineProperty(this, "endColumn", {
              value: endColumn,
              enumerable: true
            });
          } else {
            this.column = column;
            this.endColumn = endColumn;
          }
        }
      } catch (nop) {
      }
    }
    Exception.prototype = new Error();
    exports["default"] = Exception;
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js
  var require_block_helper_missing = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils2();
    exports["default"] = function(instance) {
      instance.registerHelper("blockHelperMissing", function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) {
          return fn(this);
        } else if (context === false || context == null) {
          return inverse(this);
        } else if (_utils.isArray(context)) {
          if (context.length > 0) {
            if (options.ids) {
              options.ids = [options.name];
            }
            return instance.helpers.each(context, options);
          } else {
            return inverse(this);
          }
        } else {
          if (options.data && options.ids) {
            var data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
            options = {data};
          }
          return fn(context, options);
        }
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/each.js
  var require_each = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _utils = require_utils2();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("each", function(context, options) {
        if (!options) {
          throw new _exception2["default"]("Must pass iterator to #each");
        }
        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = void 0, contextPath = void 0;
        if (options.data && options.ids) {
          contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
        }
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        if (options.data) {
          data = _utils.createFrame(options.data);
        }
        function execIteration(field, index, last) {
          if (data) {
            data.key = field;
            data.index = index;
            data.first = index === 0;
            data.last = !!last;
            if (contextPath) {
              data.contextPath = contextPath + field;
            }
          }
          ret = ret + fn(context[field], {
            data,
            blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
          });
        }
        if (context && typeof context === "object") {
          if (_utils.isArray(context)) {
            for (var j = context.length; i < j; i++) {
              if (i in context) {
                execIteration(i, i, i === context.length - 1);
              }
            }
          } else if (global.Symbol && context[global.Symbol.iterator]) {
            var newContext = [];
            var iterator = context[global.Symbol.iterator]();
            for (var it = iterator.next(); !it.done; it = iterator.next()) {
              newContext.push(it.value);
            }
            context = newContext;
            for (var j = context.length; i < j; i++) {
              execIteration(i, i, i === context.length - 1);
            }
          } else {
            (function() {
              var priorKey = void 0;
              Object.keys(context).forEach(function(key) {
                if (priorKey !== void 0) {
                  execIteration(priorKey, i - 1);
                }
                priorKey = key;
                i++;
              });
              if (priorKey !== void 0) {
                execIteration(priorKey, i - 1, true);
              }
            })();
          }
        }
        if (i === 0) {
          ret = inverse(this);
        }
        return ret;
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js
  var require_helper_missing = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("helperMissing", function() {
        if (arguments.length === 1) {
          return void 0;
        } else {
          throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
        }
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/if.js
  var require_if = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _utils = require_utils2();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("if", function(conditional, options) {
        if (arguments.length != 2) {
          throw new _exception2["default"]("#if requires exactly one argument");
        }
        if (_utils.isFunction(conditional)) {
          conditional = conditional.call(this);
        }
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      });
      instance.registerHelper("unless", function(conditional, options) {
        if (arguments.length != 2) {
          throw new _exception2["default"]("#unless requires exactly one argument");
        }
        return instance.helpers["if"].call(this, conditional, {
          fn: options.inverse,
          inverse: options.fn,
          hash: options.hash
        });
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/log.js
  var require_log = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    exports["default"] = function(instance) {
      instance.registerHelper("log", function() {
        var args = [void 0], options = arguments[arguments.length - 1];
        for (var i = 0; i < arguments.length - 1; i++) {
          args.push(arguments[i]);
        }
        var level = 1;
        if (options.hash.level != null) {
          level = options.hash.level;
        } else if (options.data && options.data.level != null) {
          level = options.data.level;
        }
        args[0] = level;
        instance.log.apply(instance, args);
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js
  var require_lookup = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    exports["default"] = function(instance) {
      instance.registerHelper("lookup", function(obj, field, options) {
        if (!obj) {
          return obj;
        }
        return options.lookupProperty(obj, field);
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/with.js
  var require_with = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _utils = require_utils2();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("with", function(context, options) {
        if (arguments.length != 2) {
          throw new _exception2["default"]("#with requires exactly one argument");
        }
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
          var data = options.data;
          if (options.data && options.ids) {
            data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
          }
          return fn(context, {
            data,
            blockParams: _utils.blockParams([context], [data && data.contextPath])
          });
        } else {
          return options.inverse(this);
        }
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers.js
  var require_helpers = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.registerDefaultHelpers = registerDefaultHelpers;
    exports.moveHelperToHooks = moveHelperToHooks;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _helpersBlockHelperMissing = require_block_helper_missing();
    var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
    var _helpersEach = require_each();
    var _helpersEach2 = _interopRequireDefault(_helpersEach);
    var _helpersHelperMissing = require_helper_missing();
    var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
    var _helpersIf = require_if();
    var _helpersIf2 = _interopRequireDefault(_helpersIf);
    var _helpersLog = require_log();
    var _helpersLog2 = _interopRequireDefault(_helpersLog);
    var _helpersLookup = require_lookup();
    var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
    var _helpersWith = require_with();
    var _helpersWith2 = _interopRequireDefault(_helpersWith);
    function registerDefaultHelpers(instance) {
      _helpersBlockHelperMissing2["default"](instance);
      _helpersEach2["default"](instance);
      _helpersHelperMissing2["default"](instance);
      _helpersIf2["default"](instance);
      _helpersLog2["default"](instance);
      _helpersLookup2["default"](instance);
      _helpersWith2["default"](instance);
    }
    function moveHelperToHooks(instance, helperName, keepHelper) {
      if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) {
          delete instance.helpers[helperName];
        }
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js
  var require_inline = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils2();
    exports["default"] = function(instance) {
      instance.registerDecorator("inline", function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
          props.partials = {};
          ret = function(context, options2) {
            var original = container.partials;
            container.partials = _utils.extend({}, original, props.partials);
            var ret2 = fn(context, options2);
            container.partials = original;
            return ret2;
          };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
      });
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/decorators.js
  var require_decorators = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.registerDefaultDecorators = registerDefaultDecorators;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _decoratorsInline = require_inline();
    var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
    function registerDefaultDecorators(instance) {
      _decoratorsInline2["default"](instance);
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/logger.js
  var require_logger = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils2();
    var logger = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      lookupLevel: function lookupLevel(level) {
        if (typeof level === "string") {
          var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
          if (levelMap >= 0) {
            level = levelMap;
          } else {
            level = parseInt(level, 10);
          }
        }
        return level;
      },
      log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
          var method = logger.methodMap[level];
          if (!console[method]) {
            method = "log";
          }
          for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            message[_key - 1] = arguments[_key];
          }
          console[method].apply(console, message);
        }
      }
    };
    exports["default"] = logger;
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js
  var require_create_new_lookup_object = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.createNewLookupObject = createNewLookupObject;
    var _utils = require_utils2();
    function createNewLookupObject() {
      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }
      return _utils.extend.apply(void 0, [Object.create(null)].concat(sources));
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js
  var require_proto_access = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.createProtoAccessControl = createProtoAccessControl;
    exports.resultIsAllowed = resultIsAllowed;
    exports.resetLoggedProperties = resetLoggedProperties;
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    var _createNewLookupObject = require_create_new_lookup_object();
    var _logger = require_logger();
    var logger = _interopRequireWildcard(_logger);
    var loggedProperties = Object.create(null);
    function createProtoAccessControl(runtimeOptions) {
      var defaultMethodWhiteList = Object.create(null);
      defaultMethodWhiteList["constructor"] = false;
      defaultMethodWhiteList["__defineGetter__"] = false;
      defaultMethodWhiteList["__defineSetter__"] = false;
      defaultMethodWhiteList["__lookupGetter__"] = false;
      var defaultPropertyWhiteList = Object.create(null);
      defaultPropertyWhiteList["__proto__"] = false;
      return {
        properties: {
          whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
          defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
          whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
          defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
      };
    }
    function resultIsAllowed(result, protoAccessControl, propertyName) {
      if (typeof result === "function") {
        return checkWhiteList(protoAccessControl.methods, propertyName);
      } else {
        return checkWhiteList(protoAccessControl.properties, propertyName);
      }
    }
    function checkWhiteList(protoAccessControlForType, propertyName) {
      if (protoAccessControlForType.whitelist[propertyName] !== void 0) {
        return protoAccessControlForType.whitelist[propertyName] === true;
      }
      if (protoAccessControlForType.defaultValue !== void 0) {
        return protoAccessControlForType.defaultValue;
      }
      logUnexpecedPropertyAccessOnce(propertyName);
      return false;
    }
    function logUnexpecedPropertyAccessOnce(propertyName) {
      if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
      }
    }
    function resetLoggedProperties() {
      Object.keys(loggedProperties).forEach(function(propertyName) {
        delete loggedProperties[propertyName];
      });
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/base.js
  var require_base = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.HandlebarsEnvironment = HandlebarsEnvironment;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _utils = require_utils2();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    var _helpers = require_helpers();
    var _decorators = require_decorators();
    var _logger = require_logger();
    var _logger2 = _interopRequireDefault(_logger);
    var _internalProtoAccess = require_proto_access();
    var VERSION = "4.7.6";
    exports.VERSION = VERSION;
    var COMPILER_REVISION = 8;
    exports.COMPILER_REVISION = COMPILER_REVISION;
    var LAST_COMPATIBLE_COMPILER_REVISION = 7;
    exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
    var REVISION_CHANGES = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: "== 1.x.x",
      5: "== 2.0.0-alpha.x",
      6: ">= 2.0.0-beta.1",
      7: ">= 4.0.0 <4.3.0",
      8: ">= 4.3.0"
    };
    exports.REVISION_CHANGES = REVISION_CHANGES;
    var objectType = "[object Object]";
    function HandlebarsEnvironment(helpers, partials, decorators) {
      this.helpers = helpers || {};
      this.partials = partials || {};
      this.decorators = decorators || {};
      _helpers.registerDefaultHelpers(this);
      _decorators.registerDefaultDecorators(this);
    }
    HandlebarsEnvironment.prototype = {
      constructor: HandlebarsEnvironment,
      logger: _logger2["default"],
      log: _logger2["default"].log,
      registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2["default"]("Arg not supported with multiple helpers");
          }
          _utils.extend(this.helpers, name);
        } else {
          this.helpers[name] = fn;
        }
      },
      unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
      },
      registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) {
          _utils.extend(this.partials, name);
        } else {
          if (typeof partial === "undefined") {
            throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
          }
          this.partials[name] = partial;
        }
      },
      unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
      },
      registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2["default"]("Arg not supported with multiple decorators");
          }
          _utils.extend(this.decorators, name);
        } else {
          this.decorators[name] = fn;
        }
      },
      unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
      },
      resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
      }
    };
    var log = _logger2["default"].log;
    exports.log = log;
    exports.createFrame = _utils.createFrame;
    exports.logger = _logger2["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/safe-string.js
  var require_safe_string = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    function SafeString(string) {
      this.string = string;
    }
    SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
      return "" + this.string;
    };
    exports["default"] = SafeString;
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js
  var require_wrapHelper = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.wrapHelper = wrapHelper;
    function wrapHelper(helper, transformOptionsFn) {
      if (typeof helper !== "function") {
        return helper;
      }
      var wrapper = function wrapper2() {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
      };
      return wrapper;
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/runtime.js
  var require_runtime = __commonJS((exports) => {
    "use strict";
    exports.__esModule = true;
    exports.checkRevision = checkRevision;
    exports.template = template;
    exports.wrapProgram = wrapProgram;
    exports.resolvePartial = resolvePartial;
    exports.invokePartial = invokePartial;
    exports.noop = noop;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    var _utils = require_utils2();
    var Utils = _interopRequireWildcard(_utils);
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    var _base = require_base();
    var _helpers = require_helpers();
    var _internalWrapHelper = require_wrapHelper();
    var _internalProtoAccess = require_proto_access();
    function checkRevision(compilerInfo) {
      var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
      if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
        return;
      }
      if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
      } else {
        throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
      }
    }
    function template(templateSpec, env) {
      if (!env) {
        throw new _exception2["default"]("No environment passed to template");
      }
      if (!templateSpec || !templateSpec.main) {
        throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
      }
      templateSpec.main.decorator = templateSpec.main_d;
      env.VM.checkRevision(templateSpec.compiler);
      var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
      function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
          context = Utils.extend({}, context, options.hash);
          if (options.ids) {
            options.ids[0] = true;
          }
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = Utils.extend({}, options, {
          hooks: this.hooks,
          protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
          options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
          result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
          if (options.indent) {
            var lines = result.split("\n");
            for (var i = 0, l = lines.length; i < l; i++) {
              if (!lines[i] && i + 1 === l) {
                break;
              }
              lines[i] = options.indent + lines[i];
            }
            result = lines.join("\n");
          }
          return result;
        } else {
          throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
        }
      }
      var container = {
        strict: function strict(obj, name, loc) {
          if (!obj || !(name in obj)) {
            throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
              loc
            });
          }
          return obj[name];
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
          var result = parent[propertyName];
          if (result == null) {
            return result;
          }
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return result;
          }
          if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
            return result;
          }
          return void 0;
        },
        lookup: function lookup(depths, name) {
          var len = depths.length;
          for (var i = 0; i < len; i++) {
            var result = depths[i] && container.lookupProperty(depths[i], name);
            if (result != null) {
              return depths[i][name];
            }
          }
        },
        lambda: function lambda(current, context) {
          return typeof current === "function" ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
          var ret2 = templateSpec[i];
          ret2.decorator = templateSpec[i + "_d"];
          return ret2;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
          var programWrapper = this.programs[i], fn = this.fn(i);
          if (data || depths || blockParams || declaredBlockParams) {
            programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
          } else if (!programWrapper) {
            programWrapper = this.programs[i] = wrapProgram(this, i, fn);
          }
          return programWrapper;
        },
        data: function data(value, depth) {
          while (value && depth--) {
            value = value._parent;
          }
          return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
          var obj = param || common;
          if (param && common && param !== common) {
            obj = Utils.extend({}, common, param);
          }
          return obj;
        },
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
      };
      function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) {
          data = initData(context, data);
        }
        var depths = void 0, blockParams = templateSpec.useBlockParams ? [] : void 0;
        if (templateSpec.useDepths) {
          if (options.depths) {
            depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
          } else {
            depths = [context];
          }
        }
        function main(context2) {
          return "" + templateSpec.main(container, context2, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
      }
      ret.isTop = true;
      ret._setup = function(options) {
        if (!options.partial) {
          var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
          wrapHelpersToPassLookupProperty(mergedHelpers, container);
          container.helpers = mergedHelpers;
          if (templateSpec.usePartial) {
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
          }
          if (templateSpec.usePartial || templateSpec.useDecorators) {
            container.decorators = Utils.extend({}, env.decorators, options.decorators);
          }
          container.hooks = {};
          container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
          var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
          _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
          _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
        } else {
          container.protoAccessControl = options.protoAccessControl;
          container.helpers = options.helpers;
          container.partials = options.partials;
          container.decorators = options.decorators;
          container.hooks = options.hooks;
        }
      };
      ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) {
          throw new _exception2["default"]("must pass block params");
        }
        if (templateSpec.useDepths && !depths) {
          throw new _exception2["default"]("must pass parent depths");
        }
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
      };
      return ret;
    }
    function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
      function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
          currentDepths = [context].concat(depths);
        }
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
      }
      prog = executeDecorators(fn, prog, container, depths, data, blockParams);
      prog.program = i;
      prog.depth = depths ? depths.length : 0;
      prog.blockParams = declaredBlockParams || 0;
      return prog;
    }
    function resolvePartial(partial, context, options) {
      if (!partial) {
        if (options.name === "@partial-block") {
          partial = options.data["partial-block"];
        } else {
          partial = options.partials[options.name];
        }
      } else if (!partial.call && !options.name) {
        options.name = partial;
        partial = options.partials[partial];
      }
      return partial;
    }
    function invokePartial(partial, context, options) {
      var currentPartialBlock = options.data && options.data["partial-block"];
      options.partial = true;
      if (options.ids) {
        options.data.contextPath = options.ids[0] || options.data.contextPath;
      }
      var partialBlock = void 0;
      if (options.fn && options.fn !== noop) {
        (function() {
          options.data = _base.createFrame(options.data);
          var fn = options.fn;
          partialBlock = options.data["partial-block"] = function partialBlockWrapper(context2) {
            var options2 = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
            options2.data = _base.createFrame(options2.data);
            options2.data["partial-block"] = currentPartialBlock;
            return fn(context2, options2);
          };
          if (fn.partials) {
            options.partials = Utils.extend({}, options.partials, fn.partials);
          }
        })();
      }
      if (partial === void 0 && partialBlock) {
        partial = partialBlock;
      }
      if (partial === void 0) {
        throw new _exception2["default"]("The partial " + options.name + " could not be found");
      } else if (partial instanceof Function) {
        return partial(context, options);
      }
    }
    function noop() {
      return "";
    }
    function initData(context, data) {
      if (!data || !("root" in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
      }
      return data;
    }
    function executeDecorators(fn, prog, container, depths, data, blockParams) {
      if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
      }
      return prog;
    }
    function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
      Object.keys(mergedHelpers).forEach(function(helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
      });
    }
    function passLookupPropertyOption(helper, container) {
      var lookupProperty = container.lookupProperty;
      return _internalWrapHelper.wrapHelper(helper, function(options) {
        return Utils.extend({lookupProperty}, options);
      });
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/no-conflict.js
  var require_no_conflict = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    exports["default"] = function(Handlebars) {
      var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
      Handlebars.noConflict = function() {
        if (root.Handlebars === Handlebars) {
          root.Handlebars = $Handlebars;
        }
        return Handlebars;
      };
    };
    module.exports = exports["default"];
  });

  // node_modules/handlebars/dist/cjs/handlebars.runtime.js
  var require_handlebars_runtime = __commonJS((exports, module) => {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    var _handlebarsBase = require_base();
    var base = _interopRequireWildcard(_handlebarsBase);
    var _handlebarsSafeString = require_safe_string();
    var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
    var _handlebarsException = require_exception();
    var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
    var _handlebarsUtils = require_utils2();
    var Utils = _interopRequireWildcard(_handlebarsUtils);
    var _handlebarsRuntime = require_runtime();
    var runtime2 = _interopRequireWildcard(_handlebarsRuntime);
    var _handlebarsNoConflict = require_no_conflict();
    var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
    function create() {
      var hb = new base.HandlebarsEnvironment();
      Utils.extend(hb, base);
      hb.SafeString = _handlebarsSafeString2["default"];
      hb.Exception = _handlebarsException2["default"];
      hb.Utils = Utils;
      hb.escapeExpression = Utils.escapeExpression;
      hb.VM = runtime2;
      hb.template = function(spec) {
        return runtime2.template(spec, hb);
      };
      return hb;
    }
    var inst = create();
    inst.create = create;
    _handlebarsNoConflict2["default"](inst);
    inst["default"] = inst;
    exports["default"] = inst;
    module.exports = exports["default"];
  });

  // node_modules/handlebars/runtime.js
  var require_runtime2 = __commonJS((exports, module) => {
    module.exports = require_handlebars_runtime()["default"];
  });

  // node_modules/carousel-js/src/carousel.js
  var require_carousel = __commonJS((exports) => {
    __export(exports, {
      default: () => Carousel
    });
    "use strict";
    class Carousel {
      constructor(options) {
        options = options || {};
        if (!options.panels) {
          options.panels = [];
        }
        if (!options.thumbnails) {
          options.thumbnails = [];
        }
        options = Object.assign({
          panels: [],
          assetLoadingClass: "carousel-asset-loading",
          autoLoadAssets: true,
          panelActiveClass: "carousel-panel-active",
          panelLoadedClass: "carousel-panel-loaded",
          panelBackClass: "carousel-panel-behind",
          panelForwardClass: "carousel-panel-ahead",
          onPanelChange: null,
          lazyLoadAttr: "data-src",
          thumbnails: [],
          thumbnailActiveTriggerEvent: "click",
          thumbnailActiveClass: "carousel-thumbnail-active",
          initialIndex: 0,
          leftArrow: null,
          rightArrow: null,
          arrowActiveClass: "carousel-arrow-active",
          arrowDisabledClass: "carousel-arrow-disabled",
          onLeftArrowClick: null,
          onRightArrowClick: null
        }, options);
        this.options = options;
        this.subModules = {};
        this._checkForInitErrors();
        this.setup();
      }
      setup() {
        if (!this.subModules.panels) {
          this.subModules.panels = this._setupPanels(this.options);
        }
        if (this.options.thumbnails.length && !this.subModules.thumbnails) {
          this.subModules.thumbnails = this._setupThumbs(this.options);
        }
        if ((this.options.leftArrow || this.options.rightArrow) && !this.subModules.arrows) {
          this.subModules.arrows = this._setupArrows(this.options);
        }
        if (typeof this.options.initialIndex === "number") {
          this.goTo(this.options.initialIndex);
        }
      }
      _setupThumbs(options) {
        return new CarouselThumbs(Object.assign({}, options, {
          onChange: this.onThumbnailChange.bind(this)
        }));
      }
      _setupPanels(options) {
        if (options.panels.length) {
          return new CarouselPanels(Object.assign({}, options, {
            onChange: this.onPanelChange.bind(this)
          }));
        }
      }
      _setupArrows(options) {
        var internalOptions;
        internalOptions = Object.assign({}, options);
        internalOptions.onLeftArrowClick = this.onLeftArrowClick.bind(this);
        internalOptions.onRightArrowClick = this.onRightArrowClick.bind(this);
        return new CarouselArrows(internalOptions);
      }
      _checkForInitErrors() {
        var options = this.options, panelCount = options.panels.length, thumbnailCount = options.thumbnails.length;
        if (thumbnailCount && thumbnailCount !== panelCount) {
          console.warn("carousel warning: number of thumbnails passed in constructor do not equal the number of panels\npanels: " + panelCount + "\nthumbnails: " + thumbnailCount + "\n");
        }
      }
      onPanelChange(index) {
        if (this.subModules.thumbnails) {
          this.subModules.thumbnails.goTo(index);
        }
        if (this.subModules.arrows) {
          this.subModules.arrows.update(index);
        }
        if (this.options.onPanelChange) {
          this.options.onPanelChange(index);
        }
      }
      onThumbnailChange(index) {
        this.goTo(index);
      }
      onRightArrowClick(e) {
        this.goTo(this.subModules.panels.getCurrentIndex() + 1);
        if (this.options.onRightArrowClick) {
          this.options.onRightArrowClick(e);
        }
      }
      onLeftArrowClick(e) {
        this.goTo(this.subModules.panels.getCurrentIndex() - 1);
        if (this.options.onLeftArrowClick) {
          this.options.onLeftArrowClick(e);
        }
      }
      goTo(index) {
        var options = this.options, maxIndex = options.panels.length - 1, minIndex = 0;
        if (index > maxIndex) {
          index = minIndex;
        } else if (index < minIndex) {
          index = maxIndex;
        }
        if (this.subModules.thumbnails) {
          this.subModules.thumbnails.goTo(index);
        }
        if (this.subModules.arrows) {
          this.subModules.arrows.update(index);
        }
        if (this.subModules.panels) {
          return this.subModules.panels.goTo(index);
        }
      }
      getCurrentIndex() {
        return this.subModules.panels.getCurrentIndex();
      }
      next() {
        this.goTo(this.getCurrentIndex() + 1);
      }
      prev() {
        this.goTo(this.getCurrentIndex() - 1);
      }
      destroy() {
        for (let key in this.subModules) {
          if (this.subModules.hasOwnProperty(key) && this.subModules[key]) {
            this.subModules[key].destroy();
          }
        }
      }
    }
  });

  // node_modules/carousel-js/src/carousel-thumbs.js
  "use strict";
  class CarouselThumbs {
    constructor(options) {
      options = Object.assign({
        thumbnails: [],
        thumbnailActiveTriggerEvent: "click",
        thumbnailActiveClass: "carousel-thumbnail-active",
        onChange: null
      }, options);
      this.options = options;
      this._thumbnailEventListener = this.onThumbnailEvent.bind(this);
      this.setup();
    }
    setup() {
      var thumbs = this.options.thumbnails;
      if (thumbs.length) {
        this.triggerThumbsEventListener("addEventListener");
      } else {
        console.error("carousel thumb error: no thumbnails were passed to constructor");
      }
    }
    onThumbnailEvent(e) {
      if (!this._thumbnailArr) {
        this._thumbnailArr = Array.prototype.slice.call(this.options.thumbnails);
      }
      var index = this._thumbnailArr.indexOf(e.currentTarget);
      if (index !== -1 && index !== this.getCurrentIndex()) {
        this.goTo(index);
        if (this.options.onChange) {
          this.options.onChange(index);
        }
      }
    }
    _checkForInitErrors() {
      var options = this.options, thumbnailCount = options.thumbnails.length;
      if (!thumbnailCount) {
        console.error("carousel error: no thumbnails were passed in constructor");
      }
    }
    goTo(index) {
      var thumbs = this.options.thumbnails, prevIndex = this.getCurrentIndex() || 0, activeClass = this.options.thumbnailActiveClass, maxIndex = thumbs.length - 1, minIndex = 0;
      if (index > maxIndex || index < minIndex) {
        console.error("carousel thumbnail error: unable to transition to a thumbnail with an index of " + index + ", it does not exist!");
      }
      thumbs[index].classList.add(activeClass);
      if (prevIndex !== index) {
        thumbs[prevIndex].classList.remove(activeClass);
      }
      this._currentIndex = index;
    }
    getCurrentIndex() {
      return this._currentIndex;
    }
    triggerThumbsEventListener(method) {
      var count = this.options.thumbnails.length, i, el;
      for (i = 0; i < count; i++) {
        el = this.options.thumbnails[i];
        el[method](this.options.thumbnailActiveTriggerEvent, this._thumbnailEventListener);
      }
    }
    destroy() {
      let thumbs = this.options.thumbnails;
      this._currentIndex = null;
      if (thumbs.length) {
        this.triggerThumbsEventListener("removeEventListener");
      }
    }
  }

  // node_modules/module-js/src/module.js
  const resource_manager_js = __toModule(require_resource_manager());
  let Promise4 = require_es6_promise().Promise;
  let runtime = require_runtime2();
  let getCssPropUnitMap = function(v) {
    v.trim();
    let num = v.match("[0-9.]+"), unit = "ms";
    num = num ? num[0] : "";
    if (num) {
      unit = v.split(num)[1];
      num = Number(num);
    }
    return {
      num,
      unit
    };
  };
  let convertCssTimeValueToMilliseconds = function(val) {
    let number = getCssPropUnitMap(val).num, unit = val.replace(number, "");
    if (unit === "s") {
      val = number * 1e3;
    } else {
      val = number;
    }
    return val + "ms";
  };
  let getJsPropName = function(cssProp) {
    return cssProp.replace(/-([a-z])/g, function(letter) {
      return letter[1].toUpperCase();
    });
  };
  let traverseEachParent = function(callback, startEl) {
    let parentNode = startEl;
    let predicate = null;
    while (parentNode && typeof parentNode.className === "string") {
      predicate = callback(parentNode);
      if (predicate !== void 0 && !predicate) {
        break;
      }
      parentNode = parentNode.parentNode;
    }
  };
  class Module {
    constructor(el, options) {
      options = options || {};
      if (!el) {
        console.error("Module error: No element was passed to constructor");
      }
      this.el = el;
      let defaultOptions = {
        loadedClass: "module-loaded",
        activeClass: "module-active",
        disabledClass: "module-disabled",
        errorClass: "module-error",
        styles: [],
        template: "",
        data: null,
        requestOptions: null,
        onLoad: function() {
        },
        onShow: function() {
        },
        onHide: function() {
        },
        onEnable: function() {
        },
        onDisable: function() {
        },
        onError: function() {
        },
        helpers: {}
      };
      for (let name in defaultOptions) {
        if (defaultOptions.hasOwnProperty(name)) {
          if (!options[name]) {
            options[name] = defaultOptions[name];
          }
        }
      }
      this.options = options;
      for (let name in options.helpers) {
        if (options.helpers.hasOwnProperty(name)) {
          runtime.registerHelper(name, options.helpers[name]);
        }
      }
      this._handleElementInitialState();
      this.subModules = {};
      this.active = false;
      this.loaded = false;
      this._elChildren = [];
      this.loadStatus = "notLoaded";
    }
    load() {
      if (!this.loaded) {
        this.loadStatus = "loading";
        let loadPromises = [];
        for (let key in this.subModules) {
          if (this.subModules.hasOwnProperty(key)) {
            let view = this.subModules[key];
            loadPromises.push(view.load());
          }
        }
        return Promise4.all(loadPromises).then(() => {
          return this.getStyles(this.options.styles).then(() => {
            return this.fetchData(this.options.data, this.options.requestOptions).then((data) => {
              return this.getTemplate(data).then((nodes) => {
                nodes = nodes || [];
                let frag = document.createDocumentFragment();
                while (nodes.length) {
                  let node = nodes[0];
                  this._elChildren.push(node);
                  frag.appendChild(node);
                }
                this.el.appendChild(frag);
                this.loaded = true;
                this.loadStatus = "loaded";
                if (this.el) {
                  this.el.classList.add(this.options.loadedClass);
                }
                this.options.onLoad();
              });
            });
          });
        }).catch((e) => {
          this.error(e);
          throw e;
        });
      } else {
        return Promise4.resolve();
      }
    }
    fetchData(url, options) {
      if (typeof url !== "string") {
        return Promise4.resolve(url);
      }
      return resource_manager_js.default.fetchData(url, options);
    }
    getStyles(cssUrl) {
      return resource_manager_js.default.loadCss(cssUrl);
    }
    getTemplate(data) {
      let template = this.options.template || "";
      if (!template) {
        return Promise4.resolve();
      }
      let isHandlebarFile = function(filePath) {
        if (filePath) {
          let frags = filePath.split(".");
          let ext = frags[frags.length - 1];
          return ext === "hbs";
        }
      };
      if (this._isHTMLTemplate(template)) {
        let tpl = document.importNode(template.content, true);
        return Promise4.resolve(tpl.childNodes);
      } else if (template instanceof HTMLElement) {
        let frag = document.createDocumentFragment();
        frag.appendChild(template);
        return Promise4.resolve(frag.childNodes);
      } else {
        let tempDiv = document.createElement("div");
        return resource_manager_js.default.loadTemplate(template, tempDiv, data).then((html) => {
          return tempDiv.childNodes;
        });
      }
    }
    _isHTMLTemplate(template) {
      return template instanceof HTMLTemplateElement;
    }
    error(err) {
      let e = err || new Error();
      this.el.classList.add(this.options.errorClass);
      this.errored = true;
      this.loaded = false;
      this.loadStatus = "notLoaded";
      this.options.onError(e);
      return this.waitForTransition().then(() => {
        return e;
      });
    }
    enable() {
      let el = this.el;
      if (el) {
        el.classList.remove(this.options.disabledClass);
      }
      this.disabled = false;
      this.options.onEnable();
      return this.waitForTransition();
    }
    disable() {
      let el = this.el;
      if (el) {
        el.classList.add(this.options.disabledClass);
      }
      this.disabled = true;
      this.options.onDisable();
      return this.waitForTransition();
    }
    show() {
      let el = this.el;
      if (el) {
        el.classList.add(this.options.activeClass);
      }
      this.active = true;
      this.options.onShow();
      return this.waitForTransition();
    }
    hide() {
      let el = this.el;
      if (el) {
        el.classList.remove(this.options.activeClass);
      }
      this.active = false;
      this.options.onHide();
      return this.waitForTransition();
    }
    _handleElementInitialState() {
      let el = this.el;
      if (!el) {
        return;
      }
      if (el.classList.contains(this.options.disabledClass)) {
        this._origDisabled = true;
        this.disable();
      }
      if (el.classList.contains(this.options.errorClass)) {
        this._origError = true;
        this.error(new Error());
      }
    }
    _resetElementInitialState() {
      let options = this.options, disabledClass = options.disabledClass, errorClass = options.errorClass;
      if (!this.el) {
        return;
      }
      if (this._origDisabled) {
        this.el.classList.add(disabledClass);
      } else {
        this.el.classList.remove(disabledClass);
      }
      if (!this._origError) {
        this.el.classList.remove(errorClass);
      } else {
        this.el.classList.add(errorClass);
      }
    }
    waitForTransition() {
      let duration = this.getTransitionDuration();
      return new Promise4((resolve) => {
        if (duration > 0) {
          setTimeout(resolve.bind(this, this.el), duration);
        } else {
          resolve(this.el);
        }
      });
    }
    getTransitionDuration() {
      let delayProp = this.getCssComputedProperty("transition-delay") || "0ms", durationProp = this.getCssComputedProperty("transition-duration") || "0ms", times = Array.isArray(durationProp) ? durationProp : [durationProp], delay = Array.isArray(delayProp) ? delayProp : [delayProp], highest = 0, map;
      times.push.apply(times, delay);
      times.forEach((value) => {
        value.split(",").forEach((v) => {
          v = convertCssTimeValueToMilliseconds(v);
          map = getCssPropUnitMap(v);
          if (map.num > highest) {
            highest = map.num;
          }
        });
      });
      return highest;
    }
    getCssComputedProperty(prop) {
      let style = window.getComputedStyle(this.el);
      return style.getPropertyValue(prop) || this.el.style[getJsPropName(prop)];
    }
    getClosestAncestorElementByClassName(className, startTarget) {
      let result = null;
      traverseEachParent((parent) => {
        if (parent.classList.contains(className)) {
          result = parent;
          return false;
        }
      }, startTarget || this.el.parentNode || this.el);
      return result;
    }
    destroy() {
      let subModules = this.subModules;
      for (let key in subModules) {
        if (subModules.hasOwnProperty(key) && subModules[key]) {
          subModules[key].destroy();
        }
      }
      this.subModules = {};
      this.active = false;
      this.loaded = false;
      this.errored = false;
      this.loadStatus = "notLoaded";
      this.el.classList.remove(this.options.loadedClass);
      this.el.classList.remove(this.options.activeClass);
      this._resetElementInitialState();
      this._elChildren.forEach((el) => {
        if (this.el.contains(el)) {
          this.el.removeChild(el);
        }
      });
      this._elChildren = [];
    }
  }

  // node_modules/carousel-js/src/carousel-panel.js
  const promise = __toModule(require_promise());
  "use strict";
  class CarouselPanel extends Module {
    constructor(el, options) {
      options = Object.assign({
        activeClass: "carousel-panel-active",
        lazyLoadAttr: null,
        loadedClass: "carousel-panel-loaded",
        assetLoadedClass: "carousel-panel-asset-loaded"
      }, options);
      super(el, options);
      this.options = options;
      this.el = el;
    }
    load() {
      let loadPromises = [];
      this._loadableImages().forEach((imgEl) => {
        let loadedClass = this.options.assetLoadedClass;
        let promise3 = this._loadImage(imgEl).then(() => {
          this.el.classList.add(loadedClass);
        });
        loadPromises.push(promise3);
      });
      return super.load().then(() => {
        return promise.default.all(loadPromises);
      });
    }
    _loadableImages() {
      if (this.el.tagName.toLowerCase() === "img" && this.el.getAttribute(this.options.lazyLoadAttr)) {
        return [this.el];
      } else {
        return Array.prototype.slice.call(this.el.querySelectorAll("img[" + this.options.lazyLoadAttr + "]"));
      }
    }
    _loadImage(img) {
      var src = img.getAttribute(this.options.lazyLoadAttr);
      return new promise.default(function(resolve) {
        img.onload = function() {
          resolve(img);
        };
        img.onerror = function() {
          resolve(img);
        };
        img.src = src;
      });
    }
  }

  // node_modules/carousel-js/src/carousel-panels.js
  const promise2 = __toModule(require_promise());
  "use strict";
  class CarouselPanels {
    constructor(options) {
      options = Object.assign({
        panels: [],
        assetLoadedClass: "carousel-asset-loaded",
        panelActiveClass: "carousel-panel-active",
        panelLoadedClass: "carousel-panel-loaded",
        onChange: null,
        lazyLoadAttr: "data-src",
        panelBackClass: "carousel-panel-behind",
        panelForwardClass: "carousel-panel-ahead"
      }, options);
      if (!options.panels.length) {
        console.error("carousel error: no panels were passed in constructor");
      } else {
        this._panelModules = this._setupPanelModules(options);
      }
      this._panelModules.forEach((panel) => {
        panel.el.classList.add(options.panelForwardClass);
      });
      this.options = options;
    }
    _setupPanelModules(options) {
      let modules = [];
      for (let i = 0; i < options.panels.length; i++) {
        modules[i] = new CarouselPanel(options.panels[i], {
          activeClass: options.panelActiveClass,
          lazyLoadAttr: options.lazyLoadAttr,
          assetLoadedClass: options.assetLoadedClass,
          loadedClass: options.panelLoadedClass
        });
      }
      return modules;
    }
    goTo(index) {
      var maxIndex = this.options.panels.length - 1, minIndex = 0, prevIndex = this.getCurrentIndex(), errorMsg, promise3;
      if (typeof index !== "number" || index > maxIndex || index < minIndex) {
        errorMsg = "carousel panel error: unable to transition to an index of " + index + "which does not exist!";
        console.error(errorMsg);
        promise3 = promise2.default.reject(new Error(errorMsg));
      } else if (prevIndex === index) {
        promise3 = promise2.default.resolve();
      } else {
        promise3 = this.load(index);
        this._updatePanels(index);
        this._currentIndex = index;
        if (this.options.onChange) {
          this.options.onChange(index);
        }
      }
      return promise3;
    }
    _updatePanels(toIndex) {
      let fromIndex = this.getCurrentIndex();
      let fromPanel = this._panelModules[fromIndex];
      let toPanel = this._panelModules[toIndex];
      let rangePanels = [];
      let toAdd = "";
      let toRemove = "";
      if (fromIndex > toIndex) {
        rangePanels = this._panelModules.slice(toIndex + 1, fromIndex + 1);
        toAdd = this.options.panelForwardClass;
        toRemove = this.options.panelBackClass;
      } else if (fromIndex < toIndex) {
        rangePanels = this._panelModules.slice(fromIndex, toIndex);
        toAdd = this.options.panelBackClass;
        toRemove = this.options.panelForwardClass;
      }
      rangePanels.forEach((p) => {
        p.el.classList.add(toAdd);
        p.el.classList.remove(toRemove);
      });
      if (fromPanel) {
        fromPanel.hide();
      }
      toPanel.el.classList.remove(this.options.panelForwardClass, this.options.panelBackClass);
      toPanel.show();
    }
    getCurrentIndex() {
      return this._currentIndex;
    }
    load(idx) {
      let panelModule = this._panelModules[idx];
      if (panelModule.loaded) {
        return promise2.default.resolve();
      }
      return panelModule.load();
    }
    loadPanelAssets(index) {
      return this.load(index);
    }
    destroy() {
      var options = this.options, currentIndex = this.getCurrentIndex();
      if (currentIndex) {
        options.panels[currentIndex].classList.remove(options.panelActiveClass);
      }
      this._currentIndex = void 0;
      this._panelModules.forEach((module) => {
        module.el.classList.remove(options.panelForwardClass, options.panelBackClass);
        module.destroy();
      });
    }
  }

  // node_modules/carousel-js/src/carousel-arrows.js
  "use strict";
  class CarouselArrows {
    constructor(options) {
      options = Object.assign({
        leftArrow: null,
        rightArrow: null,
        panels: [],
        arrowDisabledClass: "carousel-arrow-disabled",
        onLeftArrowClick: null,
        onRightArrowClick: null,
        initialIndex: 0
      }, options);
      if (!options.leftArrow && !options.rightArrow) {
        console.error("Carousel Arrows Error: no left and right arrows were passed into constructor");
      }
      this.options = options;
      this.arrows = [];
      if (options.leftArrow) {
        this.arrows.push(options.leftArrow);
        this._leftArrowEventListener = (e) => this.onLeftArrowClick(e);
        options.leftArrow.addEventListener("click", this._leftArrowEventListener);
      }
      if (options.rightArrow) {
        this.arrows.push(options.rightArrow);
        this._rightArrowEventListener = (e) => this.onRightArrowClick(e);
        options.rightArrow.addEventListener("click", this._rightArrowEventListener);
      }
    }
    update(panelIndex) {
      var currentItemNum = panelIndex + 1, maxItems = this.options.panels.length, minItems = 1;
      if (currentItemNum < maxItems && currentItemNum > minItems) {
        this.enable();
      } else if (currentItemNum === maxItems && currentItemNum === minItems) {
        this.disable();
      } else if (currentItemNum === maxItems) {
        this.disableRightArrow();
        this.enableLeftArrow();
      } else if (currentItemNum === minItems) {
        this.disableLeftArrow();
        this.enableRightArrow();
      }
    }
    disable() {
      this.disableLeftArrow();
      this.disableRightArrow();
    }
    disableLeftArrow() {
      if (this.options.leftArrow) {
        this.options.leftArrow.classList.add(this.options.arrowDisabledClass);
      }
    }
    disableRightArrow() {
      if (this.options.rightArrow) {
        this.options.rightArrow.classList.add(this.options.arrowDisabledClass);
      }
    }
    enable() {
      this.enableLeftArrow();
      this.enableRightArrow();
    }
    enableLeftArrow() {
      if (this.options.leftArrow) {
        this.options.leftArrow.classList.remove(this.options.arrowDisabledClass);
      }
    }
    enableRightArrow() {
      if (this.options.rightArrow) {
        this.options.rightArrow.classList.remove(this.options.arrowDisabledClass);
      }
    }
    onLeftArrowClick(e) {
      var isDisabled = this.options.leftArrow.classList.contains(this.options.arrowDisabledClass);
      if (this.options.onLeftArrowClick && !isDisabled) {
        this.options.onLeftArrowClick(e);
      }
    }
    onRightArrowClick(e) {
      var isDisabled = this.options.rightArrow.classList.contains(this.options.arrowDisabledClass);
      if (this.options.onRightArrowClick && !isDisabled) {
        this.options.onRightArrowClick(e);
      }
    }
    destroy() {
      if (this.options.leftArrow) {
        this.options.leftArrow.removeEventListener("click", this._leftArrowEventListener);
      }
      if (this.options.rightArrow) {
        this.options.rightArrow.removeEventListener("click", this._rightArrowEventListener);
      }
    }
  }

  // main.js
  Modernizr = require_modernizr();
  window.$ = window.jQuery = require_jquery();
  require_widget();
  require_lightgallery();
  require_jquery_pjax();
  require_imagesloaded();
  require_masonry();
  require_carousel();
  var tagURLPrefix = "/tags";
  var paper = {
    setup: function() {
      paper.movablePage == null && (paper.movablePage = new paper.MovablePage("#posts.show")), $("body").hasClass("index") && !window.location.href.match(/page/i) && !$("body").hasClass("tag_page") && paper.features.load(), paper.$posts = $("#posts.index"), paper.$posts.imagesLoaded(function() {
        return paper.books.build();
      });
    },
    features: {
      load: function() {
        var a = this;
        return $.ajax({
          url: tagURLPrefix + "/featured",
          success: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
            a.div = $('<div id="features" />').append('<div class="carousel slide" id="features-carousel" />'), a.list = $('<div class="carousel-inner" />'), $("body").addClass("with-features"), a.div.find(".carousel").append(a.list), k = $("#header").after(a.div).get(0), a.spinner = new Spinner().spin(k), a.posts = $(b).find(".post"), $("#header").find("#feature_bio").length > 0 && (i = $("<li />").attr("data-post-type", "bio").append($("#feature_bio").html()), a.posts = i.add(a.posts)), l = 0;
            while (l < a.posts.length && l < 6) {
              g = $(a.posts.get(l)), p = g.attr("data-post-type"), e = $('<div class="item" />');
              if (p === "bio")
                j = g.html();
              else if (p === "photo")
                d = g.find("img.post-image"), d.each(function() {
                  return this.src = $(this).attr("data-highres");
                }), d.length > 1 ? (o = $('<div class="photoset_wrap" />'), o.attr("data-permalink", g.find("a").attr("href")), o.append(d), e.addClass("photoset"), j = o) : d.length === 1 && (j = $("<a href='" + g.find("a").attr("href") + "' class='photo-permalink' />").append(d));
              else if (p === "audio")
                if (g.find("iframe").length > 0)
                  j = g.find(".post-content");
                else {
                  j = $("<a />").attr({
                    href: g.attr("data-permalink"),
                    class: "audio_link"
                  }).append('<span class="audio_player_icon">&nbsp;</span>'), c = g.find(".audio-player");
                  if (c.attr("data-artist") || c.attr("data-track") || c.attr("data-album"))
                    m = $("<ul />"), c.attr("data-artist") && m.append("<li>" + decodeURI(c.attr("data-artist")) + "</li>"), c.attr("data-track") && m.append("<li>" + decodeURI(c.attr("data-track")) + "</li>"), c.attr("data-album") && m.append("<li>" + decodeURI(c.attr("data-album")) + "</li>"), m.appendTo(j);
                  c.attr("data-art") && $("<img />").attr("src", c.attr("data-art")).appendTo(j);
                }
              else
                p === "answer" ? (n = $("<a />").attr("href", g.attr("data-permalink")), n.append(g.find(".post-content")), j = $('<div class="post-pad" />').append(n)) : j = $('<div class="post-pad" />').append(g.find(".post-title")).append(g.find(".post-content"));
              j = $('<div class="feature_content" />').append(j), e.addClass(p).append(j).append(g.find(".source")).appendTo(a.list), l === 0 && e.addClass("active"), l += 1;
            }
            a.prev = $('<a class="pagination-newer" href="#features-carousel" data-slide="prev">&#x25C0;</a>'), a.next = $('<a class="pagination-older" href="#features-carousel" data-slide="next">&#x25B6;</a>'), a.arrows = $('<div class="pagination pagination-slideshow" />').append(a.prev).append(a.next), l = a.list.find(".item").length, f = $('<div class="navigation" />');
            while (l--)
              h = $("<em />").html("•").attr("data-index", a.list.find(".item").length - l - 1), h.on("click", function(a2) {
                return $("#features .carousel").carousel(parseInt($(this).attr("data-index")));
              }), f.append(h);
            return f.find("em:first-child").addClass("on"), $("#features .carousel").on("slid", function(a2) {
              return $("#features .navigation em").removeClass("on"), $("#features .navigation em").eq($(this).find(".active").index()).addClass("on");
            }), a.div.append(a.arrows).append(f), a.div.imagesLoaded(function() {
              return a.verticallyAlignContent(), $(".carousel").carousel({
                interval: false
              }), a.div.addClass("loaded"), a.spinner.stop(), $("#header .spinner").remove(), paper.books.build(), a.sizeImages();
            });
          }
        });
      },
      sizeImages: function() {
        return this.div.find(".item.photo").each(function() {
          var a, b;
          return a = $(this), a.addClass("measure_height"), b = a.find("img").width(), a.removeClass("measure_height"), a.find(".post-pad, .photo-permalink, .source").width(b);
        });
      },
      verticallyAlignContent: function() {
        var a;
        return a = this.div.find(".carousel-inner").height(), this.div.find(".item:not(.photoset):not(.video)").each(function() {
          var b, c;
          return b = $(this).find(".feature_content"), $(this).is(":visible") ? c = b.height() : ($(this).addClass("measure_height"), c = b.height(), $(this).removeClass("measure_height")), b.css("paddingTop", Math.floor((a - c) / 2));
        });
      }
    },
    books: {
      build: function() {
        if (typeof Modernizr != "undefined" && Modernizr !== null && Modernizr.csstransforms)
          return $(".photoset_wrap").length === 0 && paper.$posts.masonry(), $(".photoset_wrap").each(function(a) {
            var b, c, d, e, f, g;
            d = $(this), b = d.closest(".features-container"), e = d.data("notebook"), e == null && (f = (g = a + 1 === $(".photoset_wrap").length) != null ? g : {
              true: false
            }, d.data("notebook", new paper.Notebook(this, {
              parent: b,
              lastNotebook: f
            })));
            if (d.data("notebook") != null)
              return c = $(this).closest(".post").addClass("notebooked");
          });
      }
    },
    Notebook: function() {
      function a(a2, b) {
        this.container = a2, $(this.container).hide(), this.pages = [], this.currentPage = 0, this.permalink = this.container.getAttribute("data-permalink"), this.settings = b || {}, this.settings.useRotation !== false && (this.settings.useRotation = true), this.settings.xMovement !== false && (this.settings.xMovement = true), this.settings.xMovement !== false && (this.settings.yMovement = true), this.setMaximumHeight(), this.extractSourcesFromContainer(), this.writeMarkup(), this.appendElement(), $(this.container).show();
      }
      return a.prototype.setMaximumHeight = function() {
        return $("body").hasClass("show") ? this.max_height = 475 : $(this.container).parents("#features").length > 0 ? this.max_height = 400 : this.max_height = 400;
      }, a.prototype.extractSourcesFromContainer = function() {
        var a2, b, c;
        b = this.container.querySelectorAll("img"), this.sources = [], a2 = b.length, c = [];
        while (a2--)
          c.push(this.sources.push(b[a2].src));
        return c;
      }, a.prototype.setImageHeights = function(a2, b, c, d, e, f) {
        return $("<img>").attr("src", a2).load(function() {
          var a3, g, h, i;
          g = Math.round($(b).width() * this.height / this.width), h = $(b).width(), a3 = (i = $(c).parents(".feature_content").length > 0) != null ? i : {
            true: false
          }, g > f && (g = f, h = Math.round(this.width * g / this.height)), $(b).css({
            height: g,
            width: h
          }).attr("data-height", g).attr("data-width", h), g > parseInt($(c).attr("data-height")) && $(c).attr("data-height", g), h > parseInt($(c).attr("data-width")) && $(c).attr("data-width", h), d && ($(c).css("height", $(c).attr("data-height")), $(c).width() > parseInt($(c).attr("data-width")) && $(c).attr("data-width", $(c).width()), a3 && $(c).css("width", $(c).attr("data-width")), $(c).find("div").each(function() {
            var a4, b2;
            return b2 = Math.round(($(c).attr("data-height") - $(this).attr("data-height")) / 2), a4 = Math.round(($(c).attr("data-width") - $(this).attr("data-width")) / 2), $(this).css({
              marginTop: b2,
              marginLeft: a4
            });
          }));
          if (d && e)
            return paper.$posts.masonry();
        });
      }, a.prototype.writeMarkup = function() {
        var a2, b, c, d, e;
        this.element = document.createElement("div"), this.element.className = "notebook", this.element.id = "notebook_" + parseInt(Math.random() * 1e5), this.element.setAttribute("data-height", 0), this.element.setAttribute("data-width", 0), a2 = this.sources.length, e = [];
        while (a2--)
          c = document.createElement("div"), c.style.backgroundImage = "url(" + this.sources[a2] + ")", b = (d = a2 === 0) != null ? d : {
            true: false
          }, this.setImageHeights(this.sources[a2], c, this.element, b, this.settings.lastNotebook, this.max_height), c.className = "notebook-page page-style-" + parseInt(Math.random() * 5), c.setAttribute("data-page", this.sources.length - a2), c.style.zIndex = a2 + 1e3, this.pages.push(c), this.element.appendChild(c), c.addEventListener("touchstart", this, false), c.addEventListener("touchmove", this, false), c.addEventListener("touchend", this, false), c.addEventListener("click", this, false), Modernizr.touch ? e.push(void 0) : e.push(this.dragify(c));
        return e;
      }, a.prototype.appendElement = function() {
        return this.container.innerHTML = "", this.container.appendChild(this.element);
      }, a.prototype.dragify = function(a2) {
        var b = this;
        return $(a2).draggable({
          scroll: false,
          start: function(a3) {
            return b.onDragStart(a3);
          },
          drag: function(a3) {
            return b.onDragMove(a3);
          },
          stop: function(a3) {
            return b.onDragEnd(a3);
          }
        });
      }, a.prototype.handleEvent = function(a2) {
        switch (a2.type) {
          case "touchstart":
            return this.onTouchStart(a2);
          case "touchmove":
            return this.onTouchMove(a2);
          case "touchend":
            return this.onTouchEnd(a2);
          case "click":
            return this.onClick(a2);
        }
      }, a.prototype.onTouchStart = function(a2) {
        var b;
        a2.preventDefault(), this.target = a2.target, b = this.target.style, b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s", this.start = {
          pageX: a2.touches[0].pageX,
          pageY: a2.touches[0].pageY,
          time: Number(new Date())
        }, this.deltaX = 0, this.deltaY = 0, this.originalTransform = $(this.target).css("-webkit-transform");
        if (this.settings.parent != null)
          return this.settings.parent.addClass("dragging");
      }, a.prototype.onTouchMove = function(a2) {
        var b;
        return a2.touches.length > 1 || a2.scale && a2.scale !== 1 ? true : (a2.preventDefault(), a2.stopPropagation(), this.settings.xMovement && (this.deltaX = a2.touches[0].pageX - this.start.pageX), this.settings.yMovement && (this.deltaY = a2.touches[0].pageY - this.start.pageY), b = this.target.style, b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = this.originalTransform + (" translate(" + this.deltaX + "px, " + this.deltaY + "px)"));
      }, a.prototype.onTouchEnd = function(a2) {
        var b, c, d = this;
        this.distance = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY), this.deltaT = Number(new Date()) - this.start.time, this.rect = this.element.getBoundingClientRect(), this.width = this.rect.right - this.rect.left, this.height = this.rect.bottom - this.rect.top, c = this.target.style, c.webkitTransitionProperty = c.MozTransitionProperty = c.msTransitionProperty = c.OTransitionProperty = c.transitionProperty = "all", c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = ".4s", c.webkitTransform = c.MozTransform = c.msTransform = c.OTransform = c.transform = "rotate(0deg)", this.target.style.top = this.target.style.left = "", window.setTimeout(function() {
          if (d.settings.parent != null)
            return d.settings.parent.removeClass("dragging");
        }, 400), b = Math.abs(this.deltaY) > this.height / 2 || Math.abs(this.deltaX) > this.width / 2 || this.distance > 20 && this.deltaT < 250;
        if (b)
          return this.flip();
        if (this.deltaT < 500 && this.distance < 2 && !$("body").hasClass("show"))
          return window.location.href = this.permalink;
      }, a.prototype.onDragStart = function(a2) {
        var b;
        this.dragged = true, this.target = a2.target, b = this.target.style, b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s", this.start = {
          pageX: a2.pageX,
          pageY: a2.pageY,
          time: Number(new Date())
        }, this.deltaX = 0, this.deltaY = 0;
        if (this.settings.parent != null)
          return this.settings.parent.addClass("dragging");
      }, a.prototype.onDragMove = function(a2) {
        return this.settings.parent != null && this.settings.parent.addClass("dragging"), this.deltaX = a2.pageX - this.start.pageX, this.deltaY = a2.pageY - this.start.pageY;
      }, a.prototype.onDragEnd = function(a2) {
        return this.onTouchEnd(a2);
      }, a.prototype.onClick = function(a2) {
        if (this.dragged)
          return this.dragged = false, true;
        if (!$("body").hasClass("show"))
          return window.location.href = this.permalink;
      }, a.prototype.flip = function() {
        var a2, b, c, d, e, f, g, h, i = this;
        return d = this.deltaY / this.distance, b = this.deltaX / this.distance, c = this.distance, a2 = (this.width > this.height ? this.width : this.height) * 1.2, f = Math.floor(a2 * b), g = Math.floor(a2 * d), h = 0.2, e = this.target.style, e.webkitTransitionDuration = e.MozTransitionDuration = e.msTransitionDuration = e.OTransitionDuration = e.transitionDuration = h + "s", Modernizr.touch ? e.webkitTransform = e.MozTransform = e.msTransform = e.OTransform = e.transform = "translate(" + f + "px," + g + "px)" : (e.left = f + "px", e.top = g + "px"), window.setTimeout(function() {
          return i.afterFlip();
        }, h * 1e3);
      }, a.prototype.afterFlip = function() {
        var a2, b, c, d, e;
        a2 = this.pages.length, this.currentPage += 1, this.currentPage === a2 && (this.currentPage = 0), e = [];
        while (a2--)
          c = this.pages[a2], b = parseInt(c.style.zIndex) + 1, d = c.style, c.style.zIndex = b < this.pages.length + 1e3 ? b : 1e3, e.push(d.top = d.left = d.webkitTransform = d.MozTransform = d.msTransform = d.OTransform = d.transform = "");
        return e;
      }, a;
    },
    MovablePage: function() {
      function a(a2, b) {
        switch (typeof a2) {
          case "string":
            this.element = document.querySelector(a2);
            break;
          case "object":
            this.element = a2;
        }
        if (!this.element || !$.support.pjax)
          return null;
        b || (b = {}), this.nextSelector = b.nextSelector || "a.pagination-older", this.prevSelector = b.prevSelector || "a.pagination-newer", this.fragmentSelector = b.fragmentSelector || "#posts", this.activateArrows(), this.element.addEventListener("touchstart", this, false), this.element.addEventListener("touchmove", this, false), this.element.addEventListener("touchend", this, false);
      }
      return a.prototype.next = function() {
        var a2;
        return a2 = this.element.style, a2.webkitTransitionDuration = a2.MozTransitionDuration = a2.msTransitionDuration = a2.OTransitionDuration = a2.transitionDuration = this.getVelocityAdjustedTransitionDuration() / 1e3 + "s", a2.webkitTransitionProperty = a2.MozTransitionProperty = a2.msTransitionProperty = a2.OTransitionProperty = a2.transitionProperty = "all", a2.webkitTransform = a2.MozTransform = a2.msTransform = a2.OTransform = a2.transform = "translate3d(-100%,0,0)", a2.opacity = "0", this.load(this.nextLink.href);
      }, a.prototype.prev = function() {
        var a2;
        return a2 = this.element.style, a2.webkitTransitionDuration = a2.MozTransitionDuration = a2.msTransitionDuration = a2.OTransitionDuration = a2.transitionDuration = this.getVelocityAdjustedTransitionDuration() / 1e3 + "s", a2.webkitTransitionProperty = a2.MozTransitionProperty = a2.msTransitionProperty = a2.OTransitionProperty = a2.transitionProperty = "all", a2.webkitTransform = a2.MozTransform = a2.msTransform = a2.OTransform = a2.transform = "translate3d(100%,0,0)", a2.opacity = "0", this.load(this.prevLink.href);
      }, a.prototype.getVelocityAdjustedTransitionDuration = function() {
        var a2, b, c;
        return this.start == null ? 300 : (this.deltaT = Number(new Date()) - this.start.time, c = Math.abs(this.deltaX / this.deltaT), a2 = $(window).width() - Math.abs(this.deltaX), b = Math.abs(this.deltaT * a2 / this.deltaX), b > 500 && (b = 500), b);
      }, a.prototype.load = function(a2) {
        var b = this;
        return window.setTimeout(function() {
          return $ && $.support.pjax ? $.pjax({
            container: b.fragmentSelector,
            fragment: b.fragmentSelector,
            url: a2,
            timeout: 2e3,
            success: function(a3) {
              var c, d, e;
              return e = b.element.style, e.webkitTransitionProperty = e.MozTransitionProperty = e.msTransitionProperty = e.OTransitionProperty = e.transitionProperty = "opacity", e.opacity = "1", e.webkitTransform = e.MozTransform = e.msTransform = e.OTransform = e.transform = "", d = $(a3).find(".pagination"), c = $(a3).find("ol.notes"), $(".note-wrap").html(c), $("#pagination-posts").replaceWith(d), b.activateArrows(), paper.setup();
            }
          }) : window.location.href = a2;
        }, this.getVelocityAdjustedTransitionDuration());
      }, a.prototype.activateArrows = function() {
        var a2 = this;
        this.nextLink = document.querySelector(this.nextSelector), this.prevLink = document.querySelector(this.prevSelector), this.nextLink != null && (this.nextLink.onclick = function(b) {
          return b.preventDefault(), a2.next();
        }, this.nextPost = $("<div />").hide().load(this.nextLink.href + " " + this.fragmentSelector));
        if (this.prevLink != null)
          return this.prevLink.onclick = function(b) {
            return b.preventDefault(), a2.prev();
          }, this.prevPost = $("<div />").hide().load(this.prevLink.href + " " + this.fragmentSelector);
      }, a.prototype.handleEvent = function(a2) {
        switch (a2.type) {
          case "touchstart":
            return this.onTouchStart(a2);
          case "touchmove":
            return this.onTouchMove(a2);
          case "touchend":
            return this.onTouchEnd(a2);
        }
      }, a.prototype.onTouchStart = function(a2) {
        var b;
        return b = this.element.style, b.webkitTransitionProperty = b.MozTransitionProperty = b.msTransitionProperty = b.OTransitionProperty = b.transitionProperty = "all", b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s", this.start = {
          pageX: a2.touches[0].pageX,
          pageY: a2.touches[0].pageY,
          time: Number(new Date())
        }, this.deltaX = 0, this.isScrolling = void 0;
      }, a.prototype.onTouchMove = function(a2) {
        var b;
        if (a2.touches.length > 1 || a2.scale && a2.scale !== 1)
          return true;
        this.deltaX = a2.touches[0].pageX - this.start.pageX, typeof this.isScrolling == "undefined" && (this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(a2.touches[0].pageY - this.start.pageY)));
        if (!this.isScrolling)
          return a2.preventDefault(), b = this.element.style, b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = "translate3d(" + this.deltaX + "px, 0, 0)";
      }, a.prototype.onTouchEnd = function(a2) {
        var b;
        return this.isScrolling ? true : (this.deltaX > 200 || this.deltaX > 20 && Number(new Date()) - this.start.time < 250) && this.prevLink != null ? this.prev() : (this.deltaX < -200 || this.deltaX < -20 && Number(new Date()) - this.start.time < 250) && this.nextLink != null ? this.next() : (b = this.element.style, b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = ".5s", b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = "");
      }, a;
    }
  };
  window.paper = paper;
  paper.setup();
})();
