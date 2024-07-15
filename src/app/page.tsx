import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Footer } from '@/app/containers/footer'
import { PopularSection } from '@/app/containers/sections/popular/PopularSection'
import { RecommendedSection } from '@/app/containers/sections/recommended/RecommendedSection'
import { BestPricesSection } from '@/app/containers/sections/best-prices/BestPricesSection'
import { SidebarLeft } from '@/app/containers/sections/mindflics/sidebar-left'
import { TitleWelcome } from '../ui/containers/title-welcome/TitleWelcome'
import { SidebarRight } from '@/app/containers/sections/mindflics/sidebar-right'


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Box component="main">
        <SidebarLeft />

        <Grid container direction="column">
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
