/*
Hunter-X-Hunter FEC

Daniel Esquivel-Reynoso, Dora Xia, David Liang, Bogdan Gordin
3/29/22

our Atelier App, will contain all of the componant modules 

*/

import React from 'react';
import ReactDOM from 'react-dom';
var axios = require('axios');

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
      Hello Hunter X Hunter!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('atelier'));
