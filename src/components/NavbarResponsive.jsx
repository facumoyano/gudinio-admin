import { Box, List, ListItem } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import {
    MdOutlineSearch,
    MdOutlineFavorite,
    MdOutlineSettings,
} from "react-icons/md";

const NavbarResponsive = () => {
    return (
        <Box
            as="nav"
            bottom="0"
            position="fixed"
            color="color.morado"
            width="100%"
            fontSize="3xl"
            fontWeight="700"
        >
            <List display="flex" justifyContent="space-between" p={5}>
                <ListItem>
                    <HiHome />
                </ListItem>
                <ListItem>
                    <MdOutlineSearch />
                </ListItem>
                <ListItem>
                    <MdOutlineFavorite />
                </ListItem>
                <ListItem>
                    <MdOutlineSettings />
                </ListItem>
            </List>
        </Box>
    );
};

export default NavbarResponsive;
