import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buscador from "./Buscador";
import Cards from "./Cards";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [selector, setSelector] = useState("");

  const getData = async (url) => {
    const response = await fetch(url);
    const info = await response.json();
    return info;
  };

  const getCharacter = async () => {
    try {
      const { results: characters } = await getData(
        "https://rickandmortyapi.com/api/character"
      );

      characters.sort((a, b) => (a.name > b.name ? 1 : -1));
      setCharacters(characters);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handlerChange = (e) => {
    setSelector(e.target.value);
  };

  const sendCharacter = async (e) => {
    e.preventDefault();

    const { results: characters } = await getData(
      "https://rickandmortyapi.com/api/character"
    );

    if (selector === "") {
      setCharacters(characters);
      return;
    }

    const resultCharacter = characters.filter(
      (character) => character.name === selector
    );
    setCharacters(resultCharacter);
  };

  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <h1 className="p-4">Find your character</h1>
      <Container fluid>
        <Row>
          <Col className="m-4 p-4">
            <Buscador
              selector={selector}
              sendCharacter={sendCharacter}
              handlerChange={handlerChange}
              characters={characters}
            />
          </Col>
        </Row>
        <Row>
          <Cards characters={characters} />
        </Row>
      </Container>
    </Container>
  );
};

export default MiApi;
