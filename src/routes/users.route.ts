import { Router } from "express";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) => {
    return response.json({name: "Venerzin", age: "21", class: "Mage"})
})

export {usersRoutes}