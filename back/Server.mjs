import Fastify from "fastify";
import cors from "@fastify/cors";
import { Initialize } from "./fbConnection.mjs";
import routes from "./routes/accountRoutes.mjs";

const fast=Fastify({ logger: true });
await fast.register(cors)
await fast.register(Initialize)
await fast.register(routes)

try{
    await fast.listen({port:5172, host:"0.0.0.0"})
}catch(err){
    fast.log.error(err)
    process.exit(1)
}