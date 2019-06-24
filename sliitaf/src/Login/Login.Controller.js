var mongoose=require('../DBSchema/SchemaMapper');
var SignupSchema=mongoose.model('Signup');
var AdminSchema=mongoose.model('Admin');

var LoginController=function () {
    this.search = (email,password) => {
        return new Promise((resolve, reject) => {
            SignupSchema.find({ $and: [ { email: email },{ password: password } ] }).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500,message: "Error:- " + err});
            })
        })
    }
}

module.exports=new LoginController();