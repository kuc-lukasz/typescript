import React, { FC } from "react";

interface Props {
    name: string;
    surename: string;
    ok?: boolean;
    age: number;
    tas?: object;
    fun: () => void;
}

export const PersonalData: FC<Props> = ({
    name,
    surename,
    age,
    fun,
}: Props) => {
    return (
        <>
            <div>{name}</div>
            <div>{surename}</div>
            <div>{age}</div>
            <button onClick={fun}>Add</button>
        </>
    );
};
