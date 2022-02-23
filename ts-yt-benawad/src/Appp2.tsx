import React, { useState, FC } from "react";
import "./App.css";

// Propsa definiuje na dwa sposoby, albo użwywam TYPE albo INTERFACE
type AppProps = {
    searchQuery?(): void;
};

//Interface jest obiektem
// interface AppProps {
//     // jeśli funkcja nic nie będzie zwracała to piszemy void
//     searchQuery?(): void;
// }

// Definiowanie jaki rodzaj ma mieć parametr który podajemy do funkcji. Może być to interface
// robimy to dodając React.FC< nasz interface > to jednocześnie określa jakim rodzajem komponentu będzie  App
const App: FC<AppProps> = ({ searchQuery = () => undefined }) => {
    // Definiujemy jaki rodzaj zmiennej ma być store in our useState, in this case it will be STRING
    const [textInfo, setTextInfo] = useState<string>("");

    // definioowanie w TS czym ma być event
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInfo(e.target.value);
        console.log(textInfo);
    };

    const handleClick = () => {
        searchQuery();
    };

    return (
        <>
            <label htmlFor="text">
                Searching
                <input onChange={onChangeInput} type="text" />
                <button onClick={handleClick}>Find it! </button>
            </label>
        </>
    );
};

export default App;
