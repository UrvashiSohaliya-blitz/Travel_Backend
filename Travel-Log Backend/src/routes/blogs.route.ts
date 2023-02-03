import { Router } from 'express';
import BlogController from '@controllers/blogs.controller';
import { CreateBlogDto } from '@dtos/blogs.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class blogRoute implements Routes {
  public path = '/blogs';
  public router = Router();
  public BlogController = new BlogController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
      this.router.post(`${this.path}/create`, this.BlogController.createBlog);
      this.router.get(`${this.path}`, this.BlogController.getBlogs);
      this.router.get(`${this.path}/:id`, this.BlogController.getBlogbyId);
      this.router.delete(`${this.path}/:id`, this.BlogController.deleteBlog);
      this.router.patch(`${this.path}/:id`, this.BlogController.updateBlogById);
    
  }
}

export default blogRoute;
