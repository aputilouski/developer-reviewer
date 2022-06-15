import axios from 'axios';
import { useEffect, useState } from 'react';

let baseUrl="http://localhost:9000"  //remote server: https://meme-202.herokuapp.com/
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
 }).catch(e=>{
  setError(error)
 })
},[pageNumber])
return {data,error,loading}

}
