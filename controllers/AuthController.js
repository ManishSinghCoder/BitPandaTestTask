const bcrypt = require("bcryptjs");
const User = require("../models/User");
const {
  LoginValidator,
  LoginWithWalletValidator,
} = require("../middlewares/Validator");
AuthController = {};

AuthController.read = (req, res) => {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }
  res.render("login");
};

AuthController.login = async (req, res) => {
  const { email, password } = req.body;
  const validator = LoginValidator({ email, password });
  if (validator.error) {
    req.flash("error", validator.error);
    return res.redirect("/");
  }
  const user = await User.findOne({ email: validator.value.email });
  if (!user) {
    req.flash("error", "User doesn't exist with this email account.");
    return res.redirect("/");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    req.flash("error", "Invalid Password!");
    return res.redirect("/");
  }

  req.session.user = { name: user.name, role: user.role };
  res.locals.user = req.session.user;
  await req.session.save();
  res.redirect("/dashboard");
};

AuthController.walletLogin = async (req, res) => {
  const { wallet } = req.body;

  const validator = LoginWithWalletValidator({ wallet });

  if (validator.error) {
    req.flash("error", validator.error);
    return res.redirect("/");
  }

  if (!wallet) {
    req.flash("error", "No wallet address received.");
    return res.redirect("/");
  }

  const user = await User.findOne({ wallet: wallet });

  if (!user) {
    req.flash(
      "error",
      "No user found with this wallet. Please register or contact admin."
    );
    return res.redirect("/");
  }

  req.session.user = { name: user.name, role: user.role, wallet: user.wallet };
  res.locals.user = req.session.user;
  await req.session.save();
  res.redirect("/dashboard");
};

AuthController.logout = (req, res) => {
  req.session.destroy(function () {
    res.redirect("/");
  });
};

module.exports = AuthController;
