// ==UserScript==
// @name        openwow-to-sunwelldb
// @namespace   test
// @include *
// @version     1
// @grant       none
// ==/UserScript==

var links = document.getElementsByTagName('a');
var regexFull = /wotlk\.openwow\.com\/(.*)$/i;
for (var i = 0; i < links.length; i++) {
  links[i].href = links[i].href.replace(regexFull, 'db.darkwizard.pl/?$1');
}
