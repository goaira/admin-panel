import React from "react";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { useState } from "react";
import { adminModel } from "../models/admin";
import { useEffect } from "react";
import InputField from "../components/inputfield";

const Admin = () => {

    const [createAdmin, setCreateAdmin] = useState(false);
    const [editAdmin, seteditAdmin] = useState(false);
    const [editValue, seteditValue] = useState(0);
    const [namez, setName] = useState("");
    const [usernamez, setUsername] = useState("");
    const [passwordz, setPassword] = useState("");

    useEffect(() => {
        if (editAdmin) {
            adminModel.map((details, index) => {
                const { id, name, username, password } = details;
                if (editValue === id) {
                    setName(name);
                    setUsername(username);
                    setPassword(password);
                }
                return true;
            });
        } else {
            setName("");
            setUsername("");
            setPassword("");
        }
    }, [editAdmin, editValue])

    return (
        <div className="card">
            <div className="card-title">
                <span>Admin Details</span>
                <button className="createbtn" onClick={() => setCreateAdmin(true)} >Create</button>
            </div>
            <div className="card-body">
                <table className="datatable">
                    <thead>
                        <tr>
                            <th><span>No. <ImportExportIcon /></span></th>
                            <th><span>Name <ImportExportIcon /></span></th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminModel.map((details, index) => {
                            const { id, name, username, password } = details;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{password}</td>
                                    <td>
                                        <button className="viewbtn">View</button>
                                        <button className="editbtn" onClick={() => {
                                            seteditAdmin(true);
                                            seteditValue(id);
                                        }}>Edit</button>
                                        <button className="deletebtn">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="modal" style={{ display: createAdmin || editAdmin ? "block" : "none" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="modal-close" onClick={() => {
                            setCreateAdmin(false);
                            seteditAdmin(false);
                            seteditValue(0);
                        }}>&times;</span>
                        Create Admin User
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <InputField title="Name" type="text"
                                    nullable={false} value={namez}
                                    label="Name"
                                    onChange={(e) => {
                                        setName(e.currentTarget.value);
                                    }} />
                            </div>
                            <div className="col">
                                <InputField title="UserName" type="text"
                                    nullable={false} value={usernamez}
                                    label="Username"
                                    onChange={(e) => {
                                        setUsername(e.currentTarget.value);
                                    }} />
                            </div>
                            <div className="col">
                                <InputField title="Password" type="text"
                                    nullable={false} value={passwordz}
                                    label="Password"
                                    onChange={(e) => {
                                        setPassword(e.currentTarget.value);
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="submitbtn">Submit</button>
                        <button className="closebtn" onClick={() => {
                            setCreateAdmin(false);
                            seteditAdmin(false);
                            seteditValue(0);
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Admin;