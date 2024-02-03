import { Text, Heading, Flex, Divider, VStack, useMediaQuery, StackDivider } from "@chakra-ui/react"
import InfoCard from "./InfoCard"

const InfoBlock = ({infos}) => {
	const [ isMobile ] = useMediaQuery("(max-width: 768px)");
	return (
		<Flex flexDir={isMobile ? "column" : "row"} w="100%" px="10%" gap={5}>
		  <VStack minW="20%">
		    <Heading fontSize="3xl">{infos.class}</Heading>
		  </VStack>
		  <VStack alignItems="start" minW="80%">
		  {
		  	infos.content.map((item, index) => <InfoCard item={item}/>)
		  }
		  </VStack>
		</Flex>
	)
}

export default InfoBlock;