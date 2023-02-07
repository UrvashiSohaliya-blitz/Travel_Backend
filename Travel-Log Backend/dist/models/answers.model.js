"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const answerSchema = new _mongoose.Schema({
    answer: {
        type: String,
        required: true
    },
    questionId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'blog',
        required: true
    }
}, {
    timestamps: true
});
const answerModel = (0, _mongoose.model)('answer', answerSchema);
const _default = answerModel;

//# sourceMappingURL=answers.model.js.map