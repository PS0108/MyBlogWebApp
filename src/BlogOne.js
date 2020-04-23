import React, {Component} from 'react';
import blog1 from "./media/blog1-img.jpg";
import  './css/Main.css';


class BlogOne extends Component{
    render() {
        return (
        <div className="column left BlogDiv">
            <div className="innerrow">
                <title><h1><em>What Is Latency and Why Is it Important?</em></h1></title>
                <div>
                    <img src={blog1} className="BlogImg" alt="Low Latency Programming" />
                </div>
                <div>
                    <p>Although operation is a rather broad term, what I am referring to here is any behavior of a software system that is worth measuring and that a single run of that type of operation is observed at some point in time.</p>

                    <p>For example, in a typical web application, an operation could be submitting a search query from your browser and viewing the results of that query. In a trading application, it could be the automatic dispatching of a Buy or Sell order for a financial instrument to an exchange upon receiving a price tick for it. The lesser the time these operations take, the more they usually tend to benefit the user. Users prefer web applications that do not keep them waiting. You can recall that blazing fast searches were what initially gave Google a winning edge over other search engines prevalent at the time. The faster a trading system reacts to market changes, the higher the probability of a successful trade. Hundreds of trading firms are routinely obsessed with their trading engines having the lowest latency on the street because of the competitive edge they gain from it.</p>

                    <p>Where the stakes are high enough, lowering latencies can make all the difference between a winning business and a losing one!</p>
                </div>
            </div>
        </div>
        )
    }
}

export default BlogOne;