// This could be a component like `components/UserForm.tsx`
import axios from "axios";
import { useState } from "react";

const UserForm = ({ onSubmit }: { onSubmit: () => void }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Perform validation as necessary
        await axios.post("http://localhost:8000/users", { name, email }); // Adjust URL as necessary
        onSubmit(); // Call this to refresh the user list or navigate back
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
