import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import * as yup from "yup";
// import Submit from "../Button/Submit";
import SuccessForm from "../Form/SuccessFrom";
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
});

const ApplyFormDigitalMarketing = (props) => {
  const [showResults, setShowResults] = React.useState(false);
  // const onClick = () => setShowResults(true);

  return (
    <Container>
      {!showResults && (
        <Row className=" d-flex justify-content-center">
          <Col md={10}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ name: "", phone: "", email: "" }}
              onSubmit={async (values, actions) => {
                console.log(values);
                actions.setSubmitting(true);

                try {
                  const _values = {
                    ...values,
                    startingPreference: values.StartThisCourse,
                    contactTimePreference: values.SuitableTime,
                  };
                  const res = await axios.post(apis.basicDM, _values);
                  if (res.status === 200) {
                    console.log(res.data);
                    actions.setSubmitting(false);

                    setShowResults(true);
                  }
                } catch (error) {
                  console.error("ERROR", error);
                }
                // axios
                //   .post(
                //     "http://localhost:8090/api/message/doions-education",
                //     values
                //   )
                //   .then(function (response) {
                //     console.log(response);
                //   })
                //   .catch(function (error) {
                //     console.log(error.response);
                //   })
              }}
            >
              {({ values, errors, touched, dirty, isValid, isSubmitting }) => (
                <Form>
                  <Field
                    name="name"
                    placeholder="Name"
                    type="text"
                    as={FormControl}
                  />
                  <ErrorMessage name="name" render={CustomError} />
                  <br />

                  <Field
                    name="phone"
                    placeholder="Mobile no."
                    type="text"
                    as={FormControl}
                  />
                  <ErrorMessage name="phone" render={CustomError} />
                  <br />

                  <Field
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    as={FormControl}
                  />
                  <ErrorMessage name="email" render={CustomError} />
                  <br />

                  <div role="group" aria-labelledby="my-radio-group">
                    <h4>When do you want to start this course?</h4>
                    <label>
                      <Field
                        type="radio"
                        name="StartThisCourse"
                        value="Within this week"
                      />
                      &nbsp; Within this week
                    </label>
                    <br />
                    <label>
                      <Field
                        type="radio"
                        name="StartThisCourse"
                        checked={true}
                        value="Within this month"
                      />
                      &nbsp; Within this month
                    </label>
                    <br />
                    <label>
                      <Field
                        type="radio"
                        name="StartThisCourse"
                        value=" Next month"
                      />
                      &nbsp; Next month
                    </label>
                    <br />
                    <label>
                      <Field
                        type="radio"
                        name="StartThisCourse"
                        value="other"
                      />
                      &nbsp; other
                    </label>
                  </div>

                  <br />
                  <div role="group" aria-labelledby="my-radio-group">
                    <h4>Suitable time to contact you.</h4>
                    <label>
                      <Field
                        type="radio"
                        name="SuitableTime"
                        checked={true}
                        value="09Am- 12pm"
                      />
                      &nbsp; 09Am- 12pm
                    </label>
                    <br />
                    <label>
                      <Field
                        type="radio"
                        name="SuitableTime"
                        value="12Pm- 03pm"
                      />
                      &nbsp; 12Pm- 03pm
                    </label>
                    <br />
                    <label>
                      <Field
                        type="radio"
                        name="SuitableTime"
                        value="03Pm- 06pm"
                      />
                      &nbsp; 03Pm- 06pm
                    </label>
                  </div>

                  <br />
                  <div className=" d-flex justify-content-center">
                    <button
                      type="submit"
                      className={
                        " mb-5 py-2 px-4 btn fs-5 fw-bold rounded-0 SubBtn "
                      }
                      disabled={!dirty || !isValid}
                    >
                      {isSubmitting && <LoadingIcon className="lg-icon me-2" />}
                      <span>Submit</span>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      )}
      {showResults && <Results {...props} />}
    </Container>
  );
};

export default ApplyFormDigitalMarketing;
const Results = (props) => (
  <div id="results" className="search-results">
    <SuccessForm {...props} />
  </div>
);

function CustomError(msg) {
  return <div style={{ color: "red" }}>{msg}</div>;
}
