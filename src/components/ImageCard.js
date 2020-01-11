import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // after the thing is rendered
    // console.log(this.imageRef);
    this.imageRef.current.addEventListener("load", this.setSpans);

    // but if we console log the actual client heigh, it will show 0. What's happen?
    // the reason is beacuse it's too early, because the image isn't rendered yet into the DOM
    // console.log(this.imageRef.current.clientHeight);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />;
      </div>
    );
  }
}

export default ImageCard;
