"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _blogsService = _interopRequireDefault(require("../services/blogs.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let blogController = class blogController {
    constructor(){
        this.blogService = new _blogsService.default();
        this.createBlog = async (req, res, next)=>{
            try {
                const blogData = req.body;
                const createdBlogData = await this.blogService.createBlog(blogData);
                res.status(201).json({
                    data: createdBlogData,
                    message: 'blog created'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getBlogs = async (req, res, next)=>{
            const { page , limit , createdAt , user  } = req.query;
            try {
                const findAllBlogsData = await this.blogService.findAllBlog(+page, +limit, +createdAt, user + '');
                const length = await this.blogService.findAllBlogLength(+limit, user + '');
                res.status(200).json({
                    data: findAllBlogsData,
                    TotalPages: length,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getBlogbyId = async (req, res, next)=>{
            try {
                const blogId = req.params.id;
                const findBlogData = await this.blogService.findBlogById(blogId);
                res.status(200).json({
                    data: findBlogData,
                    message: 'findBlog'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updateBlogById = async (req, res, next)=>{
            try {
                const blogId = req.params.id;
                const data = req.body;
                const updateBlogData = await this.blogService.updateBlog(blogId, data);
                res.status(200).json({
                    data: updateBlogData,
                    message: 'updateBlog'
                });
            } catch (error) {
                next(error);
            }
        };
        this.deleteBlog = async (req, res, next)=>{
            try {
                let blogId = req.params.id;
                const deleteBlogData = await this.blogService.deleteBlog(blogId);
                res.status(200).json({
                    data: deleteBlogData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = blogController;

//# sourceMappingURL=blogs.controller.js.map