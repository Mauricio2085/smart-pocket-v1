import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {
    languageOptions: {
      // CRA/Webpack inyecta `process.env` en el bundle; no es un global del navegador puro.
      globals: { ...globals.browser, process: "readonly" },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];