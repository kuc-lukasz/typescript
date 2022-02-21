import { SurveyResultExtended } from "./definitions/SurveyResults";

interface PersonDisplay {
    person: SurveyResultExtended;
}
export const Survey = ({ person }: PersonDisplay) => {
    return (
        <div>
            <h2>
                Odpowiedź {person.user} to {person.result} ( {person.city} )
            </h2>
        </div>
    );
};
