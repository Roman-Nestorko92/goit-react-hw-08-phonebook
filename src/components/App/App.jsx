import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import useRefreshCurrentUser from 'hooks/useRefreshCurrentUser';
import AppBar from 'components/AppBar/AppBar';
import NotFound from 'components/NotFound/NotFound';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const AddContactPage = lazy(() => import('pages/AddContactPage'));
const ChangeContactPage = lazy(() => import('pages/ChangeContactPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export function App() {
  const { isRefreshing } = useRefreshCurrentUser();

  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts/*"
              element={
                <PrivateRoute redirectTo="/contacts">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contacts/add"
              element={
                <PublicRoute>
                  <AddContactPage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts/edit/:contactId"
              element={
                <PublicRoute>
                  <ChangeContactPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="*"
              element={
                <PublicRoute>
                  <NotFound />
                </PublicRoute>
              }
            />
          </Routes>
        )}
      </Suspense>

      <Footer />
    </>
  );
}
