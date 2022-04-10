import React, { useState } from 'react';
import {
    CssBaseline,
    Box,
    Container,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography
} from '@mui/material';
import { Diet } from './Diet';
import { Cuisine } from '../questions/Cuisine';

const steps = ['', '']

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <Diet/>;
        case 1:
            return <Cuisine/>;
        default:
            throw new Error('Unknown step');
    }
}

export function Questions() {

    const [activeStep, setActiveStep] = useState(0);
    
    function handleNext() {
        setActiveStep(activeStep + 1);
    };

    function handleBack() {
        setActiveStep(activeStep - 1);
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 20 }}>
            <CssBaseline/>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    Questions
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                            </Button>
                        )}
                        <Button
                            variant='contained'
                            onClick={handleNext}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            </Paper>
        </Container>
    );

}