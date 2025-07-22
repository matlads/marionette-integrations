import './styles/application.css';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'app');
  document.body.appendChild(div);

  const app = new App();
  app.start();
});
