import React, { useEffect, useState } from 'react'
import { videoSingle } from '@/infra/services/mindflics/videos'


async function getVideoSingle(videoId: any, token: any) {
  try {
    const response =  await videoSingle(videoId, token)
    return response
  } catch (error:any) {
    console.log(error.response)
    return error.response
  }
}
/*
function b64toBlob(b64Data: string, contentType: string, sliceSize: number | undefined) {
    contentType = contentType || ''
    sliceSize = sliceSize || 512
  
    const byteCharacters = atob(b64Data)
    const byteArrays = []
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize)
  
      const byteNumbers = new Array(slice.length)
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i)
      }
  
      const byteArray = new Uint8Array(byteNumbers)
  
      byteArrays.push(byteArray)
    }
  
    const blob = new Blob(byteArrays, { type: contentType })
    return blob
  }
*/

export function VideoSingle( dataParent: any) {

    const [dataVideoSingle, setDataVideoSingle] = useState<any>(null)
    //const [dataStatus, setDataStatus] = useState(null)
    //const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchVideoSingle = async () => {

            setDataVideoSingle(null)
            //setDataStatus(null)
            //setIsLoading(true)
            try {
                const response = await getVideoSingle(dataParent?.dataIdVideoSingle, dataParent?.dataTokenVideoSingle)
                //const videoBase = btoa(unescape(encodeURIComponent(response)))
                //const videoBlob = b64toBlob(response, 'video/mp4', 512)
                //console.log('videoBase')
                //console.log(videoBase)
                //console.log('videoBlob')
                //console.log(videoBlob)

                const url = URL.createObjectURL(new Blob([response], { type:'text/html' }))
                console.log(url)
                setDataVideoSingle(response)
                //setDataStatus(status)
            } catch (error: any) {
                if (error.name === 'AbortError') {
                console.log('Fetch aborted')
                } else {
                console.error('Error fetching data:', error)
                }
            }
        }
        fetchVideoSingle()
      }, [])

        if(!dataVideoSingle) {
            return (
              <h1>Loading...</h1>
            )
        } else {
            return (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                autoPlay
                controls
                height="240"
                width="320"
              >
                <source src={ dataVideoSingle } type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )
        }

        

}