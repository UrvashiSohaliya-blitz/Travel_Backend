import { NextFunction, Request, Response } from 'express';
import { Question } from '@interfaces/question.interface';
import QuestionService from '../services/question.service';
import { CreateQuestionDto } from '@dtos/questions.dto';


class questionController {
  public questionService = new QuestionService();

  public createQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questionData: CreateQuestionDto = req.body;
    
      const createdQuestion: Question = await this.questionService.createQuestion(questionData);

      res.status(201).json({ data: createdQuestion, message: 'question created' });
    } catch (error) {
        
      next(error);
    }
  };
    
    public findQuestionsByUser = async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            let { id } = req.params;

           
             let findQuestion = await this.questionService.findQuestionByUserId(id);
             res.status(200).json({ data: findQuestion, message: 'all questions' });
             
        } catch (error) {
            next(error);
        }
    }

        public findQuestionsByblogUser = async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            let { id } = req.params;

           
             let findQuestion = await this.questionService.findQuestionByblogUser(id);
             res.status(200).json({ data: findQuestion, message: 'all questions' });
             
        } catch (error) {
            next(error);
        }
    }

   public findQuestionsByBlog = async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            let { id } = req.params;

           
             let findQuestion = await this.questionService.findQuestionByBlogId(id);
             res.status(200).json({ data: findQuestion, message: 'all questions' });
             
        } catch (error) {
            next(error);
        }
    }

    public getQuestionbyId = async (req: Request, res: Response, next: NextFunction) => {
        try {
         const questionId: string = req.params.id;
      const findQuestions: Question = await this.questionService.findQuestionById(questionId);

      res.status(200).json({ data: findQuestions, message: 'findQuestion' });
    } catch (error) {
      next(error);
    }
    };
    
    public updateQuestionById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const questionId: string = req.params.id;
            const {question} = req.body;
            const updateQuestionData: Question = await this.questionService.updateQuestion(questionId, question);
              res.status(200).json({ data: updateQuestionData, message: 'updateQuestion' });
    } catch (error) {
      next(error);
    }
       
    }

  public addAnswer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const questionId: string = req.params.id;
      const { answer } = req.body;

      const addAnswerQ: Question = await this.questionService.addAnswer(questionId, answer);
      res.status(200).json({ data: addAnswerQ, message: 'Answer Question' })

    } catch (error) {
      next(error)
    }
  }

    public deleteQuestion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let questionId: string = req.params.id;
              const deleteQuestionData: Question = await this.questionService.deleteQuestion(questionId);

      res.status(200).json({ data: deleteQuestionData, message: 'deleted' }); 

        } catch (error) {
            next(error);
        }

    }
  

  
}

export default questionController;
