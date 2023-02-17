import { Box } from "@mui/material";
import NavBarItem from "./NavbarItem";

const ConfigNavBarItems = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/auth/signin',
        label: 'Signin',
    },
    {
        path: '/auth/signup',
        label: 'Signup',
    },
]

const NavbarMain = () => {
    return ( 
        <Box
            component='nav'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
            }}
        >
            {ConfigNavBarItems.map((item, index) => 
                <NavBarItem
                    key={index}
                    path={item.path}
                    label={item.label}
                />
            )}
        </Box>
     );
}
 
export default NavbarMain;