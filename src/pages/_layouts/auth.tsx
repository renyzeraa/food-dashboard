import { Drumstick } from "lucide-react";
import { Outlet } from "react-router";

export function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-2">
            <div className="h-full border-r border-foreground/5 p-10 text-muted-foreground bg-muted border-solid flex flex-col justify-between">
                <div className="flex items-center gap-3 text-lg text-foreground">
                    <Drumstick className="size-5" />
                    <span className="font-medium">Food Dashboard</span>
                </div>
                <footer className="text-sm">Painel do parceiro &copy; Food Dashboard - {new Date().getFullYear()}</footer>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
}