import { clientError } from "@/error/ClientError"

export type ActionResponse = {
  isError: boolean
  data?: Record<string, unknown>
  errorName?: keyof typeof clientError
  displayErrorMessage?: string
}
