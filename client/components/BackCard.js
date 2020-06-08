import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
// styling for our button
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function BackCard(props) {
  // allows for styling button
  const classes = useStyles();
  // set state for flipping our cards
  const [isFlipped, setIsFlipped] = useState(false);
  // create handle click and map to our button on card component
  // const handleClick = () => setIsFlipped(!isFlipped);
  return (
    // set our flip status to be false, initially, flip dir is horizontal
    <div onClick={props.handleClick}>
      <div className="card">
        <div className="cardDetails">{props.details}</div>
        <div> Name: {props.OwnerName}</div>
        <div>Age: {props.OwnerAge}</div>
        <div>Location: {props.location}</div>
        <div>Hobbie: {props.hobbies}</div>
        {/* <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<DescriptionIcon />}
          onClick={props.handleClick}
        >
          back card
        </Button> */}
      </div>
      
    </div>
  );
}