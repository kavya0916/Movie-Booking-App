import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarImageList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={350} cols={4} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}>
    
        </ImageListItem>
        {props.moviesData.map((item) => (
          <ImageListItem className="homePageImage" key={item.img}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Date: {Date(item.release_date)}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }/>
          </ImageListItem>
        ))}
      </ImageList>
   </div>
  );
}