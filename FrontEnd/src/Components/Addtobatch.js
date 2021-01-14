import axios from "axios";
import { useEffect, useState } from "react";
import "./Util.css";

function Addtobatch() {
    const [studentBatchList, setStudentBatchList] = useState(() => []);
    const [input, setInput] = useState(() => ({
        batch: "",
        student: "",
    }));
    useEffect(() => {
        axios
            .get("http://localhost:8000/studentbatch")
            .then(res => {
                setStudentBatchList(() => res.data);
            })
            .catch(err => console.log(err));
    });
    const handleBatch = value => {
        setInput(() => ({ ...input, batch: value }));
    };
    const handleStudent = value => {
        setInput(() => ({ ...input, student: value }));
    };
    const handleAdd = e => {
        e.preventDefault();
        console.log(input);
        if (isNaN(parseInt(input.batch)) || isNaN(parseInt(input.student))) {
            alert("Please enter a no.");
        } else {
            axios
                .post(`http://localhost:8000/join?batch=${input.batch}&student=${input.student}`)
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err));
            setInput(() => ({
                batch: "",
                student: "",
            }));
        }
    };
    return (
        <div>
            <h1>Add Student to Batch</h1>
            <form>
                <input
                    type="text"
                    placeholder="Batch"
                    value={input.batch}
                    onChange={e => handleBatch(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Student"
                    value={input.student}
                    onChange={e => handleStudent(e.target.value)}
                />
                <button onClick={e => handleAdd(e)}>Add</button>
            </form>
            <h1>Student Enrolled in a Batch</h1>
            {studentBatchList.map(student => {
                return (
                    <div className="table">
                        <span className="m p">{student.FirstName}</span>
                        <span className="m p">{student.LastName}</span>
                        <span className="m p">{student.BatchName}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Addtobatch;
