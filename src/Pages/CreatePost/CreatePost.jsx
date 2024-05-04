import React, {useState, useEffect} from "react";
import useAdmin from "../../Hooks/useAdmin"
import AquiNoHayNada from "../../Components/AquiNoHayNada";

const CreatePost = () =>{
    const isAdmin = useAdmin()

    if (!isAdmin){
        return <AquiNoHayNada />
    }
    
    return (
        <div>
            
        </div>
    )

};
    

export default CreatePost