import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router';

  
  export default function MovieDetails({addToWatchList,Title,Released,Runtime,Genre,Director,Writer,Actors,Plot,Language,Country,Awards,Poster,imdbRating,imdbVotes,Images}
    ) {
      
      const router = useRouter();
      const handleClick = ()=>{
        router.back()
      }
    return (
      <Container maxW={'7xl'}>
        <button onClick={handleClick}>Go Back</button>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
            
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={Poster}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
            
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
                {/* <SimpleGrid  columns={{ base: 2, lg: 2 }} spacing={{ base: 8, md: 5 }}>
                {Images.map((item)=>(
           <img width="400px" height="400px" src={item}
         />
          ))}
                </SimpleGrid> */}
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {Title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {Runtime}
              </Text>
            </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Released Date: 
                    </Text>{' '}
                    {Released}
                  </ListItem>

                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Genre:
                    </Text>{' '}
                    {Genre}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      imdbRating:
                    </Text>{' '}
                    {imdbRating}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Votes:
                    </Text>{' '}
                    {imdbVotes}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Director:
                    </Text>{' '}
                    {Director}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Actors:
                    </Text>{' '}
                    {Actors}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Writer:
                    </Text>{' '}
                    {Writer}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Plot:
                    </Text>{' '}
                    {Plot}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Language:
                    </Text>{' '}
                    {Language}{' '}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Country:
                    </Text>{' '}
                    {Country}{' '}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Award:
                    </Text>{' '}
                    {Awards}{' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
            onClick={addToWatchList}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to Watchlist
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }