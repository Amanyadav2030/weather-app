import React from 'react'
import { HStack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
const Astro = ({ astro }) => {
    return (
        <VStack border={'2px solid #ffa366'} borderRadius={'0.5rem'} background={'white'} >
            <TableContainer>
                <Table variant='simple'>
                    <Tbody>
                        {
                            astro ? Object?.entries(astro)?.map(([key, value]) => {
                                return (
                                    <Tr key={key}>
                                        <Td><Text fontWeight={600} fontSize={'1.1rem'} >{key}</Text></Td>
                                        <Td><Text color={'#dc143c'} fontWeight={'600'} fontSize={'1.3rem'}>{value}</Text></Td>
                                    </Tr>
                                )
                            }) : <></>
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </VStack>
    )
}

export default Astro