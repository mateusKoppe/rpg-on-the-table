import simpleMelee from './simpleMelee'
import simpleRanged from './simpleRanged'
import martialMelee from './martialMelee'
import martialRanged from './martialRanged'

export default {
  ...simpleMelee,
  ...simpleRanged,
  ...martialMelee,
  ...martialRanged
}
