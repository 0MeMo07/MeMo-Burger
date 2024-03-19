import {useState} from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';


const ContactContainer = styled(Grid)`
  background-color: #f5f5f5;
  padding: 2rem;
`;

const FormContainer = styled(Grid)`
  background-color: #fff;
  padding: 2rem;
  border: 2px solid #d1d1d1;
  border-radius: 8px;
`;

const ContactImage = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mayrdnyg");
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonText, setButtonText] = useState('Submit');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setButtonColor('green');
    setButtonText('Submitting...');
    await handleSubmit(e); 
    setTimeout(() => {
      setButtonColor('red');
      setButtonText('Submit');
      toast.success('Sending was successful')
    }, 1000); 
  };

  return (
    <>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <form onSubmit={handleFormSubmit} method='POST'>
    <ContactContainer container style={{  display:'flex', alignItems: 'center', justifyContent: 'center'}} >
      <Grid item xs={12} sm={5}>

        <FormContainer container spacing={2}  style={{marginTop:'50px'}}>
          <Grid item xs={12}>
          {/* <ContactImage item >
            <img src={afis} alt="Contact" style={{width: '100%', height:"200px",borderRadius: '8px'}} />
          </ContactImage> */}
            <Typography variant="h4" align="center" gutterBottom>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Name" id="name" name="name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              id="email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
             <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              id="message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained"
              disabled={state.submitting} 
              style={{ backgroundColor:`${buttonColor}` }} 
              fullWidth
            >
              {buttonText}
            </Button>
          
        
          </Grid>
        </FormContainer>
      </Grid>
  
    </ContactContainer>
</form>
    </>
  );
};

export default ContactForm;