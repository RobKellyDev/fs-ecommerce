import React from 'react';


const SmallHero = (image) => (

    <div className="col-12">
      <img 
        style={{width: "100%", objectFit: "cover"}}
        src={image.banner} 
        width="2048" height={image.height}
        alt={image.alt}
        className={image.className}

      />
    </div>  

  
)

export default SmallHero;