'use client'
import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Fantasygames() {

        const settings = {          
          infinite: true,
          spacing: 15,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 768, // screens less than 768px
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ],
        };

    return (
        <>
      
  <div className="section-one section-one-14">
    <div className="e-con-inner">
      <div className="row">
        <div className="col-12">
          <div className="left text-center">
            <h2 className="elementor-heading-title elementor-size-default">
              {" "}
              Are there any fantasy games available at Gold365?
            </h2>
            <div className="top--slider">
            <Slider {...settings}>
                <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-01.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-02.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-03.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-04.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-06.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-05.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-06.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-07.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-08.webp"
                    alt="Welcome to Gold365"
                    width={174}
                    height={235}      
                    />
                 </div>
            </Slider>            
            </div>
            <br />
            <div className="elcontainer text-left">
              <p>
                <strong>1. Cricket: </strong> Major series such as the IPL,
                World Cup, T20s, One-day and Test series – we offer both
                pre-match and live betting options. We give a huge number of
                opportunities to our users such as toss-winner, match-winner,
                total runs, top bowler, top batsman and other great highlighting
                events in the game.
              </p>
              <p>
                <strong>2. Football:</strong> For football enthusiasts, we offer
                a number of leagues like the English Premier League, La Liga,
                Serie A, UEFA Champions League, and FIFA World Cup. Bets
                included are; Full Time/Full Time, Total goals, Goal difference,
                etc.{" "}
              </p>
              <p>
                <strong>3. Tennis:</strong> If you choose Tennis, then, we give
                you options to bet on grand tournaments such as Wimbledon, US
                Open, and others. You can bet on a single or team win along with
                betting options such as match winner, set winner, total sets,
                etc.{" "}
              </p>
              <p>
                <strong>4. Horse Racing:</strong> Placing bets on horse racing
                is popular from old ages. We also give our users the same thrill
                experience with our platform. You can bet which horse will win
                or the position on which a horse finishes the race.
              </p>
              <p>
                <strong>5. Basketball:</strong> Leagues such as FIBA, NBA, NCAA,
                or BCL, etc. all are included in our platform. You can place a
                bet on which team will win, or which player will score the
                highest goals or what is the difference between the wins of the
                basket.{" "}
              </p>
            </div>
            <br />
            <h3 className="elementor-heading-title elementor-size-default">
              {" "}
              Online Casino Games
            </h3>{" "}
            <br />
            <div className="elcontainer text-left">
              <p>
                If you don't want to play sports or don't like any sports at all
                then we also have casino game options. And this is what makes
                our platform unique. So at Gold365, you are not only able to
                play fantasy sports but also classic casino games.
              </p>
              <p>
                There are tons of casino games that simply means{" "}
                <b>you always have a game to play</b>– and don't run with
                options. Our Goal 365 casino section offers classic table games,
                exciting slots, or even live dealer interactive events.
              </p>
              <div className="f-bx">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">                       
                        <Image
                          className="img-fluid"
                          src="/images/slot_game-1.webp"
                          alt="Gold365 Login ID"
                          width={360}
                          height={240}      
                          />
                      </div>
                      <div className="inf">
                        <h4>Slot Games</h4>
                        <p>
                          You can play from a 100+ list of games with different
                          themes, features and series of jackpots. Some major
                          games included are pino, slots, craps, video poker,
                          live dealer, and bingo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">
                      <Image
                          className="img-fluid"
                          src="/images/slot_game-2.webp"
                          alt="Gold365 Login ID"
                          width={360}
                          height={240}      
                          />
                      </div>
                      <div className="inf">
                        <h4>Slot Games</h4>
                        <p>
                          You can challenge yourself in live or virtual formats
                          which include formats such as classic table games
                          baccarat, roulette, and blackjack.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">
                      <Image
                          className="img-fluid"
                          src="/images/slot_game-3.webp"
                          alt="Gold365 Login ID"
                          width={360}
                          height={240}      
                          />                       
                      </div>
                      <div className="inf">
                        <h4>Slot Games</h4>
                        <p>
                          If you don't want to play against faceless humans or
                          digital boards, you can join our premium live casino
                          event. It is a real and live casino with all live
                          players along with live dealers. It gives a great
                          experience which mimics that you are really playing
                          live in a casino.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>{" "}
            <br />
            <h3 className="elementor-heading-title elementor-size-default">
              {" "}
              Here’s a quick table showing common fantasy game types:{" "}
            </h3>{" "}
            <br />
            <div className="table-container table-responsive py-3">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr>
                    <th>Entertainment Category</th>
                    <th> Popular Games &amp; Events </th>
                    <th> Key Features</th>
                    <th> Betting Range</th>
                  </tr>
                  <tr>
                    <td>Cricket </td>
                    <td>IPL, World Cups, BBL, PSL, Domestic Leagues</td>
                    <td>Live In-Match Betting, per ball/over bets</td>
                    <td>₹2 to ₹1 lakhs</td>
                  </tr>
                  <tr>
                    <td>Football &amp; Other Sports</td>
                    <td>
                      Premier League, La Liga, NBA, Tennis, Kabaddi, Horse
                      Racing
                    </td>
                    <td>Bet on Global Sports, Acca Boost </td>
                    <td>₹2 to ₹1 lakhs</td>
                  </tr>
                  <tr>
                    <td>Authentic Desi Card Games</td>
                    <td>
                      Teen Patti (6 variants), Andar Bahar, Marriage Card, 32
                      Cards
                    </td>
                    <td>Play Classic Indian Games, Hindi-Speaking Dealers</td>
                    <td>₹2 to ₹1 lakh</td>
                  </tr>
                  <tr>
                    <td>Classic International Cards</td>
                    <td>Blackjack, Poker, Baccarat, Rummy, Dragon Tiger</td>
                    <td>Standard Casino Games, Auto-Translate Option</td>
                    <td>₹5 to ₹2 lakhs</td>
                  </tr>
                  <tr>
                    <td>Roulette &amp; Immersive Tables </td>
                    <td>European/American/French Roulette, Sic Bo, Craps</td>
                    <td>Multiple Table Types, Multi-Camera Angles</td>
                    <td>₹5 to ₹2 lakhs</td>
                  </tr>
                  <tr>
                    <td>Exciting Fast Games</td>
                    <td>Aviator, Crash, Dice, Plinko, Mines </td>
                    <td>Instant Results, Quick Gameplay</td>
                    <td>₹5 to ₹50k </td>
                  </tr>
                  <tr>
                    <td>Diverse Slot Machines</td>
                    <td>
                      Bollywood Themes, Mythology, Lucky 7s (200+ options)
                    </td>
                    <td>Huge Game Selection, Progressive Jackpots </td>
                    <td>₹2 to ₹10k per spin </td>
                  </tr>
                  <tr>
                    <td>Premium Live Casino </td>
                    <td>Live Dealers for Cards, Roulette, etc.</td>
                    <td>Real-time Interaction, HD Streaming, VIP Tables</td>
                    <td>₹100 to ₹2 lakhs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />



                            
        </>
    )
}
