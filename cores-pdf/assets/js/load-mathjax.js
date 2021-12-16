window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)'],['$(', ')$'],['*(', ')*']]
    },
    svg: {
      fontCache: 'global'
    }
  };
  
  (function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  })();