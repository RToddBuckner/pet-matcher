import React, { Component, useState, useContext, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../components/AppContext';
import axios from 'axios';
import BackCard from './BackCard';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ReactCardFlip from 'react-card-flip';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Deck() {
  const [state, setState] = useContext(AppContext);
  const [prospects, setProspects] = useState([]);
  const [owners, setOwners] = useState([])
  // const classes = useStyles();
  // // set state for flipping our cards
  // const [isFlipped, setIsFlipped] = useState(false);
  // create handle click and map to our button on card component
  // const handleClick = () => setIsFlipped(!isFlipped);

  // TODO: install axios globally if don't have it
  // TODO: need to get this user's userId from state, and then pass here + update axios url
  useEffect(() => {
    axios('/api/getProspects/1').then((prospects) => {
      console.log('Deck -> prospects.data', prospects);
      setProspects(prospects.data);
    });
  }, []);

  useEffect(() => {
    axios('/api/ownerInfo/1')
    .then((owners) => {
      console.log('Deck -> owner.data', owners);
      setOwners(owners.data);
    });
  }, []);



  const cards = [];
  prospects.map((user, i) => {
    cards.push(
      <Card
        id={`card${i}`}
        key={`card${i}`}
        className="card"
        petOwner={user.username}
        photo={user.user_id}
        details={user.name}
        location={user.location}
        ownerdata={owners[i]}
        
          
      />
    );
  });
  // const backcards = [];
  // prospects.map((user, i) => {
  //   backcards.push(
  //    <BackCard
  //       id={`backcard${i}`}
  //       key={`backcard${i}`}
  //       className="backcard"
  //       petOwner={user.username}
  //       photo={user.user_id}
  //       details={user.name}
  //       location={user.location}
        
  // /> 
  //   )
  
  // })
   
  return( <div className="deck">{cards}</div>
  //   <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
  //     <div className="deck">
  //       {cards}
  //       {/* <Button
  //         variant="contained"
  //         color="default"
  //         className={classes.button}
  //         startIcon={<DescriptionIcon />}
  //         onClick={handleClick}
  //       >
  //         More Info
  //        </Button>    */}
  //     </div>
  //     <div className="deck">
  //       {backcards}
  //       {/* <Button
  //         variant="contained"
  //         color="default"
  //         className={classes.button}
  //         startIcon={<DescriptionIcon />}
  //         onClick={handleClick}
  //       >
  //         More Info
  //        </Button> */}
  //     </div>
  //  {/* <div className="deck">{cards} <Button
  //         variant="contained"
  //         color="default"
  //         className={classes.button}
  //         startIcon={<DescriptionIcon />}
  //         onClick={handleClick}
  //       >
  //         More Info
  //        </Button></div>
  //  <div className="backcards">{backcards}</div> */}
  //   </ReactCardFlip>
  ); 

  // TODO: fix sql query to include both owner and pet names
  // return ( <div className="deck" onClick={handleClick}>
  //            {prospects.map((user, i )=> (
  //               <div key={user.username} className="card">
  //                 <img src={`/client/img/pic${i}.jpg`} className="cardPetPic" />
  //                 <div className="cardDetails">{user.name}</div>
  //               </div>
  //            ))}
  //         </div>
  // );
}

// username, age, desc, photo

// if (!cards) return (
//   <div>
//     <h1>Loading data, please wait...</h1>
//   </div>
// );

// if (!cards.length) return (
//   <div>No prospects found...take your pet out for a walk and smile at strangers. You never know!!!</div>
// );

// if (!Array.isArray(prospects)) notes = [];
