import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../model/connect';

const insertUser = async (req: Request, res: Response, next: NextFunction) => {

    let { id , name , username , password , status , created_at , updated_at, deleted_at } = req.body;

    let query = `INSERT INTO new_table ( id , name , username , password , status ) VALUES ( "${id}", "${name}","${username}", "${password}", "${status}" )`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((data) => {
                    return res.status(200).json({
                        "Message" : "Inserted Successfully"
                    });
                })
                .catch((error) => {
                    return res.status(200).json({
                        message: error.message,
                    });
                })
                .finally(() => { 
                    connection.end();
                });
        })
        .catch((error) => {
            return res.status(200).json({
                message: error.message,
            });
        });
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    let query = 'SELECT id, name, password, status, created_at FROM new_table';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                     return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
   let query = `SELECT * FROM new_table where id = ${req.params.id}`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                   connection.end();
                });
        })
        .catch((error) => {
             return res.status(200).json({
                message: error.message,
                error
            });
        });
};


const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
   let query = `Delete FROM new_table deleted_at = CURRENT_TIMESTAMP where id = ${req.params.id}`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                     return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                     connection.end();
                });
        })
        .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
     var keys: Array<string> = ['status', 'username', 'password', 'name'];

    if(keys.some(x => x === `${req.params.keys}`)){
        let query = `UPDATE new_table SET ${req.params.keys} = "${req.params.values}",updated_at = CURRENT_TIMESTAMP where id = ${req.params.id}`;

        Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                        
                    });
                })
                .catch((error) => {
                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });

    }else[
        res.json({"Message" : "incorrect keys are passed"})
    ]
    
};

export default { insertUser, getAllUsers, getUser, deleteUser, updateUser };
