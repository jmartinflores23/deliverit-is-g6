import React from 'react'
import { List, ListItem, ListIcon, Stack, Divider, Button, Box, Flex, Text } from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";
function ResumenDeTransaccion({ formData, setPage }) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    function formatearFecha(fecha) {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        };

        const fechaFormateada = new Date(fecha).toLocaleDateString('es-AR', options);

        return fechaFormateada;
    }
    const fechaFormateada = formatearFecha(formData.fecha);

    return (
        <Flex justifyContent='center'>
            <Box textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' m={4} p={4} w="75%">
                <List spacing={3}>
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem isInline>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Dirección:
                            <br />
                            <Text as='i' fontSize='sm'>{formData.ciudad || 'null'} - {formData.calle || 'null'} {formData.numero || 'null'}</Text>
                        </ListItem>
                        <Button colorScheme='blue' size='xs' onClick={() => {
                            setPage(1);
                        }}>Editar</Button>

                    </Stack>
                    <Divider />
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem isInline>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Indicaciones al repartidor:
                            <br />
                            <Text as='i' fontSize='sm'>{formData.indicaciones || ''}</Text>
                        </ListItem>
                        <Button colorScheme='blue' size='xs' onClick={() => {
                            setPage(1);
                        }}>Editar</Button>

                    </Stack>
                    <Divider />
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Forma de pago:
                            <br />
                            <Text as='i' fontSize='sm'> {capitalizeFirst(formData.formaDePago)}{formData.formaDePago === 'efectivo' ? ` - Entrega: $ ${formData.cantidadEfectivo || 'null'}` : ''}</Text>
                        </ListItem>
                        <Button colorScheme='blue' size='xs' onClick={() => {
                            setPage(2);
                        }}>Editar</Button>

                    </Stack>
                    <Divider />
                    <Stack isInline justifyContent='space-between' align='center'>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Horario de entrega
                            <br />
                            <Text as='i' fontsize='sm'> {formData.antesPosible === 'SI' ? `Lo antes posible` : `Diferido: ${fechaFormateada}`}</Text>
                        </ListItem>
                        <Button colorScheme='blue' size='xs' onClick={() => {
                            setPage(3);
                        }}>Editar</Button>
                    </Stack>
                </List>
            </Box>
        </Flex>

    )
}

export default ResumenDeTransaccion