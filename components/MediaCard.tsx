import { useState, useCallback } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 500
    },
    media: {
      height: 140
    }
  })
);

export default function MediaCard({ title, description, img, ...others }) {
  const classes = useStyles({});
  const [raised, setRaised] = useState(false);

  const onFocus = value => () => {
    setRaised(value);
  };

  return (
    <Card
      className={classes.card}
      raised={raised}
      onMouseEnter={onFocus(true)}
      onMouseLeave={onFocus(false)}
      {...others}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
