import React from 'react';
import { useState } from "react";
import List from './List';
import data from './data';

const App = () => {
    const [people, setPeople] = useState(data)
    return (
        <main>
            <section className="container">
                {people.length} birthdays today
                <List people={people}></List>
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default App;