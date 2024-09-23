const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate({ projectId: process.env.CLOUD_TRANSLATION });

const translateText = async (text, targetLanguage = 'fi') => {
  const [translation] = await translate.translate(text, targetLanguage);
  return translation;
};

const quickStart = async () => {
  // The text to translate
  const text = "Hello, world!";

  // The target language
  const target = "fi";

  try {
    // Translates some text into Finnish
    const [translation, apiResponse] = await translate.translate(text, target);
    // console.log("API full response:", apiResponse); // Log the entire response for debugging
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    return translation;
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
};

module.exports = { translateText, quickStart };
