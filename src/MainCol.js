import React, {Component} from 'react';
import { Route } from "react-router";
import {HashRouter} from "react-router-dom";

import  './css/Main.css';

import BlogTwo from "./BlogTwo";
import BlogOne from "./BlogOne";
import BlogThree from "./BlogThree";
import Blogs from "./Blogs";

class MainCol extends Component{
    render() {
        return (
            <HashRouter>
            <div>
               <switch>
                    <Route path="/" exact component={Blogs}/>
                    <Route path="/BlogOne" component={BlogOne} />
                    <Route path="/BlogTwo" component={BlogTwo} />
                    <Route path="/BlogThree" component={BlogThree} />
                </switch>
            </div>
            </HashRouter>
        )
    }
}

export default MainCol;