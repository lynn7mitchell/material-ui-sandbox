import React from "react";
import { Button, Typography, Grid, MuiTextField, Card, CardContent  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import SideBar from '../components/SideBar'
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from "formik-material-ui";
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Header from "../components/Header";
const useStyles = makeStyles({
  testStyle: {
    fontStyle: "oblique",
  },
  root: {
    margin: '0 auto',
    marginTop: '2rem',
    width: 275,
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Formik
        initialValues={{
          email: "",
          password: "",
          date: new Date(),
          time: new Date(),
          dateTime: new Date(),
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
      >
      {({ submitForm, isSubmitting }) => (
      <Card className={classes.root}>
      <CardContent>
        <Form>

            <Field
            component={TextField}
              name="email"
              type="email"
              label="Email"
            />
          
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={submitForm}
            >
              Submit
            </Button>
        </Form>
        </CardContent>

        </Card>
        )}
      </Formik>
      <SideBar/>
    </Grid>
  );

  {
    /* <div>
      <Typography variant="h1" color="primary" className={classes.testStyle}>
        Header
      </Typography>
      <Button variant="contained" color="primary">
        Button
      </Button>
    </div> */
  }
}
