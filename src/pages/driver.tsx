import React, { lazy, useState, Suspense } from "react";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { driverModel } from "../models/driver";

const DriverCreate = lazy(() => import("../components/driver/create"));

const Driver = () => {

    const [createModel, setCreateModel] = useState(false);
    const [editAdmin, seteditAdmin] = useState(false);
    const [editId, seteditId] = useState(0);

    return (
        <div className="card">
            <div className="card-title">
                <span>Driver Details</span>
                <button className="createbtn" onClick={() => setCreateModel(true)} >Create</button>
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
                        {driverModel.map((details, index) => {
                            const { id, name, mobile, email } = details;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{mobile}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button className="viewbtn">View</button>
                                        <button className="editbtn" onClick={() => {
                                            seteditAdmin(true);
                                        }}>Edit</button>
                                        <button className="deletebtn">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="modal" style={{ display: createModel || editAdmin ? "block" : "none" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="modal-close" onClick={() => {
                            setCreateModel(false);
                            seteditAdmin(false);
                            seteditId(0);
                        }}>&times;</span>
                        Create Driver
                    </div>
                    <div className="modal-body">
                        <Suspense fallback="<div>Loading......</div>">
                            <DriverCreate createModel={createModel} />
                        </Suspense>
                    </div>
                    <div className="modal-footer">
                        <button className="submitbtn">Submit</button>
                        <button className="closebtn" onClick={() => {
                            setCreateModel(false);
                            seteditAdmin(false);
                            seteditId(0);
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Driver;