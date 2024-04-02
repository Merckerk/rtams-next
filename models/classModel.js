import mongoose, {Schema, model, models} from "mongoose";

const classlistSchema = new Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "users"
    },
    sectionCode:{
        type: String,
        required: true
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

const  Classlist =  models.classlists || model("classlists", classlistSchema);

export default Classlist;