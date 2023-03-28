import React, { useState } from 'react'
import bookings from "@/models/bookings";
import mongoose from 'mongoose';
import Card from 'react-bootstrap/Card';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Booking_list({booking}) {
  const [booking_list, setBooking_list] = useState(booking);
  const [data, setData] = useState();

  const [date, setDate] = useState("");
  const [custId, setCustId] = useState("");
  const [note, setNote] = useState("");
  const [locationId, setLocationId] = useState("");
  const [drone_shot_id, setDrone_shot_id] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async(id)=>{
    const data = {id};
    let res = await fetch("http://localhost:3000/api/delete_booking", {
        method: "DELETE", // or 'PUT'
        headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    let response = await res.json();
    if(response.success){
      toast.success('Booking Removed ! 😎', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      let temp = [];
      for (let i = 0; i < booking_list.length; i++) {
        if(booking_list[i]._id != id){
          temp.push(booking_list[i]);
        }
      }
      setBooking_list(temp);
    }
  }

  const handleEdit = async(e) =>{
    console.log(e);
    let temp_data = {
      id : e._id,
      customerId : custId,
      name : e.name,
      email : e.email,
      phone : e.phone,
      locationId : locationId,
      drone_shot_id : drone_shot_id,
      startTime : e.startTime,
      date : date,
      notes : note
    }
    console.log(temp_data);
    let res = await fetch("http://localhost:3000/api/edit_booking", {
      method: "POST", // or 'PUT'
      headers: {
              "Content-Type": "application/json",
      },
      body: JSON.stringify(temp_data),
    })
    let response = await res.json();
    console.log(response)
    if(response.success){
      toast.success('Booking Updated ! 😎', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      let temp = [];
      for (let i = 0; i < booking_list.length; i++) {
        if(booking_list[i]._id == e._id){
          temp.push(booking_list[i]);
          temp[i].customerId = custId,
          temp[i].name = e.name,
          temp[i].email = e.email,
          temp[i].phone = e.phone,
          temp[i].locationId = locationId,
          temp[i].drone_shot_id = drone_shot_id,
          temp[i].startTime = e.startTime,
          temp[i].date = date,
          temp[i].notes = note
        }
        else{
          temp.push(booking_list[i]);
        }
      }
      setBooking_list(temp);
    }
  }

  const handleSubmit = (e)=>{
    handleShow();
    setData(e);
  }

  return (
    <>
    <ToastContainer />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group">
          <label htmlFor="inputName">Customer Id</label>
          <input type="text" className="form-control" id="inputName" value={custId} onChange={(e)=>{setCustId(e.target.value)}} name="name" placeholder="Your name" required />
          <small className="form-text text-muted">Please fill Customer Id</small>
        </div>
        <div className="form-group col-md">
            <label htmlFor="inputDate">Date</label>
            <input type="date" className="form-control" id="inputDate" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} required />
            <small className="form-text text-muted">Please choose date and time for Shoot.</small>
          </div>
          <div className="form-group">
          <label htmlFor="textAreaRemark">Notes</label>
          <textarea className="form-control" name="remark" value={note} onChange={(e)=>{setNote(e.target.value)}} id="textAreaRemark" rows="2" placeholder="Anything more want to add ..."></textarea>
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
        <div className="form-group col-md">
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleEdit(data)}}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    <div className='container mt-5'>
        <div className="row">
        <h5>{booking_list.length === 0 && "Time to create Some bookings !!!"}</h5>
            { booking_list.map((e)=>{
                return(
                    <div className="col-md-4 mt-2" key={e._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{e.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{e.customerId}</Card.Subtitle>
                                    <Card.Text>
                                    {e.notes}
                                    </Card.Text>
                                    <Card.Text>
                                    Location : {e.locationId} || Start-Time : {e.startTime} || Date : {e.locationId} || Drone Shot id : {e.drone_shot_id}
                                    </Card.Text>
                                <button type="button" className="btn" onClick={()=>{handleDelete(e._id)}} data-toggle="modal" data-target="#exampleModalCenter">
                                <AiFillDelete/>
                                </button>
                                <button type="button" className="btn" onClick={()=>{handleSubmit(e)}} data-toggle="modal" data-target="#exampleModalCenter">
                                <FiEdit/>
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps(context){
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI);
    }
    
    let booking = await bookings.find({});

    console.log(booking);


    return {
      props : {booking : JSON.parse(JSON.stringify(booking))},
    }
  }

export default Booking_list