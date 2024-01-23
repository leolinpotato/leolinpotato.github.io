import { Flex, Text, Image, Heading, VStack, List, ListItem, UnorderedList, useMediaQuery } from "@chakra-ui/react"
import HabitImg from "./HabitImg"

const HabitCard = ({habit, index}) => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");
	const Mobile = 
		<Flex 
		  flexDir="column" 
		  alignItems="center"
		  justifyContent="center"  
		  w="100%"
		  my="2vh"
		  gap={5}
		  >
		  <Heading>{habit.title}</Heading>
	      <HabitImg images={habit.image} w="100" />
	  	  <VStack>
	  	  	{
	  	  	  habit.description.map((d, index) => {
	  	  	  	if (Array.isArray(d)) {
	  	  	  	  return (
	  	  	  	    <UnorderedList>
  		  	  	  	{ 
  		  	  	  	  d.map((el, index) => <ListItem key={el}>{el}</ListItem>)
  		  	  	  	}
		  	  	  	    </UnorderedList>
	  	  	      )
	  	  	  	} else {
		  	  	  return (
		  	  	    <Text>{d}</Text>
		  	  	  )
		  	  	}
	  	  	  })
	  	  	}
	  	  </VStack>
		</Flex>

	const Desktop = 
		<Flex 
		  flexDir="row" 
		  alignItems="center"
		  justifyContent="center"  
		  w="100%"
		  my="2vh"
		  >
	      { index % 2 === 1 && <HabitImg images={habit.image} w={habit.w} /> }
	  	  <VStack>
	  	  	<Heading>{habit.title}</Heading>
	  	  	{
	  	  	  habit.description.map((d, index) => {
	  	  	  	if (Array.isArray(d)) {
	  	  	  	  return (
	  	  	  	    <UnorderedList>
  		  	  	  	{ 
  		  	  	  	  d.map((el, index) => <ListItem key={el}>{el}</ListItem>)
  		  	  	  	}
		  	  	  	    </UnorderedList>
	  	  	      )
	  	  	  	} else {
		  	  	  return (
		  	  	    <Text>{d}</Text>
		  	  	  )
		  	  	}
	  	  	  })
	  	  	}
	  	  </VStack>
	  	  { index % 2 === 0 && <HabitImg images={habit.image} w={habit.w} /> }
		</Flex>

	return (
		<>
		  { isMobile ? Mobile : Desktop }
		</>
	)

}

export default HabitCard;