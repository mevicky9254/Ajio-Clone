import React, { useEffect } from 'react'
import axios from 'axios';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box, Text, Tooltip,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Fade, ScaleFade, Slide, SlideFade, Button, Collapse, Divider, GridItem,Grid,
  Tabs, TabList, TabPanels, Tab, TabPanel, Container, Image
} from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'
import { data } from './SingleProductData'
import { BsCircleFill, BsBag } from 'react-icons/bs'
import SizeDrawer from '../Components/SizeDrawer'
import { CiLocationOn } from 'react-icons/ci'
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import NavbarTop from '../Components/NavbarTop'
import NavbarBottom from '../Components/NavbarBottom'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import Toaster from '../Components/Toaster';

function OrderList() {
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <>
      <Collapse in={show}>
        <UnorderedList fontSize="14px">
          <ListItem display={'flex'} gap="10px"><span>MRP</span> <span>:Rs. 599.00 inclusive of all taxes(MRP changes as per size selection)</span></ListItem>

          <ListItem display={'flex'} gap="10px"><Text>Marketed By</Text> <Text>:
            Marks & Spencer, Ground Floor, Infinity Tower C, Cyber City, DLF Phase 2, Gurgaon – 122002, Haryana, India</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Net Qty</Text> <Text>: 1N</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Manufactured By</Text> <Text>: Reliance Retail Limited Shed No-77/80, Indian Corporation Godown Mankoli Naka, Village Dapode Taluka, Bhiwandi Dist. Thane Maharashtra PIN-421302</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Country Of Origin</Text> <Text>: India</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Customer Care Address</Text> <Text>:
            AJIO, c/o Reliance Retail Limited, SS Plaza, 74/2 Outer Ring Road, 29th Main Road, BTM 1st Stage, BTM Layout, Bangalore 560068, Karnataka, INDIA. Ph. 1800-889-9991. E-mail - customercare@ajio.com</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Commodity</Text> <Text>:Men's Track Pants
          </Text></ListItem>

        </UnorderedList>
      </Collapse>
      <Button bg={"#fffff"} size='8px' onClick={handleToggle} mt='0.1rem'>
        {show ? 'Less details' : '  Other information '}
      </Button>
    </>
  )
}


const SingleProductPage = () => {
  const [pageData,setPageData]=useState({})
  const { id,gender } = useParams();

  useEffect(()=>{
    axios.get(`https://outfiter.onrender.com/${gender}/${id}`)
    .then((res)=>{
      
      setPageData(res.data)
        
    }).catch((err)=>{
        console.log(err)
    })
  },[]);

  const {userData} = useSelector((state) => state.authReducer)

    
//   const handleClick = async() =>{
//     let payload = [...userData.cart , pageData]

//   await  axios.patch(`https://outfiter.onrender.com//users/${userData.id}`,{cart:payload})

  

// }

  // const handleClick = () =>{
  //      let payload = [...userData.cart , pageData]

  //      axios.patch(`https://outfiter.onrender.com//users/${userData.id}`,{cart:payload})


  // }
  
const handleClick= async()=> {
  let arr=[];
   await axios.get(`https://outfiter.onrender.com/users/${userData.id}`)
  .then((res)=>{
    arr = res.data.cart
     arr.push(pageData)
    //  console.log(arr)
  })

axios.patch(`https://outfiter.onrender.com/users/${userData.id}`,{
  cart:arr
})
    }


  // console.log(userData)
  const { brand, title, price, discount, offer_price, category, image }= pageData


  return (
    <div>
     {/* <Container maxW={"100%"} p={0} m={0}>
        <Box
        bgColor={"rgb(255, 255, 255)"}
        w={"100%"}
        top="0"
        left="0"
        mt="-.9rem"
        position="sticky"
        zIndex="100"
        boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.75)"}
      >
        <NavbarTop />
        <NavbarBottom />
        
      </Box>
      
      </Container> */}



      <Box mx="auto" w="95%"  >

        {/* Navigate LInk Path  Start*/}
        <Box fontSize="sm" marginTop={10} >
          <Breadcrumb color='gray'>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='/product'>Product</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='/singleproducts/:id/:gender'>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        {/* Navigate Link Path End    */}


        {/* middle Div start  */}


        <Box w="100%" p="0rem 5rem"
          display="flex" gap="50px" justifyContent='space-between' flexDirection={{ base: "column", md: "row" }} >
          {/* Product Images  */}

          <Box w="100%"  padding={"50px"}>
            <img src={image} alt="img" />
              
            <Tabs variant='enclosed' marginTop="25px" px={"25px"}>
  <TabList>
    <Tab>RETURNS</Tab>
    <Tab>OUR PROMISE</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Text>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please <Link color={'teal'} href=''> click here</Link>․</Text>
    </TabPanel>
    <TabPanel>
      <p>We assure the authenticity and quality of our products</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          </Box>

          {/* Product Data  */}

          <Box w="40%" margin={"auto"}  >
            <Text pt="10px" textAlign={"center"} fontSize='lg' color="#BFAC8E">{brand}</Text>
            <Text textAlign={"center"} fontSize='lg'>{title}</Text>
            <Text textAlign={"center"} fontSize='2xl' pt="14px">₹{offer_price}</Text>
            <Text paddingLeft={"100px"} fontSize='sm' display={'inline'} color="#BFAC8E">MRP <Text   display={'inline'} textDecoration="line-through">₹{price}</Text> ({discount}% OFF)</Text>
            <Text textAlign={"center"} color='gray' marginBottom={"12px"}>Price inclusive of all taxes</Text>

            {/* <Box width={"60%"}
              border={"1.5px dotted gray"}
              textAlign="start" p="1px"
              bg={"#fff8eb"}
              marginBottom="-3%"
              marginLeft="100px">
              <Text fontSize='xs'>Get it for ₹300</Text>
            </Box> */}
            <Box border={"1.5px dotted gray"} w="90%" display="flex" margin={"auto"} p="12px" justifyContent="space-between">
              <Box borderRight={"1px solid gray"}>
                <Text fontSize='xs' color="#BFAC8E">  Use Code TRENDS <Link href="#" color="black">T&C</Link></Text>
              </Box>
              <Box paddingLeft={"10px"}> 
                <Text fontSize='xs'>  Get upto Extra 40% Off on 1499 and Above. Max Discount Rs. 1000.
                  <Link href="#">View All Products </Link></Text>
              </Box>
            </Box>


            {/* color */}
            <Box pt="5px" w="50%" m="auto" marginTop={"12px"} gap={"5px"} display="grid "  gridTemplateColumns={"repeat(4,1fr)"} alignItems={"center"} >

              <Tooltip label="Olive" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#4C4C39" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="jet-black" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#222222" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="navy" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#292647" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="dark-grey" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#484848" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="teal" aria-label='A tooltip' fontSize='xs' >
                <span> <BsCircleFill color="#254666" fontSize={"32px"} /></span>
              </Tooltip>

            </Box>


            {/* Size Drawer */}

            <Box p={"20px 0px"}  width="40%" margin={"auto"}  >
              <SizeDrawer   brand={brand} image={image} />
            </Box>
            <Box bg={"#FDF8EB"} padding="10px" fontSize={'sm'} display="flex" w="100%" margin={"auto"}>
              <CiLocationOn fontSize={"22px"} />
              <Text>
                Select your size to know your estimated delivery date.</Text>
            </Box>

            {/* buuton  */}
            <Box width={"100%"}
            marginTop={"8px"}
              as='button'
              height='48px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='1px'
              

              fontSize='14px'
              fontWeight='semibold'
              bg='#D5A249'
              borderColor='#ffffff'
              color='#ffffff'
              _hover={{ bg: '#D5A249', border: "1px solid #ffffff" }}
              _active={{
                bg: '#D5A249',
                transform: 'scale(0.98)',
                borderColor: '#ffffff'
              }}
              _focus={{
                boxShadow:
                  '0 0 1px 2px #D5A249, 0 1px 1px rgba(255, 255, 255, 0.15)',
              }}

              onClick={handleClick}
            >
              
              
               
                <Toaster/>
             

            </Box>

            <Text color={'gray'} fontSize="11px" textAlign={"center"} marginBottom={"25px"}>HANDPICKED STYLES | ASSURED QUALITY</Text>

            {/* Add to WIshlist Button  */}


            <Box width={"100%"}
              as='button'
              height='48px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='1px'
              px='60px'
              margin="auto"
              fontSize='14px'
              fontWeight='semibold'
              bg='#ffffff'
              borderColor='#D5A249'
              color='#D5A249'
              _hover={{ bg: '#ffffff', border: "1px solid #D5A249" }}
              _active={{
                bg: '#ffffff',
                transform: 'scale(0.98)',
                borderColor: '#D5A249'
              }}
              _focus={{
                boxShadow:
                  '0 0 1px 2px #ffffff, 0 1px 1px rgba(255, 255, 255, 0.15)',
              }}
            >
              <Box display="flex" gap={"10px"}>
                <BsBag />
                <Text> SAVE TO WISHLIST</Text>
              </Box>

            </Box>

            <Box textAlign={"left"}>
              <Text marginBottom={"5px"} color={"teal"} fontWeight={"bold"} fontSize="13px" textAlign={'left'}>Product Details</Text>
              <UnorderedList textAlign={"left"} fontSize="14px">
                <ListItem>Insert pockets</ListItem>
                <ListItem>Contrast taping</ListItem>
                <ListItem>Machine wash</ListItem>
                <ListItem>100% polyester</ListItem>
                <ListItem>Product Code: 440971924001</ListItem>
                <ListItem color={'teal'}><a href='#about'>About {brand}</a></ListItem>
              </UnorderedList>
              <OrderList />
            </Box>

            
          </Box>



        </Box>
{/* Lower Part  */}

        <Grid margin={"20px"} gridTemplateColumns={"repeat(2,1fr)"} columnGap={"200px"}>
          <GridItem position={"relative"} borderBottom={"1px solid gray"}><Text fontSize={"19px"} fontWeight={"bold"} textColor="#585858" right={"-185px"} top="-15px" 
          position={"absolute"} id='about'>About {brand}</Text></GridItem>
          <GridItem borderBottom={"1px solid gray"}></GridItem>
        </Grid>
        <Box display={"flex"} width="90%" gap={"30px"} m="auto" alignItems={"center"} mb="5rem"> 
          <Text fontSize={"14px"} fontWeight="semibold">{brand}</Text>
          <Text fontSize={"14px"}>Inspired by everyday athletes everywhere, Performax’s range of active wear will help you reach your fitness goals and how!

Made for men, women and kids, the range is designed with new-age fabric technology like QuickDry and Kooltex. The anti-static and anti-microbial powers, clever contouring and durable fits will help you feel comfortable and supported during every workout.<br/>

From shoes to sweatbands, hoodies to trainers, t-shirts to gym shorts, Performax’s range of apparel, footwear and accessories gives a whole new meaning to the term ACTIVE LIFE! <br/>
 <br/> <Link textDecoration={"underline"} href='' >View all styles from this brand </Link></Text>
        </Box>


        <Grid margin={"20px"} gridTemplateColumns={"repeat(2,1fr)"} columnGap={"220px"}>
          <GridItem position={"relative"} borderBottom={"1px solid gray"}><Text fontSize={"19px"} fontWeight={"bold"} textColor="#585858" right={"-205px"} top="-15px" position={"absolute"}>Shop More Track Pants</Text></GridItem>
          <GridItem borderBottom={"1px solid gray"}></GridItem>
        </Grid>

        <Box display={'flex'} margin="auto" width={"75%"} justifyContent="space-between" gap={"20px"} my={"50px"}>
          <Button bgColor={"#F8F8F8"} colorScheme='#e0cfcf' textColor={"teal"} size='sm' borderRadius="none" px={"90px"} py={"40px"}><Link href=''>All Track Pants <ChevronRightIcon /></Link></Button>
          <Button bgColor={"#F8F8F8"} colorScheme='#e0cfcf' textColor={"teal"} size='sm' borderRadius="none" px={"90px"} py={"40px"}><Link href=''>Style : Straight <ChevronRightIcon /></Link></Button>
          <Button bgColor={"#F8F8F8"} colorScheme='#e0cfcf' textColor={"teal"} size='sm' borderRadius="none" px={"90px"} py={"40px"}><Link href=''>Brand : {brand} <ChevronRightIcon /></Link></Button>
        </Box>

        
        <Grid margin={"20px"} gridTemplateColumns={"repeat(2,1fr)"} columnGap={"150px"}>
          <GridItem position={"relative"} borderBottom={"1px solid gray"}><Text fontSize={"19px"} fontWeight={"bold"} textColor="#585858" right={"-130px"} top="-15px" position={"absolute"}>Similar Styles</Text></GridItem>
          <GridItem borderBottom={"1px solid gray"}></GridItem>
        </Grid>

       {/* Carousel  */}

        <Grid margin={"20px"} gridTemplateColumns={"repeat(2,1fr)"} columnGap={"150px"}>
          <GridItem position={"relative"} borderBottom={"1px solid gray"}><Text fontSize={"19px"} fontWeight={"bold"} textColor="#585858" right={"-130px"} top="-15px" position={"absolute"}>Recently Viewed</Text></GridItem>
          <GridItem borderBottom={"1px solid gray"}></GridItem>
        </Grid>
      </Box>
    </div>
  )
}

export default SingleProductPage


