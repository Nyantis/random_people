import controllersPerson from "../controllers/person_controllers";
import { Request, Response, Router } from "express";

const PersonRoutes = Router()

PersonRoutes.get("/person", controllersPerson.getPerson);

export default PersonRoutes