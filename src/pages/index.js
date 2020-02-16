import React from "react";
import Header from "../components/navegation"
import "../styles/main.css"
import demoScreenURL from "../images/demo-screen-1.jpg";
import googlePlayBadge from "../images/google-play-badge.svg";
import appStoreBadge from "../images/app-store-badge.svg";

const Home = () => {
    return <>
        <Header />
        <header className="masthead">
            <div className="container h-100">
            <div className="row h-100">
                <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto text-center">
                    <h1 className="mb-5">Welcome to Swap Profit! <br></br><br></br>Your new exchange model for competitive gaming amongst peers where you can Swap potential Profits and earn rewards in your events. </h1>
                    <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Start Swapping!</a>
                </div>
                </div>
                <div className="col-lg-5 my-auto">
                <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                        <div className="screen">
                            <img src={demoScreenURL} className="img-fluid" alt="" />
                        </div>
                        <div className="button">
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
        <section className="download bg-primary text-center" id="download">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="section-heading">Download the app to get started!</h2>
                        <div className="badges">
                            <a className="badge-link" href="#"><img src={googlePlayBadge} alt="" /></a>
                            <a className="badge-link" href="#"><img src={appStoreBadge} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="features" id="features">
            <div className="container">
            <div className="section-heading text-center">
                <h2>Find Events Near You!</h2>
                <p className="text-muted">Earn rewards for your competitive event entries!</p>
                <hr />
            </div>
            <div className="row">
                <div className="col-lg-4 my-auto">
                <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                        <div className="screen">
                        <img src={demoScreenURL} className="img-fluid" alt="" />
                        </div>
                        <div className="button">
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-8 my-auto">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="feature-item">
                        <i className="icon-screen-smartphone text-primary"></i>
                        <h3>Fishing Tournaments</h3>
                        <p className="text-muted">Coming soon!</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-item">
                        <i className="icon-camera text-primary"></i>
                        <h3>Golf Tournaments</h3>
                        <p className="text-muted">Coming soon!</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="feature-item">
                        <i className="icon-present text-primary"></i>
                        <h3>Poker Tournaments</h3>
                        <p className="text-muted">Coming soon!</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-item">
                        <i className="icon-lock-open text-primary"></i>
                        <h3>Fitness Competitions</h3>
                        <p className="text-muted">Coming soon!</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="cta">
            <div className="cta-content">
            <div className="container">
                <h2>Done reading?<br />Start Swapping!</h2>
                <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Start Swapping!</a>
            </div>
            </div>
            <div className="overlay"></div>
        </section>

        <section className="contact bg-primary" id="contact">
            <div className="container">
            <h2>Join us on Social Media!</h2>
            <ul className="list-inline list-social">
                <li className="list-inline-item social-twitter">
                <a href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                </li>
                <li className="list-inline-item social-facebook">
                <a href="#">
                    <i className="fab fa-facebook-f"></i>
                </a>
                </li>
                <li className="list-inline-item social-google-plus">
                <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                </a>
                </li>
            </ul>
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