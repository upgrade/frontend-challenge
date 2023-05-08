import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
    name: yup.string().required('Required'),
    email: yup.string().email('Please enter a valid email').required('Required'),
    password: yup
        .string()
        .min(5)
        .required('Required')
});

export const AdditionalInfoSchema = yup.object().shape({
    favoriteColor: yup.string().required('Required'),
    terms: yup
        .boolean()
        .oneOf([true], "Please accept the terms and conditions")
});
