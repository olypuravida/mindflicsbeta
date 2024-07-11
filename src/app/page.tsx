import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Header } from '@/app/containers/header'
import { Footer } from '@/app/containers/footer'
import { SearchSection } from '@/app/containers/sections/search/SearchSection'
import { PopularSection } from '@/app/containers/sections/popular/PopularSection'
import { RecommendedSection } from '@/app/containers/sections/recommended/RecommendedSection'
import { BestPricesSection } from '@/app/containers/sections/best-prices/BestPricesSection'
import { SidebarLeft } from '@/app/containers/sections/sidebar-left/SidebarLeft'
import { TitleWelcome } from '../ui/containers/title-welcome/TitleWelcome';
import { SidebarRight } from '../ui/containers/sections/sidebar-right/SidebarRight';
import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Box component="main">
        <SidebarLeft />
        <Grid container direction="column">
          {/* <SearchSection /> */}
          <TitleWelcome />
          <PopularSection />
          <RecommendedSection />
          <BestPricesSection />
        </Grid>
        <SidebarRight />
      </Box>
      <Footer />
    </>
  )
}
