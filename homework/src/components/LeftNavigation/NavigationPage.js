import React from "react";
import {Link} from "react-router-dom";
import './NavigationPage.css';

export const NavigationPage = ({match}) => {
        return(
            <section className="navigation-page">
                <h1>{match} Loading...</h1>
                <button className="esc-btn"><Link to="/" className="back-link">esc</Link></button>
            </section>
        )
}
