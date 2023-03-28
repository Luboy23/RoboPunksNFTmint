import React from "react";
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react'
import Facebook from './assets/social-media-icons/facebook_32x32.png';
import Twitter from './assets/social-media-icons/twitter_32x32.png';
import email from './assets/social-media-icons/email_32x32.png';


const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify='space-between' align='center' padding="30px 30px">
            {/* left side - social media icons */}
            <Flex justify='space-around' width='40%' padding='0 75px'>
                <Link href="http://www.facebook.com">
                <Image src={Facebook} boxSize="42px" margin="0 15px"></Image>
                </Link>
            </Flex>
            <Flex justify='space-around' width='40%' padding='0 75px'>
                <Link href="http://www.twitter.com">
                <Image src={Twitter} boxSize="42px" margin="0 15px"></Image>
                </Link>
            </Flex>
            <Flex justify='space-around' width='40%' padding='0 75px'>
                <Link href="http://www.email.com">
                <Image src={email} boxSize="42px" margin="0 15px"></Image>
                </Link>
            </Flex>

            {/* right side - social sections and connect */}
            <Flex
                justify='space-around'
                align='center'
                width='40%'
                padding='30px'
            >
                <Box margin='0 15px'>About</Box>
                <Spacer />
                <Box margin='0 15px'>Mint</Box>
                <Spacer />
                <Box margin='0 15px'>Team</Box>
                <Spacer />
          

            {/* connect */}
            {isConnected ? (
                <Box margin='0 15px'>Connected</Box>
            ) : (
                        <Button
                            backgroundColor="#d6517d"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0f0f0f"
                            color="white"
                            cursor='pointer'
                            fontFamily="inherit"
                            padding='15px'
                            margin='0 15px'
                            onClick={connectAccount}>Connect</Button>
            )
        }
            </Flex>
            </Flex>
    )
}

export default Navbar