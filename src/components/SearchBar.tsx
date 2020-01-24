import * as React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Toolbar, AppBar, fade, InputBase } from '@material-ui/core';
import StyleConstants from '../constants/styleConstants';
import RadioMarvel from './RadioMarvel'


interface IProps {
    
}

export default function SearchBar() {
    const classes = useStyles();

    return(
        <AppBar component="div" position="sticky" className={`searchBar ${classes.container}`}>
            <Toolbar className={classes.toolBarContainer}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <RadioMarvel onChangeValue={() => {}}/>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: StyleConstants.whiteBackGround
    },
    search: {
        width: "60%",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(StyleConstants.marvelRed, 0.30),
        '&:hover': {
          backgroundColor: fade(StyleConstants.marvelRed, 0.15)
        }
    },
    searchIcon: {
        width: theme.spacing(5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: StyleConstants.whiteBackGround,
        backgroundColor: StyleConstants.marvelRed,
        borderRadius: theme.shape.borderRadius
    },
    inputRoot: {
        color: StyleConstants.darkFontColor,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        width: '100%'
    },
    toolBarContainer: {
        marginLeft: "4%",
        justifyContent: "space-around"
    }
}))