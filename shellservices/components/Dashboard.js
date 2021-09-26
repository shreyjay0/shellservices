import React from 'react';
import { Flex, Link, Box, Avatar, Button, Text } from '@chakra-ui/react';
import { AiOutlineLogout } from 'react-icons/ai';
import CustomTabs from './customTabs';

const DashboardShell = () => {
  return (
    <Box backgroundColor='gray.100' h='100vh'>
      <Flex backgroundColor='white' mb={16} w='full'>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          pt={4}
          pb={4}
          maxW='1250px'
          margin='0 auto'
          w='full'
          px={8}
        >
          <Flex>
            <Text fontSize='lg' fontWeight='bold'>
              ShellServices
            </Text>
          </Flex>
          <Flex justifyContent='center' alignItems='center'>
            {
              <Button
                leftIcon={<AiOutlineLogout />}
                variant='outline'
                colorScheme='red'
                mr={4}
              >
                Log Out
              </Button>
            }
            <Avatar mr={2} size='sm' src='#' />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin='0 auto' direction='column' maxW='1250px' px={8}>
        <CustomTabs />
      </Flex>
    </Box>
  );
};

export default DashboardShell;
