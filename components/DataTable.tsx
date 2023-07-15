import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useState } from 'react';

type DataTableProps = {
    header: string[];
    caption?: string;
    sorting?: boolean;
    pagination?: boolean;
    data: Record<string, any>[]; // Use Record<string, any>[] for the data type
  };
  

const DataTable: React.FC<DataTableProps> = ({
  header,
  caption,
  sorting,
  pagination,
  data,
}) => {
  const [sortedData, setSortedData] = useState([...data]); // State to track sorted data
  const [sortAscending, setSortAscending] = useState(true); // State to track sort order

  const handleSort = () => {
    const newSortOrder = !sortAscending;
    setSortAscending(newSortOrder);

    const sorted = [...sortedData].sort((a, b) => {
      if (newSortOrder) {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });

    setSortedData(sorted);
  };

  return (
    <Table variant="striped" colorScheme="gray">
      {caption && <caption>{caption}</caption>}
      <Thead>
        <Tr>
          {header.map((column, index) => (
            <Th key={index} onClick={sorting ? handleSort : undefined}>
              {column}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {sortedData.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <Td key={cellIndex}>{cell}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DataTable;
