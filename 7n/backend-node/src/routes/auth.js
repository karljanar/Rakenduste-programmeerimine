const router = require("express").Router()
const authController = require("../controllers/auth")
const validationMiddleware = require("../middleware/validationMiddleware")
const {check} = require('express-validator')


router.post("/login", [
    check("email")
        .isEmail()
        .normalizeEmail()
        .escape()
        .withMessage("Must be correctly formatted e-mail")
], validationMiddleware, authController.login)
router.post("/signup", [
    check(["lastName", "firstName"])
        .isLength({min: 1})
        .withMessage("Name be at least 1 char long")
        .trim()
        .exists()
        .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
        .escape()
        .withMessage("Name must be alphabetic"),
    check("email")
        .isEmail()
        .normalizeEmail()
        .escape()
        .withMessage("Must be correctly formatted e-mail"),
    check('password')
        .isLength({min:6})
        .withMessage("Password must be at least 6 char long")
        // isStrongPasswordi peaks lisama
        //kuid testimise mottes muutuks see tuutuks
], validationMiddleware, authController.signup)


module.exports = router