var mongoose=require('../DBSchema/SchemaMapper');
var InstructorSchema=mongoose.model('Instructor');

var InstructorController=function () {
    this.insert=(data)=>{
        return new Promise((resolve,reject)=>{
            var instructor=new InstructorSchema({
                instructor_name: data.instructor_name,
                instructor_empno: data.instructor_empno,
                instructor_email: data.instructor_email,
                faculty: data.faculty
            });
            instructor.save().then(result=>{
                //send email to instructor email
                const transporter=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'siiscw@gmail.com',
                        pass:'vmqlfjlscupklycy'
                    }
                });

                const mailOptions={
                    from:'',
                    to:instructor.instructor_email,
                    subject:'Welcome '+ instructor.instructor_name +' to Student Information System!',
                    html:'Hi! '+instructor.instructor_name +', <br/> '+ 'Welcome to Student Information System. We warmly welcome our instructor!<br/> Thanks and Best Regards,<br/>Admin'
                };

                transporter.sendMail(mailOptions,(error,info)=>{
                    if(error){
                        console.log(error);
                    }else{
                        console.log('Email sent:'+info.response);
                    }
                });
                transporter.sendMail(mailOptions,(error,info)=>{
                    if(error){
                        console.log(error);
                    }else{
                        console.log('Email sent:'+info.response);
                    }
                });
                console.log(result);
                res.status(201).json({
                    message:'Instructor added',
                    createdInstructor:result
                });
            }).catch(err=>{
                console.log(err.message);
                res.status(500).json({
                    error:err
                });
            });
        });
    }
}

module.exports=new InstructorController();