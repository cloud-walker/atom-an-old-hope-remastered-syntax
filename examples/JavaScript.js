import React, {Component} from 'react'

import {areCannonsReady} from './x-wing-arsenal'

let Endor
var Lasers

const c1code = /\hbzzz-brrr$/

const foo = function bar() {
  return 'baz'
}

function foo(str, done) {
  console.log(str)

  done()
}

async function foo () {
  return 'bar'
}

const xWing = async () => {
  await areCannonsReady()

  console.log('x-wing firing')
}

const c1p8 = {
  openDoor: () => {
    const firstCombination = {
      bzzz: 's32d2321ds',
      tzzz: 124432,
    }

    const secondCombination = {
      bzzz: 'ajkla2d1',
      tzzz: 999323,
    }

    return {
      ...firstCombination,
      ...secondCombination,
    }
  }
}

/**
 * DeathStar component
 *
 * @param {Object} children
 */
const DeathStar = ({children}) => {
  const active = children && !!Math.random() * 0.5

  return (
    <main>
      <section
        className="airstrip"
        style={{background: active ? 'white' : 'black'}}
      >
        <ul className="ships">
          <li className="ship"></li>
          <li className="ship"></li>
          <li className="ship"></li>
          <li className="ship"></li>
          <li className="ship"></li>
        </ul>
      </section>
      {children}
    </main>
  )
}

class Jedi extends Component {
  /**
   * These aren't the droids you're looking for.
   *
   * @type {Array}
   */
  static droids = [
    'R2-D2',
    'C-3PO'
  ]

  constructor(name) {
    super(name)

    this.name = name
  }

  sayHi() {
    console.log(`Help me ${this.name}...`)
  }

  /**
   * Ask Ben for advice.
   *
   * @return {String}
   */
  askKenobi() {
    if (this.isBlindFolded()) {
      return this.useTheForceLuke()
    }

    this.searchFeelings()
  }

  /**
   * Rendering battlefield.
   *
   * @return {Object}
   */
  render() {
    return (
      <div className="battlefield">
        <button>Avoid the dark side</button>

        <DeathStar>
          <button>Use the force {this.props.name}</button>
        </DeathStar>
      </div>
    )
  }
}

while (true) {

}

for (var i = 0; i < array.length; i++) {
  array[i]
}

switch (expression) {
  case expression:

    break;
  default:

}

export default async () => Jedi

export default ({
  Yoda,
  Luke,
}) => {
  return `${Luke} brings ${Yoda} on his shoulders.`
}

module.exports = 'wooot'
