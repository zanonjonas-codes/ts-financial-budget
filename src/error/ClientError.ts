import { ActionResponse } from '@/actions/ActionReponse'

export const clientError = {
  USER_EMAIL_ALREADY_EXISTS: {
    displayMessage: 'Email already in use',
  },
  USER_ALREADY_REGISTERED_WITH_THIS_OAUTH_PROVIDER: {
    displayMessage:
      'User already registered with this outh provider. Signing in...',
  },
  USER_ALREADY_REGISTER_WITH_OTHER_AUTH_METHOD: {
    displayMessage:
      'User already registered using another authentication method. Signing out...',
  },
}

export type ClientErrorNames = keyof typeof clientError

export class ClientError {
  errorName: ClientErrorNames
  displayMessage: string

  constructor({ errorName }: { errorName: ClientErrorNames }) {
    const displayMessage = clientError[errorName].displayMessage

    this.errorName = errorName
    this.displayMessage = displayMessage

    Object.setPrototypeOf(this, ClientError.prototype)
  }

  toActionResponse(): ActionResponse {
    return {
      isError: true,
      errorName: this.errorName,
      displayErrorMessage: this.displayMessage,
    }
  }
}
