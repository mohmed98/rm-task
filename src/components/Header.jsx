import { Box, IconButton, Icon, Flex, Spacer, Menu, MenuButton, MenuList, MenuItem, Center, Heading } from "@chakra-ui/react"

import { BsChevronLeft, BsFillPencilFill, BsFillSendFill } from "react-icons/bs";
import { VscKebabVertical } from "react-icons/vsc";

function BackIcon() {
    return (
        <Icon as={BsChevronLeft} />
    )
}
function MenuIcon() {
    return (
        <Icon as={VscKebabVertical} />
    )
}
function EditIcon() {
    return (
        <Icon as={BsFillPencilFill} />
    )
}
function ShareIcon() {
    return (
        <Icon as={BsFillSendFill} />
    )
}
function Header() {
    return (
        <Box bg='white' w='100%' px={4}>
            <header>
                <Flex>
                    <IconButton 
                        bg={"white"}
                        aria-label='back'
                        icon={<BackIcon />}
                    />

                    <Spacer />
                    <Center>

                    <Heading>Bitcoin Wallet</Heading>
                    </Center>
                    <Spacer />

                    <Menu>
                        <MenuButton
                        bg={"white"}
                            as={IconButton}
                            aria-label='Options'
                            icon={<MenuIcon />}
                        />
                        <MenuList>
                            <MenuItem icon={<EditIcon />} command='⌘T'>
                                Edit
                            </MenuItem>
                            <MenuItem icon={<ShareIcon />} command='⌘N'>
                                Sahre
                            </MenuItem>


                        </MenuList>
                    </Menu>
                </Flex>
            </header>
        </Box>
    )
}
export default Header