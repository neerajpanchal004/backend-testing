export default function handler(req,res){
    if(req.method=="GET"){
        if(req.query.category=="dashbord"){
            res.status(200).send({"message":"Dashboard Category Selected!"})
        }
        else if(req.query.category=="user"){
            res.status(200).send({"message":"User Category Selected!"})
        }
        else{
            res.status(400).send("Invalid Category! Please Select 'dashbord' or 'user'.")
        }
        
    }

    res.status(500).send( {"error": "Something went wrong!"} )
}