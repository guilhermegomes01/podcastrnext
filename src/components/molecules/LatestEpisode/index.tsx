import React from "react";
import Image from "next/image";

import { Box, IconButton, Link, ListItem, Text } from "@chakra-ui/react";
import { IoPlay } from "react-icons/io5";
import { Episode } from "../../../pages";

type LatestEpisodeProps = {
  episode: Episode;
};

const spanStyles = {
  display: "inline-block",
  mt: "2",
  fontSize: "sm",
};

const LatestEpisode = ({
  episode: {
    members,
    duration,
    publishedAt,
    thumbnail,
    title,
    url,
  },
}: LatestEpisodeProps) => (
  <ListItem
    bg="white"
    border="1px solid"
    borderColor="gray.100"
    p="5"
    borderRadius="2xl"
    position="relative"
    display="flex"
    alignItems="center"
  >
    <Box boxSize="28">
      <Image
        width={192}
        height={192}
        src={thumbnail}
        alt={title}
        objectFit="cover"
      />
    </Box>

    <Box flex="1" ml="4" className="episodeDetails">
      <Link
        color="gray.800"
        fontFamily="Lexend, sans-serif"
        fontWeight="semibold"
        lineHeight="6"
        href={url}
      >
        {title}
      </Link>
      <Text mt="2" maxW="70%" fontSize="sm" isTruncated>
        {members}
      </Text>
      <Text
        as="span"
        mr="2"
        pr="2"
        position="relative"
        _after={{
          content: '""',
          boxSize: "4px",
          borderRadius: "50%",
          background: "gray.100",
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: "translate(50%, -25%)"
        }}
        {...spanStyles}
      >
        {publishedAt}
      </Text>
      <Text as="span" {...spanStyles}>
        {duration}
      </Text>
    </Box>

    <IconButton
      aria-label="Tocar episódio"
      icon={<IoPlay />}
      color="green"
      variant="outline"
      position="absolute"
      right="8"
      bottom="8"
      borderColor="gray.100"
      borderRadius="xl"
    />
  </ListItem>
);

export default LatestEpisode;
