import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    // binding functions to handle mouse to instance
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    // set display to none
    let style = { display: 'none' };

    if (this.state.hover) {
      // set display to inline-block
      style = { display: 'inline-block' };
    }
    return (
      <div className="project" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <a href="http://jackwelpott.com/">
          <img src="images/jackwelpott.jpg" className="img-responsive" alt="Responsive" />
          <div className="projectInfo" style={style}>
            <p>{'Photography Website'}<br />{'Languages: HTML, CSS, Javascript, PHP'}</p>
          </div>
        </a>
      </div>
    );
  }
}

module.exports = Project;
