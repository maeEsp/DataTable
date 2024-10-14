import React from 'react';
import Table from './Table';
import dayjs from 'dayjs';

const calculateAge = (birthdate) => {
  return dayjs().diff(birthdate, 'year');
};

const StudentRow = ({ lastName, firstName, course, birthdate }) => {
  const age = calculateAge(birthdate);
  return (
    <Table.Row>
      <Table.Column>{lastName}</Table.Column>
      <Table.Column>{firstName}</Table.Column>
      <Table.Column>{course}</Table.Column>
      <Table.Column>{birthdate}</Table.Column> 
      <Table.Column>{age}</Table.Column> 
    </Table.Row>
  );
};

export default StudentRow;
