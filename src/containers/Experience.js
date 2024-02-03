import { Flex } from "@chakra-ui/react"
import InfoBlock from "../components/InfoBlock"
import infos from "../data/infos"
import { useInView } from "react-intersection-observer"

const Experience = () => {
	const [ ref, inView ] = useInView({
		triggerOnce: true,
		threshold: 0.15
	});
	return (
		<Flex 
		  flexDir="column" 
		  alignItems="start"
		  gap="50px"
		  pt="100px"
		  pb="100px"
		  ref={ref}
		  style={{ opacity: inView ? 1 : 0, transition: 'opacity 2s' }}
		>
		  {
		  	infos.map((item, index) => <InfoBlock infos={item} />)
		  }
		</Flex>
	)
}

export default Experience;