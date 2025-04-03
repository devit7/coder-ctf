
import { logoutApi } from "@/api/LogoutApi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router";

const NavDropdown = ({fullName}:{fullName:any}) => {

    const handleLogout = async () => {
        try {
            await logoutApi();
            localStorage.removeItem("token"); // Pastikan token dihapus
            // Redirect ke halaman login setelah logout
            window.location.href = "/login"; // Ganti dengan URL halaman login Anda
        } catch (error) {
            console.error("Gagal logout:", error);
        }
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-4" >
                        {fullName} 
                        <img src={`https://ui-avatars.com/api/?name=${fullName}`} alt="" className=" rounded-full w-8 " />
                    </div>
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
                        {/* <Link to="/logout"> */}
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        {/* </Link> */}
                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default NavDropdown;
