import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { PEOPLE } from "./data/people.js";
import { getImageUrl } from "./utils/image.js";
function App() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ddd",
        }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5">Scientists</Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {PEOPLE.map((person) => (
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

export default App;
