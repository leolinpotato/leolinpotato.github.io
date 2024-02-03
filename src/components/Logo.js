import { Link, HStack } from "@chakra-ui/react"

const Logo = ({fn}) => {
	const link = ["Cheng-Yu Lin", "HomePage"]
	return (
		<HStack>
		  {/*<Link onClick={() => fn(link[1])} _hover={{textDecoration: "none"}}>
		  	{link[0]}
		  </Link>*/}
		  <a href="/">{link[0]}</a>
		</HStack>
	)
}

export default Logo;