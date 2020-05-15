module.exports = {
    extends: [
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:promise/recommended",
        "plugin:compat/recommended"
    ],
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    rules: {
        // A temporary hack related to IDE not resolving correct package.json
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "import/prefer-default-export": "off"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
            node: {},
            webpack: {
                config: require.resolve("./configs/webpack.config.eslint.js")
            }
        }
    }
};
