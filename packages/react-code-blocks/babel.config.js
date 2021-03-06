module.exports = {
  plugins: [
    [
      `babel-plugin-styled-components`,
      {
        ssr: true,
        displayName: true,
        minify: true,
        pure: true,
        transpileTemplateLiterals: true,
      },
    ],
    `@babel/plugin-proposal-class-properties`,
    `@babel/plugin-proposal-object-rest-spread`,
    `@babel/syntax-dynamic-import`,
    `@babel/transform-runtime`,
  ],
  presets: [`@babel/react`, `@babel/env`],
  env: {
    cjs: {
      plugins: [
        [
          `babel-plugin-styled-components`,
          {
            ssr: true,
            displayName: true,
            minify: true,
            pure: true,
            transpileTemplateLiterals: true,
          },
        ],
        `@babel/transform-runtime`,
        `transform-dynamic-import`,
      ],
      presets: [[`@babel/env`]],
    },
    esm: {
      plugins: [
        [
          `babel-plugin-styled-components`,
          {
            ssr: true,
            displayName: true,
            minify: true,
            pure: true,
            transpileTemplateLiterals: true,
          },
        ],
        `@babel/transform-runtime`,
      ],
      presets: [
        [
          `@babel/env`,
          {
            modules: false,
          },
        ],
      ],
    },
    test: {
      presets: [[`@babel/env`, { targets: { node: true } }]],
      // There is no @babel/ scoped transform for this plugin
      plugins: [`transform-dynamic-import`],
    },
  },
}
