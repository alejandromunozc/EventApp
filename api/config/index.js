require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    secret: process.env.SECRET,
    awsId: process.env.AWS_ID,
    awsSecret: process.env.AWS_SECRET,
    awsBucket: process.env.AWS_BUCKET_NAME,
    mgApiKey: process.env.MG_API_KEY,
    mgDomain: process.env.MG_DOMAIN
}

module.exports = { config };