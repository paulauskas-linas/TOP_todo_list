import createFooter from './components-ui/footer/footer';
import createHeader from './components-ui/header/header';

const content = document.getElementById('content');

content.appendChild(createHeader());
content.appendChild(createFooter());