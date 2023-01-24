export default function Confirmation() {
  const contact = {
    first: "Your",
    last: "Name",
    email: "https://placekitten.com/g/200/200",
    color: "your_handle",
    agreed: false,
  };

  return (
    <div id="confirmation">
        <h1>Confirmation</h1>
        <ul>
            <li>first item</li>
            <li>second item</li>
            <li>third item</li>
        </ul>
        <button>Back</button>
        <button>Submit</button>
    </div>
  );
}
