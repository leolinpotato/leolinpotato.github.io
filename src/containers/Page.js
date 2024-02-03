import { Flex, useMediaQuery } from "@chakra-ui/react"

const Page = ({content, id, bg}) => {
	const [ isMobile ] = useMediaQuery("(max-width: 768px)");
	return (
		<Flex 
		 flexDir={isMobile ? "column" : "row"} 
		 alignItems="center"
		 justifyContent="center"  
		 w="100%"
		 minH="100vh"
		 pt="100px"
		 id={id}
		>
		  <Flex bg={bg}>
		    {content}
		  </Flex>
		</Flex>
	)
}

export default Page;