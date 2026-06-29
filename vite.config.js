import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Sets the localhost port to 3000
        watch: {
            // Tells Vite to completely ignore watching files inside the public directory
            ignored: ['**/public/**']
        }
    }
});