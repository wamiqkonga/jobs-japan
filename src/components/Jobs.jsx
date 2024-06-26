import React, { useState } from 'react';
import {Grid, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Button, Box } from '@mui/material';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
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
  align-items: center;
  padding: 20px;
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
const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
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

const Title = styled(Typography)`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
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

const Jobs = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const formRef = useRef();

  const handleApplyNowClick = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ldsgpwo",
        "template_bfokivr",
        formRef.current,
        "DuHe1NB46f5YUj9s0"
      )
      .then(
        (result) => {
          setOpenSnackbar(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

//   useEffect(()=>{
//   const getData = async()=>{
//     try {
//       const response = await fetch("https://fakestoreapi.com/products/");
//       const res = await response.json();
//       setJobData(res)
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   getData();
// },[])

  return ( 
    <Box sx={{padding:{xs:"20px" , md:"10px"}}}>
    <Container>
      <Title variant="h4" sx={{marginBottom:"20px" , marginTop:"20px"}}>Jobs In Japan</Title>
      <Grid container spacing={2} justifyContent="center">
        {jobData.map((job, index) => (
           <Grid item key={index} xs={12}>
           <Card variant="outlined" >
             <Avatar variant="rounded" src={job.imageUrl} sx={{ width: 56, height: 56 }} />
             <CardContent>
               <Typography variant="h6">{job.title}</Typography>
               <Typography variant="body2" color="text.secondary">{job.location}</Typography>
               <Typography variant="body2" color="text.secondary">{job.description}</Typography>
               <Chip variant="contained" color="primary" size="small">
                 <Button variant="contained" onClick={() => handleApplyNowClick(job)}>{job.apply}</Button>
               </Chip>
             </CardContent>
           </Card>
         </Grid>
        ))}
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Apply for {selectedJob && selectedJob.title}</DialogTitle>
        <DialogContent>
        <ContactForm ref={ContactForm} onSubmit={handleSubmit}>
          <ContactTitle>Apply For Job</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required/>
          <ContactInput placeholder="Your Name" name="from_name" required/>
          <ContactInput placeholder="Experience" name="Experience" required/>
          <ContactInput placeholder="Phone" name="phone" required/>
          <ContactInputMessage placeholder="Cover Letter " rows="4" name="message" required/>
          <ContactButton type="submit" value="Send" />
        </ContactForm>
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="success">
              Email sent successfully!
            </Alert>
          </Snackbar>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleCloseDialog}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
    </Box>
  );
}

export default Jobs;
