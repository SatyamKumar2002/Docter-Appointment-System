import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctor from '../Components/RelatedDoctor';

const Appointment = () => {
  const {docId} = useParams()
  const {doctors, currencySymbol} = useContext(AppContext)
  const dayOfWeek = ['MON', 'TUES', 'WED', 'THUS', 'FRI', 'SAT', 'SUN']
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  
  const fetchDocInfo = async() =>{
      const docInfo = doctors.find(doc => doc._id === docId)
      setDocInfo(docInfo)
      // console.log(docInfo)
  }

  const getAvailableSlots = async() =>{
       setDocSlots([])
       // getting current date
       let today= new Date()
       for(let i=0; i<7; i++){
        //get date with index
         let currDate= new Date(today)
         currDate.setDate(today.getDate()+i)

         //setting end time of date with index
         let endTime= new Date(currDate)
         endTime.setDate(today.getDate()+i)
         endTime.setHours(21,0,0,0)

         //setting Hours
         if(today.getDate() === currDate.getDate()){
          currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + i: 10)
          currDate.setMinutes(currDate.getMinutes() > 30 ? 30:0)
         }else{
          currDate.setHours(10)
          currDate.setMinutes(0)
         }
         
         let timeSlots=[]
         while(currDate < endTime){
           let formattedTime = currDate.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
           // add slot to array
           timeSlots.push({
             datetime: new Date(currDate),
             time: formattedTime
           })

           // increment curr time by 30 min
           currDate.setMinutes(currDate.getMinutes() +30)
         }
         setDocSlots(prev=> ([...prev, timeSlots]))

       }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);


  return docInfo && (
    <div>
      {/* Doctor detail */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='' />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* Doctor info */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt='' />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/* Doctor about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt='' />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

       {/*------booking slot------*/}
       <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length > 0 && docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                key={index}
              >
                <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'} `} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6' >Book an Appointment</button>
      </div>
      {/*-------listing appointment date------*/}
      <RelatedDoctor docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};


export default Appointment
