
import Page from 'components/Page';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from 'features/users/userSlice'
import useIsMountedRef from 'hooks/useIsMountedRef';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography, TextField } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
  },
  header: {
    top: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
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

function ResetPasswordView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  
  const isMountedRef = useIsMountedRef();
  const [loading, setLoading] = useState(false);

  const  newErrors  = useSelector((state) => state.ui.errors);
  
  useEffect(() => {
    setErrors(newErrors)
  }, [newErrors]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    const myEmail = {
      email: email
    }

    try {
      dispatch(resetPassword(myEmail))
      // console.log(myEmail)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <Page title="Reset Password" className={classes.root}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>          
            <>
              <Typography variant="h5" gutterBottom>
                Forgot your password?
              </Typography>
              <Typography color="textSecondary">
                Please enter the email address associated with your account and
                we will email you a link to reset your password.
              </Typography>
              <br/>
              <form onSubmit={handleSubmit}>
              <Box sx={{ mt: 5, mb: 1 }}>              
                <TextField 
                variant="outlined"                
                value={email}
                onChange={event => {setEmail(event.target.value)}}
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.password ? true : false}
                helperText={errors.password}
                />
                <hr />
                {
                  errors.general && (<Typography component="p" color="error">
                    <Icon color="error" className=''></Icon>
                      {errors.general}	
                    </Typography>
                  )
					      }            
              </Box>
              <Box sx={{ mt: 3 }}>
                <ColorButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color='primary'
                  className={classes.submit}
                >
                  Reset Password
                  {loading && (
                    <CircularProgress size={30} className='' />
                  )}
                </ColorButton>
              </Box>
              </form>
                <Link to="/signin">
                    <Button
                      fullWidth
                      size="large"
                      disabled={loading}
                    >
                      Back
                    </Button>
                </Link>
            </>
        </Box>
      </Container>
    </Page>
  );
}

export default ResetPasswordView;
