import { Tarkov } from './tarkov'

const hwid = 'NOT_A_REAL_HWID'

describe('Tarkov', () => {
  it('should init', () => {
    expect(() => new Tarkov(hwid)).not.toThrow()
  })
})
