import { Head } from '@unhead/react'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { UnheadProvider } from '@unhead/react/client'
import { head } from './lib/unhead'
import { Toaster } from "sonner"

import './style/index.css'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (

    <UnheadProvider head={head}>
      <ThemeProvider defaultTheme="system" storageKey="food-dashboard-theme">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <RouterProvider router={router} />
        <Toaster
          richColors
          closeButton
          position='top-right'
        />
      </ThemeProvider>
    </UnheadProvider>
  )
}