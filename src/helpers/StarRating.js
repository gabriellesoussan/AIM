import { FaStar, FaStarHalf } from "react-icons/fa";

export default function StarRating ({rating}) {

    if (rating == '3.5 Stars' ) {
        return(
            <>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStarHalf size={25}/>
            </>
        )
    }

    if (rating == '4.0 Stars' ) {
        return(
            <>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            </>
        )
    }

    if (rating == '4.5 Stars' ) {
        return(
            <>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStarHalf size={25}/>
            </>
        )
    }

    if (rating == '5.0 Stars' ) {
        return(
            <>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            </>
        )
    }

}