import { Box, Button, makeStyles, IconButton, Icon, SvgIcon } from "@material-ui/core";
import React, { useState, useLayoutEffect } from 'react';
import CarouselModal from "../../components/CarouselModal/CarouselModal";
import NavBar from '../../components/NavBar/NavBar';
import Theming from "../../components/Theming";
import PageContainer from "../../components/PageContainer/PageContainer";
import { minWidth } from "@material-ui/system";
import { viewport } from "../../helper/Viewport";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const useStyles = makeStyles({
  image: {
    position: "absolute",
    minWidth: "1666px",
    minHeight: "751px",
    display: "block",
    width: "auto",
    height: "100%",
    margin: "auto",
    zIndex: -1,
    left: "50%",
    top: 0,
    transform: "translate(-50%, 0)",
  },

  container: {
    position: "relative",
    minWidth: "1666px",
    minHeight: "751px",
  },

  imageContainer: props => ({
    // width: "1920px",
    // height: "1078px",
    // width: "1666px",
    // height: "751px",
    width: `${props.width}px`,
    height: `${props.height}px`,
    minWidth: "1666px",
    minHeight: "751px",
    left: 0,
    top: 0,
    position: "absolute"
  }),

  buttonContainer: props => ({
    // width: "1920px",
    // height: "1078px",
    // width: "1337px",
    // height: "751px",
    width: `56.27%`,
    height: `${props.height}px`,
    minWidth: "1666px",
    minHeight: "751px",
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translate(-50%, 0)",
  }),

  paperRoot: {
    padding: "16px"
  },
  cameraImage: {
    height: "85.5%",
    width: "100%"
  },

  buttonMain: {
    position: "absolute !important",
    zIndex: 1,
    margin: "-30px !important"
  },

  button_1: {
    left: "3.65% !important",
    top: "10.33% !important",
  },
  button_2: {
    left: "12.55% !important",
    top: "5.2% !important",
  },
  button_3: {
    left: "23.76% !important",
    top: "22.89% !important",
  },
  button_4: {
    left: "27.14% !important",
    top: "14.78% !important",
  },
  button_5: {
    left: "33.08% !important",
    top: "69.88% !important",
  },
  button_6: {
    left: "34.88% !important",
    top: "61.99% !important",
  },
  button_7: {
    left: "39.57% !important",
    top: "71.47% !important",
  },
  button_8: {
    left: "59.87% !important",
    top: "95.05% !important",
  },
  button_9: {
    left: "68.75% !important",
    top: "87.17% !important",
  },
  button_10: {
    left: "73.39% !important",
    top: "91.95% !important",
  },
  button_11: {
    left: "81.21% !important",
    top: "88.67% !important",
  },
  button_12: {
    left: "85.21% !important",
    top: "84.33% !important",
  },
  button_13: {
    left: "86.1% !important",
    top: "77.94% !important",
  },
  button_14: {
    left: "89.1% !important",
    top: "82.73% !important",
  },
  button_15: {
    left: "89.1% !important",
    top: "76.35% !important",
  }
});

function MainPage() {
  const [width, height] = useWindowSize();
  const size = {
    width: width,
    height: height - 48,
  }
  const [open, setOpen] = useState(false)
  const [images, setImages] = useState([])
  const classes = useStyles(size)

  const createButtons = () => {
    const buttonData = [
      {
        style: "button_1",
        action: {
          images: [...Array(2).keys()].map(image => {
            return {
              src: `./Images/15/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_2",
        action: {
          images: [...Array(1).keys()].map(image => {
            return {
              src: `./Images/14/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_3",
        action: {
          images: [...Array(3).keys()].map(image => {
            return {
              src: `./Images/13/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_4",
        action: {
          images: [...Array(1).keys()].map(image => {
            return {
              src: `./Images/12/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_5",
        action: {
          images: [...Array(4).keys()].map(image => {
            return {
              src: `./Images/11/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_6",
        action: {
          images: [...Array(2).keys()].map(image => {
            return {
              src: `./Images/10/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_7",
        action: {
          images: [...Array(1).keys()].map(image => {
            return {
              src: `./Images/9/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_8",
        action: {
          images: [...Array(6).keys()].map(image => {
            return {
              src: `./Images/8/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_9",
        action: {
          images: [...Array(9).keys()].map(image => {
            return {
              src: `./Images/7/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_10",
        action: {
          images: [...Array(12).keys()].map(image => {
            return {
              src: `./Images/6/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_11",
        action: {
          images: [...Array(6).keys()].map(image => {
            return {
              src: `./Images/5/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_12",
        action: {
          images: [...Array(11).keys()].map(image => {
            return {
              src: `./Images/4/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_13",
        action: {
          images: [...Array(5).keys()].map(image => {
            return {
              src: `./Images/3/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_14",
        action: {
          images: [...Array(6).keys()].map(image => {
            return {
              src: `./Images/2/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },
      {
        style: "button_15",
        action: {
          images: [...Array(12).keys()].map(image => {
            return {
              src: `./Images/1/IMG_${image + 1}.JPG`,
              alt: `IMG_${image + 1}.JPG`
            }
          })
        }
      },

    ]

    return (
      buttonData.map(button => {
        return (
          <IconButton large classes={{
            // root: classes.buttonMain,
            root: classes.buttonMain + " " + (classes[button.style] || classes["button_1"])
          }}
            onClick={() => {
              setImages(button.action.images);
              setOpen(true);
            }}
          >
            <Icon fontSize="large">
              <img src="./Camera.png" alt="camera" className={classes.cameraImage} />

            </Icon>
            {/* {button.style} */}
          </IconButton>
        )
      })
    )
  }

  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <Theming>
        <NavBar />
        <PageContainer size={size}>
          <div className={classes.container}>
            <div className={classes.imageContainer}>
              <img src="./Waimakariri-03.jpg" alt="waimak" className={classes.image} />
            </div>
            <div className={classes.buttonContainer}>
              {createButtons()}
            </div>
          </div>

        </PageContainer>


        <CarouselModal images={images} open={open} onClose={() => setOpen(false)} location={"Sample"} />

      </Theming>
    </Box >
  );
}

export default MainPage;
// imageStyle={{
//   position: "absolute",
//   width: "auto",
//   height: "100%",
//   zIndex: -1,
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   overflow: "scroll",
//   direction: "rtl"
// }}