import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import {Box, Button, Flex, Input,Text} from '@chakra-ui/react'


import roboPunksNFT from './RoboFunksNFT.json';

const roboPunksNFTAddress = '0xe3d2d04574Feed476aBe2E8EA9Dd710ff60693FA';

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            )
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response', response);

            } catch (err) {
                console.log("error", err);
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <Flex justify='center' align='center' height='100vh' paddingBottom='150px'>
            <Box width='520px'>
                <div>
            <Text fontSize='48px' textShadow='0 5px #000000'>赛博朋克NFT</Text>
                    <Text
                        fontSize='30px' letterSpacing='-5.5%'
                        fontFamily='VT323' textShadow='0 2px 2px #000000'
                    >现在是2077年，人类濒临灭绝之际，赛博朋克的NFT能否拯救人类？现在就来铸造属于你自己的赛博朋克NFT吧！ </Text>
            </div>
            {isConnected ? (
                <div>
                    <Flex align='center' justify='center'>
                            <Button
                                backgroundColor='#D6517D'
                                borderRadius='5px'
                                boxShadow='0 2px 2px 1px #0f0f0f'
                                color='white'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                marginTop='10px'
                                onClick={handleDecrement}>-</Button>
                            <Input
                                readOnly
                                fontFamily='inherit'
                                width='100px'
                                height='40px'
                                textAlign='center'
                                paddingLeft='19px'
                                marginTop='10px'
                                type="number" value={mintAmount} />
                        <Button
                                backgroundColor='#D6517D'
                                borderRadius='5px'
                                boxShadow='0 2px 2px 1px #0f0f0f'
                                color='white'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                marginTop='10px'
                                onClick={handleIncrement}>+</Button>
                    </Flex>
                    <Button
                                backgroundColor='#D6517D'
                                borderRadius='5px'
                                boxShadow='0 2px 2px 1px #0f0f0f'
                                color='white'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                marginTop='10px' onClick={handleMint}>Mint Now!</Button>
                </div>  
            ) : (
                        <Text
                            marginTop='70px'
                            fontSize='30px'
                            letterSpacing='-5.5%'
                            fontFamily='VT323'
                            textShadow='0 3px #000000'
                            color='#d6517d'
                        > 你必须在连接钱包之后才能铸造NFT！</Text>    

            )
                }
                </Box>
        </Flex>
    )
}

export default MainMint;