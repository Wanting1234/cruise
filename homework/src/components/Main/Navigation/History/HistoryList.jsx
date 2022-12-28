import React from 'react';
import './History.css';

function HistoryList() {
  const history = [
    'bjstdmngbdr02/Acceptance_test',
    'bjstdmngbdr03/Acceptance_test',
    'bjstdmngbdr04/Acceptance_test',
    'bjstdmngbdr05/Acceptance_t.....',
    'bjstdmngbdr06/Acceptance_test',
    'bjstdmngbdr07/Acceptance_test',
    'bjstdmngbdr08/Acceptance_test',
    'bjstdmngbdr09/Acceptance_test',
    'bjstdmngbdr11/Acceptance_test',
    'bjstdmngbdr12/Acceptance_test',
    'bjstdmngbdr13/Acceptance_test',
  ];
  return (
    <section className="history">
      <h1 className="history-heading">History</h1>
      <ul className="history-list">
        {history.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HistoryList;
