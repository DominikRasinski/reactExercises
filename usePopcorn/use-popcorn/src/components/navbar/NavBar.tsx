import { Movie } from '../../App';
import { Logo } from './Logo';
import { Results } from './Results';
import { Search } from './Search';

interface NavbarProps {
  children: React.ReactNode;
}

export const Navbar = (props: NavbarProps) => {
  const { children } = props;
  return <nav className='nav-bar'>{children}</nav>;
};
