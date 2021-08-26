import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary1,
            "&:hover": {
                
            },
        },
    }));

    const classes = useStyles();

    return (
        <div key={id} className={`education-card ${classes.educationCard}`} >
            <div className="educard-img" style={{backgroundColor: theme.primary}}>
                <img src={theme === 'light' ? eduImgBlack : eduImgWhite} alt="" />
            </div>
            <div className="education-details">
                <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                <h4 style={{color: theme.secondary}}>{course}</h4>
                <h5 style={{color: theme.secondary1}}>{institution}</h5>
            </div>
        </div>
        
    )
}

export default EducationCard
