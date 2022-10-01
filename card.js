import React from 'react';
import './card.css';

function Card() {
  return (
    <>
    <div className="head-1">
      <h1>Know Us Better</h1>
      </div>
      <div className='para-1'>
      <p>Medlife SurgiCare aims to connect hospitals and consumers for daycare surgeries and ensures a smooth experience before, during and post-treatment. We assist you in every step, from scheduling your surgery, receiving a detailed diagnosis, communing to and from the hospital to completing insurance paperwork. We even handle hospital discharge and follow-up consultations.</p>
      </div>
      <div className="photo-1">
      <img
          src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q=" height="250px" width="250px" border-radius="20px"
          alt=""
        />

      </div>
      <div className="Photo-2">
      <img
          src="https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0=" height="250px" width="230px"
          alt=""
        />

      </div>

      <div className='head-2'>
        <h1>Why OPT for Medlife Surgicare?</h1>

      </div>

      <div className='box'>
        <h1 className='head-3'>Our Stellar Doctors</h1>
      <img
          src="https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0=" className="doctor-1"height="250px" width="230px"
          alt=""
        />

<img
          src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q=" className="doctor-2"height="250px" width="250px" border-radius="20px"
          alt=""
        />

<img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU" className="doctor-3"height="250px" width="250px" border-radius="20px"
          alt=""
        />

<img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqtCSynDQRoljeLFbQ5qb4z84QHY6Ijfm1w&usqp=CAU" className="doctor-4" height="250px" width="250px" border-radius="20px"
          alt=""
        />
    </div>
    <div className="head-4">
      <h3>Want to hear about track record</h3>
      <h1 className='head-5'>Hear from our Customers</h1>

    </div>
    <div className="box-2">
      <h2>Vijaylakshmi Ravishankar</h2>
      <h4 className="heading">Mumbai</h4>
      <p className="para-2">My Care Expert got me a surgery package that included everything from my tests to the surgery cost. I also received a Medlife Plus membership for free after my surgery. Medlife keeps its promise.</p>

    </div>
    <div className="box-3">
      <h2>Sagarika jaiswal</h2>
      <h4 className='heading-1'>Mumbai</h4>
      <p className="para-3">I am happy to have found Medlife. I was surprised to receive such excellent care even after my surgery. I really appreciate the quality of service provided. I would recommend Medlife to everyone going for elective surgeries.</p>

</div>
<div className="box-4">
  <h2 className='head-7'>Shreevant Tiwari</h2>
  <h4 className='heading-2'>Mumbai</h4>

  <p className='para-4'>Getting a surgery done without undergoing the hassles of insurance and paperwork was a first in my life. The Care Expert handles everything and I would highly recommend their service.</p>

  </div>
  <div className="box-5">
    <h2 className='head-6'>Aninday Roy</h2>
    <h4 className='heading-3'>Mumbai</h4>

  <p className='para-5'>Medlife handled my mother’s laser piles surgery with great care. The Care Expert arranged for our travel to the hospital and back home. We could even consult the doctor online which saved my mother a lot of trouble. She is recovering well and I am thankful to Medlife.</p>
  </div>

<div className="photo-4">
      <img
          src="https://img.freepik.com/free-photo/portrait-man-woman-wearing-medical-gowns-holding-laptop_23-2149529461.jpg?w=2000" height="420px" width="400px" 
          alt=""
        />

      </div>
      </>
    
  );
}

export default Card;