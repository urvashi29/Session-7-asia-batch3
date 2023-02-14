import React, { useEffect } from "react";
import Chart from "../component/Chart";
import { useDispatch, useSelector } from "react-redux";
import { onGetEvData } from "../../action";
import { Parallax, Background } from "react-parallax";
import download from "../../../images/download.jfif";

const About = () => {
  const evData = useSelector((state) => state.evData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetEvData());
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={download}
        bgImageAlt="the dog"
        strength={-200}
        style={{ color: "white" }}
      >
        Blur transition from min to max
        <div style={{ height: "500px" }} />
      </Parallax>
      <Chart data={evData} />
    </div>
  );
};

export default About;
