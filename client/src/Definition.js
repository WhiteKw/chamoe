const Definition = {
    searchSongListColumns: [
        {
            name: "노래방",
            selector: row => row.brand,
            sortable: true,
            format: row => {
                if (row.brand == "uga" || row.brand == "joysound" || row.brand == "dam") {
                    return;
                }

                return row.brand;
            },
        },
        {
            name: "곡 번호",
            selector: row => row.no,
            sortable: true,
        },
        {
            name: "제목",
            selector: row => row.title,
            sortable: true,
            format: row => {
                return row.title;
            },
        },
        {
            name: "가수",
            selector: row => row.singer,
            sortable: true,
        },
    ]
}

export default Definition;