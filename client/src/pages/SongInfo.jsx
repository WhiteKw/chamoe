import React, { useState, useEffect } from "react";
import CallAPI from "util/CallAPI";

function SongInfo() {
    const [songLyric, setSongLyric] = useState("");
    const [searchText, setSerachText] = useState("");

    const [isSearch, setIsSearch] = useState(false);

    const onChangeHandler = (e) => {
        setSerachText(e.target.value);
    }

    const onSearch = () => {
        setIsSearch(true);
    }

    useEffect(() => {
        if (searchText != "" && isSearch != false) {
            CallAPI(process.env.REACT_APP_API_URL + "/api/get/lyric", "GET", { lyric: searchText })
            .then(res => {
              console.log(res);
              setSongLyric(res.data.lyric);
            });

            setIsSearch(false);
        }
      }, [isSearch]);

    return (
        <div>
            <input value={searchText} onChange={onChangeHandler} />
            <button onClick={onSearch}>가사 검색</button>
            <xmp style={{ lineHeight: "2.5", fontSize: "13.5px", fontFamily: "auto" }}>
                {songLyric}
            </xmp>
        </div>
    );
}

export default SongInfo;