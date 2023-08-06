import { IconButton, Icon, Flex, Spacer } from "@chakra-ui/react"

import { BsChevronLeft } from "react-icons/bs";
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
function Header() {
    return (
        <header>
            <Flex>

                <IconButton
                    aria-label='back'
                    icon={<BackIcon />}
                />

                <Spacer />
                <h1>Bitcoin Wallet</h1>
                <Spacer />

                <IconButton
                    aria-label='back'
                    icon={<MenuIcon />}
                />
            </Flex>
        </header>
    )
}
export default Header