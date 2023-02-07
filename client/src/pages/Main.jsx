import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";

import CallAPI from "util/CallAPI";
import Definition from "util/Definition";

import Container from 'components/container/Container';
import SearchBar from 'components/searchBar/SearchBar';
import ToggleSwitch from 'components/ToggleSwitch';


const SEARCH_SONG_OF_NAME = 0;
const SEARCH_SONG_OF_SINGER_NAME = 1;

const VIEW_OPTION_ALL = 0;
const VIEW_OPTION_BRAND_TJ = 1;
const VIEW_OPTION_BRAND_KY = 2;
const VIEW_OPTION_BRAND_JOYSOUND = 3;

const searchType = {
  0: "SongName",
  1: "SignerName",
}

const compType = [
  "tj",
  "kumyoung"
]

function Main() {
  const [songSearchType, setSongSearchType] = useState(0);
  const [songList, setSongList] = useState(null);
  const [inputText, setInputText] = useState("");
  // const [singerName, setSingerName] = useState("");

  // const [viewOption, setViewOption] = useState(0);

  const [songViewOption, setSongViewOption] = useState(0);


  // const getSongListOfName = async (songName: string) => {
  //   axios.get(`https://api.manana.kr/karaoke/song/${songName}.json`)
  //   .then((response) => {
  //     console.log(response);
  //     setSongList(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
  // }

  // const getSongListOfSingerName = async (sigerName: string) => {
  //   axios.get(`httpss://api.manana.kr/karaoke/singer/${singerName}.json`)
  //   .then((response) => {
  //     console.log(response);
  //     setSongList(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
  // }

  const songSearch = async () => {
    let apiURL = "";

    switch (songSearchType) {
      case SEARCH_SONG_OF_NAME: 
        apiURL = `https://api.manana.kr/karaoke/song/${inputText}/${compType[songViewOption]}.json`;
        break;
      case SEARCH_SONG_OF_SINGER_NAME:
        apiURL = `https://api.manana.kr/karaoke/singer/${inputText}/${compType[songViewOption]}.json`;
        break;
      default:
        console.error("Error: 검색 유형을 다시 선택해주세요.");
    }

    CallAPI(apiURL)
    .then(response => {
        console.log(response);
        setSongList(response.data);
    })
    .catch(error => {
        console.log(error);
    });
  }

  return (
    <Container>
      <SearchBar
        type={songSearchType}
        typeHandler={setSongSearchType}
        compValue={songViewOption}
        compHandler={setSongViewOption}
        value={inputText}
        valueHandler={(e) => {setInputText(e.target.value.toString())}}
        searchHandler={songSearch}
        style={{marginBottom:"20px"}}
      />

      {songList &&
        <DataTable
            columns={Definition.searchSongListColumns}
            data={songList}
        />
      }

      {/* <br/>
      <br/>

      <div>
        <p>총 {songList !== null ? songList.length : 0} 개의 검색결과</p>
        <p>(카테고리에 따른 {songList && songList.filter((song) => {
            switch (songViewOption) {
              case VIEW_OPTION_ALL:
                return true;
              case VIEW_OPTION_BRAND_TJ:
                if (song.brand !== "tj") {
                  return false;
                }
                return true;
              case VIEW_OPTION_BRAND_KY:
                if (song.brand !== "kumyoung") {
                  return false;
                }
                return true;
              case VIEW_OPTION_BRAND_JOYSOUND:
                if (song.brand !== "joysound") {
                  return false;
                }
                return true;
            }
        }).length } 개의 결과 )</p>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="center">노래방</TableCell>
                    <TableCell align="center">곡 번호</TableCell>
                    <TableCell align="center">제목</TableCell>
                    <TableCell align="center">가수</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
        {songList !== null ? (
          songList.map((song) => {
            switch (songViewOption) {
              case VIEW_OPTION_ALL:
                break;
              case VIEW_OPTION_BRAND_TJ:
                if (song.brand !== "tj") {
                  return;
                }
                break;
              case VIEW_OPTION_BRAND_KY:
                if (song.brand !== "kumyoung") {
                  return;
                }
                break;
              case VIEW_OPTION_BRAND_JOYSOUND:
                if (song.brand !== "joysound") {
                  return;
                }
                break;
            }

            return (
                <TableRow key={song.no} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">{song.brand}</TableCell>
                  <TableCell align="center">{song.no}</TableCell>
                  <TableCell align="center">{song.title}</TableCell>
                  <TableCell align="center">{song.singer}</TableCell>
                </TableRow>
              );
            })
          ) : "곡을 검색해주세요." }
          </TableBody>
        </Table>
      </TableContainer> */}
    </Container>
  );
}

export default Main;
