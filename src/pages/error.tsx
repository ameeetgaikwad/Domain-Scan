import Nav from "@/components/Nav";
import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "@/context/context";
export default function ErrorPage() {
  const { userDomain } = useContext(GlobalContext);
  return (
    <>
      <Nav />
      <Box display={"flex"} marginX={36} marginTop={8}>
        Your search-&nbsp;<Text fontWeight={500}>{userDomain}&nbsp;</Text> did
        not resolve any address.
      </Box>
    </>
  );
}
