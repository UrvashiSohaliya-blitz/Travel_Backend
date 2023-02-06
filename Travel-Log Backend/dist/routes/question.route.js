"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _questionController = _interopRequireDefault(require("../controllers/question.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let questionRoute = class questionRoute {
    initializeRoutes() {
        this.router.post(`${this.path}/create`, this.questionController.createQuestion);
        this.router.get(`${this.path}/user/:id`, this.questionController.findQuestionsByUser);
        this.router.get(`${this.path}/blog/:id`, this.questionController.findQuestionsByBlog);
        this.router.get(`${this.path}/askedtome/:id`, this.questionController.findQuestionsByblogUser);
        this.router.get(`${this.path}/:id`, this.questionController.getQuestionbyId);
        this.router.delete(`${this.path}/:id`, this.questionController.deleteQuestion);
        this.router.patch(`${this.path}/:id`, this.questionController.updateQuestionById);
    }
    constructor(){
        this.path = '/question';
        this.router = (0, _express.Router)();
        this.questionController = new _questionController.default();
        this.initializeRoutes();
    }
};
const _default = questionRoute;

//# sourceMappingURL=question.route.js.map