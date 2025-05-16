// First, require and configure dotenv
require('dotenv').config();

// Now you can access the environment variables
console.log('Database Host:', process.env.DB_HOST);
console.log('Database User:', process.env.DB_USER);
console.log('API Key:', process.env.API_KEY);

// You can use these variables in your database connection
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

// Example of using environment variables with validation
function getRequiredEnvVar(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is required but not set`);
    }
    return value;
}

// Usage with validation
try {
    const apiKey = getRequiredEnvVar('API_KEY');
    console.log('API Key is valid:', apiKey);
} catch (error) {
    console.error('Error:', error.message);
} 