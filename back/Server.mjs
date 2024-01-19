import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
import cors from "@fastify/cors";
import { IniFirebaseAdmin } from "./fbConnection.mjs";
import routes from "./routes/accountRoutes.mjs";
import schema from "./schema.mjs";

const fast=Fastify({ logger: true });
const options={
    confKey: 'config',
    schema,
    dotenv: true,
    data: process.env
}

await fast.register(fastifyEnv,options)
await fast.after()
await fast.register(cors)
await fast.register(routes)

IniFirebaseAdmin(fast)

try{
    await fast.listen({port:5172, host:"0.0.0.0"})
}catch(err){
    fast.log.error(err)
    process.exit(1)
}