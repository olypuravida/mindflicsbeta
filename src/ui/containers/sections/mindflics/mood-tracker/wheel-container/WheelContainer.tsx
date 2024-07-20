import React from 'react'
import { Wheel } from '../wheel1/Wheel'

export function WheelCotainer() {
  const items1 = [
    { name: 'Angry', color: '#c84204', main: 'Angry' },
    { name: 'Scared', color: '#c585b5', main: 'Scared' },
    { name: 'Happy', color: '#cf7088', main: 'Happy' },
    { name: 'Powerful', color: '#ffab04', main: 'Powerful' },
    { name: 'Paceful', color: '#2a761e', main: 'Paceful' },
    { name: 'Sad', color: '#1a98cb', main: 'Sad' },
  ]

  const items2 = [
    { name: 'Hostile', color: '#f5965a', main: 'Angry' },
    { name: 'Hurt', color: '#f5965a', main: 'Angry' },
    { name: 'Rage', color: '#f5965a', main: 'Angry' },
    { name: 'Stressed', color: '#f5965a', main: 'Angry' },
    { name: 'Critical', color: '#f5965a', main: 'Angry' },
    { name: 'Annoyed', color: '#f5965a', main: 'Angry' },
    { name: 'Weak', color: '#d2a0c3', main: 'Scared' },
    { name: 'Insecure', color: '#d2a0c3', main: 'Scared' },
    { name: 'Confused', color: '#d2a0c3', main: 'Scared' },
    { name: 'Threatened', color: '#d2a0c3', main: 'Scared' },
    { name: 'Anxious', color: '#d2a0c3', main: 'Scared' },
    { name: 'Rejected', color: '#d2a0c3', main: 'Scared' },
    { name: 'Optimistic', color: '#dc91a0', main: 'Happy' },
    { name: 'Excited', color: '#dc91a0', main: 'Happy' },
    { name: 'Playful', color: '#dc91a0', main: 'Happy' },
    { name: 'Content', color: '#dc91a0', main: 'Happy' },
    { name: 'Accepted', color: '#dc91a0', main: 'Happy' },
    { name: 'Interested', color: '#dc91a0', main: 'Happy' },
    { name: 'Proud', color: '#ffbe32', main: 'Powerful' },
    { name: 'Strong', color: '#ffbe32', main: 'Powerful' },
    { name: 'Courageous', color: '#ffbe32', main: 'Powerful' },
    { name: 'Appreciated', color: '#ffbe32', main: 'Powerful' },
    { name: 'Faithful', color: '#ffbe32', main: 'Powerful' },
    { name: 'Empowered', color: '#ffbe32', main: 'Powerful' },
    { name: 'Intimate', color: '#41b93c', main: 'Paceful' },
    { name: 'Thoughtful', color: '#41b93c', main: 'Paceful' },
    { name: 'Secure', color: '#41b93c', main: 'Paceful' },
    { name: 'Thankful', color: '#41b93c', main: 'Paceful' },
    { name: 'Trusting', color: '#41b93c', main: 'Paceful' },
    { name: 'Connected', color: '#41b93c', main: 'Paceful' },
    { name: 'Embarrassed', color: '#5fb9e1', main: 'Sad' },
    { name: 'Indifferent', color: '#5fb9e1', main: 'Sad' },
    { name: 'Depressed', color: '#5fb9e1', main: 'Sad' },
    { name: 'Lonely', color: '#5fb9e1', main: 'Sad' },
    { name: 'Vulnerable', color: '#5fb9e1', main: 'Sad' },
    { name: 'Remorseful', color: '#5fb9e1', main: 'Sad' },
  ]

  const items3 = [
    { name: 'Selfish', color: '#f5af87', main: 'Angry' },
    { name: 'Jealous', color: '#f5af87', main: 'Angry' },
    { name: 'Furious', color: '#f5af87', main: 'Angry' },
    { name: 'Irritated', color: '#f5af87', main: 'Angry' },
    { name: 'Skeptical', color: '#f5af87', main: 'Angry' },
    { name: 'Frustrated', color: '#f5af87', main: 'Angry' },
    { name: 'Worthless', color: '#e1c3d7', main: 'Scared' },
    { name: 'Inferior', color: '#e1c3d7', main: 'Scared' },
    { name: 'Perplexed', color: '#e1c3d7', main: 'Scared' },
    { name: 'Nervous', color: '#e1c3d7', main: 'Scared' },
    { name: 'Worried', color: '#e1c3d7', main: 'Scared' },
    { name: 'Excluded', color: '#e1c3d7', main: 'Scared' },
    { name: 'Hopeful', color: '#f0b9be', main: 'Happy' },
    { name: 'Energetic', color: '#f0b9be', main: 'Happy' },
    { name: 'Aroused', color: '#f0b9be', main: 'Happy' },
    { name: 'Joyful', color: '#f0b9be', main: 'Happy' },
    { name: 'Valued', color: '#f0b9be', main: 'Happy' },
    { name: 'Curious', color: '#f0b9be', main: 'Happy' },
    { name: 'Confident', color: '#ffd27d', main: 'Powerful' },
    { name: 'Successful', color: '#ffd27d', main: 'Powerful' },
    { name: 'Creative', color: '#ffd27d', main: 'Powerful' },
    { name: 'Respected', color: '#ffd27d', main: 'Powerful' },
    { name: 'Loyal', color: '#ffd27d', main: 'Powerful' },
    { name: 'Focused', color: '#ffd27d', main: 'Powerful' },
    { name: 'Safe', color: '#9bd27d', main: 'Paceful' },
    { name: 'Relaxed', color: '#9bd27d', main: 'Paceful' },
    { name: 'Serene', color: '#9bd27d', main: 'Paceful' },
    { name: 'Loving', color: '#9bd27d', main: 'Paceful' },
    { name: 'Sensitive', color: '#9bd27d', main: 'Paceful' },
    { name: 'Belonging', color: '#9bd27d', main: 'Paceful' },
    { name: 'Ashamed', color: '#afd7eb', main: 'Sad' },
    { name: 'Bored', color: '#afd7eb', main: 'Sad' },
    { name: 'Miserable', color: '#afd7eb', main: 'Sad' },
    { name: 'Isolated', color: '#afd7eb', main: 'Sad' },
    { name: 'Fragile', color: '#afd7eb', main: 'Sad' },
    { name: 'Guilty', color: '#afd7eb', main: 'Sad' },
  ]

  const onClickItem = (item: any) => {
    console.log(item)
    alert(item.name)
  }

  return (
    <div style={ { position: 'relative', width: '700px', height: '700px', display: 'flex', flexWrap: 'nowrap', alignContent: 'center', alignItems: 'center', justifyContent: 'center' } }>
      <Wheel
        items={ items3 }
        labelRadius={ 0.85 }
        onClickItem={ onClickItem }
        size={ 700 }
        style={ { position: 'absolute', zIndex: 1 } }
      />

      <Wheel
        items={ items2 }
        labelRadius={ 0.75 }
        onClickItem={ onClickItem }
        size={ 480 }
        style={ { position: 'absolute', zIndex: 2 } }
      />

      <Wheel
        items={ items1 }
        labelRadius={ 0.6 }
        onClickItem={ onClickItem }
        size={ 260 }
        style={ { zIndex: 3 } }
      />
    </div>
  )
}
