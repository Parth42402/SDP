import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HospitalList = ({hospital}) => {
    const navigate=useNavigate()
  return (
    <>
        <div className='card  m-2' style={{cursor:'pointer'}} onClick={()=>navigate(`hospital/book-appointment/${hospital._id}`)}>
            <div className='card-header'>
                {hospital.hos_name}
            </div>
            <div className='card-body'>
                <p>
                    <b>
                        Phone :
                    </b>
                    {hospital.phone}
                </p>
                <p>
                    <b>
                        Email :
                    </b>
                    {hospital.email}
                </p>

                <p>
                    <b>
                        Location :
                    </b>
                    {hospital.address}
                </p>
                <p>
                    <b>
                        FeesPerVaccine :
                    </b>
                    {hospital.feesPerVaccine}
                </p>

                <p>
                    <b>
                        Timing :
                    </b>
                    {hospital.timings[0]} - {hospital.timings[1]}
                </p>
            </div>
        </div>
    </>
  )
}
