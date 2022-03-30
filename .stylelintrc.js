const config = {
  extends: "stylelint-config-standard",
  rules: {
    "color-hex-case": "lower",
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local"],
      },
    ],
    "selector-class-pattern": "^[a-zA-Z][a-zA-Z0-9_-]+$", // kebab, snake, camel, mixes
  },
};

module.exports = config;
