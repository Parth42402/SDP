// import React from "react";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useSelector } from 'react-redux';
import Spinner from './Components/Spinner';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { PublicRoute } from './Components/PublicRoute';
import ApplyHos from './Pages/ApplyHos';
import NotificationPage from './Pages/NotificationPage';
import { Hospitals } from './Pages/admin/Hospitals';
import { Parent } from './Pages/admin/Parent';
import { Profile } from './Pages/hospitals/Profile';
import { BookingPage } from './Pages/BookingPage';
import Appointments from './Pages/Appointments';
import HospitalAppointments from './Pages/hospitals/HospitalAppointments';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import { VaccineInfo } from './Pages/VaccineInfo';



function App() {
  const { loading } = useSelector(state => state.alerts)

  return (
    <>
      <BrowserRouter>
        <Header />
        {loading ? <Spinner /> : <Routes>

          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }></Route>

          <Route path="/apply-hos" element={
            <ProtectedRoute>
              <ApplyHos />
            </ProtectedRoute>
          }></Route>

          <Route path="/admin/users" element={
            <ProtectedRoute>
              <Parent />
            </ProtectedRoute>
          }></Route>

          <Route path="/hospital/profile/:id" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }></Route>

          <Route path="/hospital/book-appointment/:hospitalId" element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          }></Route>

          <Route path="/admin/hospitals" element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }></Route>


          <Route path="/notification" element={
            <ProtectedRoute>
              <NotificationPage />
            </ProtectedRoute>
          }></Route>

          <Route exact path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }></Route>
          <Route exact path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }></Route>

          <Route exact path="/appointments" element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }></Route>

          <Route exact path="/hospital-appointments" element={
            <ProtectedRoute>
              <HospitalAppointments />
            </ProtectedRoute>
          }></Route>

          <Route exact path='/about' element={
            <PublicRoute>
              <VaccineInfo />
            </PublicRoute>}></Route>

        </Routes>}



        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
