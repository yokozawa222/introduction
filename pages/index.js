import { Container,Box,Heading,Image,Link,Button, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/layouts/section";
import Paragraph from "../components/layouts/paragraph";
import Nextlink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection,BioYear } from "../components/layouts/bio";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello, I&apos;m a front developer based in Japan.
            </Box>

            <Box display={{md:"flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Yokozawa Yuta
                    </Heading>
                    <p>
                        Digital Craftzman (Dvelopper / Designer)
                    </p>
                </Box>
            </Box>
            <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center">
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block"
                borderRadius="full"
                src="/images/yuta.jpg"
                alt="Profile Image"
                />
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" mb={2} variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Yokozawa Yuta is a front developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack
                    for all things launching products, from planning and designing all the
                    way to solving real-life problems with code. When not online, he loves
                    hanging out with his camera. Currently, he is living off of his own
                    product called{' '}
                    <Nextlink href="/works/inkdrop">
                        <Link>aaa</Link>
                    </Nextlink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <Nextlink href="/works">
                        <Button 
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal">
                            My Portfolio
                        </Button>
                    </Nextlink>
                </Box>
                <Section delay={0.2}>
                    <Heading as="h3" mb={2} variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1994</BioYear>
                        Born in Osaka 大阪, Japan
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Completed the Master&apos;s Program in the Guraduate university of Kobe at MBA
                        (神戸大学経学研究科)
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Worked at Mitsubishi Electric
                        （三菱電機株式会社入社）
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3"  mb={2} variant="section-title">
                        I ♡ 
                    </Heading>
                    <Paragraph>
                        Football, Music, Playing Games etc...
                    </Paragraph>
                </Section>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page;