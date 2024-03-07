import React from 'react';

import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCard from '@/components/LibraryGameCard';
import LibraryHeader from '@/components/LibraryHeader';

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  const games = await getGamesInLibrary();

  return (
    <section className='max-width-wrapper'>
      <LibraryHeader>
        <h1>My games</h1>
        <p>
          <span className='num-of-games'>{games.length}</span> games in library
        </p>
      </LibraryHeader>
      <div className='game-grid'>
        {games.map((game) => (
          <LibraryGameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
