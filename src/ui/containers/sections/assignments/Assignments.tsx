'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import styles from './styles.module.scss'
import ListIcon from '@mui/icons-material/List';


export function Assignments() {
    return (
        <Card sx={{ minWidth: 275 }} className={ styles.container_message }>
            <CardContent>
                <Typography 
                    variant="h5" 
                    component="div" 
                    className={ styles.title_assignment }>
                    My Assignments
                </Typography>

                <Grid container spacing={2} className={ styles.grid_assignments }>
                    <Grid item xs={8}>
                        <Chip 
                            icon={<OndemandVideoIcon className={ styles.icon_chip_first_assignment } />} 
                            label="#videoName" 
                            className={ styles.chip_first_assignment }
                        />
                    </Grid>
                    <Grid className={ styles.grid_second_assignment } item xs={4}>
                        <Chip 
                            label="08/12/2024 | 16:01" 
                            className={ styles.chip_second_assignment }
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} className={ styles.grid_assignments }>
                    <Grid item xs={8}>
                        <Chip 
                            icon={<ListIcon className={ styles.icon_chip_first_assignment } />} 
                            label="#researchName" 
                            className={ styles.chip_first_assignment }
                        />
                    </Grid>
                    <Grid className={ styles.grid_second_assignment } item xs={4}>
                        <Chip 
                            label="08/12/2024 | 16:01" 
                            className={ styles.chip_second_assignment }
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} className={ styles.grid_assignments }>
                    <Grid item xs={8}>
                        <Chip 
                            icon={<OndemandVideoIcon className={ styles.icon_chip_first_assignment } />} 
                            label="#videoName" 
                            className={ styles.chip_first_assignment }
                        />
                    </Grid>
                    <Grid className={ styles.grid_second_assignment } item xs={4}>
                        <Chip 
                            label="08/12/2024 | 16:01" 
                            className={ styles.chip_second_assignment }
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} className={ styles.grid_assignments }>
                    <Grid item xs={8}>
                        <Chip 
                            icon={<OndemandVideoIcon className={ styles.icon_chip_first_assignment } />} 
                            label="#videoName" 
                            className={ styles.chip_first_assignment }
                        />
                    </Grid>
                    <Grid className={ styles.grid_second_assignment } item xs={4}>
                        <Chip 
                            label="08/12/2024 | 16:01" 
                            className={ styles.chip_second_assignment }
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} className={ styles.grid_assignments }>
                    <Grid item xs={8}>
                        <Chip 
                            icon={<ListIcon className={ styles.icon_chip_first_assignment } />} 
                            label="#researchName" 
                            className={ styles.chip_first_assignment }
                        />
                    </Grid>
                    <Grid className={ styles.grid_second_assignment } item xs={4}>
                        <Chip 
                            label="08/12/2024 | 16:01" 
                            className={ styles.chip_second_assignment }
                        />
                    </Grid>
                </Grid>

            </CardContent>
            <CardActions className={ styles.card_actions_assigment }>
                <Button 
                    variant="outlined" 
                    size="small"
                    className={ styles.button_assignment }>See more
                </Button>
            </CardActions>
        </Card>
    )
}