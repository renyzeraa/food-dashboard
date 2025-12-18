import { PageHead } from '@/components/page-head'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Link } from 'react-router'
import { ErrorForm } from '@/components/ui/error-form'

const signInForm = z.object({
    email: z.email({ message: 'Por favor, insira um e-mail válido.' }),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
    const searchParams = new URLSearchParams(window.location.search)
    const emailParam = decodeURIComponent(searchParams.get('email') || '')

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignInForm>({
        resolver: zodResolver(signInForm),
        defaultValues: {
            email: emailParam
        }
    })

    async function handleSignIn(data: SignInForm) {
        try {
            console.log(data)
            toast.success('Enviamos um link de autenticação para seu e-mail.', {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSignIn(data)
                }
            })
        } catch (error) {
            toast.error('Credenciais inválidas.')
        }
    }

    return (
        <>
            <PageHead
                title="Entrar"
                description="Acesse sua conta Food Dashboard"
                keywords="login, autenticação, entrada"
            />
            <div className='p-8'>
                <Button asChild className='absolute top-6 right-6' size="sm" variant="ghost">
                    <Link
                        to="/sign-up"
                    >
                        Ainda não possui uma conta? Cadastre-se
                    </Link>
                </Button>

                <div className='w-87.5 flex flex-col justify-center gap-6'>
                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>Acessar painel</h1>
                        <p className='text-sm text-foreground'>Acompanhe suas vendas pelo painel do parceiro!</p>
                    </div>

                    <form className='space-y-4' onSubmit={handleSubmit(handleSignIn)}>
                        <div className='space-y-2'>
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} placeholder='user@email.com' />
                        </div>

                        <Button type='submit' className='w-full' disabled={isSubmitting}>
                            Acessar painel
                        </Button>

                        {errors.email && (<ErrorForm>{errors.email.message}</ErrorForm>)}
                    </form>
                </div>
            </div>
        </>
    )
}