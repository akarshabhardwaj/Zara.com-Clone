import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import {Link as RouterLink} from "react-router-dom"

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const styles={fontSize:"25px",color:"black",fontWeight:"900"}

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  //<Slider | null>(null)
  const [slider, setSlider] = React.useState([]);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Richess and Class',
      text:
        "Statements that Defines You",
      image:'https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-edition/subhome-xmedia-w47//w/1920/IMAGE-landscape-fill-88c5ba6c-832e-442e-878f-48b60c0c8aa7-default_0.jpg?ts=1669457412950'
        ,
    },
    {
      title: 'Whole Family',
      text:
        "Go With the flow of Styles",
      image:
        'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-boy/subhome-xmedia-47//w/1920/IMAGE-landscape-fill-ef5aa608-9c2f-4d48-8cbd-8a76a0d0658c-default_0.jpg?ts=1669379233104',
    },
    {
      title: 'Awesome Kids',
      text:
        "Design Your Self in Style",
      image:
        'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-47//w/1920/IMAGE-landscape-fill-a8ada299-8dee-4702-abfa-b0d0040b4192-default_0.jpg?ts=1669384230932',
    },
    {
        title: 'Richess and Class',
        text:
          "Design Your Self in Style",
        image:
        'https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-athleticz/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-8461d8f6-aa20-4b7c-bf56-ddbfe1ab66ea-default_0.jpg?ts=1670844315727',
      },
      {
        title: 'Be Bold',
        text:
          "Design Your Self in Style",
        image:
          'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-coats/subhome-xmedia-50-2//w/1920/IMAGE-landscape-default-fill-02fbf935-677e-40ab-8fa1-1c60f122b18e-default_0.jpg?ts=1671037079704',
      },
      {
        title: '',
        text:
          "Delicate",
        image:
          'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babygirl/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-4c7367f4-222f-4e2a-a6a6-c5c7e22f903a-default_0.jpg?ts=1670936962182',
      },
  ];

  return (
    <Box
      position={'relative'}
      height={'700px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
                
              </Stack>
              
            </Container>
            <Box width="100%" style={styles}>
                <Flex alignItems="center" margin="auto" justifyContent="space-around">
            <RouterLink to="/men"><h2>MEN</h2></RouterLink>
            <RouterLink to="/women" ><h2>WOMEN</h2></RouterLink>
            <RouterLink to="/kids" ><h2>KIDS</h2></RouterLink>
            </Flex>
        </Box>
          </Box>
        ))}
        
      </Slider>
    </Box>
  );
}