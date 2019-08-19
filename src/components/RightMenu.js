import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image2 from '../assets/landing_page_img_2.JPG';
import image3 from '../assets/landing_page_img_3.JPG';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '85%',
    backgroundColor: 'white',
    color: 'gray',
  },
  rootMt: {
    marginTop: theme.spacing(2),
  },
  otherBtnsMt: {
    marginTop: theme.spacing(1),
  },
  imgMt: {
      marginTop: '10px'
  }
}));

export default function RightMenu() {
  const classes = useStyles();
  const { root, rootMt, otherBtnsMt, imgMt } = classes;

  return (
    <div>
        <Button className={ `${root} ${rootMt}` }>POST A JOB</Button>
        <Button className={ `${root} ${otherBtnsMt}` }>POST A CV</Button>
        <Button className={ `${root} ${otherBtnsMt}` }>UPDATES</Button>
        <img src={image2} alt="img 2" className={imgMt} />
        <img src={image3} alt="img 3" className={imgMt} />
    </div>
  );
}