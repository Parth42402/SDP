import {message, Tabs } from 'antd'
import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from '../Components/Layout'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import { useNavigate } from 'react-router-dom'

const NotificationPage = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {user}=useSelector((state)=>state.user)
    const handleMarkAllRead=async()=>{
        try{
            dispatch(showLoading())
            const res=await axios.post('/api/v1/user/get-all-notification',{userId:user._id},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.message)
                // window.location.reload()
            }
            else
            {
                message.error(res.data.message)
            }

        }catch(error){
            dispatch(hideLoading())
            console.log(error)
            message.error("Something went Wrong")
        }
    }

    //delete notification
    const handleDeleteAllRead=async(req,res)=>{
        try{
            dispatch(showLoading())
            const res=await axios.post('/api/v1/user/delete-all-notification',{userId:user._id},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.message);
                // window.location.reload()
            }
            else{
                message.error(res.data.message)
            }

        }catch(error){
            console.log(error)
            message.error("Something went Wrong")   
        }
    }

  return (
  <Layout>
    <h1 className='p-3 text-center'>Notification page</h1>
    <Tabs>
        <Tabs.TabPane tab="unRead" key={0}>
            <div className='d-flex justify-content-end'>
                <h4 className='p-2' onClick={handleMarkAllRead}>Mark All read</h4>
            </div>
            {
                user?.notification.map(notificationMgs=>(
                    <div className='card'  style={{cursor:'pointer'}}>
                        <div className='card-text' onClick={()=>navigate(notificationMgs.onClickPath)}>
                            {notificationMgs.message}
                        </div>
                    </div>
                ))
            }
            
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
            <div className='d-flex justify-content-end'>
                <h4 className='p-2 text-primary' style={{cursor:'pointer'}} onClick={handleDeleteAllRead}>Delete All read</h4>
            </div>
            {
                user?.seennotification.map(notificationMgs=>(
                    <div className='card'  style={{cursor:'pointer'}}>
                        <div className='card-text' onClick={()=>navigate(notificationMgs.onClickPath)}>
                            {notificationMgs.message}
                        </div>
                    </div>
                ))
            }
        </Tabs.TabPane>
    </Tabs>

  </Layout>
  )
}

export default NotificationPage