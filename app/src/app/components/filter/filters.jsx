import * as React from 'react';
import { FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';
import { Box } from '@mui/system';

const FilterBar = () => {
    return (
<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
    <TextField id="outlined-basic" label="Rechercher par adresse" variant="outlined" />
    <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Poids
        </InputLabel>
        <NativeSelect
            defaultValue={30}
            inputProps={{
            name: 'poid',
            id: 'uncontrolled-native',
             }} >
        <option value={45}>Plus de 45kg</option>
        <option value={20}>Entre 45 et 65kg</option>
        <option value={30}>Plus de 65kg</option>
        </NativeSelect>
    </FormControl>
    <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            style
        </InputLabel>
        <NativeSelect
            defaultValue={30}
            inputProps={{
            name: 'style',
            id: 'uncontrolled-native',
             }} >
        <option value={"freeride"}>Freeride</option>
        <option value={"freestyle"}>Freestyle</option>
        <option value={"piste"}>Piste</option>
        <option value={"Polyvalant"}>Polyvalant</option>
        </NativeSelect>
    </FormControl>
    <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Les tailles
        </InputLabel>
        <NativeSelect
            defaultValue={30}
            inputProps={{
            name: 'taille',
            id: 'uncontrolled-native',
             }} >
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
        </NativeSelect>
    </FormControl>
</Box>
    )
}

export default FilterBar