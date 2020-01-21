import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from "../../components";
import { IMarvelProjection } from "../../types";
import { CharacterService } from '../../services/characterService'
import { ComicService } from "../../services/comicService";


export default function CharacterScreen() {
  const limit = 30;
  const [projections, setProjections] = useState<IMarvelProjection[]>([])
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [typeOfData, setTypeOfData] = useState<"comic" | "character">("character")

  useEffect(() => {
    getProjections({ offset, limit })
  }, [offset])

  const getProjections = (params: any, reset = false) => {
    (typeOfData === "character"? CharacterService.getCharacters: ComicService.getComics)(params).then(projectionsList => {
        if (projectionsList.length === 0) {
            setHasMore(false)
        }
        if (reset) {
            setProjections(projectionsList)
        } else {
            setProjections(state => [...state, ...projectionsList])
        }
    })
  }

  const reset = () => {
    getProjections({ offset, limit }, true)
  }

  return (
    <div>
      <InfiniteScroll
          dataLength={projections.length}
          next={() => {
            if (projections.length > 1) {
                setOffset(state => state + limit)
            }
          }}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {projections.map((item, index) => (
            <Card id={item.id}title={item.nameTitle}
              key={index}
              titleLabel="NAME"
              contentLabel="ID"
              thumbnail={item.thumbnail}
            />
          ))}
        </InfiniteScroll>
    </div>
  )
}