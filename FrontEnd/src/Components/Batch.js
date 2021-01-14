import axios from "axios";
import { useEffect, useState } from "react";
import "./Util.css";

function Batch() {
    const [batchList, setBatchList] = useState(() => []);
    useEffect(() => {
        axios
            .get("http://localhost:8000/batch")
            .then(res => {
                setBatchList(() => res.data);
            })
            .catch(err => console.log(err));
    });
    return (
        <div>
            <h1>List of Batch</h1>
            {batchList.map(batch => {
                return (
                    <div className="table">
                        <span className="m p">{batch.ID}</span>
                        <span className="m p">{batch.BatchName}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Batch;
