import bcrypt from 'bcrypt'

const encrypt = async (password: string): Promise<string> =>
  await bcrypt.hash(password, 10)

const compare = async (password: string, receivedPassword: string) =>
  await bcrypt.compare(password, receivedPassword)

export default { encrypt, compare }
