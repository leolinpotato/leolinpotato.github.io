import { Flex } from "@chakra-ui/react"
import HabitCard from "../components/HabitCard"
import habits from "../data/habits"
import { useInView } from "react-intersection-observer"

const Habit = () => {
	const [ ref, inView ] = useInView({
		triggerOnce: true,
		threshold: 0.15
	});
	return (
		<Flex 
		 flexDir="column" 
		 alignItems="center"
		 justifyContent="center"  
		 w="100%"
		 pt="30px"
		 pb="50px"
		 gap={10}
		 ref={ref}
		 style={{ opacity: inView ? 1 : 0, transition: 'opacity 2s' }}
		 minH="100vh"
		>
		  {
		  	habits.map((habit, index) => <HabitCard habit={habit} index={index}/>)
		  }
		</Flex>
	)
}

export default Habit;