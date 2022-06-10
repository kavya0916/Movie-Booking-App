import React from "react";
import "./Details.css";
import "../../common/header/Header";
import {
  Typography,
  ImageList,
  ImageListItemBar,
  ImageListItem,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Trailer from "./Trailer";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Header from "../../common/header/Header";

function starRating(e) {
  var clickedId = e.target.value.slice(1);
  for (var i = 1; i <= clickedId; i++) {
    document.getElementById("star".concat("", i)).style.color = "yellow";
  }
  for (var x = 5; x > clickedId; x--) {
    document.getElementById("star".concat("", x)).style.color = "black";
  }
}

function Details() {
  const location = useLocation();
  const data = location.state.movie;
  return (
    <div>
      <Header btnType="bookshow" variant="contained" buttonName="BOOK SHOW" />
      <div className="backBtn">
        <Link to="/">
          <Typography>{"<"} Back To Home</Typography>
        </Link>
      </div>
      <div className="flex-container">
        <div className="detailImage">
          <img className="poster" alt="poster" src={data.poster_url}></img>
        </div>
        <div className="trailer">
          <Typography component="div" variant="h4">
            <strong>{data.title}</strong>
          </Typography>
          <Typography>
            <strong>Genres: </strong>
            {data.genres.toString()}
          </Typography>
          <Typography>
            <strong>Duration: </strong>
            {data.duration}
          </Typography>
          <Typography>
            <strong>Release Date: </strong>
            {new Date(data.release_date).toDateString()}
          </Typography>
          <Typography>
            <strong>Rating: </strong>
            {data.critics_rating}
          </Typography>
          <div className="topMargin">
            <Typography>
              <strong>Plot: </strong>
              <a href={data.wiki_url}>(Wiki Link)</a>
              {" " + data.storyline}
            </Typography>
          </div>
          <div className="topMargin">
            <Typography>
              <strong>Trailer: </strong>
              <Trailer id={data.trailer_url.slice(32)}></Trailer>
            </Typography>
          </div>
        </div>
        <div className="rating">
          <Typography>
            <strong>Rate this movie: </strong>
            <br />
            <StarBorderIcon onClick={starRating} id="star1" />
            <StarBorderIcon onClick={starRating} id="star2" />
            <StarBorderIcon onClick={starRating} id="star3" />
            <StarBorderIcon onClick={starRating} id="star4" />
            <StarBorderIcon onClick={starRating} id="star5" />
          </Typography>
          <Typography className="topMargin">
            <strong>Artists: </strong>
            <ImageList cols={2}>
              {data.artists.map((artist) => (
                <ImageListItem key={artist.id}>
                  <img src={artist.profile_url}></img>
                  <ImageListItemBar
                    title={artist.first_name + " " + artist.last_name}
                  ></ImageListItemBar>
                </ImageListItem>
              ))}
            </ImageList>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Details;
