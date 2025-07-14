import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "2025") {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-7">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Login</h3>
            <form
              method="POST"
              id="contactForm"
              name="contactForm"
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
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="subject">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary"
                    />
                    <div className="submitting" />
                  </div>
                </div>
              </div>
            </form>
            <div>
              Don't have an account? <Link to={"/register"}>Register Here!</Link>
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
