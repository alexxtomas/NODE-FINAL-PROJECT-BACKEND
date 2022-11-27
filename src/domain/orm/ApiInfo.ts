import jsonPackage from '../../../package.json' assert { type: 'json' }
export const get = () => {
  const { version, name, author, description } = jsonPackage
  return { version, name, author, description }
}
