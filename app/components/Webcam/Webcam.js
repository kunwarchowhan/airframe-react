import React from 'react';

class Webcam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        source: ""
      }
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(this.handleVideo)
    .catch(this.videoError)
  }

  handleVideo = (stream) => {
    this.setState({
    //   source: window.URL.createObjectURL(stream)
    source:stream
    })
    // const videoTracks = stream.getVideoTracks();
    // alert(`Using video device: ${videoTracks[0].label}`)
    const myVideo = document.querySelector("#webcam");
    myVideo.srcObject = this.state.source;
  }

  videoError = (err) => {
    alert(err)
  }

  render() {
    return (
    <div style={{ width: 310,
        height: 200 }} >
            <video id="webcam" height="200" width="310" autoplay></video>
    </div>
    );
  }
}

export {Webcam};
