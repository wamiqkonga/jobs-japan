import React,{useState} from 'react';
import { Button, Box, Grid, Avatar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";


const jobData = [
  {
    title: 'Android Developer',
    location: 'Exp: 4+ | Remote ',
    apply: 'Apply Now',
    description: 'We are seeking an experienced Android developer to join our dynamic team. The ideal candidate will be responsible for the development and maintenance of applications aimed at a vast number of diverse Android devices.',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'Web Developer',
    location: 'Exp: 2+ | On-site',
    apply: 'Apply Now',
    description: 'We are seeking an experienced Web developer to join our dynamic team. The ideal candidate will be responsible for the development and maintenance of applications aimed at a vast number of diverse  devices.',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'Java Developer',
    location: 'Exp: 1+ | On-site',
    apply: 'Apply Now',
    description: 'We are seeking an experienced JAVA developer to join our dynamic team. The ideal candidate will be responsible for the development and maintenance of applications aimed at a vast number of diverse  devices.',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'React JS',
    location: 'Exp: 1+ | Remote',
    apply: 'Apply Now',
    description: 'We are seeking an experienced Web developer to join our dynamic team. The ideal candidate will be responsible for the development and maintenance of applications aimed at a vast number of diverse  devices.',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'UI/UX Designer',
    location: 'Exp: 2+ | Remote',
    apply: 'Apply Now',
    description: 'We are seeking an experienced Graphic Designer to join our dynamic team. The ideal candidate will be responsible for the development and maintenance of applications aimed at a vast number of diverse  devices.',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
];
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;



const Jobs = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyNowClick = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ldsgpwo",
        "template_bfokivr",
        form.current,
        "DuHe1NB46f5YUj9s0"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return ( 
    
    <Box xs={12} >
      <Grid container sx={{ backgroundColor: "#C8C8C8", }}>
        <Grid item xs={12}>
          <Box spacing={2} justifyContent="center" sx={{padding:"20px"}}>
                    <Typography variant="h4" sx={{ marginTop: "30px", textAlign: "center", marginBottom: "30px", textDecoration: "underline" }}>Jobs In Japan</Typography>
                    </Box>

                    </Grid>
                    <Grid item xs= {12}>
                    <Box spacing={4} sx={{marginLeft:"280px",}}>

            {jobData.map((job, index) => (
                <Card
                key={index}
                  variant="outlined"
                  orientation="horizontal"
                  sx={{
                    width: 650,
                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                  }}
                >
                  <Avatar
                   variant='rounded'
                   src={job.imageUrl}
                   sx={{ width: 56, height: 56 }}
                          ></Avatar>

                  <CardContent>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{job.location}</Typography>
                    <Typography variant="body2" color="text.secondary">{job.description}</Typography>
                    <Chip variant="contained" color="primary" size="small">
                      <Button variant="contained" sx={{marginLeft:"450px"}}  onClick={() => handleApplyNowClick(job)}>{job.apply}</Button></Chip>
                  <Typography></Typography>
                  </CardContent>
                </Card>
            ))}
                 </Box>
        </Grid>     
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Apply for {selectedJob && selectedJob.title}</DialogTitle>
        <DialogContent>
          
        <Container>
      <Wrapper>
        <Title>Jobs-Japan</Title>
        <Desc>
        Connecting Careers, Building Futures
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Apply For Job</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required/>
          <ContactInput placeholder="Your Name" name="from_name" required/>
          <ContactInput placeholder="Experience" name="Experience" required/>
          <ContactInput placeholder="Phone" name="phone" required/>
          <ContactInputMessage placeholder="Cover Letter " rows="4" name="message" required/>
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000} 
          onClose={() => setOpen(false)}
        >
          <Alert severity="info">Email sent successfully!</Alert>
        </Snackbar>
      </Wrapper>
    </Container>

          
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleCloseDialog}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Jobs;
