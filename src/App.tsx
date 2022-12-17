import axios from "axios";
import { useState } from "react";
import JokeItem from "./components/JokeItem";
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
import {Flag,Joke,Category} from "./common/types"


const BASE_URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit";
const App = () => {
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const espri =async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
const sonuc=`${BASE_URL}&contains=${search}&amount=10`
const {data}= await axios.get(sonuc)
console.log(data);

if(data.error){
  setError(true)
  setJokes([])
}else{
  setError(false)
  setJokes(data.jokes)
}
setSearch("")
  };

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
        <div>
          {error && <p>Yok böyle birşey...</p>}
          {/* @ts-ignore */}
          {jokes.length>0 && jokes.map(joke=><JokeItem key={joke.id} joke={joke}/>)}
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
