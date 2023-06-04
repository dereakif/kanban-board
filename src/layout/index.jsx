import PropTypes from 'prop-types';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import './styles.scss';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <SideBar />
      <div className='layout__main'>
        <Header />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
