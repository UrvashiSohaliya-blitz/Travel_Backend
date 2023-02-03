import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import BlogRoute from './routes/blogs.route';
import QuestionRoute from './routes/question.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(),new BlogRoute() ,new QuestionRoute()]);

app.listen();
