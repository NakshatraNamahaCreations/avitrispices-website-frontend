import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import Navbar_Menu from "../../Components/Navbar_Menu";
import Footer from "../../Components/Footer";

const BlogDetails = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`https://api.nncwebsitedevelopment.com/api/blogs/${encodeURIComponent(title)}`);
      setBlog(res.data);
    } catch (err) {
      console.error("Blog not found", err);
    }
  };

  return (
    <>
      <Navbar_Menu />
      <Container className="py-5" style={{ fontFamily: "kapraneue, sans-serif", fontSize: "18px", marginTop:'5%' }}>
        {blog ? (
          <>
            <h2 className="text-center mb-4 fw-bold">{blog.title}</h2>
            <img
              src={`https://api.nncwebsitedevelopment.com/uploads/blogs/${blog.image}`}
              alt={blog.title}
              className="img-fluid rounded mb-4"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          </>
        ) : (
          <p>Loading blog...</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default BlogDetails;
