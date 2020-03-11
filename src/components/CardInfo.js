import React from 'react';
import Card from '../containers/Card';

const CardInfo = ({people}) => {
    return(
        <div> {
            people.map((user, i) => {
                return (
                    <Card 
                    key={people[i].name}  
                    name={people[i].name} 
                    hair_color={people[i].hair_color}
                    birth_year={people[i].birth_year}
                    />
                );
            }) 
        }</div>
    ) 
}

export default CardInfo;