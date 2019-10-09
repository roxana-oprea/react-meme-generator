import React from 'react';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response =>
        this.setState({
          allMemeImages: response.data.memes,
        }),
      );
  }

  handleSubmit(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length);
    const randomMemeImage = this.state.allMemeImages[randomNumber].url;
    console.log('img', randomMemeImage);
    this.setState({
      randomImg: randomMemeImage,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form className="gene-form" onSubmit={this.handleSubmit}>
          <input
            className="gene-input"
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            className="gene-input"
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button className="gene-button">Generate a new meme here!</button>
        </form>
        <div className="meme-container">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top-text">{this.state.topText}</h2>
          <h2 className="bottom-text">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
