import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBarItem = ({path, label}) => {
    return ( 
        <Typography
            variant='p'
            component={Link}
            to={path}
            sx={{
                textDecoration: 'none',
                mx: 2,
                color: "primary.secondary"
            }}
        >
            {label}
        </Typography>
     );
}
 
export default NavBarItem;