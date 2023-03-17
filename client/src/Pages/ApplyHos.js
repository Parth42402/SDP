import { Row, Col, Form, Input, TimePicker ,message} from 'antd'
import React from 'react'
import { Layout } from '../Components/Layout'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import axios from 'axios'
import moment from 'moment'


const ApplyHos = () => {


    const {user}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    //handle form
    const handleFinish = async(values) => {
        try{
              dispatch(showLoading())  
              const res=await axios.post('/api/v1/user/apply-hospital',{...values,userId:user._id,timings:[
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
                message.error(res.data.message)
              }


        }catch(error){
            console.log(error)
            message.error('Something went wrong')
        }
    }
    return (
        <>
            <Layout>
                <h1 className='text-center'>Apply Hospital</h1>
                <Form layout='vertical' onFinish={handleFinish} className='m-5'>
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
                                <button className='btn btn-primary form-btn'>Submit</button>
                            </div>
                        </Col>

                    </Row>


                </Form>
            </Layout>
        </>
    )
}

export default ApplyHos