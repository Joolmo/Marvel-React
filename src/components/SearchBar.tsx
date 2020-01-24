import * as React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Toolbar, AppBar, fade, InputBase } from '@material-ui/core';
import StyleConstants from '../constants/styleConstants';
import RadioMarvel from './RadioMarvel'
import { useState } from 'react';


interface IProps {
    onRadioChange: (newValue: string) => void
    onSearchPressed: (text: string) => void
}

export default function SearchBar({onRadioChange, onSearchPressed}: IProps) {
    const classes = useStyles();
    const [searchText, setSearchText] = useState("")

    return(
        <AppBar component="div" position="sticky" className={`searchBar ${classes.container}`}>
            <Toolbar className={classes.toolBarContainer}>
                <div className={classes.search}>
                    <div className={classes.searchIcon} onClick={() => onSearchPressed(searchText)}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{
                            'aria-label': 'search',
                            'onKeyPress': (e) => {
                                if(e.key === 'Enter'){
                                    onSearchPressed(searchText)
                                }
                            }
                        }}
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                </div>
                <RadioMarvel onChangeValue={onRadioChange}/>
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: StyleConstants.whiteBackGround,
        backgroundColor: StyleConstants.marvelRed,
        borderRadius: theme.shape.borderRadius,
        zIndex: 999
    },
    inputRoot: {
        color: StyleConstants.darkFontColor,
        width: "100%"
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