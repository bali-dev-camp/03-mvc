const passport = require("../lib/passport");

class AuthController {
  static async loginPage(req, res) {
    res.render("pages/login");
  }

  static async login(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true, // Untuk mengaktifkan express flash
    })(req, res, next);
  }

  static async logout(req, res) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  }
}

module.exports = AuthController;
