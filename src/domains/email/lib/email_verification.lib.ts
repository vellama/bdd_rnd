import { Either, isLeft, left, right } from 'fp-ts/Either'
import validator from 'validator'

export const isEmailFormatValid = (email: string): Either<Error, boolean> => {
  try {
    const isEmail = validator.isEmail(email)
    return right(isEmail)
  } catch (e) {
    return left(new Error(`error in isEmailFormatValid ${e}`))
  }
}

export const isEmailCallable = async (
  email: string
): Promise<Either<Error, boolean>> => {
  try {
    if (email.indexOf('can.call') > -1) return right(true)
    return right(false)
  } catch (e) {
    return left(new Error(`error in isEmailCallable ${e}`))
  }
}

export const isUsableEmail = async (
  email: string
): Promise<Either<Error, boolean>> => {
  try {
    const formatRes = isEmailFormatValid(email)
    if (isLeft(formatRes)) throw formatRes.left

    const callableRes = await isEmailCallable(email)
    if (isLeft(callableRes)) throw callableRes.left

    return callableRes
  } catch (e) {
    return left(new Error(`error in isUsableEmail ${e}`))
  }
}
