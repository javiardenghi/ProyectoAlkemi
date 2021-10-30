import { Formik, Field, Form} from "formik";
import axios from "axios";
import Item from "./Item";
import {useState} from "react"
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";

function ChoosePj() {
    const [state, setState] = useState([])

    function call(values){
       axios({
           method:"GET",
           url: `/api/4413114758743949/search/${values.Name}`,
           
       }).then(res=>setState(res.data.results)) 
    }
    return (
        <div style={{textAlign: "center"}}>
        <h1>Buscar Super Heroe</h1>
        <Formik
          initialValues={{
            Name:"",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            call(values);
          }}
        >
          <Form style={{paddingBottom: 25}}>
            <Field id="firstName" name="Name" placeholder="Por ej: Batman , Venom" />
            <button type="submit">Search</button>
          </Form>
          </Formik>
          <Item result={state}/>
          <Link to="/my-team">  
          <Button style={{width:"100%"}}>
             My Team
          </Button>
        </Link> 
      </div>
    )
}

export default ChoosePj
