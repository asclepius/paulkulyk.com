/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
  function addIcon(el, entity) {
    var html = el.innerHTML;
    el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
  }
  var icons = {
      'icon-twitter' : '&#xe000;',
      'icon-github' : '&#xe004;',
      'icon-github-2' : '&#xe005;',
      'icon-github-3' : '&#xe006;',
      'icon-git' : '&#xe007;',
      'icon-github-4' : '&#xe008;',
      'icon-feed' : '&#xe009;',
      'icon-feed-2' : '&#xe00a;',
      'icon-google-plus' : '&#xe010;',
      'icon-google-plus-2' : '&#xe011;',
      'icon-gplus' : '&#xe012;',
      'icon-linkedin' : '&#xe013;',
      'icon-linkedin-2' : '&#xe014;',
      'icon-books' : '&#xe002;',
      'icon-twitter-2' : '&#xe003;',
      'icon-twitter-3' : '&#xe001;',
      'icon-feed-3' : '&#xe00b;',
      'icon-pencil' : '&#xe00c;',
      'icon-pencil-2' : '&#xe00d;',
      'icon-pencil-3' : '&#xe00e;',
      'icon-pencil-4' : '&#xe00f;',
      'icon-pencil-5' : '&#xe015;',
      'icon-pen' : '&#xe016;',
      'icon-pen-2' : '&#xe017;',
      'icon-pen-3' : '&#xe018;',
      'icon-blog' : '&#xe019;',
      'icon-blog-2' : '&#xe01a;',
      'icon-pen-4' : '&#xe01b;',
      'icon-feather' : '&#xe01c;',
      'icon-info' : '&#xe01d;',
      'icon-info-2' : '&#xe01e;',
      'icon-search' : '&#xe01f;',
      'icon-search-2' : '&#xe020;',
      'icon-search-3' : '&#xe021;',
      'icon-search-4' : '&#xe022;',
      'icon-cc' : '&#xe023;'
    },
    els = document.getElementsByTagName('*'),
    i, attr, html, c, el;
  for (i = 0; i < els.length; i += 1) {
    el = els[i];
    attr = el.getAttribute('data-icon');
    if (attr) {
      addIcon(el, attr);
    }
    c = el.className;
    c = c.match(/icon-[^\s'"]+/);
    if (c && icons[c[0]]) {
      addIcon(el, icons[c[0]]);
    }
  }
};