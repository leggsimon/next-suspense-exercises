import React from 'react';

import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCard from '@/components/LibraryGameCard';
import LibraryHeader from '@/components/LibraryHeader';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import GameGrid from '@/components/GameGrid';

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  const games = await getGamesInLibrary();

  return (
    <MaxWidthWrapper>
      <LibraryHeader>
        <h1>My games</h1>
        <p>
          <span className='num-of-games'>{games.length}</span> games in library
        </p>
      </LibraryHeader>
      <GameGrid>
        {games.map((game) => (
          <LibraryGameCard key={game.slug} game={game} />
        ))}
      </GameGrid>
    </MaxWidthWrapper>
  );
}

export default VaporExercise;
