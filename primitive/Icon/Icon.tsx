import { FaTimes } from "react-icons/fa";

export interface Props {
  name: 'delete'
  size?: number
}

const MAPPER = {
  'delete': FaTimes
}

const Icon = ({ name, size }: Props) => {
  const Component = MAPPER[name]

  return <Component size={size} />
}

export default Icon