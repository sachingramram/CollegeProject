import React from "react";
const NewLocation =()=>{
    return ( 
        <form className="location-form">
            <div className ="form-control">
                <label>
                    Title 
                    <input name ="newlocationtitle" type="text" required />
                </label>
            </div>
            <div className ="form-control">
                <label>
                    Description
                    <textarea name ="newlocationdesc" type="text" required />
                </label>
                <div className ="form-control">
                <label>
                    Address
                    <input name ="newlocationaddr" type="text" required />
                </label>
            </div>
            </div>

        </form>
          
    )
};

export default NewLocation;