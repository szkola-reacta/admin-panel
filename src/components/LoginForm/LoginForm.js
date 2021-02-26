import React, { useState } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../api';
import { Link } from 'react-router-dom';
import LoginError from './LoginError';

function LoginForm() {
  const [error, setError] = useState('');
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const history = useHistory();
  const { handleSubmit, errors, register, formState } = useForm();

  const validateEmail = (value) => {
    if (!value) {
      return 'Email jest wymagany';
    }
    return true;
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Hasło jest wymagane';
    }
    return true;
  };

  const submitForm = (values) => {
    return api
      .login(values.email, values.password)
      .then(result => {
        setIsSuccessfullySubmitted(result.status === 200);
        sessionStorage.setItem('isAuthenticated', 1);
        setError('');
        history.push('/admin/dashboard');
      })
      .catch(() => {
        setError('Submit error');
      });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Stack spacing={4}>
        {error && <LoginError message={error} />}
        <FormControl isRequired isInvalid={Boolean(errors.email)}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            ref={register({ validate: validateEmail })}
            placeholder="test@test.com"
            size="lg"
            disabled={formState.isSubmitting}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={Boolean(errors.password)} mt={6}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            ref={register({ validate: validatePassword })}
            placeholder="*******"
            size="lg"
            disabled={formState.isSubmitting}
          />
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>
        <Stack spacing={6}>
          <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="space-between">
            <Checkbox>Remember me</Checkbox>
            <Link color="blue.500" to="user.forgotPassword">
              Forgot password?
            </Link>
          </Stack>
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={formState.isSubmitting}
          >
            Login
          </Button>
          {isSuccessfullySubmitted && <div>Wysłano formularz</div>}
          {formState.isSubmitted && <div>Ogólnie wysłano formualrz</div>}
        </Stack>
      </Stack>
    </form>
  );
}

export default LoginForm;
