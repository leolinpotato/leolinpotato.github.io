import { Text, Heading, Flex, useMediaQuery } from "@chakra-ui/react"

const About = () => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");
	return (
		<Flex flexDir="column" justifyContent="center" px="3%" pb="50px">
		  <Heading fontSize={isMobile ? "4xl" : "6xl"} mb={2}>Cheng-Yu Lin</Heading>
		  <Text fontSize={isMobile ? "lg" : "2xl"}>I'm a</Text>
		  <Heading fontSize={isMobile ? "2xl" : "4xl"} mb={5}>SoftWare Engineer</Heading>
		  <Text fontSize={isMobile ? "lg" : "2xl"}>Experience in C/C++ & Python</Text>
		  <Text fontSize={isMobile ? "lg" : "2xl"}>Recently working on Frontend</Text>
		</Flex>
	)
}

export default About;