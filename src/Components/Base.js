import CustomNavbar from "./CustomNavbar";

const Base=(props)=>{
    return(
        <div className="container-fluid">
           <CustomNavbar/>

            {props.children}

            <h1>THis is header</h1>

        </div>

    )
};
export default Base;