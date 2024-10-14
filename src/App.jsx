import { useState } from 'react'
import './App.css'
import StudentTable from './components/StudentTable';
import FilterStudentTable from './components/FilterStudentTable';
import DateFilter from './components/DateFilter';
import AgeFilter from './components/FilterAge';
import FilterNameCourse from './components/FilterNameCourse';




function App() {

  const [query, setQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  return (
    <FilterStudentTable>
      <FilterNameCourse searchTerm={query} setSearchTerm={setQuery} />
      <AgeFilter ageFilter={ageFilter} setAgeFilter={setAgeFilter} />
      <DateFilter 
        minDate={minDate} 
        setMinDate={setMinDate} 
        maxDate={maxDate} 
        setMaxDate={setMaxDate} 
      />
      <StudentTable query={query} minDate={minDate} maxDate={maxDate} ageFilter={ageFilter} />
    </FilterStudentTable>
   
  )
}

export default App
