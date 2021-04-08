import React from 'react';

const List = ({ people }) => {


    return (
        <>
            {people.map(person => {
                return <article key={person.id} className="person">
                    <img src={person.image} alt={person.name}></img>
                    <div>
                        <h4>{person.name}</h4>
                        <h4>Age:{person.age} years</h4>
                    </div>
                </article>
            })
            }
        </>
    );
}

export default List;