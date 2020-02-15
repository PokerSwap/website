import React from "react";
import Header from "../components/navegation"
import "../styles/main.css"
import demoScreenURL from "../images/demo-screen-1.jpg";
import googlePlayBadge from "../images/google-play-badge.svg";
import appStoreBadge from "../images/app-store-badge.svg";

const Home = () => {
    return <>
        <Header bgColor="bg-dark" />
        <section className="contact" id="contact">
            <div className="container">
            akjsdasdkj
            </div>
        </section>

        <footer>
            <div className="container">
            <p>&copy; Your Website 2019. All Rights Reserved.</p>
            <ul className="list-inline">
                <li className="list-inline-item">
                <a href="#">Privacy</a>
                </li>
                <li className="list-inline-item">
                <a href="#">Terms</a>
                </li>
                <li className="list-inline-item">
                <a href="#">FAQ</a>
                </li>
            </ul>
            </div>
        </footer>;
    </>
};
export default Home;