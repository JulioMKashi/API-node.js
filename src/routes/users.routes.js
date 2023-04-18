const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const usercontroller = new UsersController();

usersRoutes.post("/users", usercontroller.create);
usersRoutes.put("/users/:id", usercontroller.update);

module.exports = usersRoutes;