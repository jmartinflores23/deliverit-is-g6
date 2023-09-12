import React from "react";
import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';

function Item({ imagen, nombre, precio, onDelete }) {
    const handleDeleteClick = () => { onDelete(nombre); }

    return (
        <VStack borderWidth='2px' borderRadius='lg' overflow='hidden' justifyContent='space-between' h='auto' borderColor='black'>
            <Image src={imagen} />
            <Box p='2' align='left'>
                <Box p='1'
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {nombre}
                </Box>
                <Box>
                    <Text as='i'>
                        {precio}
                    </Text>
                </Box>
                <Button colorScheme='blue' size='xs' onClick={handleDeleteClick}>
                    Eliminar
                </Button>
            </Box>
        </VStack>
    )
}


export default Item;