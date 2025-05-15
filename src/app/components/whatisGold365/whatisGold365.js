'use client'
import Image from "next/image";

export default function WhatisGold365() {
    return (
        <>
       <div className="section-one section-one-3">
            <div className="e-con-inner">
                <div className="row">
                <div className="col-6 left">
                    <div className="left">
                    <h4>What is Gold365?</h4>
                    <p>
                        The Gold365 platform integrates sports betting and casino games into
                        one single platform that you can use to win real money.
                        <br /> In order to ensure quick and easy betting experiences, we
                        offer an instant and easy withdrawal service 24 hours a day.
                        <br /> On top of it, we offer the most secure betting platform on
                        which users can place bets without any hesitation.
                        <br /> So, if you want to place bets on football, cricket, or any
                        casino games of your choice, we back you with our 100% transparency
                        play.r 100% transparency play.
                    </p>
                    
                    <div className="text-left anc-tab">
                        <a
                        className="elementor-button elementor-button-link elementor-size-sm elementor-animation-pulse-grow"
                        href="#"
                        >
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Get Gold365 Login ID</span>
                        </span>
                        </a>
                    </div>
                    <br />
                    </div>
                </div>
                <div className="col-6 right">
                    <div className="right">
                    <div className="image">
                        <Image
                            className="img-fluid"
                            src="/images/gold365-Desktop-Mob-Mockup-1024x670.webp"
                            alt="Welcome to Gold365"
                            width={555}
                            height={363}      
                            />
                        
                    </div>
                    <br />
                    </div>
                </div>
                </div>
            </div>
            </div>       
            <br/>                     
        </>
    )
}
