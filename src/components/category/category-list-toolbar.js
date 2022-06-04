import {
    Box,
    Button,
    Card,
    CardContent, InputAdornment,
    SvgIcon, TextField, Typography
} from '@mui/material';
import NextLink from 'next/link';
import { Search as SearchIcon } from '../../icons/search';
  
  export const CategoryListToolbar = (props) => (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Category
        </Typography>
        <Box sx={{ m: 1 }}>
          <NextLink href="/categorys/add">
          <Button
            color="primary"
            variant="contained"
          >
            Add Categorys
          </Button>
          </NextLink>
        </Box>
      </Box>
      {/* <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search Category"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box> */}
    </Box>
  );
  