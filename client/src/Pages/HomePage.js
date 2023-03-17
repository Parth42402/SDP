import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Layout } from '../Components/Layout'
import { useState } from 'react'
import { Row } from 'antd'
import { HospitalList } from '../Components/HospitalList'

const HomePage = () => {

  const [hospitals,setHospitals]=useState([])
  //login user data
  const getUserdata=async()=>{
    try{
      const res=await axios.get('/api/v1/user/getAllHospitals',{
          headers:{
            Authorization:"Bearer "+ localStorage.getItem('token'),
          }
      })
      if(res.data.success){
        setHospitals(res.data.data);
      }
    }catch(error){
      console.log(error)
    }

  }
  useEffect(()=>{
    getUserdata()
  },[])

  return (
    <Layout>    
    <h1 className='text-center'>HomePage</h1>
    <Row>
      {hospitals && hospitals.map(hospital=>(
        <HospitalList hospital={hospital}/>
      ))}
    </Row>
    </Layout>

  )
}

export default HomePage