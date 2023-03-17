import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { BsSearch, BsCartCheck } from 'react-icons/bs'
import { TbVaccine } from 'react-icons/tb'
import { FaUserFriends } from 'react-icons/fa'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import {AiOutlineRead} from 'react-icons/ai'


const Header = () => {
    return (
        <>
            <header className='header-top'>
                <div className='container'>
                    <div className='row mt-0'>
                        <div className='col-6'>
                            {/* <p className='text-white'>Don’t wait, vaccinate!</p> */}
                            <div className='image-header d-flex gap-2'>
                                <img src='https://www.cowin.gov.in/assets/images/emblem-gov.svg' width={25}></img>
                                <p className='text-white mt-1'>Ministry of Health and Family Welfare</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>

            <header className='header-upper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='d-flex gap-2'>
                                <h2 className='text-white'><TbVaccine /></h2>
                                <h2>
                                    <Link className='text-white'>Immutime</Link>
                                </h2>
                            </div>
                        </div>
                        <div className='col-4 mx-5 mt-2'>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control py-2" placeholder="Search Hospital Here" aria-label="Search Hospital Here" aria-describedby="basic-addon2"></input>
                                <span class="input-group-text" id="basic-addon2"><BsSearch /></span>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='menu-links'>
                                <div className='d-flex align-items-center gap-5'>
                                    <div className='login-item d-flex gap-2'>
                                        <h2 className='text-white'><FaUserFriends /></h2>
                                        <NavLink to='/login' className='mt-2'>
                                            Login/Register
                                        </NavLink>
                                    </div>

                                    <div className='login-item d-flex gap-2'>
                                        <h4 className='text-white'><BsFillTelephoneOutboundFill /></h4>
                                        <NavLink to='/contact' className='mt-1'>
                                            Contact
                                        </NavLink>
                                    </div>

                                    <div className='login-item d-flex gap-2'>
                                        <h4 className='text-white'><AiOutlineRead /></h4>
                                        <NavLink to='/about' className='mt-1'>
                                            About
                                        </NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header