// TODO: Ver se isso precisa existir

const businessError = {
  USER_EMAIL_ALREADY_EXISTS: {
    message: 'Email already exists',
    displayMessage: 'Email already in use',
  },
}

export type BusinessErrorNames = keyof typeof businessError

export class BusinessError extends Error {
  name: BusinessErrorNames
  displayMessage: string
  cause?: unknown

  constructor({ name, cause }: { name: BusinessErrorNames; cause?: unknown }) {
    const message = businessError[name].message
    const displayMessage = businessError[name].displayMessage

    super(message)
    this.name = name
    this.message = message
    this.displayMessage = displayMessage
    this.cause = cause

    Object.setPrototypeOf(this, BusinessError.prototype)
  }
}
