import React, { useState } from "react";
import { Box, Grid, Card, CardContent, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

function ClubManager() {
  const [clubs, setClubs] = useState([
    { name: "Tech Enthusiasts", members: 50, backgroundImage: "https://via.placeholder.com/150", essentials: "Weekly coding challenges, hackathons" },
    { name: "Art Hub", members: 30, backgroundImage: "https://via.placeholder.com/150", essentials: "Painting sessions, exhibitions" },
    { name: "Language Learners", members: 40, backgroundImage: "https://via.placeholder.com/150", essentials: "Language exchange programs" },
    // Add more clubs...
  ]);

  const [selectedClub, setSelectedClub] = useState(null);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newClub, setNewClub] = useState({ name: "", members: "", backgroundImage: "", essentials: "" });

  const handleAddClub = () => {
    if (newClub.name && newClub.members && newClub.backgroundImage && newClub.essentials) {
      setClubs([...clubs, { ...newClub, members: parseInt(newClub.members, 10) }]);
      setOpenAddDialog(false);
      setNewClub({ name: "", members: "", backgroundImage: "", essentials: "" });
    }
  };

  const handleDialogClose = () => {
    setOpenAddDialog(false);
    setNewClub({ name: "", members: "", backgroundImage: "", essentials: "" });
  };

  return (
    <Box p={4} bgcolor="#f5f5f5" minHeight="100vh">
      {selectedClub ? (
        <Box>
          <Typography variant="h4" gutterBottom>{selectedClub.name}</Typography>
          <Typography><strong>Members:</strong> {selectedClub.members}</Typography>
          <Typography><strong>Essentials:</strong> {selectedClub.essentials}</Typography>
          <img src={selectedClub.backgroundImage} alt={selectedClub.name} style={{ width: "100%", marginTop: "20px" }} />
          <Button variant="contained" color="primary" onClick={() => setSelectedClub(null)} style={{ marginTop: "20px" }}>Back to List</Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h3" textAlign="center" gutterBottom>Welcome to Club Manager</Typography>
          <Grid container spacing={3}>
            {clubs.map((club, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card onClick={() => setSelectedClub(club)} style={{ cursor: "pointer" }}>
                  <CardContent>
                    <Typography variant="h6">{club.name}</Typography>
                    <Typography variant="body2">Members: {club.members}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" marginTop={4}>
            <Button variant="contained" color="secondary" onClick={() => setOpenAddDialog(true)}>Add New Club</Button>
          </Box>
        </Box>
      )}

      {/* Add Club Dialog */}
      <Dialog open={openAddDialog} onClose={handleDialogClose}>
        <DialogTitle>Add a New Club</DialogTitle>
        <DialogContent>
          <TextField
            label="Club Name"
            fullWidth
            margin="dense"
            value={newClub.name}
            onChange={(e) => setNewClub({ ...newClub, name: e.target.value })}
          />
          <TextField
            label="Number of Members"
            type="number"
            fullWidth
            margin="dense"
            value={newClub.members}
            onChange={(e) => setNewClub({ ...newClub, members: e.target.value })}
          />
          <TextField
            label="Background Image URL"
            fullWidth
            margin="dense"
            value={newClub.backgroundImage}
            onChange={(e) => setNewClub({ ...newClub, backgroundImage: e.target.value })}
          />
          <TextField
            label="Essentials"
            fullWidth
            margin="dense"
            value={newClub.essentials}
            onChange={(e) => setNewClub({ ...newClub, essentials: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleAddClub}
            disabled={!newClub.name || !newClub.members || !newClub.backgroundImage || !newClub.essentials}
          >
            Add Club
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ClubManager;
