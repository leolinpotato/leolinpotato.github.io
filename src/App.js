import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Flex, Container } from "@chakra-ui/react"
import Title from "./components/Title"
import HomePage from "./containers/HomePage"
import Experience from "./containers/Experience"
import Habit from "./containers/Habit"
import Footer from "./components/Footer"
import Page from "./containers/Page"


function App() {
  const pages = [[<HomePage />, "HomePage"], [<Experience />, "Experience"], [<Habit />, "Habit"]]

  return (
    <Router>
      <Title />
      <Container maxW="container.xl" minH="100%" p="0px">
        {
          pages.map((item, index) => {
            return (
              <Page content={item[0]} bg={index % 2 ? "blackAlpha.100" : "white"} id={item[1]} />
            )
          })
        }
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
