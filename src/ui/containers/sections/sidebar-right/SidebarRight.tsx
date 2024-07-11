'use client'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MenuLeft } from '../menu-left/MenuLeft';
import styles from './styles.module.scss'
import Stack from '@mui/material/Stack';
import { ProfileSection } from '../../header/components/profile-section';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Assignments } from '../assignments/Assignments';
import { Messages } from '../messages/Messages';
import Button from '@mui/material/Button';

export function SidebarRight() {
    return (
        <Grid item xs={4}>
            <Container className={ styles.container }>

                <Stack className={ styles.toolbarRight }>
                    <ProfileSection />
                </Stack>
                
                <Container className={ styles.badge_container }>
                    <WorkspacePremiumIcon className={ styles.icon_badge } fontSize="large" />
                    <WorkspacePremiumIcon className={ styles.icon_badge } fontSize="large" />
                    <WorkspacePremiumIcon className={ styles.icon_badge } fontSize="large" />
                </Container>

                <Container>
                    <Assignments />
                    <Messages/>
                </Container>

                <Container>
                <Button 
                    variant="contained" 
                    size="large"
                    className={ styles.button_journal }>
                Create a Journal Entry
                </Button>
                </Container>
                
            </Container>
        </Grid>
    )
}