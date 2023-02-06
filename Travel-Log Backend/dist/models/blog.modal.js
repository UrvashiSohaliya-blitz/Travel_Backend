"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const blogSchema = new _mongoose.Schema({
    userId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    tags: [
        {
            type: String
        }
    ],
    journyDate: {
        startDate: {
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        }
    },
    travelCost: {
        type: Number,
        required: true
    },
    placesToVisit: [
        {
            type: String
        }
    ],
    allowQustions: {
        type: Boolean,
        default: false
    },
    images: [
        {
            type: String
        }
    ],
    heritages: [
        {
            type: String
        }
    ],
    travelRate: {
        type: Number,
        default: -1
    },
    saftyRate: {
        type: Number,
        default: -1
    }
}, {
    timestamps: true
});
const blogModel = (0, _mongoose.model)('blog', blogSchema);
const _default = blogModel;

//# sourceMappingURL=blog.modal.js.map