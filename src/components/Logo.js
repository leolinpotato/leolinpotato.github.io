import { Link, HStack } from "@chakra-ui/react"

const Logo = ({fn}) => {
	const link = ["Cheng-Yu Lin", "HomePage"]
	return (
		<HStack>
		  <Link onClick={() => fn(link[1])} _hover={{textDecoration: "none"}}>
		  	{link[0]}
		  </Link>
		</HStack>
	)
}

export default Logo;