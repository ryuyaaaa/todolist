import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';

// MainContainerを利用するため
import MainComponent from './app/components/Main';

/**
 * Provideを使ってreduxとreact連携する
 */
export class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <MainComponent />
            </Provider>
        );
    }
}
