module.exports = {
  tailwindConfig: "./tailwind.config.js",
  // eslint-disable-next-line global-require
  plugins: [require("prettier-plugin-tailwindcss")],
  arrowParens: "avoid",
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 160,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};
