import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://json-api.uz/api/project/movies/movies";

const usePostData = function(body) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
  
    
  const postData = async () => {
    setLoading(true)
    try {
      const response = await axios.post(URL, body);

      if (response.status !== 200) {
        throw new Error("Qandaydir hatolik bor!");
      }

      setData(response.data.data);
    }catch (error) {
        setError(error.message);
    } finally {
        setLoading(false)
    }
  }
  useEffect(() => {
    postData()
  }, [])
  return { data, loading, error };
};

export default usePostData