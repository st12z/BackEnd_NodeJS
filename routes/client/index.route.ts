import homeRoutes from "./home.route";
import productsRoute from "./products.route";
import { Express,Request,Response } from "express";
const apiRoutes =(app:Express)=>{
  const version="/api";
  app.use(version,homeRoutes);
  app.use(
    version+"/products",
    productsRoute
  );
}
export default apiRoutes;