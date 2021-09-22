import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class PostNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" {...field.input} className="form-control" placeholder="input here..." />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Field label="Title:" name="title" component={this.renderField} />
        <Field label="Tags:" name="tags" component={this.renderField} />
        <Field label="Post Content:" name="content" component={this.renderField} />
      </div>
    );
  }
}

export default reduxForm({
  form: "PostNewForm",
})(PostNew);
