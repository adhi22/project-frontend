import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { helper } from "./utils/utils";

function App() {
    const [file, setFile] = useState();
    const [img, setImg] = useState();
    const [desc, setDesc] = useState("");
    const [loading, setLoading] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading("loading....");
        console.log(file.name);
        setImg(URL.createObjectURL(file));

        // setFile(null);
    };

    const identify = (e) => {
        e.preventDefault();
        const data = helper(file.name);
        setTimeout(() => {
            setDesc(`${data.val} rs with ${data.prob} % probablity`);
        }, 500);
    };

    return (
        <div className='App'>
            <Navbar />
            <div className='container'>
                <form
                    className='card p-5 my-5'
                    onSubmit={handleSubmit}
                    style={{ maxWidth: "40rem", margin: "auto" }}
                >
                    <div className=''>
                        <label for='formFileLg' className='form-label'>
                            Upload the image of the Currency
                        </label>
                        <input
                            className='form-control form-control-lg'
                            id='formFileLg'
                            type='file'
                            files={file}
                            onChange={
                                (e) => setFile(e.target.files[0])
                                // setFile(URL.createObjectURL(e.target.files[0]))
                            }
                        />
                        <button className='btn btn-primary mt-4'>Upload</button>
                    </div>
                </form>

                {!img ? (
                    ""
                ) : (
                    <div className='row d-flex flex-row justify-content-center align-items-center pb-5'>
                        <img src={img} alt='image' className='col' />
                        <form onSubmit={identify} className='col m-4 p-4'>
                            <p>{desc}</p>
                            <button className='btn btn-primary mt-4'>
                                Identify
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
