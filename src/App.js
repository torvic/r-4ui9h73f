import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ''
		}
	}
	handleChange = (e) => {
		this.setState({ data: e.target.value })
	}
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input onChange={this.handleChange} type="text" placeholder="Empieza a escribir algo"/>
        <p className="repeater">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
