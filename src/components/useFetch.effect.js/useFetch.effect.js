import {useEffect, useState} from 'react';

const useFetch = (DataSourceUrl) => {
  const [data, setData] = useState([])
  useEffect(()=> {
    const fetchData = () => {
      fetch(DataSourceUrl)
        .then(response=> response.json())
        .then(data=>setData(data))
    }
    fetchData()
  })

  return data
}

export default useFetch;