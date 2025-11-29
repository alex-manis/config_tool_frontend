
export const STANDARD_KEYS = new Set([
  "publisherId", "aliasName", "isActive", "pages", "publisherDashboard",
  "monitorDashboard", "qaStatusDashboard", "customCss", "tags", "notes",
]);

// API base URL - defaults to backend server URL
// Can be overridden by setting window.API_BASE_URL before loading the app
declare global {
  interface Window {
    API_BASE_URL?: string;
  }
}

// Production API URL
const PRODUCTION_API_URL = "https://config-tool-backend.onrender.com/api";

// Determine if we're in production (GitHub Pages or other production host)
const isProduction = window.location.hostname !== "localhost" && 
                     window.location.hostname !== "127.0.0.1";

export const BASE_URL = window.API_BASE_URL || 
                        (isProduction ? PRODUCTION_API_URL : "http://localhost:3001/api");