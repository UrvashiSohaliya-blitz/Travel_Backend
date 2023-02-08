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
    this.router.post(`${this.path}/create`, authMiddleware,this.BlogController.createBlog);
    this.router.get(`${this.path}/trash`,authMiddleware, this.BlogController.findDeletedBlogs);
      this.router.get(`${this.path}`, authMiddleware,this.BlogController.getBlogs);
      this.router.get(`${this.path}/:id`,authMiddleware, this.BlogController.getBlogbyId);
      this.router.delete(`${this.path}/:id`,authMiddleware, this.BlogController.deleteBlog);
    this.router.patch(`${this.path}/:id`,authMiddleware, this.BlogController.updateBlogById);
    
    
  }
}

export default blogRoute;
