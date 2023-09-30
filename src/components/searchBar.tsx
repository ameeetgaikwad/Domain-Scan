import { Button, Input, InputGroup, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { GlobalContext } from "@/context/context";
import { SoWsdk } from "sow-sdk";
import { useRouter } from "next/router";

export default function SearchBar() {
  const { userAddress, setUserAddress, setLoading } = useContext(GlobalContext);
  const router = useRouter();

  const searchAddress = async () => {
    setLoading(true);
    const sow = new SoWsdk();
    sow
      .resolveAddress(userAddress)
      .then((res) => {
        console.log(res);
        router.push(`/address/${res}`);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <>
      <Box width={"60%"} display={"flex"}>
        <InputGroup width={"100%"} marginRight={"2px"}>
          <Input
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            placeholder="amit.eth"
            borderRightRadius={"0px"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchAddress();
              }
            }}
          />
        </InputGroup>
        <Button
          borderRightRadius={"5px"}
          borderLeftRadius={"0px"}
          onClick={searchAddress}
        >
          <SearchIcon />
        </Button>
      </Box>
    </>
  );
}
