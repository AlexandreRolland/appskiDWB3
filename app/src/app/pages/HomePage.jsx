import PostList from "../components/post/PostList";
import FilterBar from "../components/filter/filters";

const HomePage = () => {
    return ( 
        <div>
            <FilterBar/>
            <h1>Posts list</h1>
            <PostList />
        </div>
     );
}
 
export default HomePage;