import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import admin from "firebase-admin";

export const IniFirebaseAdmin=(fast)=>{
    const certificate={
        type: fast.config.FB_TYPE,
        project_id: fast.config.FB_PROJECT_ID,
        private_key_id:fast.config.FB_PRIVATE_KEY_ID,
        private_key:fast.config.FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email:fast.config.FB_CLIENT_EMAIL,
        client_id:fast.config.FB_CLIENT_ID,
        auth_uri:fast.config.FB_AUTH_URI,
        token_uri:fast.config.FB_TOKEN_URI,
        auth_provider_x509_cert_url:fast.config.FB_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url:fast.config.FB_CLIENT_X509_CERT_URL,
        universe_domain:fast.config.FB_UNIVERSE_DOMAIN        
    }
    admin.initializeApp({credential:admin.credential.cert(certificate)})
    console.log("connected as firebase-admin")
}