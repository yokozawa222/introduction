import  { Container, Heading, SimpleGrid,Divider } from "@chakra-ui/react";
import Section from "../components/layouts/section";
import { WorkGridItem } from "../components/layouts/grid-item";
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'


const Works = () => {
    return (
        <Container>
            <Heading as="h3" frontSize={20} md={4}>
                Work
            </Heading>

            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section delay>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A markdown note-taking app
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
                        Music recommendation app for iOS
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem 
                    id="fourpainters"
                    title="The four painters"
                    thumbnail={thumbFourPainters}>
                        A VR Creative tools for fashion brands                    
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
                        An app that suggests ramen(noodle) shops based on a given photo of
                        the ramen you want to eat
                    </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                    Collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                <WorkGridItem
                    id="modetokyo"
                    thumbnail={thumbModeTokyo}
                    title="mode.tokyo"
                >
                    The mode magazine for understanding to personally enjoy Japan
                </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
                    A VR Creative tools for fashion brands
                </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Old works
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.5}>
                    <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
                        Twitter client app for iPhone Safari
                    </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                    <WorkGridItem
                        id="freedbtagger"
                        thumbnail={thumbFreeDBTagger}
                        title="freeDBTagger"
                    >
                        Automatic audio file tagging tool using FreeDB for Windows
                    </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                    <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
                        P2P private file sharing tool with MSN Messenger integration for
                        Windows
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;