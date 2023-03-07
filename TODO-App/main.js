import './src/style/index.css';
import { app } from './src/App';
import { renderUi } from './src/library';

const todo = document.getElementById('app');
todo.appendChild(app());
renderUi();
