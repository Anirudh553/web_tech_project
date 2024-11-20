import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Select,
    MenuItem,
    Container,
    Card,
    CardContent,
    Button,
    Grid,
    Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const foodOptions = [
    { id: 1, name: "Pizza", price: 150 },
    { id: 2, name: "Burger", price: 100 },
    { id: 3, name: "Pasta", price: 120 },
    { id: 4, name: "Sushi", price: 250 },
    { id: 5, name: "Salad", price: 80 },
    { id: 6, name: "Sandwich", price: 90 },
    { id: 7, name: "Tacos", price: 130 },
    { id: 8, name: "Ice Cream", price: 70 },
    { id: 9, name: "Coffee", price: 50 },
    { id: 10, name: "Tea", price: 30 },
    { id: 11, name: "Fries", price: 60 },
    { id: 12, name: "Curry", price: 200 },
    { id: 13, name: "Noodles", price: 110 },
    { id: 14, name: "Dumplings", price: 140 },
    { id: 15, name: "Steak", price: 300 },
    { id: 16, name: "Wraps", price: 120 },
    { id: 17, name: "Quiche", price: 160 },
    { id: 18, name: "Brownie", price: 80 },
    { id: 19, name: "Pancakes", price: 90 },
    { id: 20, name: "Bagel", price: 40 }
];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PESCanteen = () => {
    const [selectedCanteen, setSelectedCanteen] = useState('');
    const [reservedFood, setReservedFood] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleReserveFood = (food) => {
        setReservedFood(food);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const estimatedDeliveryTime = () => {
        if (selectedCanteen) {
            return `Estimated delivery time is approximately ${Math.floor(Math.random() * (30 - 15 + 1)) + 15} minutes.`;
        }
        return '';
    };

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        PES University
                    </Typography>
                    <Select
                        value={selectedCanteen}
                        onChange={(e) => setSelectedCanteen(e.target.value)}
                        displayEmpty
                        style={{ color:'white', backgroundColor:'rgba(255,255,255,0.3)' }}
                    >
                        <MenuItem value="" disabled>Select canteen</MenuItem>
                        <MenuItem value="GJBC">GJBC 1</MenuItem>
                        <MenuItem value="BK">Bengaluru kitchens</MenuItem>
                        <MenuItem value="cantina">Cantina</MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>

            <Container style={{ marginTop:'20px' }}>
                <Typography variant="h4" gutterBottom align="center">
                    Food Options
                </Typography>
                <Grid container spacing={2}>
                    {foodOptions.map(food => (
                        <Grid item xs={12} sm={6} md={4} key={food.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{food.name}</Typography>
                                    <Typography variant="body2">Price - ₹{food.price}</Typography>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={() => handleReserveFood(food)} 
                                        style={{ marginTop:'10px' }}
                                    >
                                        Reserve
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h5" gutterBottom align="center" style={{ marginTop:'20px' }}>
                    Delivery Information
                </Typography>
                <Typography variant="body1" align="center">
                    {estimatedDeliveryTime()}
                </Typography>

                {/* Snackbar for reservation confirmation */}
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success">
                        You have reserved food item:<strong> {reservedFood?.name}</strong>!
                    </Alert>
                </Snackbar>
            </Container>
        </Container>
    );
};

export default PESCanteen;