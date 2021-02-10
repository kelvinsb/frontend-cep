import PropTypes from "prop-types";
import { Form } from "@unform/web";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import axios from "axios";
import { useState } from "react";

export default function SearchCep({
  saveRequest = () => {},
  setIsloading = () => {},
}) {
  const [error, setError] = useState(null);
  async function handleSubmit(data) {
    const server = process.env.BACKEND_URL;
    console.log("dsada", server);
    setIsloading(true);
    const normalizedCep = data.cep.replace(/[^0-9]/g, "");
    try {
      const resultado = await axios.request({
        method: "get",
        url: `${server}/addresses/${normalizedCep}`,
      });
      saveRequest(resultado.data[0]);
      setError(null);
    } catch (err) {
      setError("Houve algum erro na requisição");
    } finally {
      setIsloading(false);
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          name="cep"
          type="text"
          label="Digite o cep"
          placeholder="Digite o cep"
          mask="99999-999"
        />
        <Button label="Pesquisar" type="submit" />
      </Form>
      {error ? (
        <div className="text-white bg-red-600 max-w-max rounded p-3">
          {error}
        </div>
      ) : null}
    </>
  );
}

SearchCep.propTypes = {
  saveRequest: PropTypes.func,
  setIsloading: PropTypes.func,
};
