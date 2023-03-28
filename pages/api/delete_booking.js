import connectdb from "@/middleware/mongoose";
import bookings from "@/models/bookings";

const handler = async(req, res) => {
    if (req.method == "DELETE") {
        
        let response = await bookings.findByIdAndRemove(req.body.id);
        
        res.status(200).json({success : "success"});
    }
}

export default connectdb(handler);
