
import './style.css';

function Student(props) {
    return (
        <div className="card">
            <div className="container">
                <h4>Student</h4>
                <h4>Id: {props.user.id}</h4>
                <h4>Name: {props.user.name}</h4>
                <h4>Major: {props.user.major}</h4>
            </div>
        </div>
    )

};

export default Student;