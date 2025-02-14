const srcFolderPaths = ["__tests__", "components", "stylesheets"].reduce(
    (paths, path) => [...paths, path, `${path}/**`],
    []
);



const importExtensionExceptions = ["svg", "json"];

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "@typescript-eslint/no-empty-function": "off",
        // ...getImportPluginRules(srcFolderPaths, importExtensionExceptions),
        "no-restricted-imports": ["warn", { patterns: ["../*"] }], // Use absolute paths
    },
};
