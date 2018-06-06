import React from 'react';
import ReactDom from 'react-dom';
// import Hello from 'component/Hello/Hello';
import './css/reset.css';

import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import {BrowserRouter as Router} from 'react-router-dom';

import store from './redux/store';

// import getRouter from 'router/router';
import App from './components/App/App';



/*初始化*/
// renderWithHotReload(getRouter());
renderWithHotReload(App);

/*热更新*/
// if (module.hot) {
//     module.hot.accept('router/router', () => {
//         const getRouter = require('router/router').default;
//         renderWithHotReload(getRouter());
//     });
// }
if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {/* {RootElement} */}
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}