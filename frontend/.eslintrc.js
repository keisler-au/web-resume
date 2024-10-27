module.exports = {
  extends: [
    "react-app",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "prettier"],
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["./src/i18n.ts"], // Specify the file to override
      rules: {
        "import/no-named-as-default-member": "off", // Disable the rule for this file
      },
    },
  ],
};
