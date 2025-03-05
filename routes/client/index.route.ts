import brandRoutes from "./brand.route";
import categoryRoutes from "./category.route";
import homeRoutes from "./home.route";
import productsRoute from "./products.route";
import { Express,Request,Response } from "express";
const apiRoutes =(app:Express)=>{
  const version="/api";
  // /api/search
  app.use(version,homeRoutes);
  // /api/products
  app.use(
    version+"/products",
    productsRoute
  );
  // /api/brands
  app.use(
    version+"/brands",
    brandRoutes
  );
  // /api/categories
  app.use(
    version+"/categories",
    categoryRoutes
  )
}
export default apiRoutes;