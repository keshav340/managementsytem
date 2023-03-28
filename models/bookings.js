const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    customerId : {type : String, required : true},
    name : {type : String, required : true },
    email : {type : String, required : true},
    phone : {type : String, required : true},
    locationId : {type : String, required : true},
    drone_shot_id : {type : String, required : true},
    startTime : {type : String, required : true},
    date : {type : String, required : true},
    notes : {type : String, default : "NA"}
},{timestamps : true});

//mongoose.models = {};
//      or
export default mongoose.models.Booking || mongoose.model("Booking",BookingSchema);