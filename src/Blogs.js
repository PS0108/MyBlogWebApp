import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import blog1 from "./media/blog1-img.jpg";
import blog2 from "./media/blog2-img.jpg";
import blog3 from "./media/blog3-img.jpg";
import './css/Main.css';

class Blogs extends Component{
    render() {
        return (
            <div className="column left">
                <div className="innerrow">
                    <p><h1><em><NavLink to="/BlogOne" className="ul_c" target="_blank">What Is Latency and Why Is it Important?</NavLink></em></h1></p>
                    <p>04/15/2020</p>
                    <div className="innercols">
                        <p>Latency is simply defined as the time taken for one operation to happen.Even Google and Amazon can’t process data instantly—here’s how to combat latency in your real-time application</p>
                    </div>
                    <div className="innercols">
                        <img src={blog1} className="App-img" alt="Low Latency Programming" />
                    </div>
                </div>
                <div className="innerrow">
                    <p><h1><em><NavLink to="/BlogTwo" className="ul_c" target="_blank">How Is Latency Characterized?</NavLink></em></h1></p>
                    <p>04/15/2020</p>

                    <div className="innercols">
                        <img src={blog2} className="App-img" alt="Low Latency Programming" />
                    </div>

                    <div className="innercols">
                        <p>Latency is best characterized in percentile terms. At first impulse, you may think it then makes sense to quantify latency as an average of all the operations of the same kind that were measured. Bad idea! </p>
                    </div>
                </div>

                <div className="innerrow">
                        <p><h1><em><NavLink to="/BlogThree" className="ul_c" target="_blank">What Contributes to Latency?</NavLink></em></h1></p>
                        <p>04/15/2020</p>
                        <div className="innercols">
                            <p>Often the hardest part, though, is identifying the sources of latency in your application and subsequently eliminating them. If you can’t remove them entirely, there are steps you can take to reduce or manage their consequences.</p>
                        </div>
                        <div className="innercols">
                            <img src={blog3} className="App-img" alt="Low Latency Programming" />
                        </div>
                </div>

            </div>

        )
    }
}

export default Blogs;