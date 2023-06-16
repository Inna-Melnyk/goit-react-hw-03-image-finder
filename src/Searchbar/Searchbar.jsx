import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Form, Field, SubmitBtn } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{ image: '' }}
        onSubmit={({ image }, { resetForm }) => {
          if (image.trim() === '') {
            return toast.warn('Enter search image name');
          }
          onSubmit(image);
          resetForm();
        }}
      >
        <Form>
          <SubmitBtn type="submit">
            <BsFillSearchHeartFill size="20" />
          </SubmitBtn>

          <Field
            name="image"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </Header>
  );
};
