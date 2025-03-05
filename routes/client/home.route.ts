import { Router } from "express";
import * as controller from "../../controllers/client/home.controller";
const router:Router=Router();

router.get("/",controller.getAllProductsBySearch);
const homeRoutes = router;
export default homeRoutes;