import { Head } from '@unhead/react'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { UnheadProvider } from '@unhead/react/client'
import { head } from './lib/unhead'

import './style/index.css'

export function App() {
  return (
    <UnheadProvider head={head}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <RouterProvider router={router} />
    </UnheadProvider>
  )
}