import React from 'react';
import Navbar from './Navbar';
import InputSearch from './InputSearch';

export default function Menu({ filter, setFilter }) {
  return (
    <div className="agent-navbar">
      <Navbar filter={filter} setFilter={setFilter} />
      <InputSearch />
      <div className="iconfont icon-type icon-th-card" data-testid="icon-th-card" />
      <div className="iconfont icon-type icon-th-list active" data-testid="icon-th-list" />
    </div>
  );
}
