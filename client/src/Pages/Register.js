import React from 'react'
import { Form, Input, message } from 'antd'
import '../styles/RegisterStyles.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice'


const Register = () => {

    const navigate = useNavigate("")
    const dispatch = useDispatch()
    //form handler
    const onFinishHandler = async (values) => {
        try {
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/register', values)
            dispatch(hideLoading())
            if (res.data.success) {
                message.success('Register Successfully!!')
                navigate('/login')
            }
            else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading())
            console.log(error)
            message.error('Something went wrong');
        }
    };
    return (
        <>
            {/* <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler} className='card p-4'>
                    <h2 className='text-center'>Register</h2>
                    <Form.Item label="Name" name="name" >
                        <Input type='text' required />
                    </Form.Item>
                    <Form.Item label="Email" name="email" >
                        <Input type='email'  required></Input>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type='password'  required></Input>
                    </Form.Item>
                    <NavLink to='/login'>Already user ? login here</NavLink><br />
                    <button className='btn btn-primary' type='submit'>Register</button>
                </Form>
            </div> */}
            <section className='form'>
                <div className='container'>
                    <div className='login-page'>
                        <div className='row' >
                            <div className='col-lg-5'>
                                <img src='https://images.theconversation.com/files/220372/original/file-20180524-51102-1429f5w.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' width={410} className='image img-fluid'></img>
                            </div>
                            <div className='col-lg-7 login-header'>
                                <div className='form-container'>
                                    <Form layout='vertical' onFinish={onFinishHandler} className='card p-4'>
                                        <h2 className='text-center'>Register</h2>
                                        <Form.Item label="Name" name="name" >
                                            <Input type='text' required />
                                        </Form.Item>
                                        <Form.Item label="Email" name="email" >
                                            <Input type='email' required></Input>
                                        </Form.Item>
                                        <Form.Item label="Password" name="password">
                                            <Input type='password' required></Input>
                                        </Form.Item>
                                        <NavLink to='/login'>Already user ? login here</NavLink><br />
                                        <button className='btn btn-primary' type='submit'>Register</button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register