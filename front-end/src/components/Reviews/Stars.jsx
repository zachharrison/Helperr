import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GradeIcon from '@material-ui/icons/Grade';
import { useStyles } from '@material-ui/pickers/views/Calendar/Day';


const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

const StyledRating = withStyles({
  icon: {
    fontSize: '50px',
  },
  iconFilled: {
    color: '#02539b',
  },
  iconHover: {
    color: '#02539b',
  },
  heading: {
    textAlign: 'center;',
    color: 'pink;'
  }
})(Rating);

const Styles = makeStyles({
  header: {
    textAlign: 'center;',
  },

  text: {
    textAlign: 'center;',
  }
    
  
})

const customIcons = {
  1: {
    icon: <GradeIcon/>,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <GradeIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <GradeIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <GradeIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <GradeIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};



export default function CustomizedRatings(props) {
  const classes = Styles();
  const {starValue, setStarValue} = props
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <h1 className={classes.header}>Rate!</h1>
        <StyledRating
          size="large"
          name="customized-color"
          value={starValue}
          getLabelText={(starValue) => customIcons[starValue].label}
          onChange={(event, newValue) => {
            setStarValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {starValue !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : starValue]}</Box>
        )}
      </Box>

    </div>
  );
}