import React, { useState } from "react";
import { Box, Flex, SimpleGrid, List, ListItem, Heading, Text, Stack, VStack, Button } from '@chakra-ui/react';
import Item from "./Item";

function Carrito({ items, setItems }) {
    const [listaItems, setListaItems] = useState(items);
    const handleDeleteItem = (nombre) => {
        const nuevoCarrito = listaItems.filter((item) => item.nombre !== nombre);
        setListaItems(nuevoCarrito)
    }
    const calcularPrecioTotal = () => {
        let total = 0;
        listaItems.forEach((item) => {
            const precioNumerico = parseFloat(item.precio.replace('$', '').trim());
            total += precioNumerico;
        });
        return total;
    };
    const precioTotal = calcularPrecioTotal();
    const vaciarLista = () => {
        setListaItems([]);
    }
    setItems(listaItems);

    return (
        <Flex p='4'>
            <SimpleGrid p='4' columns={5} spacing={3} w='100%'>

                {listaItems.map((item, index) => (
                    <Item
                        key={index}
                        imagen={item.imagen}
                        nombre={item.nombre}
                        precio={item.precio}
                        onDelete={handleDeleteItem}
                    />
                ))}

            </SimpleGrid>
            <VStack align='end' w='55%'>
                <Box boxShadow='dark-lg' textAlign='left' borderWidth={1} borderRadius='lg' m={4} p={4} w='80%' >
                    <Heading textAlign='center' size='sm' m={3}>Resumen de pedidos</Heading>
                    <List spacing={3} >
                        <ListItem>
                            <Stack justifyContent='space-between' isInline>
                                <Text>Cantidad de productos: </Text>
                                <Text as='b'>{listaItems.length}</Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack justifyContent='space-between' isInline>
                                <Text>Total:</Text>
                                <Text as='b' >${precioTotal.toFixed(2)}</Text>
                            </Stack>

                        </ListItem>
                    </List>
                </Box>

                <Button align='end' colorScheme='blue'
                    onClick={() => {
                        vaciarLista();
                    }}
                >
                    Vaciar carrito

                </Button>

            </VStack>
        </Flex>




    );
}

export default Carrito;