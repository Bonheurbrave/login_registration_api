import express from "express";
import cors from "cors";




const app = express();
app.use(express.json());
app.use(cors());
const port =3000;


app.get("/",(req,res)=>{
    res.status(200).send("Hello bob");
})

app.listen(port,()=>console.log(`server is running on the port ${port}`));