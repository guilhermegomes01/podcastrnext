import React from "react";
import { Box, Heading, List } from "@chakra-ui/react";

import { Episode } from "../../../pages";
import LatestEpisode from "../../molecules/LatestEpisode";

type LatestEpisodesViewProps = {
  latestEpisodes: Episode[];
};

const LatestEpisodesView = ({ latestEpisodes }: LatestEpisodesViewProps) => {
  return (
    <Box as="section">
      <Heading mt="12" mb="6" as="h2" fontSize="2xl" color="gray.800">
        Últimos lançamentos
      </Heading>

      <List display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap="6">
        {latestEpisodes.map((episode) => (
          <LatestEpisode key={episode.id} episode={episode} />
        ))}
      </List>
    </Box>
  );
};

export default LatestEpisodesView;
