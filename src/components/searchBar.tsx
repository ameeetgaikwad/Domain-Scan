import { Button, Input, InputGroup, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { GlobalContext } from "@/context/context";
import { SoWsdk } from "sow-sdk";
import { useRouter } from "next/router";
import { detectNameService } from "sow-sdk/dist/utils/detectNameService";

export default function SearchBar() {
  const { userDomain, setUserDomain, setLoading, setChain } =
    useContext(GlobalContext);
  const router = useRouter();

  const searchAddress = () => {
    setLoading(true);
    const sow = new SoWsdk();
    sow
      .resolveAddress(userDomain)
      .then((res) => {
        console.log(res);
        if (res == null) {
          router.push("/error");
          return;
        }
        detectNameService(userDomain)
          .then((chainNumber) => {
            console.log("chainno", chainNumber);
            setChain(chainNumber);
          })
          .catch((error) => {
            console.log("errer", error);
          });

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
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
            placeholder="galvin.eth"
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
