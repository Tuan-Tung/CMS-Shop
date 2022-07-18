import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

export const FormTable = ({ dataTable, columns, ...rest }) => {
  const [selectedTableItems, setSelectedTableItems] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedTableItems;

    if (event.target.checked) {
      newSelectedTableItems = dataTable.map((dataTable) => dataTable.id);
    } else {
      newSelectedTableItems = [];
    }

    setSelectedTableItems(newSelectedTableItems);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedTableItems.indexOf(id);
    let newSelectedTableItems = [];

    if (selectedIndex === -1) {
      newSelectedTableItems = newSelectedTableItems.concat(selectedTableItems, id);
    } else if (selectedIndex === 0) {
      newSelectedTableItems = newSelectedTableItems.concat(selectedTableItems.slice(1));
    } else if (selectedIndex === selectedTableItems.length - 1) {
      newSelectedTableItems = newSelectedTableItems.concat(selectedTableItems.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTableItems = newSelectedTableItems.concat(
        selectedTableItems.slice(0, selectedIndex),
        selectedTableItems.slice(selectedIndex + 1)
      );
    }

    setSelectedTableItems(newSelectedTableItems);
  };

  // const handleLimitChange = (event) => {
  //   setLimit(parseInt(event.target.value, 10));
  // };
  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const HeaderTable = ({ valuesHeader }) => {
    return <TableCell>{valuesHeader.name}</TableCell>;
  };
  const ListItemTable = ({rowData,valuesItem}) => {
    return <TableCell>{rowData?.[valuesItem.field]}</TableCell>

  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                {rest.checkboxTable ? (
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedTableItems.length === dataTable.length}
                      color="primary"
                      indeterminate={
                        selectedTableItems.length > 0 &&
                        selectedTableItems.length < dataTable.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                ) : null}
                {columns.map((valuesHeader) => (
                  <HeaderTable key={valuesHeader.field} 
                    valuesHeader={valuesHeader} />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.slice(page * limit, page * limit + limit).map((rowData) => (
                <TableRow
                  hover
                  key={rowData?.id}
                  tabIndex={-1}
                  selected={selectedTableItems.indexOf(rowData?.id) !== -1}
                >
                  {rest.checkboxTable ? (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedTableItems.indexOf(rowData.id) !== -1}
                        onChange={(event) => handleSelectOne(event, rowData.id)}
                        value="true"
                      />
                    </TableCell>
                  ) : null}
                   {columns.map((valuesItem) => (
                  <ListItemTable key={valuesItem.field} 
                    valuesItem={valuesItem} 
                    rowData={rowData} />
                ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={dataTable.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

FormTable.propTypes = {
  dataTable: PropTypes.array.isRequired,
};
