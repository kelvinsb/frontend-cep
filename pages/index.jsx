import Head from "next/head";
import { useState } from "react";
import Header from "../components/atoms/Header";
import ResultTable from "../components/molecules/ResultTable";
import SearchCep from "../components/molecules/SearchCep";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  function saveRequest(data) {
    setData([
      {
        id: 1,
        name: "Cep",
        value: data.cep,
      },
      {
        id: 2,
        name: "Logradouro",
        value: data.logradouro,
      },
      {
        id: 3,
        name: "Complemento",
        value: data.complemento,
      },
      {
        id: 4,
        name: "Bairro",
        value: data.bairro,
      },
      {
        id: 5,
        name: "Cidade",
        value: data.localidade,
      },
      {
        id: 6,
        name: "Estado",
        value: data.uf,
      },
    ]);
  }
  return (
    <div>
      <Head>
        <title>Busca de CEP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-xl mx-auto min-h-screen">
        <Header />
        <div className="border-b-1 border-blue-900 border-solid px-8 py-4 bg-gray-300 shadow-inner">
          <SearchCep saveRequest={saveRequest} setIsloading={setIsloading} />
        </div>
        <div className="border-t-1 border-blue-900 border-solid bg-gradient-to-b from-gray-400 via-gray-200 to-white mx-auto p-8">
          <ResultTable values={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
