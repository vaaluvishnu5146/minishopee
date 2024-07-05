import PropTypes from "prop-types";

export default function CartCard({
  data = {},
  handleQuantityChange = () => {},
}) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>

        <img className="card-img-top" src={data.image} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => handleQuantityChange(data.id, "decrement")}
            >
              -
            </button>
            <h1>{data.quantity}</h1>
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => handleQuantityChange(data.id, "increment")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.object,
  handleQuantityChange: PropTypes.func,
};
