// // import React, { Component } from "react";
// // import Button from "@material-ui/core/Button";

// // export class Landing extends Component {
// //   continue = (e) => {
// //     e.preventDefault();
// //     this.props.nextStep();
// //   };

// //   render() {
// //     return (
// //       <React.Fragment>
// //         <style>
// //           {`
// //             .ButtonLanding {
// //                 display: flex;
// //                 flex-direction: column;
// //                 justify-content: center;
// //                 align-items: center;
// //                 height: 150vh; 
// //             }

// //             // .desc h2{
// //             //     color: white;
// //             //     font-family: 'Marker Felt';
// //             //     margin-bottom: 40px;
// //             //     font-size: 120%;
// //             // }
            
// //             `}
// //         </style>
// //         <div className="ButtonLanding">
// //           {/* <div className="desc">
// //             <h2>Click the button below to start building your resume.</h2>
// //           </div> */}
// //           <br />
// //           <Button
// //             color="secondary"
// //             variant="contained"
// //             size="large"
// //             onClick={this.continue}
// //           >
// //             CREATE RESUME{" "}
// //           </Button>
// //         </div>
// //       </React.Fragment>
// //     );
// //   }
// // }

// // export default Landing;
// import { Carousel } from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
// // import Slider from "react-slick";
// import Button from "@material-ui/core/Button";

// export class Landing extends Component {
//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

  
//     render() {
//       return (
//         <React.Fragment>
//           <style>
//             {`
//               .ButtonLanding {
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: center;
//                 align-items: center;
//                 height: 150vh;
//                 position: relative;
//               }
//             `}
//           </style>
//           <div className="ButtonLanding">
//             <CarouselBackground />
//             {/* <div className="desc">
//               <h2>Click the button below to start building your resume.</h2>
//             </div> */}
//             <br />
//             <Button
//               color="secondary"
//               variant="contained"
//               size="large"
//               onClick={this.continue}
//             >
//               CREATE RESUME{" "}
//             </Button>
//           </div>
//         </React.Fragment>
//       );
//     }
// }

// export default Landing;
// import React, { Component } from "react";
// import Slider from "react-slick";
// import Button from "@material-ui/core/Button";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export class Landing extends Component {
//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1000,
//       pauseOnHover: true,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             initialSlide: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };

//     return (
//       <div className="ButtonLanding">
//         <Slider {...settings}>
//           <div>
//             <img src="https://via.placeholder.com/800x500" alt="slide 1" />
//           </div>
//           <div>
//             <img src="https://via.placeholder.com/800x500" alt="slide 2" />
//           </div>
//           <div>
//             <img src="https://via.placeholder.com/800x500" alt="slide 3" />
//           </div>
//         </Slider>
//         <div style={{ display: "flex", justifyContent: "center" }}>
//         <Button
//           color="secondary"
//           variant="contained"
//           size="large"
//           onClick={this.continue}
//         >
//           CREATE RESUME{" "}
//         </Button>
//       </div>
//       </div>
//     );
//   }
// }

// export default Landing;
import React, { Component } from "react";
import Slider from "react-slick";
import Button from "@material-ui/core/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Landing extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="ButtonLanding" style={{ padding: "0 30%" }}>
        <Slider {...settings}>
          <div style={{ height: "100%", width: "200px" }}>
            <img src="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg" alt="slide 1" style={{ height: "70%", width: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ height: "100%", width: "200px" }}>
            <img src="https://marketplace.canva.com/EAFBL8KRmSA/1/0/1131w/canva-white-simple-student-cv-resume-NXs7xSf0K8I.jpg" alt="slide 2" style={{ height: "70%", width: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ height: "100%", width: "200px" }}>
            <img src="https://d.novoresume.com/images/doc/minimalist-resume-template.png" alt="slide 3" style={{ height: "70%", width: "100%", objectFit: "cover" }} />
          </div>
        </Slider>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={this.continue}
          >
            CREATE RESUME{" "}
          </Button>
        </div>
      </div>
    );
  }
}

export default Landing;