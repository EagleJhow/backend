import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategoryServices = new ListCategoryService();

        const category = await listCategoryServices.execute();

        return res.json(category);


    }
}

export { ListCategoryController }