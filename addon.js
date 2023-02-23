// ==UserScript==
// @name         YouTube to Yewtu
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Changes all instances of "youtube.de" to "yewtu.be"
// @author       Your Name
// @match        https://*.youtube.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.innerHTML = document.body.innerHTML.replace(/youtube\.de/g, 'yewtu.be');
})();