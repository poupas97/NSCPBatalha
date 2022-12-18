import * as Icons from "react-icons/fa";

export interface Props {
  name: 'delete' | 'cart' | 'user' | 'edit' | 'menu' | 'arrowLeft'
  size?: number
}

const MAPPER = {
  delete: Icons.FaTimes,
  cart: Icons.FaShoppingCart,
  user: Icons.FaUser,
  edit: Icons.FaPen,
  menu: Icons.FaBars,
  arrowLeft: Icons.FaAngleLeft,
}

const Icon = ({ name, size = 20 }: Props) => {
  const Component = MAPPER[name]

  return <Component size={size} />
}

export default Icon