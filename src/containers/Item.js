import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom'

const Item = ({productos}) => {
  return (
    <>
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt=""
        />
        <CardContent style={styles.texto}>
          <Typography gutterBottom variant="h5" component="div">
            Aros de Roronoa Zoro
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tipo de aro: Colgante
            <br></br>
            Estilos: Colgante
            <br></br>
            Largo x Ancho: 5 cm x 3 cm
            <br></br>
            Diámetro: 3 mm
            <br></br>
            Con piedra: No
            <br></br>
            Precio: $1200
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</>
  );

}

const styles = {
    container: {
        display: 'flex',
        width: window.innerHeight > 1200 ? "30%" : "90%",
        flexDirection: "column",
        justifyContent: "center",
        margin: 50,
    },
    texto: {
        margin: 20,
    }
}
  
export default Item;