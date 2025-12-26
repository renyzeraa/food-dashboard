import { Drumstick, Home, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";
import { AccountMenu } from "./account-menu";

export function Header() {
    return (
        <div className="border-b border-solid">
            <div className="flex h-16 items-center gap-6 px-6">
                <Drumstick className="size-6" />
                <Separator orientation="vertical" decorative className="h-6" />

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to="/">
                        <Home className="size-4" />
                        Início
                    </NavLink>
                    <NavLink to="/orders">
                        <UtensilsCrossed className="size-4" />
                        Pedidos
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
    )
}