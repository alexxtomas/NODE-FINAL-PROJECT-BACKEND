import { Color } from './color'

type Log = (msg: string) => void

const Success: Log = (msg) => {
  console.log(Color.GREEN, msg)
}
const Info: Log = (msg) => {
  console.log(Color.CYAN, msg)
}
const Warning: Log = (msg) => {
  console.log(Color.YELLOW, msg)
}
const Danger: Log = (msg) => {
  console.log(Color.RED, msg)
}

export { Danger, Info, Warning, Success }
