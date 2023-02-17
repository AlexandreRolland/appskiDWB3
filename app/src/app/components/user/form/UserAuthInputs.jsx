import { FormGroup, TextField } from "@mui/material";

const UserAuthInputs = () => {
    return ( 
        <>
            <FormGroup>
                <TextField 
                    label="Email" 
                    variant="outlined" 
                />
            </FormGroup>
            <FormGroup>
                <TextField 
                    label="Password" 
                    variant="outlined" 
                />
            </FormGroup>
        </>
     );
}
 
export default UserAuthInputs;