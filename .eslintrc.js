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
    "ecmaFeatures": { "destructuring": true }, 
    "rules": { "no-unused-vars": [2, {"vars": "all", "varsIgnorePattern": "Bootstrap"}] } 
};
