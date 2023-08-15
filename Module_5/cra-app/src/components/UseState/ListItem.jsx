import React from "react";

function ListItem(props) {
    const { song, editSong, handleUpdateSong, setEditSong, handleRemoveSong, handleNewSongName, newSongName } = props;
    return (
        <li key={song.id} className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between">
            {
                (editSong && editSong.id == song.id) ? (
                    <>
                        <input className="form-control w-75" value={newSongName || song.name} onInput={handleNewSongName} />
                        <div>
                            <i role="button" className="fa fa-save text-dark me-2"
                                onClick={() => handleUpdateSong(song)}
                            />
                            <i role="button" className="fa fa-times text-primary"
                                onClick={() => setEditSong()}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <span>{song.id}. {song.name}</span>
                        <div>
                            <i role="button" className="fa fa-trash text-danger me-2"
                                onClick={() => handleRemoveSong(song)}
                            />
                            <i role="button" className="fa fa-edit text-warning"
                                onClick={() => setEditSong(song)}
                            />
                        </div>
                    </>
                )
            }
        </li>
    )
}

export default ListItem;