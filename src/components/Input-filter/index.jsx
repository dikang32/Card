import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { PEOPLE } from "../../data/people";
import { getImageUrl } from "../../utils/image.js";
import { useState } from "react";
function Input_Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };
  const handleSearch = (searchTerm) => {
    const results = PEOPLE.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ddd",
        }}
      >
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          sx={{ marginBottom: "20px" }}
          onChange={(e) => handleOnChange(e)}
        />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5">Scientists</Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {searchResults.map((person) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={getImageUrl(person)} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={person.name}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {person.profession + " known for "}
                          </Typography>
                          {person.accomplishment}
                        </>
                      }
                    />
                  </ListItem>
                </>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Input_Filter;
