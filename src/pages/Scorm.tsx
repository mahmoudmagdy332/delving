import ExampleComponent from '@upandgo/react-scorm-container'
import { useEffect, useState } from 'react'
import { startLessonQuery } from '../app/services/queries';
import { useParams } from 'react-router-dom';
const Scorm = () => {

  const {ScormId}=useParams();
  const [scorm,setScorm]=useState("")
  const {refetch} = startLessonQuery(ScormId);
  useEffect(()=>{
    const scorm_url=localStorage.getItem('scorm_url')
    if(scorm_url){
    setScorm(scorm_url)
    }
    
  },[])
  useEffect(()=>{
    refetch()
  },[ScormId])
const handleCommit = () => {
  
    }
  
  return (
  <div className=''>
  <div style={{ minHeight: "100vh",paddingTop:'20px' }}>
        <ExampleComponent
          bridgeUrl={scorm?scorm:""}
          manifestUrl={scorm?scorm:""}
          initialState={{}}
          commitCallback={handleCommit}
          width='100%'
          
        />
      </div>
  </div>
  )
}

export default Scorm