// import clsx from 'clsx';
// import React from 'react';
// import PropTypes from 'prop-types';
// import MyAvatar from 'components/MyAvatar';
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import { Box, CardMedia, Typography,IconButton } from '@material-ui/core';
// import { ShareRounded } from '@material-ui/icons';

// const useStyles = makeStyles(theme => ({
//     root: {
//       '&:before': {
//         top: 0,
//         zIndex: 9,
//         width: '100%',
//         content: "''",
//         height: '100%',
//         position: 'absolute',
//         backdropFilter: 'blur(0px)',
//         backgroundColor: alpha(theme.palette.primary.darker, 0.72)
//       }
//     },
//     cardMedia: {
//       zIndex: 8,
//       height: '100%',
//       position: 'absolute'
//     },
//     coverWrapper:{
//       height:theme.spacing(10),width:'100%',background:'rgba(0,0,0,0.5)',
//       position:'absolute',bottom:theme.spacing(6),
//       zIndex:10
//     },
//     userInfo: {
//       left: 0,
//       right: 0,
//       zIndex: 99,
//       position: 'absolute',
//       marginTop: theme.spacing(5),
//       [theme.breakpoints.up('md')]: {
//         right: 'auto',
//         display: 'flex',
//         alignItems: 'center',
//         left: theme.spacing(3),
//         bottom: theme.spacing(3)
//       }
//     },
//     iconButton:{
//       border:'1px solid #fff'
//     }
// }));

// ProfileCover.propTypes = {
//     myProfile: PropTypes.object,
//     authUser: PropTypes.object,
//     className: PropTypes.string
// };


// function ProfileCover({ authUser, className }) {
//     const classes = useStyles();
//     const { position, cover } = myProfile;
//     const { displayName } = authUser;
//     return (
//       <div className={clsx(classes.root, className)}>
//         <Box>
//         <Box display="flex" justifyContent="flex-end" className={classes.coverWrapper}>
//         <Box position="absolute" mt={-8} mr={6}>
//             <IconButton size="medium" className={classes.iconButton} varinat="outilned">
//               <ShareRounded fontSize="medium" htmlColor="#fff"/>
//             </IconButton>
//           </Box>
//           <Box mr={4} display="flex" justifySelf="flex-start" alignItems="center">
//               <Box mx={1} textAlign="center">
//                 <Typography color="white">Entries</Typography>
//                 <Typography variant="subtitle2" color="primary">2</Typography>
//               </Box>
//               <Box mx={1} textAlign="center">
//                 <Typography color="white">Following</Typography>
//                 <Typography variant="subtitle2" color="primary">2</Typography>
//               </Box>
//               <Box mx={1} textAlign="center">
//                 <Typography color="white">Followers</Typography>
//                 <Typography variant="subtitle2" color="primary">2</Typography>
//               </Box>
//           </Box>
//         </Box>
//          <div className={classes.userInfo}>
//         <MyAvatar
//             sx={{
//               mx: 'auto',
//               borderWidth: 4,
//               borderStyle: 'solid',
//               borderColor: 'common.white',
//               width: { xs: 80, md: 128 },
//               height: { xs: 80, md: 128 }
//             }}
//           />
//           <Box
//             sx={{
//               ml: { md: 3 },
//               mt: { xs: 1, md: 0 },
//               color: 'common.white',
//               textAlign: { xs: 'center', md: 'left' }
//             }}
//           >
//             <Typography variant="h4">{displayName}</Typography>
//             <Box component="p" sx={{ typography: 'body1', opacity: 0.72 }}>
//               {position}
//             </Box>
//           </Box>
//         </div>
//         </Box>
       
//         <CardMedia
//           component="img"
//           title="profile cover"
//           data-sizes="auto"
//           src="/static/images/placeholder.svg"
//           data-src={cover.small}
//           data-srcset={`${cover.small} 600w, ${cover.medium} 960w`}
//           className={clsx(classes.cardMedia, 'lazyload blur-up')}
//         />
//       </div>
//     );
//   }
  
//   export default ProfileCover;