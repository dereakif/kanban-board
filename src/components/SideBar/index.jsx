import logo from '../../assets/logo.svg';
import Icon from '../Icon';

import './styles.scss';

const features = [
  {
    name: 'Dashboard',
    icon: 'home',
  },
  {
    name: 'Feedback',
    icon: 'chat-bubble',
  },
  {
    name: 'Task',
    icon: 'assignment',
  },
  { name: 'Roadmap', icon: 'compass' },
  { name: 'Changelog', icon: 'change' },
];
const sidebarLowerItems = [
  { name: 'Invite people', icon: 'plus' },
  { name: 'Help & Community', icon: 'chat-bubble-square' },
  { name: 'Notifications', icon: 'bell' },
];

const user = {
  name: 'Neil Larkins',
  avatar: 'user1.png',
};

const company = {
  name: 'Epodpay Inc.',
  icon: 'user1',
};

const activeIcon = 'Task';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__upper'>
        <div className='sidebar__upper__logo'>
          <img height={32} width={153} src={logo} alt='producter-logo' />
        </div>
        <ul className='sidebar__upper__menu'>
          {features.map((item) => (
            <li className={item.name === activeIcon ? 'active' : ''} key={item.name}>
              <img
                height={18}
                width={18}
                src={require(`../../assets/${item.icon}${
                  item.name === activeIcon ? '-active' : ''
                }.svg`)}
                alt={`${item.name}-icon`}
              />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar__lower'>
        <ul className='sidebar__lower__items'>
          {sidebarLowerItems.map((item) => (
            <li key={item.name}>
              <img
                height={18}
                width={18}
                src={require(`../../assets/${item.icon}.svg`)}
                alt={`${item.name}-icon`}
              />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <hr />
        <div className='sidebar__lower__user'>
          <img
            height={24}
            width={24}
            src={require(`../../assets/${user.avatar}`)}
            alt='user-avatar'
          />
          <span>{user.name}</span>
        </div>
        <hr />
        <div className='sidebar__lower__company'>
          <Icon text={company.name} type='letter' color='yellow' size='medium' />
          <span>{company.name}</span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
