"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _questionModel = _interopRequireDefault(require("../models/question.model"));
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
let QuestionService = class QuestionService {
    async createQuestion(questionData) {
        if ((0, _util.isEmpty)(questionData)) throw new _httpException.HttpException(400, "blogData is empty");
        const data = await this.questions.create(_objectSpread({}, questionData));
        console.log(data);
        return data;
    }
    async findQuestionByBlogId(blogId) {
        if ((0, _util.isEmpty)(blogId)) throw new _httpException.HttpException(400, "blogId is required");
        const data = await this.questions.find({
            blogId: blogId
        });
        return data;
    }
    async findQuestionByUserId(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _httpException.HttpException(400, "userId is required");
        const data = await this.questions.find({
            userId: userId
        });
        return data;
    }
    async findQuestionByblogUser(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _httpException.HttpException(400, "userId is required");
        const data = await this.questions.find({
            blogUser: userId
        });
        return data;
    }
    async findQuestionById(id) {
        if ((0, _util.isEmpty)(id)) throw new _httpException.HttpException(400, "id is required");
        const data = await this.questions.findOne({
            _id: id
        });
        return data;
    }
    async updateQuestion(blogId, data) {
        const updateQuestionById = await this.questions.findByIdAndUpdate({
            _id: blogId
        }, data);
        if (!updateQuestionById) throw new _httpException.HttpException(409, "Question doesn't exist");
        return updateQuestionById;
    }
    async deleteQuestion(questionId) {
        const deleteQuestionById = await this.questions.findByIdAndDelete(questionId);
        if (!deleteQuestionById) throw new _httpException.HttpException(409, "Question doesn't exist");
        return deleteQuestionById;
    }
    constructor(){
        this.questions = _questionModel.default;
    }
};
const _default = QuestionService;

//# sourceMappingURL=question.service.js.map