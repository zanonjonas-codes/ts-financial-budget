import * as zod from 'zod'

const customErrorMap: zod.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case zod.ZodIssueCode.too_small:
      return { message: `${issue.path} ${issue.minimum} charater(s) min` }
    default:
      return { message: ctx.defaultError }
  }
}

zod.setErrorMap(customErrorMap)

export const z = { ...zod }
