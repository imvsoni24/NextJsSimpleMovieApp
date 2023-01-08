import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import  Link  from 'next/link';
  
  export default function MovieCard({Title,Poster,Released,imdbRating,id}) {
    return (
      <Link href={`/${id}`}>
      <Center  py={12}>
        <Box

          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${Poster})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={Poster}
              alt = {Title}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading color={'gray.500'} fontWeight={800} fontSize={"xl"} textTransform={'uppercase'}>
            {Title} 
            </Heading>
            <Text color={'gray.500'} fontWeight={300} fontSize={"md"} textTransform={'uppercase'}>
           Rating: {imdbRating} 
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text  fontSize={'md'}>
                {Released}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
      </Link>
    );
  }
  