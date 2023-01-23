import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      info: {
        fname: "Not Found",
        location: "Not Here",
      },
    };
    this.timer = setInterval(() => {
      console.log("Count");
    }, 1000);
    console.log(this.props.name + " class Constructor Call");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Kalpesh1012");
    const json = await data.json();
    this.setState({ info: json });
    console.log(this.state.info);
    console.log(this.props.name + " class componentDidMount");
  }
  componentDidUpdate() {
    console.log("Child ComponentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + " class render Call");
    return (
      <>
        <div>
          <h1>Profile Details</h1>
          <img src={this.state.info.avatar_url} />
          <h2>{this.state.info.name}</h2>
          <h2>{this.state.info.location}</h2>
        </div>
      </>
    );
  }
}
export default Profile;
