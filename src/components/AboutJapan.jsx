import React from 'react';
import { Typography , Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Img1 from "../assets/img1.jpg"
import Img2 from "../assets/img2.jpg"
import Img3 from "../assets/img3.jpg"
import Img4 from "../assets/img4.jpg"
import Kimono from "../assets/kimono.jpg"
import Food from "../assets/food.jpg"
import Architecture from "../assets/architecture.jpg"
import Handwriting from "../assets/handwriting.jpg"




const placeData =[{
    title: 'Fushimi Inari Taisha',
    description: '',
    image : Img1 },
{
   title: 'Kinkaku-ji',
    description: '',
    image: Img2

},
{
  title: 'Itsukushima Jinja',
   description: '',
image: Img3
},
{
  title: 'Tokyo Skytree',
   description: '',
   image : Img4
},
]

const cultures =[{
  title: 'kimono',
    description: '',
    image : Kimono
  },
{
   title: 'Eating with Chopsticks',
    description: '',
    image: Food

},
{
  title: 'Architecture',
   description: '',
   image: Architecture

},
{
  title: 'Hand-Written Things',
   description: '',
   image: Handwriting

},
]


const AboutJapan = () => {
  return (
    <>
   
      <Grid container sx={{backgroundColor:"#C8C8C8", justifyContent: 'center' }}>
     
      <Typography variant='h4' sx ={{marginTop:'45px',textDecoration:"underline",marginBottom:'15px'}} >Sightseeing in Japan</Typography>
      <Grid container sx={{backgroundColor:"#C8C8C8", justifyContent: 'center'}}>
      <Typography variant='h6' sx ={{margin:"15px"}} ><Grid container sx={{backgroundColor:"#C8C8C8", justifyContent: 'center'}}>
      <Typography variant='h6' sx ={{marginTop:'15px',marginBottom:'15px' }} >Sightseeing in Japan offers a fascinating blend of ancient traditions and cutting-edge modernity. 
      </Typography> <br />
      <Typography variant='h5' sx ={{marginTop:'15px',marginBottom:'15px' , fontWeight:"800" }} >  Here are some must-visit destinations: </Typography> 
     
      </Grid></Typography>
      </Grid>
      
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
            sx={{ objectFit: 'cover' , height:"40em" }}
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
    
    <Grid container sx={{backgroundColor:"#C8C8C8", justifyContent: 'center'}}>
      <Typography variant='h4' sx ={{marginTop:'45px',textDecoration:"underline"}} > Japanese Culture</Typography>
      <Grid container sx={{backgroundColor:"#C8C8C8", justifyContent: 'center'}}>
      <Typography variant='h6' sx ={{margin:"15px" }} >Japanese culture is a set of values that puts importance on social harmony and hard work. Up until the 10th century, Japanese culture was similar to the Chinese culture, but the rise of the samurai in the Heian Period and the isolation during the Edo Period changed the rules of society. Overall, the culture was influenced by the local Shinto religion, Buddhism, Confucianism and the limited natural resources.</Typography>
      </Grid>
      <Grid item container justifyContent="center" spacing={2} marginBottom={'15px'}>
  {cultures.map((card, index) => (
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
            sx={{ objectFit: 'cover', height:"40em"}}
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

export default AboutJapan;
