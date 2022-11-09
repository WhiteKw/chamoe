const Definition = {
    searchSongListColumns: [
        {
            name: "노래방",
            selector: row => row.brand,
        },
        {
            name: "곡 번호",
            selector: row => row.no,
        },
        {
            name: "제목",
            selector: row => row.title,
        },
        {
            name: "가수",
            selector: row => row.singer,
        },
    ]
}

export default Definition;