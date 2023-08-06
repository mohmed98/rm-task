import { Flex,Box, Image } from "@chakra-ui/react"
function Navigation() {
    return (
<Box pos="fixed" bottom={2} right={0} left={0}>
    <Flex justifyContent={'space-between'} px={2}>
    <Image w={'30px'} src="src/assets/wallet.svg" alt="Wallet icon" mr={2} />
    <Image w={'30px'} src="src/assets/explore.svg" alt="explore icon" mr={2} /> 
    <Image w={'30px'} src="src/assets/notification.svg" alt="notification icon" mr={2} />
    <Image w={'30px'} src="src/assets/setting.svg" alt="setting icon" />


    </Flex>
</Box>
    )
    } 
export default Navigation