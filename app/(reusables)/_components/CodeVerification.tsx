import React from "react";
import Label from "./Label";
import Button from "./Button";
import VerificationBoxes from "./VerificationBoxes";

const CodeVerification = () => {
  return (
    <div>
      <Label type="verify" />
      <div>
        <VerificationBoxes />
      </div>
      <div className="py-3 space-y-3">
        <Button style="active" type="submit" className={""}>
          {/* {pending ? "Loading..." : "Log in"} */}
          Verify Account
        </Button>
        {/* didn't get a code */}
        <Button style="guest" className={""}>
          Didn&apos;t get a code
        </Button>
      </div>
    </div>
  );
};

export default CodeVerification;
