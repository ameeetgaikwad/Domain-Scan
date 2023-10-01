import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchBar";

import { SupportedChains } from "sow-sdk/dist/types";
import { useRouter } from "next/router";
export default function Nav() {
  const router = useRouter();
  const { query } = router;

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
        <Divider paddingTop={4} />
      </Box>
    </>
  );
}
