import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Form, useNavigate } from 'react-router-dom';
import { url } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';





const URL = () => {
  let navigate = useNavigate();

  let[data, setData] = useState([]);
  let [fullUrl, setfullUrl] = useState('');

  let logout = ()=>{
    navigate('/login');
  }

  let getData = async()=>{
    try {
      let res = await axios.get(`${url}/url/url`,{
      })
      toast.success(res.data.message);
      setData(res.data.urls);
    } catch (error) {
      if(error.response.status === 401 || error.response.status === 400)
      {
        toast.error(error.response.data.message);
        logout()
      }
    }
  }

  let handleShrink = async()=>{
    let payload = {fullUrl}
    try{
      let res = await axios.post(`${url}/url/addurl`, payload);
      toast.success(res.data.message);
      window.location.reload();
    }
    catch (error){
      toast.error(error.response.data.message);
      console.log(error);
    }
  }
  useEffect(()=>{
    getData();
  },[])

  // let handleClick = async(short)=>{
  //   try{
  //     let res = await axios.get(`${url}/url/${short}`);
  //     toast.success(res.data.message); 
  //     console.log(short);
  //   }
  //   catch (error){
  //     toast.error(error.response.data.message);
  //     console.log(error)
  //   }
  // }
  
  return (
       <div className='container my-5'>
       <div className="input">
       <input className="input-field" placeholder='Enter your URL here (use https://)' onChange={(e)=>setfullUrl(e.target.value)}>
       </input>
       <Button variant="primary" onClick={()=>handleShrink()}>
        Shrink Now!
      </Button>
       </div>
       <div className='table my-3'>
      <Table bordered hover>
        <thead>
          <tr>
          <th>#</th>
            <th>Full Url</th>
            <th>Short Url</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>{
              return <tr key={e.id}>
                <td>{i+1}</td>
                <td><a href = {e.fullUrl}>{e.fullUrl}</a></td>
                <td><a href = {`${url}/url/${e.shortUrl}`} >{e.shortUrl}</a></td>
                <td>{e.clicks}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
      </div>
      </div>
    );
}

export default URL;