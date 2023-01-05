import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Badge, Box, Button, Grid, Heading } from '@chakra-ui/react';
import { Die } from './die';

export const Dice = () => {
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 12; i += 1) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [bestRoll, setBestRoll] = useState(parseInt(localStorage.getItem('bestRoll')!, 10) || 0);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  useEffect(() => {
    localStorage.setItem('bestRoll', bestRoll.toString());
  }, [bestRoll]);

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setRolls((oldRolls) => oldRolls + 1);
    } else {
      setTenzies(false);

      if (!bestRoll || rolls < bestRoll) {
        setBestRoll(rolls);
      }

      setDice(allNewDice());
      setRolls(0);
    }
  }

  function holdDice(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  ));

  return (
    <Box pt={5}>
      <Heading size="md" mb={2}>
        Roll until all dice are the same. Click each die to freeze it at its current value between
        rolls.
      </Heading>
      <Box mb={2}>
        <Badge colorScheme="green" fontSize={window.innerWidth < 500 ? 'sm' : 'lg'} mb={1} w="full">
          Rolls: {rolls}
        </Badge>
        {bestRoll ? (
          <Badge colorScheme="red" fontSize={window.innerWidth < 500 ? 'sm' : 'lg'} mb={1} w="full">
            Best: {bestRoll}
          </Badge>
        ) : null}
      </Box>
      <Grid
        gap={2}
        mb={2}
        templateRows={`repeat(3, ${window.innerWidth > 500 ? 110 : 62}px)`}
        templateColumns={`repeat(4, ${window.innerWidth > 500 ? 110 : 62}px)`}
      >
        {diceElements}
      </Grid>
      <Button onClick={() => rollDice()} w="full" mb={4}>
        {tenzies ? 'New Game' : 'Roll'}
      </Button>
    </Box>
  );
};
