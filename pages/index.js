import Head from 'next/head';
import { Button, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Button as='a' href='/dashboard'>
        View Dashboard
      </Button>
    </div>
  );
}
