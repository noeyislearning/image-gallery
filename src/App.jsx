import { useState, useEffect } from "react"

/** Components */
import ImageCard from "./components/common/cards/ImageCard";
import PageNumbers from "./components/layouts/pagination/PageNumbers"; 

/** API */
import { fetchCuratedPhotos } from "./api/pexelsAPI"

function App() {
  const [curatedPhotos, setCuratedPhotos] = useState([]);
  const [perPage, setPerPage] = useState(6) // Number of photos per page
  const [currentPage, setCurrentPage] = useState(1) // Current page number
  const [totalPages, setTotalPages] = useState(5) // Total number of pages
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        const data = await fetchCuratedPhotos(currentPage, perPage);
        setCuratedPhotos(data.photos);
        setTotalPages(Math.ceil(data.total_results / perPage));
      } catch (error) {
        console.error("Error fetching curated photos:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is done
      }
    };

    fetchData();
  }, [currentPage, perPage]);

  /** Paginations */
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  

  return (
    <div className="w-full h-full mx-auto justify-center flex">
      <div className="py-8 w-full max-w-3xl flex flex-col">
        <div className="w-full flex flex-col items-center">
          <div className="text-2xl font-medium">Curated Photos</div>
          <span className="text-sm">Powered by Pexels</span>
        </div>
        {/* Gallery */}
        <div className="px-4 pt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? ( // Render "Loading..." when loading state is true
            <div className="w-full flex justify-center">
              <div className="text-sm text-gray-500">
                Loading...
              </div>
            </div>
          ) : (
            curatedPhotos.map((photo) => (
              <ImageCard key={photo.id} photo={photo} />
            ))
          )}
        </div>
        {/* Pagination Controls */}
        <div className="py-2 flex justify-center mt-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 mr-2 rounded border border-dashed border-black"
          >
            Prev
          </button>
          <PageNumbers currentPage={currentPage} totalPages={totalPages} goToPage={setCurrentPage} />
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 ml-2 rounded border border-dashed border-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
