import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Paper, TextField } from '@mui/material';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// const handleSteps = (step) => {

//     switch (step)
//      {
//       case 0:
//         return < h2>343</h2>
//       case 1:
//         return < >344</>
//       case 2:
//         return  < >345</>
//       default:
//         throw new Error('Unknown step')
//     }
//   }
function handleSteps(step) {
    switch (step) {
        case 0:
            return <Box >
                 <TextField
                                        size="small"
                                        id="father-name"
                                        label="Employee Code"
                                        variant="outlined"

                                        fullWidth
                                        margin="normal"
                                     
                                    /> 
                                      <TextField
                                        size="small"
                                        id="employee-name"
                                        label="Employee Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                    
                                    />
                                     <TextField
                                        size="small"
                                        id="employee-name"
                                        label="Gender"
                                        variant="outlined"

                                        fullWidth
                                        margin="normal"
                                        
                                    />
                                      <TextField
                                        size="small"
                                        id="father-name"
                                        label="Date Of Birth"
                                        variant="outlined"

                                        fullWidth
                                        margin="normal"
                                       
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                   
                                    /></Box>
        case 1:
            return <Box> ddfkjksdfk </Box>
        case 2:
            return <Box>dfdhkhfdkjkgdfk </Box>
        default:
            return "unknown step";
    }
}
const DemoSteper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Paper style={{ marginTop: '20px', height: 'auto', margin: '30px', backgroundColor: '#e8s8e4', border: 'transparent' }}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                          {handleSteps(activeStep)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                          
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>

                    </React.Fragment>
                )}
            </Box>
        </Paper>
    )
}
export default DemoSteper;