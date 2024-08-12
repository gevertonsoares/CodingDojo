import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box component='footer' marginY={3}>
      <Typography variant='caption' component='p' align='center'>
        Copyright &copy;
        <Typography variant='caption' component='small'>Developed By Geverton Soares</Typography>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
}