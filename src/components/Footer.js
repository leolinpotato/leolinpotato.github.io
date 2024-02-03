import { Text, Heading, Flex, HStack, Link } from "@chakra-ui/react"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
	const links = 
	[
		[<MdEmail />, "mailto:leolin0904@gmail.com"], 
		[<FaLinkedin />, "https://www.linkedin.com/in/chengyulin0904/"],
		[<FaGithub />, "https://github.com/leolinpotato"],
		[<AiFillInstagram />, "https://www.instagram.com/leolin0904/"]
	]
	return (
		<Flex 
		 minW="100%" 
		 minH="10vh" 
		 flexDir="column" 
		 alignItems="center" 
		 justifyContent="center" 
		 gap={2} 
		 mt={5}
		>
		  <HStack spacing={7}>
		    {
		      links.map((link, index) => {
		      	return (
		      	  <Link key={link} href={link[1]} isExternal>{link[0]}</Link>
		      	)
		      })
		    }
		  </HStack>
		  <Text>© Handcrafted by Cheng-Yu Lin</Text>
		</Flex>
	)
}

export default Footer;