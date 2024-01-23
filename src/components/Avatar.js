import { Flex, Image, Box } from "@chakra-ui/react"

const Avatar = () => {
	return (
	  <Flex minW="50%" justifyContent="center" my="20px">
		<Flex 
		  w="80%"
		  maxH="600px" 
		  maxW="600px" 
		  position="relative">
			<Image 
			  src="avatar.jpeg"
			  zIndex="1"
			/>
			<Box
			  position="absolute"
			  h="100%"
			  w="100%"
			  left="-2vh"
			  top="2vh"
			  bg="gray.600"
			/>
		</Flex>
	  </Flex>
	)
}

export default Avatar;