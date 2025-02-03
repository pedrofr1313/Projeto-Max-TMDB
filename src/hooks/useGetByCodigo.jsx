import { useState } from "react";
import axios from "axios";

const useGetByCodigo = (baseUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async (codigo) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/${codigo}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Permite cookies/sessões entre domínios
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data || "Erro ao buscar os dados");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getData };
};

export default useGetByCodigo;
