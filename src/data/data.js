import slide1 from 'assets/images/slide1.jpg'
import slide2 from 'assets/images/slide2.jpg'
import slide3 from 'assets/images/slide3.jpg'
import boximage1 from 'assets/images/box-image-1.jpg'
import boximage from 'assets/images/box-image.jpg'
import bb12 from 'assets/images/bb12.jpg'
import bb3 from 'assets/images/bb3.jpg'
import bb14 from 'assets/images/bb14.jpg'
import bb4 from 'assets/images/bb4.jpg'
import bb2 from 'assets/images/bb2.jpg'
import bb16 from 'assets/images/bb16.jpg'

export const slides = [
    {
        id: 1,
        title: 'Creator of the day',
        mainHeader: 'The no1. platform for showcasing or finding creators & innovators.',
        image: slide1
    },
    {
        id: 2,
        title: 'Talent of the week',
        mainHeader: 'Platform for showcasing or finding creators & innovators.',
        image: slide2
    },
    {
        id: 3,
        title: 'Winner of TikTok contest',
        mainHeader: 'Find creators & innovators.',
        image: slide3
    },
]

export const box = [
    {
        id: 1,
        title: 'Tesla Challenge',
        content: 'Find creators & innovators.',
        likes: 20,
        date: 'May 12, 2021',
        hostName: 'maguyva',
        contestImg: bb2
    },
    {
        id: 2,
        title: 'Hong Kong National Call',
        content: 'Platform for showcasing',
        likes: 1 + 'k',
        date: 'Jan 19, 2021',
        hostName: 'magik kid',
        contestImg: bb4
    },
    {
        id: 3,
        title: 'Art Basle Open Call',
        content: 'Creator of the day',
        likes: 200,
        date: 'Nov 01, 2021',
        hostName: 'montana',
        contestImg: bb16
    }
]

export const blogbox = [
    {
        id: 1,
        title: 'Tesla Challenge',
        content: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
        like: 20,
        category: 'Events',
        img: bb14,
        date: '',
        name: 'Mack mittens',
        

    },
    {
        id: 2,
        title: 'Hong Kong National Call',
        content: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        like: 1 + 'k',
        category: 'Insights',
        img: bb3,
        date: '',
        name: 'Joe Bloggs'
    },
    {
        id: 3,
        title: 'Art Basle Open Call',
        content: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        like: 200,
        category: 'Photograpy',
        img: bb12,
        date: '',
        name: 'Frand Mason'
    }
]