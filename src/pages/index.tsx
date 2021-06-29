import React from "react";
import { GetStaticProps } from "next";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import api from "../services/api";
import convertDurationToTimeString from "../utils/convertDurationToTimeString";

type Episode = {
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
  episodes: Episode[];
};

export default function Home({ episodes }: HomeProps) {
  return episodes.map((episode) => (
    <div key={episode.id}>
      <div>{episode.title}</div>
      <hr />
    </div>
  ));
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

  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 24,
  };
};
