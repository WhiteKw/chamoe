import React from "react";

import styles from "./SearchBar.module.css";

import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { height, padding } from "@mui/system";

function Button({searchHandler}) {
  return (
    <div className={styles.Button} onClick={searchHandler}>
      <SearchIcon/>
    </div>
  );
}

function KeyPress(e, action) {
  if (e.key == "Enter") {
    action();
  }
}

function SearchBar({type, typeHandler, compValue, compHandler, value, valueHandler, searchHandler, style}) {
  return (
    <div style={style}>
      <div className={styles.OptionArea}>
        <div>
        <Select
          variant="standard"
          disableUnderline
          value={type}
          onChange={(e) => typeHandler((Number(e.target.value)))}
          sx={{
            height: "100%",
            border: "none",
            borderRadius: "5px",
            background: "#fff",
            boxShadow: 'none',
            ".MuiSelect-select": {padding:"0 10px"},
            ".MuiOutlinedInput-notchedOutline": { border: 0 }
          }}
        >
          <MenuItem value={0}>곡이름</MenuItem>
          <MenuItem value={1}>가수명</MenuItem>
        </Select>

        </div>
        <div className={styles.Comp}>
          <div className={compValue == 0 ? styles.On : undefined} onClick={() => compHandler(0)}>TJ</div>
          <div className={compValue == 1 ? styles.On : undefined} onClick={() => compHandler(1)}>KY</div>
        </div>
      </div>

      <div className={styles.TextArea}>
        <input type="text" placeholder="검색어를 입력해주세요." value={value} onChange={valueHandler} onKeyDown={(e) => KeyPress(e, searchHandler)}/>
        <Button searchHandler={searchHandler}/>
      </div>
    </div>
  )
}

export default SearchBar;