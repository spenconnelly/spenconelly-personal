import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../Components/ContentContainer'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        height: 2000,
        marginTop: theme.spacing(24)
    }
}))

function About() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ContentContainer>
                <Typography variant="h2">
                    About Placeholder
                </Typography>
            </ContentContainer>
        </div>
    )
}

export default About
