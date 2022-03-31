import React from "react";


class addtoCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>Size Selector</div>                  //how to do dropdown
        <div>Quantity Selector</div>              //how to do dropdown
        <form onSubmit={this.handleSubmit}>       //need to pass down handlesubmit from top level
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add to Cart" />
        </form>
        <button onClick={}> Favorite </button>    //need to add handler here
      </div>
    );
  }
}


export default addToCart;



// const addToCart = (props) => {
//   return (
//     <div>Select Selector</div>
//     <div>Quantity Selector</div>
//     <div>Add to Cart</div>
//     <div>Favorite</div>
//   )
// };