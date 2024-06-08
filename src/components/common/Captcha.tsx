import React, { FC, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type CaptchaProps = {
  onChange: (isValid: boolean) => void;
};

const Captcha: FC<CaptchaProps> = ({ onChange }) => {
  const handleCaptchaChange = useCallback(() => {
    onChange(true);
  }, [onChange]);

  const handleCaptchaExpire = useCallback(() => {
    onChange(false);
  }, [onChange]);

  const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_SITE_KEY;

  return (
    <>
      {recaptchaSiteKey && (
        <ReCAPTCHA
          sitekey={recaptchaSiteKey}
          onChange={handleCaptchaChange}
          onExpired={handleCaptchaExpire}
          onErrored={handleCaptchaExpire}
        />
      )}
    </>
  );
};

export default Captcha;
