import { Flex, Image, Box } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

const Avatar = () => {
	const [ ref, inView ] = useInView({
		triggerOnce: true,
	});
	return (
	  <Flex
	   minW="50%" 
	   justifyContent="center" 
	   ref={ref} 
	   style={{ opacity: inView ? 1 : 0, transition: 'opacity 2s' }}
	  >
		<Flex 
		 w="80%"
		 maxH="600px" 
		 maxW="600px" 
		 position="relative"
		>
			<Image 
			 src="avatar.jpeg"
			 zIndex="1"
			/>
			<Box
			 position="absolute"
			 h="100%"
			 w="100%"
			 left="-4%"
			 top="4%"
			 bg="gray.600"
			/>
		</Flex>
	  </Flex>
	)
}

export default Avatar;