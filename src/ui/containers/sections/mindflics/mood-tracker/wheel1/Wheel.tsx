'use client'

import React, { useMemo, useRef } from 'react'
import type { CSSProperties } from 'react'
import * as d3 from 'd3'

import styles from './styles.module.css'
import { useRouter } from 'next/navigation'


type DataItem = {
  name: string
  color: string
}
type PieChartProps = {
  items: DataItem[]
  style?: CSSProperties
  size?: number
  onClickItem?: (item: DataItem) => void
  labelRadius?: number
}

const MARGIN = 30
const VALUE = 1

export function Wheel(props: PieChartProps) {
  const {
    items,
    style,
    size = 300,
    onClickItem,
    labelRadius = 0.8,
  } = props

  const router = useRouter()

  const ref = useRef<SVGSVGElement>(null)
  const radius = Math.min(size, size) / 2 - MARGIN

  const pie = useMemo(() => {
    const pieGenerator = d3.pie<any, DataItem>().value(() => VALUE)
    return pieGenerator(items)
  }, [items])

  const arcGenerator = d3.arc()

  const shapes = useMemo(() => (
    pie.map((p: { startAngle: any; endAngle: any; data: { name: any; color: any } }) => {
      const info = {
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      }
      const path = arcGenerator(info)

      const onMouseEnter = () => {
        if (ref.current) {
          ref.current.classList.add(styles.hasHighlight)
        }
      }

      const onMouseLeave = () => {
        if (ref.current) {
          ref.current.classList.remove(styles.hasHighlight)
        }
      }

      const onMouseClick = () => {
        if (onClickItem) {
          //onClickItem(p.data)
          router.push('/mood/response')
        }
      }

      const labelTransform = (d: any) => {
        const x = (d.endAngle + d.startAngle) / 2 * 180 / Math.PI
        const y = radius * labelRadius
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`
      }

      return (
        <g
          className={ styles.slice }
          key={ p.data.name }
          onClick={ onMouseClick }
          onMouseEnter={ onMouseEnter }
          onMouseLeave={ onMouseLeave }
        >
          <path d={ path as any } fill={ p.data.color } />

          <text
            alignmentBaseline="middle"
            className={ styles.label }
            textAnchor="middle"
            transform={ labelTransform(p) }
          >
            { p.data.name }
          </text>
        </g>
      )
    })
  ), [radius, pie])

  return (
    <svg height={ size } style={ { ...style, borderRadius: '50%' } } width={ size }>
      <g className={ styles.container } ref={ ref } transform={ `translate(${size / 2}, ${size / 2})` }>
        { shapes }
      </g>
    </svg>
  )
}