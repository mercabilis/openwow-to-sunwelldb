// == UserScript ==
// @name OpenWoW fix (SunwellDB)
// @namespace openwow-to-sunwelldb
// @description Fix the old openwow database links to sunwelldb
// @version 1
// @updateURL https://raw.githubusercontent.com/mercabilis/openwow-to-sunwelldb/master/openwow-to-sunwelldb.js
// @downloadURL https://raw.githubusercontent.com/mercabilis/openwow-to-sunwelldb/master/openwow-to-sunwelldb.js
// @include *
// @grant none
// == / UserScript ==

var links = document.getElementsByTagName('a');
var regexFull = /wotlk\.openwow\.com\/(.*)$/i;
for (var i = 0; i < links.length; i++) {
  links[i].href = links[i].href.replace(regexFull, 'db.darkwizard.pl/?$1');
}
