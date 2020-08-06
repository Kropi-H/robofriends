import React from 'react';
import Card from './Card';
// import {robots} from './robots'; // We don't need imports robot, because we imported them from indes.js file


const CardList = ({robots}) => {
    const cardArray = robots.map((user, i) => { // maping each objekt in array robots 
        return (
            <Card 
            key={robots[i].id}  // in React have to be key value
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            />
        ) 
    })
    return (
        <div>
            {cardArray};
        </div>
    );
}

export default CardList;