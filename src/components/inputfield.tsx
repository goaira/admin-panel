import React, { ChangeEventHandler, useState, useEffect } from "react";

type InputBoxProps = {
    title: string,
    icon?: string,
    min?: number,
    max?: number,
    type?: 'text' | 'email' | 'number',
    nullable?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>
    onFocus?: ChangeEventHandler<HTMLInputElement>
    onBlur?: ChangeEventHandler<HTMLInputElement>
    value?: string | number,
    label?: string,
    error?: boolean
}

const InputField = ({ type, min, max, nullable, title, value, onChange, label, error, onFocus, onBlur }: InputBoxProps) => {
    const [errorz, setError] = useState('');

    useEffect(() => {
        error ? setError("") : setError("");
    }, [error])

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
            const emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!val.match(emailVal)) {
                return setError(`${title} must be a valid Email Address`);
            }
        }
        return setError("");
    }

    return (
        <>
            <div className="form-group">
                <input
                    type={type}
                    value={value}
                    placeholder=" "
                    onChange={onChange}
                    style={{ border: errorz ? "2px solid red" : "2px solid #333" }}
                    onFocus={onFocus}
                    onBlur={e => changeText(e.currentTarget.value)}
                />
                <label htmlFor="" style={{ color: errorz ? "red" : "#000" }}>{label}</label>
            </div>
            <span className="error">{errorz}</span>
        </>
    )
}

export default InputField;