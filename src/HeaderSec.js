import React from 'react';
import  './css/HeaderSec.css';
import headerimg from './media/header-img.jpg';

function HeaderSec() {
    //render() {
        return (
            <div className="Head">
                <header>
                    <div>
                        <img src={headerimg} className="Head-img" alt="Low Latency Programming"/>
                    </div>
                    <h1 class="heading"> Blog: Inside the mind of a low latency developer! </h1>
                </header>
            </div>
        )
    //}
}

export default HeaderSec;