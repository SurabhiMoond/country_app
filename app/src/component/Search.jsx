import { Button, Input } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

export const Search = () => {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const ref = useRef();

  const handleSearch = () => {
  ref.current.focus();
  };

  return (
    <div style={{width:'350px', marginLeft:'30%', display:'flex'}}>
      <Input ref={ref} value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};