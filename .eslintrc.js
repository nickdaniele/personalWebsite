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
    // turning whole thing off. Also need to figure out self-closing.
    "rules": { "no-unused-vars": 0, 'react/self-closing-comp': 0 }
};
