import { Flex } from "@chakra-ui/react"
import InfoBlock from "../components/InfoBlock"
import infos from "../data/infos"

const Experience = () => {
	return (
		<Flex 
		  flexDir="column" 
		  alignItems="start"
		  justifyContent="center"  
		  w="100%"
		  gap="50px"
		  pt="150px"
		  pb="100px"
		>
		  {
		  	infos.map((item, index) => <InfoBlock infos={item} />)
		  }
		</Flex>
	)
}

export default Experience;