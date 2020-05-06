module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
    "minify",
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
