import { Box, Stack, Skeleton } from "@mui/material";
import { useState } from "react";
import Post from "../components/Post";
//import Search from './Search';

const Comments = () => {
  const [loading, setLoading] = useState(true);
  /*const [search, setSearch] = useState('');*/

  setTimeout(() => {
    setLoading(false);
  }, [1000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          </>
      )}
    </Box>
  );
};

export default Comments;