import { defineFeature, loadFeature } from 'jest-cucumber'
import { isLeft } from 'fp-ts/lib/Either'

import { isEmailFormatValid } from '../src/domains/email/lib/email_verification.lib'

const feature = loadFeature('./features/simple.feature', {
  scenarioNameTemplate: vars => {
    return `${vars.scenarioTitle} (${vars.scenarioTags.join(',')})`
  }
})

defineFeature(feature, test => {
  test('Entering a bad formatted email', ({ when, then }) => {
    let userEmail: string
    let emailVerificationResult: boolean

    when('A customer enters a bad formatted email', () => {
      userEmail = 'veryBad.formatted.email'
    })

    then('The result is false', () => {
      const res = isEmailFormatValid(userEmail)
      if (isLeft(res)) {
        throw res.left
      }
      emailVerificationResult = res.right

      expect(emailVerificationResult).toBeFalsy()
    })
  })

  test('Entering a right formatted email', ({ when, then }) => {
    let userEmail: string
    let emailVerificationResult: boolean

    when('A customer enters a right formatted email', () => {
      userEmail = 'contact@gmail.com'
    })

    then('The result is true', () => {
      const res = isEmailFormatValid(userEmail)
      if (isLeft(res)) {
        throw new Error('email format validation fails')
      }
      emailVerificationResult = res.right

      expect(emailVerificationResult).toBeTruthy()
    })
  })
})
