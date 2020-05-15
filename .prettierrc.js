module.exports = {
    semi: true,
    tabWidth: 4,
    singleQuote: false,
    jsxBracketSameLine: true,
    trailingComma: "all",
    overrides: [
        {
            files: ['.prettierrc', '.babelrc', '.eslintrc', '.stylelintrc'],
            options: {
                parser: 'json'
            }
        }
    ]
};
