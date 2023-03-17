import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../Components/Layout'
import { Form,Row,Col,Input ,TimePicker,message} from 'antd'
import { hideLoading, showLoading } from '../../redux/features/alertSlice'
import moment from 'moment'

export const Profile = () => {

    const {user}=useSelector((state)=>state.user)
    const [hospital,setHospital]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const params=useParams()

    const handleFinish = async(values) => {
        try{
              dispatch(showLoading())  
              const res=await axios.post('/api/v1/hospital/updateProfile',{...values,userId:user._id,timings:[
                moment(values.timings[0]).format("HH:mm"),
                moment(values.timings[1]).format("HH:mm"),

              ]},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              })
              dispatch(hideLoading())
              if(res.data.success){
                message.success(res.data.message)
                navigate('/')
              }
              else{
                message.error(res.data.success)
              }


        }catch(error){
            console.log(error)
            message.error('Something went wrong')
        }
    }

    //getHos Details
    const getHospitalInfo=async()=>{
        try{
            const res=await axios.post('/api/v1/hospital/getHospitalInfo',{userId:params.id},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            if(res.data.success){
                setHospital(res.data.data)
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getHospitalInfo()
    },[])

  return (
    <>
    <Layout>
        <h1>Manage Profile</h1>
        {hospital && (
            <Form layout='vertical' onFinish={handleFinish} className='m-5' initialValues={{
                ...hospital,
                timings:[
                    moment(hospital.timings[0],"HH:mm"),
                    moment(hospital.timings[1],"HH:mm"),

                ]
            }}>
                    <h5 className='text-light'>Personal Details</h5>
                    <Row gutter={30}>


                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Hospital name" name="hos_name" required rules={[{ required: true }]}>
                                <Input type="text" placeholder='Hospital name' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Phone No" name="phone" required rules={[{ required: true }]}>
                                <Input type="text" placeholder='Phone_no' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Email" name="email" required rules={[{ required: true }]}>
                                <Input type="text" placeholder='Email' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Website" name="website" required rules={[{ required: true }]}>
                                <Input type="text" placeholder='website' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Address" name="address" required rules={[{ required: true }]}>
                                <Input type="text" placeholder='Address' />
                            </Form.Item>
                        </Col>

                    </Row>

                    <h5 className='text-light'>Professional Details</h5>

                    <Row gutter={30}>


                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Fee Per Vaccine" name="feesPerVaccine" required rules={[{ required: true }]}>
                                <Input type="text" placeholder='Fee' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Timing" name="timings" required rules={[{ required: true }]}>
                                <TimePicker.RangePicker format="HH:mm" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-primary form-btn'>Update</button>
                            </div>
                        </Col>

                    </Row>


                </Form>
        )}
        </Layout>
    </>
  )
}
