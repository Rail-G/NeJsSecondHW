import globals from "globals";
import pluginJs from "@eslint/js";
// import airbnb from 'eslint-config-airbnb-base';
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {
    languageOptions: { 
      globals: globals.browser,
      ecmaVersion: 2022,
      sourceType: "module",
    }
  },
  pluginJs.configs.recommended,
  {
    ignores: ['bableResult'],
  }

];