import React from "react";
import SingleQuestion from "./SingleQuestion";
import questions from "./data"

const App = () => {

    return (
        <main>
            <div className="container">
                <h2>Questions and Answers about Login</h2>
                <section className="info">
                    {questions.map(question => {
                        return <SingleQuestion key={question.id} question={question} />
                    })

                    }
                </section>
            </div>
        </main>
    )
}

export default App;