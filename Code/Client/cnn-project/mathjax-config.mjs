global.MathJax = {
  loader: {
    paths: {mathjax: '@mathjax/src/bundle'},
    load: ['adaptors/liteDOM'],
    require: (file => import(file))
  }
};