import { model, Schema, Document } from 'mongoose';

import { Answer } from '../interfaces/answer.interface';

const answerSchema: Schema = new Schema({
   
    answer: { type: String, required: true },
    questionId:{ type: Schema.Types.ObjectId, ref: 'blog', required: true },
    

},{timestamps: true});

 const answerModel = model<Answer & Document>('answer', answerSchema);
 export default answerModel;
