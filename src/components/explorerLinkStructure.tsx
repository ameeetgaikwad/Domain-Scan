import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { log } from "console";

interface Props {
  explorerName: string;
  mainExplorerLink: string;
  logo: string;
}

function ExplorerLinkStructure({
  explorerName,
  mainExplorerLink,
  logo,
}: Props) {
  // Component logic here
  function formatLink(link: string): string {
    return `https://${link.slice(8).replaceAll("/", " > ")}`;
  }
  return (
    <Heading fontSize={22} fontWeight={"medium"} marginTop={4} marginBottom={8}>
      <Link target="blank" href={mainExplorerLink}>
        <Text _hover={{ textDecoration: "underline" }} marginBottom={1}>
          {explorerName}
        </Text>
        <Box display={"flex"} flexDirection={"row"}>
          <Image src={logo || ""} width={16} height={16} alt="logo" />
          <Text paddingLeft={1} fontSize={12} color={"gray"}>
            {formatLink(mainExplorerLink)}
          </Text>
        </Box>
      </Link>
    </Heading>
  );
}

export default ExplorerLinkStructure;
