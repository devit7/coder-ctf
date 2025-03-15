
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings, User } from "lucide-react";
import { Link } from "react-router";
const NavDropdown = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div >Devit Erlingga A</div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link to="/profile">
                            <DropdownMenuItem >
                                <User />
                                <span >Profile</span>
                            </DropdownMenuItem>
                        </Link>
                        <Link to="/profile-setting">
                            <DropdownMenuItem>
                                <Settings />
                                <span>Settings</span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default NavDropdown;
