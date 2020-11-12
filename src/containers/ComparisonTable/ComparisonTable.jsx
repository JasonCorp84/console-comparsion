import React from 'react'
import MaterialTable from 'material-table';
import  columns  from '../constants/columns';
import tableData from '../constants/tableData';




const ComparisonTable = () => {
  return(
    <div>
    
      <MaterialTable
        title="Console Comparison"
        columns={columns}
        data={tableData}        
        options={{
          search: true
        }}
      />
    </div>
  )
}

export default ComparisonTable;