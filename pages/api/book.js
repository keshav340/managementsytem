import connectdb from "@/middleware/mongoose";
import bookings from "@/models/bookings";

const handler = async(req, res) => {
    if (req.method == "POST") {
        let booking = new bookings({
            customerId : req.body.custId,
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            locationId : req.body.locationId,
            drone_shot_id : req.body.drone_shot_id,
            startTime : req.body.startTime,
            date : req.body.date,
            notes : req.body.note
        });
        await booking.save();
        res.status(200).json({success : "success"});
    }
}

export default connectdb(handler);
