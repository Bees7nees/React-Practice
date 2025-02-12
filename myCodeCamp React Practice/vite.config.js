// Import required modules from Vite and Node.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Convert the file URL to a file path
const __filename = fileURLToPath(import.meta.url)
// Get the directory name of the current module
const __dirname = path.dirname(__filename)

// Export the Vite configuration
export default defineConfig({
  // Add the React plugin to Vite
  plugins: [react()],
  // Configure module resolution
  resolve: {
    alias: {
      // Create an alias for the 'src' directory
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
