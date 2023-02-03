import { DB_HOST, DB_PORT, DB_DATABASE ,DB_PASSWORD} from '@config';

export const dbConnection = {
  url: `mongodb+srv://experiance:${DB_PASSWORD}@cluster0.x1jnvd2.mongodb.net/?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};
