import axios from "axios";

export const RequestTokenSession=((token:string)=>{
    const endpoint="http://localhost:5172/TokenRequest"
    axios.post(endpoint,{token:token})
        .then(response=>{
            if (response.data.process===true){
                //show success
                console.log("sent request")
            }
        })
        .catch(error=>{
            const errcode=error.response.status
            console.log(errcode)
        })
    })
