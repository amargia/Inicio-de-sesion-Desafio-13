const express = require("express");
const router = express.Router();

const products = require("./productRouter");
const productsList = require("./productListRouter");
const home = require("./homeRouter");
const faker = require("./fakerRouter");
const productsFaker = require("./productsFakerRouter");
const login = require("./loginRouter");
const logout = require("./logoutRouter");

//middlewares

router.use("/productos", products);
router.use("/lista-productos", productsList);
router.use("/", home);
router.use("/api/productos-test", faker);
router.use("/api/faker-list", productsFaker);
router.use("/login", login);
router.use("/logout", logout);

module.exports = router;