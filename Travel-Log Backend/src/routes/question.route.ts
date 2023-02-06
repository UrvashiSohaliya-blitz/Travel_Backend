import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import questionController from '../controllers/question.controller';

class questionRoute implements Routes {
  public path = '/question';
  public router = Router();
  public questionController = new questionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
      this.router.post(`${this.path}/create`, this.questionController.createQuestion);
      this.router.get(`${this.path}/user/:id`, this.questionController.findQuestionsByUser);
      this.router.get(`${this.path}/blog/:id`, this.questionController.findQuestionsByBlog);
      this.router.get(`${this.path}/askedtome/:id`, this.questionController.findQuestionsByblogUser);
      this.router.get(`${this.path}/:id`, this.questionController.getQuestionbyId);
      this.router.delete(`${this.path}/:id`, this.questionController.deleteQuestion);
      this.router.patch(`${this.path}/:id`, this.questionController.updateQuestionById);
      this.router.post(`${this.path}/answer/:id`, this.questionController.addAnswer);
    
  }
}

export default questionRoute;
