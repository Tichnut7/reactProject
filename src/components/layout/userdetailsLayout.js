import react from 'react'

export default function UserDetails(props) {
    const { setName, name, setPassword, password } = props;
    return (
        <div className="page">
            <label>
                <span>Name:</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
                <span>Password:</span>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
        </div>
    );
}
