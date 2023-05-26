import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/action/index';
import { ButtonGroup, Button } from 'react-bootstrap';

const FilterTodo = ({ filter, setFilter }) => {
  const [activeFilter, setActiveFilter] = useState(filter);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="text-center">
      <h2>Filter</h2>
      <ButtonGroup>
        <Button
          variant={activeFilter === 'ALL' ? 'primary' : 'outline-primary'}
          onClick={() => handleFilter('ALL')}
          style={{
            backgroundColor: '#e79324',
            color: 'black',
            border: '1px solid white'
          }}
          className="mx-auto"
        >
          All
        </Button>
        <Button
          variant={activeFilter === 'ACTIVE' ? 'primary' : 'outline-primary'}
          onClick={() => handleFilter('ACTIVE')}
          style={{
            backgroundColor: '#e79324',
            color: 'black',
            border: '1px solid white'
          }}
          className="mx-auto"
        >
          Active
        </Button>
        <Button
          variant={activeFilter === 'COMPLETED' ? 'primary' : 'outline-primary'}
          onClick={() => handleFilter('COMPLETED')}
          style={{
            backgroundColor: '#e79324',
            color: 'black',
            border: '1px solid white'
          }}
          className="mx-auto"
        >
          Completed
        </Button>
      </ButtonGroup>
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.todos.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo);
