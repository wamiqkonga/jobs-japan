import React from 'react';
import {Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bg from './japan.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import tokyo from './tokyo.jpg';
import Osaka from './osaka.jpg';
import Sapporo from './soporro.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

const cardsData = [
  {
    title: 'Osaka',
    description: 'Osaka is a large port city and commercial center on the Japanese island of Honshu. It is known for its modern architecture, nightlife and hearty street food. ',
    image: Osaka,
  },
  {
    title: 'Sapporo',
    description: 'Sapporo, capital of the mountainous northern Japanese island of Hokkaido, is famous for its beer, skiing and annual Sapporo Snow Festival featuring enormous ice sculptures.',
    image: Sapporo
  },
  {
    title: 'Tokyo',
    description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. ',
    image: tokyo
  }
];

const placeData =[{
  title: 'Fushimi Inari Taisha',
    description: '',
    image: img1
},
{
   title: 'Kinkaku-ji',
    description: '',
    image: img2

},
{
  title: 'Itsukushima Jinja',
   description: '',
   image: img3

},
{
  title: 'Tokyo Skytree',
   description: '',
   image: img4

},
]

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
          <Stack sx={{display:"flex",justifyContent:"center",margin:"20px"}}>
            <Button variant="contained" color="secondary" sx={{width:"150px",height:"50px"}} >
              <IconButton>
                <SearchIcon sx={{marginRight:"10px"}} />
                Find Jobs
              </IconButton>
            </Button>
          </Stack>
        </Container>
        <hr />
        <br />
        
      </Grid>
      
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          height: '70vh',
          borderRadius:"10px", 
          margin:"10px 1px 0 30px",
          position: 'relative', 
        }}   
      />
      
     
    </Grid>
    <Grid container sx={{backgroundColor:"#C8C8C8", justifyContent: 'center'}}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{marginTop:"10px", textAlign:"center" , marginBottom:"20px" , textDecoration:"underline" }}>Cities In Which You Can Work</Typography>
      </Grid>
      <Grid item container justifyContent="center" spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                position: 'relative',
                maxWidth: 345,
                height: '39vh',
                '&:hover .card-content': {
                  opacity: 1, 
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%" 
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: 'cover'}}
                />
                <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', padding: '10px', opacity: 0 }} className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>

    <Grid container sx={{backgroundColor:"#C8C8C8", justifyContent: 'center'}}>
      <Typography variant='h5' sx ={{marginTop:'45px',textDecoration:"underline",marginBottom:'15px'}} >SightSeeing in Japan</Typography>

      <Grid item container justifyContent="center" spacing={2} marginBottom={'15px'}>
  {placeData.map((card, index) => (
    <Grid item key={index}>
      <Card
        sx={{
          position: 'relative',
          maxWidth: "240px",
          height: '300px',
          borderRadius:"20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%" 
            image={card.image}
            alt={card.title}
            sx={{ objectFit: 'cover'}}
          />
          <CardContent sx={{ position: 'absolute',top : 260, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '8px' }}>
            <Typography variant="h6" component="div" sx={{ margin: "0px"}}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
