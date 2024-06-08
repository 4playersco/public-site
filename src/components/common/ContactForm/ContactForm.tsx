"use client";
import React, { useCallback, useState } from "react";
// import classnames from 'classnames';
import { Formik, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

import styles from "./ContactForm.module.scss";
import Button from "../../utility/Button";
import Captcha from "../Captcha";

interface FormikValues {
  name: string;
  email: string;
  message: string;
}

interface FormikErrors {
  email?: string;
}

interface EncodedBodyData extends FormikValues {
  "form-name": "contact";
  [x: string]: any;
}

function ContactForm() {
  const [validRecaptcha, setValidRecaptcha] = useState(false);
  const router = useRouter();

  const handleCaptchaChange = useCallback(
    (isValid: boolean) => {
      setValidRecaptcha(isValid);
    },
    [setValidRecaptcha]
  );

  const handleEncode = useCallback((data: EncodedBodyData) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }, []);

  return (
    <div className={styles.ContactForm}>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values: FormikValues) => {
          let errors: FormikErrors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: handleEncode({
              "form-name": "contact",
              ...values,
            }),
          })
            .then(() => {
              setSubmitting(false);
              router.push("/thanks");
            })
            .catch(() => {
              setSubmitting(false);
              setStatus({
                msg: "There was a problem submitting your message. Please try again later.",
              });
            });
        }}
      >
        {({ isSubmitting, handleSubmit }, ...props) => {
          const isDisabled = !validRecaptcha || isSubmitting;

          return (
            <form
              name="contact"
              method="post"
              action="/thanks"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              {...props}
            >
              <div className={styles.formFields}>
                <Field
                  className={styles.field}
                  placeholder="Name"
                  type="name"
                  name="name"
                />
                <ErrorMessage
                  className={styles.error}
                  name="name"
                  component="div"
                />
                <Field
                  className={styles.field}
                  placeholder="Email"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="div"
                />
                <Field
                  className={styles.field}
                  placeholder="Message"
                  type="message"
                  component="textarea"
                  name="message"
                />
                <ErrorMessage
                  className={styles.error}
                  name="message"
                  component="div"
                />
                <div className={styles.recaptcha}>
                  <Captcha onChange={handleCaptchaChange} />
                </div>
              </div>
              <Button type="submit" disabled={isDisabled}>
                Send
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactForm;
