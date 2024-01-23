import { Flex } from "@chakra-ui/react"
import HabitCard from "../components/HabitCard"
import habits from "../data/habits"

const Habit = () => {
	
	return (
		<Flex 
		  flexDir="column" 
		  alignItems="center"
		  justifyContent="center"  
		  w="100%"
		  pt="120px"
		  mb="20px"
		  gap="30px"
		  >
		  {
		  	habits.map((habit, index) => <HabitCard habit={habit} index={index}/>)
		  }
		</Flex>
	)
}

export default Habit;