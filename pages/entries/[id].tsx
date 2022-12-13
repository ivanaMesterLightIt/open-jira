import {capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Layout } from "../../components/layouts";
import { EntryStatus } from "../../interfaces";
import { ChangeEvent, useMemo, useState } from "react";

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

export const EntryPage = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo( () => inputValue.length <= 0 && touched, [inputValue, touched] );

    const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus( event.target.value as EntryStatus );
    }

    const onSave = () => {
        console.log({ inputValue, status });
        // if( inputValue.length === 0 ) return;
        // addNewEntry(inputValue);
        // setIsAddingEntry(false);
        // setTouched(false);
        // setStatus('pending');
        // setInputValue('');
    }

    return (
        <Layout title="....">
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                    <Card>
                        <CardHeader 
                            title={`Entrada: ${ inputValue }`}
                             subheader={`Creada hace: ... minutos`}
                        />
                        <CardContent>
                            <TextField 
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="Nueva entrada"
                                autoFocus
                                multiline
                                label="Nueva entrada"
                                value={ inputValue }
                                onChange={ onInputValueChange }
                                onBlur={ () => setTouched(true) }
                                helperText={ isNotValid && 'Ingrese un valor' }
                                error={ isNotValid }
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup 
                                    row 
                                    value={ status} 
                                    onChange={ onStatusChange } 
                                > 
                                    {
                                        validStatus.map( option => (
                                            <FormControlLabel
                                                key={ option }
                                                value={ option }
                                                control={ <Radio/>}
                                                label={ capitalize(option) }
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={ <SaveOutlinedIcon/> }
                                variant="contained"
                                fullWidth
                                onClick={ onSave }
                                disabled={ inputValue.length <= 0 }
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <IconButton
                sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'text.secondary' }}
            >
                <DeleteOutlineIcon />
            </IconButton>
        </Layout>
    );
}

export default EntryPage;