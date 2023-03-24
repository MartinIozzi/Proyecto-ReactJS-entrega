import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom'

//es donde se pone el contenedor de los productos seleccionados en mi ecommerce
const Item = ({product}) => {
  return (
    <>
    <Link to={`/productos/${product.id}`} style={styles.link}>   
    <Card sx={{ maxWidth: 345}} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt={product.name}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
          {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
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
        marginLeft: 10,
        backgroundColor: "rgb(226, 121, 0)",

    },
    link: {
      width: 345,
      textDecoration: 'none'
    }
}
  
export default Item;