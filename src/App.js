import React from "react";
import img from "./images.jpg";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    Person: {
      fullNAME: "GASMI SONDES ",
      bio: `I design and code beautifully simple things,and I love what I do.In
      addition to my engineering training in communications and networks, I
      wanted to enhance my skills and knowledge by full-stack formation
      within Go my code.`,
      // imgSrc:{img},
      profession: "Full-stack Web Developer",
    },
    show: false,
  };
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: 500, color: "green" }}>My Profile</h1>
        <button
          onClick={this.toggleShow}
          className="show-btn"
          style={{ marginLeft: 550, marginBottom: 50 }}
        >
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.show && (
          <Profile Person={this.state.Person}>
            <img src={img} alt="myPhoto" />
          </Profile>
        )}
      </div>
    );
  }
}

export default App;
