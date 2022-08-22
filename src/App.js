import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import EmailSent from './pages/EmailSent';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';
import ResetPassword from './pages/ResetPassword';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/admin/Home';
import AuthLayout from './layouts/AuthLayout';
import Landing from './pages/Landing';
import CreateUser from './pages/admin/CreateUser';
import TrustGroup from './pages/admin/TrustGroup/TrustGroup';
import SettingsLayout from './layouts/SettingsLayout';
import TrustGroupDiscussion from './pages/admin/TrustGroup/TrustGroupDiscussion';
import { GlobalProvider } from './context/GlobalState';
import SecurityAndLogin from './pages/admin/Settings/SecurityAndLogin';
import Notifications from './pages/admin/Settings/Notifications';
import AuthState from './context/auth/AuthState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TempFile from './pages/admin/TrustGroup/TempFile';
import SettingsGeneral from './pages/admin/Settings/SettingsGeneral';
import ManageGroups from './pages/admin/Settings/ManageGroups';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <AuthState>
              <Routes>
                <Route exact path="/" element={<AuthLayout />}>
                  <Route exact path="/" element={<Landing />} />
                  <Route path="/email-sent" element={<EmailSent />} />
                  <Route
                    exact
                    path="/reset-password"
                    element={<ResetPassword />}
                  />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/login" element={<Login newLogin={false} />} />
                  <Route
                    path="/new-login"
                    element={<Login newLogin={true} />}
                  />
                </Route>
                <Route exact path="/admin" element={<DashboardLayout />}>
                  <Route
                    exact
                    path="change-password"
                    element={<ChangePassword />}
                  />
                  <Route exact path="home" element={<Home />} />
                  <Route exact path="create-user" element={<CreateUser />} />
                  <Route exact path="trust-group" element={<TrustGroup />} />
                  <Route
                    exact
                    path="trust-group/:id"
                    element={<TrustGroupDiscussion />}
                  />
                  <Route exact path="settings" element={<SettingsLayout />}>
                    <Route
                      exact
                      path="security"
                      element={<SecurityAndLogin />}
                    />
                    <Route
                      exact
                      path="notifications"
                      element={<Notifications />}
                    />
                    <Route exact path="home" element={<SettingsGeneral />} />
                    <Route
                      exact
                      path="manage-groups"
                      element={<ManageGroups />}
                    />
                  </Route>
                </Route>
              </Routes>
            </AuthState>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
