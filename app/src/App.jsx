import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./Components/Input";

function App() {
  const initialValues = {
    title: "",
    description: "",
    ratings: 0,
    url: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string()
      .required("Description is required")
      .min(5, "Description should be at least 5 characters"),
    ratings: Yup.number()
      .required("Ratings is required")
      .max(10, "Rating cannot be greater than 10"),
    url: Yup.string().url("Enter a valid URL").required("URL is required"),
  });
  return (
    <div className="App">
      <main className="App-header">
        <h1>Movie Card Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {({ setFieldValue,touched,error }) => (
            <Form>
              <Field
                type="text"
                name="title"
                id="title"
                placeholder="movie name"
              />
              <ErrorMessage name="title" component="div" />
              <Input
                name="title"
                type="text"
                id="title"
                label="Enter Movie Name"
                placeholder="movie Name"
                onChange = {(e) => setFieldValue('title', e.target.value)}
                // onBlur = {()=> (...touched, "title":true)}
              />

              <Field
                type="number"
                name="ratings"
                id="ratings"
                placeholder="rate the movie"
              />
              <ErrorMessage name="ratings" component="div" />

              <Field
                type="text"
                name="description"
                placeholder="write about movie"
                id="description"
              />
              <ErrorMessage name="description" />

              <button type="submit" >Submit</button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}

export default App;