import { HStack, Image, Flex, useMediaQuery } from "@chakra-ui/react"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from 'react';

const HabitImg = ({images, w}) => {
	const [ isIpad ] = useMediaQuery(('max-width: 1024px'));
	const [ isMobile ] = useMediaQuery(('max-width: 768px'));
	const len = images.length;
	const [ cur, setCur ] = useState(0);
	const [ isHover, setIsHover ] = useState(false);
	const previousImage = () => {
		setCur(cur === 0 ? len - 1 : cur - 1);
	}
	const nextImage = () => {
		setCur(cur === len - 1 ? 0 : cur + 1);
	}
	return (
	  <HStack w={`${isHover ?  1.15 * w : w}%`} transition="all 0.5s">
		<HStack onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} w="100%">
		  <MdKeyboardDoubleArrowLeft onClick={() => previousImage()} visibility={isHover ? "visible" : "hidden"} transition="all 0.2s"/>
		  <Image src={images[cur]} w="80%"  zIndex={isHover ? 1 : 0} />
		  <MdKeyboardDoubleArrowRight onClick={() => nextImage()} visibility={isHover ? "visible" : "hidden"} transition="all 0.2s"/>
		</HStack>
	  </HStack>
	)
}

export default HabitImg;