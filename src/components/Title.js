import { Flex } from "@chakra-ui/react"
import Links from "./Links"
import Logo from "./Logo"

const Title = () => {
	const ScrollToPosition = (id) => {
		const target = document.getElementById(id);
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
			});
		}
	};	

	return (
		<Flex 
		  h="100px"
		  minW="100%"
		  justifyContent="space-between"
		  alignItems="center"
		  position="fixed"
		  px="5vw"
		  bg="blackAlpha.900"
		  zIndex="1000"
		  color="white">
		  <Logo fn={ScrollToPosition}/>
		  <Links fn={ScrollToPosition}/>
		</Flex>
	)
}

export default Title;