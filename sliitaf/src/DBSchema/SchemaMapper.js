const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema=new Schema({
    faculty:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    },
    module_name:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    enroll:{
        type:String,
        required:true
    }
});

const AdminSchema=new Schema({
    admin_name:{
        type:String,
        required:true
    },
    admin_empno:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    }
});
const InstructorSchema=new Schema({
    instructor_name:{
        type:String,
        required:true
    },
    instructor_empno:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    }
});
const SignupSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const InstructorUploadSchema=new Schema({
    duedate:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true
    },
    comments:{
        type:String
    }
});
mongoose.model('Course',CourseSchema);
mongoose.model('Admin',AdminSchema);
mongoose.model('Instructor',InstructorSchema);
mongoose.model('Signup',SignupSchema);
mongoose.model('InsAssignments',InstructorUploadSchema);

mongoose.connect('mongodb://localhost:27017/SliitCourseWeb',(err)=>{
    if(err)
    {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});
module.exports=mongoose;