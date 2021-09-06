import React from 'react'


import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const Card_pro = (props) => {
    return (
        <Card className="project__card">
          <CardActionArea>
           <img className="card__image"  src={'assets/' + props.img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
           <a target="_blank" href={props.link1}> View Project</a>  
            </Button>
            <Button size="small" color="primary">
            <a target="_blank" href={props.link2}> View Source</a>  
            </Button>
          </CardActions>
        </Card>
    )
}

export default Card_pro;
