import React from 'react';


class MenuDataProvider extends React.Component {
  state = {
    data: [],
    loaded: false,
    placeholder: "Loading..."
  }

  componentDidMount() {
    fetch('http://localhost:8000/' + this.props.endpoint)
    .then(response => {
      if (response.status !== 200) {
        return this.setState({ placeholder: 'Something went wrong.'})
      }
      return response.json();
    })
    .then(data => this.setState({ data: data, loaded: true }))
  }

  render() {
    const { loaded, data, placeholder } = this.state;
    return (
      loaded ?
      this.props.render(data) :
      <p>{ placeholder }</p>
    );
  }
}

export default MenuDataProvider;