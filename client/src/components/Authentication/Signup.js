import React from "react";
import Home from "../Home";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

function Signup(params) {
  return (
    <div>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px", backgroundColor: "rgba(0 0 0/50%)"}}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                <p className="text-white-50 mb-5">Join for all the fun!</p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Username"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="First Name"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Last Name"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Email"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBBtn outline className="mx-2 px-5" color="white" size="lg">
                  SIGN UP
                </MDBBtn>

                <br></br>

                <div>
                  <p className="mb-0">
                    Already have an account?
                    <a
                      class="text-white-50 fw-bold cursor-pointer"
                      onClick={() => {
                        params.PUserPresent(true);
                      }}
                    >
                      {" "}
                      Login
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Signup;
