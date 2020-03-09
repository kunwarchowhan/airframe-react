import React from 'react';

class ControlledLottie extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const animation = new window.bodymovin.loadAnimation({
        container: document.getElementById(this.props.id), // Required
        path: 'https://assets1.lottiefiles.com/packages/lf20_wdXBRc.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "Hello World", // Name for future reference. Optional.
      })
  }


  componentDidMount() {
    if (!window.bodymovin) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.6/lottie.js`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access lottie until the script is finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      /* TODO: Auto resize */
      <div style={{ width: 310,
                    height: 200 }} 
                    id={this.props.id}
                    class = "lottie" />
    );
  }
}

export {ControlledLottie};
