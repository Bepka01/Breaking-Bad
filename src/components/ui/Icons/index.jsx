import {
  Menu,
  Search,
  X,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

import {
  SiInstagram,
  SiFacebook,
  SiGithub,
  SiTelegram,
  SiYoutube,
} from '@icons-pack/react-simple-icons';

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
