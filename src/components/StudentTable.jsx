import React from 'react';
import Table from './Table';
import StudentRow from './StudentRow';
import dayjs from 'dayjs';

const data = [
  { id: 1, lastName: "Garcia", firstName: "Juan", course: "IT", birthdate: "2000-05-12" },
  { id: 2, lastName: "Santos", firstName: "Maria", course: "IS", birthdate: "2001-07-23" },
  { id: 3, lastName: "Reyes", firstName: "Carlos", course: "CS", birthdate: "2002-10-30" },
  { id: 4, lastName: "Cruz", firstName: "Ana", course: "DS", birthdate: "2003-02-15" },
  { id: 5, lastName: "Delos Santos", firstName: "Miguel", course: "IT", birthdate: "2004-11-08" },
  { id: 6, lastName: "Bautista", firstName: "Elena", course: "CS", birthdate: "2005-06-18" },
  { id: 7, lastName: "Luna", firstName: "Sofia", course: "IS", birthdate: "2002-09-12" },
  { id: 8, lastName: "Dela Cruz", firstName: "Jose", course: "DS", birthdate: "2001-04-21" },
  { id: 9, lastName: "Fernandez", firstName: "Gabriel", course: "IT", birthdate: "2003-08-10" },
  { id: 10, lastName: "Gutierrez", firstName: "Isabella", course: "CS", birthdate: "2004-12-04" },
];

const StudentTable = ({ query, minDate, maxDate, ageFilter }) => {

  const calculateAge = (birthdate) => {
    return dayjs().diff(birthdate, 'year');
  };

  const filteredData = data.filter(student => {
    const fullName = `${student.lastName} ${student.firstName}`;
    const birthdate = new Date(student.birthdate);
    const filterAge = calculateAge(student.birthdate);

    const isWithinDateRange =
      (minDate ? birthdate >= new Date(minDate) : true) &&
      (maxDate ? birthdate <= new Date(maxDate) : true);

    const matchesQuery = 
      fullName.toLowerCase().includes(query.toLowerCase()) || 
      student.course.toLowerCase().includes(query.toLowerCase());

    // Check if ageFilter is provided, if so, filter by age
    const matchesAge = ageFilter ? filterAge.toString().includes(ageFilter.toString()) : true;

    return matchesQuery && matchesAge && isWithinDateRange;
  });

  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Last Name</Table.ColumnHeader>
            <Table.ColumnHeader>First Name</Table.ColumnHeader>
            <Table.ColumnHeader>Course</Table.ColumnHeader>
            <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
            <Table.ColumnHeader>Age</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          {filteredData.map((student) => (
            <StudentRow
              key={student.id}
              lastName={student.lastName}
              firstName={student.firstName}
              course={student.course}
              birthdate={student.birthdate}
            />
          ))}
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default StudentTable;
