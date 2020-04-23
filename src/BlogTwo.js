import React, {Component} from 'react';
import blog2 from "./media/blog2-img.jpg";
import  './css/Main.css';


class BlogTwo extends Component{
    render() {
        return (
            <div className="column left BlogDiv">
                <div className="innerrow">
                    <h2 class="blogHead"><em>How Is Latency Characterized?</em></h2>
                    <div>
                        <img src={blog2} className="BlogImg" alt="Low Latency Programming" />
                    </div>
                    <div>
                        <p>Every operation has its own latency. With hundreds of operations, there are hundreds of latency measurements. Hence, we cannot use a single measure like number_of_operations/second, or num_of_seconds/operation to describe latency in a system because that is what can be used to describe a single run of that operation only.</p>
                        <p>Latency is best characterized in percentile terms.</p>

                        <p>If only 1 in 100 operations suffers a higher delay, isn't the system performance good enough?
                            Well, to gain some perspective, imagine a popular website with a 90th, 95th, and 99th percentile latency of 1, 2, and 25 seconds respectively. If any page on this website crosses a million page views per day, it means that 10000 of those page views take more than 25 seconds to load — at which point 10000 users have possibly stifled a yawn, closed their browser, and moved onto other things, or even worse, are now actively relating their dismal user experience on this website to friends and family. An online business can ill-afford tail latencies of such a high order. </p>

                        <p>In fact, many systems exhibit such characteristics where you find that latency numbers sometimes grow significantly, even exponentially as you go higher up the percentile ladder. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogTwo;