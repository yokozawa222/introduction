import { Container,Badge,Link,List,ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {  Title, WorkImage, Meta} from "../../components/layouts/work";
import P from "../../components/layouts/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
    <Layout title="Inkdrop">
        <Container>
            <Title>
                Inkdrop 
            </Title>
            <p>
                aaa
            </p>
        </Container>
        <List ml={4} my={4}></List>
    </Layout>
    )
}

export default Work;