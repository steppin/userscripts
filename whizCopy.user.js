// ==UserScript==
// @name         whizCopy
// @namespace    https://github.com/steppin/userscripts
// @version      0.1
// @description  Enable cut and copy operations on whizlabs.com exams
// @author       Me
// @license      GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @match        https://learning.whizlabs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("body").off("contextmenu");
    $("body").unbind("cut copy");
})();
