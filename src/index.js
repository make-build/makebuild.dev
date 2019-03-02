/* eslint-disable import/first */
// require('react-hot-loader/patch');

// import React from 'react';
// import * as ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import App from './app';

// const render = Component => {
//     ReactDOM.render(
//         <AppContainer>
//             <Component />
//         </AppContainer>,
//         document.getElementById('root'),
//     );
// };

// render(App);

import React from 'react';
import { render } from 'react-dom';
// import App from './App';

function renderApp() {
    // eslint-disable-next-line global-require
    const App = require('./App').default;
    render(<App />, document.getElementById('root'));
}

renderApp();

module.hot.accept(renderApp);
