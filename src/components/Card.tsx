import React from 'react';
import { IMarvelImage } from '../types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import StyleConstants from '../constants/styleConstants'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


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

export default function RecipeReviewCard({thumbnail,
  title, 
  titleLabel, 
  id, 
  contentLabel, 
  navigationPath,
  fullWidth = false, 
  borderRadious = true
}: IProps) {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${!fullWidth ? classes.noFull : ""} ${!borderRadious ? classes.noBorderRadious : ""}`}>
      <FavoriteIcon className={classes.favoriteIcon} style={{color: "#c1c1c1" /* isFav ?  StyleConstants.marvelRed : "#c1c1c1"*/}}/>
      <Link to={navigationPath} className={classes.link}>
        <CardMedia
          className={classes.cardMedia}
          image={`${thumbnail.path}.${thumbnail.extension}`}
        />
        <CardContent className={classes.cardContent}>
          <Typography component="p" className={classes.typography}>
              {titleLabel}: {title}<br/>
              {contentLabel}: {id} 
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
 
const useStyles = makeStyles(theme => ({
  link:{
    textDecoration: "none"
  },
  card: {
    backgroundColor: StyleConstants.marvelRed,
    margin: "auto",
    position: "relative"
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "5%",
    marginRight: "5%"
  },
  typography: {
    color: StyleConstants.lightFontColor,
    fontWeight: "bold"
  },
  favoriteIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 999,
    backgroundColor: StyleConstants.whiteBackGround,
    borderRadius: "50%",
    padding: 7
  },
  noFull: {
    maxWidth: 700
  },
  noBorderRadious: {
    borderRadius: 0
  }
}));