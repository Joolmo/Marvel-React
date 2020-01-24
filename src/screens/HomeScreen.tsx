import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, SearchBar } from "../components";
import { IMarvelProjection } from "../types";
import { CharacterService } from '../services/characterService'
import { ComicService } from "../services/comicService";
import { makeStyles } from "@material-ui/core/styles";


export default function CharacterScreen() {

  const limit = 30;
  const [characters, setCharacters] = useState<IMarvelProjection[]>([])
  const [comics, SetComics] = useState<IMarvelProjection[]>([])
  const [offsetCharacters, setOffsetCharacters] = useState(0)
  const [offsetComics, setOffsetComics] = useState(0)
  const [hasMoreComics, setHasMoreComics] = useState(true)
  const [hasMoreCharacters, setHasMoreCharacters] = useState(true)
  const [comicNameStartsWith, setComicNameStartsWith] = useState("")
  const [characterNameStartsWith, setCharacterNameStartsWith] = useState("")
  const [typeOfData, setTypeOfData] = useState<"comic" | "character">("character")
  const classes = useStyles();

  useEffect(() => {
    if(typeResolver().offset > 0) {
      typeResolver().setHasMore(true)
      getProjections({
        offset: typeResolver().offset,
        limit: limit, 
        ...typeResolver().nameStartsWith 
      })
    }
  }, [offsetComics, offsetCharacters])

  useEffect(() => {
    if(typeResolver().marvelProjections.length == 0){
      typeResolver().setOffset(0)
      typeResolver().setHasMore(true)
      getProjections({ 
        offset: typeResolver().offset, 
        limit: limit, 
        ...typeResolver().nameStartsWith 
      }, true)
    }
  }, [typeOfData])

  useEffect(() => {
    typeResolver().setHasMore(true)
    typeResolver().setOffset(0)
    getProjections({ 
      offset: typeResolver().offset, 
      limit: limit, 
      ...typeResolver().nameStartsWith 
    }, true)
  }, [comicNameStartsWith, characterNameStartsWith])

  const typeResolver = () => {
    return {
      offset: typeOfData == "comic" ? offsetComics : offsetCharacters,
      setOffset: typeOfData === "character" ? setOffsetCharacters : setOffsetComics,
      hasMore: typeOfData === "character" ? hasMoreCharacters: hasMoreComics,
      setHasMore: typeOfData === "character" ? setHasMoreCharacters: setHasMoreComics,
      marvelProjections: typeOfData === "character" ? characters: comics,
      setMarvelProjections: typeOfData === "character" ? setCharacters: SetComics,
      service: typeOfData === "character" ? CharacterService.getCharacters: ComicService.getComics,
      nameStartsWith: typeOfData === "character" ? { nameStartsWith: characterNameStartsWith } : { titleStartsWith: comicNameStartsWith },
      setNameStartsWith: typeOfData === "character" ? setCharacterNameStartsWith : setComicNameStartsWith
    }
  }

  const getProjections = (params: any, reset = false) => {
    typeResolver().service(params).then(projectionsList => {
        if (projectionsList.length === 0) {
          typeResolver().setHasMore(false)
        }
        if (reset) {
          typeResolver().setMarvelProjections(projectionsList)
        } else {
          typeResolver().setMarvelProjections(prevState => [...prevState, ...projectionsList])
        }
    })
  }

  return (
    <div id="HomeContainer">
      <SearchBar 
        onRadioChange={ (value) => {
          setTypeOfData(value === "character" ? "character" : "comic")
          window.scrollTo(0, 0)
        }}
        onSearchPressed={(text) => typeResolver().setNameStartsWith(text)}
      />
      <InfiniteScroll
          dataLength={typeResolver().marvelProjections.length}
          next={() => {
            if (typeResolver().marvelProjections.length > 0) {
              typeResolver().setOffset(state => state + limit)
            }
          }}
          hasMore={typeResolver().hasMore}
          loader={<h4 style={{textAlign: "center"}}>Loading...</h4>}
        >
          {typeResolver().marvelProjections.map((item, index) => (
            <div className={classes.projectionCard} key={index}>
              <Card
                id={item.id}
                title={item.nameTitle}
                titleLabel="NAME"
                contentLabel="ID"
                thumbnail={item.thumbnail}
                navigationPath={`/${typeOfData == "character" ? "CharacerDetail" : "ComicDetail"}/${item.id}`}
              />
            </div>
          ))}
        </InfiniteScroll>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  projectionCard: {
    padding: 10
  }
}))