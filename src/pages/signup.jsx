export default function Signup() {
  return (
    <div className="container">
      <div className="container-fluid">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="card" style={{ width: 300, minHeight: 200 }}>
            <div className="card-body">
              <h1 className="mb-4">Create Account</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Full Name
                </label>
                <input
                  type="userName"
                  className="form-control"
                  id="userName"
                  placeholder="ex: Vishnu Vardhan"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="**********"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="confirmPassword"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="**********"
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
