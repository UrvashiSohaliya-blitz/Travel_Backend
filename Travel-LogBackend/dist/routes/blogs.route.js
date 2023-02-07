"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _blogsController = _interopRequireDefault(require("../controllers/blogs.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let blogRoute = class blogRoute {
    initializeRoutes() {
        this.router.post(`${this.path}/create`, this.BlogController.createBlog);
        this.router.get(`${this.path}`, this.BlogController.getBlogs);
        this.router.get(`${this.path}/:id`, this.BlogController.getBlogbyId);
        this.router.delete(`${this.path}/:id`, this.BlogController.deleteBlog);
        this.router.patch(`${this.path}/:id`, this.BlogController.updateBlogById);
    }
    constructor(){
        this.path = '/blogs';
        this.router = (0, _express.Router)();
        this.BlogController = new _blogsController.default();
        this.initializeRoutes();
    }
};
const _default = blogRoute;

//# sourceMappingURL=blogs.route.js.map