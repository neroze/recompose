import React from 'react';
import {render} from 'react-dom';

//import GistBox from './GistBox';
// var GistBox = require('./GistBox');
// import Compose002 from './recompose/compose002';
// import Compose003 from './recompose/composer003';
import Spinner from './recompose/spinner';

render(<Spinner/>, document.querySelector("#app"));