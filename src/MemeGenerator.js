import React from 'react';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <form className="gene-form">
        <input className="gene-input" type="text" />
        <input className="gene-input" type="text" />
        <button className="gene-button">Generate a new meme here!</button>
      </form>
    );
  }
}

export default MemeGenerator;
