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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let QuestionService = class QuestionService {
    async createQuestion(questionData) {
        if ((0, _util.isEmpty)(questionData)) throw new _httpException.HttpException(400, "blogData is empty");
        const data = await this.questions.create(questionData);
        console.log(data);
        return data;
    }
    async findQuestionByBlogId(blogId) {
        if ((0, _util.isEmpty)(blogId)) throw new _httpException.HttpException(400, "blogId is required");
        const data = await this.questions.find({
            blogId: blogId
        }).sort({
            createdAt: -1
        });
        return data;
    }
    async findQuestionByUserId(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _httpException.HttpException(400, "userId is required");
        const data = await this.questions.find({
            userId: userId
        }).sort({
            createdAt: -1
        });
        return data;
    }
    async findQuestionByblogUser(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _httpException.HttpException(400, "userId is required");
        const data = await this.questions.find({
            blogUser: userId
        }).sort({
            createdAt: -1
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
    async addAnswer(id, answer) {
        if ((0, _util.isEmpty)(id)) throw new _httpException.HttpException(400, "id is required");
        else if ((0, _util.isEmpty)(answer)) throw new _httpException.HttpException(400, "answer is required");
        else {
            const data = await this.questions.findOneAndUpdate({
                _id: id
            }, {
                answer: answer
            });
            return data;
        }
    }
    async updateQuestion(questionId, question) {
        if ((0, _util.isEmpty)(questionId)) throw new _httpException.HttpException(400, "id is required");
        const updateQuestionById = await this.questions.findByIdAndUpdate({
            _id: questionId
        }, {
            question: question
        });
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