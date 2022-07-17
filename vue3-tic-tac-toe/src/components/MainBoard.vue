<script>
import { computed, ref } from 'vue'
export default {
  name: 'MainBoard',
  props: {
    msg: String
  },
  setup () {
    const turn = ref('X') // our initial player and piece
    console.log('setup called')
    const squares = ref([])
    squares.value = Array(9).fill('')
    console.log('squares' + squares.value)
    // check 4 winner evertime board updates
    const winner = computed(() => checkForWinner(squares.value.flat()))
    function checkForWinner (value) {
      console.log('inside checkForWinner value: ' + value)
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // horizontal wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // vertical wins
        [0, 4, 8],
        [2, 4, 6] // cross wins
      ]
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (
          value[a] &&
          value[a] === value[b] &&
          value[a] === value[c]
        ) {
          return value[a]
        }
      }
      return null
    }
    function takeTurn (n) {
      // this is where we identify our players
      console.log('takeTurn value: ' + n)
      // did this move win? exit this function
      if (winner.value) {
        console.log('inside if winner value: ' + winner.value)
        return
      }
      // current player takes a turn...value is assigned board position
      squares.value[n] = turn.value
      // flip player
      turn.value = turn.value === 'X' ? 'O' : 'X'
      console.log('player: ' + turn.value)
      // do other things
    }
    function reset () {
      console.log('reset called: ')
      squares.value = Array(9).fill('')
    }
    return { squares, takeTurn, winner, turn, reset }
  }
}
// Psuedo Code it
// What does a tic tac toe game need?
//
// - Blank board - Done
// - Players - Done
// - Piece names (X / O ) - Done
// - Take turns - Done
// - Check 4 Winnner - Done
// - Check 4 Tie Game
// - Play Game - Done
// - resetBoard
// - ------
// - History of wins
// - AI - special feature
// - Look cool

</script>

<template>
  <h2>{{msg}}</h2>
  <h2 v-if="winner">WINNER: {{ winner }}</h2>
  <h2 v-else>Player Move: {{ turn }}</h2>
  <div id="board">
    <div class="square" v-for="(square, index) in squares" :key="index" @click="takeTurn(index)">
      {{ square }}
    </div>
  </div>
  <button @click="reset">
    Reset
  </button>
</template>

<style scoped>
button {
  margin-top: 6.7rem;
}

#board {
  display: flex;
  height: 315px;
  width: 315px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

.square {
  background: #fff;
  border: 1px solid #999;
  font-size: 70px;
  font-weight: bold;
  height: 100px;
  width: 100px;
  text-align: center;
  padding-top: 2rem;
}
</style>
