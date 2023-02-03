import {CreateQuestionDto} from '@dtos/questions.dto';
import { HttpException } from '@exceptions/HttpException';
import { Question } from '@interfaces/question.interface';
import questionModel from '@models/question.model';
import { isEmpty } from '@utils/util';

class QuestionService {
  public questions = questionModel;

 
  public async createQuestion(questionData: CreateQuestionDto): Promise<Question> {
    if (isEmpty(questionData)) throw new HttpException(400, "blogData is empty");
    const data: Question =  await this.questions.create({ ...questionData});
    
    return data;
   
    
  }
    public async findQuestionByBlogId(blogId: String): Promise<Question[]>{
        if (isEmpty(blogId)) throw new HttpException(400, "blogId is required");

        const data:Question[] = await this.questions.find({ blogId: blogId });
        return data;

    }
    public async findQuestionByUserId(userId: String): Promise<Question[]>{
        if (isEmpty(userId)) throw new HttpException(400, "userId is required");

        const data:Question[] = await this.questions.find({ userId: userId });
        return data;

    }
    public async findQuestionById(id: String): Promise<Question>{
        if (isEmpty(id)) throw new HttpException(400, "id is required");

        const data:Question = await this.questions.findOne({ _id: id });
        return data;

    }
 public async updateQuestion(blogId:string,data:any ): Promise<Question> {
   
   const updateQuestionById = await this.questions.findByIdAndUpdate({ _id: blogId }, data);
    if (!updateQuestionById) throw new HttpException(409, "Question doesn't exist");
   return updateQuestionById;

    
   
      
  }
  
  public async deleteQuestion(questionId: string): Promise<Question> {
    const deleteQuestionById: Question = await this.questions.findByIdAndDelete(questionId);
    if (!deleteQuestionById) throw new HttpException(409, "Question doesn't exist");

    return deleteQuestionById;
  }
}

export default QuestionService;
