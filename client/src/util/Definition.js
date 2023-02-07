const Definition = {
    searchSongListColumns: [
        {
            name: "곡 번호",
            selector: row => row.no,
            sortable: false,
        },
        {
            name: "제목",
            selector: row => row.title,
            sortable: false,
            format: row => {
                return row.title;
            },
        },
        {
            name: "가수",
            selector: row => row.singer,
            sortable: false,
        },
    ]
}

export default Definition;