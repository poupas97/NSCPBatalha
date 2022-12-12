import * as Icons from "react-icons/fa";

export interface Props {
  name: 'delete' | 'cart' | 'user' | 'edit'
  size?: number
}

const MAPPER = {
  delete: Icons.FaTimes,
  cart: Icons.FaShoppingCart,
  user: Icons.FaUser,
  edit: Icons.FaPen
}

const Icon = ({ name, size = 20 }: Props) => {
  const Component = MAPPER[name]

  return <Component size={size} />
}

export default Icon