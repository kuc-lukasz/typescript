interface ProfileProps {
    user: string;
    city: string;
    age: number;
    // parametr opcjonalny
    score?: number;
}

export const Profile = ({ user, city, age, score = 5 }: ProfileProps) => {
    return (
        <h3>
            Hi men! {user} from {city}. He is {age} years old! Jego wynik to
            {score}
        </h3>
    );
};
