(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
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
          var self = this;
          setTimeout(function() {
            cb(self[test]);
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
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
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
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self[i], ret);
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
        }, self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
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
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
        return self;
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
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            catch: function(fn) {
              return promise.then(null, fn);
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
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(e, process.stackTrace);
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
                    process();
                  } else {
                    if (jQuery2.Deferred.getStackHook) {
                      process.stackTrace = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
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
              return obj != null ? jQuery2.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
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
          promise.promise(deferred);
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
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
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
            var className, i, self, classNames;
            if (isValidValue) {
              i = 0;
              self = jQuery2(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
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
            var self = jQuery2(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
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
        var selector, type, response, self = this, off = url.indexOf(" ");
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
        if (self.length > 0) {
          jQuery2.ajax({
            url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
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

  // node_modules/jquery-ui-dist/jquery-ui.js
  var require_jquery_ui = __commonJS(() => {
    /*! jQuery UI - v1.12.1 - 2016-09-14
    * http://jqueryui.com
    * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
    * Copyright jQuery Foundation and other contributors; Licensed MIT */
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
      } else {
        factory(jQuery);
      }
    })(function($2) {
      $2.ui = $2.ui || {};
      var version = $2.ui.version = "1.12.1";
      /*!
       * jQuery UI Widget 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
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
        _trigger: function(type, event, data2) {
          var prop, orig;
          var callback = this.options[type];
          data2 = data2 || {};
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
          this.element.trigger(event, data2);
          return !($2.isFunction(callback) && callback.apply(this.element[0], [event].concat(data2)) === false || event.isDefaultPrevented());
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
      var widget = $2.widget;
      /*!
       * jQuery UI Position 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       *
       * http://api.jqueryui.com/position/
       */
      (function() {
        var cachedScrollbarWidth, max = Math.max, abs = Math.abs, rhorizontal = /left|center|right/, rvertical = /top|center|bottom/, roffset = /[\+\-]\d+(\.[\d]+)?%?/, rposition = /^\w+/, rpercent = /%$/, _position = $2.fn.position;
        function getOffsets(offsets, width, height) {
          return [
            parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1),
            parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)
          ];
        }
        function parseCss(element, property) {
          return parseInt($2.css(element, property), 10) || 0;
        }
        function getDimensions(elem) {
          var raw = elem[0];
          if (raw.nodeType === 9) {
            return {
              width: elem.width(),
              height: elem.height(),
              offset: {top: 0, left: 0}
            };
          }
          if ($2.isWindow(raw)) {
            return {
              width: elem.width(),
              height: elem.height(),
              offset: {top: elem.scrollTop(), left: elem.scrollLeft()}
            };
          }
          if (raw.preventDefault) {
            return {
              width: 0,
              height: 0,
              offset: {top: raw.pageY, left: raw.pageX}
            };
          }
          return {
            width: elem.outerWidth(),
            height: elem.outerHeight(),
            offset: elem.offset()
          };
        }
        $2.position = {
          scrollbarWidth: function() {
            if (cachedScrollbarWidth !== void 0) {
              return cachedScrollbarWidth;
            }
            var w1, w2, div = $2("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), innerDiv = div.children()[0];
            $2("body").append(div);
            w1 = innerDiv.offsetWidth;
            div.css("overflow", "scroll");
            w2 = innerDiv.offsetWidth;
            if (w1 === w2) {
              w2 = div[0].clientWidth;
            }
            div.remove();
            return cachedScrollbarWidth = w1 - w2;
          },
          getScrollInfo: function(within) {
            var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"), overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"), hasOverflowX = overflowX === "scroll" || overflowX === "auto" && within.width < within.element[0].scrollWidth, hasOverflowY = overflowY === "scroll" || overflowY === "auto" && within.height < within.element[0].scrollHeight;
            return {
              width: hasOverflowY ? $2.position.scrollbarWidth() : 0,
              height: hasOverflowX ? $2.position.scrollbarWidth() : 0
            };
          },
          getWithinInfo: function(element) {
            var withinElement = $2(element || window), isWindow = $2.isWindow(withinElement[0]), isDocument = !!withinElement[0] && withinElement[0].nodeType === 9, hasOffset = !isWindow && !isDocument;
            return {
              element: withinElement,
              isWindow,
              isDocument,
              offset: hasOffset ? $2(element).offset() : {left: 0, top: 0},
              scrollLeft: withinElement.scrollLeft(),
              scrollTop: withinElement.scrollTop(),
              width: withinElement.outerWidth(),
              height: withinElement.outerHeight()
            };
          }
        };
        $2.fn.position = function(options) {
          if (!options || !options.of) {
            return _position.apply(this, arguments);
          }
          options = $2.extend({}, options);
          var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, target = $2(options.of), within = $2.position.getWithinInfo(options.within), scrollInfo = $2.position.getScrollInfo(within), collision = (options.collision || "flip").split(" "), offsets = {};
          dimensions = getDimensions(target);
          if (target[0].preventDefault) {
            options.at = "left top";
          }
          targetWidth = dimensions.width;
          targetHeight = dimensions.height;
          targetOffset = dimensions.offset;
          basePosition = $2.extend({}, targetOffset);
          $2.each(["my", "at"], function() {
            var pos = (options[this] || "").split(" "), horizontalOffset, verticalOffset;
            if (pos.length === 1) {
              pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"];
            }
            pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
            pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";
            horizontalOffset = roffset.exec(pos[0]);
            verticalOffset = roffset.exec(pos[1]);
            offsets[this] = [
              horizontalOffset ? horizontalOffset[0] : 0,
              verticalOffset ? verticalOffset[0] : 0
            ];
            options[this] = [
              rposition.exec(pos[0])[0],
              rposition.exec(pos[1])[0]
            ];
          });
          if (collision.length === 1) {
            collision[1] = collision[0];
          }
          if (options.at[0] === "right") {
            basePosition.left += targetWidth;
          } else if (options.at[0] === "center") {
            basePosition.left += targetWidth / 2;
          }
          if (options.at[1] === "bottom") {
            basePosition.top += targetHeight;
          } else if (options.at[1] === "center") {
            basePosition.top += targetHeight / 2;
          }
          atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
          basePosition.left += atOffset[0];
          basePosition.top += atOffset[1];
          return this.each(function() {
            var collisionPosition, using, elem = $2(this), elemWidth = elem.outerWidth(), elemHeight = elem.outerHeight(), marginLeft = parseCss(this, "marginLeft"), marginTop = parseCss(this, "marginTop"), collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width, collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height, position2 = $2.extend({}, basePosition), myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
            if (options.my[0] === "right") {
              position2.left -= elemWidth;
            } else if (options.my[0] === "center") {
              position2.left -= elemWidth / 2;
            }
            if (options.my[1] === "bottom") {
              position2.top -= elemHeight;
            } else if (options.my[1] === "center") {
              position2.top -= elemHeight / 2;
            }
            position2.left += myOffset[0];
            position2.top += myOffset[1];
            collisionPosition = {
              marginLeft,
              marginTop
            };
            $2.each(["left", "top"], function(i, dir) {
              if ($2.ui.position[collision[i]]) {
                $2.ui.position[collision[i]][dir](position2, {
                  targetWidth,
                  targetHeight,
                  elemWidth,
                  elemHeight,
                  collisionPosition,
                  collisionWidth,
                  collisionHeight,
                  offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
                  my: options.my,
                  at: options.at,
                  within,
                  elem
                });
              }
            });
            if (options.using) {
              using = function(props) {
                var left = targetOffset.left - position2.left, right = left + targetWidth - elemWidth, top = targetOffset.top - position2.top, bottom = top + targetHeight - elemHeight, feedback = {
                  target: {
                    element: target,
                    left: targetOffset.left,
                    top: targetOffset.top,
                    width: targetWidth,
                    height: targetHeight
                  },
                  element: {
                    element: elem,
                    left: position2.left,
                    top: position2.top,
                    width: elemWidth,
                    height: elemHeight
                  },
                  horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                  vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                };
                if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
                  feedback.horizontal = "center";
                }
                if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
                  feedback.vertical = "middle";
                }
                if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
                  feedback.important = "horizontal";
                } else {
                  feedback.important = "vertical";
                }
                options.using.call(this, props, feedback);
              };
            }
            elem.offset($2.extend(position2, {using}));
          });
        };
        $2.ui.position = {
          fit: {
            left: function(position2, data2) {
              var within = data2.within, withinOffset = within.isWindow ? within.scrollLeft : within.offset.left, outerWidth = within.width, collisionPosLeft = position2.left - data2.collisionPosition.marginLeft, overLeft = withinOffset - collisionPosLeft, overRight = collisionPosLeft + data2.collisionWidth - outerWidth - withinOffset, newOverRight;
              if (data2.collisionWidth > outerWidth) {
                if (overLeft > 0 && overRight <= 0) {
                  newOverRight = position2.left + overLeft + data2.collisionWidth - outerWidth - withinOffset;
                  position2.left += overLeft - newOverRight;
                } else if (overRight > 0 && overLeft <= 0) {
                  position2.left = withinOffset;
                } else {
                  if (overLeft > overRight) {
                    position2.left = withinOffset + outerWidth - data2.collisionWidth;
                  } else {
                    position2.left = withinOffset;
                  }
                }
              } else if (overLeft > 0) {
                position2.left += overLeft;
              } else if (overRight > 0) {
                position2.left -= overRight;
              } else {
                position2.left = max(position2.left - collisionPosLeft, position2.left);
              }
            },
            top: function(position2, data2) {
              var within = data2.within, withinOffset = within.isWindow ? within.scrollTop : within.offset.top, outerHeight = data2.within.height, collisionPosTop = position2.top - data2.collisionPosition.marginTop, overTop = withinOffset - collisionPosTop, overBottom = collisionPosTop + data2.collisionHeight - outerHeight - withinOffset, newOverBottom;
              if (data2.collisionHeight > outerHeight) {
                if (overTop > 0 && overBottom <= 0) {
                  newOverBottom = position2.top + overTop + data2.collisionHeight - outerHeight - withinOffset;
                  position2.top += overTop - newOverBottom;
                } else if (overBottom > 0 && overTop <= 0) {
                  position2.top = withinOffset;
                } else {
                  if (overTop > overBottom) {
                    position2.top = withinOffset + outerHeight - data2.collisionHeight;
                  } else {
                    position2.top = withinOffset;
                  }
                }
              } else if (overTop > 0) {
                position2.top += overTop;
              } else if (overBottom > 0) {
                position2.top -= overBottom;
              } else {
                position2.top = max(position2.top - collisionPosTop, position2.top);
              }
            }
          },
          flip: {
            left: function(position2, data2) {
              var within = data2.within, withinOffset = within.offset.left + within.scrollLeft, outerWidth = within.width, offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left, collisionPosLeft = position2.left - data2.collisionPosition.marginLeft, overLeft = collisionPosLeft - offsetLeft, overRight = collisionPosLeft + data2.collisionWidth - outerWidth - offsetLeft, myOffset = data2.my[0] === "left" ? -data2.elemWidth : data2.my[0] === "right" ? data2.elemWidth : 0, atOffset = data2.at[0] === "left" ? data2.targetWidth : data2.at[0] === "right" ? -data2.targetWidth : 0, offset = -2 * data2.offset[0], newOverRight, newOverLeft;
              if (overLeft < 0) {
                newOverRight = position2.left + myOffset + atOffset + offset + data2.collisionWidth - outerWidth - withinOffset;
                if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                  position2.left += myOffset + atOffset + offset;
                }
              } else if (overRight > 0) {
                newOverLeft = position2.left - data2.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                  position2.left += myOffset + atOffset + offset;
                }
              }
            },
            top: function(position2, data2) {
              var within = data2.within, withinOffset = within.offset.top + within.scrollTop, outerHeight = within.height, offsetTop = within.isWindow ? within.scrollTop : within.offset.top, collisionPosTop = position2.top - data2.collisionPosition.marginTop, overTop = collisionPosTop - offsetTop, overBottom = collisionPosTop + data2.collisionHeight - outerHeight - offsetTop, top = data2.my[1] === "top", myOffset = top ? -data2.elemHeight : data2.my[1] === "bottom" ? data2.elemHeight : 0, atOffset = data2.at[1] === "top" ? data2.targetHeight : data2.at[1] === "bottom" ? -data2.targetHeight : 0, offset = -2 * data2.offset[1], newOverTop, newOverBottom;
              if (overTop < 0) {
                newOverBottom = position2.top + myOffset + atOffset + offset + data2.collisionHeight - outerHeight - withinOffset;
                if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                  position2.top += myOffset + atOffset + offset;
                }
              } else if (overBottom > 0) {
                newOverTop = position2.top - data2.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                  position2.top += myOffset + atOffset + offset;
                }
              }
            }
          },
          flipfit: {
            left: function() {
              $2.ui.position.flip.left.apply(this, arguments);
              $2.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
              $2.ui.position.flip.top.apply(this, arguments);
              $2.ui.position.fit.top.apply(this, arguments);
            }
          }
        };
      })();
      var position = $2.ui.position;
      /*!
       * jQuery UI :data 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var data = $2.extend($2.expr[":"], {
        data: $2.expr.createPseudo ? $2.expr.createPseudo(function(dataName) {
          return function(elem) {
            return !!$2.data(elem, dataName);
          };
        }) : function(elem, i, match) {
          return !!$2.data(elem, match[3]);
        }
      });
      /*!
       * jQuery UI Disable Selection 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var disableSelection = $2.fn.extend({
        disableSelection: function() {
          var eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
          return function() {
            return this.on(eventType + ".ui-disableSelection", function(event) {
              event.preventDefault();
            });
          };
        }(),
        enableSelection: function() {
          return this.off(".ui-disableSelection");
        }
      });
      /*!
       * jQuery UI Effects 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var dataSpace = "ui-effects-", dataSpaceStyle = "ui-effects-style", dataSpaceAnimated = "ui-effects-animated", jQuery2 = $2;
      $2.effects = {
        effect: {}
      };
      /*!
       * jQuery Color Animations v2.1.2
       * https://github.com/jquery/jquery-color
       *
       * Copyright 2014 jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       *
       * Date: Wed Jan 16 08:47:09 2013 -0600
       */
      (function(jQuery3, undefined2) {
        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", rplusequals = /^([\-+])=\s*(\d+\.?\d*)/, stringParsers = [{
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(execResult) {
            return [
              execResult[1],
              execResult[2],
              execResult[3],
              execResult[4]
            ];
          }
        }, {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(execResult) {
            return [
              execResult[1] * 2.55,
              execResult[2] * 2.55,
              execResult[3] * 2.55,
              execResult[4]
            ];
          }
        }, {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function(execResult) {
            return [
              parseInt(execResult[1], 16),
              parseInt(execResult[2], 16),
              parseInt(execResult[3], 16)
            ];
          }
        }, {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function(execResult) {
            return [
              parseInt(execResult[1] + execResult[1], 16),
              parseInt(execResult[2] + execResult[2], 16),
              parseInt(execResult[3] + execResult[3], 16)
            ];
          }
        }, {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function(execResult) {
            return [
              execResult[1],
              execResult[2] / 100,
              execResult[3] / 100,
              execResult[4]
            ];
          }
        }], color = jQuery3.Color = function(color2, green, blue, alpha) {
          return new jQuery3.Color.fn.parse(color2, green, blue, alpha);
        }, spaces = {
          rgba: {
            props: {
              red: {
                idx: 0,
                type: "byte"
              },
              green: {
                idx: 1,
                type: "byte"
              },
              blue: {
                idx: 2,
                type: "byte"
              }
            }
          },
          hsla: {
            props: {
              hue: {
                idx: 0,
                type: "degrees"
              },
              saturation: {
                idx: 1,
                type: "percent"
              },
              lightness: {
                idx: 2,
                type: "percent"
              }
            }
          }
        }, propTypes = {
          byte: {
            floor: true,
            max: 255
          },
          percent: {
            max: 1
          },
          degrees: {
            mod: 360,
            floor: true
          }
        }, support = color.support = {}, supportElem = jQuery3("<p>")[0], colors, each = jQuery3.each;
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
        each(spaces, function(spaceName, space) {
          space.cache = "_" + spaceName;
          space.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
          };
        });
        function clamp(value, prop, allowEmpty) {
          var type = propTypes[prop.type] || {};
          if (value == null) {
            return allowEmpty || !prop.def ? null : prop.def;
          }
          value = type.floor ? ~~value : parseFloat(value);
          if (isNaN(value)) {
            return prop.def;
          }
          if (type.mod) {
            return (value + type.mod) % type.mod;
          }
          return 0 > value ? 0 : type.max < value ? type.max : value;
        }
        function stringParse(string) {
          var inst = color(), rgba = inst._rgba = [];
          string = string.toLowerCase();
          each(stringParsers, function(i, parser) {
            var parsed, match = parser.re.exec(string), values = match && parser.parse(match), spaceName = parser.space || "rgba";
            if (values) {
              parsed = inst[spaceName](values);
              inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
              rgba = inst._rgba = parsed._rgba;
              return false;
            }
          });
          if (rgba.length) {
            if (rgba.join() === "0,0,0,0") {
              jQuery3.extend(rgba, colors.transparent);
            }
            return inst;
          }
          return colors[string];
        }
        color.fn = jQuery3.extend(color.prototype, {
          parse: function(red, green, blue, alpha) {
            if (red === undefined2) {
              this._rgba = [null, null, null, null];
              return this;
            }
            if (red.jquery || red.nodeType) {
              red = jQuery3(red).css(green);
              green = undefined2;
            }
            var inst = this, type = jQuery3.type(red), rgba = this._rgba = [];
            if (green !== undefined2) {
              red = [red, green, blue, alpha];
              type = "array";
            }
            if (type === "string") {
              return this.parse(stringParse(red) || colors._default);
            }
            if (type === "array") {
              each(spaces.rgba.props, function(key, prop) {
                rgba[prop.idx] = clamp(red[prop.idx], prop);
              });
              return this;
            }
            if (type === "object") {
              if (red instanceof color) {
                each(spaces, function(spaceName, space) {
                  if (red[space.cache]) {
                    inst[space.cache] = red[space.cache].slice();
                  }
                });
              } else {
                each(spaces, function(spaceName, space) {
                  var cache = space.cache;
                  each(space.props, function(key, prop) {
                    if (!inst[cache] && space.to) {
                      if (key === "alpha" || red[key] == null) {
                        return;
                      }
                      inst[cache] = space.to(inst._rgba);
                    }
                    inst[cache][prop.idx] = clamp(red[key], prop, true);
                  });
                  if (inst[cache] && jQuery3.inArray(null, inst[cache].slice(0, 3)) < 0) {
                    inst[cache][3] = 1;
                    if (space.from) {
                      inst._rgba = space.from(inst[cache]);
                    }
                  }
                });
              }
              return this;
            }
          },
          is: function(compare) {
            var is = color(compare), same = true, inst = this;
            each(spaces, function(_, space) {
              var localCache, isCache = is[space.cache];
              if (isCache) {
                localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                each(space.props, function(_2, prop) {
                  if (isCache[prop.idx] != null) {
                    same = isCache[prop.idx] === localCache[prop.idx];
                    return same;
                  }
                });
              }
              return same;
            });
            return same;
          },
          _space: function() {
            var used = [], inst = this;
            each(spaces, function(spaceName, space) {
              if (inst[space.cache]) {
                used.push(spaceName);
              }
            });
            return used.pop();
          },
          transition: function(other, distance) {
            var end = color(other), spaceName = end._space(), space = spaces[spaceName], startColor = this.alpha() === 0 ? color("transparent") : this, start = startColor[space.cache] || space.to(startColor._rgba), result = start.slice();
            end = end[space.cache];
            each(space.props, function(key, prop) {
              var index = prop.idx, startValue = start[index], endValue = end[index], type = propTypes[prop.type] || {};
              if (endValue === null) {
                return;
              }
              if (startValue === null) {
                result[index] = endValue;
              } else {
                if (type.mod) {
                  if (endValue - startValue > type.mod / 2) {
                    startValue += type.mod;
                  } else if (startValue - endValue > type.mod / 2) {
                    startValue -= type.mod;
                  }
                }
                result[index] = clamp((endValue - startValue) * distance + startValue, prop);
              }
            });
            return this[spaceName](result);
          },
          blend: function(opaque) {
            if (this._rgba[3] === 1) {
              return this;
            }
            var rgb = this._rgba.slice(), a = rgb.pop(), blend = color(opaque)._rgba;
            return color(jQuery3.map(rgb, function(v, i) {
              return (1 - a) * blend[i] + a * v;
            }));
          },
          toRgbaString: function() {
            var prefix = "rgba(", rgba = jQuery3.map(this._rgba, function(v, i) {
              return v == null ? i > 2 ? 1 : 0 : v;
            });
            if (rgba[3] === 1) {
              rgba.pop();
              prefix = "rgb(";
            }
            return prefix + rgba.join() + ")";
          },
          toHslaString: function() {
            var prefix = "hsla(", hsla = jQuery3.map(this.hsla(), function(v, i) {
              if (v == null) {
                v = i > 2 ? 1 : 0;
              }
              if (i && i < 3) {
                v = Math.round(v * 100) + "%";
              }
              return v;
            });
            if (hsla[3] === 1) {
              hsla.pop();
              prefix = "hsl(";
            }
            return prefix + hsla.join() + ")";
          },
          toHexString: function(includeAlpha) {
            var rgba = this._rgba.slice(), alpha = rgba.pop();
            if (includeAlpha) {
              rgba.push(~~(alpha * 255));
            }
            return "#" + jQuery3.map(rgba, function(v) {
              v = (v || 0).toString(16);
              return v.length === 1 ? "0" + v : v;
            }).join("");
          },
          toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
          }
        });
        color.fn.parse.prototype = color.fn;
        function hue2rgb(p, q, h) {
          h = (h + 1) % 1;
          if (h * 6 < 1) {
            return p + (q - p) * h * 6;
          }
          if (h * 2 < 1) {
            return q;
          }
          if (h * 3 < 2) {
            return p + (q - p) * (2 / 3 - h) * 6;
          }
          return p;
        }
        spaces.hsla.to = function(rgba) {
          if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
            return [null, null, null, rgba[3]];
          }
          var r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3], max = Math.max(r, g, b), min = Math.min(r, g, b), diff = max - min, add = max + min, l = add * 0.5, h, s;
          if (min === max) {
            h = 0;
          } else if (r === max) {
            h = 60 * (g - b) / diff + 360;
          } else if (g === max) {
            h = 60 * (b - r) / diff + 120;
          } else {
            h = 60 * (r - g) / diff + 240;
          }
          if (diff === 0) {
            s = 0;
          } else if (l <= 0.5) {
            s = diff / add;
          } else {
            s = diff / (2 - add);
          }
          return [Math.round(h) % 360, s, l, a == null ? 1 : a];
        };
        spaces.hsla.from = function(hsla) {
          if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
            return [null, null, null, hsla[3]];
          }
          var h = hsla[0] / 360, s = hsla[1], l = hsla[2], a = hsla[3], q = l <= 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
          return [
            Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
            Math.round(hue2rgb(p, q, h) * 255),
            Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
            a
          ];
        };
        each(spaces, function(spaceName, space) {
          var props = space.props, cache = space.cache, to = space.to, from = space.from;
          color.fn[spaceName] = function(value) {
            if (to && !this[cache]) {
              this[cache] = to(this._rgba);
            }
            if (value === undefined2) {
              return this[cache].slice();
            }
            var ret, type = jQuery3.type(value), arr = type === "array" || type === "object" ? value : arguments, local = this[cache].slice();
            each(props, function(key, prop) {
              var val = arr[type === "object" ? key : prop.idx];
              if (val == null) {
                val = local[prop.idx];
              }
              local[prop.idx] = clamp(val, prop);
            });
            if (from) {
              ret = color(from(local));
              ret[cache] = local;
              return ret;
            } else {
              return color(local);
            }
          };
          each(props, function(key, prop) {
            if (color.fn[key]) {
              return;
            }
            color.fn[key] = function(value) {
              var vtype = jQuery3.type(value), fn = key === "alpha" ? this._hsla ? "hsla" : "rgba" : spaceName, local = this[fn](), cur = local[prop.idx], match;
              if (vtype === "undefined") {
                return cur;
              }
              if (vtype === "function") {
                value = value.call(this, cur);
                vtype = jQuery3.type(value);
              }
              if (value == null && prop.empty) {
                return this;
              }
              if (vtype === "string") {
                match = rplusequals.exec(value);
                if (match) {
                  value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
                }
              }
              local[prop.idx] = value;
              return this[fn](local);
            };
          });
        });
        color.hook = function(hook) {
          var hooks = hook.split(" ");
          each(hooks, function(i, hook2) {
            jQuery3.cssHooks[hook2] = {
              set: function(elem, value) {
                var parsed, curElem, backgroundColor = "";
                if (value !== "transparent" && (jQuery3.type(value) !== "string" || (parsed = stringParse(value)))) {
                  value = color(parsed || value);
                  if (!support.rgba && value._rgba[3] !== 1) {
                    curElem = hook2 === "backgroundColor" ? elem.parentNode : elem;
                    while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
                      try {
                        backgroundColor = jQuery3.css(curElem, "backgroundColor");
                        curElem = curElem.parentNode;
                      } catch (e) {
                      }
                    }
                    value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
                  }
                  value = value.toRgbaString();
                }
                try {
                  elem.style[hook2] = value;
                } catch (e) {
                }
              }
            };
            jQuery3.fx.step[hook2] = function(fx) {
              if (!fx.colorInit) {
                fx.start = color(fx.elem, hook2);
                fx.end = color(fx.end);
                fx.colorInit = true;
              }
              jQuery3.cssHooks[hook2].set(fx.elem, fx.start.transition(fx.end, fx.pos));
            };
          });
        };
        color.hook(stepHooks);
        jQuery3.cssHooks.borderColor = {
          expand: function(value) {
            var expanded = {};
            each(["Top", "Right", "Bottom", "Left"], function(i, part) {
              expanded["border" + part + "Color"] = value;
            });
            return expanded;
          }
        };
        colors = jQuery3.Color.names = {
          aqua: "#00ffff",
          black: "#000000",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          gray: "#808080",
          green: "#008000",
          lime: "#00ff00",
          maroon: "#800000",
          navy: "#000080",
          olive: "#808000",
          purple: "#800080",
          red: "#ff0000",
          silver: "#c0c0c0",
          teal: "#008080",
          white: "#ffffff",
          yellow: "#ffff00",
          transparent: [null, null, null, 0],
          _default: "#ffffff"
        };
      })(jQuery2);
      (function() {
        var classAnimationActions = ["add", "remove", "toggle"], shorthandStyles = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        };
        $2.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(_, prop) {
          $2.fx.step[prop] = function(fx) {
            if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
              jQuery2.style(fx.elem, prop, fx.end);
              fx.setAttr = true;
            }
          };
        });
        function getElementStyles(elem) {
          var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle, styles = {};
          if (style && style.length && style[0] && style[style[0]]) {
            len = style.length;
            while (len--) {
              key = style[len];
              if (typeof style[key] === "string") {
                styles[$2.camelCase(key)] = style[key];
              }
            }
          } else {
            for (key in style) {
              if (typeof style[key] === "string") {
                styles[key] = style[key];
              }
            }
          }
          return styles;
        }
        function styleDifference(oldStyle, newStyle) {
          var diff = {}, name, value;
          for (name in newStyle) {
            value = newStyle[name];
            if (oldStyle[name] !== value) {
              if (!shorthandStyles[name]) {
                if ($2.fx.step[name] || !isNaN(parseFloat(value))) {
                  diff[name] = value;
                }
              }
            }
          }
          return diff;
        }
        if (!$2.fn.addBack) {
          $2.fn.addBack = function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          };
        }
        $2.effects.animateClass = function(value, duration, easing, callback) {
          var o = $2.speed(duration, easing, callback);
          return this.queue(function() {
            var animated = $2(this), baseClass = animated.attr("class") || "", applyClassChange, allAnimations = o.children ? animated.find("*").addBack() : animated;
            allAnimations = allAnimations.map(function() {
              var el = $2(this);
              return {
                el,
                start: getElementStyles(this)
              };
            });
            applyClassChange = function() {
              $2.each(classAnimationActions, function(i, action) {
                if (value[action]) {
                  animated[action + "Class"](value[action]);
                }
              });
            };
            applyClassChange();
            allAnimations = allAnimations.map(function() {
              this.end = getElementStyles(this.el[0]);
              this.diff = styleDifference(this.start, this.end);
              return this;
            });
            animated.attr("class", baseClass);
            allAnimations = allAnimations.map(function() {
              var styleInfo = this, dfd = $2.Deferred(), opts = $2.extend({}, o, {
                queue: false,
                complete: function() {
                  dfd.resolve(styleInfo);
                }
              });
              this.el.animate(this.diff, opts);
              return dfd.promise();
            });
            $2.when.apply($2, allAnimations.get()).done(function() {
              applyClassChange();
              $2.each(arguments, function() {
                var el = this.el;
                $2.each(this.diff, function(key) {
                  el.css(key, "");
                });
              });
              o.complete.call(animated[0]);
            });
          });
        };
        $2.fn.extend({
          addClass: function(orig) {
            return function(classNames, speed, easing, callback) {
              return speed ? $2.effects.animateClass.call(this, {add: classNames}, speed, easing, callback) : orig.apply(this, arguments);
            };
          }($2.fn.addClass),
          removeClass: function(orig) {
            return function(classNames, speed, easing, callback) {
              return arguments.length > 1 ? $2.effects.animateClass.call(this, {remove: classNames}, speed, easing, callback) : orig.apply(this, arguments);
            };
          }($2.fn.removeClass),
          toggleClass: function(orig) {
            return function(classNames, force, speed, easing, callback) {
              if (typeof force === "boolean" || force === void 0) {
                if (!speed) {
                  return orig.apply(this, arguments);
                } else {
                  return $2.effects.animateClass.call(this, force ? {add: classNames} : {remove: classNames}, speed, easing, callback);
                }
              } else {
                return $2.effects.animateClass.call(this, {toggle: classNames}, force, speed, easing);
              }
            };
          }($2.fn.toggleClass),
          switchClass: function(remove, add, speed, easing, callback) {
            return $2.effects.animateClass.call(this, {
              add,
              remove
            }, speed, easing, callback);
          }
        });
      })();
      (function() {
        if ($2.expr && $2.expr.filters && $2.expr.filters.animated) {
          $2.expr.filters.animated = function(orig) {
            return function(elem) {
              return !!$2(elem).data(dataSpaceAnimated) || orig(elem);
            };
          }($2.expr.filters.animated);
        }
        if ($2.uiBackCompat !== false) {
          $2.extend($2.effects, {
            save: function(element, set) {
              var i = 0, length = set.length;
              for (; i < length; i++) {
                if (set[i] !== null) {
                  element.data(dataSpace + set[i], element[0].style[set[i]]);
                }
              }
            },
            restore: function(element, set) {
              var val, i = 0, length = set.length;
              for (; i < length; i++) {
                if (set[i] !== null) {
                  val = element.data(dataSpace + set[i]);
                  element.css(set[i], val);
                }
              }
            },
            setMode: function(el, mode) {
              if (mode === "toggle") {
                mode = el.is(":hidden") ? "show" : "hide";
              }
              return mode;
            },
            createWrapper: function(element) {
              if (element.parent().is(".ui-effects-wrapper")) {
                return element.parent();
              }
              var props = {
                width: element.outerWidth(true),
                height: element.outerHeight(true),
                float: element.css("float")
              }, wrapper = $2("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
              }), size = {
                width: element.width(),
                height: element.height()
              }, active = document.activeElement;
              try {
                active.id;
              } catch (e) {
                active = document.body;
              }
              element.wrap(wrapper);
              if (element[0] === active || $2.contains(element[0], active)) {
                $2(active).trigger("focus");
              }
              wrapper = element.parent();
              if (element.css("position") === "static") {
                wrapper.css({position: "relative"});
                element.css({position: "relative"});
              } else {
                $2.extend(props, {
                  position: element.css("position"),
                  zIndex: element.css("z-index")
                });
                $2.each(["top", "left", "bottom", "right"], function(i, pos) {
                  props[pos] = element.css(pos);
                  if (isNaN(parseInt(props[pos], 10))) {
                    props[pos] = "auto";
                  }
                });
                element.css({
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: "auto",
                  bottom: "auto"
                });
              }
              element.css(size);
              return wrapper.css(props).show();
            },
            removeWrapper: function(element) {
              var active = document.activeElement;
              if (element.parent().is(".ui-effects-wrapper")) {
                element.parent().replaceWith(element);
                if (element[0] === active || $2.contains(element[0], active)) {
                  $2(active).trigger("focus");
                }
              }
              return element;
            }
          });
        }
        $2.extend($2.effects, {
          version: "1.12.1",
          define: function(name, mode, effect2) {
            if (!effect2) {
              effect2 = mode;
              mode = "effect";
            }
            $2.effects.effect[name] = effect2;
            $2.effects.effect[name].mode = mode;
            return effect2;
          },
          scaledDimensions: function(element, percent, direction) {
            if (percent === 0) {
              return {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
              };
            }
            var x = direction !== "horizontal" ? (percent || 100) / 100 : 1, y = direction !== "vertical" ? (percent || 100) / 100 : 1;
            return {
              height: element.height() * y,
              width: element.width() * x,
              outerHeight: element.outerHeight() * y,
              outerWidth: element.outerWidth() * x
            };
          },
          clipToBox: function(animation) {
            return {
              width: animation.clip.right - animation.clip.left,
              height: animation.clip.bottom - animation.clip.top,
              left: animation.clip.left,
              top: animation.clip.top
            };
          },
          unshift: function(element, queueLength, count) {
            var queue = element.queue();
            if (queueLength > 1) {
              queue.splice.apply(queue, [1, 0].concat(queue.splice(queueLength, count)));
            }
            element.dequeue();
          },
          saveStyle: function(element) {
            element.data(dataSpaceStyle, element[0].style.cssText);
          },
          restoreStyle: function(element) {
            element[0].style.cssText = element.data(dataSpaceStyle) || "";
            element.removeData(dataSpaceStyle);
          },
          mode: function(element, mode) {
            var hidden = element.is(":hidden");
            if (mode === "toggle") {
              mode = hidden ? "show" : "hide";
            }
            if (hidden ? mode === "hide" : mode === "show") {
              mode = "none";
            }
            return mode;
          },
          getBaseline: function(origin, original) {
            var y, x;
            switch (origin[0]) {
              case "top":
                y = 0;
                break;
              case "middle":
                y = 0.5;
                break;
              case "bottom":
                y = 1;
                break;
              default:
                y = origin[0] / original.height;
            }
            switch (origin[1]) {
              case "left":
                x = 0;
                break;
              case "center":
                x = 0.5;
                break;
              case "right":
                x = 1;
                break;
              default:
                x = origin[1] / original.width;
            }
            return {
              x,
              y
            };
          },
          createPlaceholder: function(element) {
            var placeholder, cssPosition = element.css("position"), position2 = element.position();
            element.css({
              marginTop: element.css("marginTop"),
              marginBottom: element.css("marginBottom"),
              marginLeft: element.css("marginLeft"),
              marginRight: element.css("marginRight")
            }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());
            if (/^(static|relative)/.test(cssPosition)) {
              cssPosition = "absolute";
              placeholder = $2("<" + element[0].nodeName + ">").insertAfter(element).css({
                display: /^(inline|ruby)/.test(element.css("display")) ? "inline-block" : "block",
                visibility: "hidden",
                marginTop: element.css("marginTop"),
                marginBottom: element.css("marginBottom"),
                marginLeft: element.css("marginLeft"),
                marginRight: element.css("marginRight"),
                float: element.css("float")
              }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");
              element.data(dataSpace + "placeholder", placeholder);
            }
            element.css({
              position: cssPosition,
              left: position2.left,
              top: position2.top
            });
            return placeholder;
          },
          removePlaceholder: function(element) {
            var dataKey = dataSpace + "placeholder", placeholder = element.data(dataKey);
            if (placeholder) {
              placeholder.remove();
              element.removeData(dataKey);
            }
          },
          cleanUp: function(element) {
            $2.effects.restoreStyle(element);
            $2.effects.removePlaceholder(element);
          },
          setTransition: function(element, list, factor, value) {
            value = value || {};
            $2.each(list, function(i, x) {
              var unit = element.cssUnit(x);
              if (unit[0] > 0) {
                value[x] = unit[0] * factor + unit[1];
              }
            });
            return value;
          }
        });
        function _normalizeArguments(effect2, options, speed, callback) {
          if ($2.isPlainObject(effect2)) {
            options = effect2;
            effect2 = effect2.effect;
          }
          effect2 = {effect: effect2};
          if (options == null) {
            options = {};
          }
          if ($2.isFunction(options)) {
            callback = options;
            speed = null;
            options = {};
          }
          if (typeof options === "number" || $2.fx.speeds[options]) {
            callback = speed;
            speed = options;
            options = {};
          }
          if ($2.isFunction(speed)) {
            callback = speed;
            speed = null;
          }
          if (options) {
            $2.extend(effect2, options);
          }
          speed = speed || options.duration;
          effect2.duration = $2.fx.off ? 0 : typeof speed === "number" ? speed : speed in $2.fx.speeds ? $2.fx.speeds[speed] : $2.fx.speeds._default;
          effect2.complete = callback || options.complete;
          return effect2;
        }
        function standardAnimationOption(option) {
          if (!option || typeof option === "number" || $2.fx.speeds[option]) {
            return true;
          }
          if (typeof option === "string" && !$2.effects.effect[option]) {
            return true;
          }
          if ($2.isFunction(option)) {
            return true;
          }
          if (typeof option === "object" && !option.effect) {
            return true;
          }
          return false;
        }
        $2.fn.extend({
          effect: function() {
            var args = _normalizeArguments.apply(this, arguments), effectMethod = $2.effects.effect[args.effect], defaultMode = effectMethod.mode, queue = args.queue, queueName = queue || "fx", complete = args.complete, mode = args.mode, modes = [], prefilter = function(next) {
              var el = $2(this), normalizedMode = $2.effects.mode(el, mode) || defaultMode;
              el.data(dataSpaceAnimated, true);
              modes.push(normalizedMode);
              if (defaultMode && (normalizedMode === "show" || normalizedMode === defaultMode && normalizedMode === "hide")) {
                el.show();
              }
              if (!defaultMode || normalizedMode !== "none") {
                $2.effects.saveStyle(el);
              }
              if ($2.isFunction(next)) {
                next();
              }
            };
            if ($2.fx.off || !effectMethod) {
              if (mode) {
                return this[mode](args.duration, complete);
              } else {
                return this.each(function() {
                  if (complete) {
                    complete.call(this);
                  }
                });
              }
            }
            function run(next) {
              var elem = $2(this);
              function cleanup() {
                elem.removeData(dataSpaceAnimated);
                $2.effects.cleanUp(elem);
                if (args.mode === "hide") {
                  elem.hide();
                }
                done();
              }
              function done() {
                if ($2.isFunction(complete)) {
                  complete.call(elem[0]);
                }
                if ($2.isFunction(next)) {
                  next();
                }
              }
              args.mode = modes.shift();
              if ($2.uiBackCompat !== false && !defaultMode) {
                if (elem.is(":hidden") ? mode === "hide" : mode === "show") {
                  elem[mode]();
                  done();
                } else {
                  effectMethod.call(elem[0], args, done);
                }
              } else {
                if (args.mode === "none") {
                  elem[mode]();
                  done();
                } else {
                  effectMethod.call(elem[0], args, cleanup);
                }
              }
            }
            return queue === false ? this.each(prefilter).each(run) : this.queue(queueName, prefilter).queue(queueName, run);
          },
          show: function(orig) {
            return function(option) {
              if (standardAnimationOption(option)) {
                return orig.apply(this, arguments);
              } else {
                var args = _normalizeArguments.apply(this, arguments);
                args.mode = "show";
                return this.effect.call(this, args);
              }
            };
          }($2.fn.show),
          hide: function(orig) {
            return function(option) {
              if (standardAnimationOption(option)) {
                return orig.apply(this, arguments);
              } else {
                var args = _normalizeArguments.apply(this, arguments);
                args.mode = "hide";
                return this.effect.call(this, args);
              }
            };
          }($2.fn.hide),
          toggle: function(orig) {
            return function(option) {
              if (standardAnimationOption(option) || typeof option === "boolean") {
                return orig.apply(this, arguments);
              } else {
                var args = _normalizeArguments.apply(this, arguments);
                args.mode = "toggle";
                return this.effect.call(this, args);
              }
            };
          }($2.fn.toggle),
          cssUnit: function(key) {
            var style = this.css(key), val = [];
            $2.each(["em", "px", "%", "pt"], function(i, unit) {
              if (style.indexOf(unit) > 0) {
                val = [parseFloat(style), unit];
              }
            });
            return val;
          },
          cssClip: function(clipObj) {
            if (clipObj) {
              return this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " + clipObj.bottom + "px " + clipObj.left + "px)");
            }
            return parseClip(this.css("clip"), this);
          },
          transfer: function(options, done) {
            var element = $2(this), target = $2(options.to), targetFixed = target.css("position") === "fixed", body = $2("body"), fixTop = targetFixed ? body.scrollTop() : 0, fixLeft = targetFixed ? body.scrollLeft() : 0, endPosition = target.offset(), animation = {
              top: endPosition.top - fixTop,
              left: endPosition.left - fixLeft,
              height: target.innerHeight(),
              width: target.innerWidth()
            }, startPosition = element.offset(), transfer = $2("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({
              top: startPosition.top - fixTop,
              left: startPosition.left - fixLeft,
              height: element.innerHeight(),
              width: element.innerWidth(),
              position: targetFixed ? "fixed" : "absolute"
            }).animate(animation, options.duration, options.easing, function() {
              transfer.remove();
              if ($2.isFunction(done)) {
                done();
              }
            });
          }
        });
        function parseClip(str, element) {
          var outerWidth = element.outerWidth(), outerHeight = element.outerHeight(), clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/, values = clipRegex.exec(str) || ["", 0, outerWidth, outerHeight, 0];
          return {
            top: parseFloat(values[1]) || 0,
            right: values[2] === "auto" ? outerWidth : parseFloat(values[2]),
            bottom: values[3] === "auto" ? outerHeight : parseFloat(values[3]),
            left: parseFloat(values[4]) || 0
          };
        }
        $2.fx.step.clip = function(fx) {
          if (!fx.clipInit) {
            fx.start = $2(fx.elem).cssClip();
            if (typeof fx.end === "string") {
              fx.end = parseClip(fx.end, fx.elem);
            }
            fx.clipInit = true;
          }
          $2(fx.elem).cssClip({
            top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top,
            right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right,
            bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom,
            left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left
          });
        };
      })();
      (function() {
        var baseEasings = {};
        $2.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, name) {
          baseEasings[name] = function(p) {
            return Math.pow(p, i + 2);
          };
        });
        $2.extend(baseEasings, {
          Sine: function(p) {
            return 1 - Math.cos(p * Math.PI / 2);
          },
          Circ: function(p) {
            return 1 - Math.sqrt(1 - p * p);
          },
          Elastic: function(p) {
            return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
          },
          Back: function(p) {
            return p * p * (3 * p - 2);
          },
          Bounce: function(p) {
            var pow2, bounce = 4;
            while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {
            }
            return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
          }
        });
        $2.each(baseEasings, function(name, easeIn) {
          $2.easing["easeIn" + name] = easeIn;
          $2.easing["easeOut" + name] = function(p) {
            return 1 - easeIn(1 - p);
          };
          $2.easing["easeInOut" + name] = function(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
          };
        });
      })();
      var effect = $2.effects;
      /*!
       * jQuery UI Effects Blind 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectBlind = $2.effects.define("blind", "hide", function(options, done) {
        var map = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"]
        }, element = $2(this), direction = options.direction || "up", start = element.cssClip(), animate = {clip: $2.extend({}, start)}, placeholder = $2.effects.createPlaceholder(element);
        animate.clip[map[direction][0]] = animate.clip[map[direction][1]];
        if (options.mode === "show") {
          element.cssClip(animate.clip);
          if (placeholder) {
            placeholder.css($2.effects.clipToBox(animate));
          }
          animate.clip = start;
        }
        if (placeholder) {
          placeholder.animate($2.effects.clipToBox(animate), options.duration, options.easing);
        }
        element.animate(animate, {
          queue: false,
          duration: options.duration,
          easing: options.easing,
          complete: done
        });
      });
      /*!
       * jQuery UI Effects Bounce 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectBounce = $2.effects.define("bounce", function(options, done) {
        var upAnim, downAnim, refValue, element = $2(this), mode = options.mode, hide = mode === "hide", show = mode === "show", direction = options.direction || "up", distance = options.distance, times = options.times || 5, anims = times * 2 + (show || hide ? 1 : 0), speed = options.duration / anims, easing = options.easing, ref = direction === "up" || direction === "down" ? "top" : "left", motion = direction === "up" || direction === "left", i = 0, queuelen = element.queue().length;
        $2.effects.createPlaceholder(element);
        refValue = element.css(ref);
        if (!distance) {
          distance = element[ref === "top" ? "outerHeight" : "outerWidth"]() / 3;
        }
        if (show) {
          downAnim = {opacity: 1};
          downAnim[ref] = refValue;
          element.css("opacity", 0).css(ref, motion ? -distance * 2 : distance * 2).animate(downAnim, speed, easing);
        }
        if (hide) {
          distance = distance / Math.pow(2, times - 1);
        }
        downAnim = {};
        downAnim[ref] = refValue;
        for (; i < times; i++) {
          upAnim = {};
          upAnim[ref] = (motion ? "-=" : "+=") + distance;
          element.animate(upAnim, speed, easing).animate(downAnim, speed, easing);
          distance = hide ? distance * 2 : distance / 2;
        }
        if (hide) {
          upAnim = {opacity: 0};
          upAnim[ref] = (motion ? "-=" : "+=") + distance;
          element.animate(upAnim, speed, easing);
        }
        element.queue(done);
        $2.effects.unshift(element, queuelen, anims + 1);
      });
      /*!
       * jQuery UI Effects Clip 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectClip = $2.effects.define("clip", "hide", function(options, done) {
        var start, animate = {}, element = $2(this), direction = options.direction || "vertical", both = direction === "both", horizontal = both || direction === "horizontal", vertical = both || direction === "vertical";
        start = element.cssClip();
        animate.clip = {
          top: vertical ? (start.bottom - start.top) / 2 : start.top,
          right: horizontal ? (start.right - start.left) / 2 : start.right,
          bottom: vertical ? (start.bottom - start.top) / 2 : start.bottom,
          left: horizontal ? (start.right - start.left) / 2 : start.left
        };
        $2.effects.createPlaceholder(element);
        if (options.mode === "show") {
          element.cssClip(animate.clip);
          animate.clip = start;
        }
        element.animate(animate, {
          queue: false,
          duration: options.duration,
          easing: options.easing,
          complete: done
        });
      });
      /*!
       * jQuery UI Effects Drop 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectDrop = $2.effects.define("drop", "hide", function(options, done) {
        var distance, element = $2(this), mode = options.mode, show = mode === "show", direction = options.direction || "left", ref = direction === "up" || direction === "down" ? "top" : "left", motion = direction === "up" || direction === "left" ? "-=" : "+=", oppositeMotion = motion === "+=" ? "-=" : "+=", animation = {
          opacity: 0
        };
        $2.effects.createPlaceholder(element);
        distance = options.distance || element[ref === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        animation[ref] = motion + distance;
        if (show) {
          element.css(animation);
          animation[ref] = oppositeMotion + distance;
          animation.opacity = 1;
        }
        element.animate(animation, {
          queue: false,
          duration: options.duration,
          easing: options.easing,
          complete: done
        });
      });
      /*!
       * jQuery UI Effects Explode 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectExplode = $2.effects.define("explode", "hide", function(options, done) {
        var i, j, left, top, mx, my, rows = options.pieces ? Math.round(Math.sqrt(options.pieces)) : 3, cells = rows, element = $2(this), mode = options.mode, show = mode === "show", offset = element.show().css("visibility", "hidden").offset(), width = Math.ceil(element.outerWidth() / cells), height = Math.ceil(element.outerHeight() / rows), pieces = [];
        function childComplete() {
          pieces.push(this);
          if (pieces.length === rows * cells) {
            animComplete();
          }
        }
        for (i = 0; i < rows; i++) {
          top = offset.top + i * height;
          my = i - (rows - 1) / 2;
          for (j = 0; j < cells; j++) {
            left = offset.left + j * width;
            mx = j - (cells - 1) / 2;
            element.clone().appendTo("body").wrap("<div></div>").css({
              position: "absolute",
              visibility: "visible",
              left: -j * width,
              top: -i * height
            }).parent().addClass("ui-effects-explode").css({
              position: "absolute",
              overflow: "hidden",
              width,
              height,
              left: left + (show ? mx * width : 0),
              top: top + (show ? my * height : 0),
              opacity: show ? 0 : 1
            }).animate({
              left: left + (show ? 0 : mx * width),
              top: top + (show ? 0 : my * height),
              opacity: show ? 1 : 0
            }, options.duration || 500, options.easing, childComplete);
          }
        }
        function animComplete() {
          element.css({
            visibility: "visible"
          });
          $2(pieces).remove();
          done();
        }
      });
      /*!
       * jQuery UI Effects Fade 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectFade = $2.effects.define("fade", "toggle", function(options, done) {
        var show = options.mode === "show";
        $2(this).css("opacity", show ? 0 : 1).animate({
          opacity: show ? 1 : 0
        }, {
          queue: false,
          duration: options.duration,
          easing: options.easing,
          complete: done
        });
      });
      /*!
       * jQuery UI Effects Fold 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectFold = $2.effects.define("fold", "hide", function(options, done) {
        var element = $2(this), mode = options.mode, show = mode === "show", hide = mode === "hide", size = options.size || 15, percent = /([0-9]+)%/.exec(size), horizFirst = !!options.horizFirst, ref = horizFirst ? ["right", "bottom"] : ["bottom", "right"], duration = options.duration / 2, placeholder = $2.effects.createPlaceholder(element), start = element.cssClip(), animation1 = {clip: $2.extend({}, start)}, animation2 = {clip: $2.extend({}, start)}, distance = [start[ref[0]], start[ref[1]]], queuelen = element.queue().length;
        if (percent) {
          size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1];
        }
        animation1.clip[ref[0]] = size;
        animation2.clip[ref[0]] = size;
        animation2.clip[ref[1]] = 0;
        if (show) {
          element.cssClip(animation2.clip);
          if (placeholder) {
            placeholder.css($2.effects.clipToBox(animation2));
          }
          animation2.clip = start;
        }
        element.queue(function(next) {
          if (placeholder) {
            placeholder.animate($2.effects.clipToBox(animation1), duration, options.easing).animate($2.effects.clipToBox(animation2), duration, options.easing);
          }
          next();
        }).animate(animation1, duration, options.easing).animate(animation2, duration, options.easing).queue(done);
        $2.effects.unshift(element, queuelen, 4);
      });
      /*!
       * jQuery UI Effects Highlight 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectHighlight = $2.effects.define("highlight", "show", function(options, done) {
        var element = $2(this), animation = {
          backgroundColor: element.css("backgroundColor")
        };
        if (options.mode === "hide") {
          animation.opacity = 0;
        }
        $2.effects.saveStyle(element);
        element.css({
          backgroundImage: "none",
          backgroundColor: options.color || "#ffff99"
        }).animate(animation, {
          queue: false,
          duration: options.duration,
          easing: options.easing,
          complete: done
        });
      });
      /*!
       * jQuery UI Effects Size 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectSize = $2.effects.define("size", function(options, done) {
        var baseline, factor, temp, element = $2(this), cProps = ["fontSize"], vProps = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], hProps = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], mode = options.mode, restore = mode !== "effect", scale = options.scale || "both", origin = options.origin || ["middle", "center"], position2 = element.css("position"), pos = element.position(), original = $2.effects.scaledDimensions(element), from = options.from || original, to = options.to || $2.effects.scaledDimensions(element, 0);
        $2.effects.createPlaceholder(element);
        if (mode === "show") {
          temp = from;
          from = to;
          to = temp;
        }
        factor = {
          from: {
            y: from.height / original.height,
            x: from.width / original.width
          },
          to: {
            y: to.height / original.height,
            x: to.width / original.width
          }
        };
        if (scale === "box" || scale === "both") {
          if (factor.from.y !== factor.to.y) {
            from = $2.effects.setTransition(element, vProps, factor.from.y, from);
            to = $2.effects.setTransition(element, vProps, factor.to.y, to);
          }
          if (factor.from.x !== factor.to.x) {
            from = $2.effects.setTransition(element, hProps, factor.from.x, from);
            to = $2.effects.setTransition(element, hProps, factor.to.x, to);
          }
        }
        if (scale === "content" || scale === "both") {
          if (factor.from.y !== factor.to.y) {
            from = $2.effects.setTransition(element, cProps, factor.from.y, from);
            to = $2.effects.setTransition(element, cProps, factor.to.y, to);
          }
        }
        if (origin) {
          baseline = $2.effects.getBaseline(origin, original);
          from.top = (original.outerHeight - from.outerHeight) * baseline.y + pos.top;
          from.left = (original.outerWidth - from.outerWidth) * baseline.x + pos.left;
          to.top = (original.outerHeight - to.outerHeight) * baseline.y + pos.top;
          to.left = (original.outerWidth - to.outerWidth) * baseline.x + pos.left;
        }
        element.css(from);
        if (scale === "content" || scale === "both") {
          vProps = vProps.concat(["marginTop", "marginBottom"]).concat(cProps);
          hProps = hProps.concat(["marginLeft", "marginRight"]);
          element.find("*[width]").each(function() {
            var child = $2(this), childOriginal = $2.effects.scaledDimensions(child), childFrom = {
              height: childOriginal.height * factor.from.y,
              width: childOriginal.width * factor.from.x,
              outerHeight: childOriginal.outerHeight * factor.from.y,
              outerWidth: childOriginal.outerWidth * factor.from.x
            }, childTo = {
              height: childOriginal.height * factor.to.y,
              width: childOriginal.width * factor.to.x,
              outerHeight: childOriginal.height * factor.to.y,
              outerWidth: childOriginal.width * factor.to.x
            };
            if (factor.from.y !== factor.to.y) {
              childFrom = $2.effects.setTransition(child, vProps, factor.from.y, childFrom);
              childTo = $2.effects.setTransition(child, vProps, factor.to.y, childTo);
            }
            if (factor.from.x !== factor.to.x) {
              childFrom = $2.effects.setTransition(child, hProps, factor.from.x, childFrom);
              childTo = $2.effects.setTransition(child, hProps, factor.to.x, childTo);
            }
            if (restore) {
              $2.effects.saveStyle(child);
            }
            child.css(childFrom);
            child.animate(childTo, options.duration, options.easing, function() {
              if (restore) {
                $2.effects.restoreStyle(child);
              }
            });
          });
        }
        element.animate(to, {
          queue: false,
          duration: options.duration,
          easing: options.easing,
          complete: function() {
            var offset = element.offset();
            if (to.opacity === 0) {
              element.css("opacity", from.opacity);
            }
            if (!restore) {
              element.css("position", position2 === "static" ? "relative" : position2).offset(offset);
              $2.effects.saveStyle(element);
            }
            done();
          }
        });
      });
      /*!
       * jQuery UI Effects Scale 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectScale = $2.effects.define("scale", function(options, done) {
        var el = $2(this), mode = options.mode, percent = parseInt(options.percent, 10) || (parseInt(options.percent, 10) === 0 ? 0 : mode !== "effect" ? 0 : 100), newOptions = $2.extend(true, {
          from: $2.effects.scaledDimensions(el),
          to: $2.effects.scaledDimensions(el, percent, options.direction || "both"),
          origin: options.origin || ["middle", "center"]
        }, options);
        if (options.fade) {
          newOptions.from.opacity = 1;
          newOptions.to.opacity = 0;
        }
        $2.effects.effect.size.call(this, newOptions, done);
      });
      /*!
       * jQuery UI Effects Puff 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectPuff = $2.effects.define("puff", "hide", function(options, done) {
        var newOptions = $2.extend(true, {}, options, {
          fade: true,
          percent: parseInt(options.percent, 10) || 150
        });
        $2.effects.effect.scale.call(this, newOptions, done);
      });
      /*!
       * jQuery UI Effects Pulsate 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectPulsate = $2.effects.define("pulsate", "show", function(options, done) {
        var element = $2(this), mode = options.mode, show = mode === "show", hide = mode === "hide", showhide = show || hide, anims = (options.times || 5) * 2 + (showhide ? 1 : 0), duration = options.duration / anims, animateTo = 0, i = 1, queuelen = element.queue().length;
        if (show || !element.is(":visible")) {
          element.css("opacity", 0).show();
          animateTo = 1;
        }
        for (; i < anims; i++) {
          element.animate({opacity: animateTo}, duration, options.easing);
          animateTo = 1 - animateTo;
        }
        element.animate({opacity: animateTo}, duration, options.easing);
        element.queue(done);
        $2.effects.unshift(element, queuelen, anims + 1);
      });
      /*!
       * jQuery UI Effects Shake 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectShake = $2.effects.define("shake", function(options, done) {
        var i = 1, element = $2(this), direction = options.direction || "left", distance = options.distance || 20, times = options.times || 3, anims = times * 2 + 1, speed = Math.round(options.duration / anims), ref = direction === "up" || direction === "down" ? "top" : "left", positiveMotion = direction === "up" || direction === "left", animation = {}, animation1 = {}, animation2 = {}, queuelen = element.queue().length;
        $2.effects.createPlaceholder(element);
        animation[ref] = (positiveMotion ? "-=" : "+=") + distance;
        animation1[ref] = (positiveMotion ? "+=" : "-=") + distance * 2;
        animation2[ref] = (positiveMotion ? "-=" : "+=") + distance * 2;
        element.animate(animation, speed, options.easing);
        for (; i < times; i++) {
          element.animate(animation1, speed, options.easing).animate(animation2, speed, options.easing);
        }
        element.animate(animation1, speed, options.easing).animate(animation, speed / 2, options.easing).queue(done);
        $2.effects.unshift(element, queuelen, anims + 1);
      });
      /*!
       * jQuery UI Effects Slide 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effectsEffectSlide = $2.effects.define("slide", "show", function(options, done) {
        var startClip, startRef, element = $2(this), map = {
          up: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          right: ["left", "right"]
        }, mode = options.mode, direction = options.direction || "left", ref = direction === "up" || direction === "down" ? "top" : "left", positiveMotion = direction === "up" || direction === "left", distance = options.distance || element[ref === "top" ? "outerHeight" : "outerWidth"](true), animation = {};
        $2.effects.createPlaceholder(element);
        startClip = element.cssClip();
        startRef = element.position()[ref];
        animation[ref] = (positiveMotion ? -1 : 1) * distance + startRef;
        animation.clip = element.cssClip();
        animation.clip[map[direction][1]] = animation.clip[map[direction][0]];
        if (mode === "show") {
          element.cssClip(animation.clip);
          element.css(ref, animation[ref]);
          animation.clip = startClip;
          animation[ref] = startRef;
        }
        element.animate(animation, {
          queue: false,
          duration: options.duration,
          easing: options.easing,
          complete: done
        });
      });
      /*!
       * jQuery UI Effects Transfer 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var effect;
      if ($2.uiBackCompat !== false) {
        effect = $2.effects.define("transfer", function(options, done) {
          $2(this).transfer(options, done);
        });
      }
      var effectsEffectTransfer = effect;
      /*!
       * jQuery UI Focusable 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.ui.focusable = function(element, hasTabindex) {
        var map, mapName, img, focusableIfVisible, fieldset, nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
          map = element.parentNode;
          mapName = map.name;
          if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
            return false;
          }
          img = $2("img[usemap='#" + mapName + "']");
          return img.length > 0 && img.is(":visible");
        }
        if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
          focusableIfVisible = !element.disabled;
          if (focusableIfVisible) {
            fieldset = $2(element).closest("fieldset")[0];
            if (fieldset) {
              focusableIfVisible = !fieldset.disabled;
            }
          }
        } else if ("a" === nodeName) {
          focusableIfVisible = element.href || hasTabindex;
        } else {
          focusableIfVisible = hasTabindex;
        }
        return focusableIfVisible && $2(element).is(":visible") && visible($2(element));
      };
      function visible(element) {
        var visibility = element.css("visibility");
        while (visibility === "inherit") {
          element = element.parent();
          visibility = element.css("visibility");
        }
        return visibility !== "hidden";
      }
      $2.extend($2.expr[":"], {
        focusable: function(element) {
          return $2.ui.focusable(element, $2.attr(element, "tabindex") != null);
        }
      });
      var focusable = $2.ui.focusable;
      var form = $2.fn.form = function() {
        return typeof this[0].form === "string" ? this.closest("form") : $2(this[0].form);
      };
      /*!
       * jQuery UI Form Reset Mixin 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var formResetMixin = $2.ui.formResetMixin = {
        _formResetHandler: function() {
          var form2 = $2(this);
          setTimeout(function() {
            var instances = form2.data("ui-form-reset-instances");
            $2.each(instances, function() {
              this.refresh();
            });
          });
        },
        _bindFormResetHandler: function() {
          this.form = this.element.form();
          if (!this.form.length) {
            return;
          }
          var instances = this.form.data("ui-form-reset-instances") || [];
          if (!instances.length) {
            this.form.on("reset.ui-form-reset", this._formResetHandler);
          }
          instances.push(this);
          this.form.data("ui-form-reset-instances", instances);
        },
        _unbindFormResetHandler: function() {
          if (!this.form.length) {
            return;
          }
          var instances = this.form.data("ui-form-reset-instances");
          instances.splice($2.inArray(this, instances), 1);
          if (instances.length) {
            this.form.data("ui-form-reset-instances", instances);
          } else {
            this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
          }
        }
      };
      /*!
       * jQuery UI Support for jQuery core 1.7.x 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       *
       */
      if ($2.fn.jquery.substring(0, 3) === "1.7") {
        $2.each(["Width", "Height"], function(i, name) {
          var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], type = name.toLowerCase(), orig = {
            innerWidth: $2.fn.innerWidth,
            innerHeight: $2.fn.innerHeight,
            outerWidth: $2.fn.outerWidth,
            outerHeight: $2.fn.outerHeight
          };
          function reduce(elem, size, border, margin) {
            $2.each(side, function() {
              size -= parseFloat($2.css(elem, "padding" + this)) || 0;
              if (border) {
                size -= parseFloat($2.css(elem, "border" + this + "Width")) || 0;
              }
              if (margin) {
                size -= parseFloat($2.css(elem, "margin" + this)) || 0;
              }
            });
            return size;
          }
          $2.fn["inner" + name] = function(size) {
            if (size === void 0) {
              return orig["inner" + name].call(this);
            }
            return this.each(function() {
              $2(this).css(type, reduce(this, size) + "px");
            });
          };
          $2.fn["outer" + name] = function(size, margin) {
            if (typeof size !== "number") {
              return orig["outer" + name].call(this, size);
            }
            return this.each(function() {
              $2(this).css(type, reduce(this, size, true, margin) + "px");
            });
          };
        });
        $2.fn.addBack = function(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        };
      }
      ;
      /*!
       * jQuery UI Keycode 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var keycode = $2.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      };
      var escapeSelector = $2.ui.escapeSelector = function() {
        var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(selector) {
          return selector.replace(selectorEscape, "\\$1");
        };
      }();
      /*!
       * jQuery UI Labels 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var labels = $2.fn.labels = function() {
        var ancestor, selector, id, labels2, ancestors;
        if (this[0].labels && this[0].labels.length) {
          return this.pushStack(this[0].labels);
        }
        labels2 = this.eq(0).parents("label");
        id = this.attr("id");
        if (id) {
          ancestor = this.eq(0).parents().last();
          ancestors = ancestor.add(ancestor.length ? ancestor.siblings() : this.siblings());
          selector = "label[for='" + $2.ui.escapeSelector(id) + "']";
          labels2 = labels2.add(ancestors.find(selector).addBack(selector));
        }
        return this.pushStack(labels2);
      };
      /*!
       * jQuery UI Scroll Parent 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var scrollParent = $2.fn.scrollParent = function(includeHidden) {
        var position2 = this.css("position"), excludeStaticParent = position2 === "absolute", overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/, scrollParent2 = this.parents().filter(function() {
          var parent = $2(this);
          if (excludeStaticParent && parent.css("position") === "static") {
            return false;
          }
          return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
        }).eq(0);
        return position2 === "fixed" || !scrollParent2.length ? $2(this[0].ownerDocument || document) : scrollParent2;
      };
      /*!
       * jQuery UI Tabbable 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var tabbable = $2.extend($2.expr[":"], {
        tabbable: function(element) {
          var tabIndex = $2.attr(element, "tabindex"), hasTabindex = tabIndex != null;
          return (!hasTabindex || tabIndex >= 0) && $2.ui.focusable(element, hasTabindex);
        }
      });
      /*!
       * jQuery UI Unique ID 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var uniqueId = $2.fn.extend({
        uniqueId: function() {
          var uuid = 0;
          return function() {
            return this.each(function() {
              if (!this.id) {
                this.id = "ui-id-" + ++uuid;
              }
            });
          };
        }(),
        removeUniqueId: function() {
          return this.each(function() {
            if (/^ui-id-\d+$/.test(this.id)) {
              $2(this).removeAttr("id");
            }
          });
        }
      });
      /*!
       * jQuery UI Accordion 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var widgetsAccordion = $2.widget("ui.accordion", {
        version: "1.12.1",
        options: {
          active: 0,
          animate: {},
          classes: {
            "ui-accordion-header": "ui-corner-top",
            "ui-accordion-header-collapsed": "ui-corner-all",
            "ui-accordion-content": "ui-corner-bottom"
          },
          collapsible: false,
          event: "click",
          header: "> li > :first-child, > :not(li):even",
          heightStyle: "auto",
          icons: {
            activeHeader: "ui-icon-triangle-1-s",
            header: "ui-icon-triangle-1-e"
          },
          activate: null,
          beforeActivate: null
        },
        hideProps: {
          borderTopWidth: "hide",
          borderBottomWidth: "hide",
          paddingTop: "hide",
          paddingBottom: "hide",
          height: "hide"
        },
        showProps: {
          borderTopWidth: "show",
          borderBottomWidth: "show",
          paddingTop: "show",
          paddingBottom: "show",
          height: "show"
        },
        _create: function() {
          var options = this.options;
          this.prevShow = this.prevHide = $2();
          this._addClass("ui-accordion", "ui-widget ui-helper-reset");
          this.element.attr("role", "tablist");
          if (!options.collapsible && (options.active === false || options.active == null)) {
            options.active = 0;
          }
          this._processPanels();
          if (options.active < 0) {
            options.active += this.headers.length;
          }
          this._refresh();
        },
        _getCreateEventData: function() {
          return {
            header: this.active,
            panel: !this.active.length ? $2() : this.active.next()
          };
        },
        _createIcons: function() {
          var icon, children, icons = this.options.icons;
          if (icons) {
            icon = $2("<span>");
            this._addClass(icon, "ui-accordion-header-icon", "ui-icon " + icons.header);
            icon.prependTo(this.headers);
            children = this.active.children(".ui-accordion-header-icon");
            this._removeClass(children, icons.header)._addClass(children, null, icons.activeHeader)._addClass(this.headers, "ui-accordion-icons");
          }
        },
        _destroyIcons: function() {
          this._removeClass(this.headers, "ui-accordion-icons");
          this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
          var contents;
          this.element.removeAttr("role");
          this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
          this._destroyIcons();
          contents = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
          if (this.options.heightStyle !== "content") {
            contents.css("height", "");
          }
        },
        _setOption: function(key, value) {
          if (key === "active") {
            this._activate(value);
            return;
          }
          if (key === "event") {
            if (this.options.event) {
              this._off(this.headers, this.options.event);
            }
            this._setupEvents(value);
          }
          this._super(key, value);
          if (key === "collapsible" && !value && this.options.active === false) {
            this._activate(0);
          }
          if (key === "icons") {
            this._destroyIcons();
            if (value) {
              this._createIcons();
            }
          }
        },
        _setOptionDisabled: function(value) {
          this._super(value);
          this.element.attr("aria-disabled", value);
          this._toggleClass(null, "ui-state-disabled", !!value);
          this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!value);
        },
        _keydown: function(event) {
          if (event.altKey || event.ctrlKey) {
            return;
          }
          var keyCode = $2.ui.keyCode, length = this.headers.length, currentIndex = this.headers.index(event.target), toFocus = false;
          switch (event.keyCode) {
            case keyCode.RIGHT:
            case keyCode.DOWN:
              toFocus = this.headers[(currentIndex + 1) % length];
              break;
            case keyCode.LEFT:
            case keyCode.UP:
              toFocus = this.headers[(currentIndex - 1 + length) % length];
              break;
            case keyCode.SPACE:
            case keyCode.ENTER:
              this._eventHandler(event);
              break;
            case keyCode.HOME:
              toFocus = this.headers[0];
              break;
            case keyCode.END:
              toFocus = this.headers[length - 1];
              break;
          }
          if (toFocus) {
            $2(event.target).attr("tabIndex", -1);
            $2(toFocus).attr("tabIndex", 0);
            $2(toFocus).trigger("focus");
            event.preventDefault();
          }
        },
        _panelKeyDown: function(event) {
          if (event.keyCode === $2.ui.keyCode.UP && event.ctrlKey) {
            $2(event.currentTarget).prev().trigger("focus");
          }
        },
        refresh: function() {
          var options = this.options;
          this._processPanels();
          if (options.active === false && options.collapsible === true || !this.headers.length) {
            options.active = false;
            this.active = $2();
          } else if (options.active === false) {
            this._activate(0);
          } else if (this.active.length && !$2.contains(this.element[0], this.active[0])) {
            if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
              options.active = false;
              this.active = $2();
            } else {
              this._activate(Math.max(0, options.active - 1));
            }
          } else {
            options.active = this.headers.index(this.active);
          }
          this._destroyIcons();
          this._refresh();
        },
        _processPanels: function() {
          var prevHeaders = this.headers, prevPanels = this.panels;
          this.headers = this.element.find(this.options.header);
          this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
          this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
          this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
          if (prevPanels) {
            this._off(prevHeaders.not(this.headers));
            this._off(prevPanels.not(this.panels));
          }
        },
        _refresh: function() {
          var maxHeight, options = this.options, heightStyle = options.heightStyle, parent = this.element.parent();
          this.active = this._findActive(options.active);
          this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
          this._addClass(this.active.next(), "ui-accordion-content-active");
          this.active.next().show();
          this.headers.attr("role", "tab").each(function() {
            var header = $2(this), headerId = header.uniqueId().attr("id"), panel = header.next(), panelId = panel.uniqueId().attr("id");
            header.attr("aria-controls", panelId);
            panel.attr("aria-labelledby", headerId);
          }).next().attr("role", "tabpanel");
          this.headers.not(this.active).attr({
            "aria-selected": "false",
            "aria-expanded": "false",
            tabIndex: -1
          }).next().attr({
            "aria-hidden": "true"
          }).hide();
          if (!this.active.length) {
            this.headers.eq(0).attr("tabIndex", 0);
          } else {
            this.active.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0
            }).next().attr({
              "aria-hidden": "false"
            });
          }
          this._createIcons();
          this._setupEvents(options.event);
          if (heightStyle === "fill") {
            maxHeight = parent.height();
            this.element.siblings(":visible").each(function() {
              var elem = $2(this), position2 = elem.css("position");
              if (position2 === "absolute" || position2 === "fixed") {
                return;
              }
              maxHeight -= elem.outerHeight(true);
            });
            this.headers.each(function() {
              maxHeight -= $2(this).outerHeight(true);
            });
            this.headers.next().each(function() {
              $2(this).height(Math.max(0, maxHeight - $2(this).innerHeight() + $2(this).height()));
            }).css("overflow", "auto");
          } else if (heightStyle === "auto") {
            maxHeight = 0;
            this.headers.next().each(function() {
              var isVisible = $2(this).is(":visible");
              if (!isVisible) {
                $2(this).show();
              }
              maxHeight = Math.max(maxHeight, $2(this).css("height", "").height());
              if (!isVisible) {
                $2(this).hide();
              }
            }).height(maxHeight);
          }
        },
        _activate: function(index) {
          var active = this._findActive(index)[0];
          if (active === this.active[0]) {
            return;
          }
          active = active || this.active[0];
          this._eventHandler({
            target: active,
            currentTarget: active,
            preventDefault: $2.noop
          });
        },
        _findActive: function(selector) {
          return typeof selector === "number" ? this.headers.eq(selector) : $2();
        },
        _setupEvents: function(event) {
          var events = {
            keydown: "_keydown"
          };
          if (event) {
            $2.each(event.split(" "), function(index, eventName) {
              events[eventName] = "_eventHandler";
            });
          }
          this._off(this.headers.add(this.headers.next()));
          this._on(this.headers, events);
          this._on(this.headers.next(), {keydown: "_panelKeyDown"});
          this._hoverable(this.headers);
          this._focusable(this.headers);
        },
        _eventHandler: function(event) {
          var activeChildren, clickedChildren, options = this.options, active = this.active, clicked = $2(event.currentTarget), clickedIsActive = clicked[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $2() : clicked.next(), toHide = active.next(), eventData = {
            oldHeader: active,
            oldPanel: toHide,
            newHeader: collapsing ? $2() : clicked,
            newPanel: toShow
          };
          event.preventDefault();
          if (clickedIsActive && !options.collapsible || this._trigger("beforeActivate", event, eventData) === false) {
            return;
          }
          options.active = collapsing ? false : this.headers.index(clicked);
          this.active = clickedIsActive ? $2() : clicked;
          this._toggle(eventData);
          this._removeClass(active, "ui-accordion-header-active", "ui-state-active");
          if (options.icons) {
            activeChildren = active.children(".ui-accordion-header-icon");
            this._removeClass(activeChildren, null, options.icons.activeHeader)._addClass(activeChildren, null, options.icons.header);
          }
          if (!clickedIsActive) {
            this._removeClass(clicked, "ui-accordion-header-collapsed")._addClass(clicked, "ui-accordion-header-active", "ui-state-active");
            if (options.icons) {
              clickedChildren = clicked.children(".ui-accordion-header-icon");
              this._removeClass(clickedChildren, null, options.icons.header)._addClass(clickedChildren, null, options.icons.activeHeader);
            }
            this._addClass(clicked.next(), "ui-accordion-content-active");
          }
        },
        _toggle: function(data2) {
          var toShow = data2.newPanel, toHide = this.prevShow.length ? this.prevShow : data2.oldPanel;
          this.prevShow.add(this.prevHide).stop(true, true);
          this.prevShow = toShow;
          this.prevHide = toHide;
          if (this.options.animate) {
            this._animate(toShow, toHide, data2);
          } else {
            toHide.hide();
            toShow.show();
            this._toggleComplete(data2);
          }
          toHide.attr({
            "aria-hidden": "true"
          });
          toHide.prev().attr({
            "aria-selected": "false",
            "aria-expanded": "false"
          });
          if (toShow.length && toHide.length) {
            toHide.prev().attr({
              tabIndex: -1,
              "aria-expanded": "false"
            });
          } else if (toShow.length) {
            this.headers.filter(function() {
              return parseInt($2(this).attr("tabIndex"), 10) === 0;
            }).attr("tabIndex", -1);
          }
          toShow.attr("aria-hidden", "false").prev().attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0
          });
        },
        _animate: function(toShow, toHide, data2) {
          var total, easing, duration, that = this, adjust = 0, boxSizing = toShow.css("box-sizing"), down = toShow.length && (!toHide.length || toShow.index() < toHide.index()), animate = this.options.animate || {}, options = down && animate.down || animate, complete = function() {
            that._toggleComplete(data2);
          };
          if (typeof options === "number") {
            duration = options;
          }
          if (typeof options === "string") {
            easing = options;
          }
          easing = easing || options.easing || animate.easing;
          duration = duration || options.duration || animate.duration;
          if (!toHide.length) {
            return toShow.animate(this.showProps, duration, easing, complete);
          }
          if (!toShow.length) {
            return toHide.animate(this.hideProps, duration, easing, complete);
          }
          total = toShow.show().outerHeight();
          toHide.animate(this.hideProps, {
            duration,
            easing,
            step: function(now, fx) {
              fx.now = Math.round(now);
            }
          });
          toShow.hide().animate(this.showProps, {
            duration,
            easing,
            complete,
            step: function(now, fx) {
              fx.now = Math.round(now);
              if (fx.prop !== "height") {
                if (boxSizing === "content-box") {
                  adjust += fx.now;
                }
              } else if (that.options.heightStyle !== "content") {
                fx.now = Math.round(total - toHide.outerHeight() - adjust);
                adjust = 0;
              }
            }
          });
        },
        _toggleComplete: function(data2) {
          var toHide = data2.oldPanel, prev = toHide.prev();
          this._removeClass(toHide, "ui-accordion-content-active");
          this._removeClass(prev, "ui-accordion-header-active")._addClass(prev, "ui-accordion-header-collapsed");
          if (toHide.length) {
            toHide.parent()[0].className = toHide.parent()[0].className;
          }
          this._trigger("activate", null, data2);
        }
      });
      var safeActiveElement = $2.ui.safeActiveElement = function(document2) {
        var activeElement;
        try {
          activeElement = document2.activeElement;
        } catch (error) {
          activeElement = document2.body;
        }
        if (!activeElement) {
          activeElement = document2.body;
        }
        if (!activeElement.nodeName) {
          activeElement = document2.body;
        }
        return activeElement;
      };
      /*!
       * jQuery UI Menu 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var widgetsMenu = $2.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: {
            submenu: "ui-icon-caret-1-e"
          },
          items: "> *",
          menus: "ul",
          position: {
            my: "left top",
            at: "right top"
          },
          role: "menu",
          blur: null,
          focus: null,
          select: null
        },
        _create: function() {
          this.activeMenu = this.element;
          this.mouseHandled = false;
          this.element.uniqueId().attr({
            role: this.options.role,
            tabIndex: 0
          });
          this._addClass("ui-menu", "ui-widget ui-widget-content");
          this._on({
            "mousedown .ui-menu-item": function(event) {
              event.preventDefault();
            },
            "click .ui-menu-item": function(event) {
              var target = $2(event.target);
              var active = $2($2.ui.safeActiveElement(this.document[0]));
              if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
                this.select(event);
                if (!event.isPropagationStopped()) {
                  this.mouseHandled = true;
                }
                if (target.has(".ui-menu").length) {
                  this.expand(event);
                } else if (!this.element.is(":focus") && active.closest(".ui-menu").length) {
                  this.element.trigger("focus", [true]);
                  if (this.active && this.active.parents(".ui-menu").length === 1) {
                    clearTimeout(this.timer);
                  }
                }
              }
            },
            "mouseenter .ui-menu-item": function(event) {
              if (this.previousFilter) {
                return;
              }
              var actualTarget = $2(event.target).closest(".ui-menu-item"), target = $2(event.currentTarget);
              if (actualTarget[0] !== target[0]) {
                return;
              }
              this._removeClass(target.siblings().children(".ui-state-active"), null, "ui-state-active");
              this.focus(event, target);
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function(event, keepActiveItem) {
              var item = this.active || this.element.find(this.options.items).eq(0);
              if (!keepActiveItem) {
                this.focus(event, item);
              }
            },
            blur: function(event) {
              this._delay(function() {
                var notContained = !$2.contains(this.element[0], $2.ui.safeActiveElement(this.document[0]));
                if (notContained) {
                  this.collapseAll(event);
                }
              });
            },
            keydown: "_keydown"
          });
          this.refresh();
          this._on(this.document, {
            click: function(event) {
              if (this._closeOnDocumentClick(event)) {
                this.collapseAll(event);
              }
              this.mouseHandled = false;
            }
          });
        },
        _destroy: function() {
          var items = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"), submenus = items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
          this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
          submenus.children().each(function() {
            var elem = $2(this);
            if (elem.data("ui-menu-submenu-caret")) {
              elem.remove();
            }
          });
        },
        _keydown: function(event) {
          var match, prev, character, skip, preventDefault = true;
          switch (event.keyCode) {
            case $2.ui.keyCode.PAGE_UP:
              this.previousPage(event);
              break;
            case $2.ui.keyCode.PAGE_DOWN:
              this.nextPage(event);
              break;
            case $2.ui.keyCode.HOME:
              this._move("first", "first", event);
              break;
            case $2.ui.keyCode.END:
              this._move("last", "last", event);
              break;
            case $2.ui.keyCode.UP:
              this.previous(event);
              break;
            case $2.ui.keyCode.DOWN:
              this.next(event);
              break;
            case $2.ui.keyCode.LEFT:
              this.collapse(event);
              break;
            case $2.ui.keyCode.RIGHT:
              if (this.active && !this.active.is(".ui-state-disabled")) {
                this.expand(event);
              }
              break;
            case $2.ui.keyCode.ENTER:
            case $2.ui.keyCode.SPACE:
              this._activate(event);
              break;
            case $2.ui.keyCode.ESCAPE:
              this.collapse(event);
              break;
            default:
              preventDefault = false;
              prev = this.previousFilter || "";
              skip = false;
              character = event.keyCode >= 96 && event.keyCode <= 105 ? (event.keyCode - 96).toString() : String.fromCharCode(event.keyCode);
              clearTimeout(this.filterTimer);
              if (character === prev) {
                skip = true;
              } else {
                character = prev + character;
              }
              match = this._filterMenuItems(character);
              match = skip && match.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : match;
              if (!match.length) {
                character = String.fromCharCode(event.keyCode);
                match = this._filterMenuItems(character);
              }
              if (match.length) {
                this.focus(event, match);
                this.previousFilter = character;
                this.filterTimer = this._delay(function() {
                  delete this.previousFilter;
                }, 1e3);
              } else {
                delete this.previousFilter;
              }
          }
          if (preventDefault) {
            event.preventDefault();
          }
        },
        _activate: function(event) {
          if (this.active && !this.active.is(".ui-state-disabled")) {
            if (this.active.children("[aria-haspopup='true']").length) {
              this.expand(event);
            } else {
              this.select(event);
            }
          }
        },
        refresh: function() {
          var menus, items, newSubmenus, newItems, newWrappers, that = this, icon = this.options.icons.submenu, submenus = this.element.find(this.options.menus);
          this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
          newSubmenus = submenus.filter(":not(.ui-menu)").hide().attr({
            role: this.options.role,
            "aria-hidden": "true",
            "aria-expanded": "false"
          }).each(function() {
            var menu = $2(this), item = menu.prev(), submenuCaret = $2("<span>").data("ui-menu-submenu-caret", true);
            that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon);
            item.attr("aria-haspopup", "true").prepend(submenuCaret);
            menu.attr("aria-labelledby", item.attr("id"));
          });
          this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front");
          menus = submenus.add(this.element);
          items = menus.find(this.options.items);
          items.not(".ui-menu-item").each(function() {
            var item = $2(this);
            if (that._isDivider(item)) {
              that._addClass(item, "ui-menu-divider", "ui-widget-content");
            }
          });
          newItems = items.not(".ui-menu-item, .ui-menu-divider");
          newWrappers = newItems.children().not(".ui-menu").uniqueId().attr({
            tabIndex: -1,
            role: this._itemRole()
          });
          this._addClass(newItems, "ui-menu-item")._addClass(newWrappers, "ui-menu-item-wrapper");
          items.filter(".ui-state-disabled").attr("aria-disabled", "true");
          if (this.active && !$2.contains(this.element[0], this.active[0])) {
            this.blur();
          }
        },
        _itemRole: function() {
          return {
            menu: "menuitem",
            listbox: "option"
          }[this.options.role];
        },
        _setOption: function(key, value) {
          if (key === "icons") {
            var icons = this.element.find(".ui-menu-icon");
            this._removeClass(icons, null, this.options.icons.submenu)._addClass(icons, null, value.submenu);
          }
          this._super(key, value);
        },
        _setOptionDisabled: function(value) {
          this._super(value);
          this.element.attr("aria-disabled", String(value));
          this._toggleClass(null, "ui-state-disabled", !!value);
        },
        focus: function(event, item) {
          var nested, focused, activeParent;
          this.blur(event, event && event.type === "focus");
          this._scrollIntoView(item);
          this.active = item.first();
          focused = this.active.children(".ui-menu-item-wrapper");
          this._addClass(focused, null, "ui-state-active");
          if (this.options.role) {
            this.element.attr("aria-activedescendant", focused.attr("id"));
          }
          activeParent = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
          this._addClass(activeParent, null, "ui-state-active");
          if (event && event.type === "keydown") {
            this._close();
          } else {
            this.timer = this._delay(function() {
              this._close();
            }, this.delay);
          }
          nested = item.children(".ui-menu");
          if (nested.length && event && /^mouse/.test(event.type)) {
            this._startOpening(nested);
          }
          this.activeMenu = item.parent();
          this._trigger("focus", event, {item});
        },
        _scrollIntoView: function(item) {
          var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
          if (this._hasScroll()) {
            borderTop = parseFloat($2.css(this.activeMenu[0], "borderTopWidth")) || 0;
            paddingTop = parseFloat($2.css(this.activeMenu[0], "paddingTop")) || 0;
            offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
            scroll = this.activeMenu.scrollTop();
            elementHeight = this.activeMenu.height();
            itemHeight = item.outerHeight();
            if (offset < 0) {
              this.activeMenu.scrollTop(scroll + offset);
            } else if (offset + itemHeight > elementHeight) {
              this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
            }
          }
        },
        blur: function(event, fromFocus) {
          if (!fromFocus) {
            clearTimeout(this.timer);
          }
          if (!this.active) {
            return;
          }
          this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active");
          this._trigger("blur", event, {item: this.active});
          this.active = null;
        },
        _startOpening: function(submenu) {
          clearTimeout(this.timer);
          if (submenu.attr("aria-hidden") !== "true") {
            return;
          }
          this.timer = this._delay(function() {
            this._close();
            this._open(submenu);
          }, this.delay);
        },
        _open: function(submenu) {
          var position2 = $2.extend({
            of: this.active
          }, this.options.position);
          clearTimeout(this.timer);
          this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true");
          submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position2);
        },
        collapseAll: function(event, all) {
          clearTimeout(this.timer);
          this.timer = this._delay(function() {
            var currentMenu = all ? this.element : $2(event && event.target).closest(this.element.find(".ui-menu"));
            if (!currentMenu.length) {
              currentMenu = this.element;
            }
            this._close(currentMenu);
            this.blur(event);
            this._removeClass(currentMenu.find(".ui-state-active"), null, "ui-state-active");
            this.activeMenu = currentMenu;
          }, this.delay);
        },
        _close: function(startMenu) {
          if (!startMenu) {
            startMenu = this.active ? this.active.parent() : this.element;
          }
          startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(event) {
          return !$2(event.target).closest(".ui-menu").length;
        },
        _isDivider: function(item) {
          return !/[^\-\u2014\u2013\s]/.test(item.text());
        },
        collapse: function(event) {
          var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element);
          if (newItem && newItem.length) {
            this._close();
            this.focus(event, newItem);
          }
        },
        expand: function(event) {
          var newItem = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
          if (newItem && newItem.length) {
            this._open(newItem.parent());
            this._delay(function() {
              this.focus(event, newItem);
            });
          }
        },
        next: function(event) {
          this._move("next", "first", event);
        },
        previous: function(event) {
          this._move("prev", "last", event);
        },
        isFirstItem: function() {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(direction, filter, event) {
          var next;
          if (this.active) {
            if (direction === "first" || direction === "last") {
              next = this.active[direction === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1);
            } else {
              next = this.active[direction + "All"](".ui-menu-item").eq(0);
            }
          }
          if (!next || !next.length || !this.active) {
            next = this.activeMenu.find(this.options.items)[filter]();
          }
          this.focus(event, next);
        },
        nextPage: function(event) {
          var item, base, height;
          if (!this.active) {
            this.next(event);
            return;
          }
          if (this.isLastItem()) {
            return;
          }
          if (this._hasScroll()) {
            base = this.active.offset().top;
            height = this.element.height();
            this.active.nextAll(".ui-menu-item").each(function() {
              item = $2(this);
              return item.offset().top - base - height < 0;
            });
            this.focus(event, item);
          } else {
            this.focus(event, this.activeMenu.find(this.options.items)[!this.active ? "first" : "last"]());
          }
        },
        previousPage: function(event) {
          var item, base, height;
          if (!this.active) {
            this.next(event);
            return;
          }
          if (this.isFirstItem()) {
            return;
          }
          if (this._hasScroll()) {
            base = this.active.offset().top;
            height = this.element.height();
            this.active.prevAll(".ui-menu-item").each(function() {
              item = $2(this);
              return item.offset().top - base + height > 0;
            });
            this.focus(event, item);
          } else {
            this.focus(event, this.activeMenu.find(this.options.items).first());
          }
        },
        _hasScroll: function() {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(event) {
          this.active = this.active || $2(event.target).closest(".ui-menu-item");
          var ui = {item: this.active};
          if (!this.active.has(".ui-menu").length) {
            this.collapseAll(event, true);
          }
          this._trigger("select", event, ui);
        },
        _filterMenuItems: function(character) {
          var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), regex = new RegExp("^" + escapedCharacter, "i");
          return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
            return regex.test($2.trim($2(this).children(".ui-menu-item-wrapper").text()));
          });
        }
      });
      /*!
       * jQuery UI Autocomplete 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: false,
          delay: 300,
          minLength: 1,
          position: {
            my: "left top",
            at: "left bottom",
            collision: "none"
          },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
          var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(), isTextarea = nodeName === "textarea", isInput = nodeName === "input";
          this.isMultiLine = isTextarea || !isInput && this._isContentEditable(this.element);
          this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"];
          this.isNewMenu = true;
          this._addClass("ui-autocomplete-input");
          this.element.attr("autocomplete", "off");
          this._on(this.element, {
            keydown: function(event) {
              if (this.element.prop("readOnly")) {
                suppressKeyPress = true;
                suppressInput = true;
                suppressKeyPressRepeat = true;
                return;
              }
              suppressKeyPress = false;
              suppressInput = false;
              suppressKeyPressRepeat = false;
              var keyCode = $2.ui.keyCode;
              switch (event.keyCode) {
                case keyCode.PAGE_UP:
                  suppressKeyPress = true;
                  this._move("previousPage", event);
                  break;
                case keyCode.PAGE_DOWN:
                  suppressKeyPress = true;
                  this._move("nextPage", event);
                  break;
                case keyCode.UP:
                  suppressKeyPress = true;
                  this._keyEvent("previous", event);
                  break;
                case keyCode.DOWN:
                  suppressKeyPress = true;
                  this._keyEvent("next", event);
                  break;
                case keyCode.ENTER:
                  if (this.menu.active) {
                    suppressKeyPress = true;
                    event.preventDefault();
                    this.menu.select(event);
                  }
                  break;
                case keyCode.TAB:
                  if (this.menu.active) {
                    this.menu.select(event);
                  }
                  break;
                case keyCode.ESCAPE:
                  if (this.menu.element.is(":visible")) {
                    if (!this.isMultiLine) {
                      this._value(this.term);
                    }
                    this.close(event);
                    event.preventDefault();
                  }
                  break;
                default:
                  suppressKeyPressRepeat = true;
                  this._searchTimeout(event);
                  break;
              }
            },
            keypress: function(event) {
              if (suppressKeyPress) {
                suppressKeyPress = false;
                if (!this.isMultiLine || this.menu.element.is(":visible")) {
                  event.preventDefault();
                }
                return;
              }
              if (suppressKeyPressRepeat) {
                return;
              }
              var keyCode = $2.ui.keyCode;
              switch (event.keyCode) {
                case keyCode.PAGE_UP:
                  this._move("previousPage", event);
                  break;
                case keyCode.PAGE_DOWN:
                  this._move("nextPage", event);
                  break;
                case keyCode.UP:
                  this._keyEvent("previous", event);
                  break;
                case keyCode.DOWN:
                  this._keyEvent("next", event);
                  break;
              }
            },
            input: function(event) {
              if (suppressInput) {
                suppressInput = false;
                event.preventDefault();
                return;
              }
              this._searchTimeout(event);
            },
            focus: function() {
              this.selectedItem = null;
              this.previous = this._value();
            },
            blur: function(event) {
              if (this.cancelBlur) {
                delete this.cancelBlur;
                return;
              }
              clearTimeout(this.searching);
              this.close(event);
              this._change(event);
            }
          });
          this._initSource();
          this.menu = $2("<ul>").appendTo(this._appendTo()).menu({
            role: null
          }).hide().menu("instance");
          this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
          this._on(this.menu.element, {
            mousedown: function(event) {
              event.preventDefault();
              this.cancelBlur = true;
              this._delay(function() {
                delete this.cancelBlur;
                if (this.element[0] !== $2.ui.safeActiveElement(this.document[0])) {
                  this.element.trigger("focus");
                }
              });
            },
            menufocus: function(event, ui) {
              var label, item;
              if (this.isNewMenu) {
                this.isNewMenu = false;
                if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) {
                  this.menu.blur();
                  this.document.one("mousemove", function() {
                    $2(event.target).trigger(event.originalEvent);
                  });
                  return;
                }
              }
              item = ui.item.data("ui-autocomplete-item");
              if (false !== this._trigger("focus", event, {item})) {
                if (event.originalEvent && /^key/.test(event.originalEvent.type)) {
                  this._value(item.value);
                }
              }
              label = ui.item.attr("aria-label") || item.value;
              if (label && $2.trim(label).length) {
                this.liveRegion.children().hide();
                $2("<div>").text(label).appendTo(this.liveRegion);
              }
            },
            menuselect: function(event, ui) {
              var item = ui.item.data("ui-autocomplete-item"), previous = this.previous;
              if (this.element[0] !== $2.ui.safeActiveElement(this.document[0])) {
                this.element.trigger("focus");
                this.previous = previous;
                this._delay(function() {
                  this.previous = previous;
                  this.selectedItem = item;
                });
              }
              if (false !== this._trigger("select", event, {item})) {
                this._value(item.value);
              }
              this.term = this._value();
              this.close(event);
              this.selectedItem = item;
            }
          });
          this.liveRegion = $2("<div>", {
            role: "status",
            "aria-live": "assertive",
            "aria-relevant": "additions"
          }).appendTo(this.document[0].body);
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
          this._on(this.window, {
            beforeunload: function() {
              this.element.removeAttr("autocomplete");
            }
          });
        },
        _destroy: function() {
          clearTimeout(this.searching);
          this.element.removeAttr("autocomplete");
          this.menu.element.remove();
          this.liveRegion.remove();
        },
        _setOption: function(key, value) {
          this._super(key, value);
          if (key === "source") {
            this._initSource();
          }
          if (key === "appendTo") {
            this.menu.element.appendTo(this._appendTo());
          }
          if (key === "disabled" && value && this.xhr) {
            this.xhr.abort();
          }
        },
        _isEventTargetInWidget: function(event) {
          var menuElement = this.menu.element[0];
          return event.target === this.element[0] || event.target === menuElement || $2.contains(menuElement, event.target);
        },
        _closeOnClickOutside: function(event) {
          if (!this._isEventTargetInWidget(event)) {
            this.close();
          }
        },
        _appendTo: function() {
          var element = this.options.appendTo;
          if (element) {
            element = element.jquery || element.nodeType ? $2(element) : this.document.find(element).eq(0);
          }
          if (!element || !element[0]) {
            element = this.element.closest(".ui-front, dialog");
          }
          if (!element.length) {
            element = this.document[0].body;
          }
          return element;
        },
        _initSource: function() {
          var array, url, that = this;
          if ($2.isArray(this.options.source)) {
            array = this.options.source;
            this.source = function(request, response) {
              response($2.ui.autocomplete.filter(array, request.term));
            };
          } else if (typeof this.options.source === "string") {
            url = this.options.source;
            this.source = function(request, response) {
              if (that.xhr) {
                that.xhr.abort();
              }
              that.xhr = $2.ajax({
                url,
                data: request,
                dataType: "json",
                success: function(data2) {
                  response(data2);
                },
                error: function() {
                  response([]);
                }
              });
            };
          } else {
            this.source = this.options.source;
          }
        },
        _searchTimeout: function(event) {
          clearTimeout(this.searching);
          this.searching = this._delay(function() {
            var equalValues = this.term === this._value(), menuVisible = this.menu.element.is(":visible"), modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
            if (!equalValues || equalValues && !menuVisible && !modifierKey) {
              this.selectedItem = null;
              this.search(null, event);
            }
          }, this.options.delay);
        },
        search: function(value, event) {
          value = value != null ? value : this._value();
          this.term = this._value();
          if (value.length < this.options.minLength) {
            return this.close(event);
          }
          if (this._trigger("search", event) === false) {
            return;
          }
          return this._search(value);
        },
        _search: function(value) {
          this.pending++;
          this._addClass("ui-autocomplete-loading");
          this.cancelSearch = false;
          this.source({term: value}, this._response());
        },
        _response: function() {
          var index = ++this.requestIndex;
          return $2.proxy(function(content) {
            if (index === this.requestIndex) {
              this.__response(content);
            }
            this.pending--;
            if (!this.pending) {
              this._removeClass("ui-autocomplete-loading");
            }
          }, this);
        },
        __response: function(content) {
          if (content) {
            content = this._normalize(content);
          }
          this._trigger("response", null, {content});
          if (!this.options.disabled && content && content.length && !this.cancelSearch) {
            this._suggest(content);
            this._trigger("open");
          } else {
            this._close();
          }
        },
        close: function(event) {
          this.cancelSearch = true;
          this._close(event);
        },
        _close: function(event) {
          this._off(this.document, "mousedown");
          if (this.menu.element.is(":visible")) {
            this.menu.element.hide();
            this.menu.blur();
            this.isNewMenu = true;
            this._trigger("close", event);
          }
        },
        _change: function(event) {
          if (this.previous !== this._value()) {
            this._trigger("change", event, {item: this.selectedItem});
          }
        },
        _normalize: function(items) {
          if (items.length && items[0].label && items[0].value) {
            return items;
          }
          return $2.map(items, function(item) {
            if (typeof item === "string") {
              return {
                label: item,
                value: item
              };
            }
            return $2.extend({}, item, {
              label: item.label || item.value,
              value: item.value || item.label
            });
          });
        },
        _suggest: function(items) {
          var ul = this.menu.element.empty();
          this._renderMenu(ul, items);
          this.isNewMenu = true;
          this.menu.refresh();
          ul.show();
          this._resizeMenu();
          ul.position($2.extend({
            of: this.element
          }, this.options.position));
          if (this.options.autoFocus) {
            this.menu.next();
          }
          this._on(this.document, {
            mousedown: "_closeOnClickOutside"
          });
        },
        _resizeMenu: function() {
          var ul = this.menu.element;
          ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(ul, items) {
          var that = this;
          $2.each(items, function(index, item) {
            that._renderItemData(ul, item);
          });
        },
        _renderItemData: function(ul, item) {
          return this._renderItem(ul, item).data("ui-autocomplete-item", item);
        },
        _renderItem: function(ul, item) {
          return $2("<li>").append($2("<div>").text(item.label)).appendTo(ul);
        },
        _move: function(direction, event) {
          if (!this.menu.element.is(":visible")) {
            this.search(null, event);
            return;
          }
          if (this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction)) {
            if (!this.isMultiLine) {
              this._value(this.term);
            }
            this.menu.blur();
            return;
          }
          this.menu[direction](event);
        },
        widget: function() {
          return this.menu.element;
        },
        _value: function() {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(keyEvent, event) {
          if (!this.isMultiLine || this.menu.element.is(":visible")) {
            this._move(keyEvent, event);
            event.preventDefault();
          }
        },
        _isContentEditable: function(element) {
          if (!element.length) {
            return false;
          }
          var editable = element.prop("contentEditable");
          if (editable === "inherit") {
            return this._isContentEditable(element.parent());
          }
          return editable === "true";
        }
      });
      $2.extend($2.ui.autocomplete, {
        escapeRegex: function(value) {
          return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(array, term) {
          var matcher = new RegExp($2.ui.autocomplete.escapeRegex(term), "i");
          return $2.grep(array, function(value) {
            return matcher.test(value.label || value.value || value);
          });
        }
      });
      $2.widget("ui.autocomplete", $2.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function(amount) {
              return amount + (amount > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
            }
          }
        },
        __response: function(content) {
          var message;
          this._superApply(arguments);
          if (this.options.disabled || this.cancelSearch) {
            return;
          }
          if (content && content.length) {
            message = this.options.messages.results(content.length);
          } else {
            message = this.options.messages.noResults;
          }
          this.liveRegion.children().hide();
          $2("<div>").text(message).appendTo(this.liveRegion);
        }
      });
      var widgetsAutocomplete = $2.ui.autocomplete;
      /*!
       * jQuery UI Controlgroup 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;
      var widgetsControlgroup = $2.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
          direction: "horizontal",
          disabled: null,
          onlyVisible: true,
          items: {
            button: "input[type=button], input[type=submit], input[type=reset], button, a",
            controlgroupLabel: ".ui-controlgroup-label",
            checkboxradio: "input[type='checkbox'], input[type='radio']",
            selectmenu: "select",
            spinner: ".ui-spinner-input"
          }
        },
        _create: function() {
          this._enhance();
        },
        _enhance: function() {
          this.element.attr("role", "toolbar");
          this.refresh();
        },
        _destroy: function() {
          this._callChildMethod("destroy");
          this.childWidgets.removeData("ui-controlgroup-data");
          this.element.removeAttr("role");
          if (this.options.items.controlgroupLabel) {
            this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
          }
        },
        _initWidgets: function() {
          var that = this, childWidgets = [];
          $2.each(this.options.items, function(widget2, selector) {
            var labels2;
            var options = {};
            if (!selector) {
              return;
            }
            if (widget2 === "controlgroupLabel") {
              labels2 = that.element.find(selector);
              labels2.each(function() {
                var element = $2(this);
                if (element.children(".ui-controlgroup-label-contents").length) {
                  return;
                }
                element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
              });
              that._addClass(labels2, null, "ui-widget ui-widget-content ui-state-default");
              childWidgets = childWidgets.concat(labels2.get());
              return;
            }
            if (!$2.fn[widget2]) {
              return;
            }
            if (that["_" + widget2 + "Options"]) {
              options = that["_" + widget2 + "Options"]("middle");
            } else {
              options = {classes: {}};
            }
            that.element.find(selector).each(function() {
              var element = $2(this);
              var instance = element[widget2]("instance");
              var instanceOptions = $2.widget.extend({}, options);
              if (widget2 === "button" && element.parent(".ui-spinner").length) {
                return;
              }
              if (!instance) {
                instance = element[widget2]()[widget2]("instance");
              }
              if (instance) {
                instanceOptions.classes = that._resolveClassesValues(instanceOptions.classes, instance);
              }
              element[widget2](instanceOptions);
              var widgetElement = element[widget2]("widget");
              $2.data(widgetElement[0], "ui-controlgroup-data", instance ? instance : element[widget2]("instance"));
              childWidgets.push(widgetElement[0]);
            });
          });
          this.childWidgets = $2($2.unique(childWidgets));
          this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(method) {
          this.childWidgets.each(function() {
            var element = $2(this), data2 = element.data("ui-controlgroup-data");
            if (data2 && data2[method]) {
              data2[method]();
            }
          });
        },
        _updateCornerClass: function(element, position2) {
          var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
          var add = this._buildSimpleOptions(position2, "label").classes.label;
          this._removeClass(element, null, remove);
          this._addClass(element, null, add);
        },
        _buildSimpleOptions: function(position2, key) {
          var direction = this.options.direction === "vertical";
          var result = {
            classes: {}
          };
          result.classes[key] = {
            middle: "",
            first: "ui-corner-" + (direction ? "top" : "left"),
            last: "ui-corner-" + (direction ? "bottom" : "right"),
            only: "ui-corner-all"
          }[position2];
          return result;
        },
        _spinnerOptions: function(position2) {
          var options = this._buildSimpleOptions(position2, "ui-spinner");
          options.classes["ui-spinner-up"] = "";
          options.classes["ui-spinner-down"] = "";
          return options;
        },
        _buttonOptions: function(position2) {
          return this._buildSimpleOptions(position2, "ui-button");
        },
        _checkboxradioOptions: function(position2) {
          return this._buildSimpleOptions(position2, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(position2) {
          var direction = this.options.direction === "vertical";
          return {
            width: direction ? "auto" : false,
            classes: {
              middle: {
                "ui-selectmenu-button-open": "",
                "ui-selectmenu-button-closed": ""
              },
              first: {
                "ui-selectmenu-button-open": "ui-corner-" + (direction ? "top" : "tl"),
                "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "top" : "left")
              },
              last: {
                "ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
                "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "bottom" : "right")
              },
              only: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
              }
            }[position2]
          };
        },
        _resolveClassesValues: function(classes, instance) {
          var result = {};
          $2.each(classes, function(key) {
            var current = instance.options.classes[key] || "";
            current = $2.trim(current.replace(controlgroupCornerRegex, ""));
            result[key] = (current + " " + classes[key]).replace(/\s+/g, " ");
          });
          return result;
        },
        _setOption: function(key, value) {
          if (key === "direction") {
            this._removeClass("ui-controlgroup-" + this.options.direction);
          }
          this._super(key, value);
          if (key === "disabled") {
            this._callChildMethod(value ? "disable" : "enable");
            return;
          }
          this.refresh();
        },
        refresh: function() {
          var children, that = this;
          this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
          if (this.options.direction === "horizontal") {
            this._addClass(null, "ui-helper-clearfix");
          }
          this._initWidgets();
          children = this.childWidgets;
          if (this.options.onlyVisible) {
            children = children.filter(":visible");
          }
          if (children.length) {
            $2.each(["first", "last"], function(index, value) {
              var instance = children[value]().data("ui-controlgroup-data");
              if (instance && that["_" + instance.widgetName + "Options"]) {
                var options = that["_" + instance.widgetName + "Options"](children.length === 1 ? "only" : value);
                options.classes = that._resolveClassesValues(options.classes, instance);
                instance.element[instance.widgetName](options);
              } else {
                that._updateCornerClass(children[value](), value);
              }
            });
            this._callChildMethod("refresh");
          }
        }
      });
      /*!
       * jQuery UI Checkboxradio 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.checkboxradio", [$2.ui.formResetMixin, {
        version: "1.12.1",
        options: {
          disabled: null,
          label: null,
          icon: true,
          classes: {
            "ui-checkboxradio-label": "ui-corner-all",
            "ui-checkboxradio-icon": "ui-corner-all"
          }
        },
        _getCreateOptions: function() {
          var disabled, labels2;
          var that = this;
          var options = this._super() || {};
          this._readType();
          labels2 = this.element.labels();
          this.label = $2(labels2[labels2.length - 1]);
          if (!this.label.length) {
            $2.error("No label found for checkboxradio widget");
          }
          this.originalLabel = "";
          this.label.contents().not(this.element[0]).each(function() {
            that.originalLabel += this.nodeType === 3 ? $2(this).text() : this.outerHTML;
          });
          if (this.originalLabel) {
            options.label = this.originalLabel;
          }
          disabled = this.element[0].disabled;
          if (disabled != null) {
            options.disabled = disabled;
          }
          return options;
        },
        _create: function() {
          var checked = this.element[0].checked;
          this._bindFormResetHandler();
          if (this.options.disabled == null) {
            this.options.disabled = this.element[0].disabled;
          }
          this._setOption("disabled", this.options.disabled);
          this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
          this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
          if (this.type === "radio") {
            this._addClass(this.label, "ui-checkboxradio-radio-label");
          }
          if (this.options.label && this.options.label !== this.originalLabel) {
            this._updateLabel();
          } else if (this.originalLabel) {
            this.options.label = this.originalLabel;
          }
          this._enhance();
          if (checked) {
            this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
            if (this.icon) {
              this._addClass(this.icon, null, "ui-state-hover");
            }
          }
          this._on({
            change: "_toggleClasses",
            focus: function() {
              this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
            },
            blur: function() {
              this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
            }
          });
        },
        _readType: function() {
          var nodeName = this.element[0].nodeName.toLowerCase();
          this.type = this.element[0].type;
          if (nodeName !== "input" || !/radio|checkbox/.test(this.type)) {
            $2.error("Can't create checkboxradio on element.nodeName=" + nodeName + " and element.type=" + this.type);
          }
        },
        _enhance: function() {
          this._updateIcon(this.element[0].checked);
        },
        widget: function() {
          return this.label;
        },
        _getRadioGroup: function() {
          var group;
          var name = this.element[0].name;
          var nameSelector = "input[name='" + $2.ui.escapeSelector(name) + "']";
          if (!name) {
            return $2([]);
          }
          if (this.form.length) {
            group = $2(this.form[0].elements).filter(nameSelector);
          } else {
            group = $2(nameSelector).filter(function() {
              return $2(this).form().length === 0;
            });
          }
          return group.not(this.element);
        },
        _toggleClasses: function() {
          var checked = this.element[0].checked;
          this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);
          if (this.options.icon && this.type === "checkbox") {
            this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", checked)._toggleClass(this.icon, null, "ui-icon-blank", !checked);
          }
          if (this.type === "radio") {
            this._getRadioGroup().each(function() {
              var instance = $2(this).checkboxradio("instance");
              if (instance) {
                instance._removeClass(instance.label, "ui-checkboxradio-checked", "ui-state-active");
              }
            });
          }
        },
        _destroy: function() {
          this._unbindFormResetHandler();
          if (this.icon) {
            this.icon.remove();
            this.iconSpace.remove();
          }
        },
        _setOption: function(key, value) {
          if (key === "label" && !value) {
            return;
          }
          this._super(key, value);
          if (key === "disabled") {
            this._toggleClass(this.label, null, "ui-state-disabled", value);
            this.element[0].disabled = value;
            return;
          }
          this.refresh();
        },
        _updateIcon: function(checked) {
          var toAdd = "ui-icon ui-icon-background ";
          if (this.options.icon) {
            if (!this.icon) {
              this.icon = $2("<span>");
              this.iconSpace = $2("<span> </span>");
              this._addClass(this.iconSpace, "ui-checkboxradio-icon-space");
            }
            if (this.type === "checkbox") {
              toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
              this._removeClass(this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check");
            } else {
              toAdd += "ui-icon-blank";
            }
            this._addClass(this.icon, "ui-checkboxradio-icon", toAdd);
            if (!checked) {
              this._removeClass(this.icon, null, "ui-icon-check ui-state-checked");
            }
            this.icon.prependTo(this.label).after(this.iconSpace);
          } else if (this.icon !== void 0) {
            this.icon.remove();
            this.iconSpace.remove();
            delete this.icon;
          }
        },
        _updateLabel: function() {
          var contents = this.label.contents().not(this.element[0]);
          if (this.icon) {
            contents = contents.not(this.icon[0]);
          }
          if (this.iconSpace) {
            contents = contents.not(this.iconSpace[0]);
          }
          contents.remove();
          this.label.append(this.options.label);
        },
        refresh: function() {
          var checked = this.element[0].checked, isDisabled = this.element[0].disabled;
          this._updateIcon(checked);
          this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);
          if (this.options.label !== null) {
            this._updateLabel();
          }
          if (isDisabled !== this.options.disabled) {
            this._setOptions({disabled: isDisabled});
          }
        }
      }]);
      var widgetsCheckboxradio = $2.ui.checkboxradio;
      /*!
       * jQuery UI Button 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
          classes: {
            "ui-button": "ui-corner-all"
          },
          disabled: null,
          icon: null,
          iconPosition: "beginning",
          label: null,
          showLabel: true
        },
        _getCreateOptions: function() {
          var disabled, options = this._super() || {};
          this.isInput = this.element.is("input");
          disabled = this.element[0].disabled;
          if (disabled != null) {
            options.disabled = disabled;
          }
          this.originalLabel = this.isInput ? this.element.val() : this.element.html();
          if (this.originalLabel) {
            options.label = this.originalLabel;
          }
          return options;
        },
        _create: function() {
          if (!this.option.showLabel & !this.options.icon) {
            this.options.showLabel = true;
          }
          if (this.options.disabled == null) {
            this.options.disabled = this.element[0].disabled || false;
          }
          this.hasTitle = !!this.element.attr("title");
          if (this.options.label && this.options.label !== this.originalLabel) {
            if (this.isInput) {
              this.element.val(this.options.label);
            } else {
              this.element.html(this.options.label);
            }
          }
          this._addClass("ui-button", "ui-widget");
          this._setOption("disabled", this.options.disabled);
          this._enhance();
          if (this.element.is("a")) {
            this._on({
              keyup: function(event) {
                if (event.keyCode === $2.ui.keyCode.SPACE) {
                  event.preventDefault();
                  if (this.element[0].click) {
                    this.element[0].click();
                  } else {
                    this.element.trigger("click");
                  }
                }
              }
            });
          }
        },
        _enhance: function() {
          if (!this.element.is("button")) {
            this.element.attr("role", "button");
          }
          if (this.options.icon) {
            this._updateIcon("icon", this.options.icon);
            this._updateTooltip();
          }
        },
        _updateTooltip: function() {
          this.title = this.element.attr("title");
          if (!this.options.showLabel && !this.title) {
            this.element.attr("title", this.options.label);
          }
        },
        _updateIcon: function(option, value) {
          var icon = option !== "iconPosition", position2 = icon ? this.options.iconPosition : value, displayBlock = position2 === "top" || position2 === "bottom";
          if (!this.icon) {
            this.icon = $2("<span>");
            this._addClass(this.icon, "ui-button-icon", "ui-icon");
            if (!this.options.showLabel) {
              this._addClass("ui-button-icon-only");
            }
          } else if (icon) {
            this._removeClass(this.icon, null, this.options.icon);
          }
          if (icon) {
            this._addClass(this.icon, null, value);
          }
          this._attachIcon(position2);
          if (displayBlock) {
            this._addClass(this.icon, null, "ui-widget-icon-block");
            if (this.iconSpace) {
              this.iconSpace.remove();
            }
          } else {
            if (!this.iconSpace) {
              this.iconSpace = $2("<span> </span>");
              this._addClass(this.iconSpace, "ui-button-icon-space");
            }
            this._removeClass(this.icon, null, "ui-wiget-icon-block");
            this._attachIconSpace(position2);
          }
        },
        _destroy: function() {
          this.element.removeAttr("role");
          if (this.icon) {
            this.icon.remove();
          }
          if (this.iconSpace) {
            this.iconSpace.remove();
          }
          if (!this.hasTitle) {
            this.element.removeAttr("title");
          }
        },
        _attachIconSpace: function(iconPosition) {
          this.icon[/^(?:end|bottom)/.test(iconPosition) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(iconPosition) {
          this.element[/^(?:end|bottom)/.test(iconPosition) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(options) {
          var newShowLabel = options.showLabel === void 0 ? this.options.showLabel : options.showLabel, newIcon = options.icon === void 0 ? this.options.icon : options.icon;
          if (!newShowLabel && !newIcon) {
            options.showLabel = true;
          }
          this._super(options);
        },
        _setOption: function(key, value) {
          if (key === "icon") {
            if (value) {
              this._updateIcon(key, value);
            } else if (this.icon) {
              this.icon.remove();
              if (this.iconSpace) {
                this.iconSpace.remove();
              }
            }
          }
          if (key === "iconPosition") {
            this._updateIcon(key, value);
          }
          if (key === "showLabel") {
            this._toggleClass("ui-button-icon-only", null, !value);
            this._updateTooltip();
          }
          if (key === "label") {
            if (this.isInput) {
              this.element.val(value);
            } else {
              this.element.html(value);
              if (this.icon) {
                this._attachIcon(this.options.iconPosition);
                this._attachIconSpace(this.options.iconPosition);
              }
            }
          }
          this._super(key, value);
          if (key === "disabled") {
            this._toggleClass(null, "ui-state-disabled", value);
            this.element[0].disabled = value;
            if (value) {
              this.element.blur();
            }
          }
        },
        refresh: function() {
          var isDisabled = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
          if (isDisabled !== this.options.disabled) {
            this._setOptions({disabled: isDisabled});
          }
          this._updateTooltip();
        }
      });
      if ($2.uiBackCompat !== false) {
        $2.widget("ui.button", $2.ui.button, {
          options: {
            text: true,
            icons: {
              primary: null,
              secondary: null
            }
          },
          _create: function() {
            if (this.options.showLabel && !this.options.text) {
              this.options.showLabel = this.options.text;
            }
            if (!this.options.showLabel && this.options.text) {
              this.options.text = this.options.showLabel;
            }
            if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary)) {
              if (this.options.icons.primary) {
                this.options.icon = this.options.icons.primary;
              } else {
                this.options.icon = this.options.icons.secondary;
                this.options.iconPosition = "end";
              }
            } else if (this.options.icon) {
              this.options.icons.primary = this.options.icon;
            }
            this._super();
          },
          _setOption: function(key, value) {
            if (key === "text") {
              this._super("showLabel", value);
              return;
            }
            if (key === "showLabel") {
              this.options.text = value;
            }
            if (key === "icon") {
              this.options.icons.primary = value;
            }
            if (key === "icons") {
              if (value.primary) {
                this._super("icon", value.primary);
                this._super("iconPosition", "beginning");
              } else if (value.secondary) {
                this._super("icon", value.secondary);
                this._super("iconPosition", "end");
              }
            }
            this._superApply(arguments);
          }
        });
        $2.fn.button = function(orig) {
          return function() {
            if (!this.length || this.length && this[0].tagName !== "INPUT" || this.length && this[0].tagName === "INPUT" && (this.attr("type") !== "checkbox" && this.attr("type") !== "radio")) {
              return orig.apply(this, arguments);
            }
            if (!$2.ui.checkboxradio) {
              $2.error("Checkboxradio widget missing");
            }
            if (arguments.length === 0) {
              return this.checkboxradio({
                icon: false
              });
            }
            return this.checkboxradio.apply(this, arguments);
          };
        }($2.fn.button);
        $2.fn.buttonset = function() {
          if (!$2.ui.controlgroup) {
            $2.error("Controlgroup widget missing");
          }
          if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) {
            return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]);
          }
          if (arguments[0] === "option" && arguments[1] === "items") {
            return this.controlgroup.apply(this, [arguments[0], "items.button"]);
          }
          if (typeof arguments[0] === "object" && arguments[0].items) {
            arguments[0].items = {
              button: arguments[0].items
            };
          }
          return this.controlgroup.apply(this, arguments);
        };
      }
      var widgetsButton = $2.ui.button;
      /*!
       * jQuery UI Datepicker 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.extend($2.ui, {datepicker: {version: "1.12.1"}});
      var datepicker_instActive;
      function datepicker_getZindex(elem) {
        var position2, value;
        while (elem.length && elem[0] !== document) {
          position2 = elem.css("position");
          if (position2 === "absolute" || position2 === "relative" || position2 === "fixed") {
            value = parseInt(elem.css("zIndex"), 10);
            if (!isNaN(value) && value !== 0) {
              return value;
            }
          }
          elem = elem.parent();
        }
        return 0;
      }
      function Datepicker() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ""
        };
        this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: false,
          hideIfNoPrevNext: false,
          navigationAsDateFormat: false,
          gotoCurrent: false,
          changeMonth: false,
          changeYear: false,
          yearRange: "c-10:c+10",
          showOtherMonths: false,
          selectOtherMonths: false,
          showWeek: false,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: true,
          showButtonPanel: false,
          autoSize: false,
          disabled: false
        };
        $2.extend(this._defaults, this.regional[""]);
        this.regional.en = $2.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = $2.extend(true, {}, this.regional.en);
        this.dpDiv = datepicker_bindHover($2("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
      }
      $2.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
          return this.dpDiv;
        },
        setDefaults: function(settings) {
          datepicker_extendRemove(this._defaults, settings || {});
          return this;
        },
        _attachDatepicker: function(target, settings) {
          var nodeName, inline, inst;
          nodeName = target.nodeName.toLowerCase();
          inline = nodeName === "div" || nodeName === "span";
          if (!target.id) {
            this.uuid += 1;
            target.id = "dp" + this.uuid;
          }
          inst = this._newInst($2(target), inline);
          inst.settings = $2.extend({}, settings || {});
          if (nodeName === "input") {
            this._connectDatepicker(target, inst);
          } else if (inline) {
            this._inlineDatepicker(target, inst);
          }
        },
        _newInst: function(target, inline) {
          var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
          return {
            id,
            input: target,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline,
            dpDiv: !inline ? this.dpDiv : datepicker_bindHover($2("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
          };
        },
        _connectDatepicker: function(target, inst) {
          var input = $2(target);
          inst.append = $2([]);
          inst.trigger = $2([]);
          if (input.hasClass(this.markerClassName)) {
            return;
          }
          this._attachments(input, inst);
          input.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
          this._autoSize(inst);
          $2.data(target, "datepicker", inst);
          if (inst.settings.disabled) {
            this._disableDatepicker(target);
          }
        },
        _attachments: function(input, inst) {
          var showOn, buttonText, buttonImage, appendText = this._get(inst, "appendText"), isRTL = this._get(inst, "isRTL");
          if (inst.append) {
            inst.append.remove();
          }
          if (appendText) {
            inst.append = $2("<span class='" + this._appendClass + "'>" + appendText + "</span>");
            input[isRTL ? "before" : "after"](inst.append);
          }
          input.off("focus", this._showDatepicker);
          if (inst.trigger) {
            inst.trigger.remove();
          }
          showOn = this._get(inst, "showOn");
          if (showOn === "focus" || showOn === "both") {
            input.on("focus", this._showDatepicker);
          }
          if (showOn === "button" || showOn === "both") {
            buttonText = this._get(inst, "buttonText");
            buttonImage = this._get(inst, "buttonImage");
            inst.trigger = $2(this._get(inst, "buttonImageOnly") ? $2("<img/>").addClass(this._triggerClass).attr({src: buttonImage, alt: buttonText, title: buttonText}) : $2("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage ? buttonText : $2("<img/>").attr({src: buttonImage, alt: buttonText, title: buttonText})));
            input[isRTL ? "before" : "after"](inst.trigger);
            inst.trigger.on("click", function() {
              if ($2.datepicker._datepickerShowing && $2.datepicker._lastInput === input[0]) {
                $2.datepicker._hideDatepicker();
              } else if ($2.datepicker._datepickerShowing && $2.datepicker._lastInput !== input[0]) {
                $2.datepicker._hideDatepicker();
                $2.datepicker._showDatepicker(input[0]);
              } else {
                $2.datepicker._showDatepicker(input[0]);
              }
              return false;
            });
          }
        },
        _autoSize: function(inst) {
          if (this._get(inst, "autoSize") && !inst.inline) {
            var findMax, max, maxI, i, date = new Date(2009, 12 - 1, 20), dateFormat = this._get(inst, "dateFormat");
            if (dateFormat.match(/[DM]/)) {
              findMax = function(names) {
                max = 0;
                maxI = 0;
                for (i = 0; i < names.length; i++) {
                  if (names[i].length > max) {
                    max = names[i].length;
                    maxI = i;
                  }
                }
                return maxI;
              };
              date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort")));
              date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay());
            }
            inst.input.attr("size", this._formatDate(inst, date).length);
          }
        },
        _inlineDatepicker: function(target, inst) {
          var divSpan = $2(target);
          if (divSpan.hasClass(this.markerClassName)) {
            return;
          }
          divSpan.addClass(this.markerClassName).append(inst.dpDiv);
          $2.data(target, "datepicker", inst);
          this._setDate(inst, this._getDefaultDate(inst), true);
          this._updateDatepicker(inst);
          this._updateAlternate(inst);
          if (inst.settings.disabled) {
            this._disableDatepicker(target);
          }
          inst.dpDiv.css("display", "block");
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
          var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst;
          if (!inst) {
            this.uuid += 1;
            id = "dp" + this.uuid;
            this._dialogInput = $2("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>");
            this._dialogInput.on("keydown", this._doKeyDown);
            $2("body").append(this._dialogInput);
            inst = this._dialogInst = this._newInst(this._dialogInput, false);
            inst.settings = {};
            $2.data(this._dialogInput[0], "datepicker", inst);
          }
          datepicker_extendRemove(inst.settings, settings || {});
          date = date && date.constructor === Date ? this._formatDate(inst, date) : date;
          this._dialogInput.val(date);
          this._pos = pos ? pos.length ? pos : [pos.pageX, pos.pageY] : null;
          if (!this._pos) {
            browserWidth = document.documentElement.clientWidth;
            browserHeight = document.documentElement.clientHeight;
            scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            this._pos = [browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY];
          }
          this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
          inst.settings.onSelect = onSelect;
          this._inDialog = true;
          this.dpDiv.addClass(this._dialogClass);
          this._showDatepicker(this._dialogInput[0]);
          if ($2.blockUI) {
            $2.blockUI(this.dpDiv);
          }
          $2.data(this._dialogInput[0], "datepicker", inst);
          return this;
        },
        _destroyDatepicker: function(target) {
          var nodeName, $target = $2(target), inst = $2.data(target, "datepicker");
          if (!$target.hasClass(this.markerClassName)) {
            return;
          }
          nodeName = target.nodeName.toLowerCase();
          $2.removeData(target, "datepicker");
          if (nodeName === "input") {
            inst.append.remove();
            inst.trigger.remove();
            $target.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp);
          } else if (nodeName === "div" || nodeName === "span") {
            $target.removeClass(this.markerClassName).empty();
          }
          if (datepicker_instActive === inst) {
            datepicker_instActive = null;
          }
        },
        _enableDatepicker: function(target) {
          var nodeName, inline, $target = $2(target), inst = $2.data(target, "datepicker");
          if (!$target.hasClass(this.markerClassName)) {
            return;
          }
          nodeName = target.nodeName.toLowerCase();
          if (nodeName === "input") {
            target.disabled = false;
            inst.trigger.filter("button").each(function() {
              this.disabled = false;
            }).end().filter("img").css({opacity: "1.0", cursor: ""});
          } else if (nodeName === "div" || nodeName === "span") {
            inline = $target.children("." + this._inlineClass);
            inline.children().removeClass("ui-state-disabled");
            inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false);
          }
          this._disabledInputs = $2.map(this._disabledInputs, function(value) {
            return value === target ? null : value;
          });
        },
        _disableDatepicker: function(target) {
          var nodeName, inline, $target = $2(target), inst = $2.data(target, "datepicker");
          if (!$target.hasClass(this.markerClassName)) {
            return;
          }
          nodeName = target.nodeName.toLowerCase();
          if (nodeName === "input") {
            target.disabled = true;
            inst.trigger.filter("button").each(function() {
              this.disabled = true;
            }).end().filter("img").css({opacity: "0.5", cursor: "default"});
          } else if (nodeName === "div" || nodeName === "span") {
            inline = $target.children("." + this._inlineClass);
            inline.children().addClass("ui-state-disabled");
            inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true);
          }
          this._disabledInputs = $2.map(this._disabledInputs, function(value) {
            return value === target ? null : value;
          });
          this._disabledInputs[this._disabledInputs.length] = target;
        },
        _isDisabledDatepicker: function(target) {
          if (!target) {
            return false;
          }
          for (var i = 0; i < this._disabledInputs.length; i++) {
            if (this._disabledInputs[i] === target) {
              return true;
            }
          }
          return false;
        },
        _getInst: function(target) {
          try {
            return $2.data(target, "datepicker");
          } catch (err) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function(target, name, value) {
          var settings, date, minDate, maxDate, inst = this._getInst(target);
          if (arguments.length === 2 && typeof name === "string") {
            return name === "defaults" ? $2.extend({}, $2.datepicker._defaults) : inst ? name === "all" ? $2.extend({}, inst.settings) : this._get(inst, name) : null;
          }
          settings = name || {};
          if (typeof name === "string") {
            settings = {};
            settings[name] = value;
          }
          if (inst) {
            if (this._curInst === inst) {
              this._hideDatepicker();
            }
            date = this._getDateDatepicker(target, true);
            minDate = this._getMinMaxDate(inst, "min");
            maxDate = this._getMinMaxDate(inst, "max");
            datepicker_extendRemove(inst.settings, settings);
            if (minDate !== null && settings.dateFormat !== void 0 && settings.minDate === void 0) {
              inst.settings.minDate = this._formatDate(inst, minDate);
            }
            if (maxDate !== null && settings.dateFormat !== void 0 && settings.maxDate === void 0) {
              inst.settings.maxDate = this._formatDate(inst, maxDate);
            }
            if ("disabled" in settings) {
              if (settings.disabled) {
                this._disableDatepicker(target);
              } else {
                this._enableDatepicker(target);
              }
            }
            this._attachments($2(target), inst);
            this._autoSize(inst);
            this._setDate(inst, date);
            this._updateAlternate(inst);
            this._updateDatepicker(inst);
          }
        },
        _changeDatepicker: function(target, name, value) {
          this._optionDatepicker(target, name, value);
        },
        _refreshDatepicker: function(target) {
          var inst = this._getInst(target);
          if (inst) {
            this._updateDatepicker(inst);
          }
        },
        _setDateDatepicker: function(target, date) {
          var inst = this._getInst(target);
          if (inst) {
            this._setDate(inst, date);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
          }
        },
        _getDateDatepicker: function(target, noDefault) {
          var inst = this._getInst(target);
          if (inst && !inst.inline) {
            this._setDateFromField(inst, noDefault);
          }
          return inst ? this._getDate(inst) : null;
        },
        _doKeyDown: function(event) {
          var onSelect, dateStr, sel, inst = $2.datepicker._getInst(event.target), handled = true, isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
          inst._keyEvent = true;
          if ($2.datepicker._datepickerShowing) {
            switch (event.keyCode) {
              case 9:
                $2.datepicker._hideDatepicker();
                handled = false;
                break;
              case 13:
                sel = $2("td." + $2.datepicker._dayOverClass + ":not(." + $2.datepicker._currentClass + ")", inst.dpDiv);
                if (sel[0]) {
                  $2.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                }
                onSelect = $2.datepicker._get(inst, "onSelect");
                if (onSelect) {
                  dateStr = $2.datepicker._formatDate(inst);
                  onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
                } else {
                  $2.datepicker._hideDatepicker();
                }
                return false;
              case 27:
                $2.datepicker._hideDatepicker();
                break;
              case 33:
                $2.datepicker._adjustDate(event.target, event.ctrlKey ? -$2.datepicker._get(inst, "stepBigMonths") : -$2.datepicker._get(inst, "stepMonths"), "M");
                break;
              case 34:
                $2.datepicker._adjustDate(event.target, event.ctrlKey ? +$2.datepicker._get(inst, "stepBigMonths") : +$2.datepicker._get(inst, "stepMonths"), "M");
                break;
              case 35:
                if (event.ctrlKey || event.metaKey) {
                  $2.datepicker._clearDate(event.target);
                }
                handled = event.ctrlKey || event.metaKey;
                break;
              case 36:
                if (event.ctrlKey || event.metaKey) {
                  $2.datepicker._gotoToday(event.target);
                }
                handled = event.ctrlKey || event.metaKey;
                break;
              case 37:
                if (event.ctrlKey || event.metaKey) {
                  $2.datepicker._adjustDate(event.target, isRTL ? 1 : -1, "D");
                }
                handled = event.ctrlKey || event.metaKey;
                if (event.originalEvent.altKey) {
                  $2.datepicker._adjustDate(event.target, event.ctrlKey ? -$2.datepicker._get(inst, "stepBigMonths") : -$2.datepicker._get(inst, "stepMonths"), "M");
                }
                break;
              case 38:
                if (event.ctrlKey || event.metaKey) {
                  $2.datepicker._adjustDate(event.target, -7, "D");
                }
                handled = event.ctrlKey || event.metaKey;
                break;
              case 39:
                if (event.ctrlKey || event.metaKey) {
                  $2.datepicker._adjustDate(event.target, isRTL ? -1 : 1, "D");
                }
                handled = event.ctrlKey || event.metaKey;
                if (event.originalEvent.altKey) {
                  $2.datepicker._adjustDate(event.target, event.ctrlKey ? +$2.datepicker._get(inst, "stepBigMonths") : +$2.datepicker._get(inst, "stepMonths"), "M");
                }
                break;
              case 40:
                if (event.ctrlKey || event.metaKey) {
                  $2.datepicker._adjustDate(event.target, 7, "D");
                }
                handled = event.ctrlKey || event.metaKey;
                break;
              default:
                handled = false;
            }
          } else if (event.keyCode === 36 && event.ctrlKey) {
            $2.datepicker._showDatepicker(this);
          } else {
            handled = false;
          }
          if (handled) {
            event.preventDefault();
            event.stopPropagation();
          }
        },
        _doKeyPress: function(event) {
          var chars, chr, inst = $2.datepicker._getInst(event.target);
          if ($2.datepicker._get(inst, "constrainInput")) {
            chars = $2.datepicker._possibleChars($2.datepicker._get(inst, "dateFormat"));
            chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
            return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
          }
        },
        _doKeyUp: function(event) {
          var date, inst = $2.datepicker._getInst(event.target);
          if (inst.input.val() !== inst.lastVal) {
            try {
              date = $2.datepicker.parseDate($2.datepicker._get(inst, "dateFormat"), inst.input ? inst.input.val() : null, $2.datepicker._getFormatConfig(inst));
              if (date) {
                $2.datepicker._setDateFromField(inst);
                $2.datepicker._updateAlternate(inst);
                $2.datepicker._updateDatepicker(inst);
              }
            } catch (err) {
            }
          }
          return true;
        },
        _showDatepicker: function(input) {
          input = input.target || input;
          if (input.nodeName.toLowerCase() !== "input") {
            input = $2("input", input.parentNode)[0];
          }
          if ($2.datepicker._isDisabledDatepicker(input) || $2.datepicker._lastInput === input) {
            return;
          }
          var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
          inst = $2.datepicker._getInst(input);
          if ($2.datepicker._curInst && $2.datepicker._curInst !== inst) {
            $2.datepicker._curInst.dpDiv.stop(true, true);
            if (inst && $2.datepicker._datepickerShowing) {
              $2.datepicker._hideDatepicker($2.datepicker._curInst.input[0]);
            }
          }
          beforeShow = $2.datepicker._get(inst, "beforeShow");
          beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
          if (beforeShowSettings === false) {
            return;
          }
          datepicker_extendRemove(inst.settings, beforeShowSettings);
          inst.lastVal = null;
          $2.datepicker._lastInput = input;
          $2.datepicker._setDateFromField(inst);
          if ($2.datepicker._inDialog) {
            input.value = "";
          }
          if (!$2.datepicker._pos) {
            $2.datepicker._pos = $2.datepicker._findPos(input);
            $2.datepicker._pos[1] += input.offsetHeight;
          }
          isFixed = false;
          $2(input).parents().each(function() {
            isFixed |= $2(this).css("position") === "fixed";
            return !isFixed;
          });
          offset = {left: $2.datepicker._pos[0], top: $2.datepicker._pos[1]};
          $2.datepicker._pos = null;
          inst.dpDiv.empty();
          inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
          $2.datepicker._updateDatepicker(inst);
          offset = $2.datepicker._checkOffset(inst, offset, isFixed);
          inst.dpDiv.css({
            position: $2.datepicker._inDialog && $2.blockUI ? "static" : isFixed ? "fixed" : "absolute",
            display: "none",
            left: offset.left + "px",
            top: offset.top + "px"
          });
          if (!inst.inline) {
            showAnim = $2.datepicker._get(inst, "showAnim");
            duration = $2.datepicker._get(inst, "duration");
            inst.dpDiv.css("z-index", datepicker_getZindex($2(input)) + 1);
            $2.datepicker._datepickerShowing = true;
            if ($2.effects && $2.effects.effect[showAnim]) {
              inst.dpDiv.show(showAnim, $2.datepicker._get(inst, "showOptions"), duration);
            } else {
              inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
            }
            if ($2.datepicker._shouldFocusInput(inst)) {
              inst.input.trigger("focus");
            }
            $2.datepicker._curInst = inst;
          }
        },
        _updateDatepicker: function(inst) {
          this.maxRows = 4;
          datepicker_instActive = inst;
          inst.dpDiv.empty().append(this._generateHTML(inst));
          this._attachHandlers(inst);
          var origyearshtml, numMonths = this._getNumberOfMonths(inst), cols = numMonths[1], width = 17, activeCell = inst.dpDiv.find("." + this._dayOverClass + " a");
          if (activeCell.length > 0) {
            datepicker_handleMouseover.apply(activeCell.get(0));
          }
          inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
          if (cols > 1) {
            inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", width * cols + "em");
          }
          inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
          inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
          if (inst === $2.datepicker._curInst && $2.datepicker._datepickerShowing && $2.datepicker._shouldFocusInput(inst)) {
            inst.input.trigger("focus");
          }
          if (inst.yearshtml) {
            origyearshtml = inst.yearshtml;
            setTimeout(function() {
              if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
              }
              origyearshtml = inst.yearshtml = null;
            }, 0);
          }
        },
        _shouldFocusInput: function(inst) {
          return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus");
        },
        _checkOffset: function(inst, offset, isFixed) {
          var dpWidth = inst.dpDiv.outerWidth(), dpHeight = inst.dpDiv.outerHeight(), inputWidth = inst.input ? inst.input.outerWidth() : 0, inputHeight = inst.input ? inst.input.outerHeight() : 0, viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $2(document).scrollLeft()), viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $2(document).scrollTop());
          offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0;
          offset.left -= isFixed && offset.left === inst.input.offset().left ? $2(document).scrollLeft() : 0;
          offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $2(document).scrollTop() : 0;
          offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
          offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);
          return offset;
        },
        _findPos: function(obj) {
          var position2, inst = this._getInst(obj), isRTL = this._get(inst, "isRTL");
          while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $2.expr.filters.hidden(obj))) {
            obj = obj[isRTL ? "previousSibling" : "nextSibling"];
          }
          position2 = $2(obj).offset();
          return [position2.left, position2.top];
        },
        _hideDatepicker: function(input) {
          var showAnim, duration, postProcess, onClose, inst = this._curInst;
          if (!inst || input && inst !== $2.data(input, "datepicker")) {
            return;
          }
          if (this._datepickerShowing) {
            showAnim = this._get(inst, "showAnim");
            duration = this._get(inst, "duration");
            postProcess = function() {
              $2.datepicker._tidyDialog(inst);
            };
            if ($2.effects && ($2.effects.effect[showAnim] || $2.effects[showAnim])) {
              inst.dpDiv.hide(showAnim, $2.datepicker._get(inst, "showOptions"), duration, postProcess);
            } else {
              inst.dpDiv[showAnim === "slideDown" ? "slideUp" : showAnim === "fadeIn" ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess);
            }
            if (!showAnim) {
              postProcess();
            }
            this._datepickerShowing = false;
            onClose = this._get(inst, "onClose");
            if (onClose) {
              onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : "", inst]);
            }
            this._lastInput = null;
            if (this._inDialog) {
              this._dialogInput.css({position: "absolute", left: "0", top: "-100px"});
              if ($2.blockUI) {
                $2.unblockUI();
                $2("body").append(this.dpDiv);
              }
            }
            this._inDialog = false;
          }
        },
        _tidyDialog: function(inst) {
          inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(event) {
          if (!$2.datepicker._curInst) {
            return;
          }
          var $target = $2(event.target), inst = $2.datepicker._getInst($target[0]);
          if ($target[0].id !== $2.datepicker._mainDivId && $target.parents("#" + $2.datepicker._mainDivId).length === 0 && !$target.hasClass($2.datepicker.markerClassName) && !$target.closest("." + $2.datepicker._triggerClass).length && $2.datepicker._datepickerShowing && !($2.datepicker._inDialog && $2.blockUI) || $target.hasClass($2.datepicker.markerClassName) && $2.datepicker._curInst !== inst) {
            $2.datepicker._hideDatepicker();
          }
        },
        _adjustDate: function(id, offset, period) {
          var target = $2(id), inst = this._getInst(target[0]);
          if (this._isDisabledDatepicker(target[0])) {
            return;
          }
          this._adjustInstDate(inst, offset + (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
          this._updateDatepicker(inst);
        },
        _gotoToday: function(id) {
          var date, target = $2(id), inst = this._getInst(target[0]);
          if (this._get(inst, "gotoCurrent") && inst.currentDay) {
            inst.selectedDay = inst.currentDay;
            inst.drawMonth = inst.selectedMonth = inst.currentMonth;
            inst.drawYear = inst.selectedYear = inst.currentYear;
          } else {
            date = new Date();
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
          }
          this._notifyChange(inst);
          this._adjustDate(target);
        },
        _selectMonthYear: function(id, select, period) {
          var target = $2(id), inst = this._getInst(target[0]);
          inst["selected" + (period === "M" ? "Month" : "Year")] = inst["draw" + (period === "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
          this._notifyChange(inst);
          this._adjustDate(target);
        },
        _selectDay: function(id, month, year, td) {
          var inst, target = $2(id);
          if ($2(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
            return;
          }
          inst = this._getInst(target[0]);
          inst.selectedDay = inst.currentDay = $2("a", td).html();
          inst.selectedMonth = inst.currentMonth = month;
          inst.selectedYear = inst.currentYear = year;
          this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
        },
        _clearDate: function(id) {
          var target = $2(id);
          this._selectDate(target, "");
        },
        _selectDate: function(id, dateStr) {
          var onSelect, target = $2(id), inst = this._getInst(target[0]);
          dateStr = dateStr != null ? dateStr : this._formatDate(inst);
          if (inst.input) {
            inst.input.val(dateStr);
          }
          this._updateAlternate(inst);
          onSelect = this._get(inst, "onSelect");
          if (onSelect) {
            onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
          } else if (inst.input) {
            inst.input.trigger("change");
          }
          if (inst.inline) {
            this._updateDatepicker(inst);
          } else {
            this._hideDatepicker();
            this._lastInput = inst.input[0];
            if (typeof inst.input[0] !== "object") {
              inst.input.trigger("focus");
            }
            this._lastInput = null;
          }
        },
        _updateAlternate: function(inst) {
          var altFormat, date, dateStr, altField = this._get(inst, "altField");
          if (altField) {
            altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
            date = this._getDate(inst);
            dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
            $2(altField).val(dateStr);
          }
        },
        noWeekends: function(date) {
          var day = date.getDay();
          return [day > 0 && day < 6, ""];
        },
        iso8601Week: function(date) {
          var time, checkDate = new Date(date.getTime());
          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
          time = checkDate.getTime();
          checkDate.setMonth(0);
          checkDate.setDate(1);
          return Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1;
        },
        parseDate: function(format, value, settings) {
          if (format == null || value == null) {
            throw "Invalid arguments";
          }
          value = typeof value === "object" ? value.toString() : value + "";
          if (value === "") {
            return null;
          }
          var iFormat, dim, extra, iValue = 0, shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff, shortYearCutoff = typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp : new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10), dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function(match) {
            var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
            if (matches) {
              iFormat++;
            }
            return matches;
          }, getNumber = function(match) {
            var isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
            if (!num) {
              throw "Missing number at position " + iValue;
            }
            iValue += num[0].length;
            return parseInt(num[0], 10);
          }, getName = function(match, shortNames, longNames) {
            var index = -1, names = $2.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
              return [[k, v]];
            }).sort(function(a, b) {
              return -(a[1].length - b[1].length);
            });
            $2.each(names, function(i, pair) {
              var name = pair[1];
              if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                index = pair[0];
                iValue += name.length;
                return false;
              }
            });
            if (index !== -1) {
              return index + 1;
            } else {
              throw "Unknown name at position " + iValue;
            }
          }, checkLiteral = function() {
            if (value.charAt(iValue) !== format.charAt(iFormat)) {
              throw "Unexpected literal at position " + iValue;
            }
            iValue++;
          };
          for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
              if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                literal = false;
              } else {
                checkLiteral();
              }
            } else {
              switch (format.charAt(iFormat)) {
                case "d":
                  day = getNumber("d");
                  break;
                case "D":
                  getName("D", dayNamesShort, dayNames);
                  break;
                case "o":
                  doy = getNumber("o");
                  break;
                case "m":
                  month = getNumber("m");
                  break;
                case "M":
                  month = getName("M", monthNamesShort, monthNames);
                  break;
                case "y":
                  year = getNumber("y");
                  break;
                case "@":
                  date = new Date(getNumber("@"));
                  year = date.getFullYear();
                  month = date.getMonth() + 1;
                  day = date.getDate();
                  break;
                case "!":
                  date = new Date((getNumber("!") - this._ticksTo1970) / 1e4);
                  year = date.getFullYear();
                  month = date.getMonth() + 1;
                  day = date.getDate();
                  break;
                case "'":
                  if (lookAhead("'")) {
                    checkLiteral();
                  } else {
                    literal = true;
                  }
                  break;
                default:
                  checkLiteral();
              }
            }
          }
          if (iValue < value.length) {
            extra = value.substr(iValue);
            if (!/^\s+/.test(extra)) {
              throw "Extra/unparsed characters found in date: " + extra;
            }
          }
          if (year === -1) {
            year = new Date().getFullYear();
          } else if (year < 100) {
            year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
          }
          if (doy > -1) {
            month = 1;
            day = doy;
            do {
              dim = this._getDaysInMonth(year, month - 1);
              if (day <= dim) {
                break;
              }
              month++;
              day -= dim;
            } while (true);
          }
          date = this._daylightSavingAdjust(new Date(year, month - 1, day));
          if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw "Invalid date";
          }
          return date;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7,
        formatDate: function(format, date, settings) {
          if (!date) {
            return "";
          }
          var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, lookAhead = function(match) {
            var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
            if (matches) {
              iFormat++;
            }
            return matches;
          }, formatNumber = function(match, value, len) {
            var num = "" + value;
            if (lookAhead(match)) {
              while (num.length < len) {
                num = "0" + num;
              }
            }
            return num;
          }, formatName = function(match, value, shortNames, longNames) {
            return lookAhead(match) ? longNames[value] : shortNames[value];
          }, output = "", literal = false;
          if (date) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
              if (literal) {
                if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                  literal = false;
                } else {
                  output += format.charAt(iFormat);
                }
              } else {
                switch (format.charAt(iFormat)) {
                  case "d":
                    output += formatNumber("d", date.getDate(), 2);
                    break;
                  case "D":
                    output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                    break;
                  case "o":
                    output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                  case "m":
                    output += formatNumber("m", date.getMonth() + 1, 2);
                    break;
                  case "M":
                    output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                    break;
                  case "y":
                    output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                    break;
                  case "@":
                    output += date.getTime();
                    break;
                  case "!":
                    output += date.getTime() * 1e4 + this._ticksTo1970;
                    break;
                  case "'":
                    if (lookAhead("'")) {
                      output += "'";
                    } else {
                      literal = true;
                    }
                    break;
                  default:
                    output += format.charAt(iFormat);
                }
              }
            }
          }
          return output;
        },
        _possibleChars: function(format) {
          var iFormat, chars = "", literal = false, lookAhead = function(match) {
            var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
            if (matches) {
              iFormat++;
            }
            return matches;
          };
          for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
              if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                literal = false;
              } else {
                chars += format.charAt(iFormat);
              }
            } else {
              switch (format.charAt(iFormat)) {
                case "d":
                case "m":
                case "y":
                case "@":
                  chars += "0123456789";
                  break;
                case "D":
                case "M":
                  return null;
                case "'":
                  if (lookAhead("'")) {
                    chars += "'";
                  } else {
                    literal = true;
                  }
                  break;
                default:
                  chars += format.charAt(iFormat);
              }
            }
          }
          return chars;
        },
        _get: function(inst, name) {
          return inst.settings[name] !== void 0 ? inst.settings[name] : this._defaults[name];
        },
        _setDateFromField: function(inst, noDefault) {
          if (inst.input.val() === inst.lastVal) {
            return;
          }
          var dateFormat = this._get(inst, "dateFormat"), dates = inst.lastVal = inst.input ? inst.input.val() : null, defaultDate = this._getDefaultDate(inst), date = defaultDate, settings = this._getFormatConfig(inst);
          try {
            date = this.parseDate(dateFormat, dates, settings) || defaultDate;
          } catch (event) {
            dates = noDefault ? "" : dates;
          }
          inst.selectedDay = date.getDate();
          inst.drawMonth = inst.selectedMonth = date.getMonth();
          inst.drawYear = inst.selectedYear = date.getFullYear();
          inst.currentDay = dates ? date.getDate() : 0;
          inst.currentMonth = dates ? date.getMonth() : 0;
          inst.currentYear = dates ? date.getFullYear() : 0;
          this._adjustInstDate(inst);
        },
        _getDefaultDate: function(inst) {
          return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },
        _determineDate: function(inst, date, defaultDate) {
          var offsetNumeric = function(offset) {
            var date2 = new Date();
            date2.setDate(date2.getDate() + offset);
            return date2;
          }, offsetString = function(offset) {
            try {
              return $2.datepicker.parseDate($2.datepicker._get(inst, "dateFormat"), offset, $2.datepicker._getFormatConfig(inst));
            } catch (e) {
            }
            var date2 = (offset.toLowerCase().match(/^c/) ? $2.datepicker._getDate(inst) : null) || new Date(), year = date2.getFullYear(), month = date2.getMonth(), day = date2.getDate(), pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, matches = pattern.exec(offset);
            while (matches) {
              switch (matches[2] || "d") {
                case "d":
                case "D":
                  day += parseInt(matches[1], 10);
                  break;
                case "w":
                case "W":
                  day += parseInt(matches[1], 10) * 7;
                  break;
                case "m":
                case "M":
                  month += parseInt(matches[1], 10);
                  day = Math.min(day, $2.datepicker._getDaysInMonth(year, month));
                  break;
                case "y":
                case "Y":
                  year += parseInt(matches[1], 10);
                  day = Math.min(day, $2.datepicker._getDaysInMonth(year, month));
                  break;
              }
              matches = pattern.exec(offset);
            }
            return new Date(year, month, day);
          }, newDate = date == null || date === "" ? defaultDate : typeof date === "string" ? offsetString(date) : typeof date === "number" ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());
          newDate = newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate;
          if (newDate) {
            newDate.setHours(0);
            newDate.setMinutes(0);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);
          }
          return this._daylightSavingAdjust(newDate);
        },
        _daylightSavingAdjust: function(date) {
          if (!date) {
            return null;
          }
          date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
          return date;
        },
        _setDate: function(inst, date, noChange) {
          var clear = !date, origMonth = inst.selectedMonth, origYear = inst.selectedYear, newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
          inst.selectedDay = inst.currentDay = newDate.getDate();
          inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
          inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
          if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
            this._notifyChange(inst);
          }
          this._adjustInstDate(inst);
          if (inst.input) {
            inst.input.val(clear ? "" : this._formatDate(inst));
          }
        },
        _getDate: function(inst) {
          var startDate = !inst.currentYear || inst.input && inst.input.val() === "" ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
          return startDate;
        },
        _attachHandlers: function(inst) {
          var stepMonths = this._get(inst, "stepMonths"), id = "#" + inst.id.replace(/\\\\/g, "\\");
          inst.dpDiv.find("[data-handler]").map(function() {
            var handler = {
              prev: function() {
                $2.datepicker._adjustDate(id, -stepMonths, "M");
              },
              next: function() {
                $2.datepicker._adjustDate(id, +stepMonths, "M");
              },
              hide: function() {
                $2.datepicker._hideDatepicker();
              },
              today: function() {
                $2.datepicker._gotoToday(id);
              },
              selectDay: function() {
                $2.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                return false;
              },
              selectMonth: function() {
                $2.datepicker._selectMonthYear(id, this, "M");
                return false;
              },
              selectYear: function() {
                $2.datepicker._selectMonthYear(id, this, "Y");
                return false;
              }
            };
            $2(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
          });
        },
        _generateHTML: function(inst) {
          var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date(), today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), isRTL = this._get(inst, "isRTL"), showButtonPanel = this._get(inst, "showButtonPanel"), hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"), navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"), numMonths = this._getNumberOfMonths(inst), showCurrentAtPos = this._get(inst, "showCurrentAtPos"), stepMonths = this._get(inst, "stepMonths"), isMultiMonth = numMonths[0] !== 1 || numMonths[1] !== 1, currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)), minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), drawMonth = inst.drawMonth - showCurrentAtPos, drawYear = inst.drawYear;
          if (drawMonth < 0) {
            drawMonth += 12;
            drawYear--;
          }
          if (maxDate) {
            maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate()));
            maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;
            while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
              drawMonth--;
              if (drawMonth < 0) {
                drawMonth = 11;
                drawYear--;
              }
            }
          }
          inst.drawMonth = drawMonth;
          inst.drawYear = drawYear;
          prevText = this._get(inst, "prevText");
          prevText = !navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst));
          prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>";
          nextText = this._get(inst, "nextText");
          nextText = !navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst));
          next = this._canAdjustMonth(inst, 1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>";
          currentText = this._get(inst, "currentText");
          gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today;
          currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));
          controls = !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(inst, "closeText") + "</button>" : "";
          buttonPanel = showButtonPanel ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
          firstDay = parseInt(this._get(inst, "firstDay"), 10);
          firstDay = isNaN(firstDay) ? 0 : firstDay;
          showWeek = this._get(inst, "showWeek");
          dayNames = this._get(inst, "dayNames");
          dayNamesMin = this._get(inst, "dayNamesMin");
          monthNames = this._get(inst, "monthNames");
          monthNamesShort = this._get(inst, "monthNamesShort");
          beforeShowDay = this._get(inst, "beforeShowDay");
          showOtherMonths = this._get(inst, "showOtherMonths");
          selectOtherMonths = this._get(inst, "selectOtherMonths");
          defaultDate = this._getDefaultDate(inst);
          html = "";
          for (row = 0; row < numMonths[0]; row++) {
            group = "";
            this.maxRows = 4;
            for (col = 0; col < numMonths[1]; col++) {
              selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
              cornerClass = " ui-corner-all";
              calender = "";
              if (isMultiMonth) {
                calender += "<div class='ui-datepicker-group";
                if (numMonths[1] > 1) {
                  switch (col) {
                    case 0:
                      calender += " ui-datepicker-group-first";
                      cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                      break;
                    case numMonths[1] - 1:
                      calender += " ui-datepicker-group-last";
                      cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                      break;
                    default:
                      calender += " ui-datepicker-group-middle";
                      cornerClass = "";
                      break;
                  }
                }
                calender += "'>";
              }
              calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && row === 0 ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && row === 0 ? isRTL ? prev : next : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
              thead = showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "";
              for (dow = 0; dow < 7; dow++) {
                day = (dow + firstDay) % 7;
                thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
              }
              calender += thead + "</tr></thead><tbody>";
              daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
              if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
              }
              leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
              curRows = Math.ceil((leadDays + daysInMonth) / 7);
              numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows;
              this.maxRows = numRows;
              printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
              for (dRow = 0; dRow < numRows; dRow++) {
                calender += "<tr>";
                tbody = !showWeek ? "" : "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>";
                for (dow = 0; dow < 7; dow++) {
                  daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [printDate]) : [true, ""];
                  otherMonth = printDate.getMonth() !== drawMonth;
                  unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
                  tbody += "<td class='" + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + (printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + "' href='#'>" + printDate.getDate() + "</a>") + "</td>";
                  printDate.setDate(printDate.getDate() + 1);
                  printDate = this._daylightSavingAdjust(printDate);
                }
                calender += tbody + "</tr>";
              }
              drawMonth++;
              if (drawMonth > 11) {
                drawMonth = 0;
                drawYear++;
              }
              calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (numMonths[0] > 0 && col === numMonths[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
              group += calender;
            }
            html += group;
          }
          html += buttonPanel;
          inst._keyEvent = false;
          return html;
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
          var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"), changeYear = this._get(inst, "changeYear"), showMonthAfterYear = this._get(inst, "showMonthAfterYear"), html = "<div class='ui-datepicker-title'>", monthHtml = "";
          if (secondary || !changeMonth) {
            monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
          } else {
            inMinYear = minDate && minDate.getFullYear() === drawYear;
            inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
            monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
            for (month = 0; month < 12; month++) {
              if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
              }
            }
            monthHtml += "</select>";
          }
          if (!showMonthAfterYear) {
            html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
          }
          if (!inst.yearshtml) {
            inst.yearshtml = "";
            if (secondary || !changeYear) {
              html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
            } else {
              years = this._get(inst, "yearRange").split(":");
              thisYear = new Date().getFullYear();
              determineYear = function(value) {
                var year2 = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
                return isNaN(year2) ? thisYear : year2;
              };
              year = determineYear(years[0]);
              endYear = Math.max(year, determineYear(years[1] || ""));
              year = minDate ? Math.max(year, minDate.getFullYear()) : year;
              endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
              inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              for (; year <= endYear; year++) {
                inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
              }
              inst.yearshtml += "</select>";
              html += inst.yearshtml;
              inst.yearshtml = null;
            }
          }
          html += this._get(inst, "yearSuffix");
          if (showMonthAfterYear) {
            html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
          }
          html += "</div>";
          return html;
        },
        _adjustInstDate: function(inst, offset, period) {
          var year = inst.selectedYear + (period === "Y" ? offset : 0), month = inst.selectedMonth + (period === "M" ? offset : 0), day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0), date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
          inst.selectedDay = date.getDate();
          inst.drawMonth = inst.selectedMonth = date.getMonth();
          inst.drawYear = inst.selectedYear = date.getFullYear();
          if (period === "M" || period === "Y") {
            this._notifyChange(inst);
          }
        },
        _restrictMinMax: function(inst, date) {
          var minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), newDate = minDate && date < minDate ? minDate : date;
          return maxDate && newDate > maxDate ? maxDate : newDate;
        },
        _notifyChange: function(inst) {
          var onChange = this._get(inst, "onChangeMonthYear");
          if (onChange) {
            onChange.apply(inst.input ? inst.input[0] : null, [inst.selectedYear, inst.selectedMonth + 1, inst]);
          }
        },
        _getNumberOfMonths: function(inst) {
          var numMonths = this._get(inst, "numberOfMonths");
          return numMonths == null ? [1, 1] : typeof numMonths === "number" ? [1, numMonths] : numMonths;
        },
        _getMinMaxDate: function(inst, minMax) {
          return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },
        _getDaysInMonth: function(year, month) {
          return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },
        _getFirstDayOfMonth: function(year, month) {
          return new Date(year, month, 1).getDay();
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
          var numMonths = this._getNumberOfMonths(inst), date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
          if (offset < 0) {
            date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
          }
          return this._isInRange(inst, date);
        },
        _isInRange: function(inst, date) {
          var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), minYear = null, maxYear = null, years = this._get(inst, "yearRange");
          if (years) {
            yearSplit = years.split(":");
            currentYear = new Date().getFullYear();
            minYear = parseInt(yearSplit[0], 10);
            maxYear = parseInt(yearSplit[1], 10);
            if (yearSplit[0].match(/[+\-].*/)) {
              minYear += currentYear;
            }
            if (yearSplit[1].match(/[+\-].*/)) {
              maxYear += currentYear;
            }
          }
          return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear);
        },
        _getFormatConfig: function(inst) {
          var shortYearCutoff = this._get(inst, "shortYearCutoff");
          shortYearCutoff = typeof shortYearCutoff !== "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10);
          return {
            shortYearCutoff,
            dayNamesShort: this._get(inst, "dayNamesShort"),
            dayNames: this._get(inst, "dayNames"),
            monthNamesShort: this._get(inst, "monthNamesShort"),
            monthNames: this._get(inst, "monthNames")
          };
        },
        _formatDate: function(inst, day, month, year) {
          if (!day) {
            inst.currentDay = inst.selectedDay;
            inst.currentMonth = inst.selectedMonth;
            inst.currentYear = inst.selectedYear;
          }
          var date = day ? typeof day === "object" ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
          return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
      });
      function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.on("mouseout", selector, function() {
          $2(this).removeClass("ui-state-hover");
          if (this.className.indexOf("ui-datepicker-prev") !== -1) {
            $2(this).removeClass("ui-datepicker-prev-hover");
          }
          if (this.className.indexOf("ui-datepicker-next") !== -1) {
            $2(this).removeClass("ui-datepicker-next-hover");
          }
        }).on("mouseover", selector, datepicker_handleMouseover);
      }
      function datepicker_handleMouseover() {
        if (!$2.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
          $2(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
          $2(this).addClass("ui-state-hover");
          if (this.className.indexOf("ui-datepicker-prev") !== -1) {
            $2(this).addClass("ui-datepicker-prev-hover");
          }
          if (this.className.indexOf("ui-datepicker-next") !== -1) {
            $2(this).addClass("ui-datepicker-next-hover");
          }
        }
      }
      function datepicker_extendRemove(target, props) {
        $2.extend(target, props);
        for (var name in props) {
          if (props[name] == null) {
            target[name] = props[name];
          }
        }
        return target;
      }
      $2.fn.datepicker = function(options) {
        if (!this.length) {
          return this;
        }
        if (!$2.datepicker.initialized) {
          $2(document).on("mousedown", $2.datepicker._checkExternalClick);
          $2.datepicker.initialized = true;
        }
        if ($2("#" + $2.datepicker._mainDivId).length === 0) {
          $2("body").append($2.datepicker.dpDiv);
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
          return $2.datepicker["_" + options + "Datepicker"].apply($2.datepicker, [this[0]].concat(otherArgs));
        }
        if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
          return $2.datepicker["_" + options + "Datepicker"].apply($2.datepicker, [this[0]].concat(otherArgs));
        }
        return this.each(function() {
          typeof options === "string" ? $2.datepicker["_" + options + "Datepicker"].apply($2.datepicker, [this].concat(otherArgs)) : $2.datepicker._attachDatepicker(this, options);
        });
      };
      $2.datepicker = new Datepicker();
      $2.datepicker.initialized = false;
      $2.datepicker.uuid = new Date().getTime();
      $2.datepicker.version = "1.12.1";
      var widgetsDatepicker = $2.datepicker;
      var ie = $2.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
      /*!
       * jQuery UI Mouse 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var mouseHandled = false;
      $2(document).on("mouseup", function() {
        mouseHandled = false;
      });
      var widgetsMouse = $2.widget("ui.mouse", {
        version: "1.12.1",
        options: {
          cancel: "input, textarea, button, select, option",
          distance: 1,
          delay: 0
        },
        _mouseInit: function() {
          var that = this;
          this.element.on("mousedown." + this.widgetName, function(event) {
            return that._mouseDown(event);
          }).on("click." + this.widgetName, function(event) {
            if (true === $2.data(event.target, that.widgetName + ".preventClickEvent")) {
              $2.removeData(event.target, that.widgetName + ".preventClickEvent");
              event.stopImmediatePropagation();
              return false;
            }
          });
          this.started = false;
        },
        _mouseDestroy: function() {
          this.element.off("." + this.widgetName);
          if (this._mouseMoveDelegate) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
          }
        },
        _mouseDown: function(event) {
          if (mouseHandled) {
            return;
          }
          this._mouseMoved = false;
          this._mouseStarted && this._mouseUp(event);
          this._mouseDownEvent = event;
          var that = this, btnIsLeft = event.which === 1, elIsCancel = typeof this.options.cancel === "string" && event.target.nodeName ? $2(event.target).closest(this.options.cancel).length : false;
          if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
            return true;
          }
          this.mouseDelayMet = !this.options.delay;
          if (!this.mouseDelayMet) {
            this._mouseDelayTimer = setTimeout(function() {
              that.mouseDelayMet = true;
            }, this.options.delay);
          }
          if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
            this._mouseStarted = this._mouseStart(event) !== false;
            if (!this._mouseStarted) {
              event.preventDefault();
              return true;
            }
          }
          if (true === $2.data(event.target, this.widgetName + ".preventClickEvent")) {
            $2.removeData(event.target, this.widgetName + ".preventClickEvent");
          }
          this._mouseMoveDelegate = function(event2) {
            return that._mouseMove(event2);
          };
          this._mouseUpDelegate = function(event2) {
            return that._mouseUp(event2);
          };
          this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
          event.preventDefault();
          mouseHandled = true;
          return true;
        },
        _mouseMove: function(event) {
          if (this._mouseMoved) {
            if ($2.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
              return this._mouseUp(event);
            } else if (!event.which) {
              if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) {
                this.ignoreMissingWhich = true;
              } else if (!this.ignoreMissingWhich) {
                return this._mouseUp(event);
              }
            }
          }
          if (event.which || event.button) {
            this._mouseMoved = true;
          }
          if (this._mouseStarted) {
            this._mouseDrag(event);
            return event.preventDefault();
          }
          if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
            this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;
            this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event);
          }
          return !this._mouseStarted;
        },
        _mouseUp: function(event) {
          this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
          if (this._mouseStarted) {
            this._mouseStarted = false;
            if (event.target === this._mouseDownEvent.target) {
              $2.data(event.target, this.widgetName + ".preventClickEvent", true);
            }
            this._mouseStop(event);
          }
          if (this._mouseDelayTimer) {
            clearTimeout(this._mouseDelayTimer);
            delete this._mouseDelayTimer;
          }
          this.ignoreMissingWhich = false;
          mouseHandled = false;
          event.preventDefault();
        },
        _mouseDistanceMet: function(event) {
          return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
          return this.mouseDelayMet;
        },
        _mouseStart: function() {
        },
        _mouseDrag: function() {
        },
        _mouseStop: function() {
        },
        _mouseCapture: function() {
          return true;
        }
      });
      var plugin = $2.ui.plugin = {
        add: function(module2, option, set) {
          var i, proto = $2.ui[module2].prototype;
          for (i in set) {
            proto.plugins[i] = proto.plugins[i] || [];
            proto.plugins[i].push([option, set[i]]);
          }
        },
        call: function(instance, name, args, allowDisconnected) {
          var i, set = instance.plugins[name];
          if (!set) {
            return;
          }
          if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
            return;
          }
          for (i = 0; i < set.length; i++) {
            if (instance.options[set[i][0]]) {
              set[i][1].apply(instance.element, args);
            }
          }
        }
      };
      var safeBlur = $2.ui.safeBlur = function(element) {
        if (element && element.nodeName.toLowerCase() !== "body") {
          $2(element).trigger("blur");
        }
      };
      /*!
       * jQuery UI Draggable 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.draggable", $2.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
          addClasses: true,
          appendTo: "parent",
          axis: false,
          connectToSortable: false,
          containment: false,
          cursor: "auto",
          cursorAt: false,
          grid: false,
          handle: false,
          helper: "original",
          iframeFix: false,
          opacity: false,
          refreshPositions: false,
          revert: false,
          revertDuration: 500,
          scope: "default",
          scroll: true,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          snap: false,
          snapMode: "both",
          snapTolerance: 20,
          stack: false,
          zIndex: false,
          drag: null,
          start: null,
          stop: null
        },
        _create: function() {
          if (this.options.helper === "original") {
            this._setPositionRelative();
          }
          if (this.options.addClasses) {
            this._addClass("ui-draggable");
          }
          this._setHandleClassName();
          this._mouseInit();
        },
        _setOption: function(key, value) {
          this._super(key, value);
          if (key === "handle") {
            this._removeHandleClassName();
            this._setHandleClassName();
          }
        },
        _destroy: function() {
          if ((this.helper || this.element).is(".ui-draggable-dragging")) {
            this.destroyOnClear = true;
            return;
          }
          this._removeHandleClassName();
          this._mouseDestroy();
        },
        _mouseCapture: function(event) {
          var o = this.options;
          if (this.helper || o.disabled || $2(event.target).closest(".ui-resizable-handle").length > 0) {
            return false;
          }
          this.handle = this._getHandle(event);
          if (!this.handle) {
            return false;
          }
          this._blurActiveElement(event);
          this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);
          return true;
        },
        _blockFrames: function(selector) {
          this.iframeBlocks = this.document.find(selector).map(function() {
            var iframe = $2(this);
            return $2("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
          });
        },
        _unblockFrames: function() {
          if (this.iframeBlocks) {
            this.iframeBlocks.remove();
            delete this.iframeBlocks;
          }
        },
        _blurActiveElement: function(event) {
          var activeElement = $2.ui.safeActiveElement(this.document[0]), target = $2(event.target);
          if (target.closest(activeElement).length) {
            return;
          }
          $2.ui.safeBlur(activeElement);
        },
        _mouseStart: function(event) {
          var o = this.options;
          this.helper = this._createHelper(event);
          this._addClass(this.helper, "ui-draggable-dragging");
          this._cacheHelperProportions();
          if ($2.ui.ddmanager) {
            $2.ui.ddmanager.current = this;
          }
          this._cacheMargins();
          this.cssPosition = this.helper.css("position");
          this.scrollParent = this.helper.scrollParent(true);
          this.offsetParent = this.helper.offsetParent();
          this.hasFixedAncestor = this.helper.parents().filter(function() {
            return $2(this).css("position") === "fixed";
          }).length > 0;
          this.positionAbs = this.element.offset();
          this._refreshOffsets(event);
          this.originalPosition = this.position = this._generatePosition(event, false);
          this.originalPageX = event.pageX;
          this.originalPageY = event.pageY;
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
          this._setContainment();
          if (this._trigger("start", event) === false) {
            this._clear();
            return false;
          }
          this._cacheHelperProportions();
          if ($2.ui.ddmanager && !o.dropBehaviour) {
            $2.ui.ddmanager.prepareOffsets(this, event);
          }
          this._mouseDrag(event, true);
          if ($2.ui.ddmanager) {
            $2.ui.ddmanager.dragStart(this, event);
          }
          return true;
        },
        _refreshOffsets: function(event) {
          this.offset = {
            top: this.positionAbs.top - this.margins.top,
            left: this.positionAbs.left - this.margins.left,
            scroll: false,
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
          };
          this.offset.click = {
            left: event.pageX - this.offset.left,
            top: event.pageY - this.offset.top
          };
        },
        _mouseDrag: function(event, noPropagation) {
          if (this.hasFixedAncestor) {
            this.offset.parent = this._getParentOffset();
          }
          this.position = this._generatePosition(event, true);
          this.positionAbs = this._convertPositionTo("absolute");
          if (!noPropagation) {
            var ui = this._uiHash();
            if (this._trigger("drag", event, ui) === false) {
              this._mouseUp(new $2.Event("mouseup", event));
              return false;
            }
            this.position = ui.position;
          }
          this.helper[0].style.left = this.position.left + "px";
          this.helper[0].style.top = this.position.top + "px";
          if ($2.ui.ddmanager) {
            $2.ui.ddmanager.drag(this, event);
          }
          return false;
        },
        _mouseStop: function(event) {
          var that = this, dropped = false;
          if ($2.ui.ddmanager && !this.options.dropBehaviour) {
            dropped = $2.ui.ddmanager.drop(this, event);
          }
          if (this.dropped) {
            dropped = this.dropped;
            this.dropped = false;
          }
          if (this.options.revert === "invalid" && !dropped || this.options.revert === "valid" && dropped || this.options.revert === true || $2.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped)) {
            $2(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
              if (that._trigger("stop", event) !== false) {
                that._clear();
              }
            });
          } else {
            if (this._trigger("stop", event) !== false) {
              this._clear();
            }
          }
          return false;
        },
        _mouseUp: function(event) {
          this._unblockFrames();
          if ($2.ui.ddmanager) {
            $2.ui.ddmanager.dragStop(this, event);
          }
          if (this.handleElement.is(event.target)) {
            this.element.trigger("focus");
          }
          return $2.ui.mouse.prototype._mouseUp.call(this, event);
        },
        cancel: function() {
          if (this.helper.is(".ui-draggable-dragging")) {
            this._mouseUp(new $2.Event("mouseup", {target: this.element[0]}));
          } else {
            this._clear();
          }
          return this;
        },
        _getHandle: function(event) {
          return this.options.handle ? !!$2(event.target).closest(this.element.find(this.options.handle)).length : true;
        },
        _setHandleClassName: function() {
          this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
          this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function() {
          this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function(event) {
          var o = this.options, helperIsFunction = $2.isFunction(o.helper), helper = helperIsFunction ? $2(o.helper.apply(this.element[0], [event])) : o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
          if (!helper.parents("body").length) {
            helper.appendTo(o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo);
          }
          if (helperIsFunction && helper[0] === this.element[0]) {
            this._setPositionRelative();
          }
          if (helper[0] !== this.element[0] && !/(fixed|absolute)/.test(helper.css("position"))) {
            helper.css("position", "absolute");
          }
          return helper;
        },
        _setPositionRelative: function() {
          if (!/^(?:r|a|f)/.test(this.element.css("position"))) {
            this.element[0].style.position = "relative";
          }
        },
        _adjustOffsetFromHelper: function(obj) {
          if (typeof obj === "string") {
            obj = obj.split(" ");
          }
          if ($2.isArray(obj)) {
            obj = {left: +obj[0], top: +obj[1] || 0};
          }
          if ("left" in obj) {
            this.offset.click.left = obj.left + this.margins.left;
          }
          if ("right" in obj) {
            this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
          }
          if ("top" in obj) {
            this.offset.click.top = obj.top + this.margins.top;
          }
          if ("bottom" in obj) {
            this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
          }
        },
        _isRootNode: function(element) {
          return /(html|body)/i.test(element.tagName) || element === this.document[0];
        },
        _getParentOffset: function() {
          var po = this.offsetParent.offset(), document2 = this.document[0];
          if (this.cssPosition === "absolute" && this.scrollParent[0] !== document2 && $2.contains(this.scrollParent[0], this.offsetParent[0])) {
            po.left += this.scrollParent.scrollLeft();
            po.top += this.scrollParent.scrollTop();
          }
          if (this._isRootNode(this.offsetParent[0])) {
            po = {top: 0, left: 0};
          }
          return {
            top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
          };
        },
        _getRelativeOffset: function() {
          if (this.cssPosition !== "relative") {
            return {top: 0, left: 0};
          }
          var p = this.element.position(), scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
          return {
            top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
            left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
          };
        },
        _cacheMargins: function() {
          this.margins = {
            left: parseInt(this.element.css("marginLeft"), 10) || 0,
            top: parseInt(this.element.css("marginTop"), 10) || 0,
            right: parseInt(this.element.css("marginRight"), 10) || 0,
            bottom: parseInt(this.element.css("marginBottom"), 10) || 0
          };
        },
        _cacheHelperProportions: function() {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight()
          };
        },
        _setContainment: function() {
          var isUserScrollable, c, ce, o = this.options, document2 = this.document[0];
          this.relativeContainer = null;
          if (!o.containment) {
            this.containment = null;
            return;
          }
          if (o.containment === "window") {
            this.containment = [
              $2(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
              $2(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
              $2(window).scrollLeft() + $2(window).width() - this.helperProportions.width - this.margins.left,
              $2(window).scrollTop() + ($2(window).height() || document2.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            return;
          }
          if (o.containment === "document") {
            this.containment = [
              0,
              0,
              $2(document2).width() - this.helperProportions.width - this.margins.left,
              ($2(document2).height() || document2.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            return;
          }
          if (o.containment.constructor === Array) {
            this.containment = o.containment;
            return;
          }
          if (o.containment === "parent") {
            o.containment = this.helper[0].parentNode;
          }
          c = $2(o.containment);
          ce = c[0];
          if (!ce) {
            return;
          }
          isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));
          this.containment = [
            (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0),
            (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0),
            (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
            (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom
          ];
          this.relativeContainer = c;
        },
        _convertPositionTo: function(d, pos) {
          if (!pos) {
            pos = this.position;
          }
          var mod = d === "absolute" ? 1 : -1, scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
          return {
            top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
            left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
          };
        },
        _generatePosition: function(event, constrainPosition) {
          var containment, co, top, left, o = this.options, scrollIsRootNode = this._isRootNode(this.scrollParent[0]), pageX = event.pageX, pageY = event.pageY;
          if (!scrollIsRootNode || !this.offset.scroll) {
            this.offset.scroll = {
              top: this.scrollParent.scrollTop(),
              left: this.scrollParent.scrollLeft()
            };
          }
          if (constrainPosition) {
            if (this.containment) {
              if (this.relativeContainer) {
                co = this.relativeContainer.offset();
                containment = [
                  this.containment[0] + co.left,
                  this.containment[1] + co.top,
                  this.containment[2] + co.left,
                  this.containment[3] + co.top
                ];
              } else {
                containment = this.containment;
              }
              if (event.pageX - this.offset.click.left < containment[0]) {
                pageX = containment[0] + this.offset.click.left;
              }
              if (event.pageY - this.offset.click.top < containment[1]) {
                pageY = containment[1] + this.offset.click.top;
              }
              if (event.pageX - this.offset.click.left > containment[2]) {
                pageX = containment[2] + this.offset.click.left;
              }
              if (event.pageY - this.offset.click.top > containment[3]) {
                pageY = containment[3] + this.offset.click.top;
              }
            }
            if (o.grid) {
              top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
              pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
              left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
              pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
            }
            if (o.axis === "y") {
              pageX = this.originalPageX;
            }
            if (o.axis === "x") {
              pageY = this.originalPageY;
            }
          }
          return {
            top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
            left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
          };
        },
        _clear: function() {
          this._removeClass(this.helper, "ui-draggable-dragging");
          if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
            this.helper.remove();
          }
          this.helper = null;
          this.cancelHelperRemoval = false;
          if (this.destroyOnClear) {
            this.destroy();
          }
        },
        _trigger: function(type, event, ui) {
          ui = ui || this._uiHash();
          $2.ui.plugin.call(this, type, [event, ui, this], true);
          if (/^(drag|start|stop)/.test(type)) {
            this.positionAbs = this._convertPositionTo("absolute");
            ui.offset = this.positionAbs;
          }
          return $2.Widget.prototype._trigger.call(this, type, event, ui);
        },
        plugins: {},
        _uiHash: function() {
          return {
            helper: this.helper,
            position: this.position,
            originalPosition: this.originalPosition,
            offset: this.positionAbs
          };
        }
      });
      $2.ui.plugin.add("draggable", "connectToSortable", {
        start: function(event, ui, draggable) {
          var uiSortable = $2.extend({}, ui, {
            item: draggable.element
          });
          draggable.sortables = [];
          $2(draggable.options.connectToSortable).each(function() {
            var sortable = $2(this).sortable("instance");
            if (sortable && !sortable.options.disabled) {
              draggable.sortables.push(sortable);
              sortable.refreshPositions();
              sortable._trigger("activate", event, uiSortable);
            }
          });
        },
        stop: function(event, ui, draggable) {
          var uiSortable = $2.extend({}, ui, {
            item: draggable.element
          });
          draggable.cancelHelperRemoval = false;
          $2.each(draggable.sortables, function() {
            var sortable = this;
            if (sortable.isOver) {
              sortable.isOver = 0;
              draggable.cancelHelperRemoval = true;
              sortable.cancelHelperRemoval = false;
              sortable._storedCSS = {
                position: sortable.placeholder.css("position"),
                top: sortable.placeholder.css("top"),
                left: sortable.placeholder.css("left")
              };
              sortable._mouseStop(event);
              sortable.options.helper = sortable.options._helper;
            } else {
              sortable.cancelHelperRemoval = true;
              sortable._trigger("deactivate", event, uiSortable);
            }
          });
        },
        drag: function(event, ui, draggable) {
          $2.each(draggable.sortables, function() {
            var innermostIntersecting = false, sortable = this;
            sortable.positionAbs = draggable.positionAbs;
            sortable.helperProportions = draggable.helperProportions;
            sortable.offset.click = draggable.offset.click;
            if (sortable._intersectsWith(sortable.containerCache)) {
              innermostIntersecting = true;
              $2.each(draggable.sortables, function() {
                this.positionAbs = draggable.positionAbs;
                this.helperProportions = draggable.helperProportions;
                this.offset.click = draggable.offset.click;
                if (this !== sortable && this._intersectsWith(this.containerCache) && $2.contains(sortable.element[0], this.element[0])) {
                  innermostIntersecting = false;
                }
                return innermostIntersecting;
              });
            }
            if (innermostIntersecting) {
              if (!sortable.isOver) {
                sortable.isOver = 1;
                draggable._parent = ui.helper.parent();
                sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", true);
                sortable.options._helper = sortable.options.helper;
                sortable.options.helper = function() {
                  return ui.helper[0];
                };
                event.target = sortable.currentItem[0];
                sortable._mouseCapture(event, true);
                sortable._mouseStart(event, true, true);
                sortable.offset.click.top = draggable.offset.click.top;
                sortable.offset.click.left = draggable.offset.click.left;
                sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left;
                sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top;
                draggable._trigger("toSortable", event);
                draggable.dropped = sortable.element;
                $2.each(draggable.sortables, function() {
                  this.refreshPositions();
                });
                draggable.currentItem = draggable.element;
                sortable.fromOutside = draggable;
              }
              if (sortable.currentItem) {
                sortable._mouseDrag(event);
                ui.position = sortable.position;
              }
            } else {
              if (sortable.isOver) {
                sortable.isOver = 0;
                sortable.cancelHelperRemoval = true;
                sortable.options._revert = sortable.options.revert;
                sortable.options.revert = false;
                sortable._trigger("out", event, sortable._uiHash(sortable));
                sortable._mouseStop(event, true);
                sortable.options.revert = sortable.options._revert;
                sortable.options.helper = sortable.options._helper;
                if (sortable.placeholder) {
                  sortable.placeholder.remove();
                }
                ui.helper.appendTo(draggable._parent);
                draggable._refreshOffsets(event);
                ui.position = draggable._generatePosition(event, true);
                draggable._trigger("fromSortable", event);
                draggable.dropped = false;
                $2.each(draggable.sortables, function() {
                  this.refreshPositions();
                });
              }
            }
          });
        }
      });
      $2.ui.plugin.add("draggable", "cursor", {
        start: function(event, ui, instance) {
          var t = $2("body"), o = instance.options;
          if (t.css("cursor")) {
            o._cursor = t.css("cursor");
          }
          t.css("cursor", o.cursor);
        },
        stop: function(event, ui, instance) {
          var o = instance.options;
          if (o._cursor) {
            $2("body").css("cursor", o._cursor);
          }
        }
      });
      $2.ui.plugin.add("draggable", "opacity", {
        start: function(event, ui, instance) {
          var t = $2(ui.helper), o = instance.options;
          if (t.css("opacity")) {
            o._opacity = t.css("opacity");
          }
          t.css("opacity", o.opacity);
        },
        stop: function(event, ui, instance) {
          var o = instance.options;
          if (o._opacity) {
            $2(ui.helper).css("opacity", o._opacity);
          }
        }
      });
      $2.ui.plugin.add("draggable", "scroll", {
        start: function(event, ui, i) {
          if (!i.scrollParentNotHidden) {
            i.scrollParentNotHidden = i.helper.scrollParent(false);
          }
          if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") {
            i.overflowOffset = i.scrollParentNotHidden.offset();
          }
        },
        drag: function(event, ui, i) {
          var o = i.options, scrolled = false, scrollParent2 = i.scrollParentNotHidden[0], document2 = i.document[0];
          if (scrollParent2 !== document2 && scrollParent2.tagName !== "HTML") {
            if (!o.axis || o.axis !== "x") {
              if (i.overflowOffset.top + scrollParent2.offsetHeight - event.pageY < o.scrollSensitivity) {
                scrollParent2.scrollTop = scrolled = scrollParent2.scrollTop + o.scrollSpeed;
              } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                scrollParent2.scrollTop = scrolled = scrollParent2.scrollTop - o.scrollSpeed;
              }
            }
            if (!o.axis || o.axis !== "y") {
              if (i.overflowOffset.left + scrollParent2.offsetWidth - event.pageX < o.scrollSensitivity) {
                scrollParent2.scrollLeft = scrolled = scrollParent2.scrollLeft + o.scrollSpeed;
              } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                scrollParent2.scrollLeft = scrolled = scrollParent2.scrollLeft - o.scrollSpeed;
              }
            }
          } else {
            if (!o.axis || o.axis !== "x") {
              if (event.pageY - $2(document2).scrollTop() < o.scrollSensitivity) {
                scrolled = $2(document2).scrollTop($2(document2).scrollTop() - o.scrollSpeed);
              } else if ($2(window).height() - (event.pageY - $2(document2).scrollTop()) < o.scrollSensitivity) {
                scrolled = $2(document2).scrollTop($2(document2).scrollTop() + o.scrollSpeed);
              }
            }
            if (!o.axis || o.axis !== "y") {
              if (event.pageX - $2(document2).scrollLeft() < o.scrollSensitivity) {
                scrolled = $2(document2).scrollLeft($2(document2).scrollLeft() - o.scrollSpeed);
              } else if ($2(window).width() - (event.pageX - $2(document2).scrollLeft()) < o.scrollSensitivity) {
                scrolled = $2(document2).scrollLeft($2(document2).scrollLeft() + o.scrollSpeed);
              }
            }
          }
          if (scrolled !== false && $2.ui.ddmanager && !o.dropBehaviour) {
            $2.ui.ddmanager.prepareOffsets(i, event);
          }
        }
      });
      $2.ui.plugin.add("draggable", "snap", {
        start: function(event, ui, i) {
          var o = i.options;
          i.snapElements = [];
          $2(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
            var $t = $2(this), $o = $t.offset();
            if (this !== i.element[0]) {
              i.snapElements.push({
                item: this,
                width: $t.outerWidth(),
                height: $t.outerHeight(),
                top: $o.top,
                left: $o.left
              });
            }
          });
        },
        drag: function(event, ui, inst) {
          var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options, d = o.snapTolerance, x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width, y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;
          for (i = inst.snapElements.length - 1; i >= 0; i--) {
            l = inst.snapElements[i].left - inst.margins.left;
            r = l + inst.snapElements[i].width;
            t = inst.snapElements[i].top - inst.margins.top;
            b = t + inst.snapElements[i].height;
            if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$2.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
              if (inst.snapElements[i].snapping) {
                inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $2.extend(inst._uiHash(), {snapItem: inst.snapElements[i].item}));
              }
              inst.snapElements[i].snapping = false;
              continue;
            }
            if (o.snapMode !== "inner") {
              ts = Math.abs(t - y2) <= d;
              bs = Math.abs(b - y1) <= d;
              ls = Math.abs(l - x2) <= d;
              rs = Math.abs(r - x1) <= d;
              if (ts) {
                ui.position.top = inst._convertPositionTo("relative", {
                  top: t - inst.helperProportions.height,
                  left: 0
                }).top;
              }
              if (bs) {
                ui.position.top = inst._convertPositionTo("relative", {
                  top: b,
                  left: 0
                }).top;
              }
              if (ls) {
                ui.position.left = inst._convertPositionTo("relative", {
                  top: 0,
                  left: l - inst.helperProportions.width
                }).left;
              }
              if (rs) {
                ui.position.left = inst._convertPositionTo("relative", {
                  top: 0,
                  left: r
                }).left;
              }
            }
            first = ts || bs || ls || rs;
            if (o.snapMode !== "outer") {
              ts = Math.abs(t - y1) <= d;
              bs = Math.abs(b - y2) <= d;
              ls = Math.abs(l - x1) <= d;
              rs = Math.abs(r - x2) <= d;
              if (ts) {
                ui.position.top = inst._convertPositionTo("relative", {
                  top: t,
                  left: 0
                }).top;
              }
              if (bs) {
                ui.position.top = inst._convertPositionTo("relative", {
                  top: b - inst.helperProportions.height,
                  left: 0
                }).top;
              }
              if (ls) {
                ui.position.left = inst._convertPositionTo("relative", {
                  top: 0,
                  left: l
                }).left;
              }
              if (rs) {
                ui.position.left = inst._convertPositionTo("relative", {
                  top: 0,
                  left: r - inst.helperProportions.width
                }).left;
              }
            }
            if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
              inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $2.extend(inst._uiHash(), {
                snapItem: inst.snapElements[i].item
              }));
            }
            inst.snapElements[i].snapping = ts || bs || ls || rs || first;
          }
        }
      });
      $2.ui.plugin.add("draggable", "stack", {
        start: function(event, ui, instance) {
          var min, o = instance.options, group = $2.makeArray($2(o.stack)).sort(function(a, b) {
            return (parseInt($2(a).css("zIndex"), 10) || 0) - (parseInt($2(b).css("zIndex"), 10) || 0);
          });
          if (!group.length) {
            return;
          }
          min = parseInt($2(group[0]).css("zIndex"), 10) || 0;
          $2(group).each(function(i) {
            $2(this).css("zIndex", min + i);
          });
          this.css("zIndex", min + group.length);
        }
      });
      $2.ui.plugin.add("draggable", "zIndex", {
        start: function(event, ui, instance) {
          var t = $2(ui.helper), o = instance.options;
          if (t.css("zIndex")) {
            o._zIndex = t.css("zIndex");
          }
          t.css("zIndex", o.zIndex);
        },
        stop: function(event, ui, instance) {
          var o = instance.options;
          if (o._zIndex) {
            $2(ui.helper).css("zIndex", o._zIndex);
          }
        }
      });
      var widgetsDraggable = $2.ui.draggable;
      /*!
       * jQuery UI Resizable 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.resizable", $2.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
          alsoResize: false,
          animate: false,
          animateDuration: "slow",
          animateEasing: "swing",
          aspectRatio: false,
          autoHide: false,
          classes: {
            "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
          },
          containment: false,
          ghost: false,
          grid: false,
          handles: "e,s,se",
          helper: false,
          maxHeight: null,
          maxWidth: null,
          minHeight: 10,
          minWidth: 10,
          zIndex: 90,
          resize: null,
          start: null,
          stop: null
        },
        _num: function(value) {
          return parseFloat(value) || 0;
        },
        _isNumber: function(value) {
          return !isNaN(parseFloat(value));
        },
        _hasScroll: function(el, a) {
          if ($2(el).css("overflow") === "hidden") {
            return false;
          }
          var scroll = a && a === "left" ? "scrollLeft" : "scrollTop", has = false;
          if (el[scroll] > 0) {
            return true;
          }
          el[scroll] = 1;
          has = el[scroll] > 0;
          el[scroll] = 0;
          return has;
        },
        _create: function() {
          var margins, o = this.options, that = this;
          this._addClass("ui-resizable");
          $2.extend(this, {
            _aspectRatio: !!o.aspectRatio,
            aspectRatio: o.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
          });
          if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
            this.element.wrap($2("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
              position: this.element.css("position"),
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              top: this.element.css("top"),
              left: this.element.css("left")
            }));
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
            this.elementIsWrapper = true;
            margins = {
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
              marginLeft: this.originalElement.css("marginLeft")
            };
            this.element.css(margins);
            this.originalElement.css("margin", 0);
            this.originalResizeStyle = this.originalElement.css("resize");
            this.originalElement.css("resize", "none");
            this._proportionallyResizeElements.push(this.originalElement.css({
              position: "static",
              zoom: 1,
              display: "block"
            }));
            this.originalElement.css(margins);
            this._proportionallyResize();
          }
          this._setupHandles();
          if (o.autoHide) {
            $2(this.element).on("mouseenter", function() {
              if (o.disabled) {
                return;
              }
              that._removeClass("ui-resizable-autohide");
              that._handles.show();
            }).on("mouseleave", function() {
              if (o.disabled) {
                return;
              }
              if (!that.resizing) {
                that._addClass("ui-resizable-autohide");
                that._handles.hide();
              }
            });
          }
          this._mouseInit();
        },
        _destroy: function() {
          this._mouseDestroy();
          var wrapper, _destroy = function(exp) {
            $2(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
          };
          if (this.elementIsWrapper) {
            _destroy(this.element);
            wrapper = this.element;
            this.originalElement.css({
              position: wrapper.css("position"),
              width: wrapper.outerWidth(),
              height: wrapper.outerHeight(),
              top: wrapper.css("top"),
              left: wrapper.css("left")
            }).insertAfter(wrapper);
            wrapper.remove();
          }
          this.originalElement.css("resize", this.originalResizeStyle);
          _destroy(this.originalElement);
          return this;
        },
        _setOption: function(key, value) {
          this._super(key, value);
          switch (key) {
            case "handles":
              this._removeHandles();
              this._setupHandles();
              break;
            default:
              break;
          }
        },
        _setupHandles: function() {
          var o = this.options, handle, i, n, hname, axis, that = this;
          this.handles = o.handles || (!$2(".ui-resizable-handle", this.element).length ? "e,s,se" : {
            n: ".ui-resizable-n",
            e: ".ui-resizable-e",
            s: ".ui-resizable-s",
            w: ".ui-resizable-w",
            se: ".ui-resizable-se",
            sw: ".ui-resizable-sw",
            ne: ".ui-resizable-ne",
            nw: ".ui-resizable-nw"
          });
          this._handles = $2();
          if (this.handles.constructor === String) {
            if (this.handles === "all") {
              this.handles = "n,e,s,w,se,sw,ne,nw";
            }
            n = this.handles.split(",");
            this.handles = {};
            for (i = 0; i < n.length; i++) {
              handle = $2.trim(n[i]);
              hname = "ui-resizable-" + handle;
              axis = $2("<div>");
              this._addClass(axis, "ui-resizable-handle " + hname);
              axis.css({zIndex: o.zIndex});
              this.handles[handle] = ".ui-resizable-" + handle;
              this.element.append(axis);
            }
          }
          this._renderAxis = function(target) {
            var i2, axis2, padPos, padWrapper;
            target = target || this.element;
            for (i2 in this.handles) {
              if (this.handles[i2].constructor === String) {
                this.handles[i2] = this.element.children(this.handles[i2]).first().show();
              } else if (this.handles[i2].jquery || this.handles[i2].nodeType) {
                this.handles[i2] = $2(this.handles[i2]);
                this._on(this.handles[i2], {mousedown: that._mouseDown});
              }
              if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
                axis2 = $2(this.handles[i2], this.element);
                padWrapper = /sw|ne|nw|se|n|s/.test(i2) ? axis2.outerHeight() : axis2.outerWidth();
                padPos = [
                  "padding",
                  /ne|nw|n/.test(i2) ? "Top" : /se|sw|s/.test(i2) ? "Bottom" : /^e$/.test(i2) ? "Right" : "Left"
                ].join("");
                target.css(padPos, padWrapper);
                this._proportionallyResize();
              }
              this._handles = this._handles.add(this.handles[i2]);
            }
          };
          this._renderAxis(this.element);
          this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
          this._handles.disableSelection();
          this._handles.on("mouseover", function() {
            if (!that.resizing) {
              if (this.className) {
                axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
              }
              that.axis = axis && axis[1] ? axis[1] : "se";
            }
          });
          if (o.autoHide) {
            this._handles.hide();
            this._addClass("ui-resizable-autohide");
          }
        },
        _removeHandles: function() {
          this._handles.remove();
        },
        _mouseCapture: function(event) {
          var i, handle, capture = false;
          for (i in this.handles) {
            handle = $2(this.handles[i])[0];
            if (handle === event.target || $2.contains(handle, event.target)) {
              capture = true;
            }
          }
          return !this.options.disabled && capture;
        },
        _mouseStart: function(event) {
          var curleft, curtop, cursor, o = this.options, el = this.element;
          this.resizing = true;
          this._renderProxy();
          curleft = this._num(this.helper.css("left"));
          curtop = this._num(this.helper.css("top"));
          if (o.containment) {
            curleft += $2(o.containment).scrollLeft() || 0;
            curtop += $2(o.containment).scrollTop() || 0;
          }
          this.offset = this.helper.offset();
          this.position = {left: curleft, top: curtop};
          this.size = this._helper ? {
            width: this.helper.width(),
            height: this.helper.height()
          } : {
            width: el.width(),
            height: el.height()
          };
          this.originalSize = this._helper ? {
            width: el.outerWidth(),
            height: el.outerHeight()
          } : {
            width: el.width(),
            height: el.height()
          };
          this.sizeDiff = {
            width: el.outerWidth() - el.width(),
            height: el.outerHeight() - el.height()
          };
          this.originalPosition = {left: curleft, top: curtop};
          this.originalMousePosition = {left: event.pageX, top: event.pageY};
          this.aspectRatio = typeof o.aspectRatio === "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
          cursor = $2(".ui-resizable-" + this.axis).css("cursor");
          $2("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);
          this._addClass("ui-resizable-resizing");
          this._propagate("start", event);
          return true;
        },
        _mouseDrag: function(event) {
          var data2, props, smp = this.originalMousePosition, a = this.axis, dx = event.pageX - smp.left || 0, dy = event.pageY - smp.top || 0, trigger = this._change[a];
          this._updatePrevProperties();
          if (!trigger) {
            return false;
          }
          data2 = trigger.apply(this, [event, dx, dy]);
          this._updateVirtualBoundaries(event.shiftKey);
          if (this._aspectRatio || event.shiftKey) {
            data2 = this._updateRatio(data2, event);
          }
          data2 = this._respectSize(data2, event);
          this._updateCache(data2);
          this._propagate("resize", event);
          props = this._applyChanges();
          if (!this._helper && this._proportionallyResizeElements.length) {
            this._proportionallyResize();
          }
          if (!$2.isEmptyObject(props)) {
            this._updatePrevProperties();
            this._trigger("resize", event, this.ui());
            this._applyChanges();
          }
          return false;
        },
        _mouseStop: function(event) {
          this.resizing = false;
          var pr, ista, soffseth, soffsetw, s, left, top, o = this.options, that = this;
          if (this._helper) {
            pr = this._proportionallyResizeElements;
            ista = pr.length && /textarea/i.test(pr[0].nodeName);
            soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
            soffsetw = ista ? 0 : that.sizeDiff.width;
            s = {
              width: that.helper.width() - soffsetw,
              height: that.helper.height() - soffseth
            };
            left = parseFloat(that.element.css("left")) + (that.position.left - that.originalPosition.left) || null;
            top = parseFloat(that.element.css("top")) + (that.position.top - that.originalPosition.top) || null;
            if (!o.animate) {
              this.element.css($2.extend(s, {top, left}));
            }
            that.helper.height(that.size.height);
            that.helper.width(that.size.width);
            if (this._helper && !o.animate) {
              this._proportionallyResize();
            }
          }
          $2("body").css("cursor", "auto");
          this._removeClass("ui-resizable-resizing");
          this._propagate("stop", event);
          if (this._helper) {
            this.helper.remove();
          }
          return false;
        },
        _updatePrevProperties: function() {
          this.prevPosition = {
            top: this.position.top,
            left: this.position.left
          };
          this.prevSize = {
            width: this.size.width,
            height: this.size.height
          };
        },
        _applyChanges: function() {
          var props = {};
          if (this.position.top !== this.prevPosition.top) {
            props.top = this.position.top + "px";
          }
          if (this.position.left !== this.prevPosition.left) {
            props.left = this.position.left + "px";
          }
          if (this.size.width !== this.prevSize.width) {
            props.width = this.size.width + "px";
          }
          if (this.size.height !== this.prevSize.height) {
            props.height = this.size.height + "px";
          }
          this.helper.css(props);
          return props;
        },
        _updateVirtualBoundaries: function(forceAspectRatio) {
          var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b, o = this.options;
          b = {
            minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
            maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
            minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
            maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
          };
          if (this._aspectRatio || forceAspectRatio) {
            pMinWidth = b.minHeight * this.aspectRatio;
            pMinHeight = b.minWidth / this.aspectRatio;
            pMaxWidth = b.maxHeight * this.aspectRatio;
            pMaxHeight = b.maxWidth / this.aspectRatio;
            if (pMinWidth > b.minWidth) {
              b.minWidth = pMinWidth;
            }
            if (pMinHeight > b.minHeight) {
              b.minHeight = pMinHeight;
            }
            if (pMaxWidth < b.maxWidth) {
              b.maxWidth = pMaxWidth;
            }
            if (pMaxHeight < b.maxHeight) {
              b.maxHeight = pMaxHeight;
            }
          }
          this._vBoundaries = b;
        },
        _updateCache: function(data2) {
          this.offset = this.helper.offset();
          if (this._isNumber(data2.left)) {
            this.position.left = data2.left;
          }
          if (this._isNumber(data2.top)) {
            this.position.top = data2.top;
          }
          if (this._isNumber(data2.height)) {
            this.size.height = data2.height;
          }
          if (this._isNumber(data2.width)) {
            this.size.width = data2.width;
          }
        },
        _updateRatio: function(data2) {
          var cpos = this.position, csize = this.size, a = this.axis;
          if (this._isNumber(data2.height)) {
            data2.width = data2.height * this.aspectRatio;
          } else if (this._isNumber(data2.width)) {
            data2.height = data2.width / this.aspectRatio;
          }
          if (a === "sw") {
            data2.left = cpos.left + (csize.width - data2.width);
            data2.top = null;
          }
          if (a === "nw") {
            data2.top = cpos.top + (csize.height - data2.height);
            data2.left = cpos.left + (csize.width - data2.width);
          }
          return data2;
        },
        _respectSize: function(data2) {
          var o = this._vBoundaries, a = this.axis, ismaxw = this._isNumber(data2.width) && o.maxWidth && o.maxWidth < data2.width, ismaxh = this._isNumber(data2.height) && o.maxHeight && o.maxHeight < data2.height, isminw = this._isNumber(data2.width) && o.minWidth && o.minWidth > data2.width, isminh = this._isNumber(data2.height) && o.minHeight && o.minHeight > data2.height, dw = this.originalPosition.left + this.originalSize.width, dh = this.originalPosition.top + this.originalSize.height, cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
          if (isminw) {
            data2.width = o.minWidth;
          }
          if (isminh) {
            data2.height = o.minHeight;
          }
          if (ismaxw) {
            data2.width = o.maxWidth;
          }
          if (ismaxh) {
            data2.height = o.maxHeight;
          }
          if (isminw && cw) {
            data2.left = dw - o.minWidth;
          }
          if (ismaxw && cw) {
            data2.left = dw - o.maxWidth;
          }
          if (isminh && ch) {
            data2.top = dh - o.minHeight;
          }
          if (ismaxh && ch) {
            data2.top = dh - o.maxHeight;
          }
          if (!data2.width && !data2.height && !data2.left && data2.top) {
            data2.top = null;
          } else if (!data2.width && !data2.height && !data2.top && data2.left) {
            data2.left = null;
          }
          return data2;
        },
        _getPaddingPlusBorderDimensions: function(element) {
          var i = 0, widths = [], borders = [
            element.css("borderTopWidth"),
            element.css("borderRightWidth"),
            element.css("borderBottomWidth"),
            element.css("borderLeftWidth")
          ], paddings = [
            element.css("paddingTop"),
            element.css("paddingRight"),
            element.css("paddingBottom"),
            element.css("paddingLeft")
          ];
          for (; i < 4; i++) {
            widths[i] = parseFloat(borders[i]) || 0;
            widths[i] += parseFloat(paddings[i]) || 0;
          }
          return {
            height: widths[0] + widths[2],
            width: widths[1] + widths[3]
          };
        },
        _proportionallyResize: function() {
          if (!this._proportionallyResizeElements.length) {
            return;
          }
          var prel, i = 0, element = this.helper || this.element;
          for (; i < this._proportionallyResizeElements.length; i++) {
            prel = this._proportionallyResizeElements[i];
            if (!this.outerDimensions) {
              this.outerDimensions = this._getPaddingPlusBorderDimensions(prel);
            }
            prel.css({
              height: element.height() - this.outerDimensions.height || 0,
              width: element.width() - this.outerDimensions.width || 0
            });
          }
        },
        _renderProxy: function() {
          var el = this.element, o = this.options;
          this.elementOffset = el.offset();
          if (this._helper) {
            this.helper = this.helper || $2("<div style='overflow:hidden;'></div>");
            this._addClass(this.helper, this._helper);
            this.helper.css({
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              position: "absolute",
              left: this.elementOffset.left + "px",
              top: this.elementOffset.top + "px",
              zIndex: ++o.zIndex
            });
            this.helper.appendTo("body").disableSelection();
          } else {
            this.helper = this.element;
          }
        },
        _change: {
          e: function(event, dx) {
            return {width: this.originalSize.width + dx};
          },
          w: function(event, dx) {
            var cs = this.originalSize, sp = this.originalPosition;
            return {left: sp.left + dx, width: cs.width - dx};
          },
          n: function(event, dx, dy) {
            var cs = this.originalSize, sp = this.originalPosition;
            return {top: sp.top + dy, height: cs.height - dy};
          },
          s: function(event, dx, dy) {
            return {height: this.originalSize.height + dy};
          },
          se: function(event, dx, dy) {
            return $2.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
          },
          sw: function(event, dx, dy) {
            return $2.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
          },
          ne: function(event, dx, dy) {
            return $2.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
          },
          nw: function(event, dx, dy) {
            return $2.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
          }
        },
        _propagate: function(n, event) {
          $2.ui.plugin.call(this, n, [event, this.ui()]);
          n !== "resize" && this._trigger(n, event, this.ui());
        },
        plugins: {},
        ui: function() {
          return {
            originalElement: this.originalElement,
            element: this.element,
            helper: this.helper,
            position: this.position,
            size: this.size,
            originalSize: this.originalSize,
            originalPosition: this.originalPosition
          };
        }
      });
      $2.ui.plugin.add("resizable", "animate", {
        stop: function(event) {
          var that = $2(this).resizable("instance"), o = that.options, pr = that._proportionallyResizeElements, ista = pr.length && /textarea/i.test(pr[0].nodeName), soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height, soffsetw = ista ? 0 : that.sizeDiff.width, style = {
            width: that.size.width - soffsetw,
            height: that.size.height - soffseth
          }, left = parseFloat(that.element.css("left")) + (that.position.left - that.originalPosition.left) || null, top = parseFloat(that.element.css("top")) + (that.position.top - that.originalPosition.top) || null;
          that.element.animate($2.extend(style, top && left ? {top, left} : {}), {
            duration: o.animateDuration,
            easing: o.animateEasing,
            step: function() {
              var data2 = {
                width: parseFloat(that.element.css("width")),
                height: parseFloat(that.element.css("height")),
                top: parseFloat(that.element.css("top")),
                left: parseFloat(that.element.css("left"))
              };
              if (pr && pr.length) {
                $2(pr[0]).css({width: data2.width, height: data2.height});
              }
              that._updateCache(data2);
              that._propagate("resize", event);
            }
          });
        }
      });
      $2.ui.plugin.add("resizable", "containment", {
        start: function() {
          var element, p, co, ch, cw, width, height, that = $2(this).resizable("instance"), o = that.options, el = that.element, oc = o.containment, ce = oc instanceof $2 ? oc.get(0) : /parent/.test(oc) ? el.parent().get(0) : oc;
          if (!ce) {
            return;
          }
          that.containerElement = $2(ce);
          if (/document/.test(oc) || oc === document) {
            that.containerOffset = {
              left: 0,
              top: 0
            };
            that.containerPosition = {
              left: 0,
              top: 0
            };
            that.parentData = {
              element: $2(document),
              left: 0,
              top: 0,
              width: $2(document).width(),
              height: $2(document).height() || document.body.parentNode.scrollHeight
            };
          } else {
            element = $2(ce);
            p = [];
            $2(["Top", "Right", "Left", "Bottom"]).each(function(i, name) {
              p[i] = that._num(element.css("padding" + name));
            });
            that.containerOffset = element.offset();
            that.containerPosition = element.position();
            that.containerSize = {
              height: element.innerHeight() - p[3],
              width: element.innerWidth() - p[1]
            };
            co = that.containerOffset;
            ch = that.containerSize.height;
            cw = that.containerSize.width;
            width = that._hasScroll(ce, "left") ? ce.scrollWidth : cw;
            height = that._hasScroll(ce) ? ce.scrollHeight : ch;
            that.parentData = {
              element: ce,
              left: co.left,
              top: co.top,
              width,
              height
            };
          }
        },
        resize: function(event) {
          var woset, hoset, isParent, isOffsetRelative, that = $2(this).resizable("instance"), o = that.options, co = that.containerOffset, cp = that.position, pRatio = that._aspectRatio || event.shiftKey, cop = {
            top: 0,
            left: 0
          }, ce = that.containerElement, continueResize = true;
          if (ce[0] !== document && /static/.test(ce.css("position"))) {
            cop = co;
          }
          if (cp.left < (that._helper ? co.left : 0)) {
            that.size.width = that.size.width + (that._helper ? that.position.left - co.left : that.position.left - cop.left);
            if (pRatio) {
              that.size.height = that.size.width / that.aspectRatio;
              continueResize = false;
            }
            that.position.left = o.helper ? co.left : 0;
          }
          if (cp.top < (that._helper ? co.top : 0)) {
            that.size.height = that.size.height + (that._helper ? that.position.top - co.top : that.position.top);
            if (pRatio) {
              that.size.width = that.size.height * that.aspectRatio;
              continueResize = false;
            }
            that.position.top = that._helper ? co.top : 0;
          }
          isParent = that.containerElement.get(0) === that.element.parent().get(0);
          isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));
          if (isParent && isOffsetRelative) {
            that.offset.left = that.parentData.left + that.position.left;
            that.offset.top = that.parentData.top + that.position.top;
          } else {
            that.offset.left = that.element.offset().left;
            that.offset.top = that.element.offset().top;
          }
          woset = Math.abs(that.sizeDiff.width + (that._helper ? that.offset.left - cop.left : that.offset.left - co.left));
          hoset = Math.abs(that.sizeDiff.height + (that._helper ? that.offset.top - cop.top : that.offset.top - co.top));
          if (woset + that.size.width >= that.parentData.width) {
            that.size.width = that.parentData.width - woset;
            if (pRatio) {
              that.size.height = that.size.width / that.aspectRatio;
              continueResize = false;
            }
          }
          if (hoset + that.size.height >= that.parentData.height) {
            that.size.height = that.parentData.height - hoset;
            if (pRatio) {
              that.size.width = that.size.height * that.aspectRatio;
              continueResize = false;
            }
          }
          if (!continueResize) {
            that.position.left = that.prevPosition.left;
            that.position.top = that.prevPosition.top;
            that.size.width = that.prevSize.width;
            that.size.height = that.prevSize.height;
          }
        },
        stop: function() {
          var that = $2(this).resizable("instance"), o = that.options, co = that.containerOffset, cop = that.containerPosition, ce = that.containerElement, helper = $2(that.helper), ho = helper.offset(), w = helper.outerWidth() - that.sizeDiff.width, h = helper.outerHeight() - that.sizeDiff.height;
          if (that._helper && !o.animate && /relative/.test(ce.css("position"))) {
            $2(this).css({
              left: ho.left - cop.left - co.left,
              width: w,
              height: h
            });
          }
          if (that._helper && !o.animate && /static/.test(ce.css("position"))) {
            $2(this).css({
              left: ho.left - cop.left - co.left,
              width: w,
              height: h
            });
          }
        }
      });
      $2.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
          var that = $2(this).resizable("instance"), o = that.options;
          $2(o.alsoResize).each(function() {
            var el = $2(this);
            el.data("ui-resizable-alsoresize", {
              width: parseFloat(el.width()),
              height: parseFloat(el.height()),
              left: parseFloat(el.css("left")),
              top: parseFloat(el.css("top"))
            });
          });
        },
        resize: function(event, ui) {
          var that = $2(this).resizable("instance"), o = that.options, os = that.originalSize, op = that.originalPosition, delta = {
            height: that.size.height - os.height || 0,
            width: that.size.width - os.width || 0,
            top: that.position.top - op.top || 0,
            left: that.position.left - op.left || 0
          };
          $2(o.alsoResize).each(function() {
            var el = $2(this), start = $2(this).data("ui-resizable-alsoresize"), style = {}, css = el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
            $2.each(css, function(i, prop) {
              var sum = (start[prop] || 0) + (delta[prop] || 0);
              if (sum && sum >= 0) {
                style[prop] = sum || null;
              }
            });
            el.css(style);
          });
        },
        stop: function() {
          $2(this).removeData("ui-resizable-alsoresize");
        }
      });
      $2.ui.plugin.add("resizable", "ghost", {
        start: function() {
          var that = $2(this).resizable("instance"), cs = that.size;
          that.ghost = that.originalElement.clone();
          that.ghost.css({
            opacity: 0.25,
            display: "block",
            position: "relative",
            height: cs.height,
            width: cs.width,
            margin: 0,
            left: 0,
            top: 0
          });
          that._addClass(that.ghost, "ui-resizable-ghost");
          if ($2.uiBackCompat !== false && typeof that.options.ghost === "string") {
            that.ghost.addClass(this.options.ghost);
          }
          that.ghost.appendTo(that.helper);
        },
        resize: function() {
          var that = $2(this).resizable("instance");
          if (that.ghost) {
            that.ghost.css({
              position: "relative",
              height: that.size.height,
              width: that.size.width
            });
          }
        },
        stop: function() {
          var that = $2(this).resizable("instance");
          if (that.ghost && that.helper) {
            that.helper.get(0).removeChild(that.ghost.get(0));
          }
        }
      });
      $2.ui.plugin.add("resizable", "grid", {
        resize: function() {
          var outerDimensions, that = $2(this).resizable("instance"), o = that.options, cs = that.size, os = that.originalSize, op = that.originalPosition, a = that.axis, grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid, gridX = grid[0] || 1, gridY = grid[1] || 1, ox = Math.round((cs.width - os.width) / gridX) * gridX, oy = Math.round((cs.height - os.height) / gridY) * gridY, newWidth = os.width + ox, newHeight = os.height + oy, isMaxWidth = o.maxWidth && o.maxWidth < newWidth, isMaxHeight = o.maxHeight && o.maxHeight < newHeight, isMinWidth = o.minWidth && o.minWidth > newWidth, isMinHeight = o.minHeight && o.minHeight > newHeight;
          o.grid = grid;
          if (isMinWidth) {
            newWidth += gridX;
          }
          if (isMinHeight) {
            newHeight += gridY;
          }
          if (isMaxWidth) {
            newWidth -= gridX;
          }
          if (isMaxHeight) {
            newHeight -= gridY;
          }
          if (/^(se|s|e)$/.test(a)) {
            that.size.width = newWidth;
            that.size.height = newHeight;
          } else if (/^(ne)$/.test(a)) {
            that.size.width = newWidth;
            that.size.height = newHeight;
            that.position.top = op.top - oy;
          } else if (/^(sw)$/.test(a)) {
            that.size.width = newWidth;
            that.size.height = newHeight;
            that.position.left = op.left - ox;
          } else {
            if (newHeight - gridY <= 0 || newWidth - gridX <= 0) {
              outerDimensions = that._getPaddingPlusBorderDimensions(this);
            }
            if (newHeight - gridY > 0) {
              that.size.height = newHeight;
              that.position.top = op.top - oy;
            } else {
              newHeight = gridY - outerDimensions.height;
              that.size.height = newHeight;
              that.position.top = op.top + os.height - newHeight;
            }
            if (newWidth - gridX > 0) {
              that.size.width = newWidth;
              that.position.left = op.left - ox;
            } else {
              newWidth = gridX - outerDimensions.width;
              that.size.width = newWidth;
              that.position.left = op.left + os.width - newWidth;
            }
          }
        }
      });
      var widgetsResizable = $2.ui.resizable;
      /*!
       * jQuery UI Dialog 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.dialog", {
        version: "1.12.1",
        options: {
          appendTo: "body",
          autoOpen: true,
          buttons: [],
          classes: {
            "ui-dialog": "ui-corner-all",
            "ui-dialog-titlebar": "ui-corner-all"
          },
          closeOnEscape: true,
          closeText: "Close",
          draggable: true,
          hide: null,
          height: "auto",
          maxHeight: null,
          maxWidth: null,
          minHeight: 150,
          minWidth: 150,
          modal: false,
          position: {
            my: "center",
            at: "center",
            of: window,
            collision: "fit",
            using: function(pos) {
              var topOffset = $2(this).css(pos).offset().top;
              if (topOffset < 0) {
                $2(this).css("top", pos.top - topOffset);
              }
            }
          },
          resizable: true,
          show: null,
          title: null,
          width: 300,
          beforeClose: null,
          close: null,
          drag: null,
          dragStart: null,
          dragStop: null,
          focus: null,
          open: null,
          resize: null,
          resizeStart: null,
          resizeStop: null
        },
        sizeRelatedOptions: {
          buttons: true,
          height: true,
          maxHeight: true,
          maxWidth: true,
          minHeight: true,
          minWidth: true,
          width: true
        },
        resizableRelatedOptions: {
          maxHeight: true,
          maxWidth: true,
          minHeight: true,
          minWidth: true
        },
        _create: function() {
          this.originalCss = {
            display: this.element[0].style.display,
            width: this.element[0].style.width,
            minHeight: this.element[0].style.minHeight,
            maxHeight: this.element[0].style.maxHeight,
            height: this.element[0].style.height
          };
          this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element)
          };
          this.originalTitle = this.element.attr("title");
          if (this.options.title == null && this.originalTitle != null) {
            this.options.title = this.originalTitle;
          }
          if (this.options.disabled) {
            this.options.disabled = false;
          }
          this._createWrapper();
          this.element.show().removeAttr("title").appendTo(this.uiDialog);
          this._addClass("ui-dialog-content", "ui-widget-content");
          this._createTitlebar();
          this._createButtonPane();
          if (this.options.draggable && $2.fn.draggable) {
            this._makeDraggable();
          }
          if (this.options.resizable && $2.fn.resizable) {
            this._makeResizable();
          }
          this._isOpen = false;
          this._trackFocus();
        },
        _init: function() {
          if (this.options.autoOpen) {
            this.open();
          }
        },
        _appendTo: function() {
          var element = this.options.appendTo;
          if (element && (element.jquery || element.nodeType)) {
            return $2(element);
          }
          return this.document.find(element || "body").eq(0);
        },
        _destroy: function() {
          var next, originalPosition = this.originalPosition;
          this._untrackInstance();
          this._destroyOverlay();
          this.element.removeUniqueId().css(this.originalCss).detach();
          this.uiDialog.remove();
          if (this.originalTitle) {
            this.element.attr("title", this.originalTitle);
          }
          next = originalPosition.parent.children().eq(originalPosition.index);
          if (next.length && next[0] !== this.element[0]) {
            next.before(this.element);
          } else {
            originalPosition.parent.append(this.element);
          }
        },
        widget: function() {
          return this.uiDialog;
        },
        disable: $2.noop,
        enable: $2.noop,
        close: function(event) {
          var that = this;
          if (!this._isOpen || this._trigger("beforeClose", event) === false) {
            return;
          }
          this._isOpen = false;
          this._focusedElement = null;
          this._destroyOverlay();
          this._untrackInstance();
          if (!this.opener.filter(":focusable").trigger("focus").length) {
            $2.ui.safeBlur($2.ui.safeActiveElement(this.document[0]));
          }
          this._hide(this.uiDialog, this.options.hide, function() {
            that._trigger("close", event);
          });
        },
        isOpen: function() {
          return this._isOpen;
        },
        moveToTop: function() {
          this._moveToTop();
        },
        _moveToTop: function(event, silent) {
          var moved = false, zIndices = this.uiDialog.siblings(".ui-front:visible").map(function() {
            return +$2(this).css("z-index");
          }).get(), zIndexMax = Math.max.apply(null, zIndices);
          if (zIndexMax >= +this.uiDialog.css("z-index")) {
            this.uiDialog.css("z-index", zIndexMax + 1);
            moved = true;
          }
          if (moved && !silent) {
            this._trigger("focus", event);
          }
          return moved;
        },
        open: function() {
          var that = this;
          if (this._isOpen) {
            if (this._moveToTop()) {
              this._focusTabbable();
            }
            return;
          }
          this._isOpen = true;
          this.opener = $2($2.ui.safeActiveElement(this.document[0]));
          this._size();
          this._position();
          this._createOverlay();
          this._moveToTop(null, true);
          if (this.overlay) {
            this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
          }
          this._show(this.uiDialog, this.options.show, function() {
            that._focusTabbable();
            that._trigger("focus");
          });
          this._makeFocusTarget();
          this._trigger("open");
        },
        _focusTabbable: function() {
          var hasFocus = this._focusedElement;
          if (!hasFocus) {
            hasFocus = this.element.find("[autofocus]");
          }
          if (!hasFocus.length) {
            hasFocus = this.element.find(":tabbable");
          }
          if (!hasFocus.length) {
            hasFocus = this.uiDialogButtonPane.find(":tabbable");
          }
          if (!hasFocus.length) {
            hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
          }
          if (!hasFocus.length) {
            hasFocus = this.uiDialog;
          }
          hasFocus.eq(0).trigger("focus");
        },
        _keepFocus: function(event) {
          function checkFocus() {
            var activeElement = $2.ui.safeActiveElement(this.document[0]), isActive = this.uiDialog[0] === activeElement || $2.contains(this.uiDialog[0], activeElement);
            if (!isActive) {
              this._focusTabbable();
            }
          }
          event.preventDefault();
          checkFocus.call(this);
          this._delay(checkFocus);
        },
        _createWrapper: function() {
          this.uiDialog = $2("<div>").hide().attr({
            tabIndex: -1,
            role: "dialog"
          }).appendTo(this._appendTo());
          this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
          this._on(this.uiDialog, {
            keydown: function(event) {
              if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $2.ui.keyCode.ESCAPE) {
                event.preventDefault();
                this.close(event);
                return;
              }
              if (event.keyCode !== $2.ui.keyCode.TAB || event.isDefaultPrevented()) {
                return;
              }
              var tabbables = this.uiDialog.find(":tabbable"), first = tabbables.filter(":first"), last = tabbables.filter(":last");
              if ((event.target === last[0] || event.target === this.uiDialog[0]) && !event.shiftKey) {
                this._delay(function() {
                  first.trigger("focus");
                });
                event.preventDefault();
              } else if ((event.target === first[0] || event.target === this.uiDialog[0]) && event.shiftKey) {
                this._delay(function() {
                  last.trigger("focus");
                });
                event.preventDefault();
              }
            },
            mousedown: function(event) {
              if (this._moveToTop(event)) {
                this._focusTabbable();
              }
            }
          });
          if (!this.element.find("[aria-describedby]").length) {
            this.uiDialog.attr({
              "aria-describedby": this.element.uniqueId().attr("id")
            });
          }
        },
        _createTitlebar: function() {
          var uiDialogTitle;
          this.uiDialogTitlebar = $2("<div>");
          this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
          this._on(this.uiDialogTitlebar, {
            mousedown: function(event) {
              if (!$2(event.target).closest(".ui-dialog-titlebar-close")) {
                this.uiDialog.trigger("focus");
              }
            }
          });
          this.uiDialogTitlebarClose = $2("<button type='button'></button>").button({
            label: $2("<a>").text(this.options.closeText).html(),
            icon: "ui-icon-closethick",
            showLabel: false
          }).appendTo(this.uiDialogTitlebar);
          this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
          this._on(this.uiDialogTitlebarClose, {
            click: function(event) {
              event.preventDefault();
              this.close(event);
            }
          });
          uiDialogTitle = $2("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
          this._addClass(uiDialogTitle, "ui-dialog-title");
          this._title(uiDialogTitle);
          this.uiDialogTitlebar.prependTo(this.uiDialog);
          this.uiDialog.attr({
            "aria-labelledby": uiDialogTitle.attr("id")
          });
        },
        _title: function(title) {
          if (this.options.title) {
            title.text(this.options.title);
          } else {
            title.html("&#160;");
          }
        },
        _createButtonPane: function() {
          this.uiDialogButtonPane = $2("<div>");
          this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
          this.uiButtonSet = $2("<div>").appendTo(this.uiDialogButtonPane);
          this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
          this._createButtons();
        },
        _createButtons: function() {
          var that = this, buttons = this.options.buttons;
          this.uiDialogButtonPane.remove();
          this.uiButtonSet.empty();
          if ($2.isEmptyObject(buttons) || $2.isArray(buttons) && !buttons.length) {
            this._removeClass(this.uiDialog, "ui-dialog-buttons");
            return;
          }
          $2.each(buttons, function(name, props) {
            var click, buttonOptions;
            props = $2.isFunction(props) ? {click: props, text: name} : props;
            props = $2.extend({type: "button"}, props);
            click = props.click;
            buttonOptions = {
              icon: props.icon,
              iconPosition: props.iconPosition,
              showLabel: props.showLabel,
              icons: props.icons,
              text: props.text
            };
            delete props.click;
            delete props.icon;
            delete props.iconPosition;
            delete props.showLabel;
            delete props.icons;
            if (typeof props.text === "boolean") {
              delete props.text;
            }
            $2("<button></button>", props).button(buttonOptions).appendTo(that.uiButtonSet).on("click", function() {
              click.apply(that.element[0], arguments);
            });
          });
          this._addClass(this.uiDialog, "ui-dialog-buttons");
          this.uiDialogButtonPane.appendTo(this.uiDialog);
        },
        _makeDraggable: function() {
          var that = this, options = this.options;
          function filteredUi(ui) {
            return {
              position: ui.position,
              offset: ui.offset
            };
          }
          this.uiDialog.draggable({
            cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
            handle: ".ui-dialog-titlebar",
            containment: "document",
            start: function(event, ui) {
              that._addClass($2(this), "ui-dialog-dragging");
              that._blockFrames();
              that._trigger("dragStart", event, filteredUi(ui));
            },
            drag: function(event, ui) {
              that._trigger("drag", event, filteredUi(ui));
            },
            stop: function(event, ui) {
              var left = ui.offset.left - that.document.scrollLeft(), top = ui.offset.top - that.document.scrollTop();
              options.position = {
                my: "left top",
                at: "left" + (left >= 0 ? "+" : "") + left + " top" + (top >= 0 ? "+" : "") + top,
                of: that.window
              };
              that._removeClass($2(this), "ui-dialog-dragging");
              that._unblockFrames();
              that._trigger("dragStop", event, filteredUi(ui));
            }
          });
        },
        _makeResizable: function() {
          var that = this, options = this.options, handles = options.resizable, position2 = this.uiDialog.css("position"), resizeHandles = typeof handles === "string" ? handles : "n,e,s,w,se,sw,ne,nw";
          function filteredUi(ui) {
            return {
              originalPosition: ui.originalPosition,
              originalSize: ui.originalSize,
              position: ui.position,
              size: ui.size
            };
          }
          this.uiDialog.resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: this.element,
            maxWidth: options.maxWidth,
            maxHeight: options.maxHeight,
            minWidth: options.minWidth,
            minHeight: this._minHeight(),
            handles: resizeHandles,
            start: function(event, ui) {
              that._addClass($2(this), "ui-dialog-resizing");
              that._blockFrames();
              that._trigger("resizeStart", event, filteredUi(ui));
            },
            resize: function(event, ui) {
              that._trigger("resize", event, filteredUi(ui));
            },
            stop: function(event, ui) {
              var offset = that.uiDialog.offset(), left = offset.left - that.document.scrollLeft(), top = offset.top - that.document.scrollTop();
              options.height = that.uiDialog.height();
              options.width = that.uiDialog.width();
              options.position = {
                my: "left top",
                at: "left" + (left >= 0 ? "+" : "") + left + " top" + (top >= 0 ? "+" : "") + top,
                of: that.window
              };
              that._removeClass($2(this), "ui-dialog-resizing");
              that._unblockFrames();
              that._trigger("resizeStop", event, filteredUi(ui));
            }
          }).css("position", position2);
        },
        _trackFocus: function() {
          this._on(this.widget(), {
            focusin: function(event) {
              this._makeFocusTarget();
              this._focusedElement = $2(event.target);
            }
          });
        },
        _makeFocusTarget: function() {
          this._untrackInstance();
          this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
          var instances = this._trackingInstances(), exists = $2.inArray(this, instances);
          if (exists !== -1) {
            instances.splice(exists, 1);
          }
        },
        _trackingInstances: function() {
          var instances = this.document.data("ui-dialog-instances");
          if (!instances) {
            instances = [];
            this.document.data("ui-dialog-instances", instances);
          }
          return instances;
        },
        _minHeight: function() {
          var options = this.options;
          return options.height === "auto" ? options.minHeight : Math.min(options.minHeight, options.height);
        },
        _position: function() {
          var isVisible = this.uiDialog.is(":visible");
          if (!isVisible) {
            this.uiDialog.show();
          }
          this.uiDialog.position(this.options.position);
          if (!isVisible) {
            this.uiDialog.hide();
          }
        },
        _setOptions: function(options) {
          var that = this, resize = false, resizableOptions = {};
          $2.each(options, function(key, value) {
            that._setOption(key, value);
            if (key in that.sizeRelatedOptions) {
              resize = true;
            }
            if (key in that.resizableRelatedOptions) {
              resizableOptions[key] = value;
            }
          });
          if (resize) {
            this._size();
            this._position();
          }
          if (this.uiDialog.is(":data(ui-resizable)")) {
            this.uiDialog.resizable("option", resizableOptions);
          }
        },
        _setOption: function(key, value) {
          var isDraggable, isResizable, uiDialog = this.uiDialog;
          if (key === "disabled") {
            return;
          }
          this._super(key, value);
          if (key === "appendTo") {
            this.uiDialog.appendTo(this._appendTo());
          }
          if (key === "buttons") {
            this._createButtons();
          }
          if (key === "closeText") {
            this.uiDialogTitlebarClose.button({
              label: $2("<a>").text("" + this.options.closeText).html()
            });
          }
          if (key === "draggable") {
            isDraggable = uiDialog.is(":data(ui-draggable)");
            if (isDraggable && !value) {
              uiDialog.draggable("destroy");
            }
            if (!isDraggable && value) {
              this._makeDraggable();
            }
          }
          if (key === "position") {
            this._position();
          }
          if (key === "resizable") {
            isResizable = uiDialog.is(":data(ui-resizable)");
            if (isResizable && !value) {
              uiDialog.resizable("destroy");
            }
            if (isResizable && typeof value === "string") {
              uiDialog.resizable("option", "handles", value);
            }
            if (!isResizable && value !== false) {
              this._makeResizable();
            }
          }
          if (key === "title") {
            this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
          }
        },
        _size: function() {
          var nonContentHeight, minContentHeight, maxContentHeight, options = this.options;
          this.element.show().css({
            width: "auto",
            minHeight: 0,
            maxHeight: "none",
            height: 0
          });
          if (options.minWidth > options.width) {
            options.width = options.minWidth;
          }
          nonContentHeight = this.uiDialog.css({
            height: "auto",
            width: options.width
          }).outerHeight();
          minContentHeight = Math.max(0, options.minHeight - nonContentHeight);
          maxContentHeight = typeof options.maxHeight === "number" ? Math.max(0, options.maxHeight - nonContentHeight) : "none";
          if (options.height === "auto") {
            this.element.css({
              minHeight: minContentHeight,
              maxHeight: maxContentHeight,
              height: "auto"
            });
          } else {
            this.element.height(Math.max(0, options.height - nonContentHeight));
          }
          if (this.uiDialog.is(":data(ui-resizable)")) {
            this.uiDialog.resizable("option", "minHeight", this._minHeight());
          }
        },
        _blockFrames: function() {
          this.iframeBlocks = this.document.find("iframe").map(function() {
            var iframe = $2(this);
            return $2("<div>").css({
              position: "absolute",
              width: iframe.outerWidth(),
              height: iframe.outerHeight()
            }).appendTo(iframe.parent()).offset(iframe.offset())[0];
          });
        },
        _unblockFrames: function() {
          if (this.iframeBlocks) {
            this.iframeBlocks.remove();
            delete this.iframeBlocks;
          }
        },
        _allowInteraction: function(event) {
          if ($2(event.target).closest(".ui-dialog").length) {
            return true;
          }
          return !!$2(event.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
          if (!this.options.modal) {
            return;
          }
          var isOpening = true;
          this._delay(function() {
            isOpening = false;
          });
          if (!this.document.data("ui-dialog-overlays")) {
            this._on(this.document, {
              focusin: function(event) {
                if (isOpening) {
                  return;
                }
                if (!this._allowInteraction(event)) {
                  event.preventDefault();
                  this._trackingInstances()[0]._focusTabbable();
                }
              }
            });
          }
          this.overlay = $2("<div>").appendTo(this._appendTo());
          this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
          this._on(this.overlay, {
            mousedown: "_keepFocus"
          });
          this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
        },
        _destroyOverlay: function() {
          if (!this.options.modal) {
            return;
          }
          if (this.overlay) {
            var overlays = this.document.data("ui-dialog-overlays") - 1;
            if (!overlays) {
              this._off(this.document, "focusin");
              this.document.removeData("ui-dialog-overlays");
            } else {
              this.document.data("ui-dialog-overlays", overlays);
            }
            this.overlay.remove();
            this.overlay = null;
          }
        }
      });
      if ($2.uiBackCompat !== false) {
        $2.widget("ui.dialog", $2.ui.dialog, {
          options: {
            dialogClass: ""
          },
          _createWrapper: function() {
            this._super();
            this.uiDialog.addClass(this.options.dialogClass);
          },
          _setOption: function(key, value) {
            if (key === "dialogClass") {
              this.uiDialog.removeClass(this.options.dialogClass).addClass(value);
            }
            this._superApply(arguments);
          }
        });
      }
      var widgetsDialog = $2.ui.dialog;
      /*!
       * jQuery UI Droppable 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
          accept: "*",
          addClasses: true,
          greedy: false,
          scope: "default",
          tolerance: "intersect",
          activate: null,
          deactivate: null,
          drop: null,
          out: null,
          over: null
        },
        _create: function() {
          var proportions, o = this.options, accept = o.accept;
          this.isover = false;
          this.isout = true;
          this.accept = $2.isFunction(accept) ? accept : function(d) {
            return d.is(accept);
          };
          this.proportions = function() {
            if (arguments.length) {
              proportions = arguments[0];
            } else {
              return proportions ? proportions : proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
              };
            }
          };
          this._addToManager(o.scope);
          o.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function(scope) {
          $2.ui.ddmanager.droppables[scope] = $2.ui.ddmanager.droppables[scope] || [];
          $2.ui.ddmanager.droppables[scope].push(this);
        },
        _splice: function(drop) {
          var i = 0;
          for (; i < drop.length; i++) {
            if (drop[i] === this) {
              drop.splice(i, 1);
            }
          }
        },
        _destroy: function() {
          var drop = $2.ui.ddmanager.droppables[this.options.scope];
          this._splice(drop);
        },
        _setOption: function(key, value) {
          if (key === "accept") {
            this.accept = $2.isFunction(value) ? value : function(d) {
              return d.is(value);
            };
          } else if (key === "scope") {
            var drop = $2.ui.ddmanager.droppables[this.options.scope];
            this._splice(drop);
            this._addToManager(value);
          }
          this._super(key, value);
        },
        _activate: function(event) {
          var draggable = $2.ui.ddmanager.current;
          this._addActiveClass();
          if (draggable) {
            this._trigger("activate", event, this.ui(draggable));
          }
        },
        _deactivate: function(event) {
          var draggable = $2.ui.ddmanager.current;
          this._removeActiveClass();
          if (draggable) {
            this._trigger("deactivate", event, this.ui(draggable));
          }
        },
        _over: function(event) {
          var draggable = $2.ui.ddmanager.current;
          if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
            return;
          }
          if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
            this._addHoverClass();
            this._trigger("over", event, this.ui(draggable));
          }
        },
        _out: function(event) {
          var draggable = $2.ui.ddmanager.current;
          if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
            return;
          }
          if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
            this._removeHoverClass();
            this._trigger("out", event, this.ui(draggable));
          }
        },
        _drop: function(event, custom) {
          var draggable = custom || $2.ui.ddmanager.current, childrenIntersection = false;
          if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
            return false;
          }
          this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
            var inst = $2(this).droppable("instance");
            if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], draggable.currentItem || draggable.element) && intersect(draggable, $2.extend(inst, {offset: inst.element.offset()}), inst.options.tolerance, event)) {
              childrenIntersection = true;
              return false;
            }
          });
          if (childrenIntersection) {
            return false;
          }
          if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
            this._removeActiveClass();
            this._removeHoverClass();
            this._trigger("drop", event, this.ui(draggable));
            return this.element;
          }
          return false;
        },
        ui: function(c) {
          return {
            draggable: c.currentItem || c.element,
            helper: c.helper,
            position: c.position,
            offset: c.positionAbs
          };
        },
        _addHoverClass: function() {
          this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function() {
          this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function() {
          this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function() {
          this._removeClass("ui-droppable-active");
        }
      });
      var intersect = $2.ui.intersect = function() {
        function isOverAxis(x, reference, size) {
          return x >= reference && x < reference + size;
        }
        return function(draggable, droppable, toleranceMode, event) {
          if (!droppable.offset) {
            return false;
          }
          var x1 = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left, y1 = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top, x2 = x1 + draggable.helperProportions.width, y2 = y1 + draggable.helperProportions.height, l = droppable.offset.left, t = droppable.offset.top, r = l + droppable.proportions().width, b = t + droppable.proportions().height;
          switch (toleranceMode) {
            case "fit":
              return l <= x1 && x2 <= r && t <= y1 && y2 <= b;
            case "intersect":
              return l < x1 + draggable.helperProportions.width / 2 && x2 - draggable.helperProportions.width / 2 < r && t < y1 + draggable.helperProportions.height / 2 && y2 - draggable.helperProportions.height / 2 < b;
            case "pointer":
              return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width);
            case "touch":
              return (y1 >= t && y1 <= b || y2 >= t && y2 <= b || y1 < t && y2 > b) && (x1 >= l && x1 <= r || x2 >= l && x2 <= r || x1 < l && x2 > r);
            default:
              return false;
          }
        };
      }();
      $2.ui.ddmanager = {
        current: null,
        droppables: {default: []},
        prepareOffsets: function(t, event) {
          var i, j, m = $2.ui.ddmanager.droppables[t.options.scope] || [], type = event ? event.type : null, list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
          droppablesLoop:
            for (i = 0; i < m.length; i++) {
              if (m[i].options.disabled || t && !m[i].accept.call(m[i].element[0], t.currentItem || t.element)) {
                continue;
              }
              for (j = 0; j < list.length; j++) {
                if (list[j] === m[i].element[0]) {
                  m[i].proportions().height = 0;
                  continue droppablesLoop;
                }
              }
              m[i].visible = m[i].element.css("display") !== "none";
              if (!m[i].visible) {
                continue;
              }
              if (type === "mousedown") {
                m[i]._activate.call(m[i], event);
              }
              m[i].offset = m[i].element.offset();
              m[i].proportions({
                width: m[i].element[0].offsetWidth,
                height: m[i].element[0].offsetHeight
              });
            }
        },
        drop: function(draggable, event) {
          var dropped = false;
          $2.each(($2.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {
            if (!this.options) {
              return;
            }
            if (!this.options.disabled && this.visible && intersect(draggable, this, this.options.tolerance, event)) {
              dropped = this._drop.call(this, event) || dropped;
            }
            if (!this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
              this.isout = true;
              this.isover = false;
              this._deactivate.call(this, event);
            }
          });
          return dropped;
        },
        dragStart: function(draggable, event) {
          draggable.element.parentsUntil("body").on("scroll.droppable", function() {
            if (!draggable.options.refreshPositions) {
              $2.ui.ddmanager.prepareOffsets(draggable, event);
            }
          });
        },
        drag: function(draggable, event) {
          if (draggable.options.refreshPositions) {
            $2.ui.ddmanager.prepareOffsets(draggable, event);
          }
          $2.each($2.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
            if (this.options.disabled || this.greedyChild || !this.visible) {
              return;
            }
            var parentInstance, scope, parent, intersects = intersect(draggable, this, this.options.tolerance, event), c = !intersects && this.isover ? "isout" : intersects && !this.isover ? "isover" : null;
            if (!c) {
              return;
            }
            if (this.options.greedy) {
              scope = this.options.scope;
              parent = this.element.parents(":data(ui-droppable)").filter(function() {
                return $2(this).droppable("instance").options.scope === scope;
              });
              if (parent.length) {
                parentInstance = $2(parent[0]).droppable("instance");
                parentInstance.greedyChild = c === "isover";
              }
            }
            if (parentInstance && c === "isover") {
              parentInstance.isover = false;
              parentInstance.isout = true;
              parentInstance._out.call(parentInstance, event);
            }
            this[c] = true;
            this[c === "isout" ? "isover" : "isout"] = false;
            this[c === "isover" ? "_over" : "_out"].call(this, event);
            if (parentInstance && c === "isout") {
              parentInstance.isout = false;
              parentInstance.isover = true;
              parentInstance._over.call(parentInstance, event);
            }
          });
        },
        dragStop: function(draggable, event) {
          draggable.element.parentsUntil("body").off("scroll.droppable");
          if (!draggable.options.refreshPositions) {
            $2.ui.ddmanager.prepareOffsets(draggable, event);
          }
        }
      };
      if ($2.uiBackCompat !== false) {
        $2.widget("ui.droppable", $2.ui.droppable, {
          options: {
            hoverClass: false,
            activeClass: false
          },
          _addActiveClass: function() {
            this._super();
            if (this.options.activeClass) {
              this.element.addClass(this.options.activeClass);
            }
          },
          _removeActiveClass: function() {
            this._super();
            if (this.options.activeClass) {
              this.element.removeClass(this.options.activeClass);
            }
          },
          _addHoverClass: function() {
            this._super();
            if (this.options.hoverClass) {
              this.element.addClass(this.options.hoverClass);
            }
          },
          _removeHoverClass: function() {
            this._super();
            if (this.options.hoverClass) {
              this.element.removeClass(this.options.hoverClass);
            }
          }
        });
      }
      var widgetsDroppable = $2.ui.droppable;
      /*!
       * jQuery UI Progressbar 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var widgetsProgressbar = $2.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
          classes: {
            "ui-progressbar": "ui-corner-all",
            "ui-progressbar-value": "ui-corner-left",
            "ui-progressbar-complete": "ui-corner-right"
          },
          max: 100,
          value: 0,
          change: null,
          complete: null
        },
        min: 0,
        _create: function() {
          this.oldValue = this.options.value = this._constrainedValue();
          this.element.attr({
            role: "progressbar",
            "aria-valuemin": this.min
          });
          this._addClass("ui-progressbar", "ui-widget ui-widget-content");
          this.valueDiv = $2("<div>").appendTo(this.element);
          this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
          this._refreshValue();
        },
        _destroy: function() {
          this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
          this.valueDiv.remove();
        },
        value: function(newValue) {
          if (newValue === void 0) {
            return this.options.value;
          }
          this.options.value = this._constrainedValue(newValue);
          this._refreshValue();
        },
        _constrainedValue: function(newValue) {
          if (newValue === void 0) {
            newValue = this.options.value;
          }
          this.indeterminate = newValue === false;
          if (typeof newValue !== "number") {
            newValue = 0;
          }
          return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, newValue));
        },
        _setOptions: function(options) {
          var value = options.value;
          delete options.value;
          this._super(options);
          this.options.value = this._constrainedValue(value);
          this._refreshValue();
        },
        _setOption: function(key, value) {
          if (key === "max") {
            value = Math.max(this.min, value);
          }
          this._super(key, value);
        },
        _setOptionDisabled: function(value) {
          this._super(value);
          this.element.attr("aria-disabled", value);
          this._toggleClass(null, "ui-state-disabled", !!value);
        },
        _percentage: function() {
          return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
          var value = this.options.value, percentage = this._percentage();
          this.valueDiv.toggle(this.indeterminate || value > this.min).width(percentage.toFixed(0) + "%");
          this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, value === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
          if (this.indeterminate) {
            this.element.removeAttr("aria-valuenow");
            if (!this.overlayDiv) {
              this.overlayDiv = $2("<div>").appendTo(this.valueDiv);
              this._addClass(this.overlayDiv, "ui-progressbar-overlay");
            }
          } else {
            this.element.attr({
              "aria-valuemax": this.options.max,
              "aria-valuenow": value
            });
            if (this.overlayDiv) {
              this.overlayDiv.remove();
              this.overlayDiv = null;
            }
          }
          if (this.oldValue !== value) {
            this.oldValue = value;
            this._trigger("change");
          }
          if (value === this.options.max) {
            this._trigger("complete");
          }
        }
      });
      /*!
       * jQuery UI Selectable 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var widgetsSelectable = $2.widget("ui.selectable", $2.ui.mouse, {
        version: "1.12.1",
        options: {
          appendTo: "body",
          autoRefresh: true,
          distance: 0,
          filter: "*",
          tolerance: "touch",
          selected: null,
          selecting: null,
          start: null,
          stop: null,
          unselected: null,
          unselecting: null
        },
        _create: function() {
          var that = this;
          this._addClass("ui-selectable");
          this.dragged = false;
          this.refresh = function() {
            that.elementPos = $2(that.element[0]).offset();
            that.selectees = $2(that.options.filter, that.element[0]);
            that._addClass(that.selectees, "ui-selectee");
            that.selectees.each(function() {
              var $this = $2(this), selecteeOffset = $this.offset(), pos = {
                left: selecteeOffset.left - that.elementPos.left,
                top: selecteeOffset.top - that.elementPos.top
              };
              $2.data(this, "selectable-item", {
                element: this,
                $element: $this,
                left: pos.left,
                top: pos.top,
                right: pos.left + $this.outerWidth(),
                bottom: pos.top + $this.outerHeight(),
                startselected: false,
                selected: $this.hasClass("ui-selected"),
                selecting: $this.hasClass("ui-selecting"),
                unselecting: $this.hasClass("ui-unselecting")
              });
            });
          };
          this.refresh();
          this._mouseInit();
          this.helper = $2("<div>");
          this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
          this.selectees.removeData("selectable-item");
          this._mouseDestroy();
        },
        _mouseStart: function(event) {
          var that = this, options = this.options;
          this.opos = [event.pageX, event.pageY];
          this.elementPos = $2(this.element[0]).offset();
          if (this.options.disabled) {
            return;
          }
          this.selectees = $2(options.filter, this.element[0]);
          this._trigger("start", event);
          $2(options.appendTo).append(this.helper);
          this.helper.css({
            left: event.pageX,
            top: event.pageY,
            width: 0,
            height: 0
          });
          if (options.autoRefresh) {
            this.refresh();
          }
          this.selectees.filter(".ui-selected").each(function() {
            var selectee = $2.data(this, "selectable-item");
            selectee.startselected = true;
            if (!event.metaKey && !event.ctrlKey) {
              that._removeClass(selectee.$element, "ui-selected");
              selectee.selected = false;
              that._addClass(selectee.$element, "ui-unselecting");
              selectee.unselecting = true;
              that._trigger("unselecting", event, {
                unselecting: selectee.element
              });
            }
          });
          $2(event.target).parents().addBack().each(function() {
            var doSelect, selectee = $2.data(this, "selectable-item");
            if (selectee) {
              doSelect = !event.metaKey && !event.ctrlKey || !selectee.$element.hasClass("ui-selected");
              that._removeClass(selectee.$element, doSelect ? "ui-unselecting" : "ui-selected")._addClass(selectee.$element, doSelect ? "ui-selecting" : "ui-unselecting");
              selectee.unselecting = !doSelect;
              selectee.selecting = doSelect;
              selectee.selected = doSelect;
              if (doSelect) {
                that._trigger("selecting", event, {
                  selecting: selectee.element
                });
              } else {
                that._trigger("unselecting", event, {
                  unselecting: selectee.element
                });
              }
              return false;
            }
          });
        },
        _mouseDrag: function(event) {
          this.dragged = true;
          if (this.options.disabled) {
            return;
          }
          var tmp, that = this, options = this.options, x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
          if (x1 > x2) {
            tmp = x2;
            x2 = x1;
            x1 = tmp;
          }
          if (y1 > y2) {
            tmp = y2;
            y2 = y1;
            y1 = tmp;
          }
          this.helper.css({left: x1, top: y1, width: x2 - x1, height: y2 - y1});
          this.selectees.each(function() {
            var selectee = $2.data(this, "selectable-item"), hit = false, offset = {};
            if (!selectee || selectee.element === that.element[0]) {
              return;
            }
            offset.left = selectee.left + that.elementPos.left;
            offset.right = selectee.right + that.elementPos.left;
            offset.top = selectee.top + that.elementPos.top;
            offset.bottom = selectee.bottom + that.elementPos.top;
            if (options.tolerance === "touch") {
              hit = !(offset.left > x2 || offset.right < x1 || offset.top > y2 || offset.bottom < y1);
            } else if (options.tolerance === "fit") {
              hit = offset.left > x1 && offset.right < x2 && offset.top > y1 && offset.bottom < y2;
            }
            if (hit) {
              if (selectee.selected) {
                that._removeClass(selectee.$element, "ui-selected");
                selectee.selected = false;
              }
              if (selectee.unselecting) {
                that._removeClass(selectee.$element, "ui-unselecting");
                selectee.unselecting = false;
              }
              if (!selectee.selecting) {
                that._addClass(selectee.$element, "ui-selecting");
                selectee.selecting = true;
                that._trigger("selecting", event, {
                  selecting: selectee.element
                });
              }
            } else {
              if (selectee.selecting) {
                if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                  that._removeClass(selectee.$element, "ui-selecting");
                  selectee.selecting = false;
                  that._addClass(selectee.$element, "ui-selected");
                  selectee.selected = true;
                } else {
                  that._removeClass(selectee.$element, "ui-selecting");
                  selectee.selecting = false;
                  if (selectee.startselected) {
                    that._addClass(selectee.$element, "ui-unselecting");
                    selectee.unselecting = true;
                  }
                  that._trigger("unselecting", event, {
                    unselecting: selectee.element
                  });
                }
              }
              if (selectee.selected) {
                if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                  that._removeClass(selectee.$element, "ui-selected");
                  selectee.selected = false;
                  that._addClass(selectee.$element, "ui-unselecting");
                  selectee.unselecting = true;
                  that._trigger("unselecting", event, {
                    unselecting: selectee.element
                  });
                }
              }
            }
          });
          return false;
        },
        _mouseStop: function(event) {
          var that = this;
          this.dragged = false;
          $2(".ui-unselecting", this.element[0]).each(function() {
            var selectee = $2.data(this, "selectable-item");
            that._removeClass(selectee.$element, "ui-unselecting");
            selectee.unselecting = false;
            selectee.startselected = false;
            that._trigger("unselected", event, {
              unselected: selectee.element
            });
          });
          $2(".ui-selecting", this.element[0]).each(function() {
            var selectee = $2.data(this, "selectable-item");
            that._removeClass(selectee.$element, "ui-selecting")._addClass(selectee.$element, "ui-selected");
            selectee.selecting = false;
            selectee.selected = true;
            selectee.startselected = true;
            that._trigger("selected", event, {
              selected: selectee.element
            });
          });
          this._trigger("stop", event);
          this.helper.remove();
          return false;
        }
      });
      /*!
       * jQuery UI Selectmenu 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var widgetsSelectmenu = $2.widget("ui.selectmenu", [$2.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          classes: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          },
          disabled: null,
          icons: {
            button: "ui-icon-triangle-1-s"
          },
          position: {
            my: "left top",
            at: "left bottom",
            collision: "none"
          },
          width: false,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null
        },
        _create: function() {
          var selectmenuId = this.element.uniqueId().attr("id");
          this.ids = {
            element: selectmenuId,
            button: selectmenuId + "-button",
            menu: selectmenuId + "-menu"
          };
          this._drawButton();
          this._drawMenu();
          this._bindFormResetHandler();
          this._rendered = false;
          this.menuItems = $2();
        },
        _drawButton: function() {
          var icon, that = this, item = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
          this.labels = this.element.labels().attr("for", this.ids.button);
          this._on(this.labels, {
            click: function(event) {
              this.button.focus();
              event.preventDefault();
            }
          });
          this.element.hide();
          this.button = $2("<span>", {
            tabindex: this.options.disabled ? -1 : 0,
            id: this.ids.button,
            role: "combobox",
            "aria-expanded": "false",
            "aria-autocomplete": "list",
            "aria-owns": this.ids.menu,
            "aria-haspopup": "true",
            title: this.element.attr("title")
          }).insertAfter(this.element);
          this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
          icon = $2("<span>").appendTo(this.button);
          this._addClass(icon, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
          this.buttonItem = this._renderButtonItem(item).appendTo(this.button);
          if (this.options.width !== false) {
            this._resizeButton();
          }
          this._on(this.button, this._buttonEvents);
          this.button.one("focusin", function() {
            if (!that._rendered) {
              that._refreshMenu();
            }
          });
        },
        _drawMenu: function() {
          var that = this;
          this.menu = $2("<ul>", {
            "aria-hidden": "true",
            "aria-labelledby": this.ids.button,
            id: this.ids.menu
          });
          this.menuWrap = $2("<div>").append(this.menu);
          this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
          this.menuWrap.appendTo(this._appendTo());
          this.menuInstance = this.menu.menu({
            classes: {
              "ui-menu": "ui-corner-bottom"
            },
            role: "listbox",
            select: function(event, ui) {
              event.preventDefault();
              that._setSelection();
              that._select(ui.item.data("ui-selectmenu-item"), event);
            },
            focus: function(event, ui) {
              var item = ui.item.data("ui-selectmenu-item");
              if (that.focusIndex != null && item.index !== that.focusIndex) {
                that._trigger("focus", event, {item});
                if (!that.isOpen) {
                  that._select(item, event);
                }
              }
              that.focusIndex = item.index;
              that.button.attr("aria-activedescendant", that.menuItems.eq(item.index).attr("id"));
            }
          }).menu("instance");
          this.menuInstance._off(this.menu, "mouseleave");
          this.menuInstance._closeOnDocumentClick = function() {
            return false;
          };
          this.menuInstance._isDivider = function() {
            return false;
          };
        },
        refresh: function() {
          this._refreshMenu();
          this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
          if (this.options.width === null) {
            this._resizeButton();
          }
        },
        _refreshMenu: function() {
          var item, options = this.element.find("option");
          this.menu.empty();
          this._parseOptions(options);
          this._renderMenu(this.menu, this.items);
          this.menuInstance.refresh();
          this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
          this._rendered = true;
          if (!options.length) {
            return;
          }
          item = this._getSelectedItem();
          this.menuInstance.focus(null, item);
          this._setAria(item.data("ui-selectmenu-item"));
          this._setOption("disabled", this.element.prop("disabled"));
        },
        open: function(event) {
          if (this.options.disabled) {
            return;
          }
          if (!this._rendered) {
            this._refreshMenu();
          } else {
            this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active");
            this.menuInstance.focus(null, this._getSelectedItem());
          }
          if (!this.menuItems.length) {
            return;
          }
          this.isOpen = true;
          this._toggleAttr();
          this._resizeMenu();
          this._position();
          this._on(this.document, this._documentClick);
          this._trigger("open", event);
        },
        _position: function() {
          this.menuWrap.position($2.extend({of: this.button}, this.options.position));
        },
        close: function(event) {
          if (!this.isOpen) {
            return;
          }
          this.isOpen = false;
          this._toggleAttr();
          this.range = null;
          this._off(this.document);
          this._trigger("close", event);
        },
        widget: function() {
          return this.button;
        },
        menuWidget: function() {
          return this.menu;
        },
        _renderButtonItem: function(item) {
          var buttonItem = $2("<span>");
          this._setText(buttonItem, item.label);
          this._addClass(buttonItem, "ui-selectmenu-text");
          return buttonItem;
        },
        _renderMenu: function(ul, items) {
          var that = this, currentOptgroup = "";
          $2.each(items, function(index, item) {
            var li;
            if (item.optgroup !== currentOptgroup) {
              li = $2("<li>", {
                text: item.optgroup
              });
              that._addClass(li, "ui-selectmenu-optgroup", "ui-menu-divider" + (item.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""));
              li.appendTo(ul);
              currentOptgroup = item.optgroup;
            }
            that._renderItemData(ul, item);
          });
        },
        _renderItemData: function(ul, item) {
          return this._renderItem(ul, item).data("ui-selectmenu-item", item);
        },
        _renderItem: function(ul, item) {
          var li = $2("<li>"), wrapper = $2("<div>", {
            title: item.element.attr("title")
          });
          if (item.disabled) {
            this._addClass(li, null, "ui-state-disabled");
          }
          this._setText(wrapper, item.label);
          return li.append(wrapper).appendTo(ul);
        },
        _setText: function(element, value) {
          if (value) {
            element.text(value);
          } else {
            element.html("&#160;");
          }
        },
        _move: function(direction, event) {
          var item, next, filter = ".ui-menu-item";
          if (this.isOpen) {
            item = this.menuItems.eq(this.focusIndex).parent("li");
          } else {
            item = this.menuItems.eq(this.element[0].selectedIndex).parent("li");
            filter += ":not(.ui-state-disabled)";
          }
          if (direction === "first" || direction === "last") {
            next = item[direction === "first" ? "prevAll" : "nextAll"](filter).eq(-1);
          } else {
            next = item[direction + "All"](filter).eq(0);
          }
          if (next.length) {
            this.menuInstance.focus(event, next);
          }
        },
        _getSelectedItem: function() {
          return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(event) {
          this[this.isOpen ? "close" : "open"](event);
        },
        _setSelection: function() {
          var selection;
          if (!this.range) {
            return;
          }
          if (window.getSelection) {
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(this.range);
          } else {
            this.range.select();
          }
          this.button.focus();
        },
        _documentClick: {
          mousedown: function(event) {
            if (!this.isOpen) {
              return;
            }
            if (!$2(event.target).closest(".ui-selectmenu-menu, #" + $2.ui.escapeSelector(this.ids.button)).length) {
              this.close(event);
            }
          }
        },
        _buttonEvents: {
          mousedown: function() {
            var selection;
            if (window.getSelection) {
              selection = window.getSelection();
              if (selection.rangeCount) {
                this.range = selection.getRangeAt(0);
              }
            } else {
              this.range = document.selection.createRange();
            }
          },
          click: function(event) {
            this._setSelection();
            this._toggle(event);
          },
          keydown: function(event) {
            var preventDefault = true;
            switch (event.keyCode) {
              case $2.ui.keyCode.TAB:
              case $2.ui.keyCode.ESCAPE:
                this.close(event);
                preventDefault = false;
                break;
              case $2.ui.keyCode.ENTER:
                if (this.isOpen) {
                  this._selectFocusedItem(event);
                }
                break;
              case $2.ui.keyCode.UP:
                if (event.altKey) {
                  this._toggle(event);
                } else {
                  this._move("prev", event);
                }
                break;
              case $2.ui.keyCode.DOWN:
                if (event.altKey) {
                  this._toggle(event);
                } else {
                  this._move("next", event);
                }
                break;
              case $2.ui.keyCode.SPACE:
                if (this.isOpen) {
                  this._selectFocusedItem(event);
                } else {
                  this._toggle(event);
                }
                break;
              case $2.ui.keyCode.LEFT:
                this._move("prev", event);
                break;
              case $2.ui.keyCode.RIGHT:
                this._move("next", event);
                break;
              case $2.ui.keyCode.HOME:
              case $2.ui.keyCode.PAGE_UP:
                this._move("first", event);
                break;
              case $2.ui.keyCode.END:
              case $2.ui.keyCode.PAGE_DOWN:
                this._move("last", event);
                break;
              default:
                this.menu.trigger(event);
                preventDefault = false;
            }
            if (preventDefault) {
              event.preventDefault();
            }
          }
        },
        _selectFocusedItem: function(event) {
          var item = this.menuItems.eq(this.focusIndex).parent("li");
          if (!item.hasClass("ui-state-disabled")) {
            this._select(item.data("ui-selectmenu-item"), event);
          }
        },
        _select: function(item, event) {
          var oldIndex = this.element[0].selectedIndex;
          this.element[0].selectedIndex = item.index;
          this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(item));
          this._setAria(item);
          this._trigger("select", event, {item});
          if (item.index !== oldIndex) {
            this._trigger("change", event, {item});
          }
          this.close(event);
        },
        _setAria: function(item) {
          var id = this.menuItems.eq(item.index).attr("id");
          this.button.attr({
            "aria-labelledby": id,
            "aria-activedescendant": id
          });
          this.menu.attr("aria-activedescendant", id);
        },
        _setOption: function(key, value) {
          if (key === "icons") {
            var icon = this.button.find("span.ui-icon");
            this._removeClass(icon, null, this.options.icons.button)._addClass(icon, null, value.button);
          }
          this._super(key, value);
          if (key === "appendTo") {
            this.menuWrap.appendTo(this._appendTo());
          }
          if (key === "width") {
            this._resizeButton();
          }
        },
        _setOptionDisabled: function(value) {
          this._super(value);
          this.menuInstance.option("disabled", value);
          this.button.attr("aria-disabled", value);
          this._toggleClass(this.button, null, "ui-state-disabled", value);
          this.element.prop("disabled", value);
          if (value) {
            this.button.attr("tabindex", -1);
            this.close();
          } else {
            this.button.attr("tabindex", 0);
          }
        },
        _appendTo: function() {
          var element = this.options.appendTo;
          if (element) {
            element = element.jquery || element.nodeType ? $2(element) : this.document.find(element).eq(0);
          }
          if (!element || !element[0]) {
            element = this.element.closest(".ui-front, dialog");
          }
          if (!element.length) {
            element = this.document[0].body;
          }
          return element;
        },
        _toggleAttr: function() {
          this.button.attr("aria-expanded", this.isOpen);
          this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
          this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
          var width = this.options.width;
          if (width === false) {
            this.button.css("width", "");
            return;
          }
          if (width === null) {
            width = this.element.show().outerWidth();
            this.element.hide();
          }
          this.button.outerWidth(width);
        },
        _resizeMenu: function() {
          this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
          var options = this._super();
          options.disabled = this.element.prop("disabled");
          return options;
        },
        _parseOptions: function(options) {
          var that = this, data2 = [];
          options.each(function(index, item) {
            data2.push(that._parseOption($2(item), index));
          });
          this.items = data2;
        },
        _parseOption: function(option, index) {
          var optgroup = option.parent("optgroup");
          return {
            element: option,
            index,
            value: option.val(),
            label: option.text(),
            optgroup: optgroup.attr("label") || "",
            disabled: optgroup.prop("disabled") || option.prop("disabled")
          };
        },
        _destroy: function() {
          this._unbindFormResetHandler();
          this.menuWrap.remove();
          this.button.remove();
          this.element.show();
          this.element.removeUniqueId();
          this.labels.attr("for", this.ids.element);
        }
      }]);
      /*!
       * jQuery UI Slider 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var widgetsSlider = $2.widget("ui.slider", $2.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
          animate: false,
          classes: {
            "ui-slider": "ui-corner-all",
            "ui-slider-handle": "ui-corner-all",
            "ui-slider-range": "ui-corner-all ui-widget-header"
          },
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: false,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null
        },
        numPages: 5,
        _create: function() {
          this._keySliding = false;
          this._mouseSliding = false;
          this._animateOff = true;
          this._handleIndex = null;
          this._detectOrientation();
          this._mouseInit();
          this._calculateNewMax();
          this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
          this._refresh();
          this._animateOff = false;
        },
        _refresh: function() {
          this._createRange();
          this._createHandles();
          this._setupEvents();
          this._refreshValue();
        },
        _createHandles: function() {
          var i, handleCount, options = this.options, existingHandles = this.element.find(".ui-slider-handle"), handle = "<span tabindex='0'></span>", handles = [];
          handleCount = options.values && options.values.length || 1;
          if (existingHandles.length > handleCount) {
            existingHandles.slice(handleCount).remove();
            existingHandles = existingHandles.slice(0, handleCount);
          }
          for (i = existingHandles.length; i < handleCount; i++) {
            handles.push(handle);
          }
          this.handles = existingHandles.add($2(handles.join("")).appendTo(this.element));
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
          this.handle = this.handles.eq(0);
          this.handles.each(function(i2) {
            $2(this).data("ui-slider-handle-index", i2).attr("tabIndex", 0);
          });
        },
        _createRange: function() {
          var options = this.options;
          if (options.range) {
            if (options.range === true) {
              if (!options.values) {
                options.values = [this._valueMin(), this._valueMin()];
              } else if (options.values.length && options.values.length !== 2) {
                options.values = [options.values[0], options.values[0]];
              } else if ($2.isArray(options.values)) {
                options.values = options.values.slice(0);
              }
            }
            if (!this.range || !this.range.length) {
              this.range = $2("<div>").appendTo(this.element);
              this._addClass(this.range, "ui-slider-range");
            } else {
              this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max");
              this.range.css({
                left: "",
                bottom: ""
              });
            }
            if (options.range === "min" || options.range === "max") {
              this._addClass(this.range, "ui-slider-range-" + options.range);
            }
          } else {
            if (this.range) {
              this.range.remove();
            }
            this.range = null;
          }
        },
        _setupEvents: function() {
          this._off(this.handles);
          this._on(this.handles, this._handleEvents);
          this._hoverable(this.handles);
          this._focusable(this.handles);
        },
        _destroy: function() {
          this.handles.remove();
          if (this.range) {
            this.range.remove();
          }
          this._mouseDestroy();
        },
        _mouseCapture: function(event) {
          var position2, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle, that = this, o = this.options;
          if (o.disabled) {
            return false;
          }
          this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight()
          };
          this.elementOffset = this.element.offset();
          position2 = {x: event.pageX, y: event.pageY};
          normValue = this._normValueFromMouse(position2);
          distance = this._valueMax() - this._valueMin() + 1;
          this.handles.each(function(i) {
            var thisDistance = Math.abs(normValue - that.values(i));
            if (distance > thisDistance || distance === thisDistance && (i === that._lastChangedValue || that.values(i) === o.min)) {
              distance = thisDistance;
              closestHandle = $2(this);
              index = i;
            }
          });
          allowed = this._start(event, index);
          if (allowed === false) {
            return false;
          }
          this._mouseSliding = true;
          this._handleIndex = index;
          this._addClass(closestHandle, null, "ui-state-active");
          closestHandle.trigger("focus");
          offset = closestHandle.offset();
          mouseOverHandle = !$2(event.target).parents().addBack().is(".ui-slider-handle");
          this._clickOffset = mouseOverHandle ? {left: 0, top: 0} : {
            left: event.pageX - offset.left - closestHandle.width() / 2,
            top: event.pageY - offset.top - closestHandle.height() / 2 - (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) - (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) + (parseInt(closestHandle.css("marginTop"), 10) || 0)
          };
          if (!this.handles.hasClass("ui-state-hover")) {
            this._slide(event, index, normValue);
          }
          this._animateOff = true;
          return true;
        },
        _mouseStart: function() {
          return true;
        },
        _mouseDrag: function(event) {
          var position2 = {x: event.pageX, y: event.pageY}, normValue = this._normValueFromMouse(position2);
          this._slide(event, this._handleIndex, normValue);
          return false;
        },
        _mouseStop: function(event) {
          this._removeClass(this.handles, null, "ui-state-active");
          this._mouseSliding = false;
          this._stop(event, this._handleIndex);
          this._change(event, this._handleIndex);
          this._handleIndex = null;
          this._clickOffset = null;
          this._animateOff = false;
          return false;
        },
        _detectOrientation: function() {
          this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(position2) {
          var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse;
          if (this.orientation === "horizontal") {
            pixelTotal = this.elementSize.width;
            pixelMouse = position2.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
          } else {
            pixelTotal = this.elementSize.height;
            pixelMouse = position2.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
          }
          percentMouse = pixelMouse / pixelTotal;
          if (percentMouse > 1) {
            percentMouse = 1;
          }
          if (percentMouse < 0) {
            percentMouse = 0;
          }
          if (this.orientation === "vertical") {
            percentMouse = 1 - percentMouse;
          }
          valueTotal = this._valueMax() - this._valueMin();
          valueMouse = this._valueMin() + percentMouse * valueTotal;
          return this._trimAlignValue(valueMouse);
        },
        _uiHash: function(index, value, values) {
          var uiHash = {
            handle: this.handles[index],
            handleIndex: index,
            value: value !== void 0 ? value : this.value()
          };
          if (this._hasMultipleValues()) {
            uiHash.value = value !== void 0 ? value : this.values(index);
            uiHash.values = values || this.values();
          }
          return uiHash;
        },
        _hasMultipleValues: function() {
          return this.options.values && this.options.values.length;
        },
        _start: function(event, index) {
          return this._trigger("start", event, this._uiHash(index));
        },
        _slide: function(event, index, newVal) {
          var allowed, otherVal, currentValue = this.value(), newValues = this.values();
          if (this._hasMultipleValues()) {
            otherVal = this.values(index ? 0 : 1);
            currentValue = this.values(index);
            if (this.options.values.length === 2 && this.options.range === true) {
              newVal = index === 0 ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal);
            }
            newValues[index] = newVal;
          }
          if (newVal === currentValue) {
            return;
          }
          allowed = this._trigger("slide", event, this._uiHash(index, newVal, newValues));
          if (allowed === false) {
            return;
          }
          if (this._hasMultipleValues()) {
            this.values(index, newVal);
          } else {
            this.value(newVal);
          }
        },
        _stop: function(event, index) {
          this._trigger("stop", event, this._uiHash(index));
        },
        _change: function(event, index) {
          if (!this._keySliding && !this._mouseSliding) {
            this._lastChangedValue = index;
            this._trigger("change", event, this._uiHash(index));
          }
        },
        value: function(newValue) {
          if (arguments.length) {
            this.options.value = this._trimAlignValue(newValue);
            this._refreshValue();
            this._change(null, 0);
            return;
          }
          return this._value();
        },
        values: function(index, newValue) {
          var vals, newValues, i;
          if (arguments.length > 1) {
            this.options.values[index] = this._trimAlignValue(newValue);
            this._refreshValue();
            this._change(null, index);
            return;
          }
          if (arguments.length) {
            if ($2.isArray(arguments[0])) {
              vals = this.options.values;
              newValues = arguments[0];
              for (i = 0; i < vals.length; i += 1) {
                vals[i] = this._trimAlignValue(newValues[i]);
                this._change(null, i);
              }
              this._refreshValue();
            } else {
              if (this._hasMultipleValues()) {
                return this._values(index);
              } else {
                return this.value();
              }
            }
          } else {
            return this._values();
          }
        },
        _setOption: function(key, value) {
          var i, valsLength = 0;
          if (key === "range" && this.options.range === true) {
            if (value === "min") {
              this.options.value = this._values(0);
              this.options.values = null;
            } else if (value === "max") {
              this.options.value = this._values(this.options.values.length - 1);
              this.options.values = null;
            }
          }
          if ($2.isArray(this.options.values)) {
            valsLength = this.options.values.length;
          }
          this._super(key, value);
          switch (key) {
            case "orientation":
              this._detectOrientation();
              this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
              this._refreshValue();
              if (this.options.range) {
                this._refreshRange(value);
              }
              this.handles.css(value === "horizontal" ? "bottom" : "left", "");
              break;
            case "value":
              this._animateOff = true;
              this._refreshValue();
              this._change(null, 0);
              this._animateOff = false;
              break;
            case "values":
              this._animateOff = true;
              this._refreshValue();
              for (i = valsLength - 1; i >= 0; i--) {
                this._change(null, i);
              }
              this._animateOff = false;
              break;
            case "step":
            case "min":
            case "max":
              this._animateOff = true;
              this._calculateNewMax();
              this._refreshValue();
              this._animateOff = false;
              break;
            case "range":
              this._animateOff = true;
              this._refresh();
              this._animateOff = false;
              break;
          }
        },
        _setOptionDisabled: function(value) {
          this._super(value);
          this._toggleClass(null, "ui-state-disabled", !!value);
        },
        _value: function() {
          var val = this.options.value;
          val = this._trimAlignValue(val);
          return val;
        },
        _values: function(index) {
          var val, vals, i;
          if (arguments.length) {
            val = this.options.values[index];
            val = this._trimAlignValue(val);
            return val;
          } else if (this._hasMultipleValues()) {
            vals = this.options.values.slice();
            for (i = 0; i < vals.length; i += 1) {
              vals[i] = this._trimAlignValue(vals[i]);
            }
            return vals;
          } else {
            return [];
          }
        },
        _trimAlignValue: function(val) {
          if (val <= this._valueMin()) {
            return this._valueMin();
          }
          if (val >= this._valueMax()) {
            return this._valueMax();
          }
          var step = this.options.step > 0 ? this.options.step : 1, valModStep = (val - this._valueMin()) % step, alignValue = val - valModStep;
          if (Math.abs(valModStep) * 2 >= step) {
            alignValue += valModStep > 0 ? step : -step;
          }
          return parseFloat(alignValue.toFixed(5));
        },
        _calculateNewMax: function() {
          var max = this.options.max, min = this._valueMin(), step = this.options.step, aboveMin = Math.round((max - min) / step) * step;
          max = aboveMin + min;
          if (max > this.options.max) {
            max -= step;
          }
          this.max = parseFloat(max.toFixed(this._precision()));
        },
        _precision: function() {
          var precision = this._precisionOf(this.options.step);
          if (this.options.min !== null) {
            precision = Math.max(precision, this._precisionOf(this.options.min));
          }
          return precision;
        },
        _precisionOf: function(num) {
          var str = num.toString(), decimal = str.indexOf(".");
          return decimal === -1 ? 0 : str.length - decimal - 1;
        },
        _valueMin: function() {
          return this.options.min;
        },
        _valueMax: function() {
          return this.max;
        },
        _refreshRange: function(orientation) {
          if (orientation === "vertical") {
            this.range.css({width: "", left: ""});
          }
          if (orientation === "horizontal") {
            this.range.css({height: "", bottom: ""});
          }
        },
        _refreshValue: function() {
          var lastValPercent, valPercent, value, valueMin, valueMax, oRange = this.options.range, o = this.options, that = this, animate = !this._animateOff ? o.animate : false, _set = {};
          if (this._hasMultipleValues()) {
            this.handles.each(function(i) {
              valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() - that._valueMin()) * 100;
              _set[that.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
              $2(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
              if (that.options.range === true) {
                if (that.orientation === "horizontal") {
                  if (i === 0) {
                    that.range.stop(1, 1)[animate ? "animate" : "css"]({
                      left: valPercent + "%"
                    }, o.animate);
                  }
                  if (i === 1) {
                    that.range[animate ? "animate" : "css"]({
                      width: valPercent - lastValPercent + "%"
                    }, {
                      queue: false,
                      duration: o.animate
                    });
                  }
                } else {
                  if (i === 0) {
                    that.range.stop(1, 1)[animate ? "animate" : "css"]({
                      bottom: valPercent + "%"
                    }, o.animate);
                  }
                  if (i === 1) {
                    that.range[animate ? "animate" : "css"]({
                      height: valPercent - lastValPercent + "%"
                    }, {
                      queue: false,
                      duration: o.animate
                    });
                  }
                }
              }
              lastValPercent = valPercent;
            });
          } else {
            value = this.value();
            valueMin = this._valueMin();
            valueMax = this._valueMax();
            valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
            _set[this.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
            this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
            if (oRange === "min" && this.orientation === "horizontal") {
              this.range.stop(1, 1)[animate ? "animate" : "css"]({
                width: valPercent + "%"
              }, o.animate);
            }
            if (oRange === "max" && this.orientation === "horizontal") {
              this.range.stop(1, 1)[animate ? "animate" : "css"]({
                width: 100 - valPercent + "%"
              }, o.animate);
            }
            if (oRange === "min" && this.orientation === "vertical") {
              this.range.stop(1, 1)[animate ? "animate" : "css"]({
                height: valPercent + "%"
              }, o.animate);
            }
            if (oRange === "max" && this.orientation === "vertical") {
              this.range.stop(1, 1)[animate ? "animate" : "css"]({
                height: 100 - valPercent + "%"
              }, o.animate);
            }
          }
        },
        _handleEvents: {
          keydown: function(event) {
            var allowed, curVal, newVal, step, index = $2(event.target).data("ui-slider-handle-index");
            switch (event.keyCode) {
              case $2.ui.keyCode.HOME:
              case $2.ui.keyCode.END:
              case $2.ui.keyCode.PAGE_UP:
              case $2.ui.keyCode.PAGE_DOWN:
              case $2.ui.keyCode.UP:
              case $2.ui.keyCode.RIGHT:
              case $2.ui.keyCode.DOWN:
              case $2.ui.keyCode.LEFT:
                event.preventDefault();
                if (!this._keySliding) {
                  this._keySliding = true;
                  this._addClass($2(event.target), null, "ui-state-active");
                  allowed = this._start(event, index);
                  if (allowed === false) {
                    return;
                  }
                }
                break;
            }
            step = this.options.step;
            if (this._hasMultipleValues()) {
              curVal = newVal = this.values(index);
            } else {
              curVal = newVal = this.value();
            }
            switch (event.keyCode) {
              case $2.ui.keyCode.HOME:
                newVal = this._valueMin();
                break;
              case $2.ui.keyCode.END:
                newVal = this._valueMax();
                break;
              case $2.ui.keyCode.PAGE_UP:
                newVal = this._trimAlignValue(curVal + (this._valueMax() - this._valueMin()) / this.numPages);
                break;
              case $2.ui.keyCode.PAGE_DOWN:
                newVal = this._trimAlignValue(curVal - (this._valueMax() - this._valueMin()) / this.numPages);
                break;
              case $2.ui.keyCode.UP:
              case $2.ui.keyCode.RIGHT:
                if (curVal === this._valueMax()) {
                  return;
                }
                newVal = this._trimAlignValue(curVal + step);
                break;
              case $2.ui.keyCode.DOWN:
              case $2.ui.keyCode.LEFT:
                if (curVal === this._valueMin()) {
                  return;
                }
                newVal = this._trimAlignValue(curVal - step);
                break;
            }
            this._slide(event, index, newVal);
          },
          keyup: function(event) {
            var index = $2(event.target).data("ui-slider-handle-index");
            if (this._keySliding) {
              this._keySliding = false;
              this._stop(event, index);
              this._change(event, index);
              this._removeClass($2(event.target), null, "ui-state-active");
            }
          }
        }
      });
      /*!
       * jQuery UI Sortable 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      var widgetsSortable = $2.widget("ui.sortable", $2.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
          appendTo: "parent",
          axis: false,
          connectWith: false,
          containment: false,
          cursor: "auto",
          cursorAt: false,
          dropOnEmpty: true,
          forcePlaceholderSize: false,
          forceHelperSize: false,
          grid: false,
          handle: false,
          helper: "original",
          items: "> *",
          opacity: false,
          placeholder: false,
          revert: false,
          scroll: true,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null
        },
        _isOverAxis: function(x, reference, size) {
          return x >= reference && x < reference + size;
        },
        _isFloating: function(item) {
          return /left|right/.test(item.css("float")) || /inline|table-cell/.test(item.css("display"));
        },
        _create: function() {
          this.containerCache = {};
          this._addClass("ui-sortable");
          this.refresh();
          this.offset = this.element.offset();
          this._mouseInit();
          this._setHandleClassName();
          this.ready = true;
        },
        _setOption: function(key, value) {
          this._super(key, value);
          if (key === "handle") {
            this._setHandleClassName();
          }
        },
        _setHandleClassName: function() {
          var that = this;
          this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
          $2.each(this.items, function() {
            that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
          });
        },
        _destroy: function() {
          this._mouseDestroy();
          for (var i = this.items.length - 1; i >= 0; i--) {
            this.items[i].item.removeData(this.widgetName + "-item");
          }
          return this;
        },
        _mouseCapture: function(event, overrideHandle) {
          var currentItem = null, validHandle = false, that = this;
          if (this.reverting) {
            return false;
          }
          if (this.options.disabled || this.options.type === "static") {
            return false;
          }
          this._refreshItems(event);
          $2(event.target).parents().each(function() {
            if ($2.data(this, that.widgetName + "-item") === that) {
              currentItem = $2(this);
              return false;
            }
          });
          if ($2.data(event.target, that.widgetName + "-item") === that) {
            currentItem = $2(event.target);
          }
          if (!currentItem) {
            return false;
          }
          if (this.options.handle && !overrideHandle) {
            $2(this.options.handle, currentItem).find("*").addBack().each(function() {
              if (this === event.target) {
                validHandle = true;
              }
            });
            if (!validHandle) {
              return false;
            }
          }
          this.currentItem = currentItem;
          this._removeCurrentsFromItems();
          return true;
        },
        _mouseStart: function(event, overrideHandle, noActivation) {
          var i, body, o = this.options;
          this.currentContainer = this;
          this.refreshPositions();
          this.helper = this._createHelper(event);
          this._cacheHelperProportions();
          this._cacheMargins();
          this.scrollParent = this.helper.scrollParent();
          this.offset = this.currentItem.offset();
          this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
          };
          $2.extend(this.offset, {
            click: {
              left: event.pageX - this.offset.left,
              top: event.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
          });
          this.helper.css("position", "absolute");
          this.cssPosition = this.helper.css("position");
          this.originalPosition = this._generatePosition(event);
          this.originalPageX = event.pageX;
          this.originalPageY = event.pageY;
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
          this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0]
          };
          if (this.helper[0] !== this.currentItem[0]) {
            this.currentItem.hide();
          }
          this._createPlaceholder();
          if (o.containment) {
            this._setContainment();
          }
          if (o.cursor && o.cursor !== "auto") {
            body = this.document.find("body");
            this.storedCursor = body.css("cursor");
            body.css("cursor", o.cursor);
            this.storedStylesheet = $2("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
          }
          if (o.opacity) {
            if (this.helper.css("opacity")) {
              this._storedOpacity = this.helper.css("opacity");
            }
            this.helper.css("opacity", o.opacity);
          }
          if (o.zIndex) {
            if (this.helper.css("zIndex")) {
              this._storedZIndex = this.helper.css("zIndex");
            }
            this.helper.css("zIndex", o.zIndex);
          }
          if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
            this.overflowOffset = this.scrollParent.offset();
          }
          this._trigger("start", event, this._uiHash());
          if (!this._preserveHelperProportions) {
            this._cacheHelperProportions();
          }
          if (!noActivation) {
            for (i = this.containers.length - 1; i >= 0; i--) {
              this.containers[i]._trigger("activate", event, this._uiHash(this));
            }
          }
          if ($2.ui.ddmanager) {
            $2.ui.ddmanager.current = this;
          }
          if ($2.ui.ddmanager && !o.dropBehaviour) {
            $2.ui.ddmanager.prepareOffsets(this, event);
          }
          this.dragging = true;
          this._addClass(this.helper, "ui-sortable-helper");
          this._mouseDrag(event);
          return true;
        },
        _mouseDrag: function(event) {
          var i, item, itemElement, intersection, o = this.options, scrolled = false;
          this.position = this._generatePosition(event);
          this.positionAbs = this._convertPositionTo("absolute");
          if (!this.lastPositionAbs) {
            this.lastPositionAbs = this.positionAbs;
          }
          if (this.options.scroll) {
            if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
              if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity) {
                this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
              } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
              }
              if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity) {
                this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
              } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
              }
            } else {
              if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
                scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
              } else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
                scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
              }
              if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
                scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
              } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
                scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
              }
            }
            if (scrolled !== false && $2.ui.ddmanager && !o.dropBehaviour) {
              $2.ui.ddmanager.prepareOffsets(this, event);
            }
          }
          this.positionAbs = this._convertPositionTo("absolute");
          if (!this.options.axis || this.options.axis !== "y") {
            this.helper[0].style.left = this.position.left + "px";
          }
          if (!this.options.axis || this.options.axis !== "x") {
            this.helper[0].style.top = this.position.top + "px";
          }
          for (i = this.items.length - 1; i >= 0; i--) {
            item = this.items[i];
            itemElement = item.item[0];
            intersection = this._intersectsWithPointer(item);
            if (!intersection) {
              continue;
            }
            if (item.instance !== this.currentContainer) {
              continue;
            }
            if (itemElement !== this.currentItem[0] && this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement && !$2.contains(this.placeholder[0], itemElement) && (this.options.type === "semi-dynamic" ? !$2.contains(this.element[0], itemElement) : true)) {
              this.direction = intersection === 1 ? "down" : "up";
              if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
                this._rearrange(event, item);
              } else {
                break;
              }
              this._trigger("change", event, this._uiHash());
              break;
            }
          }
          this._contactContainers(event);
          if ($2.ui.ddmanager) {
            $2.ui.ddmanager.drag(this, event);
          }
          this._trigger("sort", event, this._uiHash());
          this.lastPositionAbs = this.positionAbs;
          return false;
        },
        _mouseStop: function(event, noPropagation) {
          if (!event) {
            return;
          }
          if ($2.ui.ddmanager && !this.options.dropBehaviour) {
            $2.ui.ddmanager.drop(this, event);
          }
          if (this.options.revert) {
            var that = this, cur = this.placeholder.offset(), axis = this.options.axis, animation = {};
            if (!axis || axis === "x") {
              animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
            }
            if (!axis || axis === "y") {
              animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
            }
            this.reverting = true;
            $2(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function() {
              that._clear(event);
            });
          } else {
            this._clear(event, noPropagation);
          }
          return false;
        },
        cancel: function() {
          if (this.dragging) {
            this._mouseUp(new $2.Event("mouseup", {target: null}));
            if (this.options.helper === "original") {
              this.currentItem.css(this._storedCSS);
              this._removeClass(this.currentItem, "ui-sortable-helper");
            } else {
              this.currentItem.show();
            }
            for (var i = this.containers.length - 1; i >= 0; i--) {
              this.containers[i]._trigger("deactivate", null, this._uiHash(this));
              if (this.containers[i].containerCache.over) {
                this.containers[i]._trigger("out", null, this._uiHash(this));
                this.containers[i].containerCache.over = 0;
              }
            }
          }
          if (this.placeholder) {
            if (this.placeholder[0].parentNode) {
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            }
            if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
              this.helper.remove();
            }
            $2.extend(this, {
              helper: null,
              dragging: false,
              reverting: false,
              _noFinalSort: null
            });
            if (this.domPosition.prev) {
              $2(this.domPosition.prev).after(this.currentItem);
            } else {
              $2(this.domPosition.parent).prepend(this.currentItem);
            }
          }
          return this;
        },
        serialize: function(o) {
          var items = this._getItemsAsjQuery(o && o.connected), str = [];
          o = o || {};
          $2(items).each(function() {
            var res = ($2(o.item || this).attr(o.attribute || "id") || "").match(o.expression || /(.+)[\-=_](.+)/);
            if (res) {
              str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
            }
          });
          if (!str.length && o.key) {
            str.push(o.key + "=");
          }
          return str.join("&");
        },
        toArray: function(o) {
          var items = this._getItemsAsjQuery(o && o.connected), ret = [];
          o = o || {};
          items.each(function() {
            ret.push($2(o.item || this).attr(o.attribute || "id") || "");
          });
          return ret;
        },
        _intersectsWith: function(item) {
          var x1 = this.positionAbs.left, x2 = x1 + this.helperProportions.width, y1 = this.positionAbs.top, y2 = y1 + this.helperProportions.height, l = item.left, r = l + item.width, t = item.top, b = t + item.height, dyClick = this.offset.click.top, dxClick = this.offset.click.left, isOverElementHeight = this.options.axis === "x" || y1 + dyClick > t && y1 + dyClick < b, isOverElementWidth = this.options.axis === "y" || x1 + dxClick > l && x1 + dxClick < r, isOverElement = isOverElementHeight && isOverElementWidth;
          if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"]) {
            return isOverElement;
          } else {
            return l < x1 + this.helperProportions.width / 2 && x2 - this.helperProportions.width / 2 < r && t < y1 + this.helperProportions.height / 2 && y2 - this.helperProportions.height / 2 < b;
          }
        },
        _intersectsWithPointer: function(item) {
          var verticalDirection, horizontalDirection, isOverElementHeight = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height), isOverElementWidth = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width), isOverElement = isOverElementHeight && isOverElementWidth;
          if (!isOverElement) {
            return false;
          }
          verticalDirection = this._getDragVerticalDirection();
          horizontalDirection = this._getDragHorizontalDirection();
          return this.floating ? horizontalDirection === "right" || verticalDirection === "down" ? 2 : 1 : verticalDirection && (verticalDirection === "down" ? 2 : 1);
        },
        _intersectsWithSides: function(item) {
          var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height), isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width), verticalDirection = this._getDragVerticalDirection(), horizontalDirection = this._getDragHorizontalDirection();
          if (this.floating && horizontalDirection) {
            return horizontalDirection === "right" && isOverRightHalf || horizontalDirection === "left" && !isOverRightHalf;
          } else {
            return verticalDirection && (verticalDirection === "down" && isOverBottomHalf || verticalDirection === "up" && !isOverBottomHalf);
          }
        },
        _getDragVerticalDirection: function() {
          var delta = this.positionAbs.top - this.lastPositionAbs.top;
          return delta !== 0 && (delta > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
          var delta = this.positionAbs.left - this.lastPositionAbs.left;
          return delta !== 0 && (delta > 0 ? "right" : "left");
        },
        refresh: function(event) {
          this._refreshItems(event);
          this._setHandleClassName();
          this.refreshPositions();
          return this;
        },
        _connectWith: function() {
          var options = this.options;
          return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
        },
        _getItemsAsjQuery: function(connected) {
          var i, j, cur, inst, items = [], queries = [], connectWith = this._connectWith();
          if (connectWith && connected) {
            for (i = connectWith.length - 1; i >= 0; i--) {
              cur = $2(connectWith[i], this.document[0]);
              for (j = cur.length - 1; j >= 0; j--) {
                inst = $2.data(cur[j], this.widgetFullName);
                if (inst && inst !== this && !inst.options.disabled) {
                  queries.push([$2.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $2(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
                }
              }
            }
          }
          queries.push([$2.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : $2(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
          function addItems() {
            items.push(this);
          }
          for (i = queries.length - 1; i >= 0; i--) {
            queries[i][0].each(addItems);
          }
          return $2(items);
        },
        _removeCurrentsFromItems: function() {
          var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = $2.grep(this.items, function(item) {
            for (var j = 0; j < list.length; j++) {
              if (list[j] === item.item[0]) {
                return false;
              }
            }
            return true;
          });
        },
        _refreshItems: function(event) {
          this.items = [];
          this.containers = [this];
          var i, j, cur, inst, targetData, _queries, item, queriesLength, items = this.items, queries = [[$2.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {item: this.currentItem}) : $2(this.options.items, this.element), this]], connectWith = this._connectWith();
          if (connectWith && this.ready) {
            for (i = connectWith.length - 1; i >= 0; i--) {
              cur = $2(connectWith[i], this.document[0]);
              for (j = cur.length - 1; j >= 0; j--) {
                inst = $2.data(cur[j], this.widgetFullName);
                if (inst && inst !== this && !inst.options.disabled) {
                  queries.push([$2.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {item: this.currentItem}) : $2(inst.options.items, inst.element), inst]);
                  this.containers.push(inst);
                }
              }
            }
          }
          for (i = queries.length - 1; i >= 0; i--) {
            targetData = queries[i][1];
            _queries = queries[i][0];
            for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
              item = $2(_queries[j]);
              item.data(this.widgetName + "-item", targetData);
              items.push({
                item,
                instance: targetData,
                width: 0,
                height: 0,
                left: 0,
                top: 0
              });
            }
          }
        },
        refreshPositions: function(fast) {
          this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false;
          if (this.offsetParent && this.helper) {
            this.offset.parent = this._getParentOffset();
          }
          var i, item, t, p;
          for (i = this.items.length - 1; i >= 0; i--) {
            item = this.items[i];
            if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
              continue;
            }
            t = this.options.toleranceElement ? $2(this.options.toleranceElement, item.item) : item.item;
            if (!fast) {
              item.width = t.outerWidth();
              item.height = t.outerHeight();
            }
            p = t.offset();
            item.left = p.left;
            item.top = p.top;
          }
          if (this.options.custom && this.options.custom.refreshContainers) {
            this.options.custom.refreshContainers.call(this);
          } else {
            for (i = this.containers.length - 1; i >= 0; i--) {
              p = this.containers[i].element.offset();
              this.containers[i].containerCache.left = p.left;
              this.containers[i].containerCache.top = p.top;
              this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
              this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            }
          }
          return this;
        },
        _createPlaceholder: function(that) {
          that = that || this;
          var className, o = that.options;
          if (!o.placeholder || o.placeholder.constructor === String) {
            className = o.placeholder;
            o.placeholder = {
              element: function() {
                var nodeName = that.currentItem[0].nodeName.toLowerCase(), element = $2("<" + nodeName + ">", that.document[0]);
                that._addClass(element, "ui-sortable-placeholder", className || that.currentItem[0].className)._removeClass(element, "ui-sortable-helper");
                if (nodeName === "tbody") {
                  that._createTrPlaceholder(that.currentItem.find("tr").eq(0), $2("<tr>", that.document[0]).appendTo(element));
                } else if (nodeName === "tr") {
                  that._createTrPlaceholder(that.currentItem, element);
                } else if (nodeName === "img") {
                  element.attr("src", that.currentItem.attr("src"));
                }
                if (!className) {
                  element.css("visibility", "hidden");
                }
                return element;
              },
              update: function(container, p) {
                if (className && !o.forcePlaceholderSize) {
                  return;
                }
                if (!p.height()) {
                  p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10));
                }
                if (!p.width()) {
                  p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10));
                }
              }
            };
          }
          that.placeholder = $2(o.placeholder.element.call(that.element, that.currentItem));
          that.currentItem.after(that.placeholder);
          o.placeholder.update(that, that.placeholder);
        },
        _createTrPlaceholder: function(sourceTr, targetTr) {
          var that = this;
          sourceTr.children().each(function() {
            $2("<td>&#160;</td>", that.document[0]).attr("colspan", $2(this).attr("colspan") || 1).appendTo(targetTr);
          });
        },
        _contactContainers: function(event) {
          var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis, innermostContainer = null, innermostIndex = null;
          for (i = this.containers.length - 1; i >= 0; i--) {
            if ($2.contains(this.currentItem[0], this.containers[i].element[0])) {
              continue;
            }
            if (this._intersectsWith(this.containers[i].containerCache)) {
              if (innermostContainer && $2.contains(this.containers[i].element[0], innermostContainer.element[0])) {
                continue;
              }
              innermostContainer = this.containers[i];
              innermostIndex = i;
            } else {
              if (this.containers[i].containerCache.over) {
                this.containers[i]._trigger("out", event, this._uiHash(this));
                this.containers[i].containerCache.over = 0;
              }
            }
          }
          if (!innermostContainer) {
            return;
          }
          if (this.containers.length === 1) {
            if (!this.containers[innermostIndex].containerCache.over) {
              this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
              this.containers[innermostIndex].containerCache.over = 1;
            }
          } else {
            dist = 1e4;
            itemWithLeastDistance = null;
            floating = innermostContainer.floating || this._isFloating(this.currentItem);
            posProperty = floating ? "left" : "top";
            sizeProperty = floating ? "width" : "height";
            axis = floating ? "pageX" : "pageY";
            for (j = this.items.length - 1; j >= 0; j--) {
              if (!$2.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
                continue;
              }
              if (this.items[j].item[0] === this.currentItem[0]) {
                continue;
              }
              cur = this.items[j].item.offset()[posProperty];
              nearBottom = false;
              if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
                nearBottom = true;
              }
              if (Math.abs(event[axis] - cur) < dist) {
                dist = Math.abs(event[axis] - cur);
                itemWithLeastDistance = this.items[j];
                this.direction = nearBottom ? "up" : "down";
              }
            }
            if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
              return;
            }
            if (this.currentContainer === this.containers[innermostIndex]) {
              if (!this.currentContainer.containerCache.over) {
                this.containers[innermostIndex]._trigger("over", event, this._uiHash());
                this.currentContainer.containerCache.over = 1;
              }
              return;
            }
            itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
            this._trigger("change", event, this._uiHash());
            this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
            this.currentContainer = this.containers[innermostIndex];
            this.options.placeholder.update(this.currentContainer, this.placeholder);
            this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
            this.containers[innermostIndex].containerCache.over = 1;
          }
        },
        _createHelper: function(event) {
          var o = this.options, helper = $2.isFunction(o.helper) ? $2(o.helper.apply(this.element[0], [event, this.currentItem])) : o.helper === "clone" ? this.currentItem.clone() : this.currentItem;
          if (!helper.parents("body").length) {
            $2(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
          }
          if (helper[0] === this.currentItem[0]) {
            this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left")
            };
          }
          if (!helper[0].style.width || o.forceHelperSize) {
            helper.width(this.currentItem.width());
          }
          if (!helper[0].style.height || o.forceHelperSize) {
            helper.height(this.currentItem.height());
          }
          return helper;
        },
        _adjustOffsetFromHelper: function(obj) {
          if (typeof obj === "string") {
            obj = obj.split(" ");
          }
          if ($2.isArray(obj)) {
            obj = {left: +obj[0], top: +obj[1] || 0};
          }
          if ("left" in obj) {
            this.offset.click.left = obj.left + this.margins.left;
          }
          if ("right" in obj) {
            this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
          }
          if ("top" in obj) {
            this.offset.click.top = obj.top + this.margins.top;
          }
          if ("bottom" in obj) {
            this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
          }
        },
        _getParentOffset: function() {
          this.offsetParent = this.helper.offsetParent();
          var po = this.offsetParent.offset();
          if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $2.contains(this.scrollParent[0], this.offsetParent[0])) {
            po.left += this.scrollParent.scrollLeft();
            po.top += this.scrollParent.scrollTop();
          }
          if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $2.ui.ie) {
            po = {top: 0, left: 0};
          }
          return {
            top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
          };
        },
        _getRelativeOffset: function() {
          if (this.cssPosition === "relative") {
            var p = this.currentItem.position();
            return {
              top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
              left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            };
          } else {
            return {top: 0, left: 0};
          }
        },
        _cacheMargins: function() {
          this.margins = {
            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
            top: parseInt(this.currentItem.css("marginTop"), 10) || 0
          };
        },
        _cacheHelperProportions: function() {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight()
          };
        },
        _setContainment: function() {
          var ce, co, over, o = this.options;
          if (o.containment === "parent") {
            o.containment = this.helper[0].parentNode;
          }
          if (o.containment === "document" || o.containment === "window") {
            this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
              (o.containment === "document" ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
          }
          if (!/^(document|window|parent)$/.test(o.containment)) {
            ce = $2(o.containment)[0];
            co = $2(o.containment).offset();
            over = $2(ce).css("overflow") !== "hidden";
            this.containment = [
              co.left + (parseInt($2(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($2(ce).css("paddingLeft"), 10) || 0) - this.margins.left,
              co.top + (parseInt($2(ce).css("borderTopWidth"), 10) || 0) + (parseInt($2(ce).css("paddingTop"), 10) || 0) - this.margins.top,
              co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($2(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($2(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left,
              co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($2(ce).css("borderTopWidth"), 10) || 0) - (parseInt($2(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top
            ];
          }
        },
        _convertPositionTo: function(d, pos) {
          if (!pos) {
            pos = this.position;
          }
          var mod = d === "absolute" ? 1 : -1, scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $2.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
          return {
            top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod,
            left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod
          };
        },
        _generatePosition: function(event) {
          var top, left, o = this.options, pageX = event.pageX, pageY = event.pageY, scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $2.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
          if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
            this.offset.relative = this._getRelativeOffset();
          }
          if (this.originalPosition) {
            if (this.containment) {
              if (event.pageX - this.offset.click.left < this.containment[0]) {
                pageX = this.containment[0] + this.offset.click.left;
              }
              if (event.pageY - this.offset.click.top < this.containment[1]) {
                pageY = this.containment[1] + this.offset.click.top;
              }
              if (event.pageX - this.offset.click.left > this.containment[2]) {
                pageX = this.containment[2] + this.offset.click.left;
              }
              if (event.pageY - this.offset.click.top > this.containment[3]) {
                pageY = this.containment[3] + this.offset.click.top;
              }
            }
            if (o.grid) {
              top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
              pageY = this.containment ? top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3] ? top : top - this.offset.click.top >= this.containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
              left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
              pageX = this.containment ? left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2] ? left : left - this.offset.click.left >= this.containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
            }
          }
          return {
            top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()),
            left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())
          };
        },
        _rearrange: function(event, i, a, hardRefresh) {
          a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? i.item[0] : i.item[0].nextSibling);
          this.counter = this.counter ? ++this.counter : 1;
          var counter = this.counter;
          this._delay(function() {
            if (counter === this.counter) {
              this.refreshPositions(!hardRefresh);
            }
          });
        },
        _clear: function(event, noPropagation) {
          this.reverting = false;
          var i, delayedTriggers = [];
          if (!this._noFinalSort && this.currentItem.parent().length) {
            this.placeholder.before(this.currentItem);
          }
          this._noFinalSort = null;
          if (this.helper[0] === this.currentItem[0]) {
            for (i in this._storedCSS) {
              if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
                this._storedCSS[i] = "";
              }
            }
            this.currentItem.css(this._storedCSS);
            this._removeClass(this.currentItem, "ui-sortable-helper");
          } else {
            this.currentItem.show();
          }
          if (this.fromOutside && !noPropagation) {
            delayedTriggers.push(function(event2) {
              this._trigger("receive", event2, this._uiHash(this.fromOutside));
            });
          }
          if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
            delayedTriggers.push(function(event2) {
              this._trigger("update", event2, this._uiHash());
            });
          }
          if (this !== this.currentContainer) {
            if (!noPropagation) {
              delayedTriggers.push(function(event2) {
                this._trigger("remove", event2, this._uiHash());
              });
              delayedTriggers.push(function(c) {
                return function(event2) {
                  c._trigger("receive", event2, this._uiHash(this));
                };
              }.call(this, this.currentContainer));
              delayedTriggers.push(function(c) {
                return function(event2) {
                  c._trigger("update", event2, this._uiHash(this));
                };
              }.call(this, this.currentContainer));
            }
          }
          function delayEvent(type, instance, container) {
            return function(event2) {
              container._trigger(type, event2, instance._uiHash(instance));
            };
          }
          for (i = this.containers.length - 1; i >= 0; i--) {
            if (!noPropagation) {
              delayedTriggers.push(delayEvent("deactivate", this, this.containers[i]));
            }
            if (this.containers[i].containerCache.over) {
              delayedTriggers.push(delayEvent("out", this, this.containers[i]));
              this.containers[i].containerCache.over = 0;
            }
          }
          if (this.storedCursor) {
            this.document.find("body").css("cursor", this.storedCursor);
            this.storedStylesheet.remove();
          }
          if (this._storedOpacity) {
            this.helper.css("opacity", this._storedOpacity);
          }
          if (this._storedZIndex) {
            this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
          }
          this.dragging = false;
          if (!noPropagation) {
            this._trigger("beforeStop", event, this._uiHash());
          }
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
          if (!this.cancelHelperRemoval) {
            if (this.helper[0] !== this.currentItem[0]) {
              this.helper.remove();
            }
            this.helper = null;
          }
          if (!noPropagation) {
            for (i = 0; i < delayedTriggers.length; i++) {
              delayedTriggers[i].call(this, event);
            }
            this._trigger("stop", event, this._uiHash());
          }
          this.fromOutside = false;
          return !this.cancelHelperRemoval;
        },
        _trigger: function() {
          if ($2.Widget.prototype._trigger.apply(this, arguments) === false) {
            this.cancel();
          }
        },
        _uiHash: function(_inst) {
          var inst = _inst || this;
          return {
            helper: inst.helper,
            placeholder: inst.placeholder || $2([]),
            position: inst.position,
            originalPosition: inst.originalPosition,
            offset: inst.positionAbs,
            item: inst.currentItem,
            sender: _inst ? _inst.element : null
          };
        }
      });
      /*!
       * jQuery UI Spinner 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      function spinnerModifer(fn) {
        return function() {
          var previous = this.element.val();
          fn.apply(this, arguments);
          this._refresh();
          if (previous !== this.element.val()) {
            this._trigger("change");
          }
        };
      }
      $2.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
          classes: {
            "ui-spinner": "ui-corner-all",
            "ui-spinner-down": "ui-corner-br",
            "ui-spinner-up": "ui-corner-tr"
          },
          culture: null,
          icons: {
            down: "ui-icon-triangle-1-s",
            up: "ui-icon-triangle-1-n"
          },
          incremental: true,
          max: null,
          min: null,
          numberFormat: null,
          page: 10,
          step: 1,
          change: null,
          spin: null,
          start: null,
          stop: null
        },
        _create: function() {
          this._setOption("max", this.options.max);
          this._setOption("min", this.options.min);
          this._setOption("step", this.options.step);
          if (this.value() !== "") {
            this._value(this.element.val(), true);
          }
          this._draw();
          this._on(this._events);
          this._refresh();
          this._on(this.window, {
            beforeunload: function() {
              this.element.removeAttr("autocomplete");
            }
          });
        },
        _getCreateOptions: function() {
          var options = this._super();
          var element = this.element;
          $2.each(["min", "max", "step"], function(i, option) {
            var value = element.attr(option);
            if (value != null && value.length) {
              options[option] = value;
            }
          });
          return options;
        },
        _events: {
          keydown: function(event) {
            if (this._start(event) && this._keydown(event)) {
              event.preventDefault();
            }
          },
          keyup: "_stop",
          focus: function() {
            this.previous = this.element.val();
          },
          blur: function(event) {
            if (this.cancelBlur) {
              delete this.cancelBlur;
              return;
            }
            this._stop();
            this._refresh();
            if (this.previous !== this.element.val()) {
              this._trigger("change", event);
            }
          },
          mousewheel: function(event, delta) {
            if (!delta) {
              return;
            }
            if (!this.spinning && !this._start(event)) {
              return false;
            }
            this._spin((delta > 0 ? 1 : -1) * this.options.step, event);
            clearTimeout(this.mousewheelTimer);
            this.mousewheelTimer = this._delay(function() {
              if (this.spinning) {
                this._stop(event);
              }
            }, 100);
            event.preventDefault();
          },
          "mousedown .ui-spinner-button": function(event) {
            var previous;
            previous = this.element[0] === $2.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
            function checkFocus() {
              var isActive = this.element[0] === $2.ui.safeActiveElement(this.document[0]);
              if (!isActive) {
                this.element.trigger("focus");
                this.previous = previous;
                this._delay(function() {
                  this.previous = previous;
                });
              }
            }
            event.preventDefault();
            checkFocus.call(this);
            this.cancelBlur = true;
            this._delay(function() {
              delete this.cancelBlur;
              checkFocus.call(this);
            });
            if (this._start(event) === false) {
              return;
            }
            this._repeat(null, $2(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
          },
          "mouseup .ui-spinner-button": "_stop",
          "mouseenter .ui-spinner-button": function(event) {
            if (!$2(event.currentTarget).hasClass("ui-state-active")) {
              return;
            }
            if (this._start(event) === false) {
              return false;
            }
            this._repeat(null, $2(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
          },
          "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
          this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function() {
          this._enhance();
          this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
          this._addClass("ui-spinner-input");
          this.element.attr("role", "spinbutton");
          this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({
            classes: {
              "ui-button": ""
            }
          });
          this._removeClass(this.buttons, "ui-corner-all");
          this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
          this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
          this.buttons.first().button({
            icon: this.options.icons.up,
            showLabel: false
          });
          this.buttons.last().button({
            icon: this.options.icons.down,
            showLabel: false
          });
          if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * 0.5) && this.uiSpinner.height() > 0) {
            this.uiSpinner.height(this.uiSpinner.height());
          }
        },
        _keydown: function(event) {
          var options = this.options, keyCode = $2.ui.keyCode;
          switch (event.keyCode) {
            case keyCode.UP:
              this._repeat(null, 1, event);
              return true;
            case keyCode.DOWN:
              this._repeat(null, -1, event);
              return true;
            case keyCode.PAGE_UP:
              this._repeat(null, options.page, event);
              return true;
            case keyCode.PAGE_DOWN:
              this._repeat(null, -options.page, event);
              return true;
          }
          return false;
        },
        _start: function(event) {
          if (!this.spinning && this._trigger("start", event) === false) {
            return false;
          }
          if (!this.counter) {
            this.counter = 1;
          }
          this.spinning = true;
          return true;
        },
        _repeat: function(i, steps, event) {
          i = i || 500;
          clearTimeout(this.timer);
          this.timer = this._delay(function() {
            this._repeat(40, steps, event);
          }, i);
          this._spin(steps * this.options.step, event);
        },
        _spin: function(step, event) {
          var value = this.value() || 0;
          if (!this.counter) {
            this.counter = 1;
          }
          value = this._adjustValue(value + step * this._increment(this.counter));
          if (!this.spinning || this._trigger("spin", event, {value}) !== false) {
            this._value(value);
            this.counter++;
          }
        },
        _increment: function(i) {
          var incremental = this.options.incremental;
          if (incremental) {
            return $2.isFunction(incremental) ? incremental(i) : Math.floor(i * i * i / 5e4 - i * i / 500 + 17 * i / 200 + 1);
          }
          return 1;
        },
        _precision: function() {
          var precision = this._precisionOf(this.options.step);
          if (this.options.min !== null) {
            precision = Math.max(precision, this._precisionOf(this.options.min));
          }
          return precision;
        },
        _precisionOf: function(num) {
          var str = num.toString(), decimal = str.indexOf(".");
          return decimal === -1 ? 0 : str.length - decimal - 1;
        },
        _adjustValue: function(value) {
          var base, aboveMin, options = this.options;
          base = options.min !== null ? options.min : 0;
          aboveMin = value - base;
          aboveMin = Math.round(aboveMin / options.step) * options.step;
          value = base + aboveMin;
          value = parseFloat(value.toFixed(this._precision()));
          if (options.max !== null && value > options.max) {
            return options.max;
          }
          if (options.min !== null && value < options.min) {
            return options.min;
          }
          return value;
        },
        _stop: function(event) {
          if (!this.spinning) {
            return;
          }
          clearTimeout(this.timer);
          clearTimeout(this.mousewheelTimer);
          this.counter = 0;
          this.spinning = false;
          this._trigger("stop", event);
        },
        _setOption: function(key, value) {
          var prevValue, first, last;
          if (key === "culture" || key === "numberFormat") {
            prevValue = this._parse(this.element.val());
            this.options[key] = value;
            this.element.val(this._format(prevValue));
            return;
          }
          if (key === "max" || key === "min" || key === "step") {
            if (typeof value === "string") {
              value = this._parse(value);
            }
          }
          if (key === "icons") {
            first = this.buttons.first().find(".ui-icon");
            this._removeClass(first, null, this.options.icons.up);
            this._addClass(first, null, value.up);
            last = this.buttons.last().find(".ui-icon");
            this._removeClass(last, null, this.options.icons.down);
            this._addClass(last, null, value.down);
          }
          this._super(key, value);
        },
        _setOptionDisabled: function(value) {
          this._super(value);
          this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!value);
          this.element.prop("disabled", !!value);
          this.buttons.button(value ? "disable" : "enable");
        },
        _setOptions: spinnerModifer(function(options) {
          this._super(options);
        }),
        _parse: function(val) {
          if (typeof val === "string" && val !== "") {
            val = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) : +val;
          }
          return val === "" || isNaN(val) ? null : val;
        },
        _format: function(value) {
          if (value === "") {
            return "";
          }
          return window.Globalize && this.options.numberFormat ? Globalize.format(value, this.options.numberFormat, this.options.culture) : value;
        },
        _refresh: function() {
          this.element.attr({
            "aria-valuemin": this.options.min,
            "aria-valuemax": this.options.max,
            "aria-valuenow": this._parse(this.element.val())
          });
        },
        isValid: function() {
          var value = this.value();
          if (value === null) {
            return false;
          }
          return value === this._adjustValue(value);
        },
        _value: function(value, allowAny) {
          var parsed;
          if (value !== "") {
            parsed = this._parse(value);
            if (parsed !== null) {
              if (!allowAny) {
                parsed = this._adjustValue(parsed);
              }
              value = this._format(parsed);
            }
          }
          this.element.val(value);
          this._refresh();
        },
        _destroy: function() {
          this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
          this.uiSpinner.replaceWith(this.element);
        },
        stepUp: spinnerModifer(function(steps) {
          this._stepUp(steps);
        }),
        _stepUp: function(steps) {
          if (this._start()) {
            this._spin((steps || 1) * this.options.step);
            this._stop();
          }
        },
        stepDown: spinnerModifer(function(steps) {
          this._stepDown(steps);
        }),
        _stepDown: function(steps) {
          if (this._start()) {
            this._spin((steps || 1) * -this.options.step);
            this._stop();
          }
        },
        pageUp: spinnerModifer(function(pages) {
          this._stepUp((pages || 1) * this.options.page);
        }),
        pageDown: spinnerModifer(function(pages) {
          this._stepDown((pages || 1) * this.options.page);
        }),
        value: function(newVal) {
          if (!arguments.length) {
            return this._parse(this.element.val());
          }
          spinnerModifer(this._value).call(this, newVal);
        },
        widget: function() {
          return this.uiSpinner;
        }
      });
      if ($2.uiBackCompat !== false) {
        $2.widget("ui.spinner", $2.ui.spinner, {
          _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
          },
          _uiSpinnerHtml: function() {
            return "<span>";
          },
          _buttonHtml: function() {
            return "<a></a><a></a>";
          }
        });
      }
      var widgetsSpinner = $2.ui.spinner;
      /*!
       * jQuery UI Tabs 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
          active: null,
          classes: {
            "ui-tabs": "ui-corner-all",
            "ui-tabs-nav": "ui-corner-all",
            "ui-tabs-panel": "ui-corner-bottom",
            "ui-tabs-tab": "ui-corner-top"
          },
          collapsible: false,
          event: "click",
          heightStyle: "content",
          hide: null,
          show: null,
          activate: null,
          beforeActivate: null,
          beforeLoad: null,
          load: null
        },
        _isLocal: function() {
          var rhash = /#.*$/;
          return function(anchor) {
            var anchorUrl, locationUrl;
            anchorUrl = anchor.href.replace(rhash, "");
            locationUrl = location.href.replace(rhash, "");
            try {
              anchorUrl = decodeURIComponent(anchorUrl);
            } catch (error) {
            }
            try {
              locationUrl = decodeURIComponent(locationUrl);
            } catch (error) {
            }
            return anchor.hash.length > 1 && anchorUrl === locationUrl;
          };
        }(),
        _create: function() {
          var that = this, options = this.options;
          this.running = false;
          this._addClass("ui-tabs", "ui-widget ui-widget-content");
          this._toggleClass("ui-tabs-collapsible", null, options.collapsible);
          this._processTabs();
          options.active = this._initialActive();
          if ($2.isArray(options.disabled)) {
            options.disabled = $2.unique(options.disabled.concat($2.map(this.tabs.filter(".ui-state-disabled"), function(li) {
              return that.tabs.index(li);
            }))).sort();
          }
          if (this.options.active !== false && this.anchors.length) {
            this.active = this._findActive(options.active);
          } else {
            this.active = $2();
          }
          this._refresh();
          if (this.active.length) {
            this.load(options.active);
          }
        },
        _initialActive: function() {
          var active = this.options.active, collapsible = this.options.collapsible, locationHash = location.hash.substring(1);
          if (active === null) {
            if (locationHash) {
              this.tabs.each(function(i, tab) {
                if ($2(tab).attr("aria-controls") === locationHash) {
                  active = i;
                  return false;
                }
              });
            }
            if (active === null) {
              active = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
            }
            if (active === null || active === -1) {
              active = this.tabs.length ? 0 : false;
            }
          }
          if (active !== false) {
            active = this.tabs.index(this.tabs.eq(active));
            if (active === -1) {
              active = collapsible ? false : 0;
            }
          }
          if (!collapsible && active === false && this.anchors.length) {
            active = 0;
          }
          return active;
        },
        _getCreateEventData: function() {
          return {
            tab: this.active,
            panel: !this.active.length ? $2() : this._getPanelForTab(this.active)
          };
        },
        _tabKeydown: function(event) {
          var focusedTab = $2($2.ui.safeActiveElement(this.document[0])).closest("li"), selectedIndex = this.tabs.index(focusedTab), goingForward = true;
          if (this._handlePageNav(event)) {
            return;
          }
          switch (event.keyCode) {
            case $2.ui.keyCode.RIGHT:
            case $2.ui.keyCode.DOWN:
              selectedIndex++;
              break;
            case $2.ui.keyCode.UP:
            case $2.ui.keyCode.LEFT:
              goingForward = false;
              selectedIndex--;
              break;
            case $2.ui.keyCode.END:
              selectedIndex = this.anchors.length - 1;
              break;
            case $2.ui.keyCode.HOME:
              selectedIndex = 0;
              break;
            case $2.ui.keyCode.SPACE:
              event.preventDefault();
              clearTimeout(this.activating);
              this._activate(selectedIndex);
              return;
            case $2.ui.keyCode.ENTER:
              event.preventDefault();
              clearTimeout(this.activating);
              this._activate(selectedIndex === this.options.active ? false : selectedIndex);
              return;
            default:
              return;
          }
          event.preventDefault();
          clearTimeout(this.activating);
          selectedIndex = this._focusNextTab(selectedIndex, goingForward);
          if (!event.ctrlKey && !event.metaKey) {
            focusedTab.attr("aria-selected", "false");
            this.tabs.eq(selectedIndex).attr("aria-selected", "true");
            this.activating = this._delay(function() {
              this.option("active", selectedIndex);
            }, this.delay);
          }
        },
        _panelKeydown: function(event) {
          if (this._handlePageNav(event)) {
            return;
          }
          if (event.ctrlKey && event.keyCode === $2.ui.keyCode.UP) {
            event.preventDefault();
            this.active.trigger("focus");
          }
        },
        _handlePageNav: function(event) {
          if (event.altKey && event.keyCode === $2.ui.keyCode.PAGE_UP) {
            this._activate(this._focusNextTab(this.options.active - 1, false));
            return true;
          }
          if (event.altKey && event.keyCode === $2.ui.keyCode.PAGE_DOWN) {
            this._activate(this._focusNextTab(this.options.active + 1, true));
            return true;
          }
        },
        _findNextTab: function(index, goingForward) {
          var lastTabIndex = this.tabs.length - 1;
          function constrain() {
            if (index > lastTabIndex) {
              index = 0;
            }
            if (index < 0) {
              index = lastTabIndex;
            }
            return index;
          }
          while ($2.inArray(constrain(), this.options.disabled) !== -1) {
            index = goingForward ? index + 1 : index - 1;
          }
          return index;
        },
        _focusNextTab: function(index, goingForward) {
          index = this._findNextTab(index, goingForward);
          this.tabs.eq(index).trigger("focus");
          return index;
        },
        _setOption: function(key, value) {
          if (key === "active") {
            this._activate(value);
            return;
          }
          this._super(key, value);
          if (key === "collapsible") {
            this._toggleClass("ui-tabs-collapsible", null, value);
            if (!value && this.options.active === false) {
              this._activate(0);
            }
          }
          if (key === "event") {
            this._setupEvents(value);
          }
          if (key === "heightStyle") {
            this._setupHeightStyle(value);
          }
        },
        _sanitizeSelector: function(hash) {
          return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
          var options = this.options, lis = this.tablist.children(":has(a[href])");
          options.disabled = $2.map(lis.filter(".ui-state-disabled"), function(tab) {
            return lis.index(tab);
          });
          this._processTabs();
          if (options.active === false || !this.anchors.length) {
            options.active = false;
            this.active = $2();
          } else if (this.active.length && !$2.contains(this.tablist[0], this.active[0])) {
            if (this.tabs.length === options.disabled.length) {
              options.active = false;
              this.active = $2();
            } else {
              this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
            }
          } else {
            options.active = this.tabs.index(this.active);
          }
          this._refresh();
        },
        _refresh: function() {
          this._setOptionDisabled(this.options.disabled);
          this._setupEvents(this.options.event);
          this._setupHeightStyle(this.options.heightStyle);
          this.tabs.not(this.active).attr({
            "aria-selected": "false",
            "aria-expanded": "false",
            tabIndex: -1
          });
          this.panels.not(this._getPanelForTab(this.active)).hide().attr({
            "aria-hidden": "true"
          });
          if (!this.active.length) {
            this.tabs.eq(0).attr("tabIndex", 0);
          } else {
            this.active.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0
            });
            this._addClass(this.active, "ui-tabs-active", "ui-state-active");
            this._getPanelForTab(this.active).show().attr({
              "aria-hidden": "false"
            });
          }
        },
        _processTabs: function() {
          var that = this, prevTabs = this.tabs, prevAnchors = this.anchors, prevPanels = this.panels;
          this.tablist = this._getList().attr("role", "tablist");
          this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
          this.tablist.on("mousedown" + this.eventNamespace, "> li", function(event) {
            if ($2(this).is(".ui-state-disabled")) {
              event.preventDefault();
            }
          }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
            if ($2(this).closest("li").is(".ui-state-disabled")) {
              this.blur();
            }
          });
          this.tabs = this.tablist.find("> li:has(a[href])").attr({
            role: "tab",
            tabIndex: -1
          });
          this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
          this.anchors = this.tabs.map(function() {
            return $2("a", this)[0];
          }).attr({
            role: "presentation",
            tabIndex: -1
          });
          this._addClass(this.anchors, "ui-tabs-anchor");
          this.panels = $2();
          this.anchors.each(function(i, anchor) {
            var selector, panel, panelId, anchorId = $2(anchor).uniqueId().attr("id"), tab = $2(anchor).closest("li"), originalAriaControls = tab.attr("aria-controls");
            if (that._isLocal(anchor)) {
              selector = anchor.hash;
              panelId = selector.substring(1);
              panel = that.element.find(that._sanitizeSelector(selector));
            } else {
              panelId = tab.attr("aria-controls") || $2({}).uniqueId()[0].id;
              selector = "#" + panelId;
              panel = that.element.find(selector);
              if (!panel.length) {
                panel = that._createPanel(panelId);
                panel.insertAfter(that.panels[i - 1] || that.tablist);
              }
              panel.attr("aria-live", "polite");
            }
            if (panel.length) {
              that.panels = that.panels.add(panel);
            }
            if (originalAriaControls) {
              tab.data("ui-tabs-aria-controls", originalAriaControls);
            }
            tab.attr({
              "aria-controls": panelId,
              "aria-labelledby": anchorId
            });
            panel.attr("aria-labelledby", anchorId);
          });
          this.panels.attr("role", "tabpanel");
          this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
          if (prevTabs) {
            this._off(prevTabs.not(this.tabs));
            this._off(prevAnchors.not(this.anchors));
            this._off(prevPanels.not(this.panels));
          }
        },
        _getList: function() {
          return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(id) {
          return $2("<div>").attr("id", id).data("ui-tabs-destroy", true);
        },
        _setOptionDisabled: function(disabled) {
          var currentItem, li, i;
          if ($2.isArray(disabled)) {
            if (!disabled.length) {
              disabled = false;
            } else if (disabled.length === this.anchors.length) {
              disabled = true;
            }
          }
          for (i = 0; li = this.tabs[i]; i++) {
            currentItem = $2(li);
            if (disabled === true || $2.inArray(i, disabled) !== -1) {
              currentItem.attr("aria-disabled", "true");
              this._addClass(currentItem, null, "ui-state-disabled");
            } else {
              currentItem.removeAttr("aria-disabled");
              this._removeClass(currentItem, null, "ui-state-disabled");
            }
          }
          this.options.disabled = disabled;
          this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, disabled === true);
        },
        _setupEvents: function(event) {
          var events = {};
          if (event) {
            $2.each(event.split(" "), function(index, eventName) {
              events[eventName] = "_eventHandler";
            });
          }
          this._off(this.anchors.add(this.tabs).add(this.panels));
          this._on(true, this.anchors, {
            click: function(event2) {
              event2.preventDefault();
            }
          });
          this._on(this.anchors, events);
          this._on(this.tabs, {keydown: "_tabKeydown"});
          this._on(this.panels, {keydown: "_panelKeydown"});
          this._focusable(this.tabs);
          this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(heightStyle) {
          var maxHeight, parent = this.element.parent();
          if (heightStyle === "fill") {
            maxHeight = parent.height();
            maxHeight -= this.element.outerHeight() - this.element.height();
            this.element.siblings(":visible").each(function() {
              var elem = $2(this), position2 = elem.css("position");
              if (position2 === "absolute" || position2 === "fixed") {
                return;
              }
              maxHeight -= elem.outerHeight(true);
            });
            this.element.children().not(this.panels).each(function() {
              maxHeight -= $2(this).outerHeight(true);
            });
            this.panels.each(function() {
              $2(this).height(Math.max(0, maxHeight - $2(this).innerHeight() + $2(this).height()));
            }).css("overflow", "auto");
          } else if (heightStyle === "auto") {
            maxHeight = 0;
            this.panels.each(function() {
              maxHeight = Math.max(maxHeight, $2(this).height("").height());
            }).height(maxHeight);
          }
        },
        _eventHandler: function(event) {
          var options = this.options, active = this.active, anchor = $2(event.currentTarget), tab = anchor.closest("li"), clickedIsActive = tab[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $2() : this._getPanelForTab(tab), toHide = !active.length ? $2() : this._getPanelForTab(active), eventData = {
            oldTab: active,
            oldPanel: toHide,
            newTab: collapsing ? $2() : tab,
            newPanel: toShow
          };
          event.preventDefault();
          if (tab.hasClass("ui-state-disabled") || tab.hasClass("ui-tabs-loading") || this.running || clickedIsActive && !options.collapsible || this._trigger("beforeActivate", event, eventData) === false) {
            return;
          }
          options.active = collapsing ? false : this.tabs.index(tab);
          this.active = clickedIsActive ? $2() : tab;
          if (this.xhr) {
            this.xhr.abort();
          }
          if (!toHide.length && !toShow.length) {
            $2.error("jQuery UI Tabs: Mismatching fragment identifier.");
          }
          if (toShow.length) {
            this.load(this.tabs.index(tab), event);
          }
          this._toggle(event, eventData);
        },
        _toggle: function(event, eventData) {
          var that = this, toShow = eventData.newPanel, toHide = eventData.oldPanel;
          this.running = true;
          function complete() {
            that.running = false;
            that._trigger("activate", event, eventData);
          }
          function show() {
            that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
            if (toShow.length && that.options.show) {
              that._show(toShow, that.options.show, complete);
            } else {
              toShow.show();
              complete();
            }
          }
          if (toHide.length && this.options.hide) {
            this._hide(toHide, this.options.hide, function() {
              that._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
              show();
            });
          } else {
            this._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
            toHide.hide();
            show();
          }
          toHide.attr("aria-hidden", "true");
          eventData.oldTab.attr({
            "aria-selected": "false",
            "aria-expanded": "false"
          });
          if (toShow.length && toHide.length) {
            eventData.oldTab.attr("tabIndex", -1);
          } else if (toShow.length) {
            this.tabs.filter(function() {
              return $2(this).attr("tabIndex") === 0;
            }).attr("tabIndex", -1);
          }
          toShow.attr("aria-hidden", "false");
          eventData.newTab.attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0
          });
        },
        _activate: function(index) {
          var anchor, active = this._findActive(index);
          if (active[0] === this.active[0]) {
            return;
          }
          if (!active.length) {
            active = this.active;
          }
          anchor = active.find(".ui-tabs-anchor")[0];
          this._eventHandler({
            target: anchor,
            currentTarget: anchor,
            preventDefault: $2.noop
          });
        },
        _findActive: function(index) {
          return index === false ? $2() : this.tabs.eq(index);
        },
        _getIndex: function(index) {
          if (typeof index === "string") {
            index = this.anchors.index(this.anchors.filter("[href$='" + $2.ui.escapeSelector(index) + "']"));
          }
          return index;
        },
        _destroy: function() {
          if (this.xhr) {
            this.xhr.abort();
          }
          this.tablist.removeAttr("role").off(this.eventNamespace);
          this.anchors.removeAttr("role tabIndex").removeUniqueId();
          this.tabs.add(this.panels).each(function() {
            if ($2.data(this, "ui-tabs-destroy")) {
              $2(this).remove();
            } else {
              $2(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }
          });
          this.tabs.each(function() {
            var li = $2(this), prev = li.data("ui-tabs-aria-controls");
            if (prev) {
              li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls");
            } else {
              li.removeAttr("aria-controls");
            }
          });
          this.panels.show();
          if (this.options.heightStyle !== "content") {
            this.panels.css("height", "");
          }
        },
        enable: function(index) {
          var disabled = this.options.disabled;
          if (disabled === false) {
            return;
          }
          if (index === void 0) {
            disabled = false;
          } else {
            index = this._getIndex(index);
            if ($2.isArray(disabled)) {
              disabled = $2.map(disabled, function(num) {
                return num !== index ? num : null;
              });
            } else {
              disabled = $2.map(this.tabs, function(li, num) {
                return num !== index ? num : null;
              });
            }
          }
          this._setOptionDisabled(disabled);
        },
        disable: function(index) {
          var disabled = this.options.disabled;
          if (disabled === true) {
            return;
          }
          if (index === void 0) {
            disabled = true;
          } else {
            index = this._getIndex(index);
            if ($2.inArray(index, disabled) !== -1) {
              return;
            }
            if ($2.isArray(disabled)) {
              disabled = $2.merge([index], disabled).sort();
            } else {
              disabled = [index];
            }
          }
          this._setOptionDisabled(disabled);
        },
        load: function(index, event) {
          index = this._getIndex(index);
          var that = this, tab = this.tabs.eq(index), anchor = tab.find(".ui-tabs-anchor"), panel = this._getPanelForTab(tab), eventData = {
            tab,
            panel
          }, complete = function(jqXHR, status) {
            if (status === "abort") {
              that.panels.stop(false, true);
            }
            that._removeClass(tab, "ui-tabs-loading");
            panel.removeAttr("aria-busy");
            if (jqXHR === that.xhr) {
              delete that.xhr;
            }
          };
          if (this._isLocal(anchor[0])) {
            return;
          }
          this.xhr = $2.ajax(this._ajaxSettings(anchor, event, eventData));
          if (this.xhr && this.xhr.statusText !== "canceled") {
            this._addClass(tab, "ui-tabs-loading");
            panel.attr("aria-busy", "true");
            this.xhr.done(function(response, status, jqXHR) {
              setTimeout(function() {
                panel.html(response);
                that._trigger("load", event, eventData);
                complete(jqXHR, status);
              }, 1);
            }).fail(function(jqXHR, status) {
              setTimeout(function() {
                complete(jqXHR, status);
              }, 1);
            });
          }
        },
        _ajaxSettings: function(anchor, event, eventData) {
          var that = this;
          return {
            url: anchor.attr("href").replace(/#.*$/, ""),
            beforeSend: function(jqXHR, settings) {
              return that._trigger("beforeLoad", event, $2.extend({jqXHR, ajaxSettings: settings}, eventData));
            }
          };
        },
        _getPanelForTab: function(tab) {
          var id = $2(tab).attr("aria-controls");
          return this.element.find(this._sanitizeSelector("#" + id));
        }
      });
      if ($2.uiBackCompat !== false) {
        $2.widget("ui.tabs", $2.ui.tabs, {
          _processTabs: function() {
            this._superApply(arguments);
            this._addClass(this.tabs, "ui-tab");
          }
        });
      }
      var widgetsTabs = $2.ui.tabs;
      /*!
       * jQuery UI Tooltip 1.12.1
       * http://jqueryui.com
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license.
       * http://jquery.org/license
       */
      $2.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
          classes: {
            "ui-tooltip": "ui-corner-all ui-widget-shadow"
          },
          content: function() {
            var title = $2(this).attr("title") || "";
            return $2("<a>").text(title).html();
          },
          hide: true,
          items: "[title]:not([disabled])",
          position: {
            my: "left top+15",
            at: "left bottom",
            collision: "flipfit flip"
          },
          show: true,
          track: false,
          close: null,
          open: null
        },
        _addDescribedBy: function(elem, id) {
          var describedby = (elem.attr("aria-describedby") || "").split(/\s+/);
          describedby.push(id);
          elem.data("ui-tooltip-id", id).attr("aria-describedby", $2.trim(describedby.join(" ")));
        },
        _removeDescribedBy: function(elem) {
          var id = elem.data("ui-tooltip-id"), describedby = (elem.attr("aria-describedby") || "").split(/\s+/), index = $2.inArray(id, describedby);
          if (index !== -1) {
            describedby.splice(index, 1);
          }
          elem.removeData("ui-tooltip-id");
          describedby = $2.trim(describedby.join(" "));
          if (describedby) {
            elem.attr("aria-describedby", describedby);
          } else {
            elem.removeAttr("aria-describedby");
          }
        },
        _create: function() {
          this._on({
            mouseover: "open",
            focusin: "open"
          });
          this.tooltips = {};
          this.parents = {};
          this.liveRegion = $2("<div>").attr({
            role: "log",
            "aria-live": "assertive",
            "aria-relevant": "additions"
          }).appendTo(this.document[0].body);
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
          this.disabledTitles = $2([]);
        },
        _setOption: function(key, value) {
          var that = this;
          this._super(key, value);
          if (key === "content") {
            $2.each(this.tooltips, function(id, tooltipData) {
              that._updateContent(tooltipData.element);
            });
          }
        },
        _setOptionDisabled: function(value) {
          this[value ? "_disable" : "_enable"]();
        },
        _disable: function() {
          var that = this;
          $2.each(this.tooltips, function(id, tooltipData) {
            var event = $2.Event("blur");
            event.target = event.currentTarget = tooltipData.element[0];
            that.close(event, true);
          });
          this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
            var element = $2(this);
            if (element.is("[title]")) {
              return element.data("ui-tooltip-title", element.attr("title")).removeAttr("title");
            }
          }));
        },
        _enable: function() {
          this.disabledTitles.each(function() {
            var element = $2(this);
            if (element.data("ui-tooltip-title")) {
              element.attr("title", element.data("ui-tooltip-title"));
            }
          });
          this.disabledTitles = $2([]);
        },
        open: function(event) {
          var that = this, target = $2(event ? event.target : this.element).closest(this.options.items);
          if (!target.length || target.data("ui-tooltip-id")) {
            return;
          }
          if (target.attr("title")) {
            target.data("ui-tooltip-title", target.attr("title"));
          }
          target.data("ui-tooltip-open", true);
          if (event && event.type === "mouseover") {
            target.parents().each(function() {
              var parent = $2(this), blurEvent;
              if (parent.data("ui-tooltip-open")) {
                blurEvent = $2.Event("blur");
                blurEvent.target = blurEvent.currentTarget = this;
                that.close(blurEvent, true);
              }
              if (parent.attr("title")) {
                parent.uniqueId();
                that.parents[this.id] = {
                  element: this,
                  title: parent.attr("title")
                };
                parent.attr("title", "");
              }
            });
          }
          this._registerCloseHandlers(event, target);
          this._updateContent(target, event);
        },
        _updateContent: function(target, event) {
          var content, contentOption = this.options.content, that = this, eventType = event ? event.type : null;
          if (typeof contentOption === "string" || contentOption.nodeType || contentOption.jquery) {
            return this._open(event, target, contentOption);
          }
          content = contentOption.call(target[0], function(response) {
            that._delay(function() {
              if (!target.data("ui-tooltip-open")) {
                return;
              }
              if (event) {
                event.type = eventType;
              }
              this._open(event, target, response);
            });
          });
          if (content) {
            this._open(event, target, content);
          }
        },
        _open: function(event, target, content) {
          var tooltipData, tooltip, delayedShow, a11yContent, positionOption = $2.extend({}, this.options.position);
          if (!content) {
            return;
          }
          tooltipData = this._find(target);
          if (tooltipData) {
            tooltipData.tooltip.find(".ui-tooltip-content").html(content);
            return;
          }
          if (target.is("[title]")) {
            if (event && event.type === "mouseover") {
              target.attr("title", "");
            } else {
              target.removeAttr("title");
            }
          }
          tooltipData = this._tooltip(target);
          tooltip = tooltipData.tooltip;
          this._addDescribedBy(target, tooltip.attr("id"));
          tooltip.find(".ui-tooltip-content").html(content);
          this.liveRegion.children().hide();
          a11yContent = $2("<div>").html(tooltip.find(".ui-tooltip-content").html());
          a11yContent.removeAttr("name").find("[name]").removeAttr("name");
          a11yContent.removeAttr("id").find("[id]").removeAttr("id");
          a11yContent.appendTo(this.liveRegion);
          function position2(event2) {
            positionOption.of = event2;
            if (tooltip.is(":hidden")) {
              return;
            }
            tooltip.position(positionOption);
          }
          if (this.options.track && event && /^mouse/.test(event.type)) {
            this._on(this.document, {
              mousemove: position2
            });
            position2(event);
          } else {
            tooltip.position($2.extend({
              of: target
            }, this.options.position));
          }
          tooltip.hide();
          this._show(tooltip, this.options.show);
          if (this.options.track && this.options.show && this.options.show.delay) {
            delayedShow = this.delayedShow = setInterval(function() {
              if (tooltip.is(":visible")) {
                position2(positionOption.of);
                clearInterval(delayedShow);
              }
            }, $2.fx.interval);
          }
          this._trigger("open", event, {tooltip});
        },
        _registerCloseHandlers: function(event, target) {
          var events = {
            keyup: function(event2) {
              if (event2.keyCode === $2.ui.keyCode.ESCAPE) {
                var fakeEvent = $2.Event(event2);
                fakeEvent.currentTarget = target[0];
                this.close(fakeEvent, true);
              }
            }
          };
          if (target[0] !== this.element[0]) {
            events.remove = function() {
              this._removeTooltip(this._find(target).tooltip);
            };
          }
          if (!event || event.type === "mouseover") {
            events.mouseleave = "close";
          }
          if (!event || event.type === "focusin") {
            events.focusout = "close";
          }
          this._on(true, target, events);
        },
        close: function(event) {
          var tooltip, that = this, target = $2(event ? event.currentTarget : this.element), tooltipData = this._find(target);
          if (!tooltipData) {
            target.removeData("ui-tooltip-open");
            return;
          }
          tooltip = tooltipData.tooltip;
          if (tooltipData.closing) {
            return;
          }
          clearInterval(this.delayedShow);
          if (target.data("ui-tooltip-title") && !target.attr("title")) {
            target.attr("title", target.data("ui-tooltip-title"));
          }
          this._removeDescribedBy(target);
          tooltipData.hiding = true;
          tooltip.stop(true);
          this._hide(tooltip, this.options.hide, function() {
            that._removeTooltip($2(this));
          });
          target.removeData("ui-tooltip-open");
          this._off(target, "mouseleave focusout keyup");
          if (target[0] !== this.element[0]) {
            this._off(target, "remove");
          }
          this._off(this.document, "mousemove");
          if (event && event.type === "mouseleave") {
            $2.each(this.parents, function(id, parent) {
              $2(parent.element).attr("title", parent.title);
              delete that.parents[id];
            });
          }
          tooltipData.closing = true;
          this._trigger("close", event, {tooltip});
          if (!tooltipData.hiding) {
            tooltipData.closing = false;
          }
        },
        _tooltip: function(element) {
          var tooltip = $2("<div>").attr("role", "tooltip"), content = $2("<div>").appendTo(tooltip), id = tooltip.uniqueId().attr("id");
          this._addClass(content, "ui-tooltip-content");
          this._addClass(tooltip, "ui-tooltip", "ui-widget ui-widget-content");
          tooltip.appendTo(this._appendTo(element));
          return this.tooltips[id] = {
            element,
            tooltip
          };
        },
        _find: function(target) {
          var id = target.data("ui-tooltip-id");
          return id ? this.tooltips[id] : null;
        },
        _removeTooltip: function(tooltip) {
          tooltip.remove();
          delete this.tooltips[tooltip.attr("id")];
        },
        _appendTo: function(target) {
          var element = target.closest(".ui-front, dialog");
          if (!element.length) {
            element = this.document[0].body;
          }
          return element;
        },
        _destroy: function() {
          var that = this;
          $2.each(this.tooltips, function(id, tooltipData) {
            var event = $2.Event("blur"), element = tooltipData.element;
            event.target = event.currentTarget = element[0];
            that.close(event, true);
            $2("#" + id).remove();
            if (element.data("ui-tooltip-title")) {
              if (!element.attr("title")) {
                element.attr("title", element.data("ui-tooltip-title"));
              }
              element.removeData("ui-tooltip-title");
            }
          });
          this.liveRegion.remove();
        }
      });
      if ($2.uiBackCompat !== false) {
        $2.widget("ui.tooltip", $2.ui.tooltip, {
          options: {
            tooltipClass: null
          },
          _tooltip: function() {
            var tooltipData = this._superApply(arguments);
            if (this.options.tooltipClass) {
              tooltipData.tooltip.addClass(this.options.tooltipClass);
            }
            return tooltipData;
          }
        });
      }
      var widgetsTooltip = $2.ui.tooltip;
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

  // node_modules/spin/spin.js
  var require_spin = __commonJS((exports, module) => {
    var prefixes = ["webkit", "Moz", "ms", "O"];
    var animations = {};
    var useCssAnimations;
    function createEl(tag, prop) {
      var el = document.createElement(tag || "div");
      var n;
      for (n in prop) {
        el[n] = prop[n];
      }
      return el;
    }
    function ins(parent) {
      for (var i = 1, n = arguments.length; i < n; i++) {
        parent.appendChild(arguments[i]);
      }
      return parent;
    }
    var sheet = function() {
      var el = createEl("style");
      ins(document.getElementsByTagName("head")[0], el);
      return el.sheet || el.styleSheet;
    }();
    function addAnimation(alpha, trail, i, lines) {
      var name = ["opacity", trail, ~~(alpha * 100), i, lines].join("-");
      var start = 0.01 + i / lines * 100;
      var z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha);
      var prefix = useCssAnimations.substring(0, useCssAnimations.indexOf("Animation")).toLowerCase();
      var pre = prefix && "-" + prefix + "-" || "";
      if (!animations[name]) {
        sheet.insertRule("@" + pre + "keyframes " + name + "{0%{opacity:" + z + "}" + start + "%{opacity:" + alpha + "}" + (start + 0.01) + "%{opacity:1}" + (start + trail) % 100 + "%{opacity:" + alpha + "}100%{opacity:" + z + "}}", 0);
        animations[name] = 1;
      }
      return name;
    }
    function vendor(el, prop) {
      var s = el.style;
      var pp;
      var i;
      if (s[prop] !== void 0)
        return prop;
      prop = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (i = 0; i < prefixes.length; i++) {
        pp = prefixes[i] + prop;
        if (s[pp] !== void 0)
          return pp;
      }
    }
    function css(el, prop) {
      for (var n in prop) {
        el.style[vendor(el, n) || n] = prop[n];
      }
      return el;
    }
    function merge(obj) {
      for (var i = 1; i < arguments.length; i++) {
        var def = arguments[i];
        for (var n in def) {
          if (obj[n] === void 0)
            obj[n] = def[n];
        }
      }
      return obj;
    }
    function pos(el) {
      var o = {x: el.offsetLeft, y: el.offsetTop};
      while (el = el.offsetParent) {
        o.x += el.offsetLeft;
        o.y += el.offsetTop;
      }
      return o;
    }
    var defaults = {
      lines: 12,
      length: 7,
      width: 5,
      radius: 10,
      rotate: 0,
      color: "#000",
      speed: 1,
      trail: 100,
      opacity: 1 / 4,
      fps: 20,
      zIndex: 2e9,
      className: "spinner",
      top: "auto",
      left: "auto"
    };
    var Spinner2 = function Spinner3(o) {
      if (!this.spin)
        return new Spinner3(o);
      this.opts = merge(o || {}, Spinner3.defaults, defaults);
    };
    Spinner2.defaults = {};
    merge(Spinner2.prototype, {
      spin: function(target) {
        this.stop();
        var self = this;
        var o = self.opts;
        var el = self.el = css(createEl(0, {className: o.className}), {position: "relative", zIndex: o.zIndex});
        var mid = o.radius + o.length + o.width;
        var ep;
        var tp;
        if (target) {
          target.insertBefore(el, target.firstChild || null);
          tp = pos(target);
          ep = pos(el);
          css(el, {
            left: (o.left == "auto" ? tp.x - ep.x + (target.offsetWidth >> 1) : o.left + mid) + "px",
            top: (o.top == "auto" ? tp.y - ep.y + (target.offsetHeight >> 1) : o.top + mid) + "px"
          });
        }
        el.setAttribute("aria-role", "progressbar");
        self.lines(el, self.opts);
        if (!useCssAnimations) {
          var i = 0;
          var fps = o.fps;
          var f = fps / o.speed;
          var ostep = (1 - o.opacity) / (f * o.trail / 100);
          var astep = f / o.lines;
          !function anim() {
            i++;
            for (var s = o.lines; s; s--) {
              var alpha = Math.max(1 - (i + s * astep) % f * ostep, o.opacity);
              self.opacity(el, o.lines - s, alpha, o);
            }
            self.timeout = self.el && setTimeout(anim, ~~(1e3 / fps));
          }();
        }
        return self;
      },
      stop: function() {
        var el = this.el;
        if (el) {
          clearTimeout(this.timeout);
          if (el.parentNode)
            el.parentNode.removeChild(el);
          this.el = void 0;
        }
        return this;
      },
      lines: function(el, o) {
        var i = 0;
        var seg;
        function fill(color, shadow) {
          return css(createEl(), {
            position: "absolute",
            width: o.length + o.width + "px",
            height: o.width + "px",
            background: color,
            boxShadow: shadow,
            transformOrigin: "left",
            transform: "rotate(" + ~~(360 / o.lines * i + o.rotate) + "deg) translate(" + o.radius + "px,0)",
            borderRadius: (o.width >> 1) + "px"
          });
        }
        for (; i < o.lines; i++) {
          seg = css(createEl(), {
            position: "absolute",
            top: 1 + ~(o.width / 2) + "px",
            transform: o.hwaccel ? "translate3d(0,0,0)" : "",
            opacity: o.opacity,
            animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + " " + 1 / o.speed + "s linear infinite"
          });
          if (o.shadow)
            ins(seg, css(fill("#000", "0 0 4px #000"), {top: 2 + "px"}));
          ins(el, ins(seg, fill(o.color, "0 0 1px rgba(0,0,0,.1)")));
        }
        return el;
      },
      opacity: function(el, i, val) {
        if (i < el.childNodes.length)
          el.childNodes[i].style.opacity = val;
      }
    });
    !function() {
      function vml(tag, attr) {
        return createEl("<" + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr);
      }
      var s = css(createEl("group"), {behavior: "url(#default#VML)"});
      if (!vendor(s, "transform") && s.adj) {
        sheet.addRule(".spin-vml", "behavior:url(#default#VML)");
        Spinner2.prototype.lines = function(el, o) {
          var r = o.length + o.width;
          var s2 = 2 * r;
          function grp() {
            return css(vml("group", {coordsize: s2 + " " + s2, coordorigin: -r + " " + -r}), {width: s2, height: s2});
          }
          var margin = -(o.width + o.length) * 2 + "px";
          var g = css(grp(), {position: "absolute", top: margin, left: margin});
          var i;
          function seg(i2, dx, filter) {
            ins(g, ins(css(grp(), {rotation: 360 / o.lines * i2 + "deg", left: ~~dx}), ins(css(vml("roundrect", {arcsize: 1}), {
              width: r,
              height: o.width,
              left: o.radius,
              top: -o.width >> 1,
              filter
            }), vml("fill", {color: o.color, opacity: o.opacity}), vml("stroke", {opacity: 0}))));
          }
          if (o.shadow) {
            for (i = 1; i <= o.lines; i++) {
              seg(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            }
          }
          for (i = 1; i <= o.lines; i++)
            seg(i);
          return ins(el, g);
        };
        Spinner2.prototype.opacity = function(el, i, val, o) {
          var c = el.firstChild;
          o = o.shadow && o.lines || 0;
          if (c && i + o < c.childNodes.length) {
            c = c.childNodes[i + o];
            c = c && c.firstChild;
            c = c && c.firstChild;
            if (c)
              c.opacity = val;
          }
        };
      } else {
        useCssAnimations = vendor(s, "animation");
      }
    }();
    module.exports = Spinner2;
  });

  // node_modules/bootstrap/dist/js/bootstrap.js
  var require_bootstrap = __commonJS(() => {
    /*!
     * Bootstrap v3.4.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 Twitter, Inc.
     * Licensed under the MIT license
     */
    if (typeof jQuery === "undefined") {
      throw new Error("Bootstrap's JavaScript requires jQuery");
    }
    +function($2) {
      "use strict";
      var version = $2.fn.jquery.split(" ")[0].split(".");
      if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
      }
    }(jQuery);
    +function($2) {
      "use strict";
      function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
        for (var name in transEndEventNames) {
          if (el.style[name] !== void 0) {
            return {end: transEndEventNames[name]};
          }
        }
        return false;
      }
      $2.fn.emulateTransitionEnd = function(duration) {
        var called = false;
        var $el = this;
        $2(this).one("bsTransitionEnd", function() {
          called = true;
        });
        var callback = function() {
          if (!called)
            $2($el).trigger($2.support.transition.end);
        };
        setTimeout(callback, duration);
        return this;
      };
      $2(function() {
        $2.support.transition = transitionEnd();
        if (!$2.support.transition)
          return;
        $2.event.special.bsTransitionEnd = {
          bindType: $2.support.transition.end,
          delegateType: $2.support.transition.end,
          handle: function(e) {
            if ($2(e.target).is(this))
              return e.handleObj.handler.apply(this, arguments);
          }
        };
      });
    }(jQuery);
    +function($2) {
      "use strict";
      var dismiss = '[data-dismiss="alert"]';
      var Alert = function(el) {
        $2(el).on("click", dismiss, this.close);
      };
      Alert.VERSION = "3.4.1";
      Alert.TRANSITION_DURATION = 150;
      Alert.prototype.close = function(e) {
        var $this = $2(this);
        var selector = $this.attr("data-target");
        if (!selector) {
          selector = $this.attr("href");
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        selector = selector === "#" ? [] : selector;
        var $parent = $2(document).find(selector);
        if (e)
          e.preventDefault();
        if (!$parent.length) {
          $parent = $this.closest(".alert");
        }
        $parent.trigger(e = $2.Event("close.bs.alert"));
        if (e.isDefaultPrevented())
          return;
        $parent.removeClass("in");
        function removeElement() {
          $parent.detach().trigger("closed.bs.alert").remove();
        }
        $2.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.alert");
          if (!data)
            $this.data("bs.alert", data = new Alert(this));
          if (typeof option == "string")
            data[option].call($this);
        });
      }
      var old = $2.fn.alert;
      $2.fn.alert = Plugin;
      $2.fn.alert.Constructor = Alert;
      $2.fn.alert.noConflict = function() {
        $2.fn.alert = old;
        return this;
      };
      $2(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
    }(jQuery);
    +function($2) {
      "use strict";
      var Button = function(element, options) {
        this.$element = $2(element);
        this.options = $2.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
      };
      Button.VERSION = "3.4.1";
      Button.DEFAULTS = {
        loadingText: "loading..."
      };
      Button.prototype.setState = function(state) {
        var d = "disabled";
        var $el = this.$element;
        var val = $el.is("input") ? "val" : "html";
        var data = $el.data();
        state += "Text";
        if (data.resetText == null)
          $el.data("resetText", $el[val]());
        setTimeout($2.proxy(function() {
          $el[val](data[state] == null ? this.options[state] : data[state]);
          if (state == "loadingText") {
            this.isLoading = true;
            $el.addClass(d).attr(d, d).prop(d, true);
          } else if (this.isLoading) {
            this.isLoading = false;
            $el.removeClass(d).removeAttr(d).prop(d, false);
          }
        }, this), 0);
      };
      Button.prototype.toggle = function() {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
          var $input = this.$element.find("input");
          if ($input.prop("type") == "radio") {
            if ($input.prop("checked"))
              changed = false;
            $parent.find(".active").removeClass("active");
            this.$element.addClass("active");
          } else if ($input.prop("type") == "checkbox") {
            if ($input.prop("checked") !== this.$element.hasClass("active"))
              changed = false;
            this.$element.toggleClass("active");
          }
          $input.prop("checked", this.$element.hasClass("active"));
          if (changed)
            $input.trigger("change");
        } else {
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
          this.$element.toggleClass("active");
        }
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.button");
          var options = typeof option == "object" && option;
          if (!data)
            $this.data("bs.button", data = new Button(this, options));
          if (option == "toggle")
            data.toggle();
          else if (option)
            data.setState(option);
        });
      }
      var old = $2.fn.button;
      $2.fn.button = Plugin;
      $2.fn.button.Constructor = Button;
      $2.fn.button.noConflict = function() {
        $2.fn.button = old;
        return this;
      };
      $2(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var $btn = $2(e.target).closest(".btn");
        Plugin.call($btn, "toggle");
        if (!$2(e.target).is('input[type="radio"], input[type="checkbox"]')) {
          e.preventDefault();
          if ($btn.is("input,button"))
            $btn.trigger("focus");
          else
            $btn.find("input:visible,button:visible").first().trigger("focus");
        }
      }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        $2(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
      });
    }(jQuery);
    +function($2) {
      "use strict";
      var Carousel = function(element, options) {
        this.$element = $2(element);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = options;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", $2.proxy(this.keydown, this));
        this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $2.proxy(this.pause, this)).on("mouseleave.bs.carousel", $2.proxy(this.cycle, this));
      };
      Carousel.VERSION = "3.4.1";
      Carousel.TRANSITION_DURATION = 600;
      Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: true,
        keyboard: true
      };
      Carousel.prototype.keydown = function(e) {
        if (/input|textarea/i.test(e.target.tagName))
          return;
        switch (e.which) {
          case 37:
            this.prev();
            break;
          case 39:
            this.next();
            break;
          default:
            return;
        }
        e.preventDefault();
      };
      Carousel.prototype.cycle = function(e) {
        e || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval($2.proxy(this.next, this), this.options.interval));
        return this;
      };
      Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children(".item");
        return this.$items.index(item || this.$active);
      };
      Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active);
        var willWrap = direction == "prev" && activeIndex === 0 || direction == "next" && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap)
          return active;
        var delta = direction == "prev" ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
      };
      Carousel.prototype.to = function(pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (pos > this.$items.length - 1 || pos < 0)
          return;
        if (this.sliding)
          return this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
          });
        if (activeIndex == pos)
          return this.pause().cycle();
        return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
      };
      Carousel.prototype.pause = function(e) {
        e || (this.paused = true);
        if (this.$element.find(".next, .prev").length && $2.support.transition) {
          this.$element.trigger($2.support.transition.end);
          this.cycle(true);
        }
        this.interval = clearInterval(this.interval);
        return this;
      };
      Carousel.prototype.next = function() {
        if (this.sliding)
          return;
        return this.slide("next");
      };
      Carousel.prototype.prev = function() {
        if (this.sliding)
          return;
        return this.slide("prev");
      };
      Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active");
        var $next = next || this.getItemForDirection(type, $active);
        var isCycling = this.interval;
        var direction = type == "next" ? "left" : "right";
        var that = this;
        if ($next.hasClass("active"))
          return this.sliding = false;
        var relatedTarget = $next[0];
        var slideEvent = $2.Event("slide.bs.carousel", {
          relatedTarget,
          direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented())
          return;
        this.sliding = true;
        isCycling && this.pause();
        if (this.$indicators.length) {
          this.$indicators.find(".active").removeClass("active");
          var $nextIndicator = $2(this.$indicators.children()[this.getItemIndex($next)]);
          $nextIndicator && $nextIndicator.addClass("active");
        }
        var slidEvent = $2.Event("slid.bs.carousel", {relatedTarget, direction});
        if ($2.support.transition && this.$element.hasClass("slide")) {
          $next.addClass(type);
          if (typeof $next === "object" && $next.length) {
            $next[0].offsetWidth;
          }
          $active.addClass(direction);
          $next.addClass(direction);
          $active.one("bsTransitionEnd", function() {
            $next.removeClass([type, direction].join(" ")).addClass("active");
            $active.removeClass(["active", direction].join(" "));
            that.sliding = false;
            setTimeout(function() {
              that.$element.trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
        } else {
          $active.removeClass("active");
          $next.addClass("active");
          this.sliding = false;
          this.$element.trigger(slidEvent);
        }
        isCycling && this.cycle();
        return this;
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.carousel");
          var options = $2.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
          var action = typeof option == "string" ? option : options.slide;
          if (!data)
            $this.data("bs.carousel", data = new Carousel(this, options));
          if (typeof option == "number")
            data.to(option);
          else if (action)
            data[action]();
          else if (options.interval)
            data.pause().cycle();
        });
      }
      var old = $2.fn.carousel;
      $2.fn.carousel = Plugin;
      $2.fn.carousel.Constructor = Carousel;
      $2.fn.carousel.noConflict = function() {
        $2.fn.carousel = old;
        return this;
      };
      var clickHandler = function(e) {
        var $this = $2(this);
        var href = $this.attr("href");
        if (href) {
          href = href.replace(/.*(?=#[^\s]+$)/, "");
        }
        var target = $this.attr("data-target") || href;
        var $target = $2(document).find(target);
        if (!$target.hasClass("carousel"))
          return;
        var options = $2.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr("data-slide-to");
        if (slideIndex)
          options.interval = false;
        Plugin.call($target, options);
        if (slideIndex) {
          $target.data("bs.carousel").to(slideIndex);
        }
        e.preventDefault();
      };
      $2(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
      $2(window).on("load", function() {
        $2('[data-ride="carousel"]').each(function() {
          var $carousel = $2(this);
          Plugin.call($carousel, $carousel.data());
        });
      });
    }(jQuery);
    +function($2) {
      "use strict";
      var Collapse = function(element, options) {
        this.$element = $2(element);
        this.options = $2.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $2('[data-toggle="collapse"][href="#' + element.id + '"],[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
          this.$parent = this.getParent();
        } else {
          this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle)
          this.toggle();
      };
      Collapse.VERSION = "3.4.1";
      Collapse.TRANSITION_DURATION = 350;
      Collapse.DEFAULTS = {
        toggle: true
      };
      Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
      };
      Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in"))
          return;
        var activesData;
        var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (actives && actives.length) {
          activesData = actives.data("bs.collapse");
          if (activesData && activesData.transitioning)
            return;
        }
        var startEvent = $2.Event("show.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented())
          return;
        if (actives && actives.length) {
          Plugin.call(actives, "hide");
          activesData || actives.data("bs.collapse", null);
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
        this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
        this.transitioning = 1;
        var complete = function() {
          this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
          this.transitioning = 0;
          this.$element.trigger("shown.bs.collapse");
        };
        if (!$2.support.transition)
          return complete.call(this);
        var scrollSize = $2.camelCase(["scroll", dimension].join("-"));
        this.$element.one("bsTransitionEnd", $2.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
      };
      Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in"))
          return;
        var startEvent = $2.Event("hide.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented())
          return;
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
        this.$trigger.addClass("collapsed").attr("aria-expanded", false);
        this.transitioning = 1;
        var complete = function() {
          this.transitioning = 0;
          this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        if (!$2.support.transition)
          return complete.call(this);
        this.$element[dimension](0).one("bsTransitionEnd", $2.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
      };
      Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      };
      Collapse.prototype.getParent = function() {
        return $2(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($2.proxy(function(i, element) {
          var $element = $2(element);
          this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
      };
      Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass("in");
        $element.attr("aria-expanded", isOpen);
        $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
      };
      function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        return $2(document).find(target);
      }
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.collapse");
          var options = $2.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
          if (!data && options.toggle && /show|hide/.test(option))
            options.toggle = false;
          if (!data)
            $this.data("bs.collapse", data = new Collapse(this, options));
          if (typeof option == "string")
            data[option]();
        });
      }
      var old = $2.fn.collapse;
      $2.fn.collapse = Plugin;
      $2.fn.collapse.Constructor = Collapse;
      $2.fn.collapse.noConflict = function() {
        $2.fn.collapse = old;
        return this;
      };
      $2(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var $this = $2(this);
        if (!$this.attr("data-target"))
          e.preventDefault();
        var $target = getTargetFromTrigger($this);
        var data = $target.data("bs.collapse");
        var option = data ? "toggle" : $this.data();
        Plugin.call($target, option);
      });
    }(jQuery);
    +function($2) {
      "use strict";
      var backdrop = ".dropdown-backdrop";
      var toggle = '[data-toggle="dropdown"]';
      var Dropdown = function(element) {
        $2(element).on("click.bs.dropdown", this.toggle);
      };
      Dropdown.VERSION = "3.4.1";
      function getParent($this) {
        var selector = $this.attr("data-target");
        if (!selector) {
          selector = $this.attr("href");
          selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = selector !== "#" ? $2(document).find(selector) : null;
        return $parent && $parent.length ? $parent : $this.parent();
      }
      function clearMenus(e) {
        if (e && e.which === 3)
          return;
        $2(backdrop).remove();
        $2(toggle).each(function() {
          var $this = $2(this);
          var $parent = getParent($this);
          var relatedTarget = {relatedTarget: this};
          if (!$parent.hasClass("open"))
            return;
          if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $2.contains($parent[0], e.target))
            return;
          $parent.trigger(e = $2.Event("hide.bs.dropdown", relatedTarget));
          if (e.isDefaultPrevented())
            return;
          $this.attr("aria-expanded", "false");
          $parent.removeClass("open").trigger($2.Event("hidden.bs.dropdown", relatedTarget));
        });
      }
      Dropdown.prototype.toggle = function(e) {
        var $this = $2(this);
        if ($this.is(".disabled, :disabled"))
          return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        clearMenus();
        if (!isActive) {
          if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
            $2(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($2(this)).on("click", clearMenus);
          }
          var relatedTarget = {relatedTarget: this};
          $parent.trigger(e = $2.Event("show.bs.dropdown", relatedTarget));
          if (e.isDefaultPrevented())
            return;
          $this.trigger("focus").attr("aria-expanded", "true");
          $parent.toggleClass("open").trigger($2.Event("shown.bs.dropdown", relatedTarget));
        }
        return false;
      };
      Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName))
          return;
        var $this = $2(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is(".disabled, :disabled"))
          return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive && e.which != 27 || isActive && e.which == 27) {
          if (e.which == 27)
            $parent.find(toggle).trigger("focus");
          return $this.trigger("click");
        }
        var desc = " li:not(.disabled):visible a";
        var $items = $parent.find(".dropdown-menu" + desc);
        if (!$items.length)
          return;
        var index = $items.index(e.target);
        if (e.which == 38 && index > 0)
          index--;
        if (e.which == 40 && index < $items.length - 1)
          index++;
        if (!~index)
          index = 0;
        $items.eq(index).trigger("focus");
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.dropdown");
          if (!data)
            $this.data("bs.dropdown", data = new Dropdown(this));
          if (typeof option == "string")
            data[option].call($this);
        });
      }
      var old = $2.fn.dropdown;
      $2.fn.dropdown = Plugin;
      $2.fn.dropdown.Constructor = Dropdown;
      $2.fn.dropdown.noConflict = function() {
        $2.fn.dropdown = old;
        return this;
      };
      $2(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
      }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
    }(jQuery);
    +function($2) {
      "use strict";
      var Modal = function(element, options) {
        this.options = options;
        this.$body = $2(document.body);
        this.$element = $2(element);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom";
        if (this.options.remote) {
          this.$element.find(".modal-content").load(this.options.remote, $2.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
          }, this));
        }
      };
      Modal.VERSION = "3.4.1";
      Modal.TRANSITION_DURATION = 300;
      Modal.BACKDROP_TRANSITION_DURATION = 150;
      Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
      };
      Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
      };
      Modal.prototype.show = function(_relatedTarget) {
        var that = this;
        var e = $2.Event("show.bs.modal", {relatedTarget: _relatedTarget});
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented())
          return;
        this.isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass("modal-open");
        this.escape();
        this.resize();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $2.proxy(this.hide, this));
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
          that.$element.one("mouseup.dismiss.bs.modal", function(e2) {
            if ($2(e2.target).is(that.$element))
              that.ignoreBackdropClick = true;
          });
        });
        this.backdrop(function() {
          var transition = $2.support.transition && that.$element.hasClass("fade");
          if (!that.$element.parent().length) {
            that.$element.appendTo(that.$body);
          }
          that.$element.show().scrollTop(0);
          that.adjustDialog();
          if (transition) {
            that.$element[0].offsetWidth;
          }
          that.$element.addClass("in");
          that.enforceFocus();
          var e2 = $2.Event("shown.bs.modal", {relatedTarget: _relatedTarget});
          transition ? that.$dialog.one("bsTransitionEnd", function() {
            that.$element.trigger("focus").trigger(e2);
          }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e2);
        });
      };
      Modal.prototype.hide = function(e) {
        if (e)
          e.preventDefault();
        e = $2.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented())
          return;
        this.isShown = false;
        this.escape();
        this.resize();
        $2(document).off("focusin.bs.modal");
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
        this.$dialog.off("mousedown.dismiss.bs.modal");
        $2.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $2.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
      };
      Modal.prototype.enforceFocus = function() {
        $2(document).off("focusin.bs.modal").on("focusin.bs.modal", $2.proxy(function(e) {
          if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
            this.$element.trigger("focus");
          }
        }, this));
      };
      Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
          this.$element.on("keydown.dismiss.bs.modal", $2.proxy(function(e) {
            e.which == 27 && this.hide();
          }, this));
        } else if (!this.isShown) {
          this.$element.off("keydown.dismiss.bs.modal");
        }
      };
      Modal.prototype.resize = function() {
        if (this.isShown) {
          $2(window).on("resize.bs.modal", $2.proxy(this.handleUpdate, this));
        } else {
          $2(window).off("resize.bs.modal");
        }
      };
      Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide();
        this.backdrop(function() {
          that.$body.removeClass("modal-open");
          that.resetAdjustments();
          that.resetScrollbar();
          that.$element.trigger("hidden.bs.modal");
        });
      };
      Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
      };
      Modal.prototype.backdrop = function(callback) {
        var that = this;
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var doAnimate = $2.support.transition && animate;
          this.$backdrop = $2(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body);
          this.$element.on("click.dismiss.bs.modal", $2.proxy(function(e) {
            if (this.ignoreBackdropClick) {
              this.ignoreBackdropClick = false;
              return;
            }
            if (e.target !== e.currentTarget)
              return;
            this.options.backdrop == "static" ? this.$element[0].focus() : this.hide();
          }, this));
          if (doAnimate)
            this.$backdrop[0].offsetWidth;
          this.$backdrop.addClass("in");
          if (!callback)
            return;
          doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var callbackRemove = function() {
            that.removeBackdrop();
            callback && callback();
          };
          $2.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else if (callback) {
          callback();
        }
      };
      Modal.prototype.handleUpdate = function() {
        this.adjustDialog();
      };
      Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
        });
      };
      Modal.prototype.resetAdjustments = function() {
        this.$element.css({
          paddingLeft: "",
          paddingRight: ""
        });
      };
      Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
      };
      Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var scrollbarWidth = this.scrollbarWidth;
        if (this.bodyIsOverflowing) {
          this.$body.css("padding-right", bodyPad + scrollbarWidth);
          $2(this.fixedContent).each(function(index, element) {
            var actualPadding = element.style.paddingRight;
            var calculatedPadding = $2(element).css("padding-right");
            $2(element).data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + scrollbarWidth + "px");
          });
        }
      };
      Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
        $2(this.fixedContent).each(function(index, element) {
          var padding = $2(element).data("padding-right");
          $2(element).removeData("padding-right");
          element.style.paddingRight = padding ? padding : "";
        });
      };
      Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
      };
      function Plugin(option, _relatedTarget) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.modal");
          var options = $2.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
          if (!data)
            $this.data("bs.modal", data = new Modal(this, options));
          if (typeof option == "string")
            data[option](_relatedTarget);
          else if (options.show)
            data.show(_relatedTarget);
        });
      }
      var old = $2.fn.modal;
      $2.fn.modal = Plugin;
      $2.fn.modal.Constructor = Modal;
      $2.fn.modal.noConflict = function() {
        $2.fn.modal = old;
        return this;
      };
      $2(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $2(this);
        var href = $this.attr("href");
        var target = $this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "");
        var $target = $2(document).find(target);
        var option = $target.data("bs.modal") ? "toggle" : $2.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data());
        if ($this.is("a"))
          e.preventDefault();
        $target.one("show.bs.modal", function(showEvent) {
          if (showEvent.isDefaultPrevented())
            return;
          $target.one("hidden.bs.modal", function() {
            $this.is(":visible") && $this.trigger("focus");
          });
        });
        Plugin.call($target, option, this);
      });
    }(jQuery);
    +function($2) {
      "use strict";
      var DISALLOWED_ATTRIBUTES = ["sanitize", "whiteList", "sanitizeFn"];
      var uriAttrs = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
      ];
      var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      var DefaultWhitelist = {
        "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
      var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
      function allowedAttribute(attr, allowedAttributeList) {
        var attrName = attr.nodeName.toLowerCase();
        if ($2.inArray(attrName, allowedAttributeList) !== -1) {
          if ($2.inArray(attrName, uriAttrs) !== -1) {
            return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
          }
          return true;
        }
        var regExp = $2(allowedAttributeList).filter(function(index, value) {
          return value instanceof RegExp;
        });
        for (var i = 0, l = regExp.length; i < l; i++) {
          if (attrName.match(regExp[i])) {
            return true;
          }
        }
        return false;
      }
      function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
        if (unsafeHtml.length === 0) {
          return unsafeHtml;
        }
        if (sanitizeFn && typeof sanitizeFn === "function") {
          return sanitizeFn(unsafeHtml);
        }
        if (!document.implementation || !document.implementation.createHTMLDocument) {
          return unsafeHtml;
        }
        var createdDocument = document.implementation.createHTMLDocument("sanitization");
        createdDocument.body.innerHTML = unsafeHtml;
        var whitelistKeys = $2.map(whiteList, function(el2, i2) {
          return i2;
        });
        var elements = $2(createdDocument.body).find("*");
        for (var i = 0, len = elements.length; i < len; i++) {
          var el = elements[i];
          var elName = el.nodeName.toLowerCase();
          if ($2.inArray(elName, whitelistKeys) === -1) {
            el.parentNode.removeChild(el);
            continue;
          }
          var attributeList = $2.map(el.attributes, function(el2) {
            return el2;
          });
          var whitelistedAttributes = [].concat(whiteList["*"] || [], whiteList[elName] || []);
          for (var j = 0, len2 = attributeList.length; j < len2; j++) {
            if (!allowedAttribute(attributeList[j], whitelistedAttributes)) {
              el.removeAttribute(attributeList[j].nodeName);
            }
          }
        }
        return createdDocument.body.innerHTML;
      }
      var Tooltip = function(element, options) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", element, options);
      };
      Tooltip.VERSION = "3.4.1";
      Tooltip.TRANSITION_DURATION = 150;
      Tooltip.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
          selector: "body",
          padding: 0
        },
        sanitize: true,
        sanitizeFn: null,
        whiteList: DefaultWhitelist
      };
      Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $2(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $2(document).find($2.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {click: false, hover: false, focus: false};
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
          throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        }
        var triggers = this.options.trigger.split(" ");
        for (var i = triggers.length; i--; ) {
          var trigger = triggers[i];
          if (trigger == "click") {
            this.$element.on("click." + this.type, this.options.selector, $2.proxy(this.toggle, this));
          } else if (trigger != "manual") {
            var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
            var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
            this.$element.on(eventIn + "." + this.type, this.options.selector, $2.proxy(this.enter, this));
            this.$element.on(eventOut + "." + this.type, this.options.selector, $2.proxy(this.leave, this));
          }
        }
        this.options.selector ? this._options = $2.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle();
      };
      Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
      };
      Tooltip.prototype.getOptions = function(options) {
        var dataAttributes = this.$element.data();
        for (var dataAttr in dataAttributes) {
          if (dataAttributes.hasOwnProperty(dataAttr) && $2.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
            delete dataAttributes[dataAttr];
          }
        }
        options = $2.extend({}, this.getDefaults(), dataAttributes, options);
        if (options.delay && typeof options.delay == "number") {
          options.delay = {
            show: options.delay,
            hide: options.delay
          };
        }
        if (options.sanitize) {
          options.template = sanitizeHtml(options.template, options.whiteList, options.sanitizeFn);
        }
        return options;
      };
      Tooltip.prototype.getDelegateOptions = function() {
        var options = {};
        var defaults = this.getDefaults();
        this._options && $2.each(this._options, function(key, value) {
          if (defaults[key] != value)
            options[key] = value;
        });
        return options;
      };
      Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $2(obj.currentTarget).data("bs." + this.type);
        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
          $2(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $2.Event) {
          self.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
        }
        if (self.tip().hasClass("in") || self.hoverState == "in") {
          self.hoverState = "in";
          return;
        }
        clearTimeout(self.timeout);
        self.hoverState = "in";
        if (!self.options.delay || !self.options.delay.show)
          return self.show();
        self.timeout = setTimeout(function() {
          if (self.hoverState == "in")
            self.show();
        }, self.options.delay.show);
      };
      Tooltip.prototype.isInStateTrue = function() {
        for (var key in this.inState) {
          if (this.inState[key])
            return true;
        }
        return false;
      };
      Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $2(obj.currentTarget).data("bs." + this.type);
        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
          $2(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $2.Event) {
          self.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
        }
        if (self.isInStateTrue())
          return;
        clearTimeout(self.timeout);
        self.hoverState = "out";
        if (!self.options.delay || !self.options.delay.hide)
          return self.hide();
        self.timeout = setTimeout(function() {
          if (self.hoverState == "out")
            self.hide();
        }, self.options.delay.hide);
      };
      Tooltip.prototype.show = function() {
        var e = $2.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var inDom = $2.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (e.isDefaultPrevented() || !inDom)
            return;
          var that = this;
          var $tip = this.tip();
          var tipId = this.getUID(this.type);
          this.setContent();
          $tip.attr("id", tipId);
          this.$element.attr("aria-describedby", tipId);
          if (this.options.animation)
            $tip.addClass("fade");
          var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
          var autoToken = /\s?auto?\s?/i;
          var autoPlace = autoToken.test(placement);
          if (autoPlace)
            placement = placement.replace(autoToken, "") || "top";
          $tip.detach().css({top: 0, left: 0, display: "block"}).addClass(placement).data("bs." + this.type, this);
          this.options.container ? $tip.appendTo($2(document).find(this.options.container)) : $tip.insertAfter(this.$element);
          this.$element.trigger("inserted.bs." + this.type);
          var pos = this.getPosition();
          var actualWidth = $tip[0].offsetWidth;
          var actualHeight = $tip[0].offsetHeight;
          if (autoPlace) {
            var orgPlacement = placement;
            var viewportDim = this.getPosition(this.$viewport);
            placement = placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < viewportDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > viewportDim.width ? "left" : placement == "left" && pos.left - actualWidth < viewportDim.left ? "right" : placement;
            $tip.removeClass(orgPlacement).addClass(placement);
          }
          var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
          this.applyPlacement(calculatedOffset, placement);
          var complete = function() {
            var prevHoverState = that.hoverState;
            that.$element.trigger("shown.bs." + that.type);
            that.hoverState = null;
            if (prevHoverState == "out")
              that.leave(that);
          };
          $2.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
      };
      Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;
        var marginTop = parseInt($tip.css("margin-top"), 10);
        var marginLeft = parseInt($tip.css("margin-left"), 10);
        if (isNaN(marginTop))
          marginTop = 0;
        if (isNaN(marginLeft))
          marginLeft = 0;
        offset.top += marginTop;
        offset.left += marginLeft;
        $2.offset.setOffset($tip[0], $2.extend({
          using: function(props) {
            $tip.css({
              top: Math.round(props.top),
              left: Math.round(props.left)
            });
          }
        }, offset), 0);
        $tip.addClass("in");
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (placement == "top" && actualHeight != height) {
          offset.top = offset.top + height - actualHeight;
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        if (delta.left)
          offset.left += delta.left;
        else
          offset.top += delta.top;
        var isVertical = /top|bottom/.test(placement);
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
      };
      Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
        this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "");
      };
      Tooltip.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        if (this.options.html) {
          if (this.options.sanitize) {
            title = sanitizeHtml(title, this.options.whiteList, this.options.sanitizeFn);
          }
          $tip.find(".tooltip-inner").html(title);
        } else {
          $tip.find(".tooltip-inner").text(title);
        }
        $tip.removeClass("fade in top bottom left right");
      };
      Tooltip.prototype.hide = function(callback) {
        var that = this;
        var $tip = $2(this.$tip);
        var e = $2.Event("hide.bs." + this.type);
        function complete() {
          if (that.hoverState != "in")
            $tip.detach();
          if (that.$element) {
            that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
          }
          callback && callback();
        }
        this.$element.trigger(e);
        if (e.isDefaultPrevented())
          return;
        $tip.removeClass("in");
        $2.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        this.hoverState = null;
        return this;
      };
      Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
          $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
        }
      };
      Tooltip.prototype.hasContent = function() {
        return this.getTitle();
      };
      Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0];
        var isBody = el.tagName == "BODY";
        var elRect = el.getBoundingClientRect();
        if (elRect.width == null) {
          elRect = $2.extend({}, elRect, {width: elRect.right - elRect.left, height: elRect.bottom - elRect.top});
        }
        var isSvg = window.SVGElement && el instanceof window.SVGElement;
        var elOffset = isBody ? {top: 0, left: 0} : isSvg ? null : $element.offset();
        var scroll = {scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()};
        var outerDims = isBody ? {width: $2(window).width(), height: $2(window).height()} : null;
        return $2.extend({}, elRect, scroll, outerDims, elOffset);
      };
      Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == "bottom" ? {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2} : placement == "top" ? {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2} : placement == "left" ? {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth} : {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width};
      };
      Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {top: 0, left: 0};
        if (!this.$viewport)
          return delta;
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
          var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
          var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
          if (topEdgeOffset < viewportDimensions.top) {
            delta.top = viewportDimensions.top - topEdgeOffset;
          } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
            delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
          }
        } else {
          var leftEdgeOffset = pos.left - viewportPadding;
          var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
          if (leftEdgeOffset < viewportDimensions.left) {
            delta.left = viewportDimensions.left - leftEdgeOffset;
          } else if (rightEdgeOffset > viewportDimensions.right) {
            delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
          }
        }
        return delta;
      };
      Tooltip.prototype.getTitle = function() {
        var title;
        var $e = this.$element;
        var o = this.options;
        title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
        return title;
      };
      Tooltip.prototype.getUID = function(prefix) {
        do
          prefix += ~~(Math.random() * 1e6);
        while (document.getElementById(prefix));
        return prefix;
      };
      Tooltip.prototype.tip = function() {
        if (!this.$tip) {
          this.$tip = $2(this.options.template);
          if (this.$tip.length != 1) {
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
          }
        }
        return this.$tip;
      };
      Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
      };
      Tooltip.prototype.enable = function() {
        this.enabled = true;
      };
      Tooltip.prototype.disable = function() {
        this.enabled = false;
      };
      Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
      };
      Tooltip.prototype.toggle = function(e) {
        var self = this;
        if (e) {
          self = $2(e.currentTarget).data("bs." + this.type);
          if (!self) {
            self = new this.constructor(e.currentTarget, this.getDelegateOptions());
            $2(e.currentTarget).data("bs." + this.type, self);
          }
        }
        if (e) {
          self.inState.click = !self.inState.click;
          if (self.isInStateTrue())
            self.enter(self);
          else
            self.leave(self);
        } else {
          self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
        }
      };
      Tooltip.prototype.destroy = function() {
        var that = this;
        clearTimeout(this.timeout);
        this.hide(function() {
          that.$element.off("." + that.type).removeData("bs." + that.type);
          if (that.$tip) {
            that.$tip.detach();
          }
          that.$tip = null;
          that.$arrow = null;
          that.$viewport = null;
          that.$element = null;
        });
      };
      Tooltip.prototype.sanitizeHtml = function(unsafeHtml) {
        return sanitizeHtml(unsafeHtml, this.options.whiteList, this.options.sanitizeFn);
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.tooltip");
          var options = typeof option == "object" && option;
          if (!data && /destroy|hide/.test(option))
            return;
          if (!data)
            $this.data("bs.tooltip", data = new Tooltip(this, options));
          if (typeof option == "string")
            data[option]();
        });
      }
      var old = $2.fn.tooltip;
      $2.fn.tooltip = Plugin;
      $2.fn.tooltip.Constructor = Tooltip;
      $2.fn.tooltip.noConflict = function() {
        $2.fn.tooltip = old;
        return this;
      };
    }(jQuery);
    +function($2) {
      "use strict";
      var Popover = function(element, options) {
        this.init("popover", element, options);
      };
      if (!$2.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
      Popover.VERSION = "3.4.1";
      Popover.DEFAULTS = $2.extend({}, $2.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      });
      Popover.prototype = $2.extend({}, $2.fn.tooltip.Constructor.prototype);
      Popover.prototype.constructor = Popover;
      Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
      };
      Popover.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();
        if (this.options.html) {
          var typeContent = typeof content;
          if (this.options.sanitize) {
            title = this.sanitizeHtml(title);
            if (typeContent === "string") {
              content = this.sanitizeHtml(content);
            }
          }
          $tip.find(".popover-title").html(title);
          $tip.find(".popover-content").children().detach().end()[typeContent === "string" ? "html" : "append"](content);
        } else {
          $tip.find(".popover-title").text(title);
          $tip.find(".popover-content").children().detach().end().text(content);
        }
        $tip.removeClass("fade top bottom left right in");
        if (!$tip.find(".popover-title").html())
          $tip.find(".popover-title").hide();
      };
      Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
      };
      Popover.prototype.getContent = function() {
        var $e = this.$element;
        var o = this.options;
        return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
      };
      Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.popover");
          var options = typeof option == "object" && option;
          if (!data && /destroy|hide/.test(option))
            return;
          if (!data)
            $this.data("bs.popover", data = new Popover(this, options));
          if (typeof option == "string")
            data[option]();
        });
      }
      var old = $2.fn.popover;
      $2.fn.popover = Plugin;
      $2.fn.popover.Constructor = Popover;
      $2.fn.popover.noConflict = function() {
        $2.fn.popover = old;
        return this;
      };
    }(jQuery);
    +function($2) {
      "use strict";
      function ScrollSpy(element, options) {
        this.$body = $2(document.body);
        this.$scrollElement = $2(element).is(document.body) ? $2(window) : $2(element);
        this.options = $2.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", $2.proxy(this.process, this));
        this.refresh();
        this.process();
      }
      ScrollSpy.VERSION = "3.4.1";
      ScrollSpy.DEFAULTS = {
        offset: 10
      };
      ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
      };
      ScrollSpy.prototype.refresh = function() {
        var that = this;
        var offsetMethod = "offset";
        var offsetBase = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!$2.isWindow(this.$scrollElement[0])) {
          offsetMethod = "position";
          offsetBase = this.$scrollElement.scrollTop();
        }
        this.$body.find(this.selector).map(function() {
          var $el = $2(this);
          var href = $el.data("target") || $el.attr("href");
          var $href = /^#./.test(href) && $2(href);
          return $href && $href.length && $href.is(":visible") && [[$href[offsetMethod]().top + offsetBase, href]] || null;
        }).sort(function(a, b) {
          return a[0] - b[0];
        }).each(function() {
          that.offsets.push(this[0]);
          that.targets.push(this[1]);
        });
      };
      ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;
        if (this.scrollHeight != scrollHeight) {
          this.refresh();
        }
        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }
        if (activeTarget && scrollTop < offsets[0]) {
          this.activeTarget = null;
          return this.clear();
        }
        for (i = offsets.length; i--; ) {
          activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === void 0 || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
        }
      };
      ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target;
        this.clear();
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
        var active = $2(selector).parents("li").addClass("active");
        if (active.parent(".dropdown-menu").length) {
          active = active.closest("li.dropdown").addClass("active");
        }
        active.trigger("activate.bs.scrollspy");
      };
      ScrollSpy.prototype.clear = function() {
        $2(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.scrollspy");
          var options = typeof option == "object" && option;
          if (!data)
            $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
          if (typeof option == "string")
            data[option]();
        });
      }
      var old = $2.fn.scrollspy;
      $2.fn.scrollspy = Plugin;
      $2.fn.scrollspy.Constructor = ScrollSpy;
      $2.fn.scrollspy.noConflict = function() {
        $2.fn.scrollspy = old;
        return this;
      };
      $2(window).on("load.bs.scrollspy.data-api", function() {
        $2('[data-spy="scroll"]').each(function() {
          var $spy = $2(this);
          Plugin.call($spy, $spy.data());
        });
      });
    }(jQuery);
    +function($2) {
      "use strict";
      var Tab = function(element) {
        this.element = $2(element);
      };
      Tab.VERSION = "3.4.1";
      Tab.TRANSITION_DURATION = 150;
      Tab.prototype.show = function() {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (!selector) {
          selector = $this.attr("href");
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        if ($this.parent("li").hasClass("active"))
          return;
        var $previous = $ul.find(".active:last a");
        var hideEvent = $2.Event("hide.bs.tab", {
          relatedTarget: $this[0]
        });
        var showEvent = $2.Event("show.bs.tab", {
          relatedTarget: $previous[0]
        });
        $previous.trigger(hideEvent);
        $this.trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented())
          return;
        var $target = $2(document).find(selector);
        this.activate($this.closest("li"), $ul);
        this.activate($target, $target.parent(), function() {
          $previous.trigger({
            type: "hidden.bs.tab",
            relatedTarget: $this[0]
          });
          $this.trigger({
            type: "shown.bs.tab",
            relatedTarget: $previous[0]
          });
        });
      };
      Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find("> .active");
        var transition = callback && $2.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);
        function next() {
          $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
          element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
          if (transition) {
            element[0].offsetWidth;
            element.addClass("in");
          } else {
            element.removeClass("fade");
          }
          if (element.parent(".dropdown-menu").length) {
            element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
          }
          callback && callback();
        }
        $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
        $active.removeClass("in");
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.tab");
          if (!data)
            $this.data("bs.tab", data = new Tab(this));
          if (typeof option == "string")
            data[option]();
        });
      }
      var old = $2.fn.tab;
      $2.fn.tab = Plugin;
      $2.fn.tab.Constructor = Tab;
      $2.fn.tab.noConflict = function() {
        $2.fn.tab = old;
        return this;
      };
      var clickHandler = function(e) {
        e.preventDefault();
        Plugin.call($2(this), "show");
      };
      $2(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
    }(jQuery);
    +function($2) {
      "use strict";
      var Affix = function(element, options) {
        this.options = $2.extend({}, Affix.DEFAULTS, options);
        var target = this.options.target === Affix.DEFAULTS.target ? $2(this.options.target) : $2(document).find(this.options.target);
        this.$target = target.on("scroll.bs.affix.data-api", $2.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $2.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $2(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition();
      };
      Affix.VERSION = "3.4.1";
      Affix.RESET = "affix affix-top affix-bottom";
      Affix.DEFAULTS = {
        offset: 0,
        target: window
      };
      Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();
        if (offsetTop != null && this.affixed == "top")
          return scrollTop < offsetTop ? "top" : false;
        if (this.affixed == "bottom") {
          if (offsetTop != null)
            return scrollTop + this.unpin <= position.top ? false : "bottom";
          return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom";
        }
        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;
        if (offsetTop != null && scrollTop <= offsetTop)
          return "top";
        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom)
          return "bottom";
        return false;
      };
      Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
          return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
      };
      Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($2.proxy(this.checkPosition, this), 1);
      };
      Affix.prototype.checkPosition = function() {
        if (!this.$element.is(":visible"))
          return;
        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = Math.max($2(document).height(), $2(document.body).height());
        if (typeof offset != "object")
          offsetBottom = offsetTop = offset;
        if (typeof offsetTop == "function")
          offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == "function")
          offsetBottom = offset.bottom(this.$element);
        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
        if (this.affixed != affix) {
          if (this.unpin != null)
            this.$element.css("top", "");
          var affixType = "affix" + (affix ? "-" + affix : "");
          var e = $2.Event(affixType + ".bs.affix");
          this.$element.trigger(e);
          if (e.isDefaultPrevented())
            return;
          this.affixed = affix;
          this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
          this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
        }
        if (affix == "bottom") {
          this.$element.offset({
            top: scrollHeight - height - offsetBottom
          });
        }
      };
      function Plugin(option) {
        return this.each(function() {
          var $this = $2(this);
          var data = $this.data("bs.affix");
          var options = typeof option == "object" && option;
          if (!data)
            $this.data("bs.affix", data = new Affix(this, options));
          if (typeof option == "string")
            data[option]();
        });
      }
      var old = $2.fn.affix;
      $2.fn.affix = Plugin;
      $2.fn.affix.Constructor = Affix;
      $2.fn.affix.noConflict = function() {
        $2.fn.affix = old;
        return this;
      };
      $2(window).on("load", function() {
        $2('[data-spy="affix"]').each(function() {
          var $spy = $2(this);
          var data = $spy.data();
          data.offset = data.offset || {};
          if (data.offsetBottom != null)
            data.offset.bottom = data.offsetBottom;
          if (data.offsetTop != null)
            data.offset.top = data.offsetTop;
          Plugin.call($spy, data);
        });
      });
    }(jQuery);
  });

  // node_modules/masonry/jquery.masonry.js
  var require_jquery_masonry = __commonJS(() => {
    (function(window2, $2, undefined2) {
      var $event = $2.event, resizeTimeout;
      $event.special.smartresize = {
        setup: function() {
          $2(this).bind("resize", $event.special.smartresize.handler);
        },
        teardown: function() {
          $2(this).unbind("resize", $event.special.smartresize.handler);
        },
        handler: function(event, execAsap) {
          var context = this, args = arguments;
          event.type = "smartresize";
          if (resizeTimeout) {
            clearTimeout(resizeTimeout);
          }
          resizeTimeout = setTimeout(function() {
            jQuery.event.handle.apply(context, args);
          }, execAsap === "execAsap" ? 0 : 100);
        }
      };
      $2.fn.smartresize = function(fn) {
        return fn ? this.bind("smartresize", fn) : this.trigger("smartresize", ["execAsap"]);
      };
      $2.Mason = function(options, element) {
        this.element = $2(element);
        this._create(options);
        this._init();
      };
      var masonryContainerStyles = ["position", "height"];
      $2.Mason.settings = {
        isResizable: true,
        isAnimated: false,
        animationOptions: {
          queue: false,
          duration: 500
        },
        gutterWidth: 0,
        isRTL: false,
        isFitWidth: false
      };
      $2.Mason.prototype = {
        _filterFindBricks: function($elems) {
          var selector = this.options.itemSelector;
          return !selector ? $elems : $elems.filter(selector).add($elems.find(selector));
        },
        _getBricks: function($elems) {
          var $bricks = this._filterFindBricks($elems).css({position: "absolute"}).addClass("masonry-brick");
          return $bricks;
        },
        _create: function(options) {
          this.options = $2.extend(true, {}, $2.Mason.settings, options);
          this.styleQueue = [];
          this.reloadItems();
          var elemStyle = this.element[0].style;
          this.originalStyle = {};
          for (var i = 0, len = masonryContainerStyles.length; i < len; i++) {
            var prop = masonryContainerStyles[i];
            this.originalStyle[prop] = elemStyle[prop] || "";
          }
          this.element.css({
            position: "relative"
          });
          this.horizontalDirection = this.options.isRTL ? "right" : "left";
          this.offset = {};
          var $cursor = $2(document.createElement("div"));
          this.element.prepend($cursor);
          this.offset.y = Math.round($cursor.position().top);
          if (!this.options.isRTL) {
            this.offset.x = Math.round($cursor.position().left);
          } else {
            $cursor.css({float: "right", display: "inline-block"});
            this.offset.x = Math.round(this.element.outerWidth() - $cursor.position().left);
          }
          $cursor.remove();
          var instance = this;
          setTimeout(function() {
            instance.element.addClass("masonry");
          }, 0);
          if (this.options.isResizable) {
            $2(window2).bind("smartresize.masonry", function() {
              instance.resize();
            });
          }
        },
        _init: function(callback) {
          this._getColumns();
          this._reLayout(callback);
        },
        option: function(key, value) {
          if ($2.isPlainObject(key)) {
            this.options = $2.extend(true, this.options, key);
          }
        },
        layout: function($bricks, callback) {
          var $brick, colSpan, groupCount, groupY, groupColY, j;
          for (var i = 0, len = $bricks.length; i < len; i++) {
            $brick = $2($bricks[i]);
            colSpan = Math.ceil($brick.outerWidth(true) / this.columnWidth);
            colSpan = Math.min(colSpan, this.cols);
            if (colSpan === 1) {
              this._placeBrick($brick, this.colYs);
            } else {
              groupCount = this.cols + 1 - colSpan;
              groupY = [];
              for (j = 0; j < groupCount; j++) {
                groupColY = this.colYs.slice(j, j + colSpan);
                groupY[j] = Math.max.apply(Math, groupColY);
              }
              this._placeBrick($brick, groupY);
            }
          }
          var containerSize = {};
          containerSize.height = Math.max.apply(Math, this.colYs) - this.offset.y;
          if (this.options.isFitWidth) {
            var unusedCols = 0, i = this.cols;
            while (--i) {
              if (this.colYs[i] !== this.offset.y) {
                break;
              }
              unusedCols++;
            }
            containerSize.width = (this.cols - unusedCols) * this.columnWidth - this.options.gutterWidth;
          }
          this.styleQueue.push({$el: this.element, style: containerSize});
          var styleFn = !this.isLaidOut ? "css" : this.options.isAnimated ? "animate" : "css", animOpts = this.options.animationOptions;
          var obj;
          for (i = 0, len = this.styleQueue.length; i < len; i++) {
            obj = this.styleQueue[i];
            obj.$el[styleFn](obj.style, animOpts);
          }
          this.styleQueue = [];
          if (callback) {
            callback.call($bricks);
          }
          this.isLaidOut = true;
        },
        _getColumns: function() {
          var container = this.options.isFitWidth ? this.element.parent() : this.element, containerWidth = container.width();
          this.columnWidth = this.options.columnWidth || this.$bricks.outerWidth(true) || containerWidth;
          this.columnWidth += this.options.gutterWidth;
          this.cols = Math.floor((containerWidth + this.options.gutterWidth) / this.columnWidth);
          this.cols = Math.max(this.cols, 1);
        },
        _placeBrick: function($brick, setY) {
          var minimumY = Math.min.apply(Math, setY), shortCol = 0;
          for (var i = 0, len = setY.length; i < len; i++) {
            if (setY[i] === minimumY) {
              shortCol = i;
              break;
            }
          }
          var position = {
            top: minimumY
          };
          position[this.horizontalDirection] = this.columnWidth * shortCol + this.offset.x;
          this.styleQueue.push({$el: $brick, style: position});
          var setHeight = minimumY + $brick.outerHeight(true), setSpan = this.cols + 1 - len;
          for (i = 0; i < setSpan; i++) {
            this.colYs[shortCol + i] = setHeight;
          }
        },
        resize: function() {
          var prevColCount = this.cols;
          this._getColumns();
          if (this.cols !== prevColCount) {
            this._reLayout();
          }
        },
        _reLayout: function(callback) {
          var i = this.cols;
          this.colYs = [];
          while (i--) {
            this.colYs.push(this.offset.y);
          }
          this.layout(this.$bricks, callback);
        },
        reloadItems: function() {
          this.$bricks = this._getBricks(this.element.children());
        },
        reload: function(callback) {
          this.reloadItems();
          this._init(callback);
        },
        appended: function($content, isAnimatedFromBottom, callback) {
          if (isAnimatedFromBottom) {
            this._filterFindBricks($content).css({top: this.element.height()});
            var instance = this;
            setTimeout(function() {
              instance._appended($content, callback);
            }, 1);
          } else {
            this._appended($content, callback);
          }
        },
        _appended: function($content, callback) {
          var $newBricks = this._getBricks($content);
          this.$bricks = this.$bricks.add($newBricks);
          this.layout($newBricks, callback);
        },
        remove: function($content) {
          this.$bricks = this.$bricks.not($content);
          $content.remove();
        },
        destroy: function() {
          this.$bricks.removeClass("masonry-brick").each(function() {
            this.style.position = "";
            this.style.top = "";
            this.style.left = "";
          });
          var elemStyle = this.element[0].style;
          for (var i = 0, len = masonryContainerStyles.length; i < len; i++) {
            var prop = masonryContainerStyles[i];
            elemStyle[prop] = this.originalStyle[prop];
          }
          this.element.unbind(".masonry").removeClass("masonry").removeData("masonry");
          $2(window2).unbind(".masonry");
        }
      };
      /*!
       * jQuery imagesLoaded plugin v1.0.3
       * http://github.com/desandro/imagesloaded
       *
       * MIT License. by Paul Irish et al.
       */
      $2.fn.imagesLoaded = function(callback) {
        var $this = this, $images = $this.find("img").add($this.filter("img")), len = $images.length, blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        function triggerCallback() {
          callback.call($this, $images);
        }
        function imgLoaded() {
          if (--len <= 0 && this.src !== blank) {
            setTimeout(triggerCallback);
            $images.unbind("load error", imgLoaded);
          }
        }
        if (!len) {
          triggerCallback();
        }
        $images.bind("load error", imgLoaded).each(function() {
          if (this.complete || this.complete === undefined2) {
            var src = this.src;
            this.src = blank;
            this.src = src;
          }
        });
        return $this;
      };
      var logError = function(message) {
        if (this.console) {
          console.error(message);
        }
      };
      $2.fn.masonry = function(options) {
        if (typeof options === "string") {
          var args = Array.prototype.slice.call(arguments, 1);
          this.each(function() {
            var instance = $2.data(this, "masonry");
            if (!instance) {
              logError("cannot call methods on masonry prior to initialization; attempted to call method '" + options + "'");
              return;
            }
            if (!$2.isFunction(instance[options]) || options.charAt(0) === "_") {
              logError("no such method '" + options + "' for masonry instance");
              return;
            }
            instance[options].apply(instance, args);
          });
        } else {
          this.each(function() {
            var instance = $2.data(this, "masonry");
            if (instance) {
              instance.option(options || {});
              instance._init();
            } else {
              $2.data(this, "masonry", new $2.Mason(options, this));
            }
          });
        }
        return this;
      };
    })(window, jQuery);
  });

  // assets/js/script.js
  var require_script = __commonJS(() => {
  });

  // main.js
  require_modernizr();
  window.$ = window.jQuery = require_jquery();
  require_jquery_ui();
  require_lightgallery();
  require_jquery_pjax();
  Spinner = require_spin();
  bootstrap = require_bootstrap();
  require_jquery_masonry();
  require_script();
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
            a.prev = $('<a class="pagination-newer carousel-control-prev" href="#features-carousel" role="button" data-slide="prev">&#x25C0;</a>'), a.next = $('<a class="pagination-older carousel-control-next" href="#features-carousel" role="button" data-slide="next">&#x25B6;</a>'), a.arrows = $('<div class="pagination pagination-slideshow" />').append(a.prev).append(a.next), l = a.list.find(".item").length, f = $('<div class="navigation" />');
            while (l--)
              h = $("<em />").html("•").attr("data-index", a.list.find(".item").length - l - 1).attr("data-slide-to", a.list.find(".item").length - l - 1), h.on("click", function(a2) {
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
    }
  };
  paper.Notebook = function(a, b) {
    this.container = a, $(this.container).hide(), this.pages = [], this.currentPage = 0, this.permalink = this.container.getAttribute("data-permalink"), this.settings = b || {}, this.settings.useRotation !== false && (this.settings.useRotation = true), this.settings.xMovement !== false && (this.settings.xMovement = true), this.settings.xMovement !== false && (this.settings.yMovement = true), this.setMaximumHeight(), this.extractSourcesFromContainer(), this.writeMarkup(), this.appendElement(), $(this.container).show();
  };
  paper.Notebook.prototype = {
    setMaximumHeight: function() {
      return $("body").hasClass("show") ? this.max_height = 475 : $(this.container).parents("#features").length > 0 ? this.max_height = 400 : this.max_height = 400;
    },
    extractSourcesFromContainer: function() {
      var a, b, c;
      b = this.container.querySelectorAll("img"), this.sources = [], a = b.length, c = [];
      while (a--)
        c.push(this.sources.push(b[a].src));
      return c;
    },
    setImageHeights: function(a, b, c, d, e, f) {
      return $("<img>").attr("src", a).on("load", function() {
        var a2, g, h, i;
        g = Math.round($(b).width() * this.height / this.width), h = $(b).width(), a2 = (i = $(c).parents(".feature_content").length > 0) != null ? i : {
          true: false
        }, g > f && (g = f, h = Math.round(this.width * g / this.height)), $(b).css({
          height: g,
          width: h
        }).attr("data-height", g).attr("data-width", h), g > parseInt($(c).attr("data-height")) && $(c).attr("data-height", g), h > parseInt($(c).attr("data-width")) && $(c).attr("data-width", h), d && ($(c).css("height", $(c).attr("data-height")), $(c).width() > parseInt($(c).attr("data-width")) && $(c).attr("data-width", $(c).width()), a2 && $(c).css("width", $(c).attr("data-width")), $(c).find("div").each(function() {
          var a3, b2;
          return b2 = Math.round(($(c).attr("data-height") - $(this).attr("data-height")) / 2), a3 = Math.round(($(c).attr("data-width") - $(this).attr("data-width")) / 2), $(this).css({
            marginTop: b2,
            marginLeft: a3
          });
        }));
        if (d && e)
          return paper.$posts.masonry();
      });
    },
    writeMarkup: function() {
      var a, b, c, d, e;
      this.element = document.createElement("div"), this.element.className = "notebook", this.element.id = "notebook_" + parseInt(Math.random() * 1e5), this.element.setAttribute("data-height", 0), this.element.setAttribute("data-width", 0), a = this.sources.length, e = [];
      while (a--)
        c = document.createElement("div"), c.style.backgroundImage = "url(" + this.sources[a] + ")", b = (d = a === 0) != null ? d : {
          true: false
        }, this.setImageHeights(this.sources[a], c, this.element, b, this.settings.lastNotebook, this.max_height), c.className = "notebook-page page-style-" + parseInt(Math.random() * 5), c.setAttribute("data-page", this.sources.length - a), c.style.zIndex = a + 1e3, this.pages.push(c), this.element.appendChild(c), c.addEventListener("touchstart", this, false), c.addEventListener("touchmove", this, false), c.addEventListener("touchend", this, false), c.addEventListener("click", this, false), Modernizr.touch ? e.push(void 0) : e.push(this.dragify(c));
      return e;
    },
    appendElement: function() {
      return this.container.innerHTML = "", this.container.appendChild(this.element);
    },
    dragify: function(a) {
      var b = this;
      return $(a).draggable({
        scroll: false,
        start: function(a2) {
          return b.onDragStart(a2);
        },
        drag: function(a2) {
          return b.onDragMove(a2);
        },
        stop: function(a2) {
          return b.onDragEnd(a2);
        }
      });
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
          return this.onClick(a);
      }
    },
    onTouchStart: function(a) {
      var b;
      a.preventDefault(), this.target = a.target, b = this.target.style, b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s", this.start = {
        pageX: a.touches[0].pageX,
        pageY: a.touches[0].pageY,
        time: Number(new Date())
      }, this.deltaX = 0, this.deltaY = 0, this.originalTransform = $(this.target).css("-webkit-transform");
      if (this.settings.parent != null)
        return this.settings.parent.addClass("dragging");
    },
    onTouchMove: function(a) {
      var b;
      return a.touches.length > 1 || a.scale && a.scale !== 1 ? true : (a.preventDefault(), a.stopPropagation(), this.settings.xMovement && (this.deltaX = a.touches[0].pageX - this.start.pageX), this.settings.yMovement && (this.deltaY = a.touches[0].pageY - this.start.pageY), b = this.target.style, b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = this.originalTransform + (" translate(" + this.deltaX + "px, " + this.deltaY + "px)"));
    },
    onTouchEnd: function(a) {
      var b, c, d = this;
      this.distance = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY), this.deltaT = Number(new Date()) - this.start.time, this.rect = this.element.getBoundingClientRect(), this.width = this.rect.right - this.rect.left, this.height = this.rect.bottom - this.rect.top, c = this.target.style, c.webkitTransitionProperty = c.MozTransitionProperty = c.msTransitionProperty = c.OTransitionProperty = c.transitionProperty = "all", c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = ".4s", c.webkitTransform = c.MozTransform = c.msTransform = c.OTransform = c.transform = "rotate(0deg)", this.target.style.top = this.target.style.left = "", window.setTimeout(function() {
        if (d.settings.parent != null)
          return d.settings.parent.removeClass("dragging");
      }, 400), b = Math.abs(this.deltaY) > this.height / 2 || Math.abs(this.deltaX) > this.width / 2 || this.distance > 20 && this.deltaT < 250;
      if (b)
        return this.flip();
      if (this.deltaT < 500 && this.distance < 2 && !$("body").hasClass("show"))
        return window.location.href = this.permalink;
    },
    onDragStart: function(a) {
      var b;
      this.dragged = true, this.target = a.target, b = this.target.style, b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s", this.start = {
        pageX: a.pageX,
        pageY: a.pageY,
        time: Number(new Date())
      }, this.deltaX = 0, this.deltaY = 0;
      if (this.settings.parent != null)
        return this.settings.parent.addClass("dragging");
    },
    onDragMove: function(a) {
      return this.settings.parent != null && this.settings.parent.addClass("dragging"), this.deltaX = a.pageX - this.start.pageX, this.deltaY = a.pageY - this.start.pageY;
    },
    onDragEnd: function(a) {
      return this.onTouchEnd(a);
    },
    onClick: function(a) {
      if (this.dragged)
        return this.dragged = false, true;
      if (!$("body").hasClass("show"))
        return window.location.href = this.permalink;
    },
    flip: function() {
      var a, b, c, d, e, f, g, h, i = this;
      return d = this.deltaY / this.distance, b = this.deltaX / this.distance, c = this.distance, a = (this.width > this.height ? this.width : this.height) * 1.2, f = Math.floor(a * b), g = Math.floor(a * d), h = 0.2, e = this.target.style, e.webkitTransitionDuration = e.MozTransitionDuration = e.msTransitionDuration = e.OTransitionDuration = e.transitionDuration = h + "s", Modernizr.touch ? e.webkitTransform = e.MozTransform = e.msTransform = e.OTransform = e.transform = "translate(" + f + "px," + g + "px)" : (e.left = f + "px", e.top = g + "px"), window.setTimeout(function() {
        return i.afterFlip();
      }, h * 1e3);
    },
    afterFlip: function() {
      var a, b, c, d, e;
      a = this.pages.length, this.currentPage += 1, this.currentPage === a && (this.currentPage = 0), e = [];
      while (a--)
        c = this.pages[a], b = parseInt(c.style.zIndex) + 1, d = c.style, c.style.zIndex = b < this.pages.length + 1e3 ? b : 1e3, e.push(d.top = d.left = d.webkitTransform = d.MozTransform = d.msTransform = d.OTransform = d.transform = "");
      return e;
    }
  };
  paper.MovablePage = function(a, b) {
    switch (typeof a) {
      case "string":
        this.element = document.querySelector(a);
        break;
      case "object":
        this.element = a;
    }
    if (!this.element || !$.support.pjax)
      return null;
    b || (b = {}), this.nextSelector = b.nextSelector || "a.pagination-older", this.prevSelector = b.prevSelector || "a.pagination-newer", this.fragmentSelector = b.fragmentSelector || "#posts", this.activateArrows(), this.element.addEventListener("touchstart", this, false), this.element.addEventListener("touchmove", this, false), this.element.addEventListener("touchend", this, false);
  };
  paper.MovablePage.prototype = {
    next: function() {
      var a;
      return a = this.element.style, a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = this.getVelocityAdjustedTransitionDuration() / 1e3 + "s", a.webkitTransitionProperty = a.MozTransitionProperty = a.msTransitionProperty = a.OTransitionProperty = a.transitionProperty = "all", a.webkitTransform = a.MozTransform = a.msTransform = a.OTransform = a.transform = "translate3d(-100%,0,0)", a.opacity = "0", this.load(this.nextLink.href);
    },
    prev: function() {
      var a;
      return a = this.element.style, a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = this.getVelocityAdjustedTransitionDuration() / 1e3 + "s", a.webkitTransitionProperty = a.MozTransitionProperty = a.msTransitionProperty = a.OTransitionProperty = a.transitionProperty = "all", a.webkitTransform = a.MozTransform = a.msTransform = a.OTransform = a.transform = "translate3d(100%,0,0)", a.opacity = "0", this.load(this.prevLink.href);
    },
    getVelocityAdjustedTransitionDuration: function() {
      var a, b, c;
      return this.start == null ? 300 : (this.deltaT = Number(new Date()) - this.start.time, c = Math.abs(this.deltaX / this.deltaT), a = $(window).width() - Math.abs(this.deltaX), b = Math.abs(this.deltaT * a / this.deltaX), b > 500 && (b = 500), b);
    },
    load: function(a) {
      var b = this;
      return window.setTimeout(function() {
        return $ && $.support.pjax ? $.pjax({
          container: b.fragmentSelector,
          fragment: b.fragmentSelector,
          url: a,
          timeout: 2e3,
          success: function(a2) {
            var c, d, e;
            return e = b.element.style, e.webkitTransitionProperty = e.MozTransitionProperty = e.msTransitionProperty = e.OTransitionProperty = e.transitionProperty = "opacity", e.opacity = "1", e.webkitTransform = e.MozTransform = e.msTransform = e.OTransform = e.transform = "", d = $(a2).find(".pagination"), c = $(a2).find("ol.notes"), $(".note-wrap").html(c), $("#pagination-posts").replaceWith(d), b.activateArrows(), paper.setup();
          }
        }) : window.location.href = a;
      }, this.getVelocityAdjustedTransitionDuration());
    },
    activateArrows: function() {
      var a = this;
      this.nextLink = document.querySelector(this.nextSelector), this.prevLink = document.querySelector(this.prevSelector), this.nextLink != null && (this.nextLink.onclick = function(b) {
        return b.preventDefault(), a.next();
      }, this.nextPost = $("<div />").hide().load(this.nextLink.href + " " + this.fragmentSelector));
      if (this.prevLink != null)
        return this.prevLink.onclick = function(b) {
          return b.preventDefault(), a.prev();
        }, this.prevPost = $("<div />").hide().load(this.prevLink.href + " " + this.fragmentSelector);
    },
    handleEvent: function(a) {
      switch (a.type) {
        case "touchstart":
          return this.onTouchStart(a);
        case "touchmove":
          return this.onTouchMove(a);
        case "touchend":
          return this.onTouchEnd(a);
      }
    },
    onTouchStart: function(a) {
      var b;
      return b = this.element.style, b.webkitTransitionProperty = b.MozTransitionProperty = b.msTransitionProperty = b.OTransitionProperty = b.transitionProperty = "all", b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = "0s", this.start = {
        pageX: a.touches[0].pageX,
        pageY: a.touches[0].pageY,
        time: Number(new Date())
      }, this.deltaX = 0, this.isScrolling = void 0;
    },
    onTouchMove: function(a) {
      var b;
      if (a.touches.length > 1 || a.scale && a.scale !== 1)
        return true;
      this.deltaX = a.touches[0].pageX - this.start.pageX, typeof this.isScrolling == "undefined" && (this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(a.touches[0].pageY - this.start.pageY)));
      if (!this.isScrolling)
        return a.preventDefault(), b = this.element.style, b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = "translate3d(" + this.deltaX + "px, 0, 0)";
    },
    onTouchEnd: function(a) {
      var b;
      return this.isScrolling ? true : (this.deltaX > 200 || this.deltaX > 20 && Number(new Date()) - this.start.time < 250) && this.prevLink != null ? this.prev() : (this.deltaX < -200 || this.deltaX < -20 && Number(new Date()) - this.start.time < 250) && this.nextLink != null ? this.next() : (b = this.element.style, b.webkitTransitionDuration = b.MozTransitionDuration = b.msTransitionDuration = b.OTransitionDuration = b.transitionDuration = ".5s", b.webkitTransform = b.MozTransform = b.msTransform = b.OTransform = b.transform = "");
    }
  };
  $(document).ready(function() {
    if (!$("body").hasClass("meta")) {
      window.paper = paper;
      paper.setup();
    }
    if ($("#post-wrap").hasClass("single")) {
      $(".photo-permalink-container").lightGallery({
        share: false,
        autoplay: false,
        autoplayControls: false,
        selector: ".post-image"
      });
      $(".photoset_wrap").lightGallery({
        share: false,
        autoplay: false,
        autoplayControls: false,
        selector: ".post-image"
      });
    }
  });
})();
