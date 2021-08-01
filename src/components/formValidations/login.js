import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Mail alanı boş bırakılamaz.")
    .email("Lütfen geçerli bir mail adresi giriniz.")
    .max(320, "Mail alanı en fazla 320 karakterden oluşabilir."),
  password: Yup.string()
    .required("Şifre alanı boş bırakılamaz.")
    .max(255, "Şifre alanı en fazla 255 karakterden oluşabilir.")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1}).*$/,
      "Şifre formata uygun değil."
    ),
});

export default validationSchema;
