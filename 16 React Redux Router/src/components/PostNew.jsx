import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createPost} from "../actions/index";

class PostNew extends Component {
  renderField(field) {
    // -Destructuring nested object:
    const {
      meta: {touched, error},
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" {...field.input} className="form-control" placeholder="input here..." />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    // console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title:" name="title" component={this.renderField} />
        <Field label="Categories:" name="categories" component={this.renderField} />
        <Field label="Post Content:" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger" style={{marginLeft: "10px"}}>
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values);
  const errors = {};
  // Validate the inputs from "values"
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters long";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter a content";
  }
  // If errors is errors, the form is fine to submit
  return errors;
}

export default reduxForm({
  form: "PostNewForm",
  validate: validate,
})(connect(null, {createPost})(PostNew));
