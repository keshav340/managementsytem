import connectdb from "@/middleware/mongoose";
import bookings from "@/models/bookings";

const handler = async(req, res) => {
    if (req.method == "POST") {
        console.log(req.body);
        let response = await bookings.findByIdAndUpdate(req.body.id,{customerId : req.body.customerId,
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            locationId : req.body.locationId,
            drone_shot_id : req.body.drone_shot_id,
            startTime : req.body.startTime,
            date : req.body.date,
            notes : req.body.notes});
        
        res.status(200).json({success : "success"});
    }
}

export default connectdb(handler);
