import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { enableMSW } from './api/mocks/setup.ts'

enableMSW().then(() => {
  createRoot(document.getElementById('root') as HTMLDivElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})