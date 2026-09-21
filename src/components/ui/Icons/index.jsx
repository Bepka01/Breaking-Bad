import {
  SiFacebook,
  SiInstagram,
  SiTelegram,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Menu,
  Search,
  X,
} from 'lucide-react';

const icons = {
  menu: Menu,
  search: Search,
  close: X,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,

  instagram: SiInstagram,
  facebook: SiFacebook,

  telegram: SiTelegram,
  youtube: SiYoutube,
};

const Icon = ({ name, size = 24, color = 'black', ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }
  return <IconComponent color={color} size={size} {...props} />;
};

export default Icon;
