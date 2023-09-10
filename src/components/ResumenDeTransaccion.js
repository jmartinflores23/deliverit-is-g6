import React from 'react'
import { List, ListItem, ListIcon, Stack, Divider, Button, Box, Flex, Text } from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";
function ResumenDeTransaccion({ formData, setPage }) {
    return (
        <Flex justifyContent='center'>
            <Box textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' m={4} p={4} w="75%">
                <List spacing={3}>
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem isInline>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Dirección:
                            <Text fontSize='sm'>{formData.ciudad}, {formData.calle} {formData.numero}</Text>
                        </ListItem>
                        <Button colorScheme='pink' size='xs' onClick={() => {
                            setPage(0);
                        }}>Editar</Button>

                    </Stack>
                    <Divider />
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem isInline>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Indicaciones al repartidor:
                            <Text fontSize='sm'>{formData.indicaciones}</Text>
                        </ListItem>
                        <Button colorScheme='pink' size='xs' onClick={() => {
                            setPage(0);
                        }}>Editar</Button>

                    </Stack>
                    <Divider />
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Forma de pago
                        </ListItem>
                        <Button colorScheme='pink' size='xs' onClick={() => {
                            setPage(1);
                        }}>Editar</Button>

                    </Stack>
                    <Divider />
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Horario de entrega
                        </ListItem>
                        <Button colorScheme='pink' size='xs' onClick={() => {
                            setPage(2);
                        }}>Editar</Button>
                    </Stack>
                </List>
            </Box>
        </Flex>

    )
}

export default ResumenDeTransaccion