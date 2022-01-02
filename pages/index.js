import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        color={useColorModeValue('#1a202c', 'white')}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a web developer based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gusade Taruna
          </Heading>
          <p>Human Being (Developer / Designer / Photographer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={1}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/gsd.jpg"
            alt="Profile Picture"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Gusade is a freelance developer who enjoys software development and
          writing code, passioned about maintaining quality, secure and
          performace optimized code, and also love to learn and explore about
          new things or technology. He was graduated from Udayana University on
          December 2021 with a bachelor's in engineering (Information Technology
          major) and GPA 3.75. His most recent project is a website for{' '}
          <NextLink href="/works/equatorial">
            <Link>Equatorial Property</Link>
          </NextLink>
          .
        </Paragraph>

        <Box align='center' my={5}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon />}colorScheme='linkedin'>My Portfolio</Button>
          </NextLink>
        </Box>

      </Section>
    </Container>
  )
}

export default Page
