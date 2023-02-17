import { Box, Typography } from "@mui/material";
import SigninForm from "../../components/auth/SigninForm";

const SigninPage = () => {
    return ( 
        <Box>
            <Typography
                variant='h1'
            >
                Signin Page
            </Typography>

            <SigninForm />
        </Box>
     );
}
 
export default SigninPage;