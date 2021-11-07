import Head from "next/head";
import { Box, Container} from "@chakra-ui/react";
import Navbar from "../layouts/navbar";
import VoxelDog from "../layouts/voxel-dog";
import NoSsr from "../layouts/no-ssr";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}> 
            <Head>
                {/* meta */}
                <title>Yoko Home</title>
            </Head>

            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}> 
            <NoSsr>
                <VoxelDog />
            </NoSsr>    
                {children}
            </Container>                
        </Box>
    )
}

export default Main;