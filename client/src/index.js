/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, David Liang, Bogdan Gordin
3/29/22
our Atelier App, will contain all of the componant modules
*/

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './components/Ratings/RatingsAndReviews.jsx';
// var axios = require('axios');
// import qa from "./components/qa.js" // <QA />
// import Overview from "./components/qa.js" // <QA />
// import RelatedItems from "./3components/qa.js" // <QA />
// import Outfits from "./components/qa.js" // <QA />
// import Reviews from "./components/qa.js" // <QA />





class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: ''
    };

  }

  componentDidMount() {
    <p>Component Did Mount</p>
  }



  render() {
    return (
      <div>
        <div>
        CLOTHING!!!
        </div>
        <div>
        <RatingsAndReviews />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('atelier'));