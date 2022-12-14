import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { UIContext } from "../../context/ui";
import NextLink from "next/link";

export const Navbar = () => {

    const { openSideMenu } = useContext( UIContext );

    return (
        <AppBar position="sticky" elevation={ 0 }>
            <Toolbar>
                <IconButton size='large' edge='start' onClick={ openSideMenu }>
                    <MenuIcon/>
                </IconButton>
                <NextLink href="/" passHref legacyBehavior>
                    <Link underline="none" color="white">
                        <Typography variant="h6">OpenJira</Typography>
                    </Link>
                </NextLink>
            </Toolbar>
        </AppBar>
    );
}