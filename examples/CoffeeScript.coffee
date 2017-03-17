React = require 'react'

{areCannonsReady} = require './x-wing-arsenal'

c1code = /\hbzzz-brrr$/

foo = -> 'baz'
foo = (src, done, rest...) =>
  console.log src
  done()

c1p8 =
  openDoor: ->
    firstCombination =
      bzzz: 's32d2321ds'
      tzzz: 124432

    secondCombination =
      bzzz: 'ajkla2d1'
      tzzz: 999323

    Object.assign firstCombination, secondCombination

class Jedi extends React.Component
  ###*
   * These aren't the droids you're looking for.
   * @type {Array}
  ###
  @droids = ['R2-D2', 'C-3PO']

  constructor: (name) ->
    super name

    @name = name

  sayHi: ->
    console.log "Help me #{@name}..."

  askKenobi: ->
    if @isBlindFolded()
      return @useTheForceLuke()
    @searchFeelings()

switch object
  when value
    # body...

module.exports = 'wooot'
