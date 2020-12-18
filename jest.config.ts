import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/*.steps.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx']
}

export default config
