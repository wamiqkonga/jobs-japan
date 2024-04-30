import React from 'react';
import {Button, Container, Grid, IconButton, Stack, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const cardsData = [
  {
    title: 'Osaka',
    description: 'Osaka is a large port city and commercial center on the Japanese island of Honshu. It is known for its modern architecture, nightlife and hearty street food. ',
    image: "/assets/osaka.jpg",
  },
  {
    title: 'Sapporo',
    description: 'Sapporo, capital of the mountainous northern Japanese island of Hokkaido, is famous for its beer, skiing and annual Sapporo Snow Festival featuring enormous ice sculptures.',
    image: "/assets/soporro.jpg"
  },
  {
    title: 'Tokyo',
    description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. ',
    image: "/assets/tokyo.jpg"
  }
];


function Home() {
  return (
    <>
    <Grid container sx={{backgroundColor:"#C8C8C8"}}>
      <Grid item xs={12} md={5}>
        <Container>
          <Typography variant="h3" gutterBottom sx={{marginTop:"65px"}}>
            Work Opportunities <br />In JAPAN
          </Typography>
          <Typography variant="body1">
            Japan offers a wide array of work opportunities across various industries, making it an attractive destination for both domestic and international job seekers. The country boasts a robust economy with key sectors such as automotive manufacturing, technology, healthcare, finance, and tourism driving growth
          </Typography>
          <Link  to="/Jobs" style={{textDecoration:"none"}}>
          <Stack sx={{display:"flex",justifyContent:"center",margin:"20px"}}>
            <Button variant="contained"sx={{width:"150px",height:"50px"}} >
              <IconButton>
                <SearchIcon sx={{marginRight:"10px"}} /><Typography variant='h5' sx={{color:'wheat' , marginRight:'10px' }}>Find Jobs</Typography>
              </IconButton>
            </Button>
          </Stack>
          </Link>
        </Container>
        <hr />
        <br />
        
      </Grid>
      
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url("/assets/japan-min.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          height: '70vh',
          borderRadius:"10px", 
          margin:"10px 1px 0 30px",
          position: 'relative', 
        }}   
      />
      
     
    </Grid>
    <Grid container sx={{backgroundColor:"#C6C6C6", justifyContent: 'center'}}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{marginTop:"70px", textAlign:"center" , marginBottom:"30px" , textDecoration:"underline" }}>Cities In Which You Can Work</Typography>
      </Grid>
      <Grid item container justifyContent="center" spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                position: 'relative',
                maxWidth: 345,
                height: '39vh',
                marginBottom:"30px",
                '&:hover .card-content': {
                  opacity: 1, 
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                
                  component="img"
                  height="250vh" 
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: 'cover' , marginBottom:"-15px"}}
                />
                <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px', opacity: 0 , marginBottom:"2px"}} className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>

    

    </>
  );
}

export default Home;
