import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography,
  } from "@mui/material";
  import { PEOPLE } from "../../data/people";
  import { getImageUrl } from "../../utils/image.js";
  import { useState } from "react";
  function Click_Filter() {
    const [number, setNumber] = useState(0);
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
          {/* Component Stack như một cái flexbox, thay vì viết một thẻ rồi flexbox dài thì dùng Stack để nhanh gọn */}
          <Stack direction={"row"} gap={4} alignItems={"center"} marginBottom={2}>
            <Button
              variant="contained"
              onClick={() => {
                if (number > 0) {
                  setNumber(number - 1);
                }
              }}
            >
              Giảm
            </Button>
            <Typography>{number}</Typography>
            <Button
              variant="contained"
              onClick={() => {
                if (number < 4) {
                  setNumber(number + 1);
                }
              }}
            >
              Tăng
            </Button>
          </Stack>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Scientists</Typography>
              <List
                sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              >
                {PEOPLE.map((person) =>
                  person.id === number ? (
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
                  ) : null
                )}
              </List>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  }
  
  export default Click_Filter;
  