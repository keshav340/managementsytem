import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking_form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [custId, setCustId] = useState("");
    const [note, setNote] = useState("");
    const [locationId, setLocationId] = useState("");
    const [drone_shot_id, setDrone_shot_id] = useState();
    const [Hour, setHour] = useState("");
    const [Sec, setSec] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        let startTime = Hour + ":" + Sec;
        const data = {custId,name,email,phone,locationId,drone_shot_id,startTime,date,note};
        let res = await fetch("http://localhost:3000/api/book", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
        let response = await res.json();

        setName("")
        setEmail("");
        setPhone("");
        setDate("");
        setCustId("");
        setNote("");
        setLocationId("");
        setDrone_shot_id("");
        setHour("");
        setSec("");

        if(response.success){
            toast.success('Booking Created ! 😎', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
  return (
    <div>
        <ToastContainer />
        <div className="container">

  <div className="text-center pt-5 pb-3">
    <img src="https://i.ibb.co/8cDgdFX/Logo.png" alt="network-logo" width="72" height="72" />
    <h2>Drone Slot Booking Form</h2>
  </div>
  
  <div className="card">

    <div className="card-body">
      
      <form id="bookingForm" onSubmit={handleSubmit} method="POST" className="needs-validation" noValidate autoComplete="off">

        <div className="form-group">
          <label htmlFor="inputName">Customer Id</label>
          <input type="text" className="form-control" id="inputName" value={custId} onChange={(e)=>{setCustId(e.target.value)}} name="name" placeholder="Your name" required />
          <small className="form-text text-muted">Please fill Customer Id</small>
        </div>

        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input type="text" className="form-control" id="inputName" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="Your name" required />
          <small className="form-text text-muted">Please fill name</small>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Enter email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
          <small className="form-text text-muted">Please fill Email of Customer</small>
        </div>

        <div className="form-group">
          <label htmlFor="inputPhone">Phone</label>
          <input type="tel" className="form-control" id="inputPhone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="phone" placeholder="099xxxxxxx" pattern="\d{3}\d{3}\d{4}" required />
          <small className="form-text text-muted">We'll never share your phone number with anyone else.</small>
        </div>

        <div className="form-row">
   
          <div className="form-group col-md-4">
            <label htmlFor="inputDate">Date</label>
            <input type="date" className="form-control" id="inputDate" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} required />
            <small className="form-text text-muted">Please choose date and time for Shoot.</small>
          </div>

          <div className="form-group col-md-4">
            <label className='pt-2'>Start Time</label>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <select className="form-control mr-1" id="inputStartTimeHour" name="startHour" value={Hour} onChange={(e)=>{setHour(e.target.value)}} required>
              <option value="" disabled defaultValue>Hour</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
              <div className="pl-1 pr-2">:</div>
              <select className="form-control" id="inputStartTimeMinute" name="startMinute" value={Sec} onChange={(e)=>{setSec(e.target.value)}} required>
              <option value="" disabled defaultValue>Min</option>
                <option value="00">00</option>
                <option value="00">30</option>
              </select>
            </div>
            <label className='pt-2'>Location Id</label>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <select className="form-control mr-1" id="inputStartTimeHour" name="startHour" value={locationId} onChange={(e)=>{setLocationId(e.target.value)}} required>
                <option value="" disabled defaultValue>Location</option>
                <option value="01">Varanasi</option>
                <option value="02">Delhi</option>
                <option value="03">Gurgaon</option>
                <option value="04">Ahemdabad</option>
                <option value="05">Gujrat</option>
                <option value="06">Vishakapatnam</option>
                <option value="07">Mumbai</option>
                <option value="08">Orissa</option>
              </select>
            </div>
          </div>

        </div>

        <div className="form-group">
          <legend className="col-form-label pt-4">Choose a Drone Shot Type</legend>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType1" name="roomType" value="1" onChange={(e)=>{setDrone_shot_id(1)}} required />
            <label className="form-check-label" htmlFor="inlineRadioType1">Spinning elevation shot.</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType2" name="roomType" value="2" onChange={(e)=>{setDrone_shot_id(2)}} required />
            <label className="form-check-label" htmlFor="inlineRadioType2">Half moon bay shot.</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType3" name="roomType" value="3" onChange={(e)=>{setDrone_shot_id(3)}} required />
            <label className="form-check-label" htmlFor="inlineRadioType3">180-degree shot</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType4" name="roomType" value="4" onChange={(e)=>{setDrone_shot_id(4)}} required />
            <label className="form-check-label" htmlFor="inlineRadioType4">Object shot.</label>
          </div>
        </div>

        <hr />

        <div className="form-group">
          <label htmlFor="textAreaRemark">Notes</label>
          <textarea className="form-control" name="remark" value={note} onChange={(e)=>{setNote(e.target.value)}} id="textAreaRemark" rows="2" placeholder="Anything more want to add ..."></textarea>
        </div>

        <button className="btn btn-primary btn-block col-lg-2 my-3" type="submit">Submit</button>

      </form>
         </div>

  </div>
   <footer>
    <div className="my-4 text-muted text-center">
      <p>© Droame</p>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Booking_form