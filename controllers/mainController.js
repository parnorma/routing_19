// que viste
const path = require("path");

const mainController = {
  home: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  },
};

module.exports = mainController;
