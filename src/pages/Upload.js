import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    console.log("🔥 Button Clicked");

    if (!file) {
      alert("Select file");
      return;
    }

    try {
      alert("Upload start 🚀");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "health_upload");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dj5lofiyo/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Cloudinary Response:", data);

      alert("Cloudinary done ✅");

      await addDoc(collection(db, "records"), {
        fileName: file.name,
        fileURL: data.secure_url,
        date: new Date().toLocaleString(),
      });

      alert("Firestore done ✅");

      alert("Uploaded Successfully 🔥");

    } catch (error) {
      console.log("Error:", error);
      alert("Error aa gaya ❌");
    }
  };

  return (
    <div>
      <h1>Upload Report</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}