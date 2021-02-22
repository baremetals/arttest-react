import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon'
import CircularProgress from '@material-ui/core/CircularProgress';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from '@date-io/dayjs';
import dayjs from 'dayjs';
import { Helmet } from 'react-helmet';
import { signUpUser } from 'features/users/userSlice'
import { getUsernames } from 'features/userData/usernameSlice'
import { useDispatch, useSelector } from "react-redux";
import './signup.css'


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }, 
}));
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#1FC5B9'),
      backgroundColor: '#1FC5B9',
      '&:hover': {
        backgroundColor: '#1FC5B9',
      },
    },
}))(Button);


function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
      dispatch(getUsernames());
    }, [dispatch]);
    
    const  uniqueNames  = useSelector((state) => state.username.usernames);
    let usernames = []
    usernames = uniqueNames.map((val) => val.username)

    const  newErrors  = useSelector((state) => state.ui.errors);
    const  loading  = useSelector((state) => state.ui.loading);
 

    const [values, setValues] = useState({
        username: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptedTerms: true,
		    loading: false
    })

    const [isUsed, setIsUsed] = useState(false)
    const [underAge, setUnderAge] = useState(false)

    const [selectedDate, setSelectedDate] = useState(new Date());
    const currentDate = parseInt(dayjs(Date.now()).format('YYYY'))
    
    const [errors, setErrors] = useState({})
    
    const handleChangeDate = date => {  
      setSelectedDate(date);
      const birthdate = dayjs(date.$d).format('YYYY')   
      const age = currentDate - birthdate
      if (age < 16 ) {
        setUnderAge(true)
      } else {
        setUnderAge(false)
      }
      
    
  };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        if (usernames.some(username => username.toLowerCase() === event.target.value.toLowerCase())) {
          setIsUsed(true)
        } else (setIsUsed(false))
    };

  useEffect(() => {
    setErrors(newErrors)
  }, [newErrors]);

  const handleSubmit = (e) =>{
        e.preventDefault();
        setValues({ ...values, loading: true })      
        const newUserData = {
          username: values.username,
          dateOfBirth: selectedDate,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
          
        };
        try {
          dispatch(signUpUser(newUserData))
        } catch (error) {
          console.log(error)
        }
        
  }

  const dataInvalid = isUsed

    return (
        <Container component="main" maxWidth="xs">
          <Helmet>
            <title>Register</title>
          </Helmet>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className='' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="uname"
                name="username"
                variant="outlined"
                required
                value={values.username}
                onChange={handleChange('username')}
                fullWidth
                id="username"
                label="Username"
                autoFocus
                style={{color: 'red'}}
              />
              <div className={ isUsed ? "arttest" : "arttest-trill"}>{values.username}</div>
            </Grid>
            <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Grid item xs={12} sm={6}>
            <KeyboardDatePicker
                fullWidth
                value={selectedDate}
                placeholder="02/01/2004"
                helperText='Date Of Birth'
                inputVariant="outlined"
                onChange={handleChangeDate}
                minDate={new Date("1900-01-01")}
                format="MM-DD-YYYY"
                InputAdornmentProps={{ position: "end" }}
                className="datePicker"
        />
              <small></small>
            </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={12}>
              { underAge && <FormControlLabel
                control={<Checkbox value="terms" color="primary" />}
                label="Parental permission."
                required
              />}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                value={values.email}
                onChange={handleChange('email')}
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                value={values.password}
                onChange={handleChange('password')}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errors.password ? true : false}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword}
              />
            </Grid>
            <hr />
            {
              errors.general && (<Typography component="p" color="error">
                <Icon color="error" className=''></Icon>
                  {errors.general}	
                </Typography>
              )
						}
            <hr />
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="terms" color="primary" />}
                label="By register, I agree to arttest Terms of Service and Privacy Policy."
                required
              />
            </Grid>
          </Grid>
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color='primary'
            className={classes.submit}
            disabled={loading || dataInvalid}
          >
            Sign Up
            {loading && (
              <CircularProgress size={30} className='' />
            )}
          </ColorButton>
          <Grid container justify="flex-end">
            <Grid item>
            <Link to='/signin'>
              <span variant="body2">
                Already have an account? Sign in
              </span>
            </Link>
            </Grid>
            <hr />
          </Grid>
        </form>
      </div>
    </Container>
    )
}

export default SignUp
