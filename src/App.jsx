import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikePostHoc from './components/HOC/LikePostHoc';
import LikeImgHoc from './components/HOC/LikeImgHoc';
import LikeImgRP from './components/RenderProps/LikeImgRP';
import LikePostRP from './components/RenderProps/LikePostRP';

function App() {
  return (
    <div>
      <h1>Blogs Post Using HOC</h1>
      <LikeImgHoc/>
      <LikePostHoc/> 

      <h1>Blogs Post using render props</h1>
      <LikeImgRP/>  
      <LikePostRP/>  
    </div>
  );
}

export default App;
