import axios from "axios";
import { useEffect, useState } from "react";
import "./Util.css";

function Student() {
    const [studentList, setStudentList] = useState(() => []);
    const [input, setInput] = useState(() => ({
        firstname: "",
        lastname: "",
    }));
    useEffect(() => {
        axios
            .get("http://localhost:8000/student")
            .then(res => {
                setStudentList(() => res.data);
            })
            .catch(err => console.log(err));
    });
    const addStudent = e => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/student", { ...input })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        setInput(() => ({
            firstname: "",
            lastname: "",
        }));
    };
    const hanldeFirstName = value => {
        setInput(() => ({ ...input, firstname: value }));
    };
    const hanldeLastName = value => {
        setInput(() => ({ ...input, lastname: value }));
    };
    return (
        <div>
            <h1>List of Students</h1>
            {studentList.map(student => {
                return (
                    <div className="table">
                        <span className="m p">{student.ID}</span>
                        <span className="m p">{student.FirstName}</span>
                        <span className="m p">{student.LastName}</span>
                    </div>
                );
            })}
            <h4>Add a new Student</h4>
            <form>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={input.firstname}
                    onChange={e => hanldeFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="First Name"
                    value={input.lastname}
                    onChange={e => hanldeLastName(e.target.value)}
                />
                <button onClick={e => addStudent(e)}>Add Student</button>
            </form>
        </div>
    );
}

export default Student;
