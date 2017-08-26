/* @flow */
import 'jest'

import { sum } from '../src/sum'

describe('increment', () => {
  test('should sum', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
