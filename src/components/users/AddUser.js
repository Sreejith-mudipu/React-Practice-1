import React from 'react';


const AddUser = () =>{
    return(
        
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Add User</h1>
                    <div>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Username"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Email Address"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Phone Number"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Website Name"
                                />
                            </div>
                            <button className="btn btn-primary btn-block">Add User</button>
                        </form>
                    </div>
                    
                </div>
            </div>
    )
}


export default AddUser;