import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";

export function AccountMenu() {
    const { data: profile, isLoading: isProfileLoading } = useQuery({
        queryFn: getProfile,
        queryKey: ['profile']
    })

    const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } = useQuery({
        queryFn: getManagedRestaurant,
        queryKey: ['managed-restaurant']
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="flex items-center select-none gap-2"
                >
                    {isManagedRestaurantLoading ?
                        <Skeleton className="h-4 w-24" />
                        :
                        managedRestaurant?.name}
                    <ChevronDown className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    {isProfileLoading ?
                        <div>
                            <Skeleton className="h-4 w-28 mb-1" />
                            <Skeleton className="h-4 w-40" />
                        </div>
                        :
                        <>
                            <span>{profile?.name}</span>
                            <span className="text-xs text-muted-foreground font-normal">{profile?.email}</span>
                        </>
                    }
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Building className="size-4 mr-2" />
                    <span>Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="size-4 mr-2" />
                    <span>Sair</span>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}