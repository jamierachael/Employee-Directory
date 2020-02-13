import React from 'react';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
import TableArea from './components/TableArea';
import TableData from './components/TableData';
import TableHeader from './components/TableHeader';


function App() {
  return (
    <div>

      <PageHeader />
      <SearchBar />
      <TableArea>
        <TableHeader />
        <TableData />
      </TableArea>
    </div>
    // </div>
  );
}

export default App;
