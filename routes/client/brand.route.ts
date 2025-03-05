import { Router } from "express";
import * as controller from "../../controllers/client/brand.controller";
const router:Router=Router();

router.get("/",controller.getBrandsBySlugCategory);
router.get("/:id",controller.getBrandById);
const brandRoutes = router;
export default brandRoutes;