import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram, BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <>
            <footer className='py-3 mt-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>Hno : 162 Near L.P Savani School, Adajan, Surat<br />Pincode : 395009
                                </address>
                                <a href='tel:+91 7778013500' className='mt-4 d-block mb-2 text-white '>+91 7778013500</a>

                                <a href='mailto:dhruvpanchal576@gmail.com' className='mt-3 d-block mb-2 text-white'>dhruvpanchal576@gmail.com</a>
                            </div>
                            <div className='social-icons d-flex align-item-center gap-5 mt-4'>
                                <a href='#'>
                                    <BsLinkedin className='text-white fs-3' />
                                </a>
                                <a href='#'>
                                    <BsInstagram className='text-white fs-3' />
                                </a>
                                <a href='#'>
                                    <BsGithub className='text-white fs-3' />
                                </a>
                                <a href='#'>
                                    <BsYoutube className='text-white fs-3' />
                                </a>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h6 className=' mb-4 footer-title'>VACCINATION SERVICES</h6>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white mb-1 py-2'>Register Members</Link>
                                <Link className='text-white mb-1 py-2' >Search Vaccination Centers</Link>
                                <Link className='text-white mb-1 py-2' >Book Vaccination Slots</Link>
                                <Link className='text-white mb-1 py-2'>Manage Appointment</Link>
                                <Link className='text-white mb-1 py-2'>Download Certificate</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h6 className='mb-4 footer-title'>PLATFORMS</h6>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white mb-1 py-2'>Vaccinator</Link>
                                <Link className='text-white mb-1 py-2'>Department Login</Link>
                                <Link className='text-white mb-1 py-2'>Verify Certificates</Link>
                                <Link className='text-white mb-1 py-2'>Vaccination Statistics</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h6 className='mb-4 footer-title'>RESOURCES</h6>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white mb-1 py-2'>How To Get Vaccinated</Link>
                                <Link className='text-white mb-1 py-2' >Dos and Don'ts</Link>
                                <Link className='text-white mb-1 py-2'>Overview</Link>
                                <Link className='text-white mb-1 py-2'>API Guidelines</Link>
                                <Link className='text-white mb-1 py-2'>Open APIs</Link>
                                <Link className='text-white mb-1 py-2'>Grievance Guidelines</Link>
                            </div>
                        </div>

                        <div className='col-2'>
                            <h6 className='mb-4 footer-title'>SUPPORT</h6>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white mb-1 py-2'>Frequently Asked Questions</Link>
                                <Link className='text-white mb-1 py-2' >Certificate Corrections</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='footer-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 mt-2'>
                            <p className='text-white'>&copy; {new Date().getFullYear()}  All Rights Reserved</p>
                        </div>

                        <div className='col-6 text-center mt-1'>
                            <div className='image-logo d-flex gap-4'>
                                <div className='image-1'>
                                    <img src='https://selfregistration.cowin.gov.in/assets/images/national-health-authority.jpg' width={90}></img>
                                </div>
                                <div className='image-2'>
                                    <img src='https://selfregistration.cowin.gov.in/assets/images/undp-logo-vertical.svg' width={21}></img>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='information d-flex gap-4'>
                                <div className='info1 mt-2'>
                                    <p className='text-white'>Terms of Service</p>
                                </div>

                                <div className='info2 mt-2'>
                                    <p className='text-white'>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer