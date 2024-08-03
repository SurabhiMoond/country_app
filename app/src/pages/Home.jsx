import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsonUrls } from "../../apiUrl/url";
import { Box, Card, Image, Heading, Text } from "@chakra-ui/react";
import { Search } from "../component/Search";

export const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
useEffect(() =>{
const fetchData = async () =>{
  try{
    const res = await axios.get(jsonUrls.data);
    setData(res.data);
    } catch (err){
      setError("Error.....");
    }
  };
  fetchData();
  }, []);

  return (
    <>
    <Search/>
    <Box display="grid" gridTemplateColumns={'1fr 1fr 1fr 1fr'} justifyContent="center">
      {data.map((item, id) => (
        <Card key={id} maxW={"sm"} m={"10"} bg={"gray.100"} boxShadow={"md"} align={'center'} pb={'10px'} >
          <div >
            <Image src={item.flagURL} />
          </div>
          <Heading size="md" m="5">
            {item.countryName}
          </Heading>
          <Text>Capital: {item.capital}</Text>
          <Text>CurrencyCode: {item.currencyCode}</Text>
          <Text>Languages: {item.languages.join(", ")}</Text>
        </Card>
      ))}
    </Box>
    </>
  );
};
