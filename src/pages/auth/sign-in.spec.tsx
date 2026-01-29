import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { SignIn } from './sign-in'
import { head } from '@/lib/unhead'
import { UnheadProvider } from '@unhead/react/client'
import { useQuery } from '@/lib/react-query'

describe('SignIn', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <UnheadProvider head={head}>
            <MemoryRouter
              initialEntries={['/sign-in?email=johndoe@example.com']}
            >
              <QueryClientProvider client={useQuery}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </UnheadProvider>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('johndoe@example.com')
  })
})