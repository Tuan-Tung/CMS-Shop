import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: 'blue',
    },
    children: `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`,
  };
}

export const AccountProfile = (props) => {
  let user = null;
  if(typeof window !== 'undefined'){
    user = JSON.parse(localStorage.getItem("token"));
  }

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
            {...stringAvatar(user?.result?.name)}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {user?.result?.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${user?.result?.email}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user?.result?.role === 1 ? "Admin" : "User"}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
