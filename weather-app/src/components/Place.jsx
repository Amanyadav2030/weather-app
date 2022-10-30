import { HStack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'

const Place = ({ location }) => {

  return (

    <VStack h={"395px"} border={'2px solid #ffa366'}  borderRadius={'0.5rem'}  background={'white'} w={'30%'} >
      <TableContainer>
        <Table variant='simple'>
          {/* <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
            </Tr>
          </Thead> */}
          <Tbody>
            {
              location ? Object?.entries(location)?.map(([key, value]) => {
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

export default Place