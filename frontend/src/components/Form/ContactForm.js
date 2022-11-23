import React from "react";
import axios from "axios";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import * as yup from "yup";
import { useLocation } from "react-router-dom";
import SuccessContact from "./SuccessContact";
import { ReactComponent as LoadingIcon } from "../../image/Loading.svg";
import { apis } from "../../constants";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required.")
    .email("Email is not Valid."),
  message: yup.string().required("Message is Required"),
});

const ContactForm = (props) => {
  const { pathname } = useLocation();

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  return (
    <Container>
      {!showResults && (
        <Row className=" d-flex justify-content-center">
          <Col md={12}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ email: "", message: "" }}
              onSubmit={async (values, actions) => {
                console.log("Some Values");
                console.log(values);

                const _values = {
                  ...values,
                  course: pathname.split("/").join(""),
                };

                try {
                  const res = await axios.post(apis.contactUs, _values);
                  if (res.status === 200) {
                    console.log(res.data);
                    actions.setSubmitting(false);

                    setShowResults(true);
                  }
                } catch (error) {
                  console.error("ERROR", error);
                }
                // actions.setSubmitting(false);
                //   axios
                //     .post(
                //       "http://localhost:8090/api/message/doions-education",
                //       values
                //     )
                //     .then(function (response) {
                //       console.log(response);
                //     })
                //     .catch(function (error) {
                //       console.log(error.response);
                //     })

                actions.resetForm();
              }}
            >
              {({ values, errors, touched, dirty, isValid, isSubmitting }) => (
                <FormikForm>
                  <Field
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    as={FormControl}
                    style={{ borderRadius: "0px" }}
                  />
                  <ErrorMessage name="email" render={CustomError} />
                  <br />

                  <Field name="message">
                    {({ field, form, meta }) => (
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: "100px", borderRadius: "0px" }}
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

export default ContactForm;

const Results = (props) => (
  <div id="results" className="search-results">
    <SuccessContact {...props} />
  </div>
);

function CustomError(msg) {
  return <p className="fs-6 mb-2 text-danger">{msg}</p>;
}
