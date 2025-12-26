import { Link, useLocation, type LinkProps } from "react-router";

interface NavLinkProps extends LinkProps { }

export function NavLink(props: NavLinkProps) {
    const { pathname } = useLocation()

    return (
        <Link
            data-current={pathname === props.to ? true : undefined}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-current:text-foreground"
            {...props}
        />
    )
}