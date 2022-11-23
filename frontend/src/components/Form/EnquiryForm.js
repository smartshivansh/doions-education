import React from "react";
import axios from "axios";
import SuccessForm from "../Form/SuccessFrom";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import * as yup from "yup";
import { apis } from "../../constants";
import { ReactComponent as LoadingIcon } from "../../image/Loading.svg";

const validationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  phone: yup
    .string()
    .required("Phone Number is Required.")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: yup
    .string()
    .required("Email is Required.")
    .email("Email is not Valid."),
  message: yup.string().required("Message is Required"),
});

const EnquireForm = (props) => {
  console.log(props);
  const [showResults, setShowResults] = React.useState(false);

  return (
    <Container>
      {!showResults && (
        <Row className=" d-flex justify-content-center">
          <Col md={10}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ name: "", phone: "", email: "", message: "" }}
              onSubmit={async (values, actions) => {
                console.log(values);
                // Send a POST request
                actions.setSubmitting(true);
                try {
                  const res = await axios.post(apis.sendEnquiryMessage, values);
                  if (res.status === 200) {
                    console.log(res.data);
                    actions.setSubmitting(false);

                    setShowResults(true);
                  }
                } catch (error) {
                  console.error("ERROR", error);
                }
              }}
            >
              {({ values, errors, touched, dirty, isValid, isSubmitting }) => (
                <FormikForm autoComplete="off">
                  <Field
                    name="name"
                    placeholder="Name"
                    type="text"
                    as={FormControl}
                  />
                  <ErrorMessage name="name" render={CustomError} />
                  <br />

                  <Field
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    as={FormControl}
                  />
                  <ErrorMessage name="email" render={CustomError} />
                  <br />

                  <Field
                    name="phone"
                    placeholder="Mobile no."
                    type="text"
                    as={FormControl}
                  />
                  <ErrorMessage name="phone" render={CustomError} />
                  <br />

                  <Field name="message">
                    {({ field, form, meta }) => (
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: "100px" }}
                        {...field}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="message" render={CustomError} />
                  <br />
                  <div className=" d-flex justify-content-center">
                    <button
                      type="submit"
                      className={
                        " py-2 px-4 btn fs-5 fw-bold rounded-0 SubBtn "
                      }
                      disabled={!dirty || !isValid}
                    >
                      {isSubmitting && <LoadingIcon className="lg-icon me-2" />}
                      <span>Submit</span>
                    </button>
                  </div>
                </FormikForm>
              )}
            </Formik>
          </Col>
        </Row>
      )}
      {showResults && <Results {...props} />}
    </Container>
  );
};

export default EnquireForm;

const Results = (props) => (
  <div id="results" className="search-results">
    <SuccessForm {...props} />
  </div>
);

function CustomError(msg) {
  return <p className="fs-6 mb-2 text-danger">{msg}</p>;
}
