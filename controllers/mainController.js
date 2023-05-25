const controller = {
  getHome: (req, res) => {
    res.render("home");
  },
  getLogin: (req, res) => {
    res.render("login");
  },
  getRegister: (req, res) => {
    res.render("register");
  },
};

module.exports = controller;
