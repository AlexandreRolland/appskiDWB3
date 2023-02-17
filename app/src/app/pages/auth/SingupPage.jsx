import { Box, Typography } from "@mui/material";
import SignupForm from "../../components/auth/SignupForm";

const SignupPage = () => {
    return ( 
        <Box>
            <Typography
                variant='h1'
            >
                Signup Page
            </Typography>

            <SignupForm />
        </Box>
     );
}
 
export default SignupPage;