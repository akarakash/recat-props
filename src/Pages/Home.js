import "../App.css";
import Image from "./Image";
import Text from "./Text";
import banner from "../img/banner boy.svg";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "./MainLayout";

function Home() {
  return (
    <>
      <MainLayout style="one">
        <Image style="img" link={banner} />
        <Text style="text-1" text="START BOOTSTRAP" />
        <Text style="text-2" text="_________ * __________" />
        <Text style="text-3" text="Graphic Artist-Web Designer-Illustrator" />
      </MainLayout>
      <MainLayout>
        <Text style="port" text="PORTFOLIO" />
        <Text style="port-text-2" text="_________ * __________" />
      </MainLayout>
      <Container>
        <Row>
          <Col lg={4}>
            <Image style="img-style" link={img1} />
          </Col>
          <Col lg={4}>
            <Image style="img-style" link={img2} />
          </Col>
          <Col lg={4}>
            <Image style="img-style" link={img3} />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Image style="img-style" link={img4} />
          </Col>
          <Col lg={4}>
            <Image style="img-style" link={img5} />
          </Col>
          <Col lg={4}>
            <Image style="img-style" link={img6} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
