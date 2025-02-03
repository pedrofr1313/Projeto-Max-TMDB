import { useState } from 'react';
import axios from 'axios';

const useDelete = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const deleteData = async (id) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${url}/${id}`);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data || "Erro ao deletar os dados");
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, deleteData };
};

export default useDelete;
