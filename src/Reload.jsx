import React, { useEffect } from "react";
import {Button} from 'react-bootstrap';
const Reload = (prop)=>{
    return (<>
    <div className="container">
    <div  className="m-4 text-center">
    <Button  variant="outline-secondary" onClick={prop.rel}>More</Button>{' '}
    </div>
    </div>
    </>
    );
}
export default Reload;