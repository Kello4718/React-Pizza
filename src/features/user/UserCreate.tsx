import { FormEvent, useState } from "react";
import Button from "../../ui/Button";

const UserCreate = () => {
    const [username, setUsername] = useState("");

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) =>
        evt.preventDefault();

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                className="input mb-8 w-72"
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== "" && (
                <div>
                    <Button type="primary">Start ordering</Button>
                </div>
            )}
        </form>
    );
};

export default UserCreate;
