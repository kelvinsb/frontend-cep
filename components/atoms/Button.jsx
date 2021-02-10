import PropTypes from "prop-types";

export default function Button({ type = "submit", label }) {
  return (
    <button
      type={type}
      className="rounded-lg shadow-md bg-blue-600 hover:bg-blue-500 font-semibold text-white hover:bg-grey py-2 px-4 m-1 max-w-full"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};
