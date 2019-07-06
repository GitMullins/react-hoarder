import React from 'react';

class EditStuff extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="EditScat">
        <h1>Edit</h1>
        <h3>The editId is {editId}</h3>
      </div>
    );
  }
}

export default EditStuff;
