import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Default dark mode (RemiXense is dark-only)
document.documentElement.classList.add('dark')

declare global {
  interface Window { __remixense_initialized?: boolean }
}

if (!window.__remixense_initialized) {
  window.__remixense_initialized = true
}

createRoot(document.getElementById("root")!).render(<App />);
