import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../login_files/Signupform.css';

const Add_course = () => {
    const [id, idchange] = useState(1);
    const [category, categorychange] = useState("");
    const [cname, cnamechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [creator, creatorchange] = useState("");
    const [price, pricechange] = useState("");

    const role = "false";


    const navigate = useNavigate();





    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, category, cname, description, creator, price, role };
        idchange(id + 1);

        //console.log(regobj);
        fetch("http://localhost:8000/courses", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            alert('Course added successfully successfully.')
            navigate('/');
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        });

    }
    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <h2>New Course Addition</h2>

                        <div className="row">


                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Category</label>
                                    <select

                                        value={category} onChange={e => categorychange(e.target.value)} className="form-control"
                                    >

                                        <option value="python">PYTHON</option>
                                        <option value="web development">WEB_DEVELOPMENT</option>
                                        <option value="data science">DATA_SCIENCE</option>
                                        <option value="aws">AWS</option>
                                        <option value="design">DESIGN</option>
                                        <option value="marketing">MARKETING</option>
                                    </select>
                                </div>
                            </div>



                            <div className="col-lg-6">
                                <div className="form-group">

                                    <label>Course Name <span className="errmsg">*</span></label>
                                    <input value={cname} onChange={e => cnamechange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Description <span className="errmsg">*</span></label>
                                    <input value={description} onChange={e => descriptionchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Creator <span className="errmsg">*</span></label>
                                    <input value={creator} onChange={e => creatorchange(e.target.value)} className="form-control" placeholder="Your username is required"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Price <span className="errmsg"></span></label>
                                    <input value={price} onChange={e => pricechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>




                        </div>

                    </div>
                    <div className="form-group">
                        <button type="submit" >Add course</button>

                    </div>
                </div>
            </form >
        </div >
    );
};

export default Add_course;
