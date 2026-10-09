import $ from './jquery-globals.js';

// jquery-pjax and other legacy plugins rely on jQuery APIs that were removed in jQuery 4.0.
if (!$.isFunction) $.isFunction = function(fn) { return typeof fn === 'function'; };
if (!$.isArray) $.isArray = Array.isArray;
if (!$.trim) $.trim = function(text) {
    return text == null ? '' : String(text).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
if (!$.type) $.type = function(obj) {
    if (obj == null) return String(obj);
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

export default $;
