import { Box, Flex, Image, Spacer, useBoolean } from "@chakra-ui/react"
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs"


function Summary() {
    const [flag, setFlag] = useBoolean()

    return (
        <>
            <Box>

                <Flex>
                    <Image src="src/assets/btcIcon.png" alt="BTC icon" />
                    <Spacer />
                    <h2>Bitcoin</h2>
                    <Spacer />

                    <p>BTC</p>

                    <p>3.529020 BTC</p>
                    <Box>
                        <span>$19.153 USD</span>

                        <Box> <span>-2.23%</span></Box>
                    </Box>
                </Flex>
                {flag && (
                    <>

                        <p>More info</p>
                        <p>CTA here</p>
                    </>
                )}
                <button onClick={setFlag.toggle}>
                    {flag ? <BsChevronCompactUp /> : <BsChevronCompactDown />}

                </button>
            </Box>
        </>
    )
}
export default Summary