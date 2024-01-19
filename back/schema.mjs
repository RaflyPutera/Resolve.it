const schema={
    type: 'object',
    required: [
        'FB_TYPE',
        'FB_PROJECT_ID',
        'FB_PRIVATE_KEY_ID',
        'FB_PRIVATE_KEY',
        'FB_CLIENT_EMAIL',
        'FB_CLIENT_ID',
        'FB_AUTH_URI',
        'FB_TOKEN_URI',
        'FB_AUTH_PROVIDER_X509_CERT_URL',
        'FB_CLIENT_X509_CERT_URL',
        'FB_UNIVERSE_DOMAIN'
    ],
    properties: {
        FB_TYPE: {type: 'string'},
        FB_PROJECT_ID: {type: 'string'},
        FB_PRIVATE_KEY_ID: {type: 'string'},
        FB_PRIVATE_KEY: {type: 'string'},
        FB_CLIENT_EMAIL: {type: 'string'},
        FB_CLIENT_ID: {type: 'string'},
        FB_AUTH_URI: {type: 'string'},
        FB_TOKEN_URI: {type: 'string'},
        FB_AUTH_PROVIDER_X509_CERT_URL: {type: 'string'},
        FB_CLIENT_X509_CERT_URL: {type: 'string'},
        FB_UNIVERSE_DOMAIN: {type: 'string'}
    }
}

export default schema;