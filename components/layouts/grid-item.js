import NextLink from "next/link";
import Image from "next/image";
import { Box,Text,LinkBox,LinkOverlay} from "@chakra-ui/layout";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => {
    return (
    <Box w="100%" align="center">
        <LinkBox cursor>
            <Image src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
    )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
    return (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" /> 
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                    <Text fontSize={14}>{children}</Text>
                </LinkOverlay>
            </LinkBox>
        </NextLink>
    </Box>
    )
}

export const GridItemStyle = () => {
    return (
    <Global styles={`
        ,grid-item-thumbnail {
            border-radius: 12px;
        }
        `}
    />
    )
}