import React, { useEffect, useState } from 'react'
import { Layout } from '../../Components/Layout'
import axios from 'axios'
import { Table } from 'antd'

export const Parent = () => {

    const[users,setUsers]=useState([])

    //getUsers
    const getUsers=async()=>{
       try{
        const res=await axios.get('/api/v1/admin/getAllUsers',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        if(res.data.success){
            setUsers(res.data.data)
        }

       }catch(error){
        console.log(error)
       }
    }

    useEffect(()=>{
        getUsers()
    },[])

    const columns=[
        {
            title:'Name',
            dataIndex:'name',
        },
        {
            title:'Email',
            dataIndex:'email'
        },
        {
            title:'Hospital',
            dataIndex:'isDoctor',
            render:(text,record)=>(
                <span>{record.isDoctor ? 'Yes':'No'}</span>
            )
        },
        {
            title:'Actions',
            dataIndex:'actions',
            render:(text,rexord)=>(
                <div className='d-flex'>
                    <button className='btn btn-danger'>Block</button>
                </div>
            )
        }
    ]
  return (
    <>
        <Layout>
            <h6 className='text-center m-3'>UserList</h6>
            <Table columns={columns} dataSource={users}>

            </Table>
        </Layout>
    </>
  )
}
