import {
  DatePicker,
  TimePicker,
  Form,
  Input,
  Row,
  Col,
  Select,
  Space,
  message,
} from "antd";
import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

export const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [hospitals, setHospitals] = useState([]);
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();

  //login user data
  const getUserdata = async () => {
    try {
      const res = await axios.post(
        "/api/v1/hospital/getHospitalById",
        { hospitalId: params.hospitalId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setHospitals(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //booking function
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          hospitalId: params.hospitalId,
          userId: user._id,
          hospitalInfo: hospitals,
          date: date,
          userInfo: user,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availability",
        {
          hospitalId: params.hospitalId,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        console.log(isAvailable);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserdata();
  }, []);

  return (
    <>
      <Layout>
        <h3>Booking Page</h3>
        <div className="container m-2">
          {hospitals && (
            <div>
              <h6>{hospitals.hos_name}</h6>
              <h6>Fees : {hospitals.feesPerVaccine}</h6>
              {/* <h4>Timing : {hospitals.timings[0]} - {hospitals.timings[1]}</h4> */}

              <Form layout="vertical">
                <Row gutter={30}>
                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Child name"
                      name="child_name"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Child name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Age"
                      name="age"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Age" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Vaccine"
                      name="vaccine"
                      required
                      rules={[{ required: true }]}
                    >
                      <Space wrap>
                        <Select
                          defaultValue="BCG"
                          style={{ width: 250 }}
                          options={[
                            { value: "Hepatitis B", label: "Hepatitis B" },
                            { value: "BCG", label: "BCG" },
                            { value: "Oral Polio", label: "Oral Polio" },
                            { value: "Pentavalent", label: "Pentavalent" },
                            { value: "Rotavirus", label: "Rotavirus" },
                            { value: "DPT", label: "DPT" },
                          ]}
                        />
                      </Space>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>

              <div className="d-flex flex-column w-50">
                <DatePicker
                  className="m-2"
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    setDate(moment(value).format("DD-MM-YYYY"));
                  }}
                >
                  {" "}
                </DatePicker>

                <TimePicker
                  className="m-2"
                  format="HH:mm"
                  onChange={(value) => {
                    setTime(moment(value).format("HH-mm"));
                  }}
                ></TimePicker>
                {/* <button className='btn btn-primary m-2' onClick={handleAvailability}>Check Availability</button> */}

                <button className="btn btn-dark m-2" onClick={handleBooking}>
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};
