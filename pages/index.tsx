import { Box } from '@chakra-ui/react';
import DataTable from '../my-datatable-app/components/DataTable';
import { ChakraProvider } from '@chakra-ui/react';
//import DataTable from './DataTable';

const data = [
  // Sample data
  { name: 'John Doe', age: 25, email: 'john@example.com' },
  { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  // Add more data rows as needed
];

const IndexPage: React.FC = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        <DataTable
          header={['Name', 'Age', 'Email']} // Example header values
          caption="Latest Bookings"
          sorting
          pagination
          data={data}
        />
      </Box>
    </ChakraProvider>
  );
};

export default IndexPage;
