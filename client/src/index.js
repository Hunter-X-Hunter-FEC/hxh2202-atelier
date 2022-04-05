/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, David Liang, Bogdan Gordin
3/29/22
our Atelier App, will contain all of the componant modules
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Overview from "./components/Overview/overview.jsx" // <Overview />
// import RelatedItems from "./components/RelatedItems/relatedItems.js" // <RelatedItems />
// import Outfits from "./components/Outfits/outfits.js" // <Outfits />
// import qa from "./components/QA/qa.js" // <QA />
// import Reviews from "./components/Reviews/reviews.js" // <Reviews />
// var axios = require('axios');






class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: ''
    };

  }

  componentDidMount() {

  }



  render() {
    return (
      <div style={{ 'backgroundColor': 'AliceBlue' }}>
        <h1>header and logo here</h1>
        <Overview />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));