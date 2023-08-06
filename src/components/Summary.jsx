import { Box, Center, Flex, Heading, Image, Spacer, Tag, useBoolean } from "@chakra-ui/react"
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs"
import Cta from "./Cta"


function Summary() {
    const [flag, setFlag] = useBoolean()

    return (
        <>
            <Box bg='white' p={3} borderRadius={8}>

                <Flex>

                    <Image w={'50px'} src="src/assets/btcIcon.png" alt="BTC icon" mr={2} />
                    <Center>
                        <h2>Bitcoin</h2>
                    </Center>
                    <Spacer />
                    <Center>

                        <p>BTC</p>
                    </Center>
                </Flex>
                <Spacer h={6}/>
                <Heading>3.529020 BTC</Heading>
                <Spacer h={6}/>

                <Flex>
                    <span>$19.153 USD</span>
                    <Spacer />
                    <Box> <Tag bg={'red'} textColor={"white"}>-2.23%</Tag></Box>
                </Flex>
                {flag && (
                    <>

                        <p>More info</p>
                        <Cta />
                    </>
                )}
                <Center>

                    <button onClick={setFlag.toggle}>
                        {flag ? <BsChevronCompactUp /> : <BsChevronCompactDown />}

                    </button>
                </Center>
            </Box>
        </>
    )
}
export default Summary