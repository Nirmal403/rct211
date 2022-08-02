import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords } from "../Redux/action";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.musicRecords);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      //dispatch(getMusicRecords())
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);

  return (
    <>
      {musicRecords.length > 0 &&
        musicRecords.map((album) => {
          return (
            <MusicRecordsWrapper key={album.id}>
              <div>{album.name}</div>
              <div>
                <img src={album.img} alt={album.name} />
              </div>
              <div>{album.genre}</div>
              <div>{album.year}</div>
            </MusicRecordsWrapper>
          );
        })}
    </>
  );
};

export default MusicRecords;

const MusicRecordsWrapper = styled.div`
  width: 300px;
  border: 1px solid green;
  
`;