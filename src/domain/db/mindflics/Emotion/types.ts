import type { Optional } from 'sequelize'

export interface EmotionAttributes {
    main: string
    emotion: string
}

export interface EmotionTableAttributes {
  main: string
  emotion: string
}


export interface EmotionCreationAttributes extends Optional<EmotionAttributes, 'main' > {}

