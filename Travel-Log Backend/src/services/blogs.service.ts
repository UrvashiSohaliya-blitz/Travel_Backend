import { CreateBlogDto } from '@dtos/blogs.dto';
import { HttpException } from '@exceptions/HttpException';
import { Blog } from '@interfaces/blogs.interface';
import blogModel from '@models/blog.modal';
import { isEmpty } from '@utils/util';

class BlogService {
  public blogs = blogModel;

  public async findAllBlog(page: number = 0, limit: number = 10, createdAt: number = -1, user: string = "",token:string=""): Promise<Blog[]> {
  
    if (user!== "undefined" && user) {
      
       const data: Blog[] = await this.blogs.find({userId:user,isDeleted:false}).sort({createdAt:createdAt}).skip(page * limit)
      .limit(limit);
   
    return data;
    } else {
    
      const data: Blog[] = await this.blogs.find({ isDeleted: false, userId: { $ne: token } }).sort({ createdAt: createdAt }).skip(page * limit)
        .limit(limit);
   
   
    return data;
    }
   
  }
  public async findAllBlogLength(limit: number, user: string,token:string="") {
    if (user !== 'undefined' && user) {
        const length: Blog[] = await this.blogs.find({userId:user , isDeleted:false});
    return Math.ceil(length.length/limit);
    } else {
      const length: Blog[] = await this.blogs.find({isDeleted:false , userId : {$ne:token}});
    return Math.ceil(length.length/limit);
    }
    
  }

  public async findBlogById(blogId: string): Promise<Blog> {
    if (isEmpty(blogId)) throw new HttpException(400, "blogId is empty");

    const findBlog: Blog = await this.blogs.findOne({ _id: blogId });
    if (!findBlog) throw new HttpException(409, "Blog doesn't exist");

    return findBlog;
  }

  public async createBlog(blogData: CreateBlogDto): Promise<Blog> {
    if (isEmpty(blogData)) throw new HttpException(400, "blogData is empty");

//**************************error with data type */
    
    const data: any =  await this.blogs.create({ ...blogData});
    
    return data;
   
    
  }
 public async updateBlog(blogId:string,data:any ): Promise<Blog> {
   
   const updateBlogById = await this.blogs.findByIdAndUpdate({ _id: blogId ,isDeleted:false}, data);
    if (!updateBlogById) throw new HttpException(409, "Blog doesn't exist");
   return updateBlogById;

    
   
      
  }
  
  public async deleteBlog(blogId: string): Promise<Blog> {
    const deleteBlogById: Blog = await this.blogs.findByIdAndUpdate(blogId,{ isDeleted:true});
    if (!deleteBlogById) throw new HttpException(409, "Blog doesn't exist");

    return deleteBlogById;
  }

  public async findDeletedBlogs(userId: string): Promise<Blog[]> {
    if(!userId) throw new HttpException(409, "userId not provided");
    const deletedBlogs: Blog[] = await this.blogs.find({ userId: userId, isDeleted: true });
    return deletedBlogs;

  
}
}



export default BlogService;
