import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchBar";
export default function Nav() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          paddingBottom={"5px"}
          marginTop={4}
          marginLeft={4}
        >
          <Image src="/logo2.png" width={30} height={30} alt="logo" />
          <Heading
            display={"flex"}
            justifyContent={"center"}
            fontFamily={"sans-serif"}
            fontSize={24}
          >
            <Link href={"/"}>DomainScan</Link>
          </Heading>
          <Box
            paddingLeft={4}
            display={"flex"}
            alignItems={"center"}
            width={"50%"}
          >
            <SearchBar />
          </Box>
        </Box>
      </Box>
    </>
  );
}
