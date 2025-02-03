import { useState } from "react";
import axios from "axios";

const useGetSearch = (baseUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getSearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}${query}`, {
        headers: { "Content-Type": "application/json" },
       
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

  return { data, error, loading, getSearch };
};

export default useGetSearch;
