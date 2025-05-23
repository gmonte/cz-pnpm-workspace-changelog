module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "docs", "feat", "fix", "perf", "refactor", "release", "revert", "style", "test", "wip"]
    ]
  }
};
