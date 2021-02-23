import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Box, Card, Tabs, Container } from '@material-ui/core';
import Page from './Page';
import MButton from 'components/templates/MButton';
import { capitalCase } from 'change-case';
import { Button } from '@material-ui/core';
import ProfileCover from './UserComponent';
import { PROFILE_TABS } from 'data/profileTabs'
import profilePic from 'assets/images/profile-image-placeholder.jpg'
import bk from 'assets/images/slide2.jpg'

const useStyles = makeStyles(theme => ({
    root: {},
    tabBar: {
      zIndex: 9,
      bottom: 0,
      width: '100%',
      display: 'flex',
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'center'
      },
      [theme.breakpoints.up('md')]: {
        justifyContent: 'center',
        paddingRight: theme.spacing(3)
      },
      '&:MuiTab-wrapper':{
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.common.black,
      }
    },
    tab:{
      '& .MuiTab-wrapper':{
        fontWeight: `${theme.typography.fontWeightBold} !important` ,
        color: `${theme.palette.common.black} !important`,
      }
    },
    coverContainer: {
      borderRadius:'unset',
      height: 280,
      position: 'relative',
      [theme.breakpoints.down('md')]:{
        height:340
      },
      marginBottom: theme.spacing(3)
    },
    icon: { width: 20, height: 20 }
  }));

function User() {
    const [currentTab, setCurrentTab] = useState('profile');

    const authUser = {
        displayName: 'Byron Clarke' || 'Joe Bloggs',
        photoURL: profilePic || bk
    };

    const myProfile = {
        position: 'dancer',
        photoURL: profilePic || bk
    };

    const handleChangeTab = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const classes = useStyles();
    return (
        <Page>            
            <Container>
                <Card className={classes.coverContainer}>
                    <ProfileCover myProfile={myProfile} authUser={authUser} />
                <div className={classes.tabBar}>
                    <Tabs
                        value={currentTab}
                        scrollButtons="auto"
                        variant="scrollable"
                        allowScrollButtonsMobile
                        onChange={handleChangeTab}
                    >
                    {PROFILE_TABS.map(tab => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  className={classes.tab}
                  label={capitalCase(tab.value)}
                />
              ))}
                    <Tabs/>
                    </Tabs>
                    <Box>
                        <Button>
                            Edit Profile
                        </Button>
                    </Box>
                </div>
                </Card>
            </Container>        
        </Page>
    )
}

export default User
