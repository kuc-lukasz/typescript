import React, { useState } from "react";
import "./App.css";
import { PersonalData } from "./PersonalData";

function App() {
    const [counter, setCounter] = useState<number>(28);
    const [data, setData] = useState("");
    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <div className="App">
                <h1>Hi!</h1>
                <div></div>
                <PersonalData
                    age={counter}
                    name="Łukasz"
                    surename="Kuc"
                    fun={handleClick}
                />
            </div>
        </>
    );
}

export default App;
