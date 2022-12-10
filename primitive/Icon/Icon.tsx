import * as Icons from "react-icons/fa";

export interface Props {
  name: 'delete' | 'cart' | 'user'
  size?: number
}

const MAPPER = {
  delete: Icons.FaTimes,
  cart: Icons.FaShoppingCart,
  user: Icons.FaUser,
}

const Icon = ({ name, size = 20 }: Props) => {
  const Component = MAPPER[name]

  return <Component size={size} />
}

export default Icon