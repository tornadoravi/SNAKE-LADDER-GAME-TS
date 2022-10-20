import React from 'react'
import './props.css'
interface propsElements{
  id:string,
  className:string,
  cellNUM:number,
  splCel:string|number,
  players:Iplayersdata
}
interface Iplayersdata{
  Player1:string,
  Player2:string,
}
const PlayersFunction = (prop:propsElements) => {
  let playerCoins = prop.players
  let player1Coin;
  let player2Coin;
  if (playerCoins.Player1=== 'in') {
    player1Coin = <span className='move coins1'>💠</span>
  }
  if (playerCoins.Player2=== 'in') {
    player2Coin = <span className='move coins2'>🔘</span>
  }
  return (
    <div className='props'>
      <div id={prop.id} className={prop.className}>
        <h1 className='numtitle'>{prop.cellNUM}</h1>
        {player1Coin}
        {player2Coin }
        <p className='splcelicons'>{prop.splCel}</p>
      </div>
    </div>
  )
}
export default PlayersFunction