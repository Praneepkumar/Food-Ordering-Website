import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { name: "Name", location: "location" },
    };
    /*  console.log("contructor called"); */
  }

  render() {
    return (
      <>
        <ContactDetails user={this.state.user} />
      </>
    );
  }
  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/Praneepkumar");
    const json = await res.json();

    this.setState({ user: json });
    /* console.log("componentDidMount"); */
  }
  /*  componentDidUpdate() {
    console.log("componentDidUpdate");
  } */
  /*  componentWillUnmount() {
    console.log("componentWillUnmount");
  } */
}
class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location, avatar_url } = this.props.user;

    return (
      <div className='container container-inner'>
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h4>{location}</h4>
      </div>
    );
  }
  componentDidMount() {}
}
export default Contact;
