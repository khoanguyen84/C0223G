import React, { useState } from "react";

const memberList = ["Phước", "Hải", "Nhật", "Nguyên", "Huy", "Minh Anh", "Trường", "Duy"]
console.log(memberList);

function DrinkBeer() {
    const [member, setMember] = useState(null)

    const handleGetRandomMember = () => {
        // let rnd = Math.floor(Math.random() * memberList.length)
        // setMember(memberList[rnd])

        setMember(() => {
            let rnd = Math.floor(Math.random() * memberList.length)
            return memberList[rnd]
        })
    }
    return (
        <div className="ms-5">
            <h1 className="display-5 text-danger">{member || "There is no member"}</h1>
            <button className="btn btn-primary" onClick={handleGetRandomMember}>Get Member</button>
        </div>
    )
}

export default DrinkBeer;