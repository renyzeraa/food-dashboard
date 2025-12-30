import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { storeProfileSchema, type StoreProfileInput } from "@/schema/store-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

export function StoreProfileDialog() {
    const queryClient = useQueryClient()

    const { data: managedRestaurant } = useQuery({
        queryFn: getManagedRestaurant,
        queryKey: ['managed-restaurant'],
        staleTime: Infinity
    })

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<StoreProfileInput>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? "",
            description: managedRestaurant?.description ?? ""
        }
    })

    function updateManagedRestaurantCache({ name, description }: StoreProfileInput) {
        const cached = queryClient.getQueryData(['managed-restaurant'])
        if (cached) {
            queryClient.setQueryData(['managed-restaurant'], {
                ...cached,
                name,
                description
            })
        }

        return { cached }
    }

    const { mutateAsync: updateProfileMutation } = useMutation({
        mutationFn: updateProfile,
        onMutate({ name, description }) {
            const { cached } = updateManagedRestaurantCache({ name, description })
            return { previousProfile: cached }
        },
        onError(_, __, context) {
            if (context?.previousProfile) {
                queryClient.setQueryData(['managed-restaurant'], context.previousProfile)
            }
        },
    })

    async function onSubmitStoreProfile(data: StoreProfileInput) {
        try {
            await updateProfileMutation({
                name: data.name,
                description: data.description || ""
            })

            toast.success("Perfil atualizado com sucesso!")
        } catch (error) {
            toast.error("Erro ao atualizar o perfil.")
        }
    }

    return (
        <DialogContent>
            <DialogHeader>
                Perfil da loja
                <DialogDescription>
                    Atualize as informações da sua loja aqui.
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmitStoreProfile)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            className="col-span-3"
                            {...register("name")}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">Descrição</Label>
                        <Textarea
                            id="description"
                            className="col-span-3"
                            {...register("description")}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="ghost" disabled={isSubmitting}>
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button type="submit" variant={"success"} disabled={isSubmitting}>Salvar</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}