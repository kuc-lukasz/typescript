import { FC } from "react";
import "./App.css";
import { TextField } from "./TextComponents";

//można określić FC przy komponencie, tzn. że jest to funkcjonalny component
const App: FC = () => {
    return (
        <>
            <TextField
                text={"Siemandero!"}
                obj={{ firstname: "John", secondName: "Mckay" }}
                numb={5}
                ok={true}
            />
            {}
        </>
    );
};

export default App;
