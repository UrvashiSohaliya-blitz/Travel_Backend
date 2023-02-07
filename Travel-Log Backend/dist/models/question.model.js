"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const questionSchema = new _mongoose.Schema({
    userId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    blogUser: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    blogId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'blog',
        required: true
    },
    answer: {
        type: String
    }
}, {
    timestamps: true
});
const questionModel = (0, _mongoose.model)('question', questionSchema);
const _default = questionModel;

//# sourceMappingURL=question.model.js.map