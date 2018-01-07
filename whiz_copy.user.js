// ==UserScript==
// @name         whiz_copy
// @namespace    https://github.com/steppin/userscripts
// @version      0.1
// @description  Enable cut and copy operations on whizlabs.com exams
// @author       Me
// @license      GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @match        https://learning.whizlabs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("body").off("contextmenu");
    $("body").unbind("cut copy");
})();
