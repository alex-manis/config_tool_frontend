
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

export const BASE_URL = window.API_BASE_URL || "http://localhost:3001/api";