import { server as serverOptions } from '../config';
import app from './server';

app.listen(serverOptions);
console.log(new Date());
