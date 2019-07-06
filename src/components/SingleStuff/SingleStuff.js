import React from 'react';

class SingleStuff extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="EditScat">
        <h1>Single Stuff</h1>
        <h3>The editId is {editId}</h3>
      </div>
    );
  }
}

export default SingleStuff;
