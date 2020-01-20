import React, { Component } from "react";
import "./styles.css";

const quotes = [
  "Be yourself, everyone else is already taken",
  "So many books, so little time",
  "You only live once, but if you do it right, once is enough",
  "In three words I can sum up everything I have learned about life: it goes on",
  "If you tell the truth, you dont have to remember anythin",
  "We accept the love we think we deserve"
];

const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
];

export default function App() {
  return (
    <div className="App">
      <Numbers />
    </div>
  );
}

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Welcome",
      image:
        "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
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
      <div>
        <h1>{this.state.quote}</h1>
        <button onClick={this.randImg}>Get a random image</button>
        <img src={this.state.image} />
      </div>
    );
  }
}
