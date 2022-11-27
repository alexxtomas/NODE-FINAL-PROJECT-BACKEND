type ServerResponse = (
  status: string,
  errorCode: string,
  message: string,
  data: string
) => {
  status: string
  info: Record<string, string>
}

export const ResponseService: ServerResponse = (
  status,
  errorCode,
  message,
  data
) => {
  return {
    status,
    info: {
      errorCode,
      message,
      data
    }
  }
}
