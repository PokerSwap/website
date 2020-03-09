import React from "react";
import Header from "../components/navegation"
import "../styles/main.css"
import demoScreenURL from "../images/LoginScreenShot.png";
import googlePlayBadge from "../images/google-play-badge.svg";
import appStoreBadge from "../images/app-store-badge.svg";
import twitterURL from "../images/twitter.svg";
import facebookURL from "../images/facebook (1).svg";
import instagramURL from "../images/instagram.svg";
import { Link } from "gatsby";
import crossfitpic from "../images/Crossfit picture.jpg";
import fishingpic from "../images/Fishing picture.jpg";
import golfpic from "../images/Golf picture.jpg";
import pokerpic from "../images/Poker picture.jpg"
import stripeBadge from "../images/Stripe Logo.png"

const Home = () => {
    return <>
        <Header />
        <header className="masthead">
            <div className="container h-100">
            <div className="row h-100">
                <div className="col-lg-7 my-auto">
                <div className="header-content text-center">
                    <h1 className="mb-5">Welcome to Swap Profit! </h1>
                    <p>
                        Your new exchange model for competitive gaming amongst peers where you can Swap 
                        potential Profits and earn rewards in your events. 
                    </p>
                    <a href="#buttons" className="btn btn-outline btn-xl js-scroll-trigger">Let's Start Swapping!</a>
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
            <div id="buttons" className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="section-heading">Download the app to get started!</h2>
                        <div className="badges">
                            <a className="badge-link" href="#"><img src={googlePlayBadge} alt="" /></a>
                            <a className="badge-link" href="#"><img src={appStoreBadge} alt="" /></a>
                            <a className="badge-link" href="#"><img src={stripeBadge} alt="" /></a>
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
                        <div className="screen">
                        <img src={fishingpic} className="img-fluid" style={{ borderRadius: "7%"}} alt="" />
                        </div>
                        <p className="text-muted">Fishing Tournaments</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-item">
                        <i className="icon-camera text-primary"></i>
                        <div className="screen">
                        <img src={golfpic} className="img-fluid" style={{ borderRadius: "7%"}} alt="" />
                        </div>
                        <p className="text-muted">Golf Tournaments</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="feature-item">
                        <i className="icon-present text-primary"></i>
                        <div className="screen">
                        <img src={pokerpic} className="img-fluid" style={{ borderRadius: "7%"}} alt="" />
                        </div>
                        <p className="text-muted">Poker Tournaments</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-item">
                        <i className="icon-lock-open text-primary"></i>
                        <div className="screen">
                        <img src={crossfitpic} className="img-fluid" style={{ borderRadius: "7%"}} alt="" />
                        </div>
                        <p className="text-muted">Fitness Competitions</p>
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
                <a href="#buttons" className="btn btn-outline btn-xl js-scroll-trigger">Let's Start Swapping!</a>
            </div>
            </div>
            <div className="overlay"></div>
        </section>

        <section className="contact bg-primary" id="contact">
            <div className="container">
            <h2>Join us on Social Media!</h2>
            <ul className="list-inline list-social">
                <li className="list-inline-item social-twitter">
                <a href="https://twitter.com/SwapProfit">
                    <img src={twitterURL} className="icon" />
                </a>
                </li>
                <li className="list-inline-item social-facebook">
                <a href="https://www.facebook.com/Swap-Profit-111492173769539/?modal=admin_todo_tour">
                    <img src={facebookURL} className="icon" />
                </a>
                </li>
                <li className="list-inline-item social-instagram">
                <a href="https://www.instagram.com/swapprofit/">
                    <img src={instagramURL} className="icon" />
                </a>
                </li>
            </ul>
            </div>
        </section>

        <footer>
            <div className="container">
            <p>&copy; Swap Profit, LLC   2020. All Rights Reserved.</p>
            <ul className="list-inline">
                <li className="list-inline-item">
                <Link to="/">Home</Link> 
                <li className="list-inline-item">
                </li>
                <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li className="list-inline-item">
                <Link to="/terms">Terms and Conditions</Link>
                </li>
                <li className="list-inline-item">
                <Link to="/faqs">FAQ's</Link>
                </li>
                <li className="list-inline-item">
                <a href="mailto:info@swapprofitonline.com">Contact</a>
                </li>
            </ul>
            </div>
        </footer>;
    </>
};
export default Home;