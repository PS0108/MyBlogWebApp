import React, {Component} from 'react';
import blog3 from "./media/blog3-img.jpg";
import  './css/Main.css';


class BlogThree extends Component{
    render() {
        return (
            <div className="column left BlogDiv">
                <div className="innerrow">
                    <h2 class="blogHead"><em>What Contributes to Latency?</em></h2>
                    <div>
                        <img src={blog3} className="BlogImg" alt="Low Latency Programming" />
                    </div>
                    <div>
                        <p>The short answer is: everything!</p>

                        <p>Latency "hiccups" that lead to its characteristic shape, with random outliers and everything, can be attributed to a number of things like:</p>

                         <ul>
                             <li>Hardware Interrupts</li>
                             <li>Network/IO delays</li>
                             <li>Hypervisor Pauses</li>
                             <li>OS activities like rebuilding internal structures, flushing buffers etc</li>
                             <li>Context Switches</li>
                             <li>Garbage Collection Pauses</li>
                         </ul>

                        <p>Latency reduction is intimately tied to considerations, like:</p>
                         <ul>
                             <li>The CPU/Cache/Memory architecture</li>
                             <li>JVM architecture and design</li>
                             <li>Application design — concurrency, data structures and algorithms, and caching</li>
                             <li>Networking protocols</li>
                         </ul>

                        <p>Thoughtful application architecture, efficient software algorithms and optimal hardware operating environment are all key considerations for fighting latency.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogThree;