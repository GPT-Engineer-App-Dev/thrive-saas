import { Box, Flex, Heading, Text, Button, Input, Textarea, VStack } from '@chakra-ui/react';
import { FaRocket, FaUsers, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
        <Heading mb={4}>Welcome to GPT Engineer</Heading>
        <Text fontSize="lg" mb={10}>Revolutionizing web development with AI.</Text>
        <Flex wrap="wrap" justify="center" mb={10}>
          <Box p={5} boxShadow="md" borderRadius="lg" m={2}>
            <FaRocket size="3em" />
            <Heading size="md" mt={3}>Fast Integration</Heading>
            <Text mt={2}>Integrate AI capabilities into your projects swiftly.</Text>
          </Box>
          <Box p={5} boxShadow="md" borderRadius="lg" m={2}>
            <FaUsers size="3em" />
            <Heading size="md" mt={3}>User Friendly</Heading>
            <Text mt={2}>Designed with the end-user in mind for a seamless experience.</Text>
          </Box>
        </Flex>
        <VStack spacing={4} mb={10}>
          <Heading size="lg">Testimonials</Heading>
          <Text>"Using GPT Engineer has tripled our development speed!" - Tech Co.</Text>
          <Text>"Absolutely essential for any tech project." - Startup Inc.</Text>
        </VStack>
        <Box boxShadow="md" p={5} borderRadius="lg">
          <Heading mb={4}>Contact Us</Heading>
          <VStack spacing={3}>
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" />
            <Textarea placeholder="Your Message" />
            <Button rightIcon={<FaEnvelope />} colorScheme="blue">Send Message</Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;