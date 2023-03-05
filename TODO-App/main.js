import './src/style/index.css';
import { app } from './src/App';

const todo = document.getElementById('app');
todo.appendChild(app());
