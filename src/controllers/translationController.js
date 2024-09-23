const {
  translateText,
  quickStart,
} = require("../services/translationService.js");

const translate = async (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res
      .status(400)
      .json({ error: "Missing required fields: text or targetLanguage" });
  }

  try {
    const translation = await translateText(text, targetLanguage);
    return res.json({ translation });
  } catch (error) {
    return res.status(500).json({ error: "Translation failed" });
  }
};

const testQuickStart = async (req, res) => {
  console.log("CALLED");
  try {
    const translation = await quickStart();
    return res.json({ translation });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Translation failed", details: error.message });
  }
};

module.exports = { translate, testQuickStart };
