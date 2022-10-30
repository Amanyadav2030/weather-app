import { HStack, Image, Tbody, Tr, Td, Table, TableContainer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Weather = ({ wind_kph, condition, temp_c, pressure_mb, pressure_in, gust_kph, cloud, humidity }) => {
    // const [check, setCheck] = useState(false);

    return (
        <>
            {/* // <VStack border={'2px solid #ffa366'} borderRadius={'0.5rem'} alignItems={'flex-start'} pl={'1rem'} w={'56%'} h={"395px"} background={'white'}> */}
            <Text w={'93%'} textAlign={'left'} pt={'0.7rem'} color={'gray'} fontWeight={'600'} fontFamily={'sans-serif'}> Current Wheather</Text>
            <HStack>
                <Image mt={'0.5rem'} w={'4rem'} h={'4rem'} alt={'cloud'} src={condition.icon} />
                <Text fontSize={'3rem'} style={{ wordSpacing: '-9px' }} >{temp_c} <span style={{ fontSize: "1.9rem" }}>c</span> </Text>
            </HStack>
            <HStack>
                <VStack>
                    <TableContainer>
                        <Table variant='simple'>

                            <Tbody>
                                <Tr>
                                    <Td><Text p={'0rem 1rem'} fontWeight={600} fontSize={'1.1rem'} >Wind</Text></Td>
                                    <Td><Text p={'0rem 1rem'} fontWeight={'600'} fontSize={'1.1rem'}>{wind_kph} km/h</Text></Td>
                                </Tr>
                                <Tr>
                                    <Td><Text p={'0rem 1rem'} fontWeight={600} fontSize={'1.1rem'} >Gust</Text></Td>
                                    <Td><Text p={'0rem 1rem'} fontWeight={'600'} fontSize={'1.1rem'}>{gust_kph} km/h</Text></Td>
                                </Tr>
                                <Tr>
                                    <Td><Text p={'0rem 1rem'} fontWeight={600} fontSize={'1.1rem'} >Humidity</Text></Td>
                                    <Td><Text p={'0rem 1rem'} fontWeight={'600'} fontSize={'1.1rem'}>{humidity}</Text></Td>
                                </Tr>

                            </Tbody>
                        </Table>
                    </TableContainer>
                </VStack>
                <VStack>
                    <TableContainer>
                        <Table variant='simple'>

                            <Tbody>
                                <Tr>
                                    <Td><Text p={'0rem 1rem'} fontWeight={600} fontSize={'1.1rem'} >Pressure_mb</Text></Td>
                                    <Td><Text p={'0rem 1rem'} fontWeight={'600'} fontSize={'1.1rem'}>{pressure_mb} </Text></Td>
                                </Tr>
                                <Tr>
                                    <Td><Text p={'0rem 1rem'} fontWeight={600} fontSize={'1.1rem'} >Pressure_in</Text></Td>
                                    <Td><Text p={'0rem 1rem'} fontWeight={'600'} fontSize={'1.1rem'}>{pressure_in}</Text></Td>
                                </Tr>
                                <Tr>
                                    <Td><Text p={'0rem 1rem'} fontWeight={600} fontSize={'1.1rem'} >Cloud</Text></Td>
                                    <Td><Text p={'0rem 1rem'} fontWeight={'600'} fontSize={'1.1rem'}> {cloud} </Text></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>

                </VStack>
            </HStack>
            {/* // </VStack> */}
        </>
    )
}

export default Weather