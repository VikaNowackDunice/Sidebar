import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import './stylesSidebar.scss';

const routes = [
    { title: 'Home', icon: 'faHouse', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = ({color, isSidebarOpen, toggleSidebar}) => {
    const containerClassnames = classnames('sidebar', { opened: isSidebarOpen , [color]: true });

    const goToRoute = (path) => {
        console.log(`Going to ${path}`);
    };

    return (
        <div className={containerClassnames}>
          <div className={classnames('header', { 'header-opened': isSidebarOpen})}>
            <img className="logo" src={logo} alt="TensorFlow logo" />
            <span className='headerLogo'>TensorFlow</span>
             <div onClick={toggleSidebar} className={classnames('toggle-icon', { 'toggle-icon-opened': isSidebarOpen })}>
              <FontAwesomeIcon className='FontAwesomeIcon'
                icon={isSidebarOpen ? 'angle-left' : 'angle-right'}
              />
            </div>
          </div>
          <div>
            {routes.map((route) => (
              <div
              className='routes'
                key={route.title}
                onClick={() => {
                  goToRoute(route.path);
                }}
              >
                  <FontAwesomeIcon className='iconNavigation' icon={route.icon} />
                  <span className='textNavigation'>{route.title}</span>
              </div>
            ))}
          </div>
          <div className='containerbottomRoutes'>
            {bottomRoutes.map((route) => (
              <div
               className='bottomRoutes'
                key={route.title}
                onClick={() => {
                  goToRoute(route.path);
                }}
              >
                <FontAwesomeIcon className='iconNavigation' icon={route.icon} />
                <span className='textNavigation'>{route.title}</span>
              </div>
            ))}
            <div className='line'></div>
          </div>
        </div>
      );
};

Sidebar.propTypes = {
    color: PropTypes.string.isRequired,
    isSidebarOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;