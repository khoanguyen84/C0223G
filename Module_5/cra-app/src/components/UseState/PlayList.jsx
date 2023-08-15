import React, { useState } from "react";
import ListItem from "./ListItem";

function PlayList() {
    const [playList, setPlayList] = useState([
        {
            id: 1,
            name: "Ánh nắng xa dần"
        },
        {
            id: 2,
            name: "Cơn mưa ngang qua"
        }
    ])
    const [songName, setSongName] = useState('')
    const [newSongName, setNewSongName] = useState()
    const [editSong, setEditSong] = useState(null)

    const handleAddSong = (e) => {
        e.preventDefault();
        setPlayList((prev) => {
            let newList = [...prev];
            newList.sort((song_1, song_2) => song_2.id - song_1.id)
            return [
                ...prev,
                {
                    id: newList[0].id + 1,
                    name: songName
                }
            ]
        })
        setSongName('')
    }

    const handleRemoveSong = (song) => {
        let confirm = window.confirm(`Are you sure remove song: ${song.name}?`)
        if (confirm) {
            setPlayList((prev) => {
                let newList = prev.filter((item) => item.id != song.id)
                return newList;
            })
        }
    }

    const handleNewSongName = (e) => {
        setNewSongName(e.target.value)
    }

    const handleUpdateSong = (song) => {
        setPlayList((prev) => {
            let newList = prev.map((item) => {
                if (item.id == song.id) {
                    item.name = newSongName
                }
                return item;
            })
            return newList;
        })
        setEditSong()
        setNewSongName()
    }
    console.log(playList);
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="row col-sm-6">
                    <h1 className="text-danger">PlayList</h1>
                    <form onSubmit={handleAddSong} className="d-flex">
                        <input type="text" className="form-control" name="songName"
                            value={songName}
                            onInput={(e) => setSongName(e.target.value)}
                        />
                        <button className="btn btn-sm btn-success">
                            <i className="fa fa-plus ms-2">Add</i>
                        </button>
                    </form>
                </div>
                <div className="row col-sm-6 mt-2">
                    <ul className="list-group">
                        {
                            playList.map((song) => (
                                <ListItem key={song.id} song={song}
                                    editSong={editSong}
                                    handleUpdateSong={handleUpdateSong}
                                    setEditSong={setEditSong}
                                    handleRemoveSong={handleRemoveSong}
                                    handleNewSongName = {handleNewSongName}
                                    newSongName = {newSongName}
                                />
                                // <li key={song.id} className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between">
                                //     {
                                //         (editSong && editSong.id == song.id) ? (
                                //             <>
                                //                 <input className="form-control w-75" value={newSongName || song.name} onInput={handleNewSongName} />
                                //                 <div>
                                //                     <i role="button" className="fa fa-save text-dark me-2"
                                //                         onClick={() => handleUpdateSong(song)}
                                //                     />
                                //                     <i role="button" className="fa fa-times text-primary"
                                //                         onClick={() => setEditSong()}
                                //                     />
                                //                 </div>
                                //             </>
                                //         ) : (
                                //             <>
                                //                 <span>{song.id}. {song.name}</span>
                                //                 <div>
                                //                     <i role="button" className="fa fa-trash text-danger me-2"
                                //                         onClick={() => handleRemoveSong(song)}
                                //                     />
                                //                     <i role="button" className="fa fa-edit text-warning"
                                //                         onClick={() => setEditSong(song)}
                                //                     />
                                //                 </div>
                                //             </>
                                //         )
                                //     }
                                // </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default PlayList;