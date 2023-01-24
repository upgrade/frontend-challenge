import { Form, useNavigate, useNavigation } from "react-router-dom";

export default function EditContact() {
  const {state} = useNavigation() // will be 'loading' while colors are fetched for next page
  const navigate = useNavigate()

  return (
    <>
      {state === 'loading' && (
        <div></div>
      )}  
      {state === 'idle' && (  
        <>
          <h1>Sign Up</h1>
          <Form method="post" id="contact-form">
          <p>
              <span>Name</span>
              <input
              placeholder="First Name"
              aria-label="First name"
              type="text"
              name="first"
              //   defaultValue={contact.first}
              />
              <input
              placeholder="Last Name"
              aria-label="Last name"
              type="text"
              name="last"
              //   defaultValue={contact.last}
              />
          </p>
          <label>
              <span>Password</span>
              <input
              type="text"
              name="twitter"
              placeholder="Password"
              //   defaultValue={contact.twitter}
              />
          </label>
          <button type="button" onClick={() => {
            navigate('/more-info')
          }}>Next</button>
          </Form>
        </>
      )}
    </>
  )
}