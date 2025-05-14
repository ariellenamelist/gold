'use client'
import React from "react";
import Image from "next/image";



export default function DepositWithdrawal() {

    return (

      <>
  <div className="section-one section-one-9c section-one-10">
    <div className="e-con-inner">
      <h2 className="elementor-heading-title elementor-size-default">
        The deposit and withdrawal process at Gold365: a step-by-step guide
      </h2>
      <p>
        <strong>Depositing Funds </strong>{" "}
      </p>
      <p>
        Adding money to your Gold365 balance is as simple as signing up. You’ve
        got a number of online payment options, and here are the steps:{" "}
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Log in to the
        Gold365 account.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> On the top
        right corner and click on your customer ID.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Click on the
        “Deposits” button and enter the amount you want to add.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Select your
        preferred payment method, such as UPI, credit card, debit card, net
        banking, etc.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> On the next
        page, enter your UPI ID/card details/net banking.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Complete the
        payment by confirming it by entering the UPI pin or OTP (in card
        transactions).
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> After
        successful payment, we credit your account instantly.
      </p>
      <p>
        Note: Limits, processing times, and steps can vary by method. Here’s
        what you need to know.
      </p>
      <p>
        <b>Withdrawing Funds</b>
      </p>
      <p>
        Thinking about cashing out? You’ll need at least ₹100 in your Gold365
        account to initiate your withdrawal. Here’s how you get money into your
        account.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Click your
        Customer ID in the top right corner.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Now choose
        Withdrawal from the menu.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Type in the
        amount you want to withdraw.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Hit the
        Withdrawal button and choose your payout method.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> If you’re
        doing it for the first time, you need to enter your UPI ID or bank
        details with the IFSC code.
      </p>
      <p>
        <img src="images/box.jpg" className="img-fluid box-ic" /> Tap Confirm
        Withdrawal
      </p>
      <p>
        Note: Gold365 lets you choose between payout methods, but UPI is by far
        the fastest. UPI withdrawals usually get reflected within five minutes.
        And in case you have chosen bank transfer, it can take up to 4 hours.
      </p>
      <p>
        <b>Supported Payment Methods</b>
      </p>
      <p>
        We support several deposit methods. UPI is by far the quickest, but you
        can use cards or bank transfers too.
      </p>
      <div className="table-container table-responsive py-3">
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <th> Payment Method</th>
              <th> Accepted </th>
              <th> Steps for Use</th>
              <th> Note</th>
            </tr>
            <tr>
              <td>UPI (e.g., PhonePe)</td>
              <td>Yes</td>
              <td>Enter UPI ID; approve pay </td>
              <td>Fastest, 1-2 mins confirmation</td>
            </tr>
            <tr>
              <td>Credit/Debit Card</td>
              <td>Yes</td>
              <td>Enter card details</td>
              <td>Secure, may charge extra fees by bank</td>
            </tr>
            <tr>
              <td>Net Banking</td>
              <td>Yes</td>
              <td>Log in to your bank account</td>
              <td>Quick, requires bank login</td>
            </tr>
            <tr>
              <td>Bank Transfer</td>
              <td>Yes</td>
              <td>Add Gold365 as a payee </td>
              <td>Took about 30 mins</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Pick whatever works for you, and the max deposit limit is ₹49,500 per
        transaction. However, 1 lakh limit for withdrawal.{" "}
      </p>
      <p>
        <b>Processing Times</b>
      </p>
      <ul>
        <li>UPI: Within 1-2 minutes.</li>
        <li>Credit/Debit Card: 5-10 minutes. </li>
        <li>Net Banking: 5-15 minutes. </li>
        <li>Bank Transfer: Up to 30 minutes.</li>
      </ul>
    </div>
  </div>
  <br />
</>


    )
}