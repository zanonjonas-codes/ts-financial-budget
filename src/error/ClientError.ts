// Rever isso aqui, tá estranho

const clientError = {
  USER_EMAIL_ALREADY_EXISTS: {
    displayMessage: 'Email already in use',
  },
}

export type ClientErrorNames = keyof typeof clientError

export class ClientError {
  name: ClientErrorNames
  displayMessage: string

  constructor({ name }: { name: ClientErrorNames }) {
    const displayMessage = clientError[name].displayMessage

    this.name = name
    this.displayMessage = displayMessage

    Object.setPrototypeOf(this, ClientError.prototype)
  }

  toObject(): { name: string; displayMessage: string } {
    return {
      name: this.name,
      displayMessage: this.displayMessage,
    }
  }
}
