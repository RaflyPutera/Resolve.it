import validator from "validator";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


let email=null;
let password=null;
export default async function routes(fast, options) {
    //SignUp Route
    const SignUpPreHandler=async(request,reply)=>{
        const data=request.body;
        console.log(data)
        email=data.EMAIL;
        password=data.PASSWORD;
        if(validator.isEmail(email)){
            console.log("good email")
        }
        console.log(email)
    }
    const SignUpHandler=async(request,reply)=>{
        try {
            const auth = getAuth();
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = credentials.user;
            reply.code(200).send({ success: true, message: 'Data received successfully', process: true });
        } catch (error) {
            console.error('Error:', error);
            const errorCode = error.code;
            const errorMessage = error.message;
    
            // Handle specific errors
            if (errorCode === 'auth/email-already-in-use') {
                reply.code(409).send({ success: false, message: 'Email is already in use' });
            } else {
                reply.code(500).send({ success: false, message: 'Internal Server Error' });
            }
        }
    }
    fast.post('/SignUp',{preHandler:SignUpPreHandler},SignUpHandler);

    //Login Route
    const LoginPreHandler=async(request,reply)=>{
        const data=request.body;
        console.log(data)
        email=data.EMAIL;
        password=data.PASSWORD;
        if(validator.isEmail(email)){
            console.log("good email")
        }
        console.log(email)
    }

    const LoginHandler=async(request,reply)=>{
        console.log(email,password)
        try{
            const auth=getAuth();
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            const user = credentials.user;
            auth.currentUser.getIdToken(true)
            .then(function(idToken) {
                console.log(idToken);
            });
            reply.code(200).send({ success: true, message: 'Login success'});
                
        }
        catch(error){
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error during login: ${errorCode}`);
            if (errorCode==='auth/invalid-credential'){
                reply.code(401).send({ success: false, message: 'Invalid Credentials' });
            }
            else{
                reply.code(500).send({ success: false, message: 'Internal Server Error' });
            }
            // Send an error response
        }
    }
    fast.post('/LogIn',{preHandler:LoginPreHandler},LoginHandler);


    // fast.route({
    //     method: "POST",
    //     url: "/SignUp",
    //     schema: {
    //         body: {
    //         type: 'object',
    //         properties: {
    //             email: { type: 'string' },
    //             password: { type: 'string' }
    //         },
    //         required: ["email", "password"]
    //         },
    //         response: {
    //         200: {
    //             type: 'object',
    //             properties: { info: { type: 'string' } }
    //         }
    //         }
    //     },
    //     preHandler: async (request, reply) => {
    //         fast.log.info("good credentials");
    //     },
    //     handler: async (request, reply) => {
    //         const { email, password } = request.query;
    //         return { info: { email, password } };
    //     }
    // });
}