
import  {Wrapper,Row, Header, Image}  from './components/styled/index'
import image from "./image/images.png"

const App = () => {
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={image} alt="Zaytung"></Image>
        </Row>
        <h1>App</h1>
      </Wrapper>
        
    </div>
  )
}

export default App