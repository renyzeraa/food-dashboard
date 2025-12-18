import { PageHead } from '@/components/page-head'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router'
import { ErrorForm } from '@/components/ui/error-form'

const signUpForm = z.object({
    email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
    restaurantName: z.string().min(2, { message: 'O nome do restaurante deve ter pelo menos 2 caracteres.' }),
    managerName: z.string().min(2, { message: 'O seu nome deve ter pelo menos 2 caracteres.' }),
    phone: z.string().min(8, { message: 'O telefone deve ter pelo menos 8 dígitos.' }),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignUpForm>({
        resolver: zodResolver(signUpForm)
    })

    const navigate = useNavigate()

    async function handleSignUp(data: SignUpForm) {
        try {
            console.log(data)
            toast.success('Restaurante cadastrado com sucesso.', {
                action: {
                    label: 'Ir para o login',
                    onClick: () => navigate('/sign-in?email=' + encodeURIComponent(data.email))
                }
            })
        } catch (error) {
            toast.error('Erro ao cadastrar restaurante.')
        }
    }

    return (
        <>
            <PageHead
                title="Cadastro"
                description="Crie sua conta no Food Dashboard"
                keywords="cadastro, registro, criar conta"
            />
            <div className='p-8'>
                <Button asChild className='absolute top-6 right-6' size="sm" variant="ghost">
                    <Link
                        to="/sign-in"
                    >
                        Já possui uma conta? Entre
                    </Link>
                </Button>

                <div className='w-87.5 flex flex-col justify-center gap-6'>
                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>Criar conta grátis</h1>
                        <p className='text-sm text-foreground'>Seja um parceiro e acompanhe suas vendas pelo painel do parceiro!</p>
                    </div>

                    <form className='space-y-4' onSubmit={handleSubmit(handleSignUp)}>
                        <div className='space-y-2'>
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input id="managerName" type="text" {...register('managerName')} placeholder='João Cleber' />
                        </div>
                        {errors.managerName && (<ErrorForm>{errors.managerName.message}</ErrorForm>)}

                        <div className='space-y-2'>
                            <Label htmlFor="restaurantName">Nome do restaurante</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} placeholder='Casa da Feijoada' />
                        </div>
                        {errors.restaurantName && (<ErrorForm>{errors.restaurantName.message}</ErrorForm>)}

                        <div className='space-y-2'>
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} placeholder='user@email.com' />
                        </div>
                        {errors.email && (<ErrorForm>{errors.email.message}</ErrorForm>)}

                        <div className='space-y-2'>
                            <Label htmlFor="phone">Seu telefone</Label>
                            <Input id="phone" type="text" {...register('phone')} placeholder='(49) 99999-9999' />
                        </div>
                        {errors.phone && (<ErrorForm>{errors.phone.message}</ErrorForm>)}

                        <Button type='submit' className='w-full' disabled={isSubmitting}>
                            Finalizar cadastro
                        </Button>

                        <p className='px-6 text-center text-sm text-muted-foreground leading-relaxed'>
                            Ao continuar, você concorda com nossos <a className='underline underline-offset-4' href="">Termos de Serviço</a> e <a className='underline underline-offset-4' href="">Política de Privacidade</a>.
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}