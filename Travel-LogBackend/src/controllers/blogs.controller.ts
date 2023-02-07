import { NextFunction, Request, Response } from 'express';
import { CreateBlogDto} from '@dtos/blogs.dto';

import { Blog } from '@interfaces/blogs.interface';

import BlogService from '../services/blogs.service';

class blogController {
  public blogService = new BlogService();

  public createBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogData: CreateBlogDto = req.body;
     
      const createdBlogData: Blog = await this.blogService.createBlog(blogData);

      res.status(201).json({ data: createdBlogData, message: 'blog created' });
    } catch (error) {
        
      next(error);
    }
  };
  public getBlogs = async (req: Request, res: Response, next: NextFunction) => {
    const { page, limit ,createdAt,user} = req.query;
    
    try {
      const findAllBlogsData: Blog[] = await this.blogService.findAllBlog(+page,+limit,+createdAt,user+'');
      const length = await this.blogService.findAllBlogLength(+limit,user+'');
      
      res.status(200).json({ data: findAllBlogsData,TotalPages:length, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

    public getBlogbyId = async (req: Request, res: Response, next: NextFunction) => {
        try {
         const blogId: string = req.params.id;
      const findBlogData: Blog = await this.blogService.findBlogById(blogId);

      res.status(200).json({ data: findBlogData, message: 'findBlog' });
    } catch (error) {
      next(error);
    }
    };
    
    public updateBlogById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const blogId: string = req.params.id;
            const data = req.body;
            const updateBlogData: Blog = await this.blogService.updateBlog(blogId, data);
              res.status(200).json({ data: updateBlogData, message: 'updateBlog' });
    } catch (error) {
      next(error);
    }
       
    }

    public deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let blogId: string = req.params.id;
              const deleteBlogData: Blog = await this.blogService.deleteBlog(blogId);

      res.status(200).json({ data: deleteBlogData, message: 'deleted' }); 

        } catch (error) {
            next(error);
        }

    }
  

  
}

export default blogController;
