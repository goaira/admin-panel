import React, { ChangeEventHandler, useState } from "react";

type InputBoxProps = {
    title: string,
    icon?: string,
    min?: number,
    max?: number,
    type?: 'text' | 'email' | 'number',
    nullable?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string,
    label?: string
}

const InputField = ({ type, min, max, nullable, title, value, onChange, label }: InputBoxProps) => {
    const [error, setError] = useState('');

    const changeText = (val: string) => {
        if (val.length === 0) {
            if (!nullable) {
                return setError(`${title} cannot be null`);
            }
        }
        if (min || max) {
            if (min === max) {
                if (val.length !== min) {
                    return setError(`${title} must be ${min} digits`);
                }
            } else {
                if (min) {
                    if (val.length <= min) {
                        return setError(`${title} must be more than ${min} characters`);
                    }
                }
                if (max) {
                    if (val.length >= max) {
                        return setError(`${title} must be less than ${max} characters`);
                    }
                }
            }
        }

        if (type === "email") {
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {
                return setError(`${title} must be a valid Email Address`);
            }
        }
        return setError("");
    }

    return (
        <>
            <div className="form-group">
                <input
                    value={value}
                    placeholder=" "
                    onBlur={e => changeText(e.target.value)}
                    onChange={onChange}
                    style={{ border: error ? "2px solid red" : "2px solid #333" }}
                />
                <label htmlFor="" style={{ color: error ? "red" : "#000" }}>{label}</label>
            </div>
            <span className="error">{error}</span>
        </>
    )
}

export default InputField;