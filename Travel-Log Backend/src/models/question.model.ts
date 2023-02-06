import { model, Schema, Document } from 'mongoose';

 import { Question } from '@/interfaces/question.interface';

const questionSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    blogUser:{type: Schema.Types.ObjectId, ref: 'user', required: true },
    question: { type: String, required: true },
    blogId: { type: Schema.Types.ObjectId, ref: 'blog', required: true },
    answer:{ type: String},
    

},{timestamps: true});

 const questionModel = model<Question & Document>('question', questionSchema);
 export default questionModel;
