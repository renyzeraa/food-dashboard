import z from "zod";

export const storeProfileSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    description: z.string().nullable()
});

export type StoreProfileInput = z.infer<typeof storeProfileSchema>;