import { Router } from "express";
import * as controller from "../../controllers/client/category.controller";
const router:Router=Router();

router.get("/",controller.getAllCategories);
router.get("/:id",controller.getCategoryById);
const categoryRoutes = router;
export default categoryRoutes;