import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function VaccinationCenter() {

  const [state, setState] = useState([]);
  const [distId, setDistid] = useState('');
  const [districts, setDistricts] = useState([]);
  const [datePic, setDatePic] = useState('');
  const [placeId, setPlaceId] = useState('')
  const [vaccineCenters, setVaccineCenters] = useState([]);


  useEffect(() => {
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
      .then(res => {
        console.log(res.data.states);
        setState(res.data.states)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  // Handel stateId through 
  const handelState = (event) => {
    const getStateId = event.target.value
    console.log(getStateId);
    setDistid(getStateId)
  }

  useEffect(() => {
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${distId}`)
      .then(res => {
        console.log(res.data);
        setDistricts(res.data.districts)
      })
      .catch(err => {
        console.log(err);
      })
  }, [distId])



  const handelDistrict = (event) => {
    const getDistID = event.target.value
    console.log(getDistID);
    setPlaceId(getDistID);
  }

  // Handel Date picker through input 
  const handelDate = (event) => {
    const getDate = event.target.value
    console.log(getDate);
    setDatePic(getDate);
  }

  // Handel Search Data through Pic data and Place id
  const searchData = async (e) => {
    e.preventDefault(e);
    try {
      let temp = datePic.split('-');
      let newdate = temp[2] + "-" + temp[1] + "-" + temp[0];
      const res = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${placeId}&date=${newdate}`)
      const data = await res.json()
      console.log(data.centers);
      setVaccineCenters(data.centers);
    } catch (error) {
      console.log(error);
    }
  }

  // const today = new Date().toISOString().slice(0,10);


  return (
    <div className='text-cyan-800 dark:text-slate-100 mt-[2rem] md:mt-[6rem]'>
      <h1 className='text-3xl md:text-5xl font-bold text-center'>Search Your Nearest Vaccination Center</h1>
      <p className='text-center'>Get a preview list of the nearest centers and check availability of vaccination slots</p>
      <form className='p-5' onSubmit={(e) => searchData(e)}>
        <div className='flex flex-col md:flex-row md:justify-around'>
          <div className='w-[100%] md:w-[40%]'>
            <select required onChange={(e) => handelState(e)} className='w-[90%] p-3 mt-2 rounded-md outline-none text-2xl bg-slate-100 dark:bg-[#27496D] text-cyan-900 dark:text-slate-100 shadow-lg border-2 border-[#d2e7ff]'>
              <option className='text-slate-400' value="">Select Your State..</option>
              {
                state.map((idx) => (
                  <option value={idx.state_id} key={idx.state_id}>{idx.state_name}</option>
                ))
              }
            </select>
          </div>
          <div className='w-[100%] md:w-[40%]'>
            <select required onChange={(e) => handelDistrict(e)} className='w-[90%] p-3 mt-2 rounded-md outline-none text-2xl bg-slate-100 dark:bg-[#27496D] text-cyan-900 dark:text-slate-100 shadow-lg border-2 border-[#d2e7ff]' >
              <option className='text-slate-400' value="1">Select District..</option>
              {
                districts.map((idx) => (
                  <option value={idx.district_id} key={idx.district_id}>{idx.district_name}</option>
                ))
              }
            </select>
          </div>
          <div className='p-4 bg-slate-100 dark:bg-[#27496D] border-2 border-[#d2e7ff] shadow-lg rounded-md w-[50%] md:w-[20%] mt-2'>
            <input required className='text-cyan-900 dark:text-slate-100 bg-slate-100 dark:bg-[#27496D] outline-none' type="date" onChange={(e) => handelDate(e)} />
          </div>
        </div>
        <div className='text-cyan-900 dark:text-slate-100 bg-slate-100 dark:bg-[#27496D] shadow-lg max-w-fit md:max-w-[15%] text-center p-3 m-1 ml-auto mr-2 md:mr-auto font-bold text-2xl rounded-md mt-5'>
          <button type="submit">Search</button>
        </div>
      </form>
      {/* output of our result */}
      <div className=' p-4 text-slate-100 h-[50vh] overflow-scroll	'>

        {vaccineCenters.length > 0 ?
          <div>
            <h1 className=' text-lg font-bold max-w-fit p-3 bg-[#d3fbf9] text-[#000] ml-auto mr-auto'>Available vaccine centers: # {vaccineCenters.length} </h1>
            {
              vaccineCenters.map((idx) => (
                <div className='text-lg font-bold rounded-md max-w-[100%] p-4 m-2'>
                  <div className='p-3 max-w-fit ml-auto mr-auto flex flex-col relative rounded-md md:flex-col text-center bg-cyan-100 dark:bg-cyan-800 shadow-lg	text-cyan-800 dark:text-cyan-100'>
                    <h1>Name:-{idx.name}</h1>
                    <h1>Address:-{idx.address}</h1>
                  </div>
                  <div className=' grid grid-flow-row md:grid-flow-col text-cyan-800 dark:text-cyan-100'>
                    {
                      idx.sessions.map(sessions => (
                        <div className='bg-slate-100 dark:bg-[#27496D] w-max border-2 border-[#868893] p-2 m-1 '>
                          <h1>{sessions.date}</h1>
                          <h1 className='font-light'>Age: {sessions.min_age_limit} - {sessions.max_age_limit}</h1>
                          <h1 className='font-medium'>Available: {sessions.available_capacity}</h1>
                          <h1 className='font-bold rounded-md border-2 border-[#e7e0e0] text-lg text-slate-100 bg-[#1c414d] max-w-fit p-2 '>Type: {sessions.vaccine}</h1>

                          {
                            sessions.slots.map(slots => (
                              <div>
                                <h1 className='font-light text-cyan-800 dark:text-slate-300'>slote- {slots.time}</h1>
                              </div>
                            ))
                          }
                        </div>
                      ))
                    }
                  </div>

                </div>
              ))
            }
          </div>
          :
          <div>
            <h1 className='text-5xl text-center text-cyan-800 dark:text-cyan-100'>No data Found</h1>
          </div>
        }

      </div>
    </div>
  )
}
