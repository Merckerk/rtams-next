import mongoose, {Schema, model, models} from "mongoose";

const classlistSchema = new Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "users"
    },
    subjectCode:{
        type: String,
        required: true
    },
    subjectDescription:{
        type: String,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: false
    },
    students: [{
        type: mongoose.Schema.ObjectId,
        ref: "students"
    }]
});

const  Classlist =  models.classelists || model("classlists", classlistSchema);

export default Classlist;