// ==UserScript==
// @name         YouTube to Yewtu Redirect
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirects all YouTube links to their corresponding Yewtu.be links
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName("a");
    var len = links.length;

    for (var i = 0; i < len; i++) {
        var link = links[i];

        if (link.href.includes("youtube.com") || link.href.includes("youtu.be")) {
            link.href = link.href.replace("youtube.com", "yewtu.be");
            link.href = link.href.replace("youtu.be", "yewtu.be");
        }
    }
})();
