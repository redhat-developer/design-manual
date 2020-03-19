/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+css-extras+git+json+liquid+markdown+scss+toml+yaml&plugins=line-numbers+show-language+toolbar+copy-to-clipboard */
var _self = (typeof window !== 'undefined')
  ? window   // if in browser
  : (
    (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
    ? self // if in worker
    : {}   // if in node js
  );

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
  manual: _self.Prism && _self.Prism.manual,
  disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
  util: {
    encode: function encode(tokens) {
      if (tokens instanceof Token) {
        return new Token(tokens.type, encode(tokens.content), tokens.alias);
      } else if (Array.isArray(tokens)) {
        return tokens.map(encode);
      } else {
        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
      }
    },

    type: function (o) {
      return Object.prototype.toString.call(o).slice(8, -1);
    },

    objId: function (obj) {
      if (!obj['__id']) {
        Object.defineProperty(obj, '__id', { value: ++uniqueId });
      }
      return obj['__id'];
    },

    // Deep clone a language definition (e.g. to extend it)
    clone: function deepClone(o, visited) {
      var clone, id, type = _.util.type(o);
      visited = visited || {};

      switch (type) {
        case 'Object':
          id = _.util.objId(o);
          if (visited[id]) {
            return visited[id];
          }
          clone = {};
          visited[id] = clone;

          for (var key in o) {
            if (o.hasOwnProperty(key)) {
              clone[key] = deepClone(o[key], visited);
            }
          }

          return clone;

        case 'Array':
          id = _.util.objId(o);
          if (visited[id]) {
            return visited[id];
          }
          clone = [];
          visited[id] = clone;

          o.forEach(function (v, i) {
            clone[i] = deepClone(v, visited);
          });

          return clone;

        default:
          return o;
      }
    },

    /**
     * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
     *
     * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
     *
     * @param {Element} element
     * @returns {string}
     */
    getLanguage: function (element) {
      while (element && !lang.test(element.className)) {
        element = element.parentElement;
      }
      if (element) {
        return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
      }
      return 'none';
    },

    /**
     * Returns the script element that is currently executing.
     *
     * This does __not__ work for line script element.
     *
     * @returns {HTMLScriptElement | null}
     */
    currentScript: function () {
      if (typeof document === 'undefined') {
        return null;
      }
      if ('currentScript' in document) {
        return document.currentScript;
      }

      // IE11 workaround
      // we'll get the src of the current script by parsing IE11's error stack trace
      // this will not work for inline scripts

      try {
        throw new Error();
      } catch (err) {
        // Get file src url from stack. Specifically works with the format of stack traces in IE.
        // A stack will look like this:
        //
        // Error
        //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
        //    at Global code (http://localhost/components/prism-core.js:606:1)

        var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
        if (src) {
          var scripts = document.getElementsByTagName('script');
          for (var i in scripts) {
            if (scripts[i].src == src) {
              return scripts[i];
            }
          }
        }
        return null;
      }
    }
  },

  languages: {
    extend: function (id, redef) {
      var lang = _.util.clone(_.languages[id]);

      for (var key in redef) {
        lang[key] = redef[key];
      }

      return lang;
    },

    /**
     * Insert a token before another token in a language literal
     * As this needs to recreate the object (we cannot actually insert before keys in object literals),
     * we cannot just provide an object, we need an object and a key.
     * @param inside The key (or language id) of the parent
     * @param before The key to insert before.
     * @param insert Object with the key/value pairs to insert
     * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
     */
    insertBefore: function (inside, before, insert, root) {
      root = root || _.languages;
      var grammar = root[inside];
      var ret = {};

      for (var token in grammar) {
        if (grammar.hasOwnProperty(token)) {

          if (token == before) {
            for (var newToken in insert) {
              if (insert.hasOwnProperty(newToken)) {
                ret[newToken] = insert[newToken];
              }
            }
          }

          // Do not insert token which also occur in insert. See #1525
          if (!insert.hasOwnProperty(token)) {
            ret[token] = grammar[token];
          }
        }
      }

      var old = root[inside];
      root[inside] = ret;

      // Update references in other language definitions
      _.languages.DFS(_.languages, function(key, value) {
        if (value === old && key != inside) {
          this[key] = ret;
        }
      });

      return ret;
    },

    // Traverse a language definition with Depth First Search
    DFS: function DFS(o, callback, type, visited) {
      visited = visited || {};

      var objId = _.util.objId;

      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          callback.call(o, i, o[i], type || i);

          var property = o[i],
              propertyType = _.util.type(property);

          if (propertyType === 'Object' && !visited[objId(property)]) {
            visited[objId(property)] = true;
            DFS(property, callback, null, visited);
          }
          else if (propertyType === 'Array' && !visited[objId(property)]) {
            visited[objId(property)] = true;
            DFS(property, callback, i, visited);
          }
        }
      }
    }
  },
  plugins: {},

  highlightAll: function(async, callback) {
    _.highlightAllUnder(document, async, callback);
  },

  highlightAllUnder: function(container, async, callback) {
    var env = {
      callback: callback,
      container: container,
      selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
    };

    _.hooks.run('before-highlightall', env);

    env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

    _.hooks.run('before-all-elements-highlight', env);

    for (var i = 0, element; element = env.elements[i++];) {
      _.highlightElement(element, async === true, env.callback);
    }
  },

  highlightElement: function(element, async, callback) {
    // Find language
    var language = _.util.getLanguage(element);
    var grammar = _.languages[language];

    // Set language on the element, if not present
    element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

    // Set language on the parent, for styling
    var parent = element.parentNode;
    if (parent && parent.nodeName.toLowerCase() === 'pre') {
      parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
    }

    var code = element.textContent;

    var env = {
      element: element,
      language: language,
      grammar: grammar,
      code: code
    };

    function insertHighlightedCode(highlightedCode) {
      env.highlightedCode = highlightedCode;

      _.hooks.run('before-insert', env);

      env.element.innerHTML = env.highlightedCode;

      _.hooks.run('after-highlight', env);
      _.hooks.run('complete', env);
      callback && callback.call(env.element);
    }

    _.hooks.run('before-sanity-check', env);

    if (!env.code) {
      _.hooks.run('complete', env);
      callback && callback.call(env.element);
      return;
    }

    _.hooks.run('before-highlight', env);

    if (!env.grammar) {
      insertHighlightedCode(_.util.encode(env.code));
      return;
    }

    if (async && _self.Worker) {
      var worker = new Worker(_.filename);

      worker.onmessage = function(evt) {
        insertHighlightedCode(evt.data);
      };

      worker.postMessage(JSON.stringify({
        language: env.language,
        code: env.code,
        immediateClose: true
      }));
    }
    else {
      insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
    }
  },

  highlight: function (text, grammar, language) {
    var env = {
      code: text,
      grammar: grammar,
      language: language
    };
    _.hooks.run('before-tokenize', env);
    env.tokens = _.tokenize(env.code, env.grammar);
    _.hooks.run('after-tokenize', env);
    return Token.stringify(_.util.encode(env.tokens), env.language);
  },

  matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }

      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];

      for (var j = 0; j < patterns.length; ++j) {
        if (target && target == token + ',' + j) {
          return;
        }

        var pattern = patterns[j],
          inside = pattern.inside,
          lookbehind = !!pattern.lookbehind,
          greedy = !!pattern.greedy,
          lookbehindLength = 0,
          alias = pattern.alias;

        if (greedy && !pattern.pattern.global) {
          // Without the global flag, lastIndex won't work
          var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
          pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
        }

        pattern = pattern.pattern || pattern;

        // Don’t cache length as it changes during the loop
        for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

          var str = strarr[i];

          if (strarr.length > text.length) {
            // Something went terribly wrong, ABORT, ABORT!
            return;
          }

          if (str instanceof Token) {
            continue;
          }

          if (greedy && i != strarr.length - 1) {
            pattern.lastIndex = pos;
            var match = pattern.exec(text);
            if (!match) {
              break;
            }

            var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
                to = match.index + match[0].length,
                k = i,
                p = pos;

            for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
              p += strarr[k].length;
              // Move the index i to the element in strarr that is closest to from
              if (from >= p) {
                ++i;
                pos = p;
              }
            }

            // If strarr[i] is a Token, then the match starts inside another Token, which is invalid
            if (strarr[i] instanceof Token) {
              continue;
            }

            // Number of tokens to delete and replace with the new match
            delNum = k - i;
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            pattern.lastIndex = 0;

            var match = pattern.exec(str),
              delNum = 1;
          }

          if (!match) {
            if (oneshot) {
              break;
            }

            continue;
          }

          if(lookbehind) {
            lookbehindLength = match[1] ? match[1].length : 0;
          }

          var from = match.index + lookbehindLength,
              match = match[0].slice(lookbehindLength),
              to = from + match.length,
              before = str.slice(0, from),
              after = str.slice(to);

          var args = [i, delNum];

          if (before) {
            ++i;
            pos += before.length;
            args.push(before);
          }

          var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

          args.push(wrapped);

          if (after) {
            args.push(after);
          }

          Array.prototype.splice.apply(strarr, args);

          if (delNum != 1)
            _.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);

          if (oneshot)
            break;
        }
      }
    }
  },

  tokenize: function(text, grammar) {
    var strarr = [text];

    var rest = grammar.rest;

    if (rest) {
      for (var token in rest) {
        grammar[token] = rest[token];
      }

      delete grammar.rest;
    }

    _.matchGrammar(text, strarr, grammar, 0, 0, false);

    return strarr;
  },

  hooks: {
    all: {},

    add: function (name, callback) {
      var hooks = _.hooks.all;

      hooks[name] = hooks[name] || [];

      hooks[name].push(callback);
    },

    run: function (name, env) {
      var callbacks = _.hooks.all[name];

      if (!callbacks || !callbacks.length) {
        return;
      }

      for (var i=0, callback; callback = callbacks[i++];) {
        callback(env);
      }
    }
  },

  Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
  this.type = type;
  this.content = content;
  this.alias = alias;
  // Copy of the full string this token was created from
  this.length = (matchedStr || '').length|0;
  this.greedy = !!greedy;
}

Token.stringify = function stringify(o, language) {
  if (typeof o == 'string') {
    return o;
  }
  if (Array.isArray(o)) {
    var s = '';
    o.forEach(function (e) {
      s += stringify(e, language);
    });
    return s;
  }

  var env = {
    type: o.type,
    content: stringify(o.content, language),
    tag: 'span',
    classes: ['token', o.type],
    attributes: {},
    language: language
  };

  var aliases = o.alias;
  if (aliases) {
    if (Array.isArray(aliases)) {
      Array.prototype.push.apply(env.classes, aliases);
    } else {
      env.classes.push(aliases);
    }
  }

  _.hooks.run('wrap', env);

  var attributes = '';
  for (var name in env.attributes) {
    attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
  }

  return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

if (!_self.document) {
  if (!_self.addEventListener) {
    // in Node.js
    return _;
  }

  if (!_.disableWorkerMessageHandler) {
    // In worker
    _self.addEventListener('message', function (evt) {
      var message = JSON.parse(evt.data),
        lang = message.language,
        code = message.code,
        immediateClose = message.immediateClose;

      _self.postMessage(_.highlight(code, _.languages[lang], lang));
      if (immediateClose) {
        _self.close();
      }
    }, false);
  }

  return _;
}

//Get current script and highlight
var script = _.util.currentScript();

if (script) {
  _.filename = script.src;

  if (script.hasAttribute('data-manual')) {
    _.manual = true;
  }
}

function highlightAutomaticallyCallback() {
  if (!_.manual) {
    _.highlightAll();
  }
}

if (!_.manual) {
  // If the document state is "loading", then we'll use DOMContentLoaded.
  // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
  // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
  // might take longer one animation frame to execute which can create a race condition where only some plugins have
  // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
  // See https://github.com/PrismJS/prism/issues/2102
  var readyState = document.readyState;
  if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
    document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
  } else {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(highlightAutomaticallyCallback);
    } else {
      window.setTimeout(highlightAutomaticallyCallback, 16);
    }
  }
}

return _;

})(_self);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
  global.Prism = Prism;
}
;
Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
    greedy: true
  },
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          'punctuation': [
            /^=/,
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true
            }
          ]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }

    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
  Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };

    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };

    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

(function (Prism) {

  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        }
        // See rest below
      }
    },
    'url': {
      pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };

  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

  var markup = Prism.languages.markup;
  if (markup) {
    markup.tag.addInlined('style', 'css');

    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }

}(Prism));

Prism.languages.clike = {
  'comment': [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }
  ],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [
    Prism.languages.clike['class-name'],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: true
    }
  ],
  'keyword': [
    {
      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
      lookbehind: true
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    },
  ],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [
    {
      pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  ],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;

(function (Prism) {

  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;

  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-:.\w]+/,
      'id': /#[-:.\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attribute': {
            pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
            lookbehind: true
          },
          'value': [
            string,
            {
              pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
              lookbehind: true
            }
          ],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: true,
          inside: {
            'number': /[\dn]+/,
            'operator': /[+-]/
          }
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: true
        }
      ],
      'punctuation': /[()]/
    }
  };

  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;

  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
      lookbehind: true
    }
  });

  var unit = {
    pattern: /(\d)(?:%|[a-z]+)/,
    lookbehind: true
  };
  // 123 -123 .123 -.123 12.3 -12.3
  var number = {
    pattern: /(^|[^\w.-])-?\d*\.?\d+/,
    lookbehind: true
  };

  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: 'color'
    },
    'color': [
      /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
      {
        pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          'unit': unit,
          'number': number,
          'function': /[\w-]+(?=\()/,
          'punctuation': /[(),]/
        }
      }
    ],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });

})(Prism);

Prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/m
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit_sha1': /^commit \w{40}$/m
};

Prism.languages.json = {
  'property': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: true
  },
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true
  },
  'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  'number': /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};

Prism.languages.liquid = {
  'keyword': /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
  'number': /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
  'operator': {
    pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
    lookbehind: true
  },
  'function': {
    pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
    lookbehind: true
  }
};

(function (Prism) {

  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;

  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @param {boolean} starAlternative Whether to also add an alternative where all `_`s are replaced with `*`s.
   * @returns {RegExp}
   */
  function createInline(pattern, starAlternative) {
    pattern = pattern.replace(/<inner>/g, inner);
    if (starAlternative) {
      pattern = pattern + '|' + pattern.replace(/_/g, '\\*');
    }
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }


  var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|$)/.source.replace(/__/g, tableCell);
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;


  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: true,
        alias: 'keyword'
      },
      {
        // `code`
        // ``code``
        pattern: /``.+?``|`[^`\r\n]+`/,
        alias: 'keyword'
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: true,
        inside: {
          'code-block': {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: true
          },
          'code-language': {
            pattern: /^(```).+/,
            lookbehind: true
          },
          'punctuation': /```/
        }
      }
    ],
    'title': [
      {
        // title 1
        // =======

        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: 'important',
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#+.+/m,
        lookbehind: true,
        alias: 'important',
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__

      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below
        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_

      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below
        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below
        },
        'punctuation': /~~?/
      }
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'variable': {
          pattern: /(\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'content': {
          pattern: /(^!?\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below
        },
        'string': {
          pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
        }
      }
    }
  });

  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }

        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */

        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock &&
          codeLang.type === 'code-language' && codeBlock.type === 'code-block' &&
          typeof codeLang.content === 'string') {

          // this might be a language that Prism does not support

          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp')
          // only use the first word
          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang;

          // add alias
          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });

  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';
    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;

        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      // reverse Prism.util.encode
      var code = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');

      env.content = Prism.highlight(code, grammar, codeLang);
    }
  });

  Prism.languages.md = Prism.languages.markdown;

}(Prism));

Prism.languages.scss = Prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/
      // See rest below
    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});

Prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [
    /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
    {
      pattern: /( +)(?:from|through)(?= )/,
      lookbehind: true
    }
  ]
});

Prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});

Prism.languages.insertBefore('scss', 'function', {
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: true
  }
});

Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;

(function (Prism) {

  // pattern: /(?:[\w-]+|'[^'\n\r]*'|"(?:\.|[^\\"\r\n])*")/
  var key = "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\.|[^\\\\\"\r\n])*\")";

  Prism.languages.toml = {
    'comment': {
      pattern: /#.*/,
      greedy: true
    },
    'table': {
      pattern: RegExp("(^\\s*\\[\\s*(?:\\[\\s*)?)" + key + "(?:\\s*\\.\\s*" + key + ")*(?=\\s*\\])", "m"),
      lookbehind: true,
      greedy: true,
      alias: 'class-name'
    },
    'key': {
      pattern: RegExp("(^\\s*|[{,]\\s*)" + key + "(?:\\s*\\.\\s*" + key + ")*(?=\\s*=)", "m"),
      lookbehind: true,
      greedy: true,
      alias: 'property'
    },
    'string': {
      pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    'date': [
      {
        // Offset Date-Time, Local Date-Time, Local Date
        pattern: /\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?/i,
        alias: 'number'
      },
      {
        // Local Time
        pattern: /\d{2}:\d{2}:\d{2}(?:\.\d+)?/i,
        alias: 'number'
      }
    ],
    'number': /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?(?:inf|nan)\b/,
    'boolean': /\b(?:true|false)\b/,
    'punctuation': /[.,=[\]{}]/
  };
}(Prism));

(function (Prism) {

  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/;
  // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property
  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)
  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|'
    + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)';

  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */
  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag
    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\s*#))/.source
      .replace(/<<prop>>/g, properties).replace(/<<value>>/g, value);
    return RegExp(pattern, flags)
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/.source
        .replace(/<<prop>>/g, properties)),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\]},#\s]+?(?=\s*:\s)/.source
        .replace(/<<prop>>/g, properties)),
      lookbehind: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/true|false/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      // \2 because of the lookbehind group
      pattern: createValuePattern(/("|')(?:(?!\2)[^\\\r\n]|\\.)*\2/.source),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };

  Prism.languages.yml = Prism.languages.yaml;

}(Prism));

(function () {

  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  /**
   * Plugin name which is used as a class name for <pre> which is activating the plugin
   * @type {String}
   */
  var PLUGIN_NAME = 'line-numbers';

  /**
   * Regular expression used for determining line breaks
   * @type {RegExp}
   */
  var NEW_LINE_EXP = /\n(?!$)/g;

  /**
   * Resizes line numbers spans according to height of line of code
   * @param {Element} element <pre> element
   */
  var _resizeElement = function (element) {
    var codeStyles = getStyles(element);
    var whiteSpace = codeStyles['white-space'];

    if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
      var codeElement = element.querySelector('code');
      var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
      var lineNumberSizer = element.querySelector('.line-numbers-sizer');
      var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

      if (!lineNumberSizer) {
        lineNumberSizer = document.createElement('span');
        lineNumberSizer.className = 'line-numbers-sizer';

        codeElement.appendChild(lineNumberSizer);
      }

      lineNumberSizer.style.display = 'block';

      codeLines.forEach(function (line, lineNumber) {
        lineNumberSizer.textContent = line || '\n';
        var lineSize = lineNumberSizer.getBoundingClientRect().height;
        lineNumbersWrapper.children[lineNumber].style.height = lineSize + 'px';
      });

      lineNumberSizer.textContent = '';
      lineNumberSizer.style.display = 'none';
    }
  };

  /**
   * Returns style declarations for the element
   * @param {Element} element
   */
  var getStyles = function (element) {
    if (!element) {
      return null;
    }

    return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
  };

  window.addEventListener('resize', function () {
    Array.prototype.forEach.call(document.querySelectorAll('pre.' + PLUGIN_NAME), _resizeElement);
  });

  Prism.hooks.add('complete', function (env) {
    if (!env.code) {
      return;
    }

    var code = env.element;
    var pre = code.parentNode;

    // works only for <code> wrapped inside <pre> (not inline)
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    // Abort if line numbers already exists
    if (code.querySelector('.line-numbers-rows')) {
      return;
    }

    var addLineNumbers = false;
    var lineNumbersRegex = /(?:^|\s)line-numbers(?:\s|$)/;

    for (var element = code; element; element = element.parentNode) {
      if (lineNumbersRegex.test(element.className)) {
        addLineNumbers = true;
        break;
      }
    }

    // only add line numbers if <code> or one of its ancestors has the `line-numbers` class
    if (!addLineNumbers) {
      return;
    }

    // Remove the class 'line-numbers' from the <code>
    code.className = code.className.replace(lineNumbersRegex, ' ');
    // Add the class 'line-numbers' to the <pre>
    if (!lineNumbersRegex.test(pre.className)) {
      pre.className += ' line-numbers';
    }

    var match = env.code.match(NEW_LINE_EXP);
    var linesNum = match ? match.length + 1 : 1;
    var lineNumbersWrapper;

    var lines = new Array(linesNum + 1).join('<span></span>');

    lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.setAttribute('aria-hidden', 'true');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.innerHTML = lines;

    if (pre.hasAttribute('data-start')) {
      pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
    }

    env.element.appendChild(lineNumbersWrapper);

    _resizeElement(pre);

    Prism.hooks.run('line-numbers', env);
  });

  Prism.hooks.add('line-numbers', function (env) {
    env.plugins = env.plugins || {};
    env.plugins.lineNumbers = true;
  });

  /**
   * Global exports
   */
  Prism.plugins.lineNumbers = {
    /**
     * Get node for provided line number
     * @param {Element} element pre element
     * @param {Number} number line number
     * @return {Element|undefined}
     */
    getLine: function (element, number) {
      if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
        return;
      }

      var lineNumberRows = element.querySelector('.line-numbers-rows');
      var lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1;
      var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);

      if (number < lineNumberStart) {
        number = lineNumberStart;
      }
      if (number > lineNumberEnd) {
        number = lineNumberEnd;
      }

      var lineIndex = number - lineNumberStart;

      return lineNumberRows.children[lineIndex];
    }
  };

}());

(function(){
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  var callbacks = [];
  var map = {};
  var noop = function() {};

  Prism.plugins.toolbar = {};

  /**
   * @typedef ButtonOptions
   * @property {string} text The text displayed.
   * @property {string} [url] The URL of the link which will be created.
   * @property {Function} [onClick] The event listener for the `click` event of the created button.
   * @property {string} [className] The class attribute to include with element.
   */

  /**
   * Register a button callback with the toolbar.
   *
   * @param {string} key
   * @param {ButtonOptions|Function} opts
   */
  var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
    var callback;

    if (typeof opts === 'function') {
      callback = opts;
    } else {
      callback = function (env) {
        var element;

        if (typeof opts.onClick === 'function') {
          element = document.createElement('button');
          element.type = 'button';
          element.addEventListener('click', function () {
            opts.onClick.call(this, env);
          });
        } else if (typeof opts.url === 'string') {
          element = document.createElement('a');
          element.href = opts.url;
        } else {
          element = document.createElement('span');
        }

        if (opts.className) {
          element.classList.add(opts.className);
        }

        element.textContent = opts.text;

        return element;
      };
    }

    if (key in map) {
      console.warn('There is a button with the key "' + key + '" registered already.');
      return;
    }

    callbacks.push(map[key] = callback);
  };

  /**
   * Returns the callback order of the given element.
   *
   * @param {HTMLElement} element
   * @returns {string[] | undefined}
   */
  function getOrder(element) {
    while (element) {
      var order = element.getAttribute('data-toolbar-order');
      if (order != null) {
        order = order.trim();
        if (order.length) {
          return order.split(/\s*,\s*/g);
        } else {
          return [];
        }
      }
      element = element.parentElement;
    }
  }

  /**
   * Post-highlight Prism hook callback.
   *
   * @param env
   */
  var hook = Prism.plugins.toolbar.hook = function (env) {
    // Check if inline or actual code block (credit to line-numbers plugin)
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    // Autoloader rehighlights, so only do this once.
    if (pre.parentNode.classList.contains('code-toolbar')) {
      return;
    }

    // Create wrapper for <pre> to prevent scrolling toolbar with content
    var wrapper = document.createElement('div');
    wrapper.classList.add('code-toolbar');
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Setup the toolbar
    var toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');

    // order callbacks
    var elementCallbacks = callbacks;
    var order = getOrder(env.element);
    if (order) {
      elementCallbacks = order.map(function (key) {
        return map[key] || noop;
      });
    }

    elementCallbacks.forEach(function(callback) {
      var element = callback(env);

      if (!element) {
        return;
      }

      var item = document.createElement('div');
      item.classList.add('toolbar-item');

      item.appendChild(element);
      toolbar.appendChild(item);
    });

    // Add our toolbar to the currently created wrapper of <pre> tag
    wrapper.appendChild(toolbar);
  };

  registerButton('label', function(env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    if (!pre.hasAttribute('data-label')) {
      return;
    }

    var element, template;
    var text = pre.getAttribute('data-label');
    try {
      // Any normal text will blow up this selector.
      template = document.querySelector('template#' + text);
    } catch (e) {}

    if (template) {
      element = template.content;
    } else {
      if (pre.hasAttribute('data-url')) {
        element = document.createElement('a');
        element.href = pre.getAttribute('data-url');
      } else {
        element = document.createElement('span');
      }

      element.textContent = text;
    }

    return element;
  });

  /**
   * Register the toolbar with Prism.
   */
  Prism.hooks.add('complete', hook);
})();

(function () {

  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  if (!Prism.plugins.toolbar) {
    console.warn('Show Languages plugin loaded before Toolbar plugin.');

    return;
  }

  // The languages map is built automatically with gulp
  var Languages = /*languages_placeholder[*/{
    "html": "HTML",
    "xml": "XML",
    "svg": "SVG",
    "mathml": "MathML",
    "css": "CSS",
    "clike": "C-like",
    "js": "JavaScript",
    "abap": "ABAP",
    "abnf": "Augmented Backus–Naur form",
    "antlr4": "ANTLR4",
    "g4": "ANTLR4",
    "apacheconf": "Apache Configuration",
    "apl": "APL",
    "aql": "AQL",
    "arff": "ARFF",
    "asciidoc": "AsciiDoc",
    "adoc": "AsciiDoc",
    "asm6502": "6502 Assembly",
    "aspnet": "ASP.NET (C#)",
    "autohotkey": "AutoHotkey",
    "autoit": "AutoIt",
    "shell": "Bash",
    "basic": "BASIC",
    "bbcode": "BBcode",
    "bnf": "Backus–Naur form",
    "rbnf": "Routing Backus–Naur form",
    "conc": "Concurnas",
    "csharp": "C#",
    "cs": "C#",
    "dotnet": "C#",
    "cpp": "C++",
    "cil": "CIL",
    "coffee": "CoffeeScript",
    "cmake": "CMake",
    "csp": "Content-Security-Policy",
    "css-extras": "CSS Extras",
    "django": "Django/Jinja2",
    "jinja2": "Django/Jinja2",
    "dns-zone-file": "DNS zone file",
    "dns-zone": "DNS zone file",
    "dockerfile": "Docker",
    "ebnf": "Extended Backus–Naur form",
    "ejs": "EJS",
    "etlua": "Embedded Lua templating",
    "erb": "ERB",
    "fsharp": "F#",
    "firestore-security-rules": "Firestore security rules",
    "ftl": "FreeMarker Template Language",
    "gcode": "G-code",
    "gdscript": "GDScript",
    "gedcom": "GEDCOM",
    "glsl": "GLSL",
    "gml": "GameMaker Language",
    "gamemakerlanguage": "GameMaker Language",
    "graphql": "GraphQL",
    "hs": "Haskell",
    "hcl": "HCL",
    "http": "HTTP",
    "hpkp": "HTTP Public-Key-Pins",
    "hsts": "HTTP Strict-Transport-Security",
    "ichigojam": "IchigoJam",
    "inform7": "Inform 7",
    "javadoc": "JavaDoc",
    "javadoclike": "JavaDoc-like",
    "javastacktrace": "Java stack trace",
    "jq": "JQ",
    "jsdoc": "JSDoc",
    "js-extras": "JS Extras",
    "js-templates": "JS Templates",
    "json": "JSON",
    "jsonp": "JSONP",
    "json5": "JSON5",
    "latex": "LaTeX",
    "tex": "TeX",
    "context": "ConTeXt",
    "lilypond": "LilyPond",
    "ly": "LilyPond",
    "emacs": "Lisp",
    "elisp": "Lisp",
    "emacs-lisp": "Lisp",
    "lolcode": "LOLCODE",
    "md": "Markdown",
    "markup-templating": "Markup templating",
    "matlab": "MATLAB",
    "mel": "MEL",
    "moon": "MoonScript",
    "n1ql": "N1QL",
    "n4js": "N4JS",
    "n4jsd": "N4JS",
    "nand2tetris-hdl": "Nand To Tetris HDL",
    "nasm": "NASM",
    "neon": "NEON",
    "nginx": "nginx",
    "nsis": "NSIS",
    "objectivec": "Objective-C",
    "ocaml": "OCaml",
    "opencl": "OpenCL",
    "parigp": "PARI/GP",
    "objectpascal": "Object Pascal",
    "pcaxis": "PC-Axis",
    "px": "PC-Axis",
    "php": "PHP",
    "phpdoc": "PHPDoc",
    "php-extras": "PHP Extras",
    "plsql": "PL/SQL",
    "powershell": "PowerShell",
    "properties": ".properties",
    "protobuf": "Protocol Buffers",
    "py": "Python",
    "q": "Q (kdb+ database)",
    "qml": "QML",
    "jsx": "React JSX",
    "tsx": "React TSX",
    "renpy": "Ren'py",
    "rest": "reST (reStructuredText)",
    "robotframework": "Robot Framework",
    "robot": "Robot Framework",
    "rb": "Ruby",
    "sas": "SAS",
    "sass": "Sass (Sass)",
    "scss": "Sass (Scss)",
    "shell-session": "Shell session",
    "solidity": "Solidity (Ethereum)",
    "solution-file": "Solution file",
    "sln": "Solution file",
    "soy": "Soy (Closure Template)",
    "sparql": "SPARQL",
    "rq": "SPARQL",
    "splunk-spl": "Splunk SPL",
    "sqf": "SQF: Status Quo Function (Arma 3)",
    "sql": "SQL",
    "tap": "TAP",
    "toml": "TOML",
    "tt2": "Template Toolkit 2",
    "trig": "TriG",
    "ts": "TypeScript",
    "t4-cs": "T4 Text Templates (C#)",
    "t4": "T4 Text Templates (C#)",
    "t4-vb": "T4 Text Templates (VB)",
    "t4-templating": "T4 templating",
    "vbnet": "VB.Net",
    "vhdl": "VHDL",
    "vim": "vim",
    "visual-basic": "Visual Basic",
    "vb": "Visual Basic",
    "wasm": "WebAssembly",
    "wiki": "Wiki markup",
    "xeoracube": "XeoraCube",
    "xojo": "Xojo (REALbasic)",
    "xquery": "XQuery",
    "yaml": "YAML",
    "yml": "YAML"
  }/*]*/;

  Prism.plugins.toolbar.registerButton('show-language', function (env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    /**
     * Tries to guess the name of a language given its id.
     *
     * @param {string} id The language id.
     * @returns {string}
     */
    function guessTitle(id) {
      if (!id) {
        return id;
      }
      return (id.substring(0, 1).toUpperCase() + id.substring(1)).replace(/s(?=cript)/, 'S');
    }

    // var language = pre.getAttribute('data-language') || Languages[env.language] || guessTitle(env.language);

    // if (!language) {
    //   return;
    // }
    // var element = document.createElement('span');
    // element.textContent = language;

    // return element;
  });

})();

(function(){
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  if (!Prism.plugins.toolbar) {
    console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');

    return;
  }

  var ClipboardJS = window.ClipboardJS || undefined;

  if (!ClipboardJS && typeof require === 'function') {
    ClipboardJS = require('clipboard');
  }

  var callbacks = [];

  if (!ClipboardJS) {
    var script = document.createElement('script');
    var head = document.querySelector('head');

    script.onload = function() {
      ClipboardJS = window.ClipboardJS;

      if (ClipboardJS) {
        while (callbacks.length) {
          callbacks.pop()();
        }
      }
    };

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js';
    head.appendChild(script);
  }

  Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
    var linkCopy = document.createElement('button');
    linkCopy.classList.add('pf-c-button');
    linkCopy.classList.add('pf-m-control');
    linkCopy.textContent = '';

    if (!ClipboardJS) {
      callbacks.push(registerClipboard);
    } else {
      registerClipboard();
    }

    return linkCopy;

    function registerClipboard() {
      var clip = new ClipboardJS(linkCopy, {
        'text': function () {
          return env.code;
        }
      });

      clip.on('success', function() {
        linkCopy.textContent = '  Copied!';

        resetText();
      });
      clip.on('error', function () {
        linkCopy.textContent = 'Press Ctrl+C to copy';

        resetText();
      });
    }

    function resetText() {
      setTimeout(function () {
        linkCopy.textContent = '';
      }, 5000);
    }
  });
})();


