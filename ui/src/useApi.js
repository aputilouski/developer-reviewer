import axios from 'axios';
import { useEffect, useState } from 'react';

let baseUrl=process.env.SERVER_URL || "http://localhost:9000"
export default function useApi(pageNumber){

  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  const [data,setData]=useState([])
  const [currentPage,setCurrentPage]=useState(0)

useEffect(()=>{
  console.log({currentPage,pageNumber}) 

  if(currentPage==pageNumber){
       return};
 axios.get(baseUrl+'/posts/'+pageNumber.toString()).then(res => {
  setData(prevData=> [...prevData,...res.data.rows])
  setCurrentPage(pageNumber)
  setLoading(false)
 })
},[pageNumber])
return {data,error,loading}

}
