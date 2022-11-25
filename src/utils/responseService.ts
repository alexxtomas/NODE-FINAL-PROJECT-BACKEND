type ServerResponse = (
  status: string,
  errorCode: string,
  message: string,
  data: string
) => Promise<{
  status: string
  info: Record<string, string>
}>

const ResponseService: ServerResponse = async (
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

module.exports = ResponseService
