;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.747042 921.104515l-7.724938 7.724938c-8.532327 8.53335-22.367427 8.53335-30.899754 0L700.247408 700.95349c-65.796542 59.182914-152.820548 95.226828-248.284783 95.226828-205.140147 0-371.439684-166.298514-371.439684-371.439684s166.298514-371.439684 371.439684-371.439684 371.439684 166.298514 371.439684 371.439684c0 90.011037-32.029484 172.533518-85.296665 236.820684l228.64242 228.64242C975.280392 898.739135 975.280392 912.573211 966.747042 921.104515zM768.778224 424.741657c0-174.97308-141.842519-316.815599-316.815599-316.815599s-316.815599 141.842519-316.815599 316.815599 141.842519 316.815599 316.815599 316.815599S768.778224 599.714737 768.778224 424.741657zM419.188174 231.046167c-82.296331 13.83817-147.19748 78.659501-161.036673 160.922063 0 0-0.577145 1.327228-1.461281 4.855588-3.667529 14.631232-13.600763 27.918863-28.684296 27.918863s-25.556049-10.477632-25.556049-25.562189c0-4.991688 1.279133-8.698103 2.02103-15.385409 16.59598-100.80794 92.935646-181.304276 191.662181-203.741287 5.796006-1.608637 13.253862-3.068895 19.931958-2.163269 15.093766 2.046612 24.746614 14.043854 24.647353 25.120121C439.34526 227.776703 419.188174 231.046167 419.188174 231.046167z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M948.224 894.144l-168.512-167.296c58.24-70.08 93.248-160.064 93.248-258.304 0-223.36-181.056-404.48-404.48-404.48C245.12 64 64 245.184 64 468.544c0 223.488 181.12 404.544 404.48 404.544 97.344 0 186.624-34.432 256.384-91.712l168.32 167.552C900.48 956.224 909.568 960 920.192 960c10.752 0 20.032-3.904 27.648-11.456 7.68-7.616 11.52-16.896 11.52-27.648C959.296 910.4 955.648 901.44 948.224 894.144zM145.344 468.544c0-178.496 144.704-323.2 323.2-323.2 178.496 0 323.2 144.704 323.2 323.2 0 178.56-144.704 323.2-323.2 323.2C290.048 791.744 145.344 647.04 145.344 468.544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1001.501648 879.41059l-256.881185-256.981178C845.013109 466.040866 826.814442 255.056319 690.124454 118.266338c-157.688451-157.688451-414.169665-157.688451-571.858116 0s-157.688451 414.169665 0 571.858116C255.056319 826.814442 466.140859 845.013109 622.529405 744.52047l256.881185 256.881185c29.997803 29.997803 78.594244 29.997803 108.492054 0l13.599004-13.599004C1031.499451 958.004834 1031.499451 909.408393 1001.501648 879.41059zM602.030906 601.930913C493.038889 711.022923 315.451896 711.022923 206.459878 601.930913s-108.992017-286.479018 0-395.571028c108.992017-109.09201 286.479018-108.992017 395.471035 0C711.022923 315.551888 711.022923 492.938896 602.030906 601.930913z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)