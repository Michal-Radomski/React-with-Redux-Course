import React from "react";
// import {Field, reduxForm} from "redux-form";
import {Form, Field} from "react-final-form";

const StreamForm = (props) => {
  const renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.title) {
          errors.title = "You must enter a title";
        }

        if (!formValues.description) {
          errors.description = "You must enter a description";
        }

        return errors;
      }}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field name="description" component={renderInput} label="Enter Description" />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};

export default StreamForm;

// -----------------------------------------
// - Oryginalna wersja z Redux-Form
// class StreamForm extends React.Component {
//   renderError({error, touched}) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = ({input, label, meta}) => {
//     const classNameMine = `field ${meta.error && meta.touched ? "error" : ""}`;
//     // console.log(meta)
//     return (
//       <div className={classNameMine}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     // console.log(formValues);
//     this.props.onSubmit(formValues);
//   };

//   render() {
//     // console.log(this.props);
//     return (
//       <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field name="description" component={this.renderInput} label="Enter Description" />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "You must enter an title";
//   }
//   if (!formValues.description) {
//     errors.description = "You must enter a description";
//   }
//   return errors;
// };

// export default reduxForm({
//   form: "streamForm",
//   validate: validate,
// })(StreamForm);
