import React, { useState } from "react";
import { DataGrid, trTR } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  dataContainer: {
    width: "100%",
  },
}));

function AppDataGrid({ ...otherProps }) {
  const classes = useStyles();

  const [pageSize, setPageSize] = useState(13);

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  return (
    <div className={classes.dataContainer}>
      <DataGrid
        {...otherProps}
        autoHeight
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[13, 30, 50]}
        pagination
        localeText={trTR.props.MuiDataGrid.localeText}
        getRowId={(row) => row._id}
      />
    </div>
  );
}

export default AppDataGrid;
