import Grid from '@mui/material/Grid'
import React from 'react'
import styles from './styles.module.scss'
import { Typography } from '@mui/material'

export function VideosStudentsEntriesItems() {
  return (
    <Grid container className={ styles.grid_assignments } spacing={ 2 }>
      <Grid item xs={ 7 }>
        <svg
          fill="none"
          height="94"
          viewBox="0 0 168 94"
          width="168"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g clipPath="url(#clip0_223_7121)">
            <rect
              fill="url(#pattern0_223_7121)"
              height="94"
              rx="8"
              width="168"
            />

            <path d="M-1 -10H170V113H-1z" fill="url(#pattern1_223_7121)" />
          </g>

          <defs>
            <pattern
              height="1"
              id="pattern0_223_7121"
              patternContentUnits="objectBoundingBox"
              width="1"
            >
              <use
                transform="matrix(.01563 0 0 .02793 0 -.394)"
                xlinkHref="#image0_223_7121"
              />
            </pattern>

            <pattern
              height="1"
              id="pattern1_223_7121"
              patternContentUnits="objectBoundingBox"
              width="1"
            >
              <use
                transform="matrix(.00379 0 0 .00526 -.002 0)"
                xlinkHref="#image1_223_7121"
              />
            </pattern>

            <clipPath id="clip0_223_7121">
              <rect
                fill="#fff"
                height="94"
                rx="8"
                width="168"
              />
            </clipPath>

            <image
              height="64"
              id="image0_223_7121"
              width="64"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"
            />

            <image
              height="190"
              id="image1_223_7121"
              width="265"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>

      </Grid>

      <Grid item className={ styles.grid_second_assignment } xs={ 5 }>
        <Typography className={ styles.title_video_student_entries }>
          Video Title #######
        </Typography>

        <Typography className={ styles.title_video_student_entries }>
          #############
        </Typography>

        <Typography className={ styles.subtitle_video_student_entries }>
          Category name
        </Typography>

        <Typography className={ styles.subtitle_video_student_entries }>
          Time ##:##
        </Typography>
      </Grid>
    </Grid>
  )
}