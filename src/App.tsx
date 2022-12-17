import { useState } from "react";
import {
  Wrapper,
  Row,
  Header,
  Image,
  Form,
  Search,
  Button,
} from "./components/styled/index";
import image from "./image/image.svg";

// {
// "category": "Programming",
// "type": "twopart",
// "setup": "So what's a set of predefined steps the government might take to preserve the environment?",
// "delivery": "An Al-Gore-ithm.",
// "flags": {
// "nsfw": false,
// "religious": false,
// "political": false,
// "racist": false,
// "sexist": false,
// "explicit": false
// },
// "id": 52,
// "safe": true,
// "lang": "en"
// }

type Joke = {
  id: number;
  safe: boolean;
  lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
  type: "single" | "twopart";
  category:
    | "Any"
    | "Misc"
    | "Programming"
    | "Dark"
    | "Pun"
    | "Spooky"
    | "Christmas";
};

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";
const App = () => {
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [jokes, setJokes] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const espri = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={image} alt="Zaytung"></Image>
        </Row>
        <Form onSubmit={espri}>
          <Search
            type="text"
            placeholder="Search.."
            value={search}
            onChange={handleChange}
          ></Search>
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </div>
  );
};

export default App;
