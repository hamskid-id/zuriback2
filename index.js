const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

app.post('/', async(req,res)=>{
            try{
                const operation ="Can you please add the following numbers together -13 and 25.";
                var matches;
                req.body?(matches = req.body.match(/-?\d+/g)):(matches = operation.match(/-?\d+/g));
                var sol;
                if(matches){
                    if(operation.toLowerCase().includes('add')||operation.toLowerCase().includes('addition')||operation.toLowerCase().includes('plus')){
                        sol = parseInt(matches[0]) +  parseInt(matches[1])
                    }
                    if(operation.toLowerCase().includes('subtract')||operation.toLowerCase().includes('subtraction')||operation.toLowerCase().includes('minus')){
                        sol =  parseInt(matches[0]) -  parseInt(matches[1])
                    }
                    if(operation.toLowerCase().includes('multiply')||operation.toLowerCase().includes('times')||operation.toLowerCase().includes('multiplication')){
                        sol =  parseInt(matches[1])*parseInt(matches[0])
                    }
                }
            
                    const operationInfo ={
                        "operation_type":operation,
                        "x":matches[0],
                        "y":matches[1]
                    }
                    const operationResult ={
                        "slackUsername":"lawalH",
                        "operation_type":operation,
                        "result":sol?sol:"invalid input"
                    }
                    res.status(200).json(operationResult)
                    console.log(operationResult.result)
               
             }
            catch(error){
                console.log(error)
                res.status(500).send(error)
            }
})

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server is listening on localHost ${port}`));