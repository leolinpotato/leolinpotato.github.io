import { Text, Heading, Flex, useMediaQuery } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const About = () => {
	const [ isMobile ] = useMediaQuery("(max-width: 768px)");

	const AnimatedText = ({ text, isHead, fontSize, delay, mb }) => {
	  const [ ref, inView ] = useInView({
	  	triggerOnce: true,
	  });

	  const [ isVisible, setIsVisible ] = useState(false);

	  useEffect(() => {
	    if (inView) {
	      // 使用 setTimeout 設定延遲顯示
	      const timeoutId = setTimeout(() => {
	        setIsVisible(true);
	      }, delay);

	      return () => {
	        clearTimeout(timeoutId); // 清除 timeout，避免組件卸載時執行
	      };
	    } else {
	    	setIsVisible(false);
	    }
	  }, [ inView, delay ]);

	  return (
	    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1.5s' }}>
	      { 
	      	isHead ? 
	        <Heading fontSize={fontSize} mb={mb}>{text}</Heading> :
	        <Text fontSize={fontSize} mb={mb}>{text}</Text>
	      }
	    </div>
	  );
	};

	return (
		<Flex flexDir="column" justifyContent="center">
		  <AnimatedText text="Cheng-Yu Lin" isHead={true} fontSize={isMobile ? "4xl" : "6xl"} delay={1200} mb={2} />
		  <AnimatedText text="I'm a" isHead={false} fontSize={isMobile ? "lg" : "2xl"} delay={2200} />
		  <AnimatedText text="SoftWare Engineer" isHead={true} fontSize={isMobile ? "2xl" : "4xl"} delay={3000} mb={5} />
		  <AnimatedText text="Experience in C/C++ & Python" isHead={false} fontSize={isMobile ? "lg" : "2xl"} delay={4200} />
		  <AnimatedText text="Recently working on Frontend" isHead={false} fontSize={isMobile ? "lg" : "2xl"} delay={5400} />
		</Flex>
	)
}

export default About;