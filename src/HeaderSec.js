import React from 'react';
import  './css/HeaderSec.css';
import headerimg from './media/header-img.jpg';

function HeaderSec() {
    //render() {
        return (
            <div className="Head">
                <header>
                    <h1 className="heading"> Blog: Inside the mind of a low latency developer! </h1>
                    <div>
                        <img src={headerimg} className="Head-img" alt="Low Latency Programming"/>
                    </div>

                </header>
            </div>
        )
    //}
}

export default HeaderSec;