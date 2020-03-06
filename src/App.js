import React, {Component} from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./style";
import {GlobalStyleFont} from "./statics/iconfont/iconfont";
import store from "./store";
import {Provider} from 'react-redux';

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <GlobalStyleFont/>
                <Header />
            </Provider>
        );
    }
}

export default App;
