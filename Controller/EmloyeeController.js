const EmployeeModel=require("../Model/Employee")
const express=require("express")
const router=express.Router();
// var multer=require('multer');


// var storage=multer.diskStorage({
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname+ '-' + Date.now())
//     },
//     destination:(req,file,cb)=>{
//         cb(null,'Upload')
//     }
// })

// var Upload=multer({storage:storage})

router.get("/",(req,res)=>{
    EmployeeModel.find((err,data)=>{
        if(err)return res.status(500).send("Something Error");
        res.status(200).send(data);
    })
})
router.post('/',(req,res)=>{

    // const file=req.file;
    // const url=req.protocol +"://"+req.get('host');
    console.log(req.body)
    var EM= new EmployeeModel({
        Name:req.body.Name,
        Age:req.body.Age,
        Salary:req.body.Salary,
        // Image:file.filename,
        // ImagePath:url+"/Upload/"+file.filename
     
    })
    EM.save((err,data)=>{
       if(err)return res.status(500).send("Something Error");
       else
        res.status(200).send(EM);
    })
   
})


// router.post('/',Upload.single('Image'),(req,res)=>{

//     const file=req.file;
//     const url=req.protocol +"://"+req.get('host');
//     console.log(req.body)
//     var EM= new EmployeeModel({
//         Name:req.body.Name,
//         Age:req.body.Age,
//         Salary:req.body.Salary,
//         Image:file.filename,
//         ImagePath:url+"/Upload/"+file.filename
     
//     })
//     EM.save((err,data)=>{
//        if(err)return res.status(500).send("Something Error");
//        else
//         res.status(200).send(EM);
//     })
   
// })

router.get('/:id',(req,res)=>{
    EmployeeModel.findById(req.params.id,(err,data)=>{
        if(err)res.status(500).send("Something is Wrong..")
        if(!data)res.status(404).send("Record  Not Found ... Plz Try Again")
        else
        res.status(200).send(data)
    })
})

// router.put('/:id',Upload.single('Image'),(req,res)=>{
//     const file=req.file;
//     const url=req.protocol +"://"+req.get('host');
//     var EM={
//         Name:req.body.Name,
//         Age:req.body.Age,
//         Salary:req.body.Salary,
//         Image:file.filename,
//         ImagePath:url+"/Upload/"+file.filename
      
//     };
//     console.log(EM)

//     EmployeeModel.updateOne({_id:req.params.id},EM,(err,data)=>{
//         if(err) res.status(400).send(err);
//         else
//         res.send(data);
//     })

// })

router.put('/:id',(req,res)=>{
    // const file=req.file;
    // const url=req.protocol +"://"+req.get('host');
    var EM={
        Name:req.body.Name,
        Age:req.body.Age,
        Salary:req.body.Salary,
        // Image:file.filename,
        // ImagePath:url+"/Upload/"+file.filename
      
    };
    console.log(EM)

    EmployeeModel.updateOne({_id:req.params.id},EM,(err,data)=>{
        if(err) res.status(400).send(err);
        else
        res.send(data);
    })

})

router.delete('/:id',(req,res)=>{
    EmployeeModel.deleteOne({_id:req.params.id},(err,data)=>{
        if(err)res.status(400).send(err);
        else
        res.send(data)
    })
})



module.exports=router;
