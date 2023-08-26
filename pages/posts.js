import { Box, Stack, Skeleton } from "@mui/material";
import { useState } from "react";
import Post from "../components/Post";
import Footer from '../components/Footer';
import { Container } from "@mui/material";


const Comments = () => {
  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, [1000]);

  return (
    <>
    <Container>
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
     <Footer />
     </Container>
     </>
  );
 
};

export default Comments;