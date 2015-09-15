!(function() {
  function jss(blocks) {
    var css = [];
    for (var block in blocks)
      css.push(createStyleBlock(block, blocks[block]));
    injectCSS(css);
  }

  function createStyleBlock(selector, rules) {
    return selector + ' {\n' + parseRules(rules) + '\n}';
  }

  function parseRules(rules) {
    var css = [];
    for (var rule in rules)
      css.push('  '+rule+': '+rules[rule]+';');
    return css.join('\n');
  }

  function injectCSS(css) {
    css = css.join('\n\n');
    var style = document.getElementById('jss-styles');
    if (!style) {
      style = document.createElement('style');
      style.setAttribute('id', 'jss-styles');
      style.setAttribute('type', 'text/css');
      var head = document.getElementsByTagName('head')[0];
      head.insertBefore(style, head.firstChild);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      var node = document.createTextNode(css);
      style.appendChild(node);
    }
  }

  if (typeof exports === 'object')
    module.exports = jss;
  else
    window.jss = jss;

})();
