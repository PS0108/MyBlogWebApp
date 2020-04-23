import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import MainCol from './MainCol';
import RightColNav from './RightColNav';
import  './css/Main.css';
import  './css/index.css';

class Main extends Component{
    render() {

    return (
            <div className="row">
                <MainCol />
                <RightColNav />
            </div>
        )
}

}

export default Main;