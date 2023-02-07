"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _blogModal = _interopRequireDefault(require("../models/blog.modal"));
const _util = require("../utils/util");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let BlogService = class BlogService {
    async findAllBlog(page = 0, limit = 10, createdAt = -1, user = "") {
        if (user !== "undefined" && user) {
            const data = await this.blogs.find({
                userId: user
            }).sort({
                createdAt: createdAt
            }).skip(page * limit).limit(limit);
            return data;
        } else {
            const data = await this.blogs.find().sort({
                createdAt: createdAt
            }).skip(page * limit).limit(limit);
            return data;
        }
    }
    async findAllBlogLength(limit, user) {
        if (user !== 'undefined' && user) {
            const length = await this.blogs.find({
                userId: user
            });
            return Math.ceil(length.length / limit);
        } else {
            const length = await this.blogs.find();
            return Math.ceil(length.length / limit);
        }
    }
    async findBlogById(blogId) {
        if ((0, _util.isEmpty)(blogId)) throw new _httpException.HttpException(400, "UserId is empty");
        const findUser = await this.blogs.findOne({
            _id: blogId
        });
        if (!findUser) throw new _httpException.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createBlog(blogData) {
        if ((0, _util.isEmpty)(blogData)) throw new _httpException.HttpException(400, "blogData is empty");
        const data = await this.blogs.create(_objectSpread({}, blogData));
        return data;
    }
    async updateBlog(blogId, data) {
        const updateBlogById = await this.blogs.findByIdAndUpdate({
            _id: blogId
        }, data);
        if (!updateBlogById) throw new _httpException.HttpException(409, "Blog doesn't exist");
        return updateBlogById;
    }
    async deleteBlog(blogId) {
        const deleteBlogById = await this.blogs.findByIdAndDelete(blogId);
        if (!deleteBlogById) throw new _httpException.HttpException(409, "Blog doesn't exist");
        return deleteBlogById;
    }
    constructor(){
        this.blogs = _blogModal.default;
    }
};
const _default = BlogService;

//# sourceMappingURL=blogs.service.js.map