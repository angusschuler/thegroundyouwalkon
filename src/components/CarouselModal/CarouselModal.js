import { makeStyles, useTheme } from '@material-ui/core';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import PropTypes from 'prop-types';
import React from 'react';
import SimpleDialog from '../Modal/Modal';

const styles = makeStyles({
    image: {
        display: "block",
        // width: "auto !important",
        // // padding: "5%",
        // height: "90% !important",
        width: "95% !important",
        height: "95% !important",
        padding: "5%",
        objectFit: "contain",
        overflow: "hidden"
    },
modal: { }
});

function CarouselModal(props) {
    const { open, onClose } = props
    const classes = styles();

    const theme = useTheme();

    return (

        <AutoRotatingCarousel
            open={open} onClose={onClose}
            autoplay={false}

            containerStyle={{ "footer": classes.button }}
        >
            {
                props.images.map(image => {
                    return <Slide
                        media={
                                <img className={classes.image} src={image.src} alt={image.alt} />
                      
                        }
                        mediaBackgroundStyle={{ height: "90%", backgroundColor: theme.palette.primary.light }}
                        style={{ backgroundColor: theme.palette.primary.main }}
                    // subtitle='Just using this will blow your mind.'
                    />
                })
            }

        </AutoRotatingCarousel>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired
};

export default CarouselModal