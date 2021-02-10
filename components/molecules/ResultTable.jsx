import PropTypes from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";

export default function ResultTable({ values = [], isLoading = true }) {
  if (isLoading) {
    return <ClipLoader color="#000" loading={isLoading} size={50} />;
  }
  if (values.length === 0) {
    return null;
  }
  return (
    <div className="container transition-opacity">
      <h3 className="py-2 text-xl">Dados do CEP:</h3>
      <table className="table-auto w-full border border-black rounded">
        <tbody>
          {values.map((element) => (
            <tr
              key={element.name}
              className={`${element.id % 2 ? "bg-gray-300" : "bg-gray-200"}`}
            >
              <td className="p-2 font-semibold">{element.name}</td>
              <td className="p-2">{element.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ResultTable.propTypes = {
  values: PropTypes.arrayOf({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
};
