const english_dict = require("../languages/en.json");
const arabic_dict = require("../languages/ar.json");

// Language is undefined if user has no session. This is expected behavior and the ternery operator still works.

const determineLanguage = (language) => {
  return language === "ar" ? arabic_dict : english_dict;
};

module.exports = determineLanguage;
