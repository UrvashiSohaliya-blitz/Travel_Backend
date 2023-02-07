"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _questionService = _interopRequireDefault(require("../services/question.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let questionController = class questionController {
    constructor(){
        this.questionService = new _questionService.default();
        this.createQuestion = async (req, res, next)=>{
            try {
                const questionData = req.body;
                const createdQuestion = await this.questionService.createQuestion(questionData);
                res.status(201).json({
                    data: createdQuestion,
                    message: 'question created'
                });
            } catch (error) {
                next(error);
            }
        };
        this.findQuestionsByUser = async (req, res, next)=>{
            try {
                let { id  } = req.params;
                let findQuestion = await this.questionService.findQuestionByUserId(id);
                res.status(200).json({
                    data: findQuestion,
                    message: 'all questions'
                });
            } catch (error) {
                next(error);
            }
        };
        this.findQuestionsByblogUser = async (req, res, next)=>{
            try {
                let { id  } = req.params;
                let findQuestion = await this.questionService.findQuestionByblogUser(id);
                res.status(200).json({
                    data: findQuestion,
                    message: 'all questions'
                });
            } catch (error) {
                next(error);
            }
        };
        this.findQuestionsByBlog = async (req, res, next)=>{
            try {
                let { id  } = req.params;
                let findQuestion = await this.questionService.findQuestionByBlogId(id);
                res.status(200).json({
                    data: findQuestion,
                    message: 'all questions'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getQuestionbyId = async (req, res, next)=>{
            try {
                const questionId = req.params.id;
                const findQuestions = await this.questionService.findQuestionById(questionId);
                res.status(200).json({
                    data: findQuestions,
                    message: 'findQuestion'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updateQuestionById = async (req, res, next)=>{
            try {
                const questionId = req.params.id;
                const data = req.body;
                const updateQuestionData = await this.questionService.updateQuestion(questionId, data);
                res.status(200).json({
                    data: updateQuestionData,
                    message: 'updateQuestion'
                });
            } catch (error) {
                next(error);
            }
        };
        this.deleteQuestion = async (req, res, next)=>{
            try {
                let questionId = req.params.id;
                const deleteQuestionData = await this.questionService.deleteQuestion(questionId);
                res.status(200).json({
                    data: deleteQuestionData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = questionController;

//# sourceMappingURL=question.controller.js.map