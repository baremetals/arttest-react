import Friend from 'Friend';
import Profile from './Profile';
import Gallery from '.Gallery';
import Follower from './Follower';
import Page from '~/components/Page';
import { Icon } from '@iconify/react';
import ProfileCover from './ProfileCover';
import { capitalCase } from 'change-case';
import { PATH_APP } from '~/routes/paths';
import React, { useEffect, useState } from 'react';
import heartFill from '@iconify-icons/eva/heart-fill';
import { useDispatch, useSelector } from 'react-redux';
import peopleFill from '@iconify-icons/eva/people-fill';
import HeaderDashboard from '~/components/HeaderDashboard';
import roundPermMedia from '@iconify-icons/ic/round-perm-media';
import roundAccountBox from '@iconify-icons/ic/round-account-box';
import {
  getPosts,
  getGallery,
  getFriends,
  getProfile,
  getFollowers,
  onToggleFollow
} from '~/redux/slices/user';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Box, Card, Tabs, Container } from '@material-ui/core';
import { ButtonAnimate } from '~/components/Animate';
import { MButton } from '~/@material-extend';

// ----------------------------------------------------------------------

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

// ----------------------------------------------------------------------

function ProfileView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { myProfile, posts, followers, friends, gallery } = useSelector(
    state => state.user
  );
  const { auth, profile } = useSelector(state => state.firebase);
  const [currentTab, setCurrentTab] = useState('profile');
  const [findFriends, setFindFriends] = useState('');

  const authUser = {
    displayName: auth.displayName || profile.displayName,
    photoURL: auth.photoURL || profile.photoURL
  };

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getPosts());
    dispatch(getFollowers());
    dispatch(getFriends());
    dispatch(getGallery());
  }, [dispatch]);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleToggleFollow = followerId => {
    dispatch(onToggleFollow(followerId));
  };

  const handleFindFriends = e => {
    setFindFriends(e.target.value);
  };

  if (!myProfile) {
    return null;
  }

  const PROFILE_TABS = [
    {
      value: 'timeline',
      icon: null,
      component: (
        <Profile myProfile={myProfile} posts={posts} authUser={authUser} />
      )
    },
    {
      value: 'about',
      icon:null,
      component: (
        <Follower followers={followers} onToggleFollow={handleToggleFollow} />
      )
    },
    {
      value: 'photos',
      icon: null,
      component: (
        <Friend
          friends={friends}
          findFriends={findFriends}
          onFindFriends={handleFindFriends}
        />
      )
    },
    {
      value: 'followers',
      icon: null,
      component: <Gallery gallery={gallery} />
    }
  ];

  return (
    <Page title="Management | User Profile" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Management', href: PATH_APP.management.root },
            { name: 'User', href: PATH_APP.management.user.root },
            { name: authUser.displayName || '' }
          ]}
        />
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
            </Tabs>
          </div>
        </Card>
        <Card className={classes.coverContainer}>
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
            </Tabs>
            <Box display="flex" alignSelf="center" position="absolute" right={24}>
              <MButton rounded={true} color="primary" variant="outlined" size="medium" >
            Edit Profile
          </MButton>
              </Box>
          </div>
        </Card>

        {PROFILE_TABS.map(tab => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
       
      </Container>
    </Page>
  );
}

export default ProfileView;
