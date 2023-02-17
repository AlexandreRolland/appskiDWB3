import axios from 'axios';

const getAll = async () => {
    const response = await axios.get('http://localhost:8000/api/posts');
    return response.data;
}

const PostService = {
    getAll
}

export default PostService;