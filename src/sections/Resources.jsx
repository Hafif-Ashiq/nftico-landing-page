import React from 'react'
import { Title } from '../components'
import ResourcesTile from '../components/ResourcesTile'
import { resourcesArray } from '../constants'

const Resources = () => {
    
  return (
    <section className='padding-section  flex flex-col gap-[100px] '>
        <Title heading={"Resources for Getting Started"} />

         <div className='flex gap-[32px] justify-between items-center h-[680px]'>
            <ResourcesTile 
                heading={resourcesArray[0].heading} 
                img={resourcesArray[0].img}
                by={resourcesArray[0].by}
                byImg={resourcesArray[0].byImg}
                date={resourcesArray[0].date}
                isBig={true}
                tags={resourcesArray[0].tags}
                numComments={resourcesArray[0].numComments}
            />
            <div className='flex-1 flex w-full flex-col gap-[32px] justify-start h-full items-center'> 
            <ResourcesTile 
                heading={resourcesArray[1].heading} 
                img={resourcesArray[1].img}
                by={resourcesArray[1].by}
                byImg={resourcesArray[1].byImg}
                date={resourcesArray[1].date}
                isBig={false}
                tags={resourcesArray[1].tags}
                numComments={resourcesArray[1].numComments}
            />
            <ResourcesTile 
                heading={resourcesArray[2].heading} 
                img={resourcesArray[2].img}
                by={resourcesArray[2].by}
                byImg={resourcesArray[2].byImg}
                date={resourcesArray[2].date}
                isBig={false}
                tags={resourcesArray[2].tags}
                numComments={resourcesArray[2].numComments}
            />
            </div> 
        </div>
    </section>
  )
}

export default Resources