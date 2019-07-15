import React from 'react';
import { Link } from 'react-router-dom';

class MyStuff extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  }

  singleEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/stuff/${orderId}`);
  }

  render() {
    const singleLink = '/stuff/12345';
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className="btn btn-danger" onClick={this.editEvent}>Edit</button>
        <button className="btn btn-danger" onClick={this.singleEvent}>Single</button>
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default MyStuff;
