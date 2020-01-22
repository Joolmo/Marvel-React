import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';
import { IMarvelImage } from '../types';
import { Link } from 'react-router-dom';


interface IProps {
    thumbnail: IMarvelImage
    title: string
    id: number
    contentLabel: string
    titleLabel: string
    navigationPath: string
    fullWidth?: boolean
    borderRadious?: boolean
}

export default function RecipeReviewCard({thumbnail, title, titleLabel, id, contentLabel, navigationPath, fullWidth = false, borderRadious = false}: IProps) {
  const classes = useStyles();

  return (
    <Link to={navigationPath} style={{textDecoration: "none"}}>
      <Card className={fullWidth ? classes.fullCard : classes.card} style={borderRadious ? {borderRadius: 0} : undefined}>
        <CardMedia
          className={classes.media}
          image={`${thumbnail.path}.${thumbnail.extension}`}
        />
        <CardContent className={classes.content}>
          <Typography component="p" className={classes.typography}>
              {titleLabel}: {title}<br/>
              {contentLabel}: {id} 
          </Typography>
          <FavoriteIcon style={{color: "c1c1c1", backgroundColor: "white", borderRadius: "50%", padding: 7}}/>
        </CardContent>
      </Card>
    </Link>
  );
}

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 700,
      backgroundColor: "#e3031c",
    },
    fullCard: {backgroundColor: "#e3031c"},
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginLeft: "5%",
      marginRight: "5%",
    },
    typography: {
      color: "white",
      fontWeight: "bold"
    }
  }));