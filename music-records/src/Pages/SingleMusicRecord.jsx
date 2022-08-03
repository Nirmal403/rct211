import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMusicRecords } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleMusicRecord = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});

  useEffect(()=>{
    if(musicRecords.length===0){
      dispatch(getMusicRecords());
    }
  },[dispatch,musicRecords.length]);

  useEffect(() => {
    if(id){
    const currentMusic = musicRecords.find((album) => album.id === id);
    currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  }, [id, musicRecords]);

  return <div>
    <h1>{currentMusicAlbum.name}</h1>
    <div>
      <Link to={`/music/${id}/edit`}>Edit</Link>
    </div>
    </div>;
};

export default SingleMusicRecord;
