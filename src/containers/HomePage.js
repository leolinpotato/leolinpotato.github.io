import { Flex, useMediaQuery } from "@chakra-ui/react"
import Avatar from "../components/Avatar"
import About from "../components/About"

const HomePage = () => {
	const [ isMobile ] = useMediaQuery("(max-width: 768px)");
	return (
		<Flex 
		 flexDir={isMobile ? "column" : "row"} 
		 alignItems="center"
		 justifyContent="center"
		 gap="50px"  
		>
		  <Avatar />
		  <About />
		</Flex>
	)
}

export default HomePage;