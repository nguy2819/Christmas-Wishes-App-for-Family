import React, { Component } from 'react'

export class CreateProject extends Component {
    state = {
        title: '',
        christmaswishes:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Your Christmas Wishes</h5>
            <div className="input-field">
                <label htmlFor="title">Title or Your Name</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="christmaswishes">Your Christmas Wishes</label>
                <textarea id="christmaswishes" className="materialize-textarea" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
        </form>
      </div>
    )
  }
}

export default CreateProject;
