import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

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
    </Container>
  )
}

export default Page
