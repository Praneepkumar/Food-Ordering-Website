const Contact = () => {
  return (
    <div className='container mx-auto mt-20 mb-32'>
      <h2 className='text-3xl font-semibold text-center mb-16'>
        Leave your details. We will get back soon.
      </h2>
      <div className='flex flex-col gap-8 w-5/12 mx-auto'>
        <input
          type='text'
          placeholder='Name'
          className='w-full block rounded-md p-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 md:text-base sm:text-sm sm:leading-6'
        />
        <input
          type='email'
          placeholder='Email'
          className='w-full block rounded-md p-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 md:text-base sm:text-sm sm:leading-6'
        />
        <input
          type='number'
          placeholder='Phone number'
          className='w-full block rounded-md p-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 md:text-base sm:text-sm sm:leading-6'
        />
        <textarea
          placeholder='Your Message'
          className='w-full block rounded-md p-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 md:text-base sm:text-sm sm:leading-6'
        />
        <button
          type='button'
          className='block  bg-slate-900 text-white p-4 rounded-md text-center hover:bg-slate-800'>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Contact;

/* 
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { name: "Name", location: "location" },
    };
     console.log("contructor called"); 
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
     console.log("componentDidMount"); 
  }
  /*  componentDidUpdate() {
    console.log("componentDidUpdate");
  } */
/*  componentWillUnmount() {
    console.log("componentWillUnmount");
  } *
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
}*/
