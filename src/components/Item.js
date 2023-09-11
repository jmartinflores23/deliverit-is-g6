import React from "react";
import { Box, Button, Image } from '@chakra-ui/react';

function Item({ imagen, nombre, precio, onDelete }) {
    const handleDeleteClick = () => {onDelete(nombre);}

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={imagen} />
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {nombre}
                </Box>
                <Box>
                    {precio}
                </Box>
                <Button onClick={handleDeleteClick}>
                    Eliminar
                </Button>
            </Box>
        </Box>
    )
}


export default Item;