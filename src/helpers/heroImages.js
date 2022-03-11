

// Import the Cloudinary class
import {Cloudinary} from '@cloudinary/url-gen';

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dyej4hpgt'
  },
  url: {
    secure: true // force https, set to false to force http
  }
});

export const heroImages = (id) => {
    
    const heroImagesURL = cld.image(`heroes/${id}`);
    
    return heroImagesURL.toURL();
}



// export const heroImages = require.context('../../public/assets/heroes', true );

// const url = `https://984454644236667:JraX5pVBcjL6esWTO37GF_fPPLE@api.cloudinary.com/v1_1/dyej4hpgt/resources/image/:heroes/`;




