import './src/style/index.css';
import { app } from './src/App';
import { handlePagination } from './src/library';

const todo = document.getElementById('app');
todo.appendChild(app());
handlePagination();
