import React from 'react';
import ToDo from '../Overwrite/ToDo';

const Blog = () => {
    return (
        <div>
            <h2>h2 from Blog</h2>
            <ToDo heading={'this is heading'} author={'Fahim'}></ToDo>
        </div>
    );
};

export default Blog;