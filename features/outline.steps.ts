import { defineFeature, loadFeature } from 'jest-cucumber'
import { isLeft } from 'fp-ts/lib/Either'

import { isUsableEmail } from '../src/domains/email/lib/email_verification.lib'

const feature = loadFeature('./features/outline.feature', {
  scenarioNameTemplate: vars => {
    return `${vars.scenarioTitle} (${vars.scenarioTags.join(',')})`
  }
})

defineFeature(feature, test => {
  test('Check email is usable', ({ when, then }) => {
    let currentEmail: string

    when(/^we have to check this email: (.*)$/, email => {
      currentEmail = email
    })

    then(/^the result should be (.*)$/, async result => {
      const usableRes = await isUsableEmail(currentEmail)

      if (isLeft(usableRes)) throw new Error(usableRes.left.message)
      expect(usableRes.right.toString()).toEqual(result)
    })
  })
})
