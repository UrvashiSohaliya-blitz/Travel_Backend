import { model, Schema, Document } from 'mongoose';

import { Blog } from '@interfaces/blogs.interface';

const blogSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    title: { type: String, required: true },
    location: { type: String, required: true},
    description: { type: String, required: true },
    tags: [
        { type:String}
    ],
    journeyDate: {
        startDate: { type: String, required: true },
        endDate: { type: String, required: true }
    },
    travelCost: { type: Number, required: true },
    placesToVisit: [
        {type:String}
    ],
    allowQuestions:{type:Boolean, default:false},
    images: [{ type: String }],

     heritages: [
        {type:String}
    ],
    travelRate: { type: Number, default: -1 },
    safetyRate: { type: Number, default: -1 },
    isDeleted:{type:Boolean, default: false}
    

},{timestamps: true});

const blogModel = model<Blog & Document>('blog', blogSchema);

export default blogModel;
