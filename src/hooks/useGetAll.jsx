import { useState } from "react";
import axios from "axios";

const useGetByCodigo = (baseUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAll = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}`, {
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

  return { data, error, loading, getAll };
};

export default useGetByCodigo;
