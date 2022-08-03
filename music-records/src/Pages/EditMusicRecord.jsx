import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMusicRecords, updateMusicRecord } from '../Redux/AppReducer/action';
import { useSelector } from 'react-redux';
const EditMusicRecord = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const [musicName,setMusicName] = useState("");
  const[artistName,setArtistName] =useState('');

  const handleSubmit =() =>{
    if(musicName && artistName){
      const payload= {
        name: musicName,
        artist: artistName
      }
      dispatch(updateMusicRecord(id,payload)).then(()=>{
        dispatch(getMusicRecords());
    })
    }
  }
  useEffect(() => {
    if(id){
    const currentMusic = musicRecords.find((album) => album.id === id);
    currentMusic && setCurrentMusicAlbum(currentMusic);
    if(currentMusic){
      setMusicName(currentMusic.name);
      setArtistName(currentMusic.artist);
    }
  }
  }, [id, musicRecords]);

  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Edit Music Name</label>
        <input
        value={musicName}
        onChange={(e)=>setMusicName(e.target.value)}
        />
      </div>
      <div>
        <label>Edit Artist Name</label>
        <input
        value={artistName}
        onChange={(e)=>setArtistName(e.target.value)}
        />
      </div>
      <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditMusicRecord;