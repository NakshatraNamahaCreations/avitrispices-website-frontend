import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar_Menu from "../../Components/Navbar_Menu";
import LearnMore from "../../Pages/Home/LearnMore";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://api.avitrispices.in/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  return (
    <div
      className="page-content"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Navbar_Menu />
      <Container className="py-5 px-3 px-md-5" style={{ fontFamily: "kapraneue, sans-serif", fontSize: "18px", marginTop:'5%' }}>
        <h1 className="text-center mb-4 fw-bold">Blogs</h1>
        <Row>
          {blogs.map((blog, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm rounded">
                <Card.Img
                  variant="top"
                  src={`https://api.avitrispices.in/uploads/blogs/${blog.image}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text style={{ fontSize: "16px", color: "#555" }}>
                    {blog.description.replace(/<[^>]+>/g, "").slice(0, 120)}...
                  </Card.Text>
                  <Link to={`/blogs/${encodeURIComponent(blog.title)}`} className="text-danger fw-bold">
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <LearnMore />
      <Footer />
    </div>
  );
}
