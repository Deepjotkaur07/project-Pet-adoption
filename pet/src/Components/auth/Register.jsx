import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Tum yaha apna register logic add karo (API call ya local storage)
    alert("Registered Successfully!");
    navigate("/"); // ya /login page pe bhej do
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-7">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Register</h3>
            <form
              method="POST"
              id="registerForm"
              name="registerForm"
              className="contactForm"
              onSubmit={handleForm}
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={changeEmail}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-primary"
                    />
                    <div className="submitting" />
                  </div>
                </div>
              </div>
            </form>
            <div>
              Already have an account? <Link to={"/login"}>Login Here!</Link>
            </div>
          </div>
        </div>

        <div className="col-md-5 d-flex align-items-stretch">
          <div
            className="info-wrap w-100 p-5 img"
            style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
          ></div>
        </div>
      </div>
    </>
  );
}
