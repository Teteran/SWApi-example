import React, { useEffect, useState, useCallback, useReducer } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { Screen, Card, Button } from '../components';
import { swApi } from '../apis';
import { Avatar, Text } from 'react-native-paper';
import { Player } from './../models/player';

interface BattleState {
  leftPlayer: Player;
  rightPlayer: Player;
  winner: number | undefined;
}

type ActionType = {
  type: 'battle';
  leftPlayer: Player;
  rightPlayer: Player;
};

const initialState: BattleState = {
  leftPlayer: {
    id: 0,
    score: 0,
  },
  rightPlayer: {
    id: 1,
    score: 0,
  },
  winner: undefined,
};

export function reducer(state: BattleState, action: ActionType) {
  switch (action.type) {
    case 'battle':
      const leftPlayerCard = action.leftPlayer.card;
      const rightPlayerCard = action.rightPlayer.card;
      let winner: number | undefined;

      state.leftPlayer.card = leftPlayerCard;
      state.rightPlayer.card = rightPlayerCard;

      if (parseInt(leftPlayerCard?.mass) > parseInt(rightPlayerCard?.mass)) {
        winner = state.leftPlayer.id;
        state.leftPlayer.score = state.leftPlayer.score + 1;
      } else if (
        parseInt(rightPlayerCard?.mass) > parseInt(leftPlayerCard?.mass)
      ) {
        winner = state.rightPlayer.id;
        state.rightPlayer.score = state.rightPlayer.score + 1;
      }

      return { ...state, winner };
    default:
      return state;
  }
}

export function BattleGround() {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFighters = useCallback(() => {
    setLoading(true);
    axios
      .all([
        swApi.getPerson(Math.floor(Math.random() * 10 + 1)),
        swApi.getPerson(Math.floor(Math.random() * 10 + 1)),
      ])
      .then(
        axios.spread((leftPlayerCard, rightPlayerCard) => {
          dispatch({
            type: 'battle',
            leftPlayer: { ...state.leftPlayer, card: leftPlayerCard },
            rightPlayer: { ...state.rightPlayer, card: rightPlayerCard },
          });
        }),
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchFighters();
  }, [fetchFighters]);

  const { leftPlayer, rightPlayer, winner } = state;
  return (
    <Screen>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Card name={leftPlayer?.card?.name} mass={leftPlayer?.card?.mass}>
            <Text>score:{leftPlayer?.score}</Text>
          </Card>
          <Avatar.Icon size={56} icon={isLoading ? 'reload' : 'sword-cross'} />
          <Card name={rightPlayer?.card?.name} mass={rightPlayer?.card?.mass}>
            <Text>score:{rightPlayer?.score}</Text>
          </Card>
        </View>

        <Button title="Fight Again" mode="contained" onPress={fetchFighters} />
      </View>
    </Screen>
  );
}
