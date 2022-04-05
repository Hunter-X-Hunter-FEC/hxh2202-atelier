/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, David Liang, Bogdan Gordin
3/29/22
our Atelier App, will contain all of the componant modules
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
// var axios = require('axios');
// import qa from "./components/qa.js" // <QA />
// import Overview from "./components/qa.js" // <QA />
// import RelatedItems from "./components/qa.js" // <QA />
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

  }



  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('atelier'));