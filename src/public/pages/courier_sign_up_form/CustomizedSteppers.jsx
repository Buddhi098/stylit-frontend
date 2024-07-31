import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import StepLabel from "@mui/material/StepLabel";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import { LinearProgress } from "@mui/material";
import api from "../../api/api";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 136deg, #cce2eb 0%, #c0a888 50%, #99866c 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 136deg, #cce2eb 0%, #c0a888 50%, #99866c 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, #cce2eb 0%, #c0a888 50%, #99866c 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, #cce2eb 0%, #c0a888 50%, #99866c 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AppRegistrationOutlinedIcon sx={{ fontSize: "18px" }} />,
    2: <KeyOutlinedIcon sx={{ fontSize: "22px" }} />,
    3: <PersonPinCircleOutlinedIcon sx={{ fontSize: "22px" }} />,
    4: <BusinessCenterOutlinedIcon sx={{ fontSize: "18px" }} />,
    5: <HowToRegIcon sx={{ fontSize: "18px" }} />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = [
  "Courier Information",
  "OTP Verification",
  "Location Information",
  "Business Information",
  "Registration Complete",
];

export default function CustomizedSteppers() {
  const [loading, setLoading] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [courierData, setCourierData] = React.useState({});

  const [otpStatus, setOtpStatus] = React.useState();

  const form1Ref = React.useRef(null);
  const [form1Data, setFrom1Data] = React.useState({});
  const [isSetEmail, setisSetEmail] = React.useState(false);

  const form3Ref = React.useRef();
  const [form3Data, setForm3Data] = React.useState({});

  const form4Ref = React.useRef();
  const [form4Data, setForm4Data] = React.useState({});

  const [submitFlag, setSubmitFlag] = React.useState(false);

  const [submissionError , setSubmissionError] = React.useState(false);

  React.useEffect(() => {
    console.log(form1Data);
    if (Object.keys(form1Data).length !== 0) {
      setisSetEmail(true);
      setCourierData((prev) => ({
        ...prev,
        courierName: form1Data.courierName,
        courierEmail: form1Data.courierEmail,
        courierContactNumber: form1Data.courierContactNumber,
        password: form1Data.password,
        confirm_password: form1Data.confirm_password,
      }));

      if (activeStep === 0) {
        handleNext();
      }
    }
  }, [form1Data]);

  React.useEffect(() => {
    console.log(form3Data);
    if (Object.keys(form3Data).length !== 0) {
      setCourierData((prev) => ({
        ...prev,
        courierLocation: form3Data,
      }));

      if (activeStep === 2) {
        handleNext();
      }
    }
  }, [form3Data]);

  React.useEffect(() => {
    console.log(form4Data);
    if (Object.keys(form4Data).length !== 0) {
      setCourierData((prev) => ({
        ...prev,
        courierBusinessData: form4Data,
      }));

      // Send Courier Data to the backend
      setSubmitFlag(true);

      if (activeStep === 3) {
        handleNext();
      }
    }
  }, [form4Data]);

  React.useEffect(() => {
    console.log(courierData);
    const sendData = async () => {
      try {
        if (submitFlag) {
          setLoading(true);
          const response = await api.post(
            "/public/user/addCourier",
            courierData
          );
          console.log(response.data);
        }
      } catch (error) {
        if (error.response) {
          console.error("Response error:", error.response);
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request error:", error.request);
        } else if (error.code === "ECONNABORTED") {
          console.error("Request timed out. Error:", error.message);
        } else {
          console.error("Error message:", error.message);
        }
        setSubmissionError(true);
      } finally {
        setLoading(false);
      }
    };

    sendData();
  }, [submitFlag]);

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const submitForm = () => {
    if (form1Ref.current) {
      form1Ref.current.submitForm();
    } else if (form3Ref.current) {
      form3Ref.current.submitForm();
    } else if (form4Ref.current) {
      form4Ref.current.submitForm();
    }

    // for OTP page navigation
    if (activeStep === 1 && otpStatus) {
      handleNext();
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (isLastStep() ? 0 : prevActiveStep + 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleSubmit = () => {
    submitForm();
    console.log(courierData);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box
      sx={{
        width: "80%",
        padding: "30px 28px",
        margin: "10px auto",
        border: "1px solid #f0f0f0",
        minHeight: "78vh",
        paddingBottom: "0px",
        position: "relative",
      }}
    >
      {loading && (
        <Stack
          sx={{
            width: "100%",
            color: "grey.500",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          <LinearProgress color="primary" />
        </Stack>
      )}

      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" disableRipple>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography variant="body2_alata">{label}</Typography>
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack sx={{ mt: "10px", height: "59vh", padding: "0px 32px" }}>
              {activeStep === 0 ? (
                <Form1
                  ref={form1Ref}
                  setFrom1Data={setFrom1Data}
                  form1Data={form1Data}
                  isSetEmail={isSetEmail}
                  setLoading={setLoading}
                  otpStatus={otpStatus}
                />
              ) : activeStep === 1 ? (
                <Form2
                  courierEmail={form1Data.courierEmail}
                  setLoading={setLoading}
                  setOtpStatus={setOtpStatus}
                  otpStatus={otpStatus}
                />
              ) : activeStep === 2 ? (
                <Form3
                  ref={form3Ref}
                  form3Data={form3Data}
                  setForm3Data={setForm3Data}
                />
              ) : activeStep === 3 ? (
                <Form4
                  ref={form4Ref}
                  form4Data={form4Data}
                  setForm4Data={setForm4Data}
                />
              ) : activeStep === 4 ? (
                <Form5 submissionError={submissionError}/>
              ) : null}
            </Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "10px 20px",
                paddingBottom: "32px",
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                {activeStep <= steps.length - 2 ? (
                  <Typography variant="body1_alata" sx={{ color: "black" }}>
                    Back
                  </Typography>
                ) : null}
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep < steps.length - 2 ? (
                <Button onClick={submitForm} sx={{ mr: 1 }}>
                  <Typography variant="body1_alata" sx={{ color: "black" }}>
                    Next
                  </Typography>
                </Button>
              ) : activeStep == steps.length - 2 ? (
                <Button onClick={handleSubmit} sx={{ mr: 1 }}>
                  <Typography variant="body1_alata" sx={{ color: "black" }}>
                    Submit
                  </Typography>
                </Button>
              ) : null}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
