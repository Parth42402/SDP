import React from 'react'
import '../styles/VaccineInfo.css';
export const VaccineInfo = () => {
  return (
    <>
      <div className="top-image mt-4">
        <img src="https://www.ckbhospital.com/wp-content/uploads/2020/09/Blog-banner-42.jpg" className='image-header'></img>
      </div>

      <div className='vaccine-info mt-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p>Vaccinations play a key role in enabling our babies and children to grow strong and healthy. Child vaccination also helps us avoid a number of diseases in our adult life. In fact, some of these infections (ex: chicken pox) are far more severe if it occurs later on in life. </p>
              <p>Routine childhood vaccinations are one of the most effective ways to cut down on the requirement of life-saving medical interventions. Unfortunately, not all children are vaccinated. While in some cases, it can be due to the unavailability of the required medical care; in others, vaccinations can be missed due to a lack of awareness. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
