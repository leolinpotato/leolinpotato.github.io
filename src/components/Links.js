import { Link, HStack, useMediaQuery, useDisclosure,  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

const Links = ({fn}) => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");
	const ScrollToPosition = (id) => {
		const target = document.getElementById(id);
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	const link = [["Home", "HomePage"], ["Experience", "Experience"], ["Habit", "Habit"]]
	const { isOpen, onOpen, onClose } = useDisclosure();


	const Mobile = 
		<>
		  <IconButton onClick={onOpen} icon={<HamburgerIcon w={5} h={5} />} colorScheme="blackAlpha.900"></IconButton>
		  <Modal 
		    isOpen={isOpen} 
		    onClose={onClose} 
		    zIndex="9999" 
		    size="full"
		    motionPreset='slideInTop'
		    transition={{ enter: { duration: 30 } }}>
		    <ModalOverlay />
		    <ModalContent p={5} bg="black" color="gray.300">
		      {
		        link.map((item, index) => {
		        	return (
		        	  <ModalHeader onClick={onClose}>
		        	  	<Link  onClick={() => fn(item[1])}>{item[0]}</Link>
		        	  </ModalHeader>
		        	)
		        })
		      }
		      <ModalCloseButton size="lg" />
		    </ModalContent>
		  </Modal>
		</>

	const Desktop = 
		<HStack spacing="3vw">
		{
		  link.map((item, index) => {
		  	return (
		  	  <Link onClick={() => fn(item[1])}>{item[0]}</Link>
		  	)
		  })
		}
		</HStack>

	return (
		<>
		  {isMobile ? Mobile : Desktop}
		</>
	)
}

export default Links;