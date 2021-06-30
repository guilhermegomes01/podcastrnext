import React from "react";
import { GetStaticProps } from "next";
import { Box } from "@chakra-ui/react";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import api from "../services/api";
import convertDurationToTimeString from "../utils/convertDurationToTimeString";

import LatestEpisodesView from "../components/organisms/LatestEpisodesView";
import AllEpisodesView from "../components/organisms/AllEpisodesView";

export type Episode = {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  description: string;
  url: string;
};

type HomeProps = {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
};

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  return (
    <Box>
      <LatestEpisodesView latestEpisodes={latestEpisodes} />
      <AllEpisodesView />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _order: "",
      _sort: "desc",
    },
  });

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      duration: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 24,
  };
};
