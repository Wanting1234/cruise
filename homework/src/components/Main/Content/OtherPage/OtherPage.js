import React from "react";
import {Link} from "react-router-dom";
import './OtherPage.css';

export const OtherPage = ({match}) => {
        return(
            <section className="content-page" role="content-page">
                <h1>{match} Loading...</h1>
                <button className="esc-btn"><Link to="/" className="back-link">esc</Link></button>
            </section>
        )
}
