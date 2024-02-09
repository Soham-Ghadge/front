// App.jsx
import React from 'react';

const Twit = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <title>Twitter News</title>
        <link rel="stylesheet" href="/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/components/styles.css" />
      </head>
      <body>
        {/* Twitter Timeline Widget Container */}
        <div className="twitter-container">
          {/* Bitcoin Timeline Widget */}
          <div className="twitter-timeline">
            <a className="twitter-timeline" data-lang="en" href="https://twitter.com/Bitcoin?ref_src=twsrc%5Etfw">
              Tweets by Bitcoin
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>

          {/* Ethereum Timeline Widget */}
          <div className="twitter-timeline">
            <a className="twitter-timeline" data-lang="en" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">
              Tweets by Ethereum
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>

          {/* Binance Timeline Widget */}
          <div className="twitter-timeline">
            <a className="twitter-timeline" data-lang="en" href="https://twitter.com/binance?ref_src=twsrc%5Etfw">
              Tweets by Binance
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>

          {/* Coinbase Timeline Widget */}
          <div className="twitter-timeline">
            <a className="twitter-timeline" data-lang="en" href="https://twitter.com/coinbase?ref_src=twsrc%5Etfw">
              Tweets by Coinbase
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>

          {/* Kraken Timeline Widget */}
          <div className="twitter-timeline">
            <a className="twitter-timeline" data-lang="en" href="https://twitter.com/krakenfx?ref_src=twsrc%5Etfw">
              Tweets by Kraken
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Twit;
