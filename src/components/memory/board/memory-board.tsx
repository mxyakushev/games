import React, { useState } from 'react';
import { Badge, Box, Grid, Image } from '@chakra-ui/react';
import { memesArray } from '../assets';

export const MemoryBoard = () => {
  const shuffledArray = [...memesArray, ...memesArray].sort(() => 0.5 - Math.random());
  const [cards, setCards] = useState(shuffledArray);
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<number[]>([]);
  const [clicks, setClicks] = useState(0);
  const [won, setWon] = useState(false);

  function flipCard(index: number) {
    setClicks(clicks + 1);
    if (won) {
      setClicks(0);
      setCards([...memesArray, ...memesArray].sort(() => 0.5 - Math.random()));
      setFoundPairs([]);
      setWon(false);
    }
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      if (cards[firstIndex] === cards[secondsIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon(true);
        }
        setFoundPairs([...foundPairs, firstIndex, secondsIndex]);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
  }

  return (
    <Box pt={5}>
      <Box>
        <Badge colorScheme="red" fontSize={window.innerWidth < 500 ? 'sm' : 'lg'} mb={1} w="full">
          Clicks: {clicks}
        </Badge>
        <Badge colorScheme="green" fontSize={window.innerWidth < 500 ? 'sm' : 'lg'} mb={4} w="full">
          Found pairs: {foundPairs.length / 2}
        </Badge>
      </Box>
      <Grid
        templateRows={window.innerWidth > 560 ? 'repeat(4, 110px)' : 'repeat(4, 80px)'}
        templateColumns={window.innerWidth > 560 ? 'repeat(4, 110px)' : 'repeat(4, 60px)'}
        gap={2}
        mb={2}
      >
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 || foundPairs.indexOf(index) !== -1;
          return (
            <Box
              key={Math.random()}
              backgroundColor="#171923"
              borderRadius={10}
              overflow="hidden"
              onClick={() => flipCard(index)}
            >
              <Box>
                <Box visibility={flippedToFront ? 'visible' : 'hidden'}>
                  <Image
                    src={card}
                    height={window.innerWidth > 560 ? '110px' : '80px'}
                    objectFit="cover"
                  />
                </Box>
                <Box />
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
