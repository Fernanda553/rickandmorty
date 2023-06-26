import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Buscador({ selector, sendCharacter, handlerChange }) {
  const options = [
    { value: "", label: "Find your Character" },
    { value: "Abadango Cluster Princess", label: "Abadango Cluster Princess" },
    { value: "Abradolf Lincler", label: "Abradolf Lincler" },
    { value: "Adjudicator Rick", label: "Adjudicator Rick" },
    { value: "Agency Director", label: "Agency Director" },
    { value: "Albert Einstein", label: "Albert Einstein" },
    { value: "Alexander", label: "Alexander" },
    { value: "Alien Googah", label: "Alien Googah" },
    { value: "Alien Morty", label: "Alien Morty" },
    { value: "Alien Rick", label: "Alien Rick" },
    { value: "Amish Cyborg", label: "Amish Cyborg" },
    { value: "Annie", label: "Annie" },
    { value: "Antenna Rick", label: "Antenna Rick" },
    { value: "Ants in my Eyes Johnson", label: "Ants in my Eyes Johnson" },
    { value: "Beth Smith", label: "Beth Smith" },
    { value: "Jerry Smith", label: "Jerry Smith" },
    { value: "Morty Smith", label: "Morty Smith" },
    { value: "Rick Sanchez", label: "Rick Sanchez" },
    { value: "Summer Smith", label: "Summer Smith" },
  ];

  return (
    <div>
      <Form.Select
        className="text-center p-2"
        value={selector}
        onChange={handlerChange}
        onSubmit={sendCharacter}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Form.Select>
      <Button type="submit" variant="outline-info" className="m-4">
        Search
      </Button>
    </div>
  );
}

export default Buscador;
