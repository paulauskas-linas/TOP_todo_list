import './sass/global.scss';

import createHeader from './components-ui/header/header';

const content = document.getElementById('content');

content.appendChild(createHeader());