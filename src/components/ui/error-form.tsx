interface ErrorFormProps {
    children: React.ReactNode
}

export function ErrorForm({ children }: ErrorFormProps) {
    return (<p className='text-sm text-red-500 font-semibold'>{children}</p>)
}