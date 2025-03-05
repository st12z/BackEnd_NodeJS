import { Router } from "express";
import * as controller from "../../controllers/client/products.controller";
const router:Router=Router();

router.get("/",controller.getAllProducts);
const productsRoute = router;
export default productsRoute;