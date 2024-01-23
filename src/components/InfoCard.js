import { Text, Flex, VStack, List, ListItem, UnorderedList, Tag, HStack, useMediaQuery } from "@chakra-ui/react"

const InfoCard = ({item}) => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");
	return (
	  <Flex 
	    minW="100%" 
	    _hover={{background: "gray.50", outline: "solid", outlineColor: "gray.300"}} 
	    transition="all 0.2s" 
	    flexDir={isMobile ? "column" : "row"}
	    pb={3}
	    borderRadius="2%">
	    <VStack minW="20%" px={2} mt={2}>
	      <Text>{item.duration}</Text>
	    </VStack>
	    <VStack minW="80%" px={5} alignItems="start" mt={1.5}>
	      <Text as="b" fontSize="lg">{item.title}</Text>
	      <Text lineHeight="1rem" mb="0.5rem">{item.subtitle}</Text>
          <UnorderedList>
          {
          	item.description.map((d, index) => {
          		return (
          	      <ListItem key={d}>
          		    <Text>{d}</Text>
          		  </ListItem>
          		)
          	})
          }
          </UnorderedList>
          <HStack flexWrap="wrap">
          {
          	item.tag.map((t, index) => <Tag colorScheme="teal" variant="solid">{t}</Tag>)
          }
          </HStack>
	    </VStack>
	  </Flex>  
	)
}

export default InfoCard;