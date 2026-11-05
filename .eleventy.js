require('tsx/cjs');

const fs = require('node:fs');
const path = require('node:path');

const ICONS_DIR = path.resolve('./src/resources/icons');

module.exports = async function (eleventyConfig) {
  const EleventyVitePlugin = (await import('@11ty/eleventy-plugin-vite'))
    .default;

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      configFile: path.resolve('./vite.config.mjs'),
    },
  });

  eleventyConfig.addShortcode(
    'svgIcon',
    function (type, name, attributes = '') {
      const iconPath = type
        ? path.join(ICONS_DIR, type, `${name}.svg`)
        : path.join(ICONS_DIR, `${name}.svg`);

      if (!fs.existsSync(iconPath)) {
        return `<!-- Иконка ${type ? `${type}/${name}` : name} не найдена -->`;
      }

      let svgContent = fs.readFileSync(iconPath, 'utf8');

      svgContent = svgContent.replace('<svg', `<svg ${attributes}`);

      return svgContent;
    },
  );
  // Данные грузятся здесь, а не в теле конфига: иначе правка файла перезагружает
  // конфиг и dev-сервер теряет Vite
  eleventyConfig.addDataExtension('ts', {
    read: false,
    parser: (_contents, filePath) => {
      delete require.cache[require.resolve(filePath)];

      return require(filePath);
    },
  });

  // Vite копирует в итоговую сборку только свою папку public
  eleventyConfig.addPassthroughCopy({
    'src/resources/icons': 'public/icons',
  });

  eleventyConfig.addLayoutAlias('base', 'base.njk');

  return {
    dir: {
      input: 'src/views',
      output: '_site',
      includes: 'includes',
      data: '../data',
      layouts: 'layouts',
    },
  };
};
