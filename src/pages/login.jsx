import { Formik } from "formik";

export default function Login() {
  return (
    <div className="container">
      <div className="container-fluid">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="card" style={{ width: 300, minHeight: 200 }}>
            <div className="card-body">
              <h1 className="mb-4">Login</h1>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
                validate={(value) => {
                  let errors = {};
                  if (value.email === "") {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      value.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  } else if (value.password === "") {
                    errors.password = "Required";
                  } else if (value.password.length <= 10) {
                    errors.password =
                      "Password should be minimum 11 characters";
                  }
                  return errors;
                }}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control mb-1"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p className="text-danger">{errors.email}</p>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-1"
                        id="password"
                        name="password"
                        placeholder="**********"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <p className="text-danger">{errors.password}</p>
                    </div>
                    <div className="form-check mb-3">
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={values.rememberMe}
                        id="rememberMe"
                        name="rememberMe"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                        type="button"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
