import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import { red } from '@material-ui/core/colors';
import { IMarvelImage } from '../types';


interface IProps {
    thumbnail: IMarvelImage
    title: string
    id: number
    contentLabel: string
    titleLabel: string
}

export default function RecipeReviewCard({thumbnail, title, titleLabel, id, contentLabel}: IProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={`${thumbnail.path}.${thumbnail.extension}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {titleLabel}: {title}<br/>
            {contentLabel}: {id} 
        </Typography>
      </CardContent>
      {/*<CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color: red[400]}}/>
        </IconButton>
      </CardActions>*/}
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));