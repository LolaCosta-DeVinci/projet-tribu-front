/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// Imports locaux
import '../../styles/styles.scss';
import { closeLoginForm } from '../../actions/loginForm';
import { openInscriptionForm } from '../../actions/inscriptionForm';

// Validation pattern of the user datas
const validationSchema = yup.object({
  email: yup
    .string()
    .email('L\'email est invalide')
    .required('L\'email est obligatoire'),
  password: yup
    .string()
    .required('Le mot de passe est obligatoire')
    .matches(/([0-9])/, 'Le mot de passe doit contenir au moins un entier')
    .min(8, 'Le mot de passe doit contenir au minimum 8 caractères'),
}).required();

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      city: '',
      email: '',
      avatar: '',
      description: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const dispatch = useDispatch();

  return (
    <div className="Login">
      <h1 className="Login_title">
        Connecte-toi à la tribu
        <button
          className="Login_button"
          type="button"
          onClick={() => dispatch(closeLoginForm())}
        >
          X
        </button>
      </h1>
      <form
        className="Login_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('email')}
          className="Login_field"
          type="email"
          placeholder="Ton email"
        />
        <p className="Login_error-message">{errors.email?.message}</p>

        <input
          {...register('password')}
          className="Login_field"
          type="password"
          placeholder="Ton mot de passe"
        />
        <p className="Login_error-message">{errors.password?.message}</p>

        <input className="Login_submit" type="submit" />
      </form>

      <p className="inscription">
        Tu ne fais pas encore parti de la tribu ?
        <button
          type="button"
          className="inscription_link"
          onClick={() => {
            dispatch(openInscriptionForm());
            dispatch(closeLoginForm());
          }}
        >
          Inscris-toi
        </button>
      </p>

    </div>
  );
}

export default LoginForm;
