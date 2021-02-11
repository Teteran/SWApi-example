import { reducer } from './../battleground-screen';
import { Player } from '../../models';

it('win battle increment score for the winner', () => {
  const initialState = state;
  const dispatchAction = ({
    type: 'battle',
    leftPlayer: { id: 0, score: 0, card: { name: 'PlayerA', mass: 100 } },
    rightPlayer: { id: 1, score: 0, card: { name: 'PlayerB', mass: 200 } },
  } as unknown) as ActionType;

  const updatedState = reducer(initialState, dispatchAction);

  expect(state.leftPlayer.score).toEqual(updatedState.leftPlayer.score);
  expect(updatedState.rightPlayer).toEqual(state.rightPlayer.score);
});

type ActionType = {
  type: 'battle';
  leftPlayer: Player;
  rightPlayer: Player;
};

interface BattleState {
  leftPlayer: Player;
  rightPlayer: Player;
  winner: number | undefined;
}

const state: BattleState = {
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
