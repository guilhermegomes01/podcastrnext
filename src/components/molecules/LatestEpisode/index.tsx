import React from "react";
import Image from 'next/image'

import { Box, IconButton, Link, ListItem, Text } from "@chakra-ui/react";
import { IoPlay } from "react-icons/io5";
import { Episode } from "../../../pages";

type LatestEpisodeProps = {
  episode: Episode;
};

const LatestEpisode = ({
  episode: {
    members,
    description,
    duration,
    publishedAt,
    thumbnail,
    title,
    url,
  },
}: LatestEpisodeProps) => (
  <ListItem>
    <Image width={192} height={192} src={thumbnail} alt={title} objectFit="cover" />

    <Box>
      <Link href={url}>{title}</Link>
      <Text>{members}</Text>
      <Text>{publishedAt}</Text>
      <Text>{duration}</Text>
    </Box>

    <IconButton
      aria-label="Tocar episódio"
      icon={<IoPlay />}
      colorScheme="whatsapp"
      variant="outline"
    />
  </ListItem>
);

export default LatestEpisode;
