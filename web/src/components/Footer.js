import React, {Component} from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footerStyle} className="text-center navbar-fixed-bottom .bg-secondary">
      
      <div className="copyright-text">
        <p>© Weed Stuff 2019</p>
      </div>
      </footer>
    );
  }
}

const styles = {
  footerStyle: {
    padding: "10px",
    color: 'white',
    background: "grey"
    
  }
};

export default Footer;
