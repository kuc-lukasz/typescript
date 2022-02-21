import { SurveyResultExtended } from "./definitions/SurveyResults";
import { Survey } from "./Syrvey";
import { useState, useEffect } from "react";

type SurveyResultsExtended = SurveyResultExtended[];

const fetchSurveyResults = (): SurveyResultsExtended => {
    // Symulacja pobierania wyników ankiety z API
    return [
        {
            user: "Jan Kowalski",
            result: 2,
            city: "Lublin",
        },
        {
            user: "Marian Kowalski",
            result: 5,
            city: "Lublin",
        },
        {
            user: "Karol Malinowski",
            result: 3,
            city: "Warszawa",
        },
        {
            user: "Maria Malinowska",
            result: 4,
            city: "Warszawa",
        },
        {
            user: "Darek Kowal",
            result: 1,
        },
        {
            user: "Mariusz Kowal",
            result: 6,
            city: "Gdańsk",
        },
        {
            user: "Aneta Kowal",
            result: 6,
        },
        {
            user: "Maria Ryś",
            result: 4,
        },
        {
            user: "Maria Kowalska",
            result: 3,
            city: "Szczecin",
        },
        {
            user: "Marcin Bobik",
            result: 5,
        },
    ];
};

const App = () => {
    const [result, setResult] = useState<SurveyResultExtended[]>([]);
    // Your code

    useEffect(() => loadSurvey(), []);

    const loadSurvey = () => {
        const surveys = fetchSurveyResults();
        setResult(surveys);
    };

    return (
        <>
            <h1>Wyniki ankiety</h1>
            {result.map((person, key) => {
                return (
                    <div key={key}>
                        <Survey person={person} />
                    </div>
                );
            })}
            <br />

            {/* Your code */}
        </>
    );
};

export default App;
