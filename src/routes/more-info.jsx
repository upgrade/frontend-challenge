import { Form, Link, useNavigate, useLoaderData } from "react-router-dom";


export default function MoreInfo() {  
  const navigate = useNavigate()  
  const colors = useLoaderData() // returns data from /api/colors
  
  return (
    <>
    <h1>Additional Info</h1>
     <Form method="post" id="contact-form">        
        <select name="colors" id="color-select">
            {colors.map(color => {
              return <option value={color}>{color}</option>
            })}
        </select>
        <div>
            <input type="checkbox" id="scales" name="scales" checked/>
             <label for="scales">I agree to <Link to={`/terms-conditions`}>Terms and Conditions</Link></label>
        </div>
        <input
            type="password"
            name="twitter"
            placeholder="Password"
        />
        <button type="button" onClick={() => {
          navigate(-1)
        }}>Back</button>
        <button>Next</button>
        </Form>
    </>
  );
}