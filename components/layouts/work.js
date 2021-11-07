import Nextlink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => {
    return (
        <Box>
            <Nextlink href="/works">
                <Link>Works</Link>
            </Nextlink>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display="inline-block" as="h3" frontSize={20} mb={4}>
                { children }
            </Heading>
        </Box>
    )
}

export const WorkImage = ({ src, alt }) => {
    <Images borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export const Meta = ({ children }) => {
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
}