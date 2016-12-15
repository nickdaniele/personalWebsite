module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
    	"window": true,
    	"document": true
    },
    // Should exceptions for .css and bootstrap files as opposed to 
    // turning whole thing off.
    "rules": { "no-unused-vars": 0}
};
