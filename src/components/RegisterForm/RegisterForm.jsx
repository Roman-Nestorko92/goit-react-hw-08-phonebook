import { Formik, Form, ErrorMessage } from 'formik';
import { userRegisterSchema } from 'utilities/validationSchema';
import useRegistrUser from 'hooks/useRegistrUser';
import { Button, Input, Label, Title, TitleInput } from './RegisterForm.styled';

function RegisterForm() {
  const { onSubmitForm } = useRegistrUser();

  return (
    <>
      <Title>Registration</Title>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userRegisterSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              <TitleInput>What is your name?</TitleInput>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                values={values.name}
              />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <TitleInput>Your e-mail adress?</TitleInput>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                values={values.email}
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <TitleInput>Create a password.</TitleInput>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                values={values.password}
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit">
              {isSubmitting ? '...' : 'Registration'}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default RegisterForm;
