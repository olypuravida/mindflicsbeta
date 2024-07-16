import React from 'react'
// import { redirect } from 'next/navigation'
import { Divider, Grid, Typography } from '@mui/material'

//import { Logo } from '@/app/components/common/logo/Logo'
import { Link } from '@/app/components/common/link/Link'
// import { useSession } from '@/domain/hooks/cookies'
import styles from './styles.module.scss'
import { LogoMindflics } from '@/app/components/common/logo-mindflics'
import { SignUpFormAdmins } from '@/app/containers'

export default async function SignUpAdmins() {
  // const session = useSession()
  // if (session) return redirect('/')

  return (
    <Grid container className={ styles.container }>
      <Grid item className={ styles.heading }>

        <LogoMindflics />

      </Grid>

      <Grid item className={ styles.title }>
        <Typography className={ styles.titleh4 } sx={ { color: 'primary.dark' } } variant="h4">
          Sign Up Admin
        </Typography>

        <Typography color="gray" variant="body1">
          Enter your credentials to continue
        </Typography>
      </Grid>

      <Grid item className={ styles.form }>
        <SignUpFormAdmins />
      </Grid>

      <Grid item className={ styles.footer }>
        <Divider className={ styles.divider } />

        <Link className={ styles.titleh4 } href="/auth/sign-in" variant="body2">
          Already have an account? Sign In
        </Link>

        <Link className={ styles.titleh4 } href="/" variant="body2">
          Back to home
        </Link>
      </Grid>
    </Grid>
  )
}
