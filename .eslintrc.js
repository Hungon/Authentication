module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "producton" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
