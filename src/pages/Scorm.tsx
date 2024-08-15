import ExampleComponent from '@upandgo/react-scorm-container'
const Scorm = () => {
const handleCommit = () => {
  
    }
  return (
    <div style={{ minHeight: "100vh" }}>
        <ExampleComponent
          bridgeUrl="https://www.google.com/?hl=ar"
          manifestUrl='https://www.google.com/?hl=ar'
          initialState={{}}
          commitCallback={handleCommit}
        />
      </div>
  )
}

export default Scorm