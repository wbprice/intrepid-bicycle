import React, { Component, PropTypes } from 'react'

import {
  submitNewCourse
} from './../../redux/actions/course-actions'

class NewCourseForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      shortcode: ''
    }
  }

  submitNewClass(event) {
    event.preventDefault()
    this.props.dispatch(submitNewCourse(this.state))
  }

  setNewClassTitle(event) {
    const title = event.target.value
    this.setState({
      title
    })
  }

  setNewClassShortcode(event) {
    const shortcode = event.target.value
    this.setState({
      shortcode
    })
  }

  setNewClassDescription(event) {
    const description = event.target.value
    this.setState({
      description
    })
  }

  render() {
    return (
      <form
        onSubmit={this.submitNewClass.bind(this)}
        className="pure-form pure-form-stacked">
        <fieldset>
          <legend>Create a new class</legend>

          <label htmlFor="title">Class Title</label>
          <input
            onChange={this.setNewClassTitle.bind(this)}
            value={this.state.title}
            id="title"
            type="text"
            placeholder="Class Title" />

          <label htmlFor="shortcode">Shortcode</label>
          <input
            onChange={this.setNewClassShortcode.bind(this)}
            value={this.state.shortcode}
            id="shortcode"
            type="text"
            placeholder="Shortcode" />

          <label htmlFor="description">Description</label>
          <textarea
            onChange={this.setNewClassDescription.bind(this)}
            value={this.state.description}
            id="description"
            type="text"
            placeholder="Class description" />
        </fieldset>

        <button className="pure-button pure-button-primary" type="submit">Submit</button>

      </form>
    )
  }

}

NewCourseForm.propTypes = {
  dispatch: PropTypes.func
}

export default NewCourseForm
