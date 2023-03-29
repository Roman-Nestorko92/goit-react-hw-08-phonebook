import { Formik, Form, ErrorMessage } from 'formik';
import useLoginUser from 'hooks/useLoginUser';
import { userLoginSchema } from 'utilities/validationSchema';
import { Button, Input, Label, Title, TitleInput } from './LoginForm.styled';

function LoginForm() {
  const { onSubmitForm } = useLoginUser();

  return (
    <>
      <Title>Login</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userLoginSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              <TitleInput>Your e-mail adress?</TitleInput>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <TitleInput>Your password?</TitleInput>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit">{isSubmitting ? '...' : 'Login'}</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
