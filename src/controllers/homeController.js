const path = require('path');

// Serve the home.html file
const renderHome = (req, res) => {
  console.log('HOME CALLED')
  const filePath = path.join(__dirname, '../views/home.html');
  res.sendFile(filePath);
};

module.exports = { renderHome };
