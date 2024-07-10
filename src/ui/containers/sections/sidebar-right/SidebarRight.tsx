'use client'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MenuLeft } from '../menu-left/MenuLeft';
import styles from './styles.module.scss'
import Stack from '@mui/material/Stack';
import { ProfileSection } from '../../header/components/profile-section';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export function SidebarRight() {
    return (
        <Grid item xs={4}>
            <Container className={ styles.container }>

            <Stack className={ styles.toolbarRight }>
                <ProfileSection />
                <Container className={ styles.badge_container }>
                    <WorkspacePremiumIcon fontSize="small" />
                    <WorkspacePremiumIcon fontSize="small" />
                    <WorkspacePremiumIcon fontSize="small" />
                </Container>
            </Stack>
                
            </Container>
        </Grid>
    )
}