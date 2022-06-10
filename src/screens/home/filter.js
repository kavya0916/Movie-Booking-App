import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import GenreSelect from "./genreSelect";
import ArtistSelect from "./artistSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
  },
  child: {
    minWidth: 240,
    maxWidth: 240,
    margin: theme.spacing.unit,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
  },
  pos: {
    marginBottom: 12,
  },
}));

export let userSelection = {
  name: "",
  releaseDateStart: "",
  releaseDateEnd: "",
  artists: [],
  genres: [],
};

export default function MovieFilter(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>

        <FormControl className={classes.child}>
          <InputLabel htmlFor="my-input">Movie Name</InputLabel>
          <Input
            onChange={(e) => {
              userSelection.name = e.target.value;
            }}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControl className={classes.child}>
          <GenreSelect genres={props.genres} />
        </FormControl>

        <FormControl className={classes.child}>
          <ArtistSelect artists={props.artists} />
        </FormControl>

        <FormControl className={classes.child}>
          <TextField
            id="dateStart"
            label="Release Date Start"
            type="date"
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              userSelection.releaseDateStart = e.target.value;
            }}
          />
        </FormControl>

        <FormControl className={classes.child}>
          <TextField
            id="dateEnd"
            label="Release Date End"
            type="date"
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              userSelection.releaseDateEnd = e.target.value;
            }}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button
          className={classes.child}
          variant="contained"
          color="primary"
          onClick={props.filterHandler}
        >
          APPLY
        </Button>
      </CardActions>
    </Card>
  );
}
