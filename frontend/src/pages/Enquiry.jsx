import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Enquiry = () => {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending....');
    const formData = new FormData(e.target);
    formData.append("access_key", "2ee767f0-da2f-492a-bdab-fd378eac9f2a");
    // const enquiryData = {
    //   name,
    //   phone,
    //   email,
    //   message
    // };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        // },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Enquiry sent successfully.');
        e.target.reset();
        alert('Enquiry sent successfully.');
        // setName('');
        // setPhone('');
        // setEmail('');
        // setMessage('');
        navigate('/');
      } else {
        console.log('Error', data);
        setResult(data.message);
        // setResult(data.message || 'Failed to send the enquiry. Please try again.');
        // alert(data.message || 'Failed to send the enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error sending enquiry:', error);
      setResult('Failed to send the enquiry. Please try again.');
      alert('Failed to send the enquiry. Please try again.');
    }
  };

  return (
    <div className='flex flex-col items-center p-4 m-4 mt-[100px] md:mt-[80px]'>
  <h2 className='text-xl sm:text-2xl mb-4'>Enquiry Form</h2>
  <form onSubmit={handleSubmit} className='w-full max-w-md sm:max-w-lg'>
    <div className='p-2 m-2'>
      <label className='block text-center text-sm sm:text-base mb-2'>Enter Your Name</label>
      <input
        className='w-full h-[2.2em] p-2 border border-gray-300 rounded'
        type="text"
        name='name'
        placeholder="Name"
        required
      />
    </div>
    <div className='p-2 m-2'>
      <label className='block text-center text-sm sm:text-base mb-2'>Enter Your Phone Number</label>
      <input
        className='w-full h-[2.2em] p-2 border border-gray-300 rounded'
        type="tel"
        name='phone'
        placeholder="Phone Number"
        required
      />
    </div>
    <div className='p-2 m-2'>
      <label className='block text-center text-sm sm:text-base mb-2'>Enter Your Email Id</label>
      <input
        className='w-full h-[2.2em] p-2 border border-gray-300 rounded'
        type="email"
        name='emailID'
        placeholder="Email ID"
        required
      />
    </div>
    <div className='p-2 m-2'>
      <label className='block text-center text-sm sm:text-base mb-2'>How can we help you?</label>
      <textarea
        className='w-full h-[100px] p-2 border border-gray-300 rounded'
        type='text'
        name='message'
        placeholder="Message"
        required
      ></textarea>
    </div>
    <div className='block text-center m-4 sm:m-6'>
      <button
        className='w-[150px] sm:w-[200px] py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
  <span>{result}</span>
</div>


  );
};

export default Enquiry;

//2:25:00