import React, { useState, useEffect } from "react";
import InputField from "../../components/inputfield";
import { DriverType } from "../../models/driver";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { Gender, MaritalStatus } from "../../models/helper";


type drivercreate = {
    createModel: boolean
}

const selectStyle = {
    control: () => ({
        border: "2px solid #000",
        display: "flex",
        borderRadius: "5px",
        padding: ".5rem",
        margin: "10px",
    }),
    placeholder: () => ({
        color: "#000"
    })
}

const driverDetails: DriverType = {
    id: 0,
    mobile: 0,
    email: "",
    aadhar: 0,
    name: "",
    father_name: "",
    dob: "",
    gender: "",
    marital_status: "",
    blood_group: "",
    qualification: "",
    experience: "",
    previous_work: "",
    c_address: "",
    c_pincode: 0,
    c_state: "",
    c_country: "",
    p_address: "",
    p_pincode: 0,
    p_state: "",
    p_country: "",
    languages: "",
    e_number: 0,
    e_name: "",
    e_relation: ""
}

const DriverCreate = ({ createModel }: drivercreate) => {
    const [error, setError] = useState(false);
    const [driverData, setDriverData] = useState(driverDetails);
    const [dob, setDob] = useState(new Date());
    const [dobcal, setDobcal] = useState(false);

    useEffect(() => {
        createModel ? setError(true) : setError(false);
    }, [createModel]);

    useEffect(() => {
        if (dob.toString() !== new Date().toString()) {
            console.log(123);
            setDriverData(prevState => {
                return { ...prevState, dob: dob.toLocaleDateString() || '' }
            });
        }
        setDobcal(false);
    }, [dob]);

    return (
        <div className="row">
            <div className="col">
                <InputField title="Name" type="text"
                    nullable={false} value={driverData.name}
                    label="Name"
                    onChange={e => {
                        const val = e.currentTarget.value;
                        setDriverData(prevState => {
                            return { ...prevState, name: val }
                        });
                    }}
                    error={error} />
            </div>
            <div className="col">
                <InputField title="Mobile" type="text"
                    nullable={false} value={driverData.mobile || ''}
                    label="Mobile"
                    min={10}
                    max={10}
                    onChange={e => {
                        const val = e.currentTarget.value;
                        setDriverData(prevState => {
                            return { ...prevState, mobile: parseInt(val) }
                        });
                    }}
                    error={error} />
            </div>
            <div className="col">
                <InputField title="Email" type="email"
                    nullable={false} value={driverData.email}
                    label="Email"
                    onChange={e => {
                        const val = e.currentTarget.value;
                        setDriverData(prevState => {
                            return { ...prevState, email: val }
                        });
                    }}
                    error={error} />
            </div>
            <div className="col">
                <InputField title="Aadhar" type="text"
                    nullable={false} value={driverData.aadhar || ''}
                    label="Aadhar"
                    min={12}
                    max={12}
                    onChange={e => {
                        const val = e.currentTarget.value;
                        setDriverData(prevState => {
                            return { ...prevState, aadhar: parseInt(val) }
                        });
                    }}
                    error={error} />
            </div>
            <div className="col">
                <InputField title="Father Name" type="text"
                    nullable={false} value={driverData.father_name}
                    label="Father Name"
                    onChange={e => {
                        const val = e.currentTarget.value;
                        setDriverData(prevState => {
                            return { ...prevState, father_name: val }
                        });
                    }}
                    error={error} />
            </div>
            <div className="col">
                <InputField title="DOB" type="text"
                    nullable={false} value={driverData.dob}
                    label="DOB"
                    onFocus={e => setDobcal(true)}
                    onChange={e => { }}
                    error={error} />
                <div style={{ display: dobcal ? "block" : "none" }}>
                    <Calendar value={dob} onChange={setDob} defaultValue={undefined} />
                </div>
            </div>
            <div className="col">
                <Select options={Gender} styles={selectStyle} placeholder={<div>Gender</div>} defaultValue={0} />
            </div>
            <div className="col">
                <Select options={MaritalStatus} styles={selectStyle} placeholder={<div>Marital Status</div>} defaultValue={0} />
            </div>
            <div className="col">
                <InputField title="Father Name" type="text"
                    nullable={false} value={driverData.father_name}
                    label="Father Name"
                    onChange={e => {
                        const val = e.currentTarget.value;
                        setDriverData(prevState => {
                            return { ...prevState, father_name: val }
                        });
                    }}
                    error={error} />
            </div>
            <div className="col">
                <InputField title="Father Name" type="text"
                    nullable={false} value={driverData.father_name}
                    label="Father Name"
                    onChange={e => {
                        const val = e.currentTarget.value;
                        setDriverData(prevState => {
                            return { ...prevState, father_name: val }
                        });
                    }}
                    error={error} />
            </div>
        </div>
    )
}

export default DriverCreate;