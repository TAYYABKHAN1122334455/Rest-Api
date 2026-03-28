import express from "express";
const routes = express.Router();
import {getAllProducts,getAllProductsTesting } from "../controllers/product.controller.js";
routes.route("/").get(getAllProducts);
routes.route("/testing").get(getAllProductsTesting);

export default routes;