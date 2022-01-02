import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
  return(
      <Container>
          <Box borderRadius='lg' color='white' bg='blue' p={3} mb={6} align='center'>
            Hello, I&apos;m a web developer based in Indonesia!
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as='h2' variant='page-title'>
                    Gusade Taruna
                </Heading>
                <p>Human Being (Developer / Designer / Photographer)</p>
            </Box>
          </Box>
      </Container>
  )
}

export default Page
