import * as dotenv from 'dotenv';

dotenv.config();

// Ensure these variables are set in your .env file
export const openEmsUsername: string|undefined = process.env.OPENEMS_USERNAME;
export const openEmsPassword: string|undefined = process.env.OPENEMS_PASSWORD;
export const openEmsUrl: string|undefined = process.env.OPENEMS_URL;
export const openEmsConsole: string|undefined = process.env.OPENEMS_CONSOLE;
export const websocketUrl: string|undefined = process.env.WEBSOCKET_URL;

if (!openEmsUsername || !openEmsPassword || !openEmsUrl || !openEmsConsole || !websocketUrl) {
    console.error("Error: Missing OpenEMS credentials or URLs");
    process.exit(1);
}

// Define your ports and extract API keys from environment variables
export const ports: number[] = [
    12280, 12281, 12282, 12283, 12284, 12285, 12286, 12287, 12288, 12289, 12290, 12291, 12292, 12293, 12294, 12295
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