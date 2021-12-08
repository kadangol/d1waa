import Student from "./Student";
import React, { useState } from 'react';

let students = [{
    id: 1,
    name: 'john',
    major: 'CS'
},
{
    id: 2,
    name: 'doe',
    major: 'CS'
},
{
    id: 3,
    name: 'JAJA',
    major: 'CS'
}]

function Dashboard() {

    const [users, setUsers] = useState(students);
    const [firstStudentName, setFirstStudentName] = useState('')

    function changeName() {
        let copy = [...users];

        // get the specific item
        let user = { ...copy[0] }

        // update the value
        user.name = firstStudentName;

        // put this back to the array
        copy[0] = user;

        setUsers(copy)

    }
    
    const nameChangedEvent = (event) => {
        setFirstStudentName(event.target.value)

    }

    return (
        <div>
            <div className="student-container">{
                users.map(u => <Student user={u} />)
            }</div>

            <div className="input-container">
                <input type="text" onChange={nameChangedEvent} />
                <br />
                <button onClick={changeName}>Change Name</button>
            </div>
        </div>
    );
}

export default Dashboard;