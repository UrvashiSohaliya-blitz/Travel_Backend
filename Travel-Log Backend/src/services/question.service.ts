import {CreateQuestionDto} from '@dtos/questions.dto';
import { HttpException } from '@exceptions/HttpException';
import { Question } from '@interfaces/question.interface';
import questionModel from '@models/question.model';
import { isEmpty } from '@utils/util';

class QuestionService {
  public questions = questionModel;

 
  public async createQuestion(questionData: CreateQuestionDto): Promise<Question> {
    if (isEmpty(questionData)) throw new HttpException(400, "blogData is empty");
    const data: Question =  await this.questions.create(questionData);
    console.log(data)
    return data;
   
    
  }
    public async findQuestionByBlogId(blogId: String): Promise<Question[]>{
        if (isEmpty(blogId)) throw new HttpException(400, "blogId is required");

        const data:Question[] = await this.questions.find({ blogId: blogId ,isDeleted:false}).sort({createdAt:-1});
        return data;

    }
    public async findQuestionByUserId(userId: String): Promise<Question[]>{
        if (isEmpty(userId)) throw new HttpException(400, "userId is required");
       
        const data:Question[] = await this.questions.find({ userId: userId ,isDeleted:false}).sort({createdAt:-1});
      
        return data;

    }
   public async findQuestionByblogUser(userId: String): Promise<Question[]>{
        if (isEmpty(userId)) throw new HttpException(400, "userId is required");
       
        const data:Question[] = await this.questions.find({ blogUser: userId,isDeleted:false }).sort({createdAt:-1});
      
        return data;

    }
    public async findQuestionById(id: String): Promise<Question>{
        if (isEmpty(id)) throw new HttpException(400, "id is required");

        const data:Question = await this.questions.findOne({ _id: id,isDeleted:false });
        return data;

    }
     public async addAnswer(id: String,answer:String): Promise<Question>{
       if (isEmpty(id)) throw new HttpException(400, "id is required");
       else if (isEmpty(answer))throw new HttpException(400, "answer is required");
       else {
        const data:Question = await this.questions.findOneAndUpdate({ _id: id,isDeleted:false },{answer:answer});
        return data; 
       }

        

    }
 public async updateQuestion(questionId:string,question:any ): Promise<Question> {
   if (isEmpty(questionId)) throw new HttpException(400, "id is required");
   const updateQuestionById = await this.questions.findByIdAndUpdate({ _id: questionId ,isDeleted:false}, {question:question});
    if (!updateQuestionById) throw new HttpException(409, "Question doesn't exist");
   return updateQuestionById;

    
   
      
  }
  
  public async deleteQuestion(questionId: string): Promise<Question> {
    const deleteQuestionById: Question = await this.questions.findByIdAndUpdate(questionId,{ isDeleted:true});
    if (!deleteQuestionById) throw new HttpException(409, "Question doesn't exist");

    return deleteQuestionById;
  }
}

export default QuestionService;
