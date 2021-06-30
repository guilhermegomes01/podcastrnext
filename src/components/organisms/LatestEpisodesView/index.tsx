import React from 'react'
import { Box, Heading, List } from '@chakra-ui/react';

import { Episode } from '../../../pages';
import LatestEpisode from '../../molecules/LatestEpisode';

type LatestEpisodesViewProps = {
    latestEpisodes: Episode[];
}

const LatestEpisodesView = ({ latestEpisodes }: LatestEpisodesViewProps) => {
    return (
        <Box as="section">
            <Heading as="h2">Últimos lançamentos</Heading>

            <List>
                {latestEpisodes.map(episode => (
                    <LatestEpisode key={episode.id} episode={episode} />
                ))}
            </List>
        </Box>
    )
}

export default LatestEpisodesView;