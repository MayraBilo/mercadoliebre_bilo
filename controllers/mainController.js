const controller = {
  getHome: (req, res) => {
    res.render("home", { title: "Home" });
  },
  getLogin: (req, res) => {
    res.render("login", { title: "Login" });
  },
  getRegister: (req, res) => {
    res.render("register", { title: "Register" });
  },
};

module.exports = controller;
