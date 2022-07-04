import React from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet } from 'react-native';
=======
>>>>>>> 3c392ed4862fa44422e68d9d165562dfac2b9511

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
<<<<<<< HEAD
  const blogPosts = [
    { title: 'Blog Post #1' },
    { title: 'Blog Post #2' }
  ];

  return (
    // <Text>hello world</Text>
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  );
=======
  return <BlogContext.Provider value={[1, 2, 3]}>
    {children}
  </BlogContext.Provider>;
>>>>>>> 3c392ed4862fa44422e68d9d165562dfac2b9511
};

export default BlogContext;