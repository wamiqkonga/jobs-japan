import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/material/Typography';
import { Button, Box, Grid } from '@mui/material';

const jobData = [
  {
    title: 'Android Developer',
    location: 'Tokyo, Japan',
    description: 'Apply Now',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'Web Developer',
    location: 'California, USA',
    description: 'Apply Now',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'Java Developer',
    location: 'California, USA',
    description: 'Apply Now',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'Yosemite Park',
    location: 'California, USA',
    description: 'Apply Now',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
  {
    title: 'Yosemite Park',
    location: 'California, USA',
    description: 'Apply Now',
    imageUrl: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90',
  },
];

const recentSearches = ['React Developer', 'Node.js Developer', 'Full Stack Developer'];

const Jobs = () => {
  return ( 
    
    <Box xs={12} >
      <Grid container sx={{ backgroundColor: "#C8C8C8", }}>
        <Grid item xs={9}>
          <Box spacing={2} justifyContent="center" sx={{padding:"20px"}}>
                    <Typography variant="h4" sx={{ marginTop: "30px", textAlign: "center", marginBottom: "30px", textDecoration: "underline" }}>Jobs In Japan</Typography>
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
                  <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <img
                      src={job.imageUrl}
                      srcSet={`${job.imageUrl}&dpr=2 2x`}
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                  <CardContent>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{job.location}</Typography>
                    <Chip variant="outlined" color="primary" size="small"><Button variant="contained">{job.description}</Button></Chip>
                  </CardContent>
                </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{padding:"20px"}}>

            <Typography variant="h4" sx={{ marginTop: "30px", textAlign: "center",marginBottom:"30px" }}>Recent Hired on Job-Japan
            </Typography>
            {recentSearches.map((search, index) => (
              <Card key={index} sx={{ marginTop: "10px" }}>
                <CardContent>
                  <Typography variant="body1">{search}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          </Grid>
      </Grid>
    </Box>
  );
}

export default Jobs;
