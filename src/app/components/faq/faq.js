'use client'


import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Faq() {
  
  useEffect(() => {
    function closeAccordionSection() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').on('click', function (e) {
      e.preventDefault();
      const currentAttrValue = $(this).attr('href');

      if ($(e.target).hasClass('active')) {
        closeAccordionSection();
      } else {
        closeAccordionSection();
        $(this).addClass('active');
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }
    });

    return () => {
      $('.accordion-section-title').off('click');
    };
  }, []);


    return (
        <>
        <div className="section-one section-one-9 section-one-22">
  <div className="e-con-inner">
    <h2 className="elementor-heading-title elementor-size-default">
      Frequently Asked Questions{" "}
    </h2>
    <div className="accordion">
      <div className="accordion-section">
        <a href="#accordion-1" className="accordion-section-title">
          1. How do I sign up at Gold365? <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-1"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Registration is very simple. Click the “Sign Up” or “Register”
            button on our home page. You can also get your customer ID directly
            from the WhatsApp (recommended) button on the home page. You will be
            asked to provide your full name, active WhatsApp number, and email
            address to get started.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-2" className="accordion-section-title">
          2. Are there new player welcome bonuses at Gold365?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-2"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Yes, welcome offers and promotions are not only for new players but
            also old ones. Our current welcome bonus 100% bonus on your first
            deposit. Moreover, for old users, we have special bonuses on
            referrals + 1% lifetime referral bonuses.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-3" className="accordion-section-title">
          3. How many betting options are available on Gold365?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-3"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Gold365 has tons of betting options, including popular sports
            betting (e.g., football, cricket, tennis), live casino, virtual
            sports, and hundreds of other games. You can check all the lists
            from the top bar or side menu (in the Gold365 app).
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-4" className="accordion-section-title">
          4. What options are available for downloading the Gold365 apps?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-4"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Download the Gold365 app from the official website, which is
            available for Android and iOS. To install for the first time, you’re
            prompted with a warning, you can ignore it and click on “Install
            Anyway.”
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-5" className="accordion-section-title">
          5. How long does it take to get funds in my Gold365 account after a
          deposit?
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-5"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            UPI and E-Wallet deposits are generally credited within seconds. Net
            Banking transfers (IMPS, NEFT, RTGS) take 5 minutes, depending on
            the banking system. Cryptocurrency deposits require network
            confirmations, and for that, the timings may vary.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-6" className="accordion-section-title">
          6. What if I forget my Gold365 password?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-6"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            If you have forgotten your password, just click the “Forgot
            Password” link on the login page. You will be prompted to input your
            registered email address or WhatsApp number. You can also directly
            contact our support team on WhatsApp.{" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-7" className="accordion-section-title">
          7. How do I get customer support if I face any problem?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-7"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            We provide one-on-one customer assistance 24×7 with real humans (not
            chatbots). You can also get in touch with us via WhatsApp live chat.{" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-8" className="accordion-section-title">
          8. What if a match or an event on which I have bet is cancelled?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-8"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Our betting conditions include situations such as events being
            cancelled or postponed. Bets on cancelled events are usually void,
            and your bet is reimbursed, and the amount is credited to your
            Gold365 balance.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}