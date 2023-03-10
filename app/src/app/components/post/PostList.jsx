import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import PostService from '../../../setup/services/post.service';
import PostCardMain from './card/PostCardMain';

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const fetchAllPosts = async () => {
        try{
            const response = await PostService.getAll();
            setPosts([...response]);
            console.log(response)
        } catch (error){
            console.log("Error fetching posts", error);
        }
    }

    return ( 
        <Box>
            <Grid container spacing={2}>
                {posts.map((post) => 
                    <Grid item xs={12} sm={12} md={12} key={post.id}>
                        <PostCardMain post={post} />
                    </Grid>
                )}
            </Grid>
        </Box>
     );
}
 
export default PostList;