import { Box, Button, Center, Flex, Spacer } from "@chakra-ui/react"


function CtaBtn({ text, bg }) {
    return (
        <Button w={'48%'} bg={"white"} p={8} borderRadius={8} h={'100px'}>
            <Flex flexDirection="column">

                <Center bg={bg} borderRadius={'50%'} textColor={'white'} w='50px' h='50px' mb={2}>
                    $
                </Center>
                <Spacer h={8} w={2}/>
                {text}
            </Flex>
        </Button>
    )
}


function Cta() {
    return (
        <Flex>
            <CtaBtn text="Buy" bg='blue' />
            <Spacer w={5} />
            <CtaBtn text="sell" bg="red" />

        </Flex>
    )
}
export default Cta