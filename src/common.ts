import * as dotenv from 'dotenv';

dotenv.config();

// Ensure these variables are set in your .env file
export const openEmsUsername: string|undefined = process.env.OPENEMS_USERNAME;
export const openEmsPassword: string|undefined = process.env.OPENEMS_PASSWORD;
export const openEmsConsole: string|undefined = process.env.OPENEMS_CONSOLE;
export const websocketUrl: string|undefined = process.env.WEBSOCKET_URL;

if (!openEmsUsername || !openEmsPassword || !openEmsConsole || !websocketUrl) {
    console.error("Error: Missing OpenEMS credentials or URLs");
    process.exit(1);
}

// Define your ports and extract API keys from environment variables
export const ports: number[] = [
    9080, 9081, 9082, 9083, 9084, 9085, 9086, 9087, 9088, 9089, 9090, 9091, 9092, 9093, 9094, 9095
];

export const portsAndKeys: { [port: number]: string } = {};
for (const port of ports) {
    const envKeyName = `API_KEY_${port}`;
    const apiKey: string|undefined = process.env[envKeyName];
    if (!apiKey) {
        console.error(`Error: Missing API key for port ${port} (${envKeyName}).`);
        process.exit(1);
    }
    portsAndKeys[port] = apiKey;
}