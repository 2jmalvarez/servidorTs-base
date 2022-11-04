import { Router } from "express";
import { home } from "../controllers/main.controllers";

const router = Router();

router.get("/", home);

export default router;
