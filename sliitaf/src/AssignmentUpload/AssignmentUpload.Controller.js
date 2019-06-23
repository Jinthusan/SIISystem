var mongoose=require('../DBSchema/SchemaMapper');
var InstructorUploadSchema=mongoose.model('InsAssignments');

var AssignmentUploadController=function () {
    this.insert=(data)=>{
        return new Promise((resolve,reject)=>{
            var assignment=new InstructorUploadSchema({
                duedate: data.duedate,
                file: data.file,
                comments: data.comments
            });
            assignment.save().then(()=>{
                resolve({status:200,message:"new assignment added successfully"});
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            });
        });
    }
    this.searchAll=()=>{
        return new Promise((resolve ,reject)=>{
            InstructorUploadSchema.find().exec().then(data=>{
                resolve({status:200,data:data})
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
    this.search = (id) => {
        return new Promise((resolve, reject) => {
            InstructorUploadSchema.find({_id: id}).exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            InstructorUploadSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "update comment"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
};

module.exports=new AssignmentUploadController();