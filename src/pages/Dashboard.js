import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "records"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setRecords(data);
  };

  return (
    <div>
      <h1>My Health Records</h1>

      {records.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p><b>Name:</b> {item.fileName}</p>
          <p><b>Date:</b> {item.date}</p>

          <a href={item.fileURL} target="_blank" rel="noreferrer">
            <button>View</button>
          </a>
        </div>
      ))}
    </div>
  );
}