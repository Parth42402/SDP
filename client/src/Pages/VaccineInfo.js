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

      <section className='marquee-wrapper mt-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper'>
                <marquee>
                  <div className='d-flex gap-5 card-wrapper'>
                    <div>
                      <img src='https://media.istockphoto.com/id/1350473203/vector/child-pointing-his-finger-at-the-vaccinated-hand-the-concept-of-health-the-spread-of-the.jpg?s=612x612&w=0&k=20&c=cG8skB1V3E_HwXLwj4vyrUcsqPvfqQsoia_SwDaJS8o=' height={200}></img>
                    </div>
                    <div>
                      <img src='https://thumbs.dreamstime.com/b/public-health-program-abstract-concept-vector-illustrations-illustration-set-immunization-education-schedule-vaccination-196251490.jpg' height={200}></img>
                    </div>
                    <div>
                      <img src='https://www.shutterstock.com/image-vector/vaccinate-concept-doctor-shield-protect-260nw-2249908231.jpg' height={200}></img>
                    </div>
                    <div>
                      <img src='https://www.shutterstock.com/image-vector/influenza-treatment-abstract-concept-vector-260nw-1818924206.jpg' height={200}></img>
                    </div>
                    <div>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvCkYjE1fIa0sAaRcNcqYmddSMsVFY1qSjnx_q8X6RfeTlIZzJSGv-D8BvQQ6S3Hnx0o&usqp=CAU' height={200}></img>
                    </div>
                    <div>
                      <img src='https://image.shutterstock.com/image-vector/mandatory-immunization-abstract-concept-vector-260nw-1846072087.jpg' height={200}></img>
                    </div>
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='VaccinationSteps mt-5'>
        <h1 className='text-center'>Get Vaccinated in 3 easy Steps</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-center'>Step1</h4>
              <div className='step-card'>
                <div className='img-holder'>
                  <img src='	https://www.cowin.gov.in/assets/images/Step_1.svg' className='img-fluid'></img>
                </div>
                <div className='step-content mt-2 text-center'>
                  <p>Book an Appointment on <br /> Immutime or Walk into Vaccination Center</p>
                </div>
                <div className='step-footer text-center'>
                  <p>How to Book your Appointment on Immutime ?</p>
                </div>
              </div>
            </div>

            <div className='col-4'>
              <h4 className='text-center'>Step2</h4>
              <div className='step-card'>
                <div className='img-holder'>
                  <img src='	https://www.cowin.gov.in/assets/images/Step_2.svg' width={234} className='img-fluid'></img>
                </div>
                <div className='step-content mt-2 text-center'>
                  <p>Get Your Vaccination Safely at the <br /> Time of Your Appointment</p>
                </div>
                <div className='step-footer text-center'>
                  <p>Dos And Dont's For<br /> getting Vaccinated</p>
                </div>
              </div>
            </div>

            <div className='col-4'>
              <h4 className='text-center'>Step3</h4>
              <div className='step-card'>
                <div className='img-holder'>
                  <img src='https://www.cowin.gov.in/assets/images/Step_3.svg' width={183} className='img-fluid'></img>
                </div>
                <div className='step-content mt-2 text-center'>
                  <p>Download Your Vaccination certificate  <br /> from immutime</p>
                </div>
                <div className='step-footer text-center'>
                  <p>Download Your Vaccine <br /> Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='children-vaccination mt-3'>

        <div className='container-xxl'>
          <div className='row'>
            <div className='col-7'>
              <div className='heading'>
                <h2>Children Vaccination</h2>
              </div>
              <div className='vaccination-info'>
                <ul>
                  <li className='vaccine-type'>
                  BCG is the acronym for Bacillus Calmette-Guerin vaccine. It is administered at birth and is used to protect them from tuberculous (TB). This vaccine is 70%-80% effective in preventing more severe types of TB such as Tuberculosis meningitis. 
                  </li>
                  <li className='vaccine-type'>
                  OPV or oral polio vaccine protects the baby from polio throughout his/her life. It is a mixture of attenuated poliovirus strains, which is capable of inciting an immune response from the body while not causing severe symptoms. The poliovirus strains used in OPV are carefully selected by their ability to mimic the immune response triggered by an infection of wild poliovirus. 
                  </li>
                  <li className='vaccine-type'>
                  Hepatitis B vaccine protects the body against hepatitis B, a viral infection that can cause acute or chronic liver problems. It is generally transmitted from mother to child during birth, but can also be transmitted by coming in contact with bodily fluids such as blood and sperm. This infection can be transmitted via sexual intercourse. 
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-4'>
              <div>
                <img className='child-image' src='https://www.cowin.gov.in/assets/images/Children_Vaccination.svg'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
