import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import questionController from '../controllers/question.controller';
import authMiddleware from '@middlewares/auth.middleware';

class questionRoute implements Routes {
  public path = '/question';
  public router = Router();
  public questionController = new questionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
      this.router.post(`${this.path}/create`,authMiddleware, this.questionController.createQuestion);
      this.router.get(`${this.path}/user/:id`,authMiddleware, this.questionController.findQuestionsByUser);
      this.router.get(`${this.path}/blog/:id`, authMiddleware,this.questionController.findQuestionsByBlog);
      this.router.get(`${this.path}/askedtome/:id`,authMiddleware, this.questionController.findQuestionsByblogUser);
      this.router.get(`${this.path}/:id`, authMiddleware,this.questionController.getQuestionbyId);
      this.router.delete(`${this.path}/:id`,authMiddleware, this.questionController.deleteQuestion);
      this.router.patch(`${this.path}/:id`,authMiddleware, this.questionController.updateQuestionById);
      this.router.post(`${this.path}/answer/:id`, authMiddleware,this.questionController.addAnswer);
    
  }
}

export default questionRoute;
