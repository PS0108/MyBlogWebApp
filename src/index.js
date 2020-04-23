import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import HeaderSec from "./HeaderSec";
import Main from "./Main.js";
import FooterSec from "./FooterSec.js"


class App extends  Component{
    render() {
        return (
            <div>
                <HeaderSec />
                <Main  />
                <FooterSec />
            </div>
        )
    }
}

ReactDOM.render(

    <App />,
    document.getElementById('root')
);

