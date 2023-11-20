import { useEffect, useState } from "react"
import { fetchRequest } from "./Api";
import { CirclesWithBar } from 'react-loader-spinner'


import { Searchbar } from "./Searchbar/Searcbar";
import { ImageGallery } from "./ImageGalery/ImageGallery";
import { Button } from "./Btn/Button";

export const App = () => {

   const [query, setQuery] = useState('');
   const [images, setImages] = useState([]);
   const [page, setPage] = useState(1);
   const [isLoading, setisLoading] = useState(false);

   useEffect(() => {
     async function getImages() {
       
       if (query === '') {
         return;
       }

       const indexOfSlash = query.indexOf('/')
         const queryForRequest = query.slice(indexOfSlash + 1, query.length)
         setisLoading(true)
         try {
           const photos = await fetchRequest(queryForRequest, page)
           const res = photos.hits;
           setImages(prevState => prevState.concat(res));
         } catch (err) {
           console.log(err)
         } finally {
           setisLoading(false);
         }
       };
     getImages()
   }, [query, page]);

  const updateFindingPhoto = searching => {
    setQuery(`${Date.now()}/${searching.query.trim()}`)
    setImages([]);
    setPage(1);
    setisLoading(false)
  }

  const handleLoadMore = () => {
    setisLoading(true);
    setPage(prevPage => prevPage + 1);
  }

      return (
    <div>
          <Searchbar onClick={e => updateFindingPhoto(e)}></Searchbar>
          {isLoading && (<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
          />)};
        
          {images.length > 0 && (<ImageGallery inf={images}>
          </ImageGallery>)}
          {images.length > 0 && (<Button onClick={handleLoadMore}></Button>)}
    </div>
  );

  }

