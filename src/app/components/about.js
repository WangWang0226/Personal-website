export default function About() {
    return (
        <div id="about" className="flex flex-col md:flex-row items-center justify-between p-20 bg-white">
          <div className="md:w-1/2 flex justify-center">
            <img src="/images/avatar.jpeg" alt="My Avatar" className="rounded-full w-3/4" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
            </p>
            <div className="mb-4">
              <div className="flex justify-between">
                <span>Adobe Photoshop</span>
                <span>80%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span>HTML / CSS</span>
                <span>95%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span>JavaScript</span>
                <span>88%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span>WordPress</span>
                <span>89%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
          </div>
          
        </div>
      );
}