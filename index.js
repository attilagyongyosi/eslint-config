module.exports = {
    "rules": {
        "indent": [ "error", 4 ],
        "complexity": [ "error", 4 ],
        "quotes": [ "error", "single" ],
        "array-bracket-spacing": [ "error", "always" ],
        "object-curly-spacing": [ "error", "always" ],
        "no-magic-numbers": [ "error", {
            "ignoreArrayIndexes": true,
            "enforceConst": true
        } ],
        "max-len": [ "error", 140 ],
        "max-params": [ "error", 3 ],
        "max-lines": [ "error", 200 ],
        "no-duplicate-imports": "error",
        "eol-last": "error"
    }
};
