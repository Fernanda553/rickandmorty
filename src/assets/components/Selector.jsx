import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Selector() {
  return (
    <>
      <Form.Select
        className="text-center mx-auto"
        aria-label="Default select example"
      >
        <option value="">Select your character</option>
        <option value="Rick Sanchez">Rick sanchez</option>
        <option value="Morty Smith">Morty Smith</option>
        <option value="Summer Smith">Summer Smith</option>
        <option value="Beth Smith">Beth Smith</option>
        <option value="Jerry Smith">Jerry Smith</option>
        <option value="Abadango Cluster Princess">
          Abadango Cluster Princess
        </option>
        <option value="Abradolf Lincler">Abradolf Lincler</option>
        <option value="Adjudicator Rick">Adjudicator Rick</option>
        <option value="Agency Director">Agency Director</option>
        <option value="Alan Rails">Alan Rails</option>
        <option value="Albert Einstein">Albert Einstein</option>
        <option value="Alexander">Alexander</option>
        <option value="Alien Googah">Alien Googah</option>
        <option value="Alien Morty">Alien Morty</option>
        <option value="Alien Rick">Alien Rick</option>
        <option value="Amish Cyborg">Amish Cyborg</option>
        <option value="Annie">Annie</option>
        <option value="Antenna Morty">Antenna Morty</option>
        <option value="Antenna Rick">Antenna Rick</option>
        <option value="Ants in my Eyes Johnson">Ants in my Eyes Johnson</option>
      </Form.Select>
      <Button variant="outline-info" className="m-4">
        Search
      </Button>
    </>
  );
}

export default Selector;
