import logo from './images/hai-feedback-icon.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* make the logo 100px */}
        
        <img src={logo} className="Hai-logo" alt="logo" width={200} />
        <br />
        <p>Improve your models with human feedback.</p>

        {/* slightly smaller text, with white font  */}
        <br />
        <p class="text-sm text-gray-50">
          Upload your fine-tuning dataset to get started:

        </p>
        {/* add a space */}
        


        {/* make it a bit less wide than the full screen  */}
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="button-div">
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="upload_multiple_files"
            type="file"
            multiple
          />
          {/* add a small space */}
          <br />
          {/* <p class="text-sm text-gray-500 dark:text-gray-400">
            Hold down the Ctrl (windows) / Command (Mac) button to select
            multiple files.
          </p> */}

          {/* add a button with a round border, and when I click it it logs the filename to console. */}
          {/* when i click the button it calls uploadFile function */}
          <button
            onClick={uploadFile}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </div>
      </header>
    </div>
  )

  // get the name of the file and log to console
  function uploadFile() {
    // get the file name
    var file = document.getElementById('upload_multiple_files').files[0]
    console.log('uploaded file name:\n', file.name)
  }

  // when I click the button, it should log the filename to console
}

export default App
