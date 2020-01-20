import React, { Component } from "react";
import { quotes, images } from "./data";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Welcome",
      image:
        "https://ablehealth.com/wp-content/uploads/2018/11/asphalt-aspiration-clouds-215.jpg"
    };
    this.randQuote = this.randQuote.bind(this);
    this.randImg = this.randImg.bind(this);
  }

  randQuote() {
    const randIdx = Math.floor(Math.random() * quotes.length);
    const randVal = quotes[randIdx];
    this.setState({
      quote: randVal
    });
  }

  randImg() {
    const randIdx = Math.floor(Math.random() * quotes.length);
    const randVal = images[randIdx];
    this.setState({
      image: randVal
    });
  }

  render() {
    return (
      <div className="content">
        <h1>{this.state.quote}</h1>
        <button onClick={this.randQuote}>Get a random quote</button>
        <div className="image">
          <img src={this.state.image} alt="wqeqwe" />
        </div>
        d
      </div>
    );
  }
}

export default Content;
