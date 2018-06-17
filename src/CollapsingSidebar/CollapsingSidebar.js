import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class CollapsingSidebar extends Component {
  render() {
    return (
      <Menu className="bm-menu" isOpen={false}>
        <p>hi</p> 
      </Menu>
    );
  }
};

export default CollapsingSidebar;