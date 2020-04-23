import React, {Component} from 'react';
import {NavLink, HashRouter} from "react-router-dom";
import  './css/Main.css';
import  './css/RightColNav.css'

class RightColNav extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        // Insert YOUR API KEY HERE
        this.apikey = '07f4e2313dd0455c966438d37d942506'
    }

    async componentDidMount() {
        this.timer = setInterval(() => this.apicall(), 5000)


    }
    async apicall() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.apikey + '&pageSize=7')
            .then(response => response.json())
            .then(data => this.setState({ data }), 5000);

    }

    render() {
        console.log("api call", this.state.data);
        return (
            <div className="column right">
                <div className="Nav">
                    <HashRouter>
                        <nav>
                            <NavLink to="/" class="RightNav"><h6>Home</h6></NavLink>
                            <NavLink to="/BlogOne" class="RightNav"><h6>What Is Latency?</h6></NavLink>
                            <NavLink to="/BlogTwo" class="RightNav"><h6>How Is Latency Characterized?</h6></NavLink>
                            <NavLink to="/BlogThree" class="RightNav"><h6>What Contributes to Latency?</h6></NavLink>
                        </nav>
                    </HashRouter>
                </div>

                <div className="News"><h4>News and Announcements</h4>
                    <div>
                        {
                            this.state.data != null ?
                                this.state.data.articles.map(d => {
                                    return (
                                        <div className="news_t">
                                            <h6>{d.title}</h6>
                                        </div>

                                    )
                                })
                                : null
                        }
                    </div>
                </div>


            </div>

        )
    }
}
export default RightColNav;