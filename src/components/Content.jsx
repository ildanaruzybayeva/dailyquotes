import React, { useState } from "react";
import "./Content.css";

const quotes = [
  "Be yourself, everyone else is already taken",
  "So many books, so little time",
  "You only live once, but if you do it right, once is enough",
  "In three words I can sum up everything I have learned about life: it goes on",
  "If you tell the truth, you dont have to remember anything",
  "We accept the love we think we deserve"
];

const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
];

const randomThing = array => array[Math.floor(Math.random() * array.length)];

function Content() {
  const [quote, setQuote] = useState(quotes[0]);
  const [image, setImage] = useState(images[0]);

  const handleClick = () => {
    setQuote(randomThing(quotes));
    setImage(randomThing(images));
  };

  return (
    <div className="content">
      <h1>{quote}</h1>
      <button onClick={handleClick}>Get a random quote</button>
      <div className="image">
        <img src={image} alt="wqeqwe" />
      </div>
      d
    </div>
  );
}

export default Content;
