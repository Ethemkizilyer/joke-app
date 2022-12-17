import React from "react";
import {
  CardWrapper,
  CardTop,
  CardBottom,
  Setup,
  Delivery,
} from "./styled/index";
import { FlagKeys, Joke, Category } from "../common/types";

interface JokeItemProps {
  joke: Joke;
}

const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {
  const flags = Object.keys(joke.flags)
    .filter((key) => joke.flags[key as FlagKeys])
    .join(" , ");
  return (
    <CardWrapper>
      <CardTop>
        {joke.type === "single" ? (
          <p>{joke.joke}</p>
        ) : (
          <div style={{display:"flex",gap:"1rem",justifyContent:"space-between",width:"100%"}}>
            <Setup>{joke.setup}</Setup>
            <Delivery>{joke.delivery}</Delivery>
          </div>
        )}
      </CardTop>
      <CardBottom>
        <p>{joke.category}</p>
        <div>{flags}</div>
      </CardBottom>
    </CardWrapper>
  );
};

export default JokeItem;
