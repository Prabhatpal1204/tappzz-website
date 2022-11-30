/* eslint-disable no-useless-escape */
import React from "react";
import tappzLogo2 from "../images/tappzLogo2.png";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBCardBody,
  MDBBtn,
  MDBCard,
  MDBCardImage,
} from "mdb-react-ui-kit";
import toast, { Toaster } from "react-hot-toast";
import { useRegisterMutation } from "../services/appApi";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [register] = useRegisterMutation();
  const handelRegister = (e) => {
    e.preventDefault();
    const pattern =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email === "" || password === "") {
      toast.error("Please fill in all fields", {
        style: { color: "#ed6f6f", fontWeight: "bold" },
      });
      return;
    }
    if (!pattern.test(email)) {
      toast.error("Please enter a valid email", {
        style: { color: "#ed6f6f", fontWeight: "bold" },
      });
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", {
        style: { color: "#ed6f6f", fontWeight: "bold" },
      });
      return;
    }
    if (!chechked()) {
      return;
    }
    register({ email, password, name }).then((res) => {
      navigate("/login");
    });
  };
  const chechked = () => {
    if (document.getElementById("checkbox1").checked) {
      return true;
    } else {
      toast.error("Please accept the terms and conditions", {
        style: { color: "#ed6f6f", fontWeight: "bold" },
      });
      return false;
    }
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBCard>
        <MDBCardBody className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCardImage
              style={{ width: 200, height: 100 }}
              src={tappzLogo2}
            />
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Name"
            id="form3"
            type="email"
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form3"
            type="email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form4"
            type="password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <MDBBtn
            className="mb-4 px-5 mt-4"
            color="dark"
            size="lg"
            onClick={handelRegister}
          >
            Sign Up
          </MDBBtn>
          <div className="d-flex justify-content-between  mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="checkbox1"
              value=""
              label="I agree to all terms and conditions"
            />
          </div>

          <p className="d-flex flex-row justify-content-center mt-5 ">
            Already have an account? <a href="#!">Login here</a>
          </p>

          <div className="d-flex flex-row justify-content-center">
            <a href="#!" className="small text-muted me-1">
              Terms of use.
            </a>
            <a href="#!" className="small text-muted">
              Privacy policy
            </a>
          </div>
        </MDBCardBody>
      </MDBCard>
      <Toaster />
    </MDBContainer>
  );
}

export default Register;
