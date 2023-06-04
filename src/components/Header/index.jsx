import Icon from '../Icon';
import Search from '../Search';
import './styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__search'>
        <Search />
        <Icon text='controls' type='icon' color='grey-light' size='large' />
        <Icon text='filter' type='icon' color='grey-light' size='large' />
      </div>
      <Icon text='plus' type='icon' color='white' size='large' border='border-blue' />
    </div>
  );
};
export default Header;
