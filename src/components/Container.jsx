import React from 'react';
import '../styles/zoom.css';
import ReactImageZoom from 'react-image-zoom';



export function Container() {


  const props = {
    width:600,
    
    zoomPosition:'right',
    
    img:'camara1.jpg',
    
    height:450,
    
    scale:0.5,

    opacity: 0.5,
  };
  
  return (
      <div className='test'>
        <div className='container'>
          <div className='container__zoomed_image'>
            <div className='container__zoomed_image_content'>
              <ReactImageZoom  {...props} />
            </div>
          </div>
        </div>
      </div>

    
  );

}