import { Formik } from "formik";

export default function Signup() {
  return (
    <div className="container">
      <div className="container-fluid">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="card" style={{ width: 350, minHeight: 200 }}>
            <div className="card-body">
              <h1 className="mb-4">Create Account</h1>
              <Formik
                initialValues={{
                  userName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validate={(values) => {
                  let errors = {};
                  if (values.userName === "") {
                    errors.userName = "Required";
                  } else if (values.userName.length < 10) {
                    errors.userName = "Username must be atleast 10 characters";
                  } else if (values.email === "") {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  } else if (values.password === "") {
                    errors.password = "Required";
                  } else if (values.confirmPassword === "") {
                    errors.confirmPassword = "Required";
                  } else if (values.password !== values.confirmPassword) {
                    errors.confirmPassword =
                      "Password do not match Actual password";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  console.log(values);
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
                        Full Name
                      </label>
                      <input
                        type="userName"
                        className="form-control mb-1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userName}
                        id="userName"
                        name="userName"
                        placeholder="ex: Vishnu Vardhan"
                      />
                      <p className="text-danger">{errors.userName}</p>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control mb-1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        id="email"
                        name="email"
                        placeholder="name@example.com"
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        id="password"
                        name="password"
                        placeholder="**********"
                      />
                      <p className="text-danger">{errors.password}</p>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="confirmPassword"
                        className="form-control mb-1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="**********"
                      />
                      <p className="text-danger">{errors.confirmPassword}</p>
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                        type="button"
                      >
                        Create Account
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
