import { Box } from "@mui/material";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
    title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{ title }</title>
            </Head>
            <Navbar/>
            <Box sx={{ padding: '10px 20px' }}>
                { children }
            </Box>
        </Box>
    );
}