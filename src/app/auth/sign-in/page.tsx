import React from 'react'
// import { redirect } from 'next/navigation'
import { Divider, Grid, Typography } from '@mui/material'

import { Link } from '@/app/components/common/link/Link'
import { SignInForm } from '@/app/containers/forms/signin/SignInForm'
// import { useSession } from '@/domain/hooks'
import styles from './styles.module.scss'
import { LogoMindflics } from '@/app/components/common/logo-mindflics'

export default async function SignIn() {
  // const session = useSession()
  // if (session) return redirect('/')

  return (
    <Grid container className={ styles.container }>
      <Grid item className={ styles.heading }>
        <LogoMindflics />
      </Grid>
      
      <Grid item className={ styles.title }>
        <Typography className={ styles.h4_mindflics } sx={ { color: 'primary.dark' } } variant="h4">
          Hi, Welcome Back
        </Typography>

        <Typography color="gray" variant="body1">
          Enter your credentials to continue
        </Typography>
      </Grid>

      <Grid item className={ styles.form }>
        <SignInForm />
      </Grid>

      <Grid item className={ styles.footer }>
        <Divider className={ styles.divider } />

        <Link className={ styles.h4_mindflics } href="/auth/sign-up" variant="body2">
          { 'Don\'t have an account? Sign Up' }
        </Link>

        <Link className={ styles.h4_mindflics } href="/" variant="body2">
          { 'Back to home' }
        </Link>
      </Grid>
    </Grid>
  )
}
